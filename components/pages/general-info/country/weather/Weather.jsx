import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import Image from "next/image"

function Weather({ country, weatherInfo, countryURLCase }) {
  const place = weatherInfo?.place
  const currentTime = weatherInfo?.currentTime
  const currentWeather = weatherInfo?.currentWeather
  const currentTemperature = weatherInfo?.currentTemperature
  const windSpeed = `${weatherInfo?.windSpeed}, ${weatherInfo?.windDegree}`
  const humidity = weatherInfo?.humidity

  return (
    <>
      <AdsHeaderBanner />

      {weatherInfo && (
        <>
          <div className="weather-comparison">
            <h2 className="pages-h2">Weather Information</h2>
          </div>

          <div className="weather-factors-comparison">
            <table className="indicators-single-country-divs">
              <thead>
                <tr className="first-tr">
                  <th>
                    <div className="heading-map-name-flag">
                      <div className="right-indicator">
                        <Image
                          src="/images/indicators-right-image.png"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                          alt="Image representing an indicator"
                        />
                      </div>

                      <div className="indicator-text">Indicators</div>

                      <div className="left-indicator">
                        <Image
                          src="/images/indicators-left-image.png"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                          alt="Image illustrating an indicator"
                        />
                      </div>
                    </div>
                  </th>

                  <th>
                    <div className="heading-map-name-flag">
                      <div className="first-entity-map-pages-comparison">
                        <Image
                          src={`/images/${countryURLCase}-map-small.png`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                          alt={`Pictorial representation of map of ${countryURLCase}`}
                        />
                      </div>

                      <div className="first-entity-name-pages-comparison">
                        {country}
                      </div>

                      <div className="first-entity-flag-pages-comparison">
                        <Image
                          src={`/images/${countryURLCase}-flag-small.png`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                          alt={`Image illustrating the flag of ${countryURLCase}`}
                        />
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
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
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                        alt="Visual representation of place of any country"
                      />
                    </div>
                  </td>
                  <td className="place-weather-answer-first-entity all-indicator-answers">
                    {place ?? 'Yet to Update'}{' '}
                  </td>
                </tr>
                <tr>
                  <td className="basic-info">
                    <div className="all-indicators">Current Time</div>
                    <div className="basic-information-images">
                      <Image
                        src="/images/current-time-image.png"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                        alt="Visual representation of current time of any specific country"
                      />
                    </div>
                  </td>
                  <td className="current-time-answer-first-entity all-indicator-answers">
                    {currentTime ?? 'Yet to Update'}
                  </td>
                </tr>
                <tr>
                  <td className="basic-info">
                    <div className="all-indicators">Current Weather</div>
                    <div className="basic-information-images">
                      <Image
                        src="/images/current-weather-image.png"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                        alt="Visual representation of current weather of any specific place in a country"
                      />
                    </div>
                  </td>
                  <td className="current-weather-answer-first-entity all-indicator-answers">
                    {currentWeather ?? 'Yet to Update'}
                  </td>
                </tr>

                <tr>
                  <td className="basic-info">
                    <div className="all-indicators">Current Temperature</div>
                    <div className="basic-information-images">
                      <Image
                        src="/images/current-temperature-image.png"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                        alt="Visual representation of current temperature of any specific place in a country"
                      />
                    </div>
                  </td>
                  <td className="current-temperature-answer-first-entity all-indicator-answers">
                    {currentTemperature ?? 'Yet to Update'}
                  </td>
                </tr>

                <tr>
                  <td className="basic-info">
                    <div className="all-indicators">Wind Speed</div>
                    <div className="basic-information-images">
                      <Image
                        src="/images/wind-speed-image.png"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                        alt="Visual representation of Speed of Wind Flowing of any specific place in a country"
                      />
                    </div>
                  </td>
                  <td>
                    <span className="wind-speed-degree-answer-first-entity all-indicator-answers">
                      {windSpeed ?? 'Yet to Update'}
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="basic-info">
                    <div className="all-indicators">Humidity</div>
                    <div className="basic-information-images">
                      <Image
                        src="/images/humidity-image.png"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                        alt="Visual representation of Humidity of any specific place in a country"
                      />
                    </div>
                  </td>
                  <td className="humidity-answer-first-entity all-indicator-answers">
                    {humidity ?? 'Yet to Update'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
}

export default Weather