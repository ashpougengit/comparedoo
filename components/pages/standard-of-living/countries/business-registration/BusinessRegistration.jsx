import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { lastYear } from "@/lib/date-and-time/dateAndTime"
import { numberWithCommas } from "@/lib/format/format"
import Image from "next/image"

function BusinessRegistration({ country1StandardInfo, country2StandardInfo, country1URLCase, country2URLCase }) {
    const country1 = country1StandardInfo.country
    const country1TimeRequiredToStartABusinessDays = country1StandardInfo.timeRequiredToStartABusinessDays
    const country1NewBusinessesRegisteredNumber = country1StandardInfo.newBusinessesRegisteredNumber
    const country1NewBusinessesRegistrationDensityPer1000People = country1StandardInfo.newBusinessesRegistrationDensityPer1000People
    const country1CostOfBusinessStartUpProcedures = country1StandardInfo.costOfBusinessStartUpProcedures

    const country2 = country2StandardInfo.country
    const country2TimeRequiredToStartABusinessDays = country2StandardInfo.timeRequiredToStartABusinessDays
    const country2NewBusinessesRegisteredNumber = country2StandardInfo.newBusinessesRegisteredNumber
    const country2NewBusinessesRegistrationDensityPer1000People = country2StandardInfo.newBusinessesRegistrationDensityPer1000People
    const country2CostOfBusinessStartUpProcedures = country2StandardInfo.costOfBusinessStartUpProcedures

    return (
        <>
            <AdsHeaderBanner />

            <div className="economic-factors-comparison">
                <h2 className="pages-h2">Business Registration Comparison</h2>
            </div>
            <div className="business-registration-comparison-div1">

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
                                        <Image src={`/images/${country1URLCase}-map-small.png`} fill alt={`Pictorial representation of map of ${country1URLCase}`} />
                                    </div>

                                    <div className="first-entity-name-pages-comparison">{country1}</div>

                                    <div className="first-entity-flag-pages-comparison">
                                        <Image src={`/images/${country1URLCase}-flag-small.png`} fill alt={`Image illustrating the flag of ${country1URLCase}`} />
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="second-entity-map-pages-comparison">
                                        <Image src={`/images/${country2URLCase}-map-small.png`} fill alt={`Pictorial representation of map of ${country2URLCase}`} />
                                    </div>

                                    <div className="second-entity-name-pages-comparison"> {country2} </div>

                                    <div className="second-entity-flag-pages-comparison">
                                        <Image src={`/images/${country2URLCase}-flag-small.png`} fill alt={`Image illustrating the flag of ${country2URLCase}`} />
                                    </div>
                                </div>
                            </th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">

                                    <div className="time-required-to-start-a-business-text">
                                        Time Required to Start a Business ({lastYear})
                                    </div>



                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/time-required-to-start-a-business-image.png"
                                        fill alt="Image representing Time Required to Start a Business" />
                                </div>
                            </td>
                            <td className="time-required-to-start-a-business-answer-first-entity all-indicator-answers">{country1TimeRequiredToStartABusinessDays ? (
                                <>
                                    {country1TimeRequiredToStartABusinessDays} <span> Days</span>
                                </>
                            ) : 'Yet to Update'}
                            </td>
                            <td className="time-required-to-start-a-business-answer-second-entity all-indicator-answers">{country2TimeRequiredToStartABusinessDays ? (
                                <>
                                    {country2TimeRequiredToStartABusinessDays} <span> Days</span>
                                </>
                            ) : 'Yet to Update'}
                            </td>

                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">

                                    <div className="new-businesses-registered-number-text">
                                        New Businesses Registered ({lastYear})
                                    </div>



                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/new-businesses-registered-number-image.png"
                                        fill alt="Image representing New Businesses Registered" />
                                </div>
                            </td>
                            <td className="new-businesses-registered-number-answer-first-entity all-indicator-answers">
                                {country1NewBusinessesRegisteredNumber ? (
                                    <>
                                        {numberWithCommas(country1NewBusinessesRegisteredNumber)} <span> (New Businesses)</span>
                                    </>
                                ) : 'Yet to Update'}
                            </td>
                            <td className="new-businesses-registered-number-answer-second-entity all-indicator-answers">
                                {country2NewBusinessesRegisteredNumber ? (
                                    <>
                                        {numberWithCommas(country2NewBusinessesRegisteredNumber)} <span> (New Businesses)</span>
                                    </>
                                ) : 'Yet to Update'}
                            </td>

                        </tr>
                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">

                                    <div className="new-businesses-registration-density-text">
                                        New Businesses Registration Density ({lastYear})
                                    </div>



                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/new-businesses-registration-density-image.png"
                                        fill alt="Image representing New Businesses Registration Density" />
                                </div>
                            </td>
                            <td className="new-businesses-registration-density-answer-first-entity all-indicator-answers">
                                {country1NewBusinessesRegistrationDensityPer1000People ? (
                                    <>
                                        {country1NewBusinessesRegistrationDensityPer1000People} <span> (Per 1000 People)</span>
                                    </>
                                ) : 'Yet to Update'}
                            </td>
                            <td className="new-businesses-registration-density-answer-second-entity all-indicator-answers">
                                {country2NewBusinessesRegistrationDensityPer1000People ? (
                                    <>
                                        {country2NewBusinessesRegistrationDensityPer1000People} <span> (Per 1000 People)</span>
                                    </>
                                ) : 'Yet to Update'}
                            </td>

                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">

                                    <div className="cost-of-business-start-up-procedures-text">
                                        Cost of Business Start-Up Procedures ({lastYear})
                                    </div>



                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/cost-of-business-start-up-procedures-image.png"
                                        fill alt="Image representing Cost of Business Start-Up Procedures" />
                                </div>
                            </td>
                            <td className="cost-of-business-start-up-procedures-answer-first-entity all-indicator-answers">
                                {country1CostOfBusinessStartUpProcedures ? (
                                    <>
                                        {country1CostOfBusinessStartUpProcedures} <span> % of GNI Per Capita</span>
                                    </>
                                ) : 'Yet to Update'}
                            </td>
                            <td className="cost-of-business-start-up-procedures-answer-second-entity all-indicator-answers">
                                {country2CostOfBusinessStartUpProcedures ? (
                                    <>
                                        {country2CostOfBusinessStartUpProcedures} <span> % of GNI Per Capita</span>
                                    </>
                                ) : 'Yet to Update'}
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="paragraph-for-pages-below-table">
                <div className="para-for-pages-single-div">
                    <p>
                        In the year {lastYear}, <strong> <span className="new-businesses-registered-number-answer-first-entity"> {numberWithCommas(country1NewBusinessesRegisteredNumber)} </span>
                            new
                            businesses </strong> got registered in <span
                                className="first-entity-name-pages-paragraph"> {country1} </span> and <strong> <span
                                    className="new-businesses-registered-number-answer-second-entity"> {numberWithCommas(country2NewBusinessesRegisteredNumber)} </span>
                            new
                            businesses got registered in </strong><span className="second-entity-name-pages-paragraph"> {country2}</span>.
                    </p>

                    <p>
                        It usually takes <strong> <span className="time-required-to-start-a-business-answer-first-entity"> {country1TimeRequiredToStartABusinessDays} </span>
                            days </strong> in <span className="first-entity-name-pages-paragraph"> {country1} </span> and <strong> <span
                                className="time-required-to-start-a-business-answer-second-entity"> {country2TimeRequiredToStartABusinessDays} </span>
                            days </strong> in <span className="second-entity-name-pages-paragraph"> {country2} </span> to register a new business legally and systematically.
                    </p>
                </div>
            </div>
        </>
    )
}

export default BusinessRegistration