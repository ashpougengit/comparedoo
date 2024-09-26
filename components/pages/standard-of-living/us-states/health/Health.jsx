import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { lastYear } from "@/lib/date-and-time/dateAndTime"
import { formatNumberWithCommas } from "@/lib/format/format"
import Image from "next/image"

function Health({ state1StandardInfo, state2StandardInfo, state1URLCase, state2URLCase }) {
    const state1 = state1StandardInfo.state
    const state1TotalRegisteredPhysicians = state1StandardInfo.totalRegisteredPhysicians
    const state1TotalRegisteredNurses = state1StandardInfo.totalRegisteredNurses
    const state1AvailableHospitalBeds = state1StandardInfo.availableHospitalBeds
    const state1DisabilityPercentage = state1StandardInfo.disabilityPercentage
    const state1PopulationWithoutHealthInsuranceCoverage = state1StandardInfo.populationWithoutHealthInsuranceCoverage

    const state2 = state2StandardInfo.state
    const state2TotalRegisteredPhysicians = state2StandardInfo.totalRegisteredPhysicians
    const state2TotalRegisteredNurses = state2StandardInfo.totalRegisteredNurses
    const state2AvailableHospitalBeds = state2StandardInfo.availableHospitalBeds
    const state2DisabilityPercentage = state2StandardInfo.disabilityPercentage
    const state2PopulationWithoutHealthInsuranceCoverage = state2StandardInfo.populationWithoutHealthInsuranceCoverage

    return (
      <>
        <AdsHeaderBanner />

        <div className="economic-factors-comparison">
          <h2 className="pages-h2">Health Factors Comparison</h2>
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
                    <div className="health-factors-text">
                      Total Registered Physicians
                      <br />({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/total-registered-physicians-states-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image representing Total Registered Physicians of any specific country or state"
                    />
                  </div>
                </td>
                <td className="income-tax-rates-answer-first-entity all-indicator-answers">
                  {state1TotalRegisteredPhysicians
                    ? `${formatNumberWithCommas(
                        state1TotalRegisteredPhysicians
                      )}`
                    : 'Yet to Update'}
                </td>
                <td className="income-tax-rates-answer-second-entity all-indicator-answers">
                  {state2TotalRegisteredPhysicians
                    ? `${formatNumberWithCommas(
                        state2TotalRegisteredPhysicians
                      )}`
                    : 'Yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    <div className="health-factors-text">
                      Total Registered Nurses
                      <br />({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/total-registered-nurses-states-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image representing Total Registered Nurses of any specific country or state"
                    />
                  </div>
                </td>
                <td className="income-tax-rates-answer-first-entity all-indicator-answers">
                  {state1TotalRegisteredNurses
                    ? `${formatNumberWithCommas(state1TotalRegisteredNurses)}`
                    : 'Yet to Update'}
                </td>
                <td className="income-tax-rates-answer-second-entity all-indicator-answers">
                  {state2TotalRegisteredNurses
                    ? `${formatNumberWithCommas(state2TotalRegisteredNurses)}`
                    : 'Yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    <div className="health-factors-text">
                      Available Hospital Beds
                      <br />({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/available-hospital-beds-states-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image representing Available Hospital Beds of any specific country or state"
                    />
                  </div>
                </td>
                <td className="income-tax-rates-answer-first-entity all-indicator-answers">
                  {state1AvailableHospitalBeds
                    ? `${formatNumberWithCommas(state1AvailableHospitalBeds)}`
                    : 'Yet to Update'}
                </td>
                <td className="income-tax-rates-answer-second-entity all-indicator-answers">
                  {state2AvailableHospitalBeds
                    ? `${formatNumberWithCommas(state2AvailableHospitalBeds)}`
                    : 'Yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    <div className="health-factors-text">
                      Disability Percentage
                      <br />({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/disability-percentage-states-images.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image representing Disability Percentage of any specific country or state"
                    />
                  </div>
                </td>
                <td className="income-tax-rates-answer-first-entity all-indicator-answers">
                  {state1DisabilityPercentage
                    ? `${state1DisabilityPercentage}%`
                    : 'Yet to Update'}
                </td>
                <td className="income-tax-rates-answer-second-entity all-indicator-answers">
                  {state2DisabilityPercentage
                    ? `${state2DisabilityPercentage}%`
                    : 'Yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    <div className="health-factors-text">
                      Population Without Health Insurance Coverage ({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/population-without-health-insurance-coverage-states-images.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image representing Population Without Health Insurance Coverage of any specific country or state"
                    />
                  </div>
                </td>
                <td className="income-tax-rates-first-entity all-indicator-answers">
                  {state1PopulationWithoutHealthInsuranceCoverage
                    ? `${state1PopulationWithoutHealthInsuranceCoverage}%`
                    : 'Yet to Update'}
                </td>
                <td className="income-tax-rates-second-entity all-indicator-answers">
                  {state2PopulationWithoutHealthInsuranceCoverage
                    ? `${state2PopulationWithoutHealthInsuranceCoverage}%`
                    : 'Yet to Update'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
}

export default Health