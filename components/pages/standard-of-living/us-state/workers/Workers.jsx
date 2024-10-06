import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { lastYear } from "@/lib/date-and-time/dateAndTime"
import { formatNumberWithCommas } from "@/lib/format/format"
import Image from "next/image"

function Workers({ standardInfo, stateURLCase }) {
  const state = standardInfo.state
  const meanTravelTimeToWorkMinutes = standardInfo.meanTravelTimeToWorkMinutes
  const workFromHome = standardInfo.workFromHome
  const privateWageandSalaryWorkers = standardInfo.privateWageandSalaryWorkers
  const governmentWorkers = standardInfo.governmentWorkers
  const selfEmployedInNotOwnIncorporatedBusiness = standardInfo.selfEmployedInNotOwnIncorporatedBusiness
  const medianIncomeDollars = standardInfo.medianIncomeDollars

  return (
    <>
      <AdsHeaderBanner />

      <div className="economic-factors-comparison">
        <h2 className="pages-h2">Types of Workers</h2>
      </div>
      <div className="business-registration-comparison-div1">
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
                  <div className="mean-travel-time-to-work-text">
                    Mean Travel Time to Work
                    <br />({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/mean-travel-time-to-work-states-images.png"
                    fill
                    alt="Image Depicting the total Mean Travel Time to Work available in any specific country or state"
                  />
                </div>
              </td>
              <td className="mean-travel-time-to-work-answer-first-entity all-indicator-answers">
                {meanTravelTimeToWorkMinutes
                  ? `${meanTravelTimeToWorkMinutes} Minutes`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="employment-rate-states-text">
                    People Working From Home ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/work-from-home-states-images.png"
                    fill
                    alt="Image Depicting the People Working From Home percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {workFromHome ? `${workFromHome} %` : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="employment-rate-states-text">
                    Private Wage and Salary Workers ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/private-wage-and-salary-states-images.png"
                    fill
                    alt="Image Depicting the Private Wage and Salary Workers percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {privateWageandSalaryWorkers
                  ? `${privateWageandSalaryWorkers} %`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="employment-rate-states-text">
                    People Working In Government Sectors ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/government-worker-states-images.png"
                    fill
                    alt="Image Depicting the People Working In Government Sectors percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {governmentWorkers
                  ? `${governmentWorkers} %`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="employment-rate-states-text">
                    Self-Employed Workers
                    <br />({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/self-employed-states-images.png"
                    fill
                    alt="Image Depicting the Self-Employed Workers percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {selfEmployedInNotOwnIncorporatedBusiness
                  ? `${selfEmployedInNotOwnIncorporatedBusiness} %`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="employment-rate-states-text">
                    Median Income
                    <br />({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/median-income-states-images.png"
                    fill
                    alt="Image Depicting the Median Income percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {medianIncomeDollars
                  ? `${formatNumberWithCommas(medianIncomeDollars)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Workers