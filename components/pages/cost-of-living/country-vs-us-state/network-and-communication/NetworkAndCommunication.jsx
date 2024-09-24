import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { dollarizedCountries } from "@/lib/array-list/dollarizedCountries"
import { formatNumberWithCommas } from "@/lib/format/format"
import Image from "next/image"

function NetworkAndCommunication({ slug1, slug2, value1, value2, slug1CostInfo, slug2CostInfo, slug1Currency, slug2Currency, slug1ExchangeRate, slug2ExchangeRate, slug1LowerCase, slug2LowerCase }) {
    const slug1WifiCostPerMonth = slug1CostInfo.wifiCostPerMonth
    const slug1MobilePhonePlanCostPerMonth = slug1CostInfo.mobilePhonePlanCostPerMonth
    const slug1LandlinePhoneServicePerMonth = slug1CostInfo.landlinePhoneServicePerMonth
    const slug1CableTVServicePerMonth = slug1CostInfo.cableTVServicePerMonth
    const slug1TotalCost = ((slug1WifiCostPerMonth || 0) + (slug1MobilePhonePlanCostPerMonth || 0) + (slug1LandlinePhoneServicePerMonth || 0) + (slug1CableTVServicePerMonth || 0)) * slug1ExchangeRate

    const slug2WifiCostPerMonth = slug2CostInfo.wifiCostPerMonth
    const slug2MobilePhonePlanCostPerMonth = slug2CostInfo.mobilePhonePlanCostPerMonth
    const slug2LandlinePhoneServicePerMonth = slug2CostInfo.landlinePhoneServicePerMonth
    const slug2CableTVServicePerMonth = slug2CostInfo.cableTVServicePerMonth
    const slug2TotalCost = ((slug2WifiCostPerMonth || 0) + (slug2MobilePhonePlanCostPerMonth || 0) + (slug2LandlinePhoneServicePerMonth || 0) + (slug2CableTVServicePerMonth || 0)) * slug2ExchangeRate

    const percentageDifference = (((Math.abs(slug1TotalCost - slug2TotalCost)) / slug2TotalCost) * 100).toFixed(2)
    const moreOrLess = slug1TotalCost > slug2TotalCost ? 'more' : 'less'

    return (
        <>
            <AdsHeaderBanner />

            <div className="geographical-map">
                <h2 className="pages-h2">Network and Communication Cost Comparison</h2>
            </div>

            <div className="basic-information-comparison-div1">
                <table className="indicators-first-entity-and-second-entity-div1">
                    <thead>
                        <tr className="first-tr">
                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="right-indicator">
                                        <Image
                                            src="/images/indicators-right-image.png"
                                            fill alt="Image representing an indicator" />
                                    </div>

                                    <div className="indicator-text">Indicators</div>

                                    <div className="left-indicator">
                                        <Image
                                            src="/images/indicators-left-image.png"
                                            fill alt="Image illustrating an indicator" />
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="first-entity-map-pages-comparison">
                                        <Image src={`/images/${slug1LowerCase}-map-small.png`} fill alt={`Pictorial representation of map of ${slug1LowerCase}`} />
                                    </div>

                                    <div className="first-entity-name-pages-comparison">{slug1}</div>

                                    <div className="first-entity-flag-pages-comparison">
                                        <Image src={`/images/${slug1LowerCase}-flag-small.png`} fill alt={`Image illustrating the flag of ${slug1LowerCase}`} />
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="second-entity-map-pages-comparison">
                                        <Image src={`/images/${slug2LowerCase}-map-small.png`} fill alt={`Pictorial representation of map of ${slug2LowerCase}`} />
                                    </div>

                                    <div className="second-entity-name-pages-comparison"> {slug2} </div>

                                    <div className="second-entity-flag-pages-comparison">
                                        <Image src={`/images/${slug2LowerCase}-flag-small.png`} fill alt={`Image illustrating the flag of ${slug2LowerCase}`} />
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Standard Wifi Cost Per Month</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/wifi-cost-per-month-image.png"
                                        fill alt="Image Describing wifi cost per month" />
                                </div>
                            </td>

                            <td
                                className="wifi-cost-per-month-answer-first-entity all-indicator-answers">
                                {slug1WifiCostPerMonth ? (
                                    value1 === 'state' || dollarizedCountries.includes(slug1) ? (
                                        `${formatNumberWithCommas(slug1WifiCostPerMonth)} USD`
                                    ) : (
                                        <>
                                            {`${formatNumberWithCommas(slug1WifiCostPerMonth)} ${slug1Currency}`} <br />
                                            {`(${formatNumberWithCommas(slug1WifiCostPerMonth * slug1ExchangeRate)} USD)`}
                                        </>
                                    )
                                ) : 'Yet to Update'}
                            </td>
                            <td
                                className="wifi-cost-per-month-answer-second-entity all-indicator-answers">
                                {slug2WifiCostPerMonth ? (
                                    value2 === 'state' || dollarizedCountries.includes(slug2) ? (
                                        `${formatNumberWithCommas(slug2WifiCostPerMonth)} USD`
                                    ) : (
                                        <>
                                            {`${formatNumberWithCommas(slug2WifiCostPerMonth)} ${slug2Currency}`} <br />
                                            {`(${formatNumberWithCommas(slug2WifiCostPerMonth * slug2ExchangeRate)} USD)`}
                                        </>
                                    )
                                ) : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">
                                    Mobile Phone Basic Plan Cost Per Month
                                </div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/mobile-phone-plan-cost-per-month-image.png"
                                        fill alt="Image Describing mobile phone basic plan cost per month" />
                                </div>
                            </td>

                            <td
                                className="mobile-phone-plan-cost-per-month-answer-first-entity all-indicator-answers">
                                {slug1MobilePhonePlanCostPerMonth ? (
                                    value1 === 'state' || dollarizedCountries.includes(slug1) ? (
                                        `${formatNumberWithCommas(slug1MobilePhonePlanCostPerMonth)} USD`
                                    ) : (
                                        <>
                                            {`${formatNumberWithCommas(slug1MobilePhonePlanCostPerMonth)} ${slug1Currency}`} <br />
                                            {`(${formatNumberWithCommas(slug1MobilePhonePlanCostPerMonth * slug1ExchangeRate)} USD)`}
                                        </>
                                    )
                                ) : 'Yet to Update'}
                            </td>
                            <td
                                className="mobile-phone-plan-cost-per-month-answer-second-entity all-indicator-answers">
                                {slug2MobilePhonePlanCostPerMonth ? (
                                    value2 === 'state' || dollarizedCountries.includes(slug2) ? (
                                        `${formatNumberWithCommas(slug2MobilePhonePlanCostPerMonth)} USD`
                                    ) : (
                                        <>
                                            {`${formatNumberWithCommas(slug2MobilePhonePlanCostPerMonth)} ${slug2Currency}`} <br />
                                            {`(${formatNumberWithCommas(slug2MobilePhonePlanCostPerMonth * slug2ExchangeRate)} USD)`}
                                        </>
                                    )
                                ) : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">
                                    Landline Basic Plan Cost Per Month
                                </div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/landline-phone-service-per-month-image.png"
                                        fill alt="Image Describing Landline phone basic plan cost per month" />
                                </div>
                            </td>

                            <td
                                className="landline-phone-plan-cost-per-month-answer-first-entity all-indicator-answers">
                                {slug1LandlinePhoneServicePerMonth ? (
                                    value1 === 'state' || dollarizedCountries.includes(slug1) ? (
                                        `${formatNumberWithCommas(slug1LandlinePhoneServicePerMonth)} USD`
                                    ) : (
                                        <>
                                            {`${formatNumberWithCommas(slug1LandlinePhoneServicePerMonth)} ${slug1Currency}`} <br />
                                            {`(${formatNumberWithCommas(slug1LandlinePhoneServicePerMonth * slug1ExchangeRate)} USD)`}
                                        </>
                                    )
                                ) : 'Yet to Update'}
                            </td>
                            <td
                                className="landline-phone-plan-cost-per-month-answer-second-entity all-indicator-answers">
                                {slug2LandlinePhoneServicePerMonth ? (
                                    value2 === 'state' || dollarizedCountries.includes(slug2) ? (
                                        `${formatNumberWithCommas(slug2LandlinePhoneServicePerMonth)} USD`
                                    ) : (
                                        <>
                                            {`${formatNumberWithCommas(slug2LandlinePhoneServicePerMonth)} ${slug2Currency}`} <br />
                                            {`(${formatNumberWithCommas(slug2LandlinePhoneServicePerMonth * slug2ExchangeRate)} USD)`}
                                        </>
                                    )
                                ) : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">
                                    Cable TV Basic Plan Cost Per Month
                                </div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/cable-tv-service-per-month-image.png"
                                        fill alt="Image Describing Cable TV basic plan cost per month" />
                                </div>
                            </td>

                            <td
                                className="cable-tv-service-per-month-first-entity all-indicator-answers">
                                {slug1CableTVServicePerMonth ? (
                                    value1 === 'state' || dollarizedCountries.includes(slug1) ? (
                                        `${formatNumberWithCommas(slug1CableTVServicePerMonth)} USD`
                                    ) : (
                                        <>
                                            {`${formatNumberWithCommas(slug1CableTVServicePerMonth)} ${slug1Currency}`} <br />
                                            {`(${formatNumberWithCommas(slug1CableTVServicePerMonth * slug1ExchangeRate)} USD)`}
                                        </>
                                    )
                                ) : 'Yet to Update'}
                            </td>
                            <td
                                className="mobile-phone-plan-cost-per-month-answer-second-entity all-indicator-answers">
                                {slug2CableTVServicePerMonth ? (
                                    value2 === 'state' || dollarizedCountries.includes(slug2) ? (
                                        `${formatNumberWithCommas(slug2CableTVServicePerMonth)} USD`
                                    ) : (
                                        <>
                                            {`${formatNumberWithCommas(slug2CableTVServicePerMonth)} ${slug2Currency}`} <br />
                                            {`(${formatNumberWithCommas(slug2CableTVServicePerMonth * slug2ExchangeRate)} USD)`}
                                        </>
                                    )
                                ) : 'Yet to Update'}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="paragraph-for-pages-below-table">
                <div className="para-for-pages-single-div">
                    <p>
                        The internet and communication costs{' '}
                        <strong>
                            <span className="network-and-communication-cost-calculation"> {percentageDifference}% </span>
                        </strong>
                        <span className="internet-and-communication-more-less-calculation">
                            {' '}{moreOrLess}{' '}
                        </span>
                        in
                        <span className="first-entity-name-pages-paragraph"> {slug1} </span>
                        compared to
                        <span className="second-entity-name-pages-paragraph"> {slug2}</span>
                        .
                    </p>
                </div>
            </div>
        </>
    )
}

export default NetworkAndCommunication