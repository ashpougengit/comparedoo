// import classes from './country-basic-info-table.module.css'

import Image from "next/image"

function CountriesBasicInfoTable({ country1GeneralInfo, country2GeneralInfo, country1URLCase, country2URLCase }) {
  const country1 = country1GeneralInfo.country
  const country1OfficialName = country1GeneralInfo.officialName
  const country1Continent = country1GeneralInfo.continent
  const country1LandlockedStatus = country1GeneralInfo.landlockedStatus
  const country1CapitalCity = country1GeneralInfo.capitalCity
  const country1Latitude = country1GeneralInfo.latitude
  const country1Longitude = country1GeneralInfo.longitude

  const country2 = country2GeneralInfo.country
  const country2OfficialName = country2GeneralInfo.officialName
  const country2Continent = country2GeneralInfo.continent
  const country2LandlockedStatus = country2GeneralInfo.landlockedStatus
  const country2CapitalCity = country2GeneralInfo.capitalCity
  const country2Latitude = country2GeneralInfo.latitude
  const country2Longitude = country2GeneralInfo.longitude


  return (
    <>
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
                      src={`/images/${country1URLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

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
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

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
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

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
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                      alt={`Image illustrating the flag of ${country2URLCase}`}
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
                    src="/images/official-name-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Visual representation of official name of any country"
                  />
                </div>
              </td>
              <td className="country-official-name-first-entity all-indicator-answers">
                {country1OfficialName ?? 'Yet to Update'}
              </td>
              <td className="country-official-name-second-entity all-indicator-answers">
                {country2OfficialName ?? 'Yet to Update'}
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
                {country1Continent ?? 'Yet to Update'}
              </td>
              <td className="continent-second-entity all-indicator-answers">
                {country2Continent ?? 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">Landlocked Status</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/landlocked-status-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Depicting whether the status is landlocked or not."
                  />
                </div>
              </td>
              <td className="landlocked-answer-first-entity all-indicator-answers">
                {country1LandlockedStatus ?? 'Yet to Update'}
              </td>
              <td className="landlocked-answer-second-entity all-indicator-answers">
                {country2LandlockedStatus ?? 'Yet to Update'}
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
                {country1CapitalCity ?? 'Yet to Update'}
              </td>
              <td className="capital-city-answer-second-entity all-indicator-answers">
                {country2CapitalCity ?? 'Yet to Update'}
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
                {country1Latitude ?? 'Yet to Update'}
              </td>
              <td className="latitude-answer-second-entity all-indicator-answers">
                {country2Latitude ?? 'Yet to Update'}
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
                {country1Longitude ?? 'Yet to Update'}
              </td>
              <td className="longitude-answer-second-entity all-indicator-answers">
                {country2Longitude ?? 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CountriesBasicInfoTable