import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { dollarizedCountries } from "@/lib/array-list/dollarizedCountries"
import { formatNumberWithCommas, formatUSDWithCommas } from "@/lib/format/format"
import Image from "next/image"

function Drinks({ costInfo, currency, unitValueInUSD, countryLowerCase }) {
    const country = costInfo.country
    const wineMidRangeBottle = costInfo.wineMidRangeBottle
    const glassOfWine = costInfo.glassOfWine
    const domesticBeerHalfLiter = costInfo.domesticBeerHalfLiter
    const importedBeerHalfLiter = costInfo.importedBeerHalfLiter
    const domesticAlcohol1Liter = costInfo.domesticAlcohol1Liter
    const brandedAlcohol1Liter = costInfo.brandedAlcohol1Liter

    return (
        <>
            <AdsHeaderBanner />

            <div className="geographical-map">
                <h2 className="pages-h2">Drinks Cost</h2>
            </div>

            <div className="basic-information-comparison-div1">
                <table className="indicators-single-country-divs">
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
                                        <Image src={`/images/${countryLowerCase}-map-small.png`} fill alt={`Pictorial representation of map of ${countryLowerCase}`} />
                                    </div>

                                    <div className="first-entity-name-pages-comparison">{country}</div>

                                    <div className="first-entity-flag-pages-comparison">
                                        <Image src={`/images/${countryLowerCase}-flag-small.png`} fill alt={`Image illustrating the flag of ${countryLowerCase}`} />
                                    </div>
                                </div>
                            </th>


                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Wine Mid-Range Bottle</div>
                                <div className="basic-information-images">
                                    <Image src="/images/wine-bottle-image.png" fill alt="Image Describing Wine Mid Range Bottle" />
                                </div>
                            </td>

                            <td className="wine-mid-range-bottle-first-entity all-indicator-answers">{`${formatNumberWithCommas(wineMidRangeBottle)} ${wineMidRangeBottle ? currency : ''}`}
                                <br /> {dollarizedCountries.includes(country) ? '' : (<span className="wine-mid-range-bottle-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(wineMidRangeBottle * unitValueInUSD)}`}</span>)}
                            </td>

                        </tr>



                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Glass of Wine</div>
                                <div className="basic-information-images">
                                    <Image src="/images/glass-of-wine.png" fill alt="Image Describing cost of Glass of Wine" />
                                </div>
                            </td>

                            <td className="three-course-meal-for-two-first-entity all-indicator-answers">{`${formatNumberWithCommas(glassOfWine)} ${glassOfWine ? currency : ''}`}
                                <br /> {dollarizedCountries.includes(country) ? '' : (<span className="three-course-meal-for-two-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(glassOfWine * unitValueInUSD)}`}</span>)}
                            </td>

                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Domestic Beer Half Liter</div>
                                <div className="basic-information-images">
                                    <Image src="/images/beer-bottle-domestic-image.png"
                                        fill alt="Image Describing the cost of a domestic beer of half liter" />
                                </div>
                            </td>

                            <td className="domestic-beer-half-liter-first-entity all-indicator-answers">{`${formatNumberWithCommas(domesticBeerHalfLiter)} ${domesticBeerHalfLiter ? currency : ''}`}
                                <br /> {dollarizedCountries.includes(country) ? '' : (<span className="domestic-beer-half-liter-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(domesticBeerHalfLiter * unitValueInUSD)}`}</span>)}
                            </td>

                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Imported Beer Half Liter</div>
                                <div className="basic-information-images">
                                    <Image src="/images/beer-bottle-branded-image.png"
                                        fill alt="Image Describing the cost of a branded beer of half liter" />
                                </div>
                            </td>

                            <td className="imported-beer-half-liter-first-entity all-indicator-answers">{`${formatNumberWithCommas(importedBeerHalfLiter)} ${importedBeerHalfLiter ? currency : ''}`}
                                <br /> {dollarizedCountries.includes(country) ? '' : (<span className="imported-beer-half-liter-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(importedBeerHalfLiter * unitValueInUSD)}`}</span>)}
                            </td>

                        </tr>


                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Domestic Alcohol 1 Liter</div>
                                <div className="basic-information-images">
                                    <Image src="/images/alcohol-bottle-domestic-image.png"
                                        fill alt="Image Describing the cost of a Domestic Alcohol 1 liter" />
                                </div>
                            </td>

                            <td className="domestic-alcohol-1-liter-first-entity all-indicator-answers">{`${formatNumberWithCommas(domesticAlcohol1Liter)} ${domesticAlcohol1Liter ? currency : ''}`}
                                <br /> {dollarizedCountries.includes(country) ? '' : (<span className="domestic-alcohol-1-liter-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(domesticAlcohol1Liter * unitValueInUSD)}`}</span>)}
                            </td>

                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Branded Alcohol 1 Liter</div>
                                <div className="basic-information-images">
                                    <Image src="/images/alcohol-bottle-branded-image.png"
                                        fill alt="Image Describing the cost of a Branded Alcohol 1 liter" />
                                </div>
                            </td>

                            <td className="branded-alcohol-1-liter-first-entity all-indicator-answers">{`${formatNumberWithCommas(brandedAlcohol1Liter)} ${brandedAlcohol1Liter ? currency : ''}`}
                                <br /> {dollarizedCountries.includes(country) ? '' : (<span className="branded-alcohol-1-liter-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(brandedAlcohol1Liter * unitValueInUSD)}`}</span>)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </>
    )
}

export default Drinks