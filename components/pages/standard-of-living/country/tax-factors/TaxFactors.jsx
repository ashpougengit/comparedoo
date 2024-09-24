import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { lastYear } from "@/lib/date-and-time/dateAndTime";
import Image from "next/image";

function TaxFactors({ standardInfo, countryURLCase }) {
    const country = standardInfo.country;
    const grossNationalSavings = standardInfo.grossNationalSavings;
    const taxRevenue = standardInfo.taxRevenue;
    const taxesOnExportsPercentageOfTaxRevenue = standardInfo.taxesOnExportsPercentageOfTaxRevenue;
    const taxesOnGoodsAndServicesPercentageOfRevenue = standardInfo.taxesOnGoodsAndServicesPercentageOfRevenue;
    const taxesOnInternationalTradePercentageOfRevenue = standardInfo.taxesOnInternationalTradePercentageOfRevenue;
    const timeToPrepareAndPayTaxesHours = standardInfo.timeToPrepareAndPayTaxesHours;
    const customsAndOtherImportDutiesPercentageOfTaxRevenue = standardInfo.customsAndOtherImportDutiesPercentageOfTaxRevenue;

    return (
        <>
            <AdsHeaderBanner />

            <div className="economic-factors-comparison">
                <h2 className="pages-h2">Tax Factors Information</h2>
            </div>
            <div className="tax-factors-comparison-div1">

                <table className="indicators-single-country-divs">

                    <thead>
                        <tr className="first-tr">
                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="right-indicator">
                                        <Image src="/images/indicators-right-image.png" fill alt="Image representing an indicator" />
                                    </div>

                                    <div className="indicator-text">
                                        Indicators
                                    </div>

                                    <div className="left-indicator">
                                        <Image src="/images/indicators-left-image.png" fill alt="Image illustrating an indicator" />
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="first-entity-map-pages-comparison">
                                        <Image src={`/images/${countryURLCase}-map-small.png`} fill alt={`Pictorial representation of map of ${countryURLCase}`} />
                                    </div>

                                    <div className="first-entity-name-pages-comparison">{country}</div>

                                    <div className="first-entity-flag-pages-comparison">
                                        <Image src={`/images/${countryURLCase}-flag-small.png`} fill alt={`Image illustrating the flag of ${countryURLCase}`} />
                                    </div>
                                </div>
                            </th>



                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">

                                    <div className="gross-national-savings-text">
                                        Gross National Savings <br /> ({lastYear})
                                    </div>



                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/gross-national-savings-image.png"
                                        fill alt="Image representing the total Gross National Savings of any specific country" />
                                </div>
                            </td>
                            <td className="gross-national-savings-answer-first-entity all-indicator-answers">
                                {grossNationalSavings ? `${grossNationalSavings}% of GDP` : 'Yet t Update'}
                            </td>


                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">

                                    <div className="tax-revenue-text">
                                        Tax Revenue <br /> ({lastYear})
                                    </div>



                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/tax-revenue-image.png"
                                        fill alt="Image representing the total tax revenue collection of any specific country" />
                                </div>
                            </td>
                            <td className="tax-revenue-answer-first-entity all-indicator-answers">
                                {taxRevenue ? `${taxRevenue}% of GDP` : 'Yet t Update'}
                            </td>


                        </tr>



                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">

                                    <div className="taxes-on-exports-text">
                                        Taxes on Exports <br /> ({lastYear})
                                    </div>



                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/taxes-on-exports-image.png" fill alt="Image representing Taxes on Exports" />
                                </div>
                            </td>
                            <td className="taxes-on-exports-answer-first-entity all-indicator-answers">
                                {taxesOnExportsPercentageOfTaxRevenue ? `${taxesOnExportsPercentageOfTaxRevenue}% of Tax Revenue` : 'Yet to Update'}
                            </td>


                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">

                                    <div className="taxes-on-goods-and-services-text">
                                        Taxes on Goods and Services <br /> ({lastYear})
                                    </div>



                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/taxes-on-goods-and-services-image.png"
                                        fill alt="Image representing Taxes on Goods and Services" />
                                </div>
                            </td>
                            <td className="taxes-on-goods-and-services-answer-first-entity all-indicator-answers">
                                {taxesOnGoodsAndServicesPercentageOfRevenue ? `${taxesOnGoodsAndServicesPercentageOfRevenue}% of Tax Revenue` : 'Yet to Update'}
                            </td>


                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">

                                    <div className="taxes-on-international-trade-text">
                                        Taxes on International Trade <br /> ({lastYear})
                                    </div>



                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/taxes-on-international-trade-image.png"
                                        fill alt="Image representing Taxes on International Trade" />
                                </div>
                            </td>
                            <td className="taxes-on-international-trade-answer-first-entity all-indicator-answers">
                                {taxesOnInternationalTradePercentageOfRevenue ? `${taxesOnInternationalTradePercentageOfRevenue}% of Revenue` : 'Yet to Update'}
                            </td>


                        </tr>


                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">

                                    <div className="time-to-prepare-and-pay-taxes-text">
                                        Time to Prepare and Pay Taxes <br /> ({lastYear})
                                    </div>



                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/time-to-prepare-and-pay-taxes-image.png"
                                        fill alt="Image representing Time to Prepare and Pay Taxes" />
                                </div>
                            </td>
                            <td className="time-to-prepare-and-pay-taxes-answer-first-entity all-indicator-answers">
                                {timeToPrepareAndPayTaxesHours ?
                                    `${timeToPrepareAndPayTaxesHours} ${timeToPrepareAndPayTaxesHours > 1 ? 'Hours' : 'Hour'}` : 'Yet to Update'}
                            </td>


                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">

                                    <div className="customs-and-other-import-duties-text">
                                        Customs and Other Import Duties ({lastYear})
                                    </div>



                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/customs-and-other-import-duties-image.png"
                                        fill alt="Image representing Customs and Other Import Duties" />
                                </div>
                            </td>
                            <td className="customs-and-other-import-duties-answer-first-entity all-indicator-answers">
                                {customsAndOtherImportDutiesPercentageOfTaxRevenue ? `${customsAndOtherImportDutiesPercentageOfTaxRevenue}% of Tax Revenue` : 'Yet to Update'}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TaxFactors