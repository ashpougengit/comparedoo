import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { lastYear } from "@/lib/date-and-time/dateAndTime"
import { formatNumberWithCommas } from "@/lib/format/format"
import Image from "next/image"

function Population({ state1GeneralInfo, state2GeneralInfo, state1URLCase, state2URLCase }) {
    const state1 = state1GeneralInfo.state
    const state1Population = state1GeneralInfo.population
    const state1PopulationStr = formatNumberWithCommas(state1Population)
    const state1VeteransPercentage = state1GeneralInfo.veteransPercentage
    const state1VeteransPercentageMale = state1GeneralInfo.veteransPercentageMale
    const state1VeteransPercentageFemale = state1GeneralInfo.veteransPercentageFemale

    const state2 = state2GeneralInfo.state
    const state2Population = state2GeneralInfo.population
    const state2PopulationStr = formatNumberWithCommas(state2Population)
    const state2VeteransPercentage = state2GeneralInfo.veteransPercentage
    const state2VeteransPercentageMale = state2GeneralInfo.veteransPercentageMale
    const state2VeteransPercentageFemale = state2GeneralInfo.veteransPercentageFemale

    const popDifference = formatNumberWithCommas(Math.abs(state1Population - state2Population))
    const moreOrLess = state1Population > state2Population ? 'more' : 'less'

    return (
        <>
            <AdsHeaderBanner />

            <div className="population-comparison">
                <h2 className="pages-h2">Population Comparison</h2>
            </div>

            <div className="paragraph-for-pages-below-table">
                <div className="para-for-pages-single-div">

                    <p>
                        Based on the elaboration of latest United States Census Bureau Data, the total population of
                        <strong>
                            <span className="first-entity-name-pages-paragraph"> {state1} </span> </strong>as of {lastYear} is
                        estimated to be
                        around
                        <strong>
                            <span className="population-of-first-entity-name"> {state1PopulationStr}</span></strong>, and the total population
                        of
                        <strong>
                            <span className="second-entity-name-pages-paragraph"> {state2} </span> </strong>as
                        of {lastYear} is estimated to be around
                        <strong>
                            <span className="population-of-second-entity-name"> {state2PopulationStr}</span>.</strong>
                    </p>

                    <p>
                        As per the above data, we can say that in the year
                        <span className="last-year"> {lastYear}</span>,
                        <strong>
                            <span className="first-entity-name-pages-paragraph"> {state1} </span>
                        </strong>
                        had <span className="population-difference-number"> {popDifference} </span>
                        <span className="more-or-less-population"> {moreOrLess} </span> people than
                        <strong>
                            <span className="second-entity-name-pages-paragraph"> {state2}</span>.
                        </strong>

                    </p>

                </div>

            </div>

            <div className="economic-factors-comparison-div1">

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
                                    Total Population
                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/total-population-image.png" fill alt="Illustration of area in Square Mile" />
                                </div>
                            </td>
                            <td className="total-population-first-entity all-indicator-answers">{state1PopulationStr} </td>
                            <td className="total-population-second-entity all-indicator-answers">{state2PopulationStr} </td>

                        </tr>
                        <tr>
                            <td className="all-indicators">Difference</td>
                            <td colSpan="2"> <strong> [<span className="population-difference-number">{popDifference}</span>
                                ]</strong>
                            </td>

                        </tr>


                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">
                                    Veterans
                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/veterans-percentage-image.png" fill alt="Visual representation Veterans" />
                                </div>
                            </td>
                            <td className="veterans-percentage-answer-first-entity all-indicator-answers">
                                {state1VeteransPercentage ? `${state1VeteransPercentage} %` : 'Yet to Update'}
                            </td>
                            <td className="veterans-percentage-answer-second-entity all-indicator-answers">
                                {state2VeteransPercentage ? `${state2VeteransPercentage} %` : 'Yet to Update'}
                            </td>

                        </tr>
                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">
                                    Male Veterans
                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/male-veterans-image.png" fill alt="Visual representation of Male Veterans" />
                                </div>
                            </td>
                            <td className="male-veterans-answer-first-entity all-indicator-answers">
                                {state1VeteransPercentageMale ? `${state1VeteransPercentageMale} %` : 'Yet to Update'}
                            </td>
                            <td className="male-veterans-answer-second-entity all-indicator-answers">
                                {state2VeteransPercentageMale ? `${state2VeteransPercentageMale} %` : 'Yet to Update'}
                            </td>

                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">
                                    Female Veterans
                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/female-veterans-image.png"
                                        fill alt="Visual representation of Female Veterans" />
                                </div>
                            </td>
                            <td className="female-veterans-answer-first-entity all-indicator-answers">
                                {state1VeteransPercentageFemale ? `${state1VeteransPercentageFemale} %` : 'Yet to Update'}
                            </td>
                            <td className="female-veterans-answer-second-entity all-indicator-answers">
                                {state2VeteransPercentageFemale ? `${state2VeteransPercentageFemale} %` : 'Yet to Update'}
                            </td>

                        </tr>

                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Population