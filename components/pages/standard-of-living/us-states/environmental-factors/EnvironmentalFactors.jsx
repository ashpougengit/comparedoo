import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { lastYear } from "@/lib/date-and-time/dateAndTime"
import { formatNumberWithCommas } from "@/lib/format/format"
import Image from "next/image"

function EnvironmentalFactors({ state1StandardInfo, state2StandardInfo, state1URLCase, state2URLCase }) {
    const state1 = state1StandardInfo.state
    const state1AccessToInternet = state1StandardInfo.accessToInternet
    const state1AccessToElectricity = state1StandardInfo.accessToElectricity
    const state1ForestArea = state1StandardInfo.forestArea
    const state1AgriculturalLand = state1StandardInfo.agriculturalLand

    const state2 = state2StandardInfo.state
    const state2AccessToInternet = state2StandardInfo.accessToInternet
    const state2AccessToElectricity = state2StandardInfo.accessToElectricity
    const state2ForestArea = state2StandardInfo.forestArea
    const state2AgriculturalLand = state2StandardInfo.agriculturalLand

    return (
        <>
            <AdsHeaderBanner />

            <div className="economic-factors-comparison">
                <h2 className="pages-h2">Environmental Factors Comparison</h2>
            </div>
            <div className="import-export-factors-comparison-div1">
                <table className="indicators-first-entity-and-second-entity-div1">
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
                                        <Image src={`/images/${state1URLCase}-map-small.png`} fill alt={`Pictorial representation of map of ${state1URLCase}`} />
                                    </div>

                                    <div className="first-entity-name-pages-comparison">{state1}</div>

                                    <div className="first-entity-flag-pages-comparison">
                                        <Image src={`/images/${state1URLCase}-flag-small.png`} fill alt={`Image illustrating the flag of ${state1URLCase}`} />
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="second-entity-map-pages-comparison">
                                        <Image src={`/images/${state2URLCase}-map-small.png`} fill alt={`Pictorial representation of map of ${state2URLCase}`} />
                                    </div>

                                    <div className="second-entity-name-pages-comparison"> {state2} </div>

                                    <div className="second-entity-flag-pages-comparison">
                                        <Image src={`/images/${state2URLCase}-flag-small.png`} fill alt={`Image illustrating the flag of ${state2URLCase}`} />
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">
                                    <div className="environmental-factors-text">
                                        Access to Internet
                                        <br />
                                        ({lastYear})
                                    </div>
                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/access-to-internet-states-image.png" fill alt="Image Depicting Access to Internet percentage in any specific country or state" />
                                </div>
                            </td>
                            <td className="environmental-factors-answer-first-entity all-indicator-answers">
                                {state1AccessToInternet ? `${state1AccessToInternet}%` : 'Yet to Update'}
                            </td>
                            <td className="environmental-factors-answer-second-entity all-indicator-answers">
                                {state2AccessToInternet ? `${state2AccessToInternet}%` : 'Yet to Update'}
                            </td>
                        </tr>
                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">
                                    <div className="environmental-factors-text">
                                        Access to Electricity
                                        <br />
                                        ({lastYear})
                                    </div>
                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/access-to-electricity-states-image.png" fill alt="Image Depicting Access to Electricity percentage in any specific country or state" />
                                </div>
                            </td>
                            <td className="environmental-factors-answer-first-entity all-indicator-answers">
                                {state1AccessToElectricity ? `${state1AccessToElectricity}%` : 'Yet to Update'}
                            </td>
                            <td className="environmental-factors-answer-second-entity all-indicator-answers">
                                {state2AccessToElectricity ? `${state2AccessToElectricity}%` : 'Yet to Update'}
                            </td>
                        </tr>
                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">
                                    <div className="environmental-factors-text">
                                        Total Forest Area
                                        <br />
                                        ({lastYear})
                                    </div>
                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/forest-area-states-image.png" fill alt="Image Depicting Total Forest Area percentage in any specific country or state" />
                                </div>
                            </td>
                            <td className="environmental-factors-answer-first-entity all-indicator-answers">
                                {state1ForestArea ? `${formatNumberWithCommas(state1ForestArea)} Square Kilometers` : 'Yet to Update'}
                            </td>
                            <td className="environmental-factors-answer-second-entity all-indicator-answers">
                                {state2ForestArea ? `${formatNumberWithCommas(state2ForestArea)} Square Kilometers` : 'Yet to Update'}
                            </td>
                        </tr>
                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">
                                    <div className="environmental-factors-text">
                                        Agricultural Land
                                        <br />
                                        ({lastYear})
                                    </div>
                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/agricultural-land-states-image.png" fill alt="Image Depicting Agricultural Land percentage in any specific country or state" />
                                </div>
                            </td>
                            <td className="environmental-factors-answer-first-entity all-indicator-answers">
                                {state1AgriculturalLand ? `${formatNumberWithCommas(state1AgriculturalLand)} Square Kilometers` : 'Yet to Update'}
                            </td>
                            <td className="environmental-factors-answer-second-entity all-indicator-answers">
                                {state2AgriculturalLand ? `${formatNumberWithCommas(state2AgriculturalLand)} Square Kilometers` : 'Yet to Update'}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default EnvironmentalFactors