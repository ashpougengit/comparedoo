import { lastYear } from "@/lib/date-and-time/dateAndTime"
import Image from "next/image"

function Education({ standardInfo, stateURLCase }) {
  const state = standardInfo.state
  const highSchoolGraduate = standardInfo.highSchoolGraduate
  const associateDegreePercentage = standardInfo.associateDegreePercentage
  const bachelorsDegreePercentage = standardInfo.bachelorsDegreePercentage
  const graduateDegreePercentage = standardInfo.graduateDegreePercentage

  return (
    <>
      <div className="economic-factors-comparison">
        <h2 className="pages-h2">School and Education Factors Information</h2>
      </div>
      <div className="import-export-factors-comparison-div1">
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
                  <div className="employment-rate-states-text">
                    High School Graduate
                    <br />({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/high-school-graduate-states-images.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Depicting High School Graduate percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {highSchoolGraduate
                  ? `${highSchoolGraduate} %`
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Depicting Associate Degree percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {associateDegreePercentage
                  ? `${associateDegreePercentage} %`
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Depicting Bachelor's Degree percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {bachelorsDegreePercentage
                  ? `${bachelorsDegreePercentage} %`
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Depicting Graduate Degree Holders Percentage percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {graduateDegreePercentage
                  ? `${graduateDegreePercentage} %`
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