import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { lastYear } from "@/lib/date-and-time/dateAndTime"
import Image from "next/image"

function Employment({ state1StandardInfo, state2StandardInfo, state1URLCase, state2URLCase }) {
    const state1 = state1StandardInfo.state
    const state1AgricultureForestryFishing = state1StandardInfo.agricultureForestryFishing
    const state1Construction = state1StandardInfo.construction
    const state1Manufacturing = state1StandardInfo.manufacturing
    const state1TransportationAndWarehousing = state1StandardInfo.transportationAndWarehousing
    const state1Information = state1StandardInfo.information
    const state1ArtsEntertainmentRecreation = state1StandardInfo.artsEntertainmentRecreation
    const state1EducationandHealthCare = state1StandardInfo.educationandHealthCare
    const state1FinanceandRealEstate = state1StandardInfo.financeandRealEstate
    const state1WholesaleTrade = state1StandardInfo.wholesaleTrade
    const state1RetailTrade = state1StandardInfo.retailTrade
    const state1PublicAdministration = state1StandardInfo.publicAdministration

    const state2 = state2StandardInfo.state
    const state2AgricultureForestryFishing = state2StandardInfo.agricultureForestryFishing
    const state2Construction = state2StandardInfo.construction
    const state2Manufacturing = state2StandardInfo.manufacturing
    const state2TransportationAndWarehousing = state2StandardInfo.transportationAndWarehousing
    const state2Information = state2StandardInfo.information
    const state2ArtsEntertainmentRecreation = state2StandardInfo.artsEntertainmentRecreation
    const state2EducationandHealthCare = state2StandardInfo.educationandHealthCare
    const state2FinanceandRealEstate = state2StandardInfo.financeandRealEstate
    const state2WholesaleTrade = state2StandardInfo.wholesaleTrade
    const state2RetailTrade = state2StandardInfo.retailTrade
    const state2PublicAdministration = state2StandardInfo.publicAdministration

    return (
        <>
            <AdsHeaderBanner />

            <div className="environmental-factors-comparison">
                <h2 className="pages-h2">Job and Employment Factors Comparison</h2>
            </div>
            <div className="environment-factors-comparison">
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
                                    <div className="agriculture-forestry-states-text">
                                        Agriculture, Forestry and Fishing Sectors ({lastYear})
                                    </div>
                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/agriculture-forestry-states-images.png" fill alt="Image Depicting the total Agriculture, Forestry and Fishing Sectors jobs available in any specific country or state" />
                                </div>
                            </td>
                            <td className="agriculture-forestry-states-answer-first-entity all-indicator-answers">
                                {state1AgricultureForestryFishing ? `${state1AgricultureForestryFishing}%` : 'Yet to Update'}
                            </td>
                            <td className="agriculture-forestry-states-answer-second-entity all-indicator-answers">
                                {state2AgricultureForestryFishing ? `${state2AgricultureForestryFishing}%` : 'Yet to Update'}
                            </td>
                        </tr>
                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">
                                    <div className="employment-rate-states-text">
                                        Construction Sector
                                        <br />
                                        ({lastYear})
                                    </div>
                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/construction-states-images.png" fill alt="Image Depicting the total Construction Sector workers percentage in any specific country or state" />
                                </div>
                            </td>
                            <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                                {state1Construction ? `${state1Construction}%` : 'Yet to Update'}
                            </td>
                            <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                                {state2Construction ? `${state2Construction}%` : 'Yet to Update'}
                            </td>
                        </tr>
                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">
                                    <div className="employment-rate-states-text">
                                        Manufacturing Sector
                                        <br />
                                        ({lastYear})
                                    </div>
                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/manufacturing-states-images.png" fill alt="Image Depicting the total Manufacturing Sector workers percentage in any specific country or state" />
                                </div>
                            </td>
                            <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                                {state1Manufacturing ? `${state1Manufacturing}%` : 'Yet to Update'}
                            </td>
                            <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                                {state2Manufacturing ? `${state2Manufacturing}%` : 'Yet to Update'}
                            </td>
                        </tr>
                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">
                                    <div className="employment-rate-states-text">
                                        Transportation and Warehousing Sectors ({lastYear})
                                    </div>
                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/transportation-and-warehousing-states-images.png" fill alt="Image Depicting the total Transportation and Warehousing Sectors workers percentage in any specific country or state" />
                                </div>
                            </td>
                            <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                                {state1TransportationAndWarehousing ? `${state1TransportationAndWarehousing}%` : 'Yet to Update'}
                            </td>
                            <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                                {state2TransportationAndWarehousing ? `${state2TransportationAndWarehousing}%` : 'Yet to Update'}
                            </td>
                        </tr>
                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">
                                    <div className="employment-rate-states-text">
                                        IT and Information Sectors
                                        <br />
                                        ({lastYear})
                                    </div>
                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/information-states-images.png" fill alt="Image Depicting the total IT and Information Sectors workers percentage in any specific country or state" />
                                </div>
                            </td>
                            <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                                {state1Information ? `${state1Information}%` : 'Yet to Update'}
                            </td>
                            <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                                {state2Information ? `${state2Information}%` : 'Yet to Update'}
                            </td>
                        </tr>
                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">
                                    <div className="employment-rate-states-text">
                                        Arts and Entertainment
                                        <br />
                                        ({lastYear})
                                    </div>
                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/arts-and-entertainment-states-images.png" fill alt="Image Depicting the total Arts and Entertainment workers percentage in any specific country or state" />
                                </div>
                            </td>
                            <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                                {state1ArtsEntertainmentRecreation ? `${state1ArtsEntertainmentRecreation}%` : 'Yet to Update'}
                            </td>
                            <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                                {state2ArtsEntertainmentRecreation ? `${state2ArtsEntertainmentRecreation}%` : 'Yet to Update'}
                            </td>
                        </tr>
                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">
                                    <div className="employment-rate-states-text">
                                        Education and Healthcare Sectors ({lastYear})
                                    </div>
                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/education-and-healthcare-states-images.png" fill alt="Image Depicting the total Education and Healthcare Sectors workers percentage in any specific country or state" />
                                </div>
                            </td>
                            <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                                {state1EducationandHealthCare ? `${state1EducationandHealthCare}%` : 'Yet to Update'}
                            </td>
                            <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                                {state2EducationandHealthCare ? `${state2EducationandHealthCare}%` : 'Yet to Update'}
                            </td>
                        </tr>
                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">
                                    <div className="employment-rate-states-text">
                                        Finance and Real Estate Sectors ({lastYear})
                                    </div>
                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/real-estate-states-images.png" fill alt="Image Depicting the total Finance and Real Estate Sectors workers percentage in any specific country or state" />
                                </div>
                            </td>
                            <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                                {state1FinanceandRealEstate ? `${state1FinanceandRealEstate}%` : 'Yet to Update'}
                            </td>
                            <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                                {state2FinanceandRealEstate ? `${state2FinanceandRealEstate}%` : 'Yet to Update'}
                            </td>
                        </tr>
                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">
                                    <div className="employment-rate-states-text">
                                        Wholesale Trade
                                        <br />
                                        ({lastYear})
                                    </div>
                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/wholesale-trade-states-images.png" fill alt="Image Depicting the total Wholesale Trade workers percentage in any specific country or state" />
                                </div>
                            </td>
                            <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                                {state1WholesaleTrade ? `${state1WholesaleTrade}%` : 'Yet to Update'}
                            </td>
                            <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                                {state2WholesaleTrade ? `${state2WholesaleTrade}%` : 'Yet to Update'}
                            </td>
                        </tr>
                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">
                                    <div className="employment-rate-states-text">
                                        Retail Trade
                                        <br />
                                        ({lastYear})
                                    </div>
                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/retail-trade-states-images.png" fill alt="Image Depicting the total Retail Trade workers percentage in any specific country or state" />
                                </div>
                            </td>
                            <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                                {state1RetailTrade ? `${state1RetailTrade}%` : 'Yet to Update'}
                            </td>
                            <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                                {state2RetailTrade ? `${state2RetailTrade}%` : 'Yet to Update'}
                            </td>
                        </tr>
                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">
                                    <div className="employment-rate-states-text">
                                        Public Administration
                                        <br />
                                        ({lastYear})
                                    </div>
                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/public-administration-states-images.png" fill alt="Image Depicting the total Public Administration workers percentage in any specific country or state" />
                                </div>
                            </td>
                            <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                                {state1PublicAdministration ? `${state1PublicAdministration}%` : 'Yet to Update'}
                            </td>
                            <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                                {state2PublicAdministration ? `${state2PublicAdministration}%` : 'Yet to Update'}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Employment