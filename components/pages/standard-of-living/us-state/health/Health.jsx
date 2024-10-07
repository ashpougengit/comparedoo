import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { lastYear } from "@/lib/date-and-time/dateAndTime"
import { formatNumberWithCommas } from "@/lib/format/format"
import Image from "next/image"

function Health({ standardInfo, stateURLCase }) {
  const state = standardInfo.state
  const totalRegisteredPhysicians = standardInfo.totalRegisteredPhysicians
  const totalRegisteredNurses = standardInfo.totalRegisteredNurses
  const availableHospitalBeds = standardInfo.availableHospitalBeds
  const disabilityPercentage = standardInfo.disabilityPercentage
  const populationWithoutHealthInsuranceCoverage = standardInfo.populationWithoutHealthInsuranceCoverage

  return (
    <>
      <AdsHeaderBanner />

      <div className="economic-factors-comparison">
        <h2 className="pages-h2">Health Factors Information</h2>
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
                  <div className="health-factors-text">
                    Total Registered Physicians
                    <br />({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/total-registered-physicians-states-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image representing Total Registered Physicians of any specific country or state"
                  />
                </div>
              </td>
              <td className="income-tax-rates-answer-first-entity all-indicator-answers">
                {totalRegisteredPhysicians
                  ? `${formatNumberWithCommas(totalRegisteredPhysicians)}`
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
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image representing Total Registered Nurses of any specific country or state"
                  />
                </div>
              </td>
              <td className="income-tax-rates-answer-first-entity all-indicator-answers">
                {totalRegisteredNurses
                  ? `${formatNumberWithCommas(totalRegisteredNurses)}`
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
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image representing Available Hospital Beds of any specific country or state"
                  />
                </div>
              </td>
              <td className="income-tax-rates-answer-first-entity all-indicator-answers">
                {availableHospitalBeds
                  ? `${formatNumberWithCommas(availableHospitalBeds)}`
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
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image representing Disability Percentage of any specific country or state"
                  />
                </div>
              </td>
              <td className="income-tax-rates-answer-first-entity all-indicator-answers">
                {disabilityPercentage
                  ? `${disabilityPercentage} %`
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
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image representing Population Without Health Insurance Coverage of any specific country or state"
                  />
                </div>
              </td>
              <td className="income-tax-rates-first-entity all-indicator-answers">
                {populationWithoutHealthInsuranceCoverage
                  ? `${populationWithoutHealthInsuranceCoverage} %`
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