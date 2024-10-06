import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner";
import Image from "next/image";

async function WeatherComparison({ country1, country2, country1WeatherInfo, country2WeatherInfo, country1URLCase, country2URLCase }) {
  const country1Place = country1WeatherInfo?.place
  const country1CurrentTime = country1WeatherInfo?.currentTime
  const country1CurrentWeather = country1WeatherInfo?.currentWeather
  const country1CurrentTemperature = country1WeatherInfo?.currentTemperature
  const country1WindSpeed = country1WeatherInfo?.windSpeed && country1WeatherInfo?.windDegree ? `${country1WeatherInfo?.windSpeed}, ${country1WeatherInfo?.windDegree}` : 'Yet to Update'
  const country1Humidity = country1WeatherInfo?.humidity
  const country1WeatherImage = country1WeatherInfo?.weatherImage

  const country2Place = country2WeatherInfo?.place
  const country2CurrentTime = country2WeatherInfo?.currentTime
  const country2CurrentWeather = country2WeatherInfo?.currentWeather
  const country2CurrentTemperature = country2WeatherInfo?.currentTemperature
  const country2WindSpeed = country2WeatherInfo?.windSpeed && country2WeatherInfo?.windDegree ? `${country2WeatherInfo?.windSpeed}, ${country2WeatherInfo?.windDegree}` : 'Yet to Update'
  const country2Humidity = country2WeatherInfo?.humidity
  const country2WeatherImage = country2WeatherInfo?.weatherImage

  return (
    <>
      <div className="weather-comparison">
        <h2 className="pages-h2">Weather Comparison</h2>
      </div>

      <div className="weather-factors-comparison">
        <table className="indicators-first-entity-and-second-entity-div1">
          <thead>
            <tr className="first-tr">
              <th>
                <div className="heading-map-name-flag">
                  <div className="right-indicator">
                    <Image
                      src="/images/indicators-right-image.png"
                      fill
                      alt="Image representing an indicator"
                    />
                  </div>
                  <div className="indicator-text">Indicators</div>
                  <div className="left-indicator">
                    <Image
                      src="/images/indicators-left-image.png"
                      fill
                      alt="Image illustrating an indicator"
                    />
                  </div>
                </div>
              </th>

              <th>
                <div className="heading-map-name-flag">
                  <div className="first-entity-map-pages-comparison">
                    <Image
                      src={`/images/${country1URLCase}-map-small.png`}
                      fill
                      alt={`Pictorial representation of map of ${country1URLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {country1}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${country1URLCase}-flag-small.png`}
                      fill
                      alt={`Image illustrating the flag of ${country1URLCase}`}
                    />
                  </div>
                </div>
              </th>

              <th>
                <div className="heading-map-name-flag">
                  <div className="second-entity-map-pages-comparison">
                    <Image
                      src={`/images/${country2URLCase}-map-small.png`}
                      fill
                      alt={`Pictorial representation of map of ${country2URLCase}`}
                    />
                  </div>

                  <div className="second-entity-name-pages-comparison">
                    {' '}
                    {country2}{' '}
                  </div>

                  <div className="second-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${country2URLCase}-flag-small.png`}
                      fill
                      alt={`Image illustrating the flag of ${country2URLCase}`}
                    />
                  </div>
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="four-rem-height-td"> </td>
              <td colSpan="2" className="four-rem-height-td">
                {' '}
                <strong>[ LATEST WEATHER DATA ]</strong>{' '}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">Place</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/place-image.png"
                    fill
                    alt="Visual representation of place of any country"
                  />
                </div>
              </td>
              <td className="place-weather-answer-first-entity all-indicator-answers">
                {country1Place ?? 'Yet to Update'}{' '}
              </td>
              <td className="place-weather-answer-second-entity all-indicator-answers">
                {country2Place ?? 'Yet to Update'}{' '}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">Current Time</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/current-time-image.png"
                    fill
                    alt="Visual representation of current time of any specific country"
                  />
                </div>
              </td>
              <td className="current-time-answer-first-entity all-indicator-answers">
                {country1CurrentTime ?? 'Yet to Update'}
              </td>
              <td className="current-time-answer-second-entity all-indicator-answers">
                {country2CurrentTime ?? 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">Current Weather</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/current-weather-image.png"
                    fill
                    alt="Visual representation of current weather of any specific place in a country"
                  />
                </div>
              </td>
              <td className="current-weather-answer-first-entity all-indicator-answers">
                {country1CurrentWeather ? (
                  <>
                    {country1CurrentWeather}
                    <span>
                      {country1WeatherImage && <Image src={`/images/${country1WeatherImage}.png`} height='50' width='50' />}
                    </span>

                  </>
                ) : 'Yet to Update'}
              </td>
              <td className="current-weather-answer-second-entity all-indicator-answers">
                {country2CurrentWeather ? (
                  <>
                    {country2CurrentWeather}
                    <span>
                      {country2WeatherImage && <Image src={`/images/${country2WeatherImage}.png`} height='50' width='50' />}
                    </span>

                  </>
                ) : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Current Temperature</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/current-temperature-image.png"
                    fill
                    alt="Visual representation of current temperature of any specific place in a country"
                  />
                </div>
              </td>
              <td className="current-temperature-answer-first-entity all-indicator-answers">
                {country1CurrentTemperature ?? 'Yet to Update'}
              </td>
              <td className="current-temperature-answer-second-entity all-indicator-answers">
                {country2CurrentTemperature ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Wind Speed</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/wind-speed-image.png"
                    fill
                    alt="Visual representation of Speed of Wind Flowing of any specific place in a country"
                  />
                </div>
              </td>
              <td>{country1WindSpeed ?? 'Yet to Update'}</td>

              <td>{country2WindSpeed ?? 'Yet to Update'}</td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Humidity</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/humidity-image.png"
                    fill
                    alt="Visual representation of Humidity of any specific place in a country"
                  />
                </div>
              </td>
              <td className="humidity-answer-first-entity all-indicator-answers">
                {country1Humidity ?? 'Yet to Update'}
              </td>
              <td className="humidity-answer-second-entity all-indicator-answers">
                {country2Humidity ?? 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <AdsHeaderBanner />
    </>
  );
}

export default WeatherComparison;
