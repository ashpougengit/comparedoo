import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { lastYear } from "@/lib/date-and-time/dateAndTime"
import { formatNumberWithCommas } from "@/lib/format/format"
import Image from "next/image"

function PopulationAndOldAge({ state1StandardInfo, state2StandardInfo, state1URLCase, state2URLCase }) {
    const state1 = state1StandardInfo.state
    const state1Population = state1StandardInfo.population
    const state1MedianAge = state1StandardInfo.medianAge
    const state1SexRatioMalesPer100Females = state1StandardInfo.sexRatioMalesPer100Females
    const state1Age60to64 = state1StandardInfo.age60to64
    const state1Age65to74 = state1StandardInfo.age65to74
    const state1Age75to84 = state1StandardInfo.age75to84
    const state1Age85AndOver = state1StandardInfo.age85AndOver

    const state2 = state2StandardInfo.state
    const state2Population = state2StandardInfo.population
    const state2MedianAge = state2StandardInfo.medianAge
    const state2SexRatioMalesPer100Females = state2StandardInfo.sexRatioMalesPer100Females
    const state2Age60to64 = state2StandardInfo.age60to64
    const state2Age65to74 = state2StandardInfo.age65to74
    const state2Age75to84 = state2StandardInfo.age75to84
    const state2Age85AndOver = state2StandardInfo.age85AndOver

    return (
      <>
        <AdsHeaderBanner />

        <div className="economic-factors-comparison">
          <h2 className="pages-h2">
            Population and Old Age Factors Comparison
          </h2>
        </div>
        <div className="health-factors-comparison-div3">
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
                    <div className="total-population-text">
                      Total Population
                      <br />({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/total-population-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Illustration of total population of any specific country or a state"
                    />
                  </div>
                </td>
                <td className="total-population-first-entity all-indicator-answers">
                  {state1Population
                    ? formatNumberWithCommas(state1Population)
                    : 'Yet to Update'}
                </td>
                <td className="total-population-second-entity all-indicator-answers">
                  {state2Population
                    ? formatNumberWithCommas(state2Population)
                    : 'Yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    <div className="median-age-text">
                      Median Age
                      <br />({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/median-age-states-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Illustration of Median Age of any specific country or a state"
                    />
                  </div>
                </td>
                <td className="median-age-first-entity all-indicator-answers">
                  {state1MedianAge ? `${state1MedianAge} %` : 'Yet to Update'}
                </td>
                <td className="median-age-second-entity all-indicator-answers">
                  {state2MedianAge ? `${state2MedianAge} %` : 'Yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    <div className="sex-ratio-text">
                      Sex Ratio
                      <br />({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/sex-ratio-states-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Illustration of Sex Ratio of any specific country or a state"
                    />
                  </div>
                </td>
                <td className="sex-ratio-first-entity all-indicator-answers">
                  {state1SexRatioMalesPer100Females ? (
                    <>
                      {state1SexRatioMalesPer100Females}
                      <br /> (Males per 100 Females)
                    </>
                  ) : (
                    'Yet to Update'
                  )}
                </td>
                <td className="sex-ratio-second-entity all-indicator-answers">
                  {state2SexRatioMalesPer100Females ? (
                    <>
                      {state2SexRatioMalesPer100Females}
                      <br /> (Males per 100 Females)
                    </>
                  ) : (
                    'Yet to Update'
                  )}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    <div className="60-to-64-years-population-text">
                      Age ( 60 - 64 ) Years
                      <br />({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/60-to-64-years-states-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Illustration of 60 to 64 years age group of any specific country or a state"
                    />
                  </div>
                </td>
                <td className="60-to-64-years-population-first-entity all-indicator-answers">
                  {state1Age60to64 ? `${state1Age60to64} %` : 'Yet to Update'}
                </td>
                <td className="60-to-64-years-population-second-entity all-indicator-answers">
                  {state2Age60to64 ? `${state2Age60to64} %` : 'Yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    <div className="65-to-74-years-population-text">
                      Age ( 65 - 74 ) Years
                      <br />({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/65-to-74-years-states-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Illustration of 65 to 74 years age group of any specific country or a state"
                    />
                  </div>
                </td>
                <td className="65-to-74-years-population-first-entity all-indicator-answers">
                  {state1Age65to74 ? `${state1Age65to74} %` : 'Yet to Update'}
                </td>
                <td className="65-to-74-years-population-second-entity all-indicator-answers">
                  {state2Age65to74 ? `${state2Age65to74} %` : 'Yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    <div className="75-to-84-years-population-text">
                      Age ( 75 - 84 ) Years
                      <br />({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/75-to-84-years-states-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Illustration of 75 to 84 years age group of any specific country or a state"
                    />
                  </div>
                </td>
                <td className="75-to-84-years-population-first-entity all-indicator-answers">
                  {state1Age75to84 ? `${state1Age75to84} %` : 'Yet to Update'}
                </td>
                <td className="75-to-84-years-population-second-entity all-indicator-answers">
                  {state2Age75to84 ? `${state2Age75to84} %` : 'Yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    <div className="85-years-and-older-population-text">
                      Age ( 85 ) Years and older
                      <br />({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/85-years-and-over-states-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Illustration of 85 years and older age group of any specific country or a state"
                    />
                  </div>
                </td>
                <td className="85-years-and-older-population-first-entity all-indicator-answers">
                  {state1Age85AndOver
                    ? `${state1Age85AndOver} %`
                    : 'Yet to Update'}
                </td>
                <td className="85-years-and-older-population-second-entity all-indicator-answers">
                  {state2Age85AndOver
                    ? `${state2Age85AndOver} %`
                    : 'Yet to Update'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
}

export default PopulationAndOldAge