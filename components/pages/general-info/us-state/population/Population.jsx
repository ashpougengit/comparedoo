import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { lastYear } from "@/lib/date-and-time/dateAndTime"
import { formatNumberWithCommas } from "@/lib/format/format"
import Image from "next/image"

function Population({ generalInfo, stateURLCase }) {
  const state = generalInfo.state
  const population = formatNumberWithCommas(generalInfo.population)
  const veteransPercentage = generalInfo.veteransPercentage
  const veteransPercentageMale = generalInfo.veteransPercentageMale
  const veteransPercentageFemale = generalInfo.veteransPercentageFemale

  return (
    <>
      <AdsHeaderBanner />

      <div className="population-comparison">
        <h2 className="pages-h2">Population Information</h2>
      </div>
      <div className="paragraph-for-pages-below-table">
        <div className="para-for-pages-single-div">
          <p>
            Based on the elaboration of latest United States Census Bureau
            Data, the total population of
            <strong>
              <span className="first-entity-name-pages-paragraph">
                {' '}
                {state}{' '}
              </span>
            </strong>
            as of {lastYear} is estimated to be around
            <strong>
              <span className="population-of-first-entity-name">
                {' '}
                {population}
              </span>
            </strong>
            .
          </p>
        </div>
      </div>
      <div className="economic-factors-comparison-div1">
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
                <div className="all-indicators">Total Population</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/total-population-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Illustration of total population of any specific country or a state"
                  />
                </div>
              </td>
              <td className="total-population-first-entity all-indicator-answers">
                {population ?? 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">Veterans</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/veterans-percentage-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Visual representation Veterans"
                  />
                </div>
              </td>
              <td className="veterans-percentage-answer-first-entity all-indicator-answers">
                {veteransPercentage
                  ? `${veteransPercentage} %`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">Male Veterans</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/male-veterans-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Visual representation of Male Veterans"
                  />
                </div>
              </td>
              <td className="male-veterans-answer-first-entity all-indicator-answers">
                {veteransPercentageMale
                  ? `${veteransPercentageMale} %`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">Female Veterans</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/female-veterans-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Visual representation of Female Veterans"
                  />
                </div>
              </td>
              <td className="female-veterans-answer-first-entity all-indicator-answers">
                {veteransPercentageFemale
                  ? `${veteransPercentageFemale} %`
                  : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Population