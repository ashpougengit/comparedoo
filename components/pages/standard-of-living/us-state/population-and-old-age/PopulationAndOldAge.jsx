import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { lastYear } from "@/lib/date-and-time/dateAndTime"
import { formatNumberWithCommas } from "@/lib/format/format"
import Image from "next/image"

function PopulationAndOldAge({ standardInfo, stateURLCase }) {
  const state = standardInfo.state
  const population = standardInfo.population
  const medianAge = standardInfo.medianAge
  const sexRatioMalesPer100Females = standardInfo.sexRatioMalesPer100Females
  const age60to64 = standardInfo.age60to64
  const age65to74 = standardInfo.age65to74
  const age75to84 = standardInfo.age75to84
  const age85AndOver = standardInfo.age85AndOver

  return (
    <>
      <AdsHeaderBanner />

      <div className="economic-factors-comparison">
        <h2 className="pages-h2">
          Population and Old Age Factors Information
        </h2>
      </div>
      <div className="health-factors-comparison-div3">
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
                  <div className="total-population-text">
                    Total Population
                    <br />({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/total-population-image.png"
                    fill
                    alt="Illustration of total population of any specific country or a state"
                  />
                </div>
              </td>
              <td className="total-population-first-entity all-indicator-answers">
                {population
                  ? formatNumberWithCommas(population)
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
                    fill
                    alt="Illustration of Median Age of any specific country or a state"
                  />
                </div>
              </td>
              <td className="median-age-first-entity all-indicator-answers">
                {medianAge ? `${medianAge} %` : 'Yet to Update'}
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
                    fill
                    alt="Illustration of Sex Ratio of any specific country or a state"
                  />
                </div>
              </td>
              <td className="sex-ratio-first-entity all-indicator-answers">
                {sexRatioMalesPer100Females ? (
                  <>
                    {sexRatioMalesPer100Females}
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
                    fill
                    alt="Illustration of 60 to 64 years age group of any specific country or a state"
                  />
                </div>
              </td>
              <td className="60-to-64-years-population-first-entity all-indicator-answers">
                {age60to64 ? `${age60to64} %` : 'Yet to Update'}
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
                    fill
                    alt="Illustration of 65 to 74 years age group of any specific country or a state"
                  />
                </div>
              </td>
              <td className="65-to-74-years-population-first-entity all-indicator-answers">
                {age65to74 ? `${age65to74} %` : 'Yet to Update'}
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
                    fill
                    alt="Illustration of 75 to 84 years age group of any specific country or a state"
                  />
                </div>
              </td>
              <td className="75-to-84-years-population-first-entity all-indicator-answers">
                {age75to84 ? `${age75to84} %` : 'Yet to Update'}
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
                    fill
                    alt="Illustration of 85 years and older age group of any specific country or a state"
                  />
                </div>
              </td>
              <td className="85-years-and-older-population-first-entity all-indicator-answers">
                {age85AndOver ? `${age85AndOver} %` : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PopulationAndOldAge