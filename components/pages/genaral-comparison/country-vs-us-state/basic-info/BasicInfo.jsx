import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { USStates } from "@/lib/array-list/allUSStates"
import Image from "next/image"

function BasicInfo({ slug1, slug2, slug1GeneralInfo, slug2GeneralInfo, slug1URLCase, slug2URLCase }) {
  const slug1OfficialName = slug1GeneralInfo.officialName
  const slug1Continent = USStates.includes(slug1) ? 'North America' : slug1GeneralInfo.continent
  const slug1LandlockedStatus = slug1GeneralInfo.landlockedStatus
  const slug1CapitalCity = slug1GeneralInfo.capitalCity
  const slug1Latitude = slug1GeneralInfo.latitude
  const slug1Longitude = slug1GeneralInfo.longitude

  const slug2OfficialName = slug2GeneralInfo.officialName
  const slug2Continent = USStates.includes(slug2) ? 'North America' : slug2GeneralInfo.continent
  const slug2LandlockedStatus = slug2GeneralInfo.landlockedStatus
  const slug2CapitalCity = slug2GeneralInfo.capitalCity
  const slug2Latitude = slug2GeneralInfo.latitude
  const slug2Longitude = slug2GeneralInfo.longitude

  return (
    <>
      <AdsHeaderBanner />

      <div className="basic-information-comparison-div1">
        <table className="indicators-first-entity-and-second-entity-div1">
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
                      src={`/images/${slug1URLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                      alt={`Pictorial representation of map of ${slug1URLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {slug1}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${slug1URLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

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
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

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
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                      alt={`Image illustrating the flag of ${slug2URLCase}`}
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Visual representation of official name of any country"
                  />
                </div>
              </td>

              <td className="country-official-name-first-entity all-indicator-answers">
                {slug1OfficialName ?? 'Yet to Update'}
              </td>
              <td className="country-official-name-second-entity all-indicator-answers">
                {slug2OfficialName ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Continent</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/continent-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Visual representation of all continents in the world"
                  />
                </div>
              </td>
              <td className="continent-first-entity all-indicator-answers">
                {slug1Continent ?? 'Yet to Update'}
              </td>
              <td className="continent-second-entity all-indicator-answers">
                {slug2Continent ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Landlocked Status</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/landlocked-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Depicting whether the status is landlocked or not."
                  />
                </div>
              </td>
              <td className="landlocked-answer-first-entity all-indicator-answers">
                {slug1LandlockedStatus ?? 'Yet to Update'}
              </td>
              <td className="landlocked-answer-second-entity all-indicator-answers">
                {slug2LandlockedStatus ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Capital City</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/capital-city-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Visual representation of a capital city of any specific country"
                  />
                </div>
              </td>
              <td className="capital-city-answer-first-entity all-indicator-answers">
                {slug1CapitalCity ?? 'Yet to Update'}
              </td>
              <td className="capital-city-answer-second-entity all-indicator-answers">
                {slug2CapitalCity ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Latitude</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/latitude-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Depicting Latitide lines in World Map"
                  />
                </div>
              </td>
              <td className="latitude-answer-first-entity all-indicator-answers">
                {slug1Latitude ?? 'Yet to Update'}
              </td>
              <td className="latitude-answer-second-entity all-indicator-answers">
                {slug2Latitude ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Longitude</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/longitude-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Depicting Longitude lines in World Map"
                  />
                </div>
              </td>
              <td className="longitude-answer-first-entity all-indicator-answers">
                {slug1Longitude ?? 'Yet to Update'}
              </td>
              <td className="longitude-answer-second-entity all-indicator-answers">
                {slug2Longitude ?? 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BasicInfo