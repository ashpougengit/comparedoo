import { Capitalize, toURLFormat } from '@/lib/format/format';
import moment from 'moment-timezone';
import { NextResponse } from 'next/server';

const weatherApiKey = process.env.WEATHER_API_KEY;
const timezoneApiKey = process.env.TIMEZONE_API_KEY;
const weatherBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const timeZoneBaseUrl = 'https://api.timezonedb.com/v2.1/get-time-zone';

// Helper function to pause execution for a given time
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const weatherImages = ['clear-sky', 'clouds', 'broken-clouds', 'overcast-clouds', 'drizzle', 'drizzle-rain', 'heavy-snow', 'light-rain', 'light-snow', 'mist', 'haze', 'moderate-rain', 'sand', 'sleet', 'snow', 'sunny', 'thunderstrom', 'tornado', 'very-heavy-rain']

// Function to find the most suitable weather image based on the description
const getWeatherImage = (description) => {
    const formattedDescription = description.toLowerCase().replace(/\s+/g, '-');

    //  Check for an exact match in weatherImages
    let weatherImage = weatherImages.find(image => image === formattedDescription);

    //  check for the most relevant word match
    if (!weatherImage) {
        weatherImage = weatherImages.find(image => formattedDescription.includes(image));
    }

    //  default image
    if (!weatherImage) {
        weatherImage = '';
    }

    return weatherImage;
};

const fetchWeatherInfo = async (city, countryCode, stateCode = '', retries = 3, backoff = 1000) => {
    // Construct the location query string
    const locationQuery = stateCode
        ? `${encodeURIComponent(city)},${encodeURIComponent(stateCode)},${encodeURIComponent(countryCode)}`
        : `${encodeURIComponent(city)},${encodeURIComponent(countryCode)}`;

    const weatherUrl = `${weatherBaseUrl}?q=${locationQuery}&appid=${weatherApiKey}&units=metric`;

    try {
        const weatherResponse = await fetch(weatherUrl, {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });

        // Retry mechanism for handling API rate limiting
        if (weatherResponse.status === 429) {
            if (retries > 0) {
                await sleep(backoff);
                return fetchWeatherInfo(city, countryCode, stateCode, retries - 1, backoff * 2);
            } else {
                throw new Error('Too Many Requests. Please try again later.');
            }
        }

        const weatherData = await weatherResponse.json();
        if (!weatherResponse.ok) {
            throw new Error(weatherData.message);
        }
        // weatherData.weather[0].description
        const weatherImage = weatherImages.find(img => img === toURLFormat(weatherData.weather[0].description))

        // Get latitude and longitude for timezone data
        const { lat: latitude, lon: longitude } = weatherData.coord;

        const timeZoneUrl = `${timeZoneBaseUrl}?key=${timezoneApiKey}&format=json&by=position&lat=${latitude}&lng=${longitude}&_=${new Date().getTime()}`;
        const timeZoneResponse = await fetch(timeZoneUrl, {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });

        // Retry mechanism for handling API rate limiting for timezone data
        if (timeZoneResponse.status === 429) {
            if (retries > 0) {
                await sleep(backoff);
                return fetchWeatherInfo(city, countryCode, stateCode, retries - 1, backoff * 2);
            } else {
                throw new Error('Too Many Requests. Please try again later.');
            }
        }

        const timeZoneData = await timeZoneResponse.json();
        if (!timeZoneResponse.ok) {
            throw new Error(timeZoneData.message);
        }

        // Format current time and date based on timezone data
        const currentTime = moment.tz(timeZoneData.formatted, timeZoneData.zoneName).format('hh:mm A');
        const currentDate = moment.tz(timeZoneData.zoneName).format('dddd, Do MMMM, YYYY');
        const sunrise = moment.unix(weatherData.sys.sunrise).tz(timeZoneData.zoneName).format('hh:mm A');
        const sunset = moment.unix(weatherData.sys.sunset).tz(timeZoneData.zoneName).format('hh:mm A');

        const result = {
            place: weatherData.name,
            currentTime,
            currentDate,
            currentWeather: Capitalize(weatherData.weather[0].description),
            currentTemperature: `${weatherData.main.temp.toFixed(2)} Degree Celsius`,
            sunrise,
            sunset,
            windSpeed: `${weatherData.wind.speed} km/hr`,
            windDegree: `${weatherData.wind.deg} Degree`,
            humidity: `${weatherData.main.humidity} %`,
            weatherImage: getWeatherImage(weatherData.weather[0].description)
        };

        return result;

    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
};

const fetchWeatherInfoSequentially = async (city1='', country1Code='', city1Code='', city2='', country2Code='', city2Code='') => {
    const entity1WeatherInfo = await fetchWeatherInfo(city1, country1Code, city1Code);
    await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2000 mili-second due to openweather api limitation     
    const entity2WeatherInfo = await fetchWeatherInfo(city2, country2Code, city2Code);
    return [entity1WeatherInfo || null, entity2WeatherInfo || null];
};

export async function POST(request) {
    // Check for the internal request token
    const internalRequestHeader = request.headers.get('x-internal-request');
    if (!internalRequestHeader || internalRequestHeader !== process.env.INTERNAL_API_TOKEN) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Extract the request body (containing city and country codes)
    const { entity1CapitalCity, entity1Country, entity1Region, entity2CapitalCity, entity2Country, entity2Region } = await request.json();

    // Call the weather API with the extracted values
    try {
        const weatherInfo = await fetchWeatherInfoSequentially(entity1CapitalCity, entity1Country, entity1Region, entity2CapitalCity, entity2Country, entity2Region);
        return NextResponse.json({ weatherInfo }, { status: 200 });
    } catch (error) {
        console.error('Error fetching weather info:', error);
        return NextResponse.json({ error: 'Failed to fetch weather information' }, { status: 500 });
    }
}