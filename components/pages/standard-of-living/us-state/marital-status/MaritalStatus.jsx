import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { lastYear } from "@/lib/date-and-time/dateAndTime"
import Image from "next/image"

function MaritalStatus({ standardInfo, stateURLCase }) {
  const state = standardInfo.state
  const marriedNotSeparatedPopulationPercentageMale = standardInfo.marriedNotSeparatedPopulationPercentageMale
  const marriedNotSeparatedPopulationPercentageFemale = standardInfo.marriedNotSeparatedPopulationPercentageFemale
  const neverMarriedPopulationPercentageMale = standardInfo.neverMarriedPopulationPercentageMale
  const neverMarriedPopulationPercentageFemale = standardInfo.neverMarriedPopulationPercentageFemale
  const separatedPopulationPercentageMale = standardInfo.separatedPopulationPercentageMale
  const separatedPopulationPercentageFemale = standardInfo.separatedPopulationPercentageFemale
  const divorcedPopulationPercentageMale = standardInfo.divorcedPopulationPercentageMale
  const divorcedPopulationPercentageFemale = standardInfo.divorcedPopulationPercentageFemale
  const widowedPopulationPercentageMale = standardInfo.widowedPopulationPercentageMale
  const widowedPopulationPercentageFemale = standardInfo.widowedPopulationPercentageFemale

  return (
    <>
      <AdsHeaderBanner />

      <div className="economic-factors-comparison">
        <h2 className="pages-h2">Marital Status Information</h2>
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
                    Married Male (Not Separated)
                    <br />({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/married-man-states-images.png"
                    fill
                    alt="Image Depicting Married Male (Not Separated) percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {marriedNotSeparatedPopulationPercentageMale
                  ? `${marriedNotSeparatedPopulationPercentageMale} %`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="employment-rate-states-text">
                    Married Female (Not Separated)
                    <br />({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/married-woman-states-images.png"
                    fill
                    alt="Image Depicting Married Female (Not Separated) percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {marriedNotSeparatedPopulationPercentageFemale
                  ? `${marriedNotSeparatedPopulationPercentageFemale} %`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="employment-rate-states-text">
                    Never Married (Male)
                    <br />({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/never-married-man-states-images.png"
                    fill
                    alt="Image Depicting Never Married (Male) percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {neverMarriedPopulationPercentageMale
                  ? `${neverMarriedPopulationPercentageMale} %`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="employment-rate-states-text">
                    Never Married (Female)
                    <br />({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/never-married-woman-states-images.png"
                    fill
                    alt="Image Depicting Never Married (Female) percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {neverMarriedPopulationPercentageFemale
                  ? `${neverMarriedPopulationPercentageFemale} %`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="employment-rate-states-text">
                    Separated (Male)
                    <br />({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/separated-man-states-images.png"
                    fill
                    alt="Image Depicting Separated (Male) percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {separatedPopulationPercentageMale
                  ? `${separatedPopulationPercentageMale} %`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="employment-rate-states-text">
                    Separated (Female)
                    <br />({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/separated-woman-states-images.png"
                    fill
                    alt="Image Depicting Separated (Female) percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {separatedPopulationPercentageFemale
                  ? `${separatedPopulationPercentageFemale} %`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="employment-rate-states-text">
                    Divorced (Male)
                    <br />({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/divorced-man-states-images.png"
                    fill
                    alt="Image Depicting Separated (Male) percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {divorcedPopulationPercentageMale
                  ? `${divorcedPopulationPercentageMale} %`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="employment-rate-states-text">
                    Divorced (Female)
                    <br />({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/divorced-woman-states-images.png"
                    fill
                    alt="Image Depicting Divorced (Female) percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {divorcedPopulationPercentageFemale
                  ? `${divorcedPopulationPercentageFemale} %`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="employment-rate-states-text">
                    Widowed (Male)
                    <br />({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/widowed-man-states-images.png"
                    fill
                    alt="Image Depicting Widowed (Male) percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {widowedPopulationPercentageMale
                  ? `${widowedPopulationPercentageMale} %`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="employment-rate-states-text">
                    Widowed (Female)
                    <br />({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/widowed-woman-states-images.png"
                    fill
                    alt="Image Depicting Widowed (Female) percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {widowedPopulationPercentageFemale
                  ? `${widowedPopulationPercentageFemale} %`
                  : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MaritalStatus