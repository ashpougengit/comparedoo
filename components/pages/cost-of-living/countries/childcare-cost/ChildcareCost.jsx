import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { dollarizedCountries } from "@/lib/array-list/dollarizedCountries"
import { formatNumberWithCommas, formatUSDWithCommas } from "@/lib/format/format"
import Image from "next/image"

function ChildcareCost({ country1CostInfo, country2CostInfo, country1Currency, country2Currency, country1UnitValueInUSD, country2UnitValueInUSD, country1LowerCase, country2LowerCase }) {
    const country1 = country1CostInfo.country
    const country1ChildrensJeans = country1CostInfo.childrensJeans
    const country1ChildrensSneakers = country1CostInfo.childrensSneakers
    const country1ChildrensWinterCoat = country1CostInfo.childrensWinterCoat
    const country1DaycareInfant = country1CostInfo.daycareInfant
    const country1DaycareToddler = country1CostInfo.daycareToddler
    const country1ChildcareForSickDays = country1CostInfo.childcareForSickDays
    const country1EarlyChildhoodEducationPrograms = country1CostInfo.earlyChildhoodEducationPrograms
    const country1ExtracurricularActivities = country1CostInfo.extracurricularActivities
    const country1SummerCamp = country1CostInfo.summerCamp
    const country1TotalCost = ((country1ChildrensJeans || 0) + (country1ChildrensSneakers || 0) + (country1ChildrensWinterCoat || 0) + (country1DaycareInfant || 0) + (country1DaycareToddler || 0) + (country1ChildcareForSickDays || 0) + (country1EarlyChildhoodEducationPrograms || 0) + (country1ExtracurricularActivities || 0) + (country1SummerCamp || 0)) * country1UnitValueInUSD

    const country2 = country2CostInfo.country
    const country2ChildrensJeans = country2CostInfo.childrensJeans
    const country2ChildrensSneakers = country2CostInfo.childrensSneakers
    const country2ChildrensWinterCoat = country2CostInfo.childrensWinterCoat
    const country2DaycareInfant = country2CostInfo.daycareInfant
    const country2DaycareToddler = country2CostInfo.daycareToddler
    const country2ChildcareForSickDays = country2CostInfo.childcareForSickDays
    const country2EarlyChildhoodEducationPrograms = country2CostInfo.earlyChildhoodEducationPrograms
    const country2ExtracurricularActivities = country2CostInfo.extracurricularActivities
    const country2SummerCamp = country2CostInfo.summerCamp
    const country2TotalCost = ((country2ChildrensJeans || 0) + (country2ChildrensSneakers || 0) + (country2ChildrensWinterCoat || 0) + (country2DaycareInfant || 0) + (country2DaycareToddler || 0) + (country2ChildcareForSickDays || 0) + (country2EarlyChildhoodEducationPrograms || 0) + (country2ExtracurricularActivities || 0) + (country2SummerCamp || 0)) * country2UnitValueInUSD

    const costTimes = country1TotalCost > country2TotalCost ? (country1TotalCost / country2TotalCost).toFixed(2) : (country2TotalCost / country1TotalCost).toFixed(2)
    const moreOrLess = country1TotalCost > country2TotalCost ? 'more' : 'less'

    return (
        <>
            <AdsHeaderBanner />

            <div className="geographical-map">
                <h2 className="pages-h2">Childcare Cost Comparison</h2>
            </div>

            <div className="basic-information-comparison-div1">
                <table className="indicators-first-entity-and-second-entity-div1">
                    <thead>
                        <tr className="first-tr">
                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="right-indicator">
                                        <Image src="/images/indicators-right-image.png"layout="fill"
objectFit="contain"alt="Image representing an indicator" />
                                    </div>

                                    <div className="indicator-text">Indicators</div>

                                    <div className="left-indicator">
                                        <Image src="/images/indicators-left-image.png"layout="fill"
objectFit="contain"alt="Image illustrating an indicator" />
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="first-entity-map-pages-comparison">
                                        <Image src={`/images/${country1LowerCase}-map-small.png`}layout="fill"
objectFit="contain"alt={`Pictorial representation of map of ${country1LowerCase}`} />
                                    </div>

                                    <div className="first-entity-name-pages-comparison">{country1}</div>

                                    <div className="first-entity-flag-pages-comparison">
                                        <Image src={`/images/${country1LowerCase}-flag-small.png`}layout="fill"
objectFit="contain"alt={`Image illustrating the flag of ${country1LowerCase}`} />
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="second-entity-map-pages-comparison">
                                        <Image src={`/images/${country2LowerCase}-map-small.png`}layout="fill"
objectFit="contain"alt={`Pictorial representation of map of ${country2LowerCase}`} />
                                    </div>

                                    <div className="second-entity-name-pages-comparison"> {country2} </div>

                                    <div className="second-entity-flag-pages-comparison">
                                        <Image src={`/images/${country2LowerCase}-flag-small.png`}layout="fill"
objectFit="contain"alt={`Image illustrating the flag of ${country2LowerCase}`} />
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Children&apos;s Jeans</div>
                                <div className="basic-information-images">
                                    <Image src="/images/children-jeans-image.png"layout="fill"
objectFit="contain"alt="Image Describing Children Jeans" />
                                </div>
                            </td>

                            <td className="children-jeans-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1ChildrensJeans)} ${country1ChildrensJeans ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="children-jeans-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country1ChildrensJeans * country1UnitValueInUSD)}`}</span>)}
                            </td>
                            <td className="children-jeans-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2ChildrensJeans)} ${country2ChildrensJeans ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="children-jeans-second-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country2ChildrensJeans * country2UnitValueInUSD)}`}</span>)}
                            </td>
                        </tr>


                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Children&apos;s Normal Sneakers</div>
                                <div className="basic-information-images">
                                    <Image src="/images/children-sneakers-image.png"layout="fill"
