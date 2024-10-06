import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { lastYear } from "@/lib/date-and-time/dateAndTime"
import { formatNumberWithCommas } from "@/lib/format/format"
import Image from "next/image"

function RaceAndEthnicity({ standardInfo, stateURLCase }) {
  const state = standardInfo.state
  const whiteRace = standardInfo.whiteRace
  const blackOrAfricanAmericanRace = standardInfo.blackOrAfricanAmericanRace
  const americanIndianAndAlaskaNativeRace = standardInfo.americanIndianAndAlaskaNativeRace
  const asianRace = standardInfo.asianRace
  const hawaiianAndPacificIslanderRace = standardInfo.hawaiianAndPacificIslanderRace
  const hispanicOrLatino = standardInfo.hispanicOrLatino
  const twoOrMoreRaces = standardInfo.twoOrMoreRaces
  const onlyEnglishSpeakingPercentage = standardInfo.onlyEnglishSpeakingPercentage

  return (
    <>
      <AdsHeaderBanner />

      <div className="economic-factors-comparison">
        <h2 className="pages-h2">Race and Ethnicity Information</h2>
      </div>
      <div className="tax-factors-comparison-div1">
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
                      src={`/images/${stateURLCase}-map-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Pictorial representation of map of ${stateURLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {state}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${stateURLCase}-flag-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Image illustrating the flag of ${stateURLCase}`}
                    />
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="employment-rate-states-text">
                    White Race
                    <br />({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/white-race-states-images.png"
                    fill
                    alt="Image Depicting White Race percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {whiteRace
                  ? `${formatNumberWithCommas(whiteRace)}`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="employment-rate-states-text">
                    Black or African American Race ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/black-or-african-race-states-images.png"
                    fill
                    alt="Image Depicting Black or African American Race percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {blackOrAfricanAmericanRace
                  ? `${formatNumberWithCommas(blackOrAfricanAmericanRace)}`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="employment-rate-states-text">
                    American Indian and Alaska Native ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/american-indian-and-alaska-native-race-states-images.png"
                    fill
                    alt="Image Depicting American Indian and Alaska Native percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {americanIndianAndAlaskaNativeRace
                  ? `${formatNumberWithCommas(
                    americanIndianAndAlaskaNativeRace
                  )}`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="employment-rate-states-text">
                    Asian Race
                    <br />({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/asian-race-states-images.png"
                    fill
                    alt="Image Depicting Asian Race percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {asianRace
                  ? `${formatNumberWithCommas(asianRace)}`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="employment-rate-states-text">
                    Hawaiian and Pacific Islander Race ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/hawaiian-and-pacific-islander-race-states-images.png"
                    fill
                    alt="Image Depicting Hawaiian and Pacific Islander Race percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {hawaiianAndPacificIslanderRace
                  ? `${formatNumberWithCommas(
                    hawaiianAndPacificIslanderRace
                  )}`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="employment-rate-states-text">
                    Hispanic or Latino
                    <br />({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/hispanic-or-latino-states-images.png"
                    fill
                    alt="Image Depicting Hispanic or Latino percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {hispanicOrLatino
                  ? `${formatNumberWithCommas(hispanicOrLatino)}`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="employment-rate-states-text">
                    Two or More Races
                    <br />({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/two-or-more-races-states-images.png"
                    fill
                    alt="Image Depicting Two or More Races percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {twoOrMoreRaces
                  ? `${formatNumberWithCommas(twoOrMoreRaces)}`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="employment-rate-states-text">
                    Only English Speaking Population Percentage ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/only-english-speaking-states-images.png"
                    fill
                    alt="Image Depicting Only English Speaking Population Percentage percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {onlyEnglishSpeakingPercentage
                  ? `${onlyEnglishSpeakingPercentage} %`
                  : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default RaceAndEthnicity