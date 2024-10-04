import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { lastYear } from "@/lib/date-and-time/dateAndTime"
import { formatNumberWithCommas } from "@/lib/format/format"
import Image from "next/image"

function Workers({ state1StandardInfo, state2StandardInfo, state1URLCase, state2URLCase }) {
    const state1 = state1StandardInfo.state
    const state1MeanTravelTimeToWorkMinutes = state1StandardInfo.meanTravelTimeToWorkMinutes
    const state1WorkFromHome = state1StandardInfo.workFromHome
    const state1PrivateWageandSalaryWorkers = state1StandardInfo.privateWageandSalaryWorkers
    const state1GovernmentWorkers = state1StandardInfo.governmentWorkers
    const state1SelfEmployedInNotOwnIncorporatedBusiness = state1StandardInfo.selfEmployedInNotOwnIncorporatedBusiness
    const state1MedianIncomeDollars = state1StandardInfo.medianIncomeDollars

    const state2 = state2StandardInfo.state
    const state2MeanTravelTimeToWorkMinutes = state2StandardInfo.meanTravelTimeToWorkMinutes
    const state2WorkFromHome = state2StandardInfo.workFromHome
    const state2PrivateWageandSalaryWorkers = state2StandardInfo.privateWageandSalaryWorkers
    const state2GovernmentWorkers = state2StandardInfo.governmentWorkers
    const state2SelfEmployedInNotOwnIncorporatedBusiness = state2StandardInfo.selfEmployedInNotOwnIncorporatedBusiness
    const state2MedianIncomeDollars = state2StandardInfo.medianIncomeDollars

    return (
      <>
        <AdsHeaderBanner />

        <div className="economic-factors-comparison">
          <h2 className="pages-h2">Types of Workers</h2>
        </div>
        <div className="business-registration-comparison-div1">
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
                    <div className="mean-travel-time-to-work-text">
                      Mean Travel Time to Work
                      <br />({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/mean-travel-time-to-work-states-images.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting the total Mean Travel Time to Work available in any specific country or state"
                    />
                  </div>
                </td>
                <td className="mean-travel-time-to-work-answer-first-entity all-indicator-answers">
                  {state1MeanTravelTimeToWorkMinutes
                    ? `${state1MeanTravelTimeToWorkMinutes} Minutes`
                    : 'Yet to Update'}
                </td>
                <td className="mean-travel-time-to-work-answer-second-entity all-indicator-answers">
                  {state2MeanTravelTimeToWorkMinutes
                    ? `${state2MeanTravelTimeToWorkMinutes} Minutes`
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
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting the People Working From Home percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {state1WorkFromHome
                    ? `${state1WorkFromHome} %`
                    : 'Yet to Update'}
                </td>
                <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                  {state2WorkFromHome
                    ? `${state2WorkFromHome} %`
                    : 'Yet to Update'}
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
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting the Private Wage and Salary Workers percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {state1PrivateWageandSalaryWorkers
                    ? `${state1PrivateWageandSalaryWorkers} %`
                    : 'Yet to Update'}
                </td>
                <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                  {state2PrivateWageandSalaryWorkers
                    ? `${state2PrivateWageandSalaryWorkers} %`
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
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting the People Working In Government Sectors percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {state1GovernmentWorkers
                    ? `${state1GovernmentWorkers} %`
                    : 'Yet to Update'}
                </td>
                <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                  {state2GovernmentWorkers
                    ? `${state2GovernmentWorkers} %`
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
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting the Self-Employed Workers percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {state1SelfEmployedInNotOwnIncorporatedBusiness
                    ? `${state1SelfEmployedInNotOwnIncorporatedBusiness} %`
                    : 'Yet to Update'}
                </td>
                <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                  {state2SelfEmployedInNotOwnIncorporatedBusiness
                    ? `${state2SelfEmployedInNotOwnIncorporatedBusiness} %`
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
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting the Median Income percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {state1MedianIncomeDollars
                    ? `${formatNumberWithCommas(state1MedianIncomeDollars)} USD`
                    : 'Yet to Update'}
                </td>
                <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                  {state2MedianIncomeDollars
                    ? `${formatNumberWithCommas(state2MedianIncomeDollars)} USD`
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