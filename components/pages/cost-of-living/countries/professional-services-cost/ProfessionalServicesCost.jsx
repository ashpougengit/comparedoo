import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { dollarizedCountries } from "@/lib/array-list/dollarizedCountries"
import { formatNumberWithCommas, formatUSDWithCommas } from "@/lib/format/format"
import Image from "next/image"

function ProfessionalServicesCost({ country1CostInfo, country2CostInfo, country1Currency, country2Currency, country1UnitValueInUSD, country2UnitValueInUSD, country1LowerCase, country2LowerCase }) {
    const country1 = country1CostInfo.country
    const country1LegalConsultationPerHourRate = country1CostInfo.legalConsultationPerHourRate
    const country1AccountingServicesPerHourRate = country1CostInfo.accountingServicesPerHourRate
    const country1ITSupportServicesPerHourRate = parseFloat(country1CostInfo.ITSupportServicesPerHourRate)
    const country1TechnicianServicesPerHourRate = country1CostInfo.technicianServicesPerHourRate
    const country1TotalCost = ((country1LegalConsultationPerHourRate || 0 ) + (country1AccountingServicesPerHourRate || 0 ) + (country1ITSupportServicesPerHourRate || 0 ) + (country1TechnicianServicesPerHourRate || 0)) * country1UnitValueInUSD

    const country2 = country2CostInfo.country
    const country2LegalConsultationPerHourRate = country2CostInfo.legalConsultationPerHourRate
    const country2AccountingServicesPerHourRate = country2CostInfo.accountingServicesPerHourRate
    const country2ITSupportServicesPerHourRate = parseFloat(country2CostInfo.ITSupportServicesPerHourRate)
    const country2TechnicianServicesPerHourRate = country2CostInfo.technicianServicesPerHourRate
    const country2TotalCost = ((country2LegalConsultationPerHourRate || 0 ) + (country2AccountingServicesPerHourRate || 0 ) + (country2ITSupportServicesPerHourRate || 0 ) + (country2TechnicianServicesPerHourRate || 0)) * country2UnitValueInUSD

    const costTimes = country1TotalCost > country2TotalCost ? (country1TotalCost / country2TotalCost).toFixed(2) : (country2TotalCost / country1TotalCost).toFixed(2)
    const moreOrLess = country1TotalCost > country2TotalCost ? 'more' : 'less'

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
                                        <Image src="/images/indicators-right-image.png" fill alt="Image representing an indicator" />
                                    </div>

                                    <div className="indicator-text">Indicators</div>

                                    <div className="left-indicator">
                                        <Image src="/images/indicators-left-image.png" fill alt="Image illustrating an indicator" />
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="first-entity-map-pages-comparison">
                                        <Image src={`/images/${country1LowerCase}-map-small.png`} fill alt={`Pictorial representation of map of ${country1LowerCase}`} />
                                    </div>

                                    <div className="first-entity-name-pages-comparison">{country1}</div>

                                    <div className="first-entity-flag-pages-comparison">
                                        <Image src={`/images/${country1LowerCase}-flag-small.png`} fill alt={`Image illustrating the flag of ${country1LowerCase}`} />
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="second-entity-map-pages-comparison">
                                        <Image src={`/images/${country2LowerCase}-map-small.png`} fill alt={`Pictorial representation of map of ${country2LowerCase}`} />
                                    </div>

                                    <div className="second-entity-name-pages-comparison"> {country2} </div>

                                    <div className="second-entity-flag-pages-comparison">
                                        <Image src={`/images/${country2LowerCase}-flag-small.png`} fill alt={`Image illustrating the flag of ${country2LowerCase}`} />
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
                                    <Image src="/images/legal-consultation-per-hour-rate-image.png"
                                        fill alt="Image Describing Legal Consultation Per Hour Rate" />
                                </div>
                            </td>

                            <td className="legal-consultation-per-hour-rate-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1LegalConsultationPerHourRate)} ${country1LegalConsultationPerHourRate ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' :(<span
                                    className="legal-consultation-per-hour-rate-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country1LegalConsultationPerHourRate * country1UnitValueInUSD)}`}</span>)}
                            </td>
                            <td className="legal-consultation-per-hour-rate-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2LegalConsultationPerHourRate)} ${country2LegalConsultationPerHourRate ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span
                                    className="legal-consultation-per-hour-rate-second-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country2LegalConsultationPerHourRate * country2UnitValueInUSD)}`}</span>)}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Accounting Services Per Hour Rate</div>
                                <div className="basic-information-images">
                                    <Image src="/images/accounting-services-per-hour-rate-image.png"
                                        fill alt="Image Describing Accounting Services Per Hour Rate" />
                                </div>
                            </td>

                            <td className="accounting-services-per-hour-rate-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1AccountingServicesPerHourRate)} ${country1AccountingServicesPerHourRate ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' :(<span
                                    className="accounting-services-per-hour-rate-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country1AccountingServicesPerHourRate * country1UnitValueInUSD)}`}</span>)}
                            </td>
                            <td className="accounting-services-per-hour-rate-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2AccountingServicesPerHourRate)} ${country2AccountingServicesPerHourRate ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span
                                    className="accounting-services-per-hour-rate-second-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country2AccountingServicesPerHourRate * country2UnitValueInUSD)}`}</span>)}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">IT Support Services Per Hour Rate</div>
                                <div className="basic-information-images">
                                    <Image src="/images/IT-support-services-per-hour-rate-image.png"
                                        fill alt="Image Describing IT Support Services Per Hour Rate" />
                                </div>
                            </td>

                            <td className="IT-support-services-per-hour-rate-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1ITSupportServicesPerHourRate)} ${country1ITSupportServicesPerHourRate ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' :(<span
                                    className="IT-support-services-per-hour-rate-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country1ITSupportServicesPerHourRate * country1UnitValueInUSD)}`}</span>)}
                            </td>
                            <td className="IT-support-services-per-hour-rate-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2ITSupportServicesPerHourRate)} ${country2ITSupportServicesPerHourRate ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span
                                    className="IT-support-services-per-hour-rate-second-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country2ITSupportServicesPerHourRate * country2UnitValueInUSD)}`}</span>)}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Technician Services Per Hour Rate</div>
                                <div className="basic-information-images">
                                    <Image src="/images/technician-services-per-hour-rate-image.png"
                                        fill alt="Image Describing Technician Services Per Hour Rate" />
                                </div>
                            </td>

                            <td className="technical-services-per-hour-rate-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1TechnicianServicesPerHourRate)} ${country1TechnicianServicesPerHourRate ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' :(<span
                                    className="technical-services-per-hour-rate-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country1TechnicianServicesPerHourRate * country1UnitValueInUSD)}`}</span>)}
                            </td>
                            <td className="technical-services-per-hour-rate-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2TechnicianServicesPerHourRate)} ${country2TechnicianServicesPerHourRate ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span
                                    className="technical-services-per-hour-rate-second-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country2TechnicianServicesPerHourRate * country2UnitValueInUSD)}`}</span>)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="paragraph-for-pages-below-table">
                <div className="para-for-pages-single-div">
                    <p>
                        Professional Services cost <strong>
                            <span className="professional-services-cost-calculation"> {costTimes} </span> times </strong> <span
                                className="professional-services-cost-more-or-less-calculation"> {moreOrLess} </span> in <span className="first-entity-name-pages-paragraph"> {country1}</span>, as compared to

                        <span className="second-entity-name-pages-paragraph"> {country2}</span>.
                    </p>
                </div>
            </div>

        </>
    )
}

export default ProfessionalServicesCost