objectFit="contain"alt="Image Describing Children Normal Sneakers" />
                                </div>
                            </td>

                            <td className="children-sneakers-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1ChildrensSneakers)} ${country1ChildrensSneakers ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="children-sneakers-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country1ChildrensSneakers * country1UnitValueInUSD)}`}</span>)}
                            </td>
                            <td className="children-sneakers-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2ChildrensSneakers)} ${country2ChildrensSneakers ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="children-sneakers-second-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country2ChildrensSneakers * country2UnitValueInUSD)}`}</span>)}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Children&apos;s Winter Coat</div>
                                <div className="basic-information-images">
                                    <Image src="/images/children-winter-coat-image.png"layout="fill"
objectFit="contain"alt="Image Describing Children's Winter Coat" />
                                </div>
                            </td>

                            <td className="children-winter-coat-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1ChildrensWinterCoat)} ${country1ChildrensWinterCoat ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="children-winter-coat-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country1ChildrensWinterCoat * country1UnitValueInUSD)}`}</span>)}
                            </td>
                            <td className="children-winter-coat-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2ChildrensWinterCoat)} ${country2ChildrensWinterCoat ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="children-winter-coat-second-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country2ChildrensWinterCoat * country2UnitValueInUSD)}`}</span>)}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Daycare for Infant</div>
                                <div className="basic-information-images">
                                    <Image src="/images/day-care-infant-image.png"layout="fill"
objectFit="contain"alt="Image Describing Daycare for Infant" />
                                </div>
                            </td>

                            <td className="daycare-infant-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1DaycareInfant)} ${country1DaycareInfant ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="daycare-infant-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country1DaycareInfant * country1UnitValueInUSD)}`}</span>)}
                            </td>
                            <td className="daycare-infant-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2DaycareInfant)} ${country2DaycareInfant ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="daycare-infant-second-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country2DaycareInfant * country2UnitValueInUSD)}`}</span>)}
                            </td>
                        </tr>


                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Daycare for Toddler</div>
                                <div className="basic-information-images">
                                    <Image src="/images/day-care-toddler-image.png"layout="fill"
