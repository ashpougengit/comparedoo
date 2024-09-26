import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { formatNumberWithCommas } from "@/lib/format/format"
import Image from "next/image"

function Childcare({ state1CostInfo, state2CostInfo, state1LowerCase, state2LowerCase }) {
    const state1 = state1CostInfo.state
    const state1ChildrensJeans = state1CostInfo.childrensJeans
    const state1ChildrensSneakers = state1CostInfo.childrensSneakers
    const state1ChildrensWinterCoat = state1CostInfo.childrensWinterCoat
    const state1DaycareInfant = state1CostInfo.daycareInfant
    const state1DaycareToddler = state1CostInfo.daycareToddler
    const state1ChildcareForSickDays = state1CostInfo.childcareForSickDays
    const state1EarlyChildhoodEducationPrograms = state1CostInfo.earlyChildhoodEducationPrograms
    const state1ExtracurricularActivities = state1CostInfo.extracurricularActivities
    const state1SummerCamp = state1CostInfo.summerCamp
    const state1TotalCost = (state1ChildrensJeans || 0) + (state1ChildrensSneakers || 0) + (state1ChildrensWinterCoat || 0) + (state1DaycareInfant || 0) + (state1DaycareToddler || 0) + (state1ChildcareForSickDays || 0) + (state1EarlyChildhoodEducationPrograms || 0) + (state1ExtracurricularActivities || 0) + (state1SummerCamp || 0)

    const state2 = state2CostInfo.state
    const state2ChildrensJeans = state2CostInfo.childrensJeans
    const state2ChildrensSneakers = state2CostInfo.childrensSneakers
    const state2ChildrensWinterCoat = state2CostInfo.childrensWinterCoat
    const state2DaycareInfant = state2CostInfo.daycareInfant
    const state2DaycareToddler = state2CostInfo.daycareToddler
    const state2ChildcareForSickDays = state2CostInfo.childcareForSickDays
    const state2EarlyChildhoodEducationPrograms = state2CostInfo.earlyChildhoodEducationPrograms
    const state2ExtracurricularActivities = state2CostInfo.extracurricularActivities
    const state2SummerCamp = state2CostInfo.summerCamp
    const state2TotalCost = (state2ChildrensJeans || 0) + (state2ChildrensSneakers || 0) + (state2ChildrensWinterCoat || 0) + (state2DaycareInfant || 0) + (state2DaycareToddler || 0) + (state2ChildcareForSickDays || 0) + (state2EarlyChildhoodEducationPrograms || 0) + (state2ExtracurricularActivities || 0) + (state2SummerCamp || 0)

    const costTimes = state1TotalCost > state2TotalCost ? (state1TotalCost / state2TotalCost).toFixed(2) : (state2TotalCost / state1TotalCost).toFixed(2)
    const moreOrLess = state1TotalCost > state2TotalCost ? 'more' : 'less'

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
                                        <Image src={`/images/${state1LowerCase}-map-small.png`}layout="fill"
objectFit="contain"alt={`Pictorial representation of map of ${state1LowerCase}`} />
                                    </div>

                                    <div className="first-entity-name-pages-comparison">{state1}</div>

                                    <div className="first-entity-flag-pages-comparison">
                                        <Image src={`/images/${state1LowerCase}-flag-small.png`}layout="fill"
objectFit="contain"alt={`Image illustrating the flag of ${state1LowerCase}`} />
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="second-entity-map-pages-comparison">
                                        <Image src={`/images/${state2LowerCase}-map-small.png`}layout="fill"
objectFit="contain"alt={`Pictorial representation of map of ${state2LowerCase}`} />
                                    </div>

                                    <div className="second-entity-name-pages-comparison"> {state2} </div>

                                    <div className="second-entity-flag-pages-comparison">
                                        <Image src={`/images/${state2LowerCase}-flag-small.png`}layout="fill"
objectFit="contain"alt={`Image illustrating the flag of ${state2LowerCase}`} />
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

                            <td className="children-jeans-first-entity all-indicator-answers">
                                {state1ChildrensJeans ? `${formatNumberWithCommas(state1ChildrensJeans)} USD` : 'Yet to Update'}
                            </td>
                            <td className="children-jeans-second-entity all-indicator-answers">
                                {state2ChildrensJeans ? `${formatNumberWithCommas(state2ChildrensJeans)} USD` : 'Yet to Update'}
                            </td>
                        </tr>


                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Children&apos;s Normal Sneakers</div>
                                <div className="basic-information-images">
                                    <Image src="/images/children-sneakers-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing Children Normal Sneakers" />
                                </div>
                            </td>

                            <td className="children-sneakers-first-entity all-indicator-answers">
                                {state1ChildrensSneakers ? `${formatNumberWithCommas(state1ChildrensSneakers)} USD` : 'Yet to Update'}
                            </td>
                            <td className="children-sneakers-second-entity all-indicator-answers">
                                {state2ChildrensSneakers ? `${formatNumberWithCommas(state2ChildrensSneakers)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Children&apos;s Winter Coat</div>
                                <div className="basic-information-images">
                                    <Image src="/images/children-winter-coat-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing Children's Winter Coat" />
                                </div>
                            </td>

                            <td className="children-winter-coat-first-entity all-indicator-answers">
                                {state1ChildrensWinterCoat ? `${formatNumberWithCommas(state1ChildrensWinterCoat)} USD` : 'Yet to Update'}
                            </td>
                            <td className="children-winter-coat-second-entity all-indicator-answers">
                                {state2ChildrensWinterCoat ? `${formatNumberWithCommas(state2ChildrensWinterCoat)} USD` : 'Yet to Update'}
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

                            <td className="daycare-infant-first-entity all-indicator-answers">
                                {state1DaycareInfant ? `${formatNumberWithCommas(state1DaycareInfant)} USD` : 'Yet to Update'}
                            </td>
                            <td className="daycare-infant-second-entity all-indicator-answers">
                                {state2DaycareInfant ? `${formatNumberWithCommas(state2DaycareInfant)} USD` : 'Yet to Update'}
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

                            <td className="daycare-toddler-first-entity all-indicator-answers">
                                {state1DaycareToddler ? `${formatNumberWithCommas(state1DaycareToddler)} USD` : 'Yet to Update'}
                            </td>
                            <td className="daycare-toddler-second-entity all-indicator-answers">
                                {state2DaycareToddler ? `${formatNumberWithCommas(state2DaycareToddler)} USD` : 'Yet to Update'}
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

                            <td className="childcare-for-sick-days-first-entity all-indicator-answers">
                                {state1ChildcareForSickDays ? `${formatNumberWithCommas(state1ChildcareForSickDays)} USD` : 'Yet to Update'}
                            </td>
                            <td className="childcare-for-sick-days-second-entity all-indicator-answers">
                                {state2ChildcareForSickDays ? `${formatNumberWithCommas(state2ChildcareForSickDays)} USD` : 'Yet to Update'}
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

                            <td className="early-childhood-education-program-first-entity all-indicator-answers">
                                {state1EarlyChildhoodEducationPrograms ? `${formatNumberWithCommas(state1EarlyChildhoodEducationPrograms)} USD` : 'Yet to Update'}
                            </td>
                            <td className="early-childhood-education-program-second-entity all-indicator-answers">
                                {state2EarlyChildhoodEducationPrograms ? `${formatNumberWithCommas(state2EarlyChildhoodEducationPrograms)} USD` : 'Yet to Update'}
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

                            <td className="extra-curricular-activities-first-entity all-indicator-answers">
                                {state1ExtracurricularActivities ? `${formatNumberWithCommas(state1ExtracurricularActivities)} USD` : 'Yet to Update'}
                            </td>
                            <td className="extra-curricular-activities-second-entity all-indicator-answers">
                                {state2ExtracurricularActivities ? `${formatNumberWithCommas(state2ExtracurricularActivities)} USD` : 'Yet to Update'}
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

                            <td className="summer-camp-first-entity all-indicator-answers">
                                {state1SummerCamp ? `${formatNumberWithCommas(state1SummerCamp)} USD` : 'Yet to Update'}
                            </td>
                            <td className="summer-camp-second-entity all-indicator-answers">
                                {state2SummerCamp ? `${formatNumberWithCommas(state2SummerCamp)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <div className="paragraph-for-pages-below-table">
                <div className="para-for-pages-single-div">




                    <h3>
                        Does Childcare Care cost more in
                        <span className="first-entity-name-pages-paragraph"> {state1} </span> than in
                        <span className="second-entity-name-pages-paragraph"> {state2}</span>?
                    </h3>

                    <p>
                        If you lived in
                        <span className="first-entity-name-pages-paragraph"> {state1}</span>, instead of
                        <span className="second-entity-name-pages-paragraph"> {state2}</span>, you would have
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

export default Childcare