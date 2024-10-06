import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import Image from "next/image"

function Weather({ slug1, slug2, slug1WeatherInfo, slug2WeatherInfo, slug1URLCase, slug2URLCase }) {
  const slug1Place = slug1WeatherInfo?.place
  const slug1CurrentTime = slug1WeatherInfo?.currentTime
  const slug1CurrentWeather = slug1WeatherInfo?.currentWeather
  const slug1CurrentTemperature = slug1WeatherInfo?.currentTemperature
  const slug1WindSpeed = slug1WeatherInfo?.windSpeed && slug1WeatherInfo?.windDegree ? `${slug1WeatherInfo?.windSpeed}, ${slug1WeatherInfo?.windDegree}` : 'Yet to Update'
  const slug1Humidity = slug1WeatherInfo?.humidity
  const slug1WeatherImage = slug1WeatherInfo?.weatherImage

  const slug2Place = slug2WeatherInfo?.place
  const slug2CurrentTime = slug2WeatherInfo?.currentTime
  const slug2CurrentWeather = slug2WeatherInfo?.currentWeather
  const slug2CurrentTemperature = slug2WeatherInfo?.currentTemperature
  const slug2WindSpeed = slug2WeatherInfo?.windSpeed && slug2WeatherInfo?.windDegree ? `${slug2WeatherInfo?.windSpeed}, ${slug2WeatherInfo?.windDegree}` : 'Yet to Update'
  const slug2Humidity = slug2WeatherInfo?.humidity
  const slug2WeatherImage = slug2WeatherInfo?.weatherImage

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
                      src={`/images/${slug1URLCase}-map-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Pictorial representation of map of ${slug1URLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {slug1}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${slug1URLCase}-flag-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Image illustrating the flag of ${slug1URLCase}`}
                    />
                  </div>
                </div>
              </th>

              <th>
                <div className="heading-map-name-flag">
                  <div className="second-entity-map-pages-comparison">
                    <Image
                      src={`/images/${slug2URLCase}-map-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Pictorial representation of map of ${slug2URLCase}`}
                    />
                  </div>

                  <div className="second-entity-name-pages-comparison">
                    {' '}
                    {slug2}{' '}
                  </div>

                  <div className="second-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${slug2URLCase}-flag-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Image illustrating the flag of ${slug2URLCase}`}
                    />
                  </div>
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="four-rem-height-td"></td>
              <td colSpan="2" className="four-rem-height-td">
                <strong>[ LATEST WEATHER DATA ]</strong>
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
                {slug1Place ?? 'Yet to Update'}
              </td>
              <td className="place-weather-answer-second-entity all-indicator-answers">
                {slug2Place ?? 'Yet to Update'}
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
                {slug1CurrentTime ?? 'Yet to Update'}
              </td>
              <td className="current-time-answer-second-entity all-indicator-answers">
                {slug2CurrentTime ?? 'Yet to Update'}
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
                {slug1CurrentWeather ? (
                  <>
                    {slug1CurrentWeather}
                    <span>
                      {slug1WeatherImage && <Image src={`/images/${slug1WeatherImage}.png`} height='50' width='50' />}
                    </span>

                  </>
                ) : 'Yet to Update'}
              </td>
              <td className="current-weather-answer-second-entity all-indicator-answers">
                {slug2CurrentWeather ? (
                  <>
                    {slug2CurrentWeather}
                    <span>
                      {slug2WeatherImage && <Image src={`/images/${slug2WeatherImage}.png`} height='50' width='50' />}
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
                {slug1CurrentTemperature ?? 'Yet to Update'}
              </td>
              <td className="current-temperature-answer-second-entity all-indicator-answers">
                {slug2CurrentTemperature ?? 'Yet to Update'}
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
              <td className="wind-speed-answer-first-entity all-indicator-answers">
                {slug1WindSpeed ?? 'Yet to Update'}
              </td>

              <td className="wind-speed-answer-second-entity all-indicator-answers">
                {slug2WindSpeed ?? 'Yet to Update'}
              </td>
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
                {slug1Humidity ?? 'Yet to Update'}
              </td>
              <td className="humidity-answer-second-entity all-indicator-answers">
                {slug2Humidity ?? 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Weather