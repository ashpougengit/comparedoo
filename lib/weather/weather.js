import moment from 'moment-timezone';
import { Capitalize } from '../format/format';

const weatherApiKey = '811577fe36df09999d6bc1165ca5b678';
const timeZoneApiKey = 'W7CD8TVRJ07R';
const weatherBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const timeZoneBaseUrl = 'http://api.timezonedb.com/v2.1/get-time-zone';

// Helper function to pause execution for a given time
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// export const fetchWeatherInfo = async (city, cityCode, retries = 3, backoff = 1000) => {
//   // const weatherUrl = `${weatherBaseUrl}?q=${city === 'Washington, D.C.' ? 'new york' : city}&appid=${weatherApiKey}&units=metric`;
//   const weatherUrl = `${weatherBaseUrl}?q=${encodeURIComponent(city === 'Washington, D.C.' ? 'New York' : city === 'Frankfort' ? 'Louisville' : city)},${encodeURIComponent(cityCode)}&appid=${weatherApiKey}&units=metric`;

//   try {
//     const weatherResponse = await fetch(weatherUrl, {
//       headers: {
//         'Cache-Control': 'no-cache'
//       }
//     });

//     if (weatherResponse.status === 429) {
//       if (retries > 0) {
//         await sleep(backoff);
//         return fetchWeatherInfo(city, cityCode, retries - 1, backoff * 2);
//       } else {
//         throw new Error('Too Many Requests. Please try again later.');
//       }
//     }

//     const weatherData = await weatherResponse.json();
//     if (!weatherResponse.ok) {
//       throw new Error(weatherData.message);
//     }

//     const latitude = weatherData.coord.lat;
//     const longitude = weatherData.coord.lon;

//     const timeZoneUrl = `${timeZoneBaseUrl}?key=${timeZoneApiKey}&format=json&by=position&lat=${latitude}&lng=${longitude}&_=${new Date().getTime()}`;
//     const timeZoneResponse = await fetch(timeZoneUrl, {
//       headers: {
//         'Cache-Control': 'no-cache'
//       }
//     });

//     if (timeZoneResponse.status === 429) {
//       if (retries > 0) {
//         await sleep(backoff);
//         return fetchWeatherInfo(city, cityCode, retries - 1, backoff * 2);
//       } else {
//         throw new Error('Too Many Requests. Please try again later.');
//       }
//     }

//     const timeZoneData = await timeZoneResponse.json();
//     if (!timeZoneResponse.ok) {
//       throw new Error(timeZoneData.message);
//     }

//     const currentTime = moment.tz(timeZoneData.formatted, timeZoneData.zoneName).format('hh:mm A');
//     const currentDate = moment.tz(timeZoneData.zoneName).format('dddd, Do MMMM, YYYY');
//     const sunrise = moment.unix(weatherData.sys.sunrise).tz(timeZoneData.zoneName).format('hh:mm A');
//     const sunset = moment.unix(weatherData.sys.sunset).tz(timeZoneData.zoneName).format('hh:mm A');

//     const result = {
//       place: weatherData.name,
//       currentTime: currentTime,
//       currentDate: currentDate,
//       currentWeather: Capitalize(weatherData.weather[0].description),
//       currentTemperature: `${weatherData.main.temp.toFixed(2)} Degree Celsius`,
//       sunrise: sunrise,
//       sunset: sunset,
//       windSpeed: `${weatherData.wind.speed} km/hr`,
//       windDegree: `${weatherData.wind.deg} Degree`,
//       humidity: `${weatherData.main.humidity} %`
//     };

//     return result;

//   } catch (error) {
//     console.error('Error fetching weather data:', error);
//     return null;
//   }
// };
export const fetchWeatherInfo = async (city, countryCode, stateCode = '', retries = 3, backoff = 1000) => {
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

    // Get latitude and longitude for timezone data
    const { lat: latitude, lon: longitude } = weatherData.coord;

    const timeZoneUrl = `${timeZoneBaseUrl}?key=${timeZoneApiKey}&format=json&by=position&lat=${latitude}&lng=${longitude}&_=${new Date().getTime()}`;
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
      humidity: `${weatherData.main.humidity} %`
    };

    return result;

  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};

export const fetchWeatherInfoSequentially = async (city1, country1Code, city1Code, city2, country2Code, city2Code) => {
  const entity1WeatherInfo = await fetchWeatherInfo(city1,country1Code, city1Code);
  await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2000 mili-second due to openweather api limitation     
  const entity2WeatherInfo = await fetchWeatherInfo(city2,country2Code, city2Code);
  return [entity1WeatherInfo, entity2WeatherInfo];
};