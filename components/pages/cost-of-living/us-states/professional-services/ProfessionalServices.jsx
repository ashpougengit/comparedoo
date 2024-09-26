import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { formatNumberWithCommas } from "@/lib/format/format"
import Image from "next/image"

function ProfessionalServices({ state1CostInfo, state2CostInfo, state1LowerCase, state2LowerCase }) {
    const state1 = state1CostInfo.state
    const state1LegalConsultationPerHourRate = state1CostInfo.legalConsultationPerHourRate
    const state1AccountingServicesPerHourRate = state1CostInfo.accountingServicesPerHourRate
    const state1ITSupportServicesPerHourRate = parseFloat(state1CostInfo.ITSupportServicesPerHourRate)
    const state1TechnicianServicesPerHourRate = state1CostInfo.technicianServicesPerHourRate
    const state1TotalCost = (state1LegalConsultationPerHourRate || 0) + (state1AccountingServicesPerHourRate || 0) + (state1ITSupportServicesPerHourRate || 0) + (state1TechnicianServicesPerHourRate || 0)

    const state2 = state2CostInfo.state
    const state2LegalConsultationPerHourRate = state2CostInfo.legalConsultationPerHourRate
    const state2AccountingServicesPerHourRate = state2CostInfo.accountingServicesPerHourRate
    const state2ITSupportServicesPerHourRate = parseFloat(state2CostInfo.ITSupportServicesPerHourRate)
    const state2TechnicianServicesPerHourRate = state2CostInfo.technicianServicesPerHourRate
    const state2TotalCost = (state2LegalConsultationPerHourRate || 0) + (state2AccountingServicesPerHourRate || 0) + (state2ITSupportServicesPerHourRate || 0) + (state2TechnicianServicesPerHourRate || 0)

    const costTimes = state1TotalCost > state2TotalCost ? (state1TotalCost / state2TotalCost).toFixed(2) : (state2TotalCost / state1TotalCost).toFixed(2)
    const moreOrLess = state1TotalCost > state2TotalCost ? 'more' : 'less'

    return (
      <>
        <AdsHeaderBanner />

        <div className="geographical-map">
          <h2 className="pages-h2">Professional Services Cost Comparison</h2>
        </div>

        <div className="basic-information-comparison-div1">
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
                        src={`/images/${state1LowerCase}-map-small.png`}
                        layout="fill"
                        objectFit="contain"
                        alt={`Pictorial representation of map of ${state1LowerCase}`}
                      />
                    </div>

                    <div className="first-entity-name-pages-comparison">
                      {state1}
                    </div>

                    <div className="first-entity-flag-pages-comparison">
                      <Image
                        src={`/images/${state1LowerCase}-flag-small.png`}
                        layout="fill"
                        objectFit="contain"
                        alt={`Image illustrating the flag of ${state1LowerCase}`}
                      />
                    </div>
                  </div>
                </th>

                <th>
                  <div className="heading-map-name-flag">
                    <div className="second-entity-map-pages-comparison">
                      <Image
                        src={`/images/${state2LowerCase}-map-small.png`}
                        layout="fill"
                        objectFit="contain"
                        alt={`Pictorial representation of map of ${state2LowerCase}`}
                      />
                    </div>

                    <div className="second-entity-name-pages-comparison">
                      {' '}
                      {state2}{' '}
                    </div>

                    <div className="second-entity-flag-pages-comparison">
                      <Image
                        src={`/images/${state2LowerCase}-flag-small.png`}
                        layout="fill"
                        objectFit="contain"
                        alt={`Image illustrating the flag of ${state2LowerCase}`}
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
                    Legal Consultation Per Hour Rate
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/legal-consultation-per-hour-rate-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing Legal Consultation Per Hour Rate"
                    />
                  </div>
                </td>

                <td className="legal-consultation-per-hour-rate-first-entity all-indicator-answers">
                  {state1LegalConsultationPerHourRate
                    ? `${formatNumberWithCommas(
                        state1LegalConsultationPerHourRate
                      )} USD`
                    : 'Yet to Update'}
                </td>
                <td className="legal-consultation-per-hour-rate-second-entity all-indicator-answers">
                  {state2LegalConsultationPerHourRate
                    ? `${formatNumberWithCommas(
                        state2LegalConsultationPerHourRate
                      )} USD`
                    : 'Yet to Update'}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    Accounting Services Per Hour Rate
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/accounting-services-per-hour-rate-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing Accounting Services Per Hour Rate"
                    />
                  </div>
                </td>

                <td className="accounting-services-per-hour-rate-first-entity all-indicator-answers">
                  {state1AccountingServicesPerHourRate
                    ? `${formatNumberWithCommas(
                        state1AccountingServicesPerHourRate
                      )} USD`
                    : 'Yet to Update'}
                </td>
                <td className="accounting-services-per-hour-rate-second-entity all-indicator-answers">
                  {state2AccountingServicesPerHourRate
                    ? `${formatNumberWithCommas(
                        state2AccountingServicesPerHourRate
                      )} USD`
                    : 'Yet to Update'}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    IT Support Services Per Hour Rate
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/IT-support-services-per-hour-rate-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing IT Support Services Per Hour Rate"
                    />
                  </div>
                </td>

                <td className="IT-support-services-per-hour-rate-first-entity all-indicator-answers">
                  {state1ITSupportServicesPerHourRate
                    ? `${formatNumberWithCommas(
                        state1ITSupportServicesPerHourRate
                      )} USD`
                    : 'Yet to Update'}
                </td>
                <td className="IT-support-services-per-hour-rate-second-entity all-indicator-answers">
                  {state2ITSupportServicesPerHourRate
                    ? `${formatNumberWithCommas(
                        state2ITSupportServicesPerHourRate
                      )} USD`
                    : 'Yet to Update'}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    Technician Services Per Hour Rate
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/technician-services-per-hour-rate-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing Technician Services Per Hour Rate"
                    />
                  </div>
                </td>

                <td className="technical-services-per-hour-rate-first-entity all-indicator-answers">
                  {state1TechnicianServicesPerHourRate
                    ? `${formatNumberWithCommas(
                        state1TechnicianServicesPerHourRate
                      )} USD`
                    : 'Yet to Update'}
                </td>
                <td className="technical-services-per-hour-rate-second-entity all-indicator-answers">
                  {state2TechnicianServicesPerHourRate
                    ? `${formatNumberWithCommas(
                        state2TechnicianServicesPerHourRate
                      )} USD`
                    : 'Yet to Update'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="paragraph-for-pages-below-table">
          <div className="para-for-pages-single-div">
            <p>
              Professional Services cost{' '}
              <strong>
                <span className="professional-services-cost-calculation">
                  {' '}
                  {costTimes}{' '}
                </span>{' '}
                times{' '}
              </strong>{' '}
              <span className="professional-services-cost-more-or-less-calculation">
                {' '}
                {moreOrLess}{' '}
              </span>{' '}
              in{' '}
              <span className="first-entity-name-pages-paragraph">
                {' '}
                {state1}
              </span>
              , as compared to
              <span className="second-entity-name-pages-paragraph">
                {' '}
                {state2}
              </span>
              .
            </p>
          </div>
        </div>
      </>
    );
}

export default ProfessionalServices