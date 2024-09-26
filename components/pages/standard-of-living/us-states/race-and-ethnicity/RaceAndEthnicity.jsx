import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { lastYear } from "@/lib/date-and-time/dateAndTime"
import { formatNumberWithCommas } from "@/lib/format/format"
import Image from "next/image"

function RaceAndEthnicity({ state1StandardInfo, state2StandardInfo, state1URLCase, state2URLCase }) {
    const state1 = state1StandardInfo.state
    const state1WhiteRace = state1StandardInfo.whiteRace
    const state1BlackOrAfricanAmericanRace = state1StandardInfo.blackOrAfricanAmericanRace
    const state1AmericanIndianAndAlaskaNativeRace = state1StandardInfo.americanIndianAndAlaskaNativeRace
    const state1AsianRace = state1StandardInfo.asianRace
    const state1HawaiianAndPacificIslanderRace = state1StandardInfo.hawaiianAndPacificIslanderRace
    const state1HispanicOrLatino = state1StandardInfo.hispanicOrLatino
    const state1TwoOrMoreRaces = state1StandardInfo.twoOrMoreRaces
    const state1OnlyEnglishSpeakingPercentage = state1StandardInfo.onlyEnglishSpeakingPercentage

    const state2 = state2StandardInfo.state
    const state2WhiteRace = state2StandardInfo.whiteRace
    const state2BlackOrAfricanAmericanRace = state2StandardInfo.blackOrAfricanAmericanRace
    const state2AmericanIndianAndAlaskaNativeRace = state2StandardInfo.americanIndianAndAlaskaNativeRace
    const state2AsianRace = state2StandardInfo.asianRace
    const state2HawaiianAndPacificIslanderRace = state2StandardInfo.hawaiianAndPacificIslanderRace
    const state2HispanicOrLatino = state2StandardInfo.hispanicOrLatino
    const state2TwoOrMoreRaces = state2StandardInfo.twoOrMoreRaces
    const state2OnlyEnglishSpeakingPercentage = state2StandardInfo.onlyEnglishSpeakingPercentage

    return (
      <>
        <AdsHeaderBanner />

        <div className="economic-factors-comparison">
          <h2 className="pages-h2">Race and Ethnicity Comparison</h2>
        </div>
        <div className="tax-factors-comparison-div1">
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
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting White Race percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {state1WhiteRace
                    ? `${formatNumberWithCommas(state1WhiteRace)}`
                    : 'Yet to Update'}
                </td>
                <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                  {state2WhiteRace
                    ? `${formatNumberWithCommas(state2WhiteRace)}`
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
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting Black or African American Race percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {state1BlackOrAfricanAmericanRace
                    ? `${formatNumberWithCommas(
                        state1BlackOrAfricanAmericanRace
                      )}`
                    : 'Yet to Update'}
                </td>
                <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                  {state2BlackOrAfricanAmericanRace
                    ? `${formatNumberWithCommas(
                        state2BlackOrAfricanAmericanRace
                      )}`
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
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting American Indian and Alaska Native percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {state1AmericanIndianAndAlaskaNativeRace
                    ? `${formatNumberWithCommas(
                        state1AmericanIndianAndAlaskaNativeRace
                      )}`
                    : 'Yet to Update'}
                </td>
                <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                  {state2AmericanIndianAndAlaskaNativeRace
                    ? `${formatNumberWithCommas(
                        state2AmericanIndianAndAlaskaNativeRace
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
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting Asian Race percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {state1AsianRace
                    ? `${formatNumberWithCommas(state1AsianRace)}`
                    : 'Yet to Update'}
                </td>
                <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                  {state2AsianRace
                    ? `${formatNumberWithCommas(state2AsianRace)}`
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
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting Hawaiian and Pacific Islander Race percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {state1HawaiianAndPacificIslanderRace
                    ? `${formatNumberWithCommas(
                        state1HawaiianAndPacificIslanderRace
                      )}`
                    : 'Yet to Update'}
                </td>
                <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                  {state2HawaiianAndPacificIslanderRace
                    ? `${formatNumberWithCommas(
                        state2HawaiianAndPacificIslanderRace
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
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting Hispanic or Latino percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {state1HispanicOrLatino
                    ? `${formatNumberWithCommas(state1HispanicOrLatino)}`
                    : 'Yet to Update'}
                </td>
                <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                  {state2HispanicOrLatino
                    ? `${formatNumberWithCommas(state2HispanicOrLatino)}`
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
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting Two or More Races percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {state1TwoOrMoreRaces
                    ? `${formatNumberWithCommas(state1TwoOrMoreRaces)}`
                    : 'Yet to Update'}
                </td>
                <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                  {state2TwoOrMoreRaces
                    ? `${formatNumberWithCommas(state2TwoOrMoreRaces)}`
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
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting Only English Speaking Population Percentage percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {state1OnlyEnglishSpeakingPercentage
                    ? `${state1OnlyEnglishSpeakingPercentage} %`
                    : 'Yet to Update'}
                </td>
                <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                  {state2OnlyEnglishSpeakingPercentage
                    ? `${state2OnlyEnglishSpeakingPercentage} %`
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