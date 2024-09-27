import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { lastYear } from "@/lib/date-and-time/dateAndTime"
import Image from "next/image"

function MaritalStatus({ state1StandardInfo, state2StandardInfo, state1URLCase, state2URLCase }) {
    const state1 = state1StandardInfo.state
    const state1MarriedNotSeparatedPopulationPercentageMale = state1StandardInfo.marriedNotSeparatedPopulationPercentageMale
    const state1MarriedNotSeparatedPopulationPercentageFemale = state1StandardInfo.marriedNotSeparatedPopulationPercentageFemale
    const state1NeverMarriedPopulationPercentageMale = state1StandardInfo.neverMarriedPopulationPercentageMale
    const state1NeverMarriedPopulationPercentageFemale = state1StandardInfo.neverMarriedPopulationPercentageFemale
    const state1SeparatedPopulationPercentageMale = state1StandardInfo.separatedPopulationPercentageMale
    const state1SeparatedPopulationPercentageFemale = state1StandardInfo.separatedPopulationPercentageFemale
    const state1DivorcedPopulationPercentageMale = state1StandardInfo.divorcedPopulationPercentageMale
    const state1DivorcedPopulationPercentageFemale = state1StandardInfo.divorcedPopulationPercentageFemale
    const state1WidowedPopulationPercentageMale = state1StandardInfo.widowedPopulationPercentageMale
    const state1WidowedPopulationPercentageFemale = state1StandardInfo.widowedPopulationPercentageFemale

    const state2 = state2StandardInfo.state
    const state2MarriedNotSeparatedPopulationPercentageMale = state2StandardInfo.marriedNotSeparatedPopulationPercentageMale
    const state2MarriedNotSeparatedPopulationPercentageFemale = state2StandardInfo.marriedNotSeparatedPopulationPercentageFemale
    const state2NeverMarriedPopulationPercentageMale = state2StandardInfo.neverMarriedPopulationPercentageMale
    const state2NeverMarriedPopulationPercentageFemale = state2StandardInfo.neverMarriedPopulationPercentageFemale
    const state2SeparatedPopulationPercentageMale = state2StandardInfo.separatedPopulationPercentageMale
    const state2SeparatedPopulationPercentageFemale = state2StandardInfo.separatedPopulationPercentageFemale
    const state2DivorcedPopulationPercentageMale = state2StandardInfo.divorcedPopulationPercentageMale
    const state2DivorcedPopulationPercentageFemale = state2StandardInfo.divorcedPopulationPercentageFemale
    const state2WidowedPopulationPercentageMale = state2StandardInfo.widowedPopulationPercentageMale
    const state2WidowedPopulationPercentageFemale = state2StandardInfo.widowedPopulationPercentageFemale

    return (
      <>
        <AdsHeaderBanner />

        <div className="economic-factors-comparison">
          <h2 className="pages-h2">Marital Status Comparison</h2>
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
                      Married Male (Not Separated)
                      <br />({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/married-man-states-images.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting Married Male (Not Separated) percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {state1MarriedNotSeparatedPopulationPercentageMale
                    ? `${state1MarriedNotSeparatedPopulationPercentageMale} %`
                    : 'Yet to Update'}
                </td>
                <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                  {state2MarriedNotSeparatedPopulationPercentageMale
                    ? `${state2MarriedNotSeparatedPopulationPercentageMale} %`
                    : 'Yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    <div className="employment-rate-states-text">
                      Married Female (Not Separated) ({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/married-woman-states-images.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting Married Female (Not Separated) percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {state1MarriedNotSeparatedPopulationPercentageFemale
                    ? `${state1MarriedNotSeparatedPopulationPercentageFemale} %`
                    : 'Yet to Update'}
                </td>
                <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                  {state2MarriedNotSeparatedPopulationPercentageFemale
                    ? `${state2MarriedNotSeparatedPopulationPercentageFemale} %`
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
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting Never Married (Male) percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {state1NeverMarriedPopulationPercentageMale
                    ? `${state1NeverMarriedPopulationPercentageMale} %`
                    : 'Yet to Update'}
                </td>
                <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                  {state2NeverMarriedPopulationPercentageMale
                    ? `${state2NeverMarriedPopulationPercentageMale} %`
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
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting Never Married (Female) percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {state1NeverMarriedPopulationPercentageFemale
                    ? `${state1NeverMarriedPopulationPercentageFemale} %`
                    : 'Yet to Update'}
                </td>
                <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                  {state2NeverMarriedPopulationPercentageFemale
                    ? `${state2NeverMarriedPopulationPercentageFemale} %`
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
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting Separated (Male) percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {state1SeparatedPopulationPercentageMale
                    ? `${state1SeparatedPopulationPercentageMale} %`
                    : 'Yet to Update'}
                </td>
                <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                  {state2SeparatedPopulationPercentageMale
                    ? `${state2SeparatedPopulationPercentageMale} %`
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
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting Separated (Female) percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {state1SeparatedPopulationPercentageFemale
                    ? `${state1SeparatedPopulationPercentageFemale} %`
                    : 'Yet to Update'}
                </td>
                <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                  {state2SeparatedPopulationPercentageFemale
                    ? `${state2SeparatedPopulationPercentageFemale} %`
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
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting Separated (Male) percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {state1DivorcedPopulationPercentageMale
                    ? `${state1DivorcedPopulationPercentageMale} %`
                    : 'Yet to Update'}
                </td>
                <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                  {state2DivorcedPopulationPercentageMale
                    ? `${state2DivorcedPopulationPercentageMale} %`
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
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting Divorced (Female) percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {state1DivorcedPopulationPercentageFemale
                    ? `${state1DivorcedPopulationPercentageFemale} %`
                    : 'Yet to Update'}
                </td>
                <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                  {state2DivorcedPopulationPercentageFemale
                    ? `${state2DivorcedPopulationPercentageFemale} %`
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
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting Widowed (Male) percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {state1WidowedPopulationPercentageMale
                    ? `${state1WidowedPopulationPercentageMale} %`
                    : 'Yet to Update'}
                </td>
                <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                  {state2WidowedPopulationPercentageMale
                    ? `${state2WidowedPopulationPercentageMale} %`
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
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting Widowed (Female) percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {state1WidowedPopulationPercentageFemale
                    ? `${state1WidowedPopulationPercentageFemale} %`
                    : 'Yet to Update'}
                </td>
                <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                  {state2WidowedPopulationPercentageFemale
                    ? `${state2WidowedPopulationPercentageFemale} %`
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