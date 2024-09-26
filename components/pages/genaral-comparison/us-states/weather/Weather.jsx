import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import Image from "next/image"

function Weather({ state1, state2, state1WeatherInfo, state2WeatherInfo, state1URLCase, state2URLCase }) {
    const state1Place = state1WeatherInfo?.place
    const state1CurrentTime = state1WeatherInfo?.currentTime
    const state1CurrentWeather = state1WeatherInfo?.currentWeather
    const state1CurrentTemperature = state1WeatherInfo?.currentTemperature
    const state1WindSpeed = state1WeatherInfo?.windSpeed && state1WeatherInfo?.windDegree ? `${state1WeatherInfo?.windSpeed}, ${state1WeatherInfo?.windDegree}` : 'Yet to Update'
    const state1Humidity = state1WeatherInfo?.humidity

    const state2Place = state2WeatherInfo?.place
    const state2CurrentTime = state2WeatherInfo?.currentTime
    const state2CurrentWeather = state2WeatherInfo?.currentWeather
    const state2CurrentTemperature = state2WeatherInfo?.currentTemperature
    const state2WindSpeed = state2WeatherInfo?.windSpeed && state2WeatherInfo?.windDegree ? `${state2WeatherInfo?.windSpeed}, ${state2WeatherInfo?.windDegree}` : 'Yet to Update'
    const state2Humidity = state2WeatherInfo?.humidity

    return (
      <>
        <AdsHeaderBanner />

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
                        layout="fill"
                        objectFit="contain"
                        alt="Image representing an indicator"
                      />
                    </div>

                    <div className="indicator-text">Indicators</div>

                    <div className="left-indicator">
                      <Image
                        src="/images/indicators-left-image.png"
                        layout="fill"
                        objectFit="contain"
                        alt="Image illustrating an indicator"
                      />
                    </div>
                  </div>
                </th>

                <th>
                  <div className="heading-map-name-flag">
                    <div className="first-entity-map-pages-comparison">
                      <Image
                        src={`/images/${state1URLCase}-map-small.png`}
                        layout="fill"
                        objectFit="contain"
                        alt={`Pictorial representation of map of ${state1URLCase}`}
                      />
                    </div>

                    <div className="first-entity-name-pages-comparison">
                      {state1}
                    </div>

                    <div className="first-entity-flag-pages-comparison">
                      <Image
                        src={`/images/${state1URLCase}-flag-small.png`}
                        layout="fill"
                        objectFit="contain"
                        alt={`Image illustrating the flag of ${state1URLCase}`}
                      />
                    </div>
                  </div>
                </th>

                <th>
                  <div className="heading-map-name-flag">
                    <div className="second-entity-map-pages-comparison">
                      <Image
                        src={`/images/${state2URLCase}-map-small.png`}
                        layout="fill"
                        objectFit="contain"
                        alt={`Pictorial representation of map of ${state2URLCase}`}
                      />
                    </div>

                    <div className="second-entity-name-pages-comparison">
                      {' '}
                      {state2}{' '}
                    </div>

                    <div className="second-entity-flag-pages-comparison">
                      <Image
                        src={`/images/${state2URLCase}-flag-small.png`}
                        layout="fill"
                        objectFit="contain"
                        alt={`Image illustrating the flag of ${state2URLCase}`}
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
                      layout="fill"
                      objectFit="contain"
                      alt="Visual representation of place of any country"
                    />
                  </div>
                </td>
                <td className="place-weather-answer-first-entity all-indicator-answers">
                  {state1Place ?? 'Yet to Update'}{' '}
                </td>
                <td className="place-weather-answer-second-entity all-indicator-answers">
                  {state2Place ?? 'Yet to Update'}{' '}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">Current Time</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/current-time-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Visual representation of current time of any specific country"
                    />
                  </div>
                </td>
                <td className="current-time-answer-first-entity all-indicator-answers">
                  {state1CurrentTime ?? 'Yet to Update'}
                </td>
                <td className="current-time-answer-second-entity all-indicator-answers">
                  {state2CurrentTime ?? 'Yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">Current Weather</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/current-weather-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Visual representation of current weather of any specific place in a country"
                    />
                  </div>
                </td>
                <td className="current-weather-answer-first-entity all-indicator-answers">
                  {state1CurrentWeather ?? 'Yet to Update'}
                </td>
                <td className="current-weather-answer-second-entity all-indicator-answers">
                  {state2CurrentWeather ?? 'Yet to Update'}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">Current Temperature</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/current-temperature-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Visual representation of current temperature of any specific place in a country"
                    />
                  </div>
                </td>
                <td className="current-temperature-answer-first-entity all-indicator-answers">
                  {state1CurrentTemperature ?? 'Yet to Update'}
                </td>
                <td className="current-temperature-answer-second-entity all-indicator-answers">
                  {state2CurrentTemperature ?? 'Yet to Update'}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">Wind Speed</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/wind-speed-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Visual representation of Speed of Wind Flowing of any specific place in a country"
                    />
                  </div>
                </td>
                <td className="wind-speed-answer-first-entity all-indicator-answers">
                  {state1WindSpeed ?? 'Yet to Update'}
                </td>

                <td className="wind-speed-answer-second-entity all-indicator-answers">
                  {state2WindSpeed ?? 'Yet to Update'}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">Humidity</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/humidity-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Visual representation of Humidity of any specific place in a country"
                    />
                  </div>
                </td>
                <td className="humidity-answer-first-entity all-indicator-answers">
                  {state1Humidity ?? 'Yet to Update'}
                </td>
                <td className="humidity-answer-second-entity all-indicator-answers">
                  {state2Humidity ?? 'Yet to Update'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
}

export default Weather