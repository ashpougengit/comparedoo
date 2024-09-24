import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { formatCost, isDollarized } from "@/lib/format/formatCost"
import Image from "next/image"

function ProfessionalServices({ slug1, slug2, value1, value2, slug1CostInfo, slug2CostInfo, slug1Currency, slug2Currency, slug1ExchangeRate, slug2ExchangeRate, slug1LowerCase, slug2LowerCase }) {
    const slug1LegalConsultationPerHourRate = slug1CostInfo.legalConsultationPerHourRate
    const slug1AccountingServicesPerHourRate = slug1CostInfo.accountingServicesPerHourRate
    const slug1ITSupportServicesPerHourRate = parseFloat(slug1CostInfo.ITSupportServicesPerHourRate)
    const slug1TechnicianServicesPerHourRate = slug1CostInfo.technicianServicesPerHourRate
    const slug1TotalCost = ((slug1LegalConsultationPerHourRate || 0) + (slug1AccountingServicesPerHourRate || 0) + (slug1ITSupportServicesPerHourRate || 0) + (slug1TechnicianServicesPerHourRate || 0)) * slug1ExchangeRate

    const slug2LegalConsultationPerHourRate = slug2CostInfo.legalConsultationPerHourRate
    const slug2AccountingServicesPerHourRate = slug2CostInfo.accountingServicesPerHourRate
    const slug2ITSupportServicesPerHourRate = parseFloat(slug2CostInfo.ITSupportServicesPerHourRate)
    const slug2TechnicianServicesPerHourRate = slug2CostInfo.technicianServicesPerHourRate
    const slug2TotalCost = ((slug2LegalConsultationPerHourRate || 0) + (slug2AccountingServicesPerHourRate || 0) + (slug2ITSupportServicesPerHourRate || 0) + (slug2TechnicianServicesPerHourRate || 0)) * slug2ExchangeRate

    const costTimes = slug1TotalCost > slug2TotalCost ? (slug1TotalCost / slug2TotalCost).toFixed(2) : (slug2TotalCost / slug1TotalCost).toFixed(2)
    const moreOrLess = slug1TotalCost > slug2TotalCost ? 'more' : 'less'

    const isDollarizedSlug1 = isDollarized(value1, slug1);
    const isDollarizedSlug2 = isDollarized(value2, slug2);

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
                                            fill alt="Image representing an indicator" />
                                    </div>

                                    <div className="indicator-text">Indicators</div>

                                    <div className="left-indicator">
                                        <Image
                                            src="/images/indicators-left-image.png"
                                            fill alt="Image illustrating an indicator" />
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="first-entity-map-pages-comparison">
                                        <Image src={`/images/${slug1LowerCase}-map-small.png`} fill alt={`Pictorial representation of map of ${slug1LowerCase}`} />
                                    </div>

                                    <div className="first-entity-name-pages-comparison">{slug1}</div>

                                    <div className="first-entity-flag-pages-comparison">
                                        <Image src={`/images/${slug1LowerCase}-flag-small.png`} fill alt={`Image illustrating the flag of ${slug1LowerCase}`} />
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="second-entity-map-pages-comparison">
                                        <Image src={`/images/${slug2LowerCase}-map-small.png`} fill alt={`Pictorial representation of map of ${slug2LowerCase}`} />
                                    </div>

                                    <div className="second-entity-name-pages-comparison"> {slug2} </div>

                                    <div className="second-entity-flag-pages-comparison">
                                        <Image src={`/images/${slug2LowerCase}-flag-small.png`} fill alt={`Image illustrating the flag of ${slug2LowerCase}`} />
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Legal Consultation Per Hour Rate</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/legal-consultation-per-hour-rate-image.png"
                                        fill alt="Image Describing Legal Consultation Per Hour Rate" />
                                </div>
                            </td>

                            <td
                                className="legal-consultation-per-hour-rate-first-entity all-indicator-answers">
                                {slug1LegalConsultationPerHourRate ? formatCost(slug1LegalConsultationPerHourRate, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td
                                className="legal-consultation-per-hour-rate-second-entity all-indicator-answers">
                                {slug2LegalConsultationPerHourRate ? formatCost(slug2LegalConsultationPerHourRate, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
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
                                        fill alt="Image Describing Accounting Services Per Hour Rate" />
                                </div>
                            </td>

                            <td
                                className="accounting-services-per-hour-rate-first-entity all-indicator-answers">
                                {slug1AccountingServicesPerHourRate ? formatCost(slug1AccountingServicesPerHourRate, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td
                                className="accounting-services-per-hour-rate-second-entity all-indicator-answers">
                                {slug2AccountingServicesPerHourRate ? formatCost(slug2AccountingServicesPerHourRate, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
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
                                        fill alt="Image Describing IT Support Services Per Hour Rate" />
                                </div>
                            </td>

                            <td
                                className="IT-support-services-per-hour-rate-first-entity all-indicator-answers">
                                {slug1ITSupportServicesPerHourRate ? formatCost(slug1ITSupportServicesPerHourRate, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td
                                className="IT-support-services-per-hour-rate-second-entity all-indicator-answers">
                                {slug2ITSupportServicesPerHourRate ? formatCost(slug2ITSupportServicesPerHourRate, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
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
                                        fill alt="Image Describing Technician Services Per Hour Rate" />
                                </div>
                            </td>

                            <td
                                className="technical-services-per-hour-rate-first-entity all-indicator-answers">
                                {slug1TechnicianServicesPerHourRate ? formatCost(slug1TechnicianServicesPerHourRate, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td
                                className="technical-services-per-hour-rate-second-entity all-indicator-answers">
                                {slug2TechnicianServicesPerHourRate ? formatCost(slug2TechnicianServicesPerHourRate, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="paragraph-for-pages-below-table">
                <div className="para-for-pages-single-div">
                    <p>
                        Professional Services cost
                        <strong>
                            <span className="professional-services-cost-calculation"> {costTimes} </span>
                            times{' '}
                        </strong>
                        <span className="professional-services-cost-more-or-less-calculation">
                            {moreOrLess}{' '}
                        </span>
                        in
                        <span className="first-entity-name-pages-paragraph"> {slug1}</span>
                        , as compared to

                        <span className="second-entity-name-pages-paragraph"> {slug2}</span>
                        .
                    </p>
                </div>
            </div>
        </>
    )
}

export default ProfessionalServices