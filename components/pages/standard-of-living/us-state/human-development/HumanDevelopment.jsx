import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { lastYear } from "@/lib/date-and-time/dateAndTime"
import Image from "next/image"

function HumanDevelopment({ standardInfo, stateURLCase }) {
  const state = standardInfo.state
  const HDI = standardInfo.HDI
  const literacyRate = standardInfo.literacyRate
  const lifeExpectancyRatio = standardInfo.lifeExpectancyRatio
  const povertyRatio = standardInfo.povertyRatio
  const employmentRate = standardInfo.employmentRate

  return (
    <>
      <AdsHeaderBanner />

      <div className="economic-factors-comparison">
        <h2 className="pages-h2">Human Development Factors Information</h2>
      </div>
      <div className="economic-factors-comparison-div2">
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
                      src={`/images/${stateURLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                      alt={`Pictorial representation of map of ${stateURLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {state}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${stateURLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

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
                  <div className="hdi-text">
                    Human Development Index (HDI)
                    <br />({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/hdi-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image representing the Human Development Index of any specific country or state"
                  />
                </div>
              </td>
              <td className="hdi-answer-first-entity all-indicator-answers">
                {HDI ?? 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="literacy-rate-text">
                    Literacy Rate
                    <br />({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/literacy-rate-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image representing the Literacy Rate of any specific country or state"
                  />
                </div>
              </td>
              <td className="literacy-rate-answer-first-entity all-indicator-answers">
                {literacyRate
                  ? `${literacyRate} % (15 years+ above age)`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="life-expectancy-ratio-text">
                    Life Expectancy Ratio
                  </div>
                  <div className="life-expectancy-ratio-year">
                    ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/life-expectancy-ratio-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image representation of Life Expectancy Ratio any given country"
                  />
                </div>
              </td>
              <td className="life-expectancy-ratio-answer-first-entity all-indicator-answers">
                {lifeExpectancyRatio
                  ? `${lifeExpectancyRatio} years`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="poverty-ratio-text">
                    Poverty Ratio
                    <br />({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/poverty-headcount-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image representing the Poverty Rate of any specific country or state"
                  />
                </div>
              </td>
              <td className="poverty-ratio-answer-first-entity all-indicator-answers">
                {povertyRatio
                  ? `${povertyRatio} % of total population`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="employment-rate-text">
                    Employment Rate
                    <br />({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/employment-rate-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image representing the Employment Rate of any specific country or state"
                  />
                </div>
              </td>
              <td className="unemployment-rate-answer-first-entity all-indicator-answers">
                {employmentRate
                  ? `${employmentRate} % of total population`
                  : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="paragraph-for-pages-below-table">
        <div className="para-for-pages-single-div">
          <p>
            <strong>The Human Development Index (HDI) </strong>
            is a measure used to assess the overall well-being and quality of
            life of people living in a country or a state. The key dimensions
            that give a country or a state good HDI rank are a long and
            healthy life, being knowledgeable and having a decent standard of
            living. This is expressed as a value between 0 and 1. The higher a
            country&apos;s or a state&apos;s human development, the higher its
            HDI value.
          </p>
        </div>
      </div>
    </>
  );
}

export default HumanDevelopment