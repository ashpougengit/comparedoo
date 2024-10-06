import { lastYear } from "@/lib/date-and-time/dateAndTime"
import Image from "next/image"

function Education({ state1StandardInfo, state2StandardInfo, state1URLCase, state2URLCase }) {
  const state1 = state1StandardInfo.state
  const state1HighSchoolGraduate = state1StandardInfo.highSchoolGraduate
  const state1AssociateDegreePercentage = state1StandardInfo.associateDegreePercentage
  const state1BachelorsDegreePercentage = state1StandardInfo.bachelorsDegreePercentage
  const state1GraduateDegreePercentage = state1StandardInfo.graduateDegreePercentage

  const state2 = state2StandardInfo.state
  const state2HighSchoolGraduate = state2StandardInfo.highSchoolGraduate
  const state2AssociateDegreePercentage = state2StandardInfo.associateDegreePercentage
  const state2BachelorsDegreePercentage = state2StandardInfo.bachelorsDegreePercentage
  const state2GraduateDegreePercentage = state2StandardInfo.graduateDegreePercentage

  return (
    <>
      <div className="economic-factors-comparison">
        <h2 className="pages-h2">School and Education Factors Comparison</h2>
      </div>
      <div className="import-export-factors-comparison-div1">
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
                    High School Graduate
                    <br />({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/high-school-graduate-states-images.png"
                    fill
                    alt="Image Depicting High School Graduate percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {state1HighSchoolGraduate
                  ? `${state1HighSchoolGraduate} %`
                  : 'Yet to Update'}
              </td>
              <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                {state2HighSchoolGraduate
                  ? `${state2HighSchoolGraduate} %`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="employment-rate-states-text">
                    Associate Degree
                    <br />({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/associate-degree-states-images.png"
                    fill
                    alt="Image Depicting Associate Degree percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {state1AssociateDegreePercentage
                  ? `${state1AssociateDegreePercentage} %`
                  : 'Yet to Update'}
              </td>
              <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                {state2AssociateDegreePercentage
                  ? `${state2AssociateDegreePercentage} %`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="employment-rate-states-text">
                    Bachelor&apos;s Degree
                    <br />({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/bachelor-degree-states-images.png"
                    fill
                    alt="Image Depicting Bachelor's Degree percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {state1BachelorsDegreePercentage
                  ? `${state1BachelorsDegreePercentage} %`
                  : 'Yet to Update'}
              </td>
              <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                {state2BachelorsDegreePercentage
                  ? `${state2BachelorsDegreePercentage} %`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="employment-rate-states-text">
                    Graduate Degree Holders Percentage ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/graduate-degree-states-images.png"
                    fill
                    alt="Image Depicting Graduate Degree Holders Percentage percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {state1GraduateDegreePercentage
                  ? `${state1GraduateDegreePercentage} %`
                  : 'Yet to Update'}
              </td>
              <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                {state2GraduateDegreePercentage
                  ? `${state2GraduateDegreePercentage} %`
                  : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Education