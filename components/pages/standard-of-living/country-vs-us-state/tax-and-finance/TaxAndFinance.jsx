import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { lastYear } from "@/lib/date-and-time/dateAndTime"
import { formatPercentage } from "@/lib/format/format"
import Image from "next/image"

function TaxAndFinance({ slug1, slug2, slug1StandardInfo, slug2StandardInfo, slug1URLCase, slug2URLCase }) {
    const slug1IncomeTaxRates = slug1StandardInfo.incomeTaxRates
    const slug1SalesTaxRates = slug1StandardInfo.salesTaxRates
    const slug1PropertyTaxRates = slug1StandardInfo.propertyTaxRates
    const slug1CorporateTaxRates = slug1StandardInfo.corporateTaxRates

    const slug2IncomeTaxRates = slug2StandardInfo.incomeTaxRates
    const slug2SalesTaxRates = slug2StandardInfo.salesTaxRates
    const slug2PropertyTaxRates = slug2StandardInfo.propertyTaxRates
    const slug2CorporateTaxRates = slug2StandardInfo.corporateTaxRates

    return (
        <>
            <AdsHeaderBanner />

            <div className="economic-factors-comparison">
                <h2 className="pages-h2">Tax and Finance Factors Comparison</h2>
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
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="Image representing an indicator" />
                                    </div>
                                    <div className="indicator-text">Indicators</div>
                                    <div className="left-indicator">
                                        <Image
                                            src="/images/indicators-left-image.png"
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="Image illustrating an indicator" />
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="first-entity-map-pages-comparison">
                                        <Image
                                            src={`/images/${slug1URLCase}-map-small.png`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                                            alt={`Pictorial representation of map of ${slug1URLCase}`}
                                        />
                                    </div>

                                    <div className="first-entity-name-pages-comparison">
                                        {slug1}
                                    </div>

                                    <div className="first-entity-flag-pages-comparison">
                                        <Image
                                            src={`/images/${slug1URLCase}-flag-small.png`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                                            alt={`Image illustrating the flag of ${slug1URLCase}`}
                                        />
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="second-entity-map-pages-comparison">
                                        <Image
                                            src={`/images/${slug2URLCase}-map-small.png`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                                            alt={`Pictorial representation of map of ${slug2URLCase}`}
                                        />
                                    </div>

                                    <div className="second-entity-name-pages-comparison">
                                        {' '}
                                        {slug2}{' '}
                                    </div>

                                    <div className="second-entity-flag-pages-comparison">
                                        <Image src={`/images/${slug2URLCase}-flag-small.png`} fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={`Image illustrating the flag of ${slug2URLCase}`} />
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">
                                    <div className="income-tax-rates-text">
                                        Income Tax Rates
                                        <br />
                                        ({lastYear})
                                    </div>
                                </div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/income-tax-rates-states-image.png"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="Image representing Income Tax Rates of any specific country or state" />
                                </div>
                            </td>
                            <td
                                className="income-tax-rates-answer-first-entity all-indicator-answers">
                                {formatPercentage(slug1IncomeTaxRates)}
                            </td>
                            <td
                                className="income-tax-rates-answer-second-entity all-indicator-answers">
                                {formatPercentage(slug2IncomeTaxRates)}
                            </td>
                        </tr>
                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">
                                    <div className="sales-tax-rates-text">
                                        Sales Tax Rates
                                        <br />
                                        ({lastYear})
                                    </div>
                                </div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/sales-tax-rates-states-image.png"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="Image representing Sales Tax Rates of any specific country or state" />
                                </div>
                            </td>
                            <td className="sales-tax-rates-answer-first-entity all-indicator-answers">
                                {formatPercentage(slug1SalesTaxRates)}
                            </td>
                            <td
                                className="sales-tax-rates-answer-second-entity all-indicator-answers">
                                {formatPercentage(slug2SalesTaxRates)}
                            </td>
                        </tr>
                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">
                                    <div className="property-tax-rates-text">
                                        Property Tax Rates
                                        <br />
                                        ({lastYear})
                                    </div>
                                </div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/property-tax-rates-states-image.png"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="Image representing Property Tax Rates of any specific country or state" />
                                </div>
                            </td>
                            <td
                                className="property-tax-rates-answer-first-entity all-indicator-answers">
                                {formatPercentage(slug1PropertyTaxRates)}
                            </td>
                            <td
                                className="property-tax-rates-answer-second-entity all-indicator-answers">
                                {formatPercentage(slug2PropertyTaxRates)}
                            </td>
                        </tr>
                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">
                                    <div className="corporate-tax-rates-text">
                                        Corporate Tax Rates
                                        <br />
                                        ({lastYear})
                                    </div>
                                </div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/corporate-tax-rates-states-image.png"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="Image representing Corporate Tax Rates of any specific country or state" />
                                </div>
                            </td>
                            <td
                                className="corporate-tax-rates-answer-first-entity all-indicator-answers">
                                {formatPercentage(slug1CorporateTaxRates)}
                            </td>
                            <td
                                className="corporate-tax-rates-answer-second-entity all-indicator-answers">
                                {formatPercentage(slug2CorporateTaxRates)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TaxAndFinance