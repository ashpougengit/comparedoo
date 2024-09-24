import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { formatNumberWithCommas } from "@/lib/format/format"
import Image from "next/image"

function FruitsAndVegetables({ state1CostInfo, state2CostInfo, state1LowerCase, state2LowerCase }) {
    const state1 = state1CostInfo.state
    const state1Apples1Kg = state1CostInfo.apples1Kg
    const state1Bananas1Kg = state1CostInfo.bananas1Kg
    const state1Oranges1Kg = state1CostInfo.oranges1Kg
    const state1Tomatoes1Kg = state1CostInfo.tomatoes1Kg
    const state1Potatoes1Kg = state1CostInfo.potatoes1Kg
    const state1Lemons1Kg = state1CostInfo.lemons1Kg
    const state1Onions1Kg = state1CostInfo.onions1Kg
    const state1Lentils1Kg = state1CostInfo.lentils1Kg
    const state1TotalCost = (state1Apples1Kg || 0) + (state1Bananas1Kg || 0) + (state1Oranges1Kg || 0) + (state1Tomatoes1Kg || 0) + (state1Potatoes1Kg || 0) + (state1Lemons1Kg || 0) + (state1Onions1Kg || 0) + (state1Lentils1Kg || 0)

    const state2 = state2CostInfo.state
    const state2Apples1Kg = state2CostInfo.apples1Kg
    const state2Bananas1Kg = state2CostInfo.bananas1Kg
    const state2Oranges1Kg = state2CostInfo.oranges1Kg
    const state2Tomatoes1Kg = state2CostInfo.tomatoes1Kg
    const state2Potatoes1Kg = state2CostInfo.potatoes1Kg
    const state2Lemons1Kg = state2CostInfo.lemons1Kg
    const state2Onions1Kg = state2CostInfo.onions1Kg
    const state2Lentils1Kg = state2CostInfo.lentils1Kg
    const state2TotalCost = (state2Apples1Kg || 0) + (state2Bananas1Kg || 0) + (state2Oranges1Kg || 0) + (state2Tomatoes1Kg || 0) + (state2Potatoes1Kg || 0) + (state2Lemons1Kg || 0) + (state2Onions1Kg || 0) + (state2Lentils1Kg || 0)

    const costTimes = state1TotalCost > state2TotalCost ? (state1TotalCost / state2TotalCost).toFixed(2) : (state2TotalCost / state1TotalCost).toFixed(2)
    const moreOrLess = state1TotalCost > state2TotalCost ? 'more' : 'less'

    return (
        <>
            <AdsHeaderBanner />

            <div className="geographical-map">
                <h2 className="pages-h2">Fruits and Vegetables Cost Comparison</h2>
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
                                        <Image src={`/images/${state1LowerCase}-map-small.png`} fill alt={`Pictorial representation of map of ${state1LowerCase}`} />
                                    </div>

                                    <div className="first-entity-name-pages-comparison">{state1}</div>

                                    <div className="first-entity-flag-pages-comparison">
                                        <Image src={`/images/${state1LowerCase}-flag-small.png`} fill alt={`Image illustrating the flag of ${state1LowerCase}`} />
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="second-entity-map-pages-comparison">
                                        <Image src={`/images/${state2LowerCase}-map-small.png`} fill alt={`Pictorial representation of map of ${state2LowerCase}`} />
                                    </div>

                                    <div className="second-entity-name-pages-comparison"> {state2} </div>

                                    <div className="second-entity-flag-pages-comparison">
                                        <Image src={`/images/${state2LowerCase}-flag-small.png`} fill alt={`Image illustrating the flag of ${state2LowerCase}`} />
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Apples (1 KG)</div>
                                <div className="basic-information-images">
                                    <Image src="/images/apples-1-kg-image.png" fill alt="Image Describing apples cost per month" />
                                </div>
                            </td>

                            <td className="apples-1-kg-first-entity all-indicator-answers">
                                {state1Apples1Kg ? `${formatNumberWithCommas(state1Apples1Kg)} USD` : 'Yet to Update'}
                            </td>
                            <td className="apples-1-kg-second-entity all-indicator-answers">
                                {state2Apples1Kg ? `${formatNumberWithCommas(state2Apples1Kg)} USD` : 'Yet to Update'}
                            </td>
                        </tr>



                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Bananas (1 KG)</div>
                                <div className="basic-information-images">
                                    <Image src="/images/bananas-1-kg-image.png" fill alt="Image Describing bananas cost per month" />
                                </div>
                            </td>

                            <td className="bananas-1-kg-first-entity all-indicator-answers">
                                {state1Bananas1Kg ? `${formatNumberWithCommas(state1Bananas1Kg)} USD` : 'Yet to Update'}
                            </td>
                            <td className="bananas-1-kg-second-entity all-indicator-answers">
                                {state2Bananas1Kg ? `${formatNumberWithCommas(state2Bananas1Kg)} USD` : 'Yet to Update'}
                            </td>
                        </tr>


                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Oranges (1 KG)</div>
                                <div className="basic-information-images">
                                    <Image src="/images/oranges-1-kg-image.png" fill alt="Image Describing oranges cost per month" />
                                </div>
                            </td>

                            <td className="oranges-1-kg-first-entity all-indicator-answers">
                                {state1Oranges1Kg ? `${formatNumberWithCommas(state1Oranges1Kg)} USD` : 'Yet to Update'}
                            </td>
                            <td className="oranges-1-kg-second-entity all-indicator-answers">
                                {state2Oranges1Kg ? `${formatNumberWithCommas(state2Oranges1Kg)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Tomatoes (1 KG)</div>
                                <div className="basic-information-images">
                                    <Image src="/images/tomatoes-1-kg-image.png" fill alt="Image Describing tomatoes cost per month" />
                                </div>
                            </td>

                            <td className="tomatoes-1-kg-first-entity all-indicator-answers">
                                {state1Tomatoes1Kg ? `${formatNumberWithCommas(state1Tomatoes1Kg)} USD` : 'Yet to Update'}
                            </td>
                            <td className="tomatoes-1-kg-second-entity all-indicator-answers">
                                {state2Tomatoes1Kg ? `${formatNumberWithCommas(state2Tomatoes1Kg)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Potatoes (1 KG)</div>
                                <div className="basic-information-images">
                                    <Image src="/images/potatoes-1-kg-image.png" fill alt="Image Describing potatoes cost per month" />
                                </div>
                            </td>

                            <td className="potatoes-1-kg-first-entity all-indicator-answers">
                                {state1Potatoes1Kg ? `${formatNumberWithCommas(state1Potatoes1Kg)} USD` : 'Yet to Update'}
                            </td>
                            <td className="potatoes-1-kg-second-entity all-indicator-answers">
                                {state2Potatoes1Kg ? `${formatNumberWithCommas(state2Potatoes1Kg)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Lemons (1 KG)</div>
                                <div className="basic-information-images">
                                    <Image src="/images/lemons-1-kg-image.png" fill alt="Image Describing lemons cost per month" />
                                </div>
                            </td>

                            <td className="lemons-1-kg-first-entity all-indicator-answers">
                                {state1Lemons1Kg ? `${formatNumberWithCommas(state1Lemons1Kg)} USD` : 'Yet to Update'}
                            </td>
                            <td className="lemons-1-kg-second-entity all-indicator-answers">
                                {state2Lemons1Kg ? `${formatNumberWithCommas(state2Lemons1Kg)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Onions (1 KG)</div>
                                <div className="basic-information-images">
                                    <Image src="/images/onions-1-kg-image.png" fill alt="Image Describing onions cost per month" />
                                </div>
                            </td>

                            <td className="onions-1-kg-first-entity all-indicator-answers">
                                {state1Onions1Kg ? `${formatNumberWithCommas(state1Onions1Kg)} USD` : 'Yet to Update'}
                            </td>
                            <td className="onions-1-kg-second-entity all-indicator-answers">
                                {state2Onions1Kg ? `${formatNumberWithCommas(state2Onions1Kg)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Lentils (1 KG)</div>
                                <div className="basic-information-images">
                                    <Image src="/images/lentils-1-kg-image.png" fill alt="Image Describing lentils cost per month" />
                                </div>
                            </td>

                            <td className="lentils-1-kg-first-entity all-indicator-answers">
                                {state1Lentils1Kg ? `${formatNumberWithCommas(state1Lentils1Kg)} USD` : 'Yet to Update'}
                            </td>
                            <td className="lentils-1-kg-second-entity all-indicator-answers">
                                {state2Lentils1Kg ? `${formatNumberWithCommas(state2Lentils1Kg)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <div className="paragraph-for-pages-below-table">
                <div className="para-for-pages-single-div">
                    <p>
                        If you lived in
                        <span className="first-entity-name-pages-paragraph"> {state1}</span>, instead of
                        <span className="second-entity-name-pages-paragraph"> {state2}</span>, you would have
                        to pay
                        <strong>
                            <span className="fruits-and-vegetables-calculation"> {costTimes} </span> times </strong> <span
                                className="fruits-and-vegetables-more-or-less-calculation"> {moreOrLess} </span>
                        for Fruits and Vegetables.
                    </p>
                </div>
            </div>
        </>
    )
}

export default FruitsAndVegetables