objectFit="contain"alt="Image Describing Daycare for Toddler" />
                                </div>
                            </td>

                            <td className="daycare-toddler-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1DaycareToddler)} ${country1DaycareToddler ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="daycare-toddler-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country1DaycareToddler * country1UnitValueInUSD)}`}</span>)}
                            </td>
                            <td className="daycare-toddler-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2DaycareToddler)} ${country2DaycareToddler ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="daycare-toddler-second-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country2DaycareToddler * country2UnitValueInUSD)}`}</span>)}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Childcare for Sick Days</div>
                                <div className="basic-information-images">
                                    <Image src="/images/children-care-for-sick-days-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing Childcare for Sick Days" />
                                </div>
                            </td>

                            <td className="childcare-for-sick-days-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1ChildcareForSickDays)} ${country1ChildcareForSickDays ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="childcare-for-sick-days-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country1ChildcareForSickDays * country1UnitValueInUSD)}`}</span>)}
                            </td>
                            <td className="childcare-for-sick-days-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2ChildcareForSickDays)} ${country2ChildcareForSickDays ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="childcare-for-sick-days-second-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country2ChildcareForSickDays * country2UnitValueInUSD)}`}</span>)}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Early Childhood Education Programs</div>
                                <div className="basic-information-images">
                                    <Image src="/images/early-childhood-education-programs-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing Early Childhood Education Programs" />
                                </div>
                            </td>

                            <td className="early-childhood-education-program-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1EarlyChildhoodEducationPrograms)} ${country1EarlyChildhoodEducationPrograms ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span
                                    className="early-childhood-education-program-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country1EarlyChildhoodEducationPrograms * country1UnitValueInUSD)}`}</span>)}
                            </td>
                            <td className="early-childhood-education-program-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2EarlyChildhoodEducationPrograms)} ${country2EarlyChildhoodEducationPrograms ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span
                                    className="early-childhood-education-program-second-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country2EarlyChildhoodEducationPrograms * country2UnitValueInUSD)}`}</span>)}
                            </td>
                        </tr>


                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Extra Curricular Activities</div>
                                <div className="basic-information-images">
                                    <Image src="/images/extra-curricular-activities-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing Extra Curricular Activities" />
                                </div>
                            </td>

                            <td className="extra-curricular-activities-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1ExtracurricularActivities)} ${country1ExtracurricularActivities ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="extra-curricular-activities-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country1ExtracurricularActivities * country1UnitValueInUSD)}`}</span>)}
                            </td>
                            <td className="extra-curricular-activities-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2ExtracurricularActivities)} ${country2ExtracurricularActivities ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span
                                    className="extra-curricular-activities-second-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country2ExtracurricularActivities * country2UnitValueInUSD)}`}</span>)}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Summer Camp for Kids</div>
                                <div className="basic-information-images">
                                    <Image src="/images/summer-camp-image.png"layout="fill"
objectFit="contain"alt="Image Describing Summer Camp" />
                                </div>
                            </td>

                            <td className="summer-camp-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1SummerCamp)} ${country1SummerCamp ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="summer-camp-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country1SummerCamp * country1UnitValueInUSD)}`}</span>)}
                            </td>
                            <td className="summer-camp-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2SummerCamp)} ${country2SummerCamp ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="summer-camp-second-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country2SummerCamp * country2UnitValueInUSD)}`}</span>)}
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <div className="paragraph-for-pages-below-table">
                <div className="para-for-pages-single-div">
                    <h3>
                        Does Childcare Care cost more in
                        <span className="first-entity-name-pages-paragraph"> {country1} </span> than in
                        <span className="second-entity-name-pages-paragraph"> {country2}</span>?
                    </h3>
                    <p>
                        If you lived in
                        <span className="first-entity-name-pages-paragraph"> {country1}</span>, instead of
                        <span className="second-entity-name-pages-paragraph"> {country2}</span>, you would have
                        to pay
                        <strong>
                            <span className="childcare-cost-calculation"> {costTimes} </span> times </strong> <span
                                className="childcare-cost-more-or-less-calculation"> {moreOrLess} </span>
                        for Childcare and kids clothing.
                    </p>
                </div>
            </div>
        </>
    )
}

export default ChildcareCost