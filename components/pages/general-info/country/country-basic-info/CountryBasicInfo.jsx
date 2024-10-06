import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import Image from "next/image"

function CountryBasicInfo({ generalInfo, countryURLCase }) {
  const country = generalInfo.country
  const officialName = generalInfo.officialName
  const continent = generalInfo.continent
  const landlockedStatus = generalInfo.landlockedStatus
  const capitalCity = generalInfo.capitalCity
  const latitude = generalInfo.latitude
  const longitude = generalInfo.longitude

  return (
    <>
      <AdsHeaderBanner />

      <div className="basic-information-comparison-div1">
        <table className="indicators-single-country-divs">
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
                      src={`/images/${countryURLCase}-map-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Pictorial representation of map of ${countryURLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {country}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${countryURLCase}-flag-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Image illustrating the flag of ${countryURLCase}`}
                    />
                  </div>
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">Official Name</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/country-name-image.png"
                    fill
                    alt="Visual representation of official name of any country"
                  />
                </div>
              </td>

              <td className="country-official-name-first-entity all-indicator-answers">
                {officialName ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Continent</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/continent-image.png"
                    fill
                    alt="Visual representation of all continents in the world"
                  />
                </div>
              </td>
              <td className="continent-first-entity all-indicator-answers">
                {continent ?? 'Yet to Update'}{' '}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Landlocked Status</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/landlocked-image.png"
                    fill
                    alt="Image Depicting whether the status is landlocked or not."
                  />
                </div>
              </td>
              <td className="landlocked-answer-first-entity all-indicator-answers">
                {landlockedStatus ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Capital City</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/capital-city-image.png"
                    fill
                    alt="Visual representation of a capital city of any specific country"
                  />
                </div>
              </td>
              <td className="capital-city-answer-first-entity all-indicator-answers">
                {capitalCity ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Latitude</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/latitude-image.png"
                    fill
                    alt="Image Depicting Latitide lines in World Map"
                  />
                </div>
              </td>
              <td className="latitude-answer-first-entity all-indicator-answers">
                {latitude ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Longitude</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/longitude-image.png"
                    fill
                    alt="Image Depicting Longitude lines in World Map"
                  />
                </div>
              </td>
              <td className="longitude-answer-first-entity all-indicator-answers">
                {longitude ?? 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CountryBasicInfo