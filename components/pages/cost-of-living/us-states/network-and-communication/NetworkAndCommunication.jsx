import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { formatNumberWithCommas } from "@/lib/format/format"
import Image from "next/image"

function NetworkAndCommunication({ state1CostInfo, state2CostInfo, state1LowerCase, state2LowerCase }) {
    const state1 = state1CostInfo.state
    const state1WifiCostPerMonth = state1CostInfo.wifiCostPerMonth
    const state1MobilePhonePlanCostPerMonth = state1CostInfo.mobilePhonePlanCostPerMonth
    const state1LandlinePhoneServicePerMonth = state1CostInfo.landlinePhoneServicePerMonth
    const state1CableTVServicePerMonth = state1CostInfo.cableTVServicePerMonth
    const state1TotalCost = (state1WifiCostPerMonth || 0) + (state1MobilePhonePlanCostPerMonth || 0) + (state1LandlinePhoneServicePerMonth || 0) + (state1CableTVServicePerMonth || 0)

    const state2 = state2CostInfo.state
    const state2WifiCostPerMonth = state2CostInfo.wifiCostPerMonth
    const state2MobilePhonePlanCostPerMonth = state2CostInfo.mobilePhonePlanCostPerMonth
    const state2LandlinePhoneServicePerMonth = state2CostInfo.landlinePhoneServicePerMonth
    const state2CableTVServicePerMonth = state2CostInfo.cableTVServicePerMonth
    const state2TotalCost = (state2WifiCostPerMonth || 0) + (state2MobilePhonePlanCostPerMonth || 0) + (state2LandlinePhoneServicePerMonth || 0) + (state2CableTVServicePerMonth || 0)

    const percentageDifference = (((Math.abs(state1TotalCost - state2TotalCost)) / state2TotalCost) * 100).toFixed(2)
    const moreOrLess = state1TotalCost > state2TotalCost ? 'more' : 'less'

    return (
      <>
        <AdsHeaderBanner />

        <div className="geographical-map">
          <h2 className="pages-h2">
            Network and Communication Cost Comparison
          </h2>
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
                        layout="fill"
                        objectFit="contain"
                        alt="Image representing an indicator"
                      />
                    </div>

                    <div className="indicator-text">Indicators</div>

                    <div className="left-indicator">
                      <Image
                        src="/images/indicators-left-image.png"
                        layout="fill"
                        objectFit="contain"
                        alt="Image illustrating an indicator"
                      />
                    </div>
                  </div>
                </th>

                <th>
                  <div className="heading-map-name-flag">
                    <div className="first-entity-map-pages-comparison">
                      <Image
                        src={`/images/${state1LowerCase}-map-small.png`}
                        layout="fill"
                        objectFit="contain"
                        alt={`Pictorial representation of map of ${state1LowerCase}`}
                      />
                    </div>

                    <div className="first-entity-name-pages-comparison">
                      {state1}
                    </div>

                    <div className="first-entity-flag-pages-comparison">
                      <Image
                        src={`/images/${state1LowerCase}-flag-small.png`}
                        layout="fill"
                        objectFit="contain"
                        alt={`Image illustrating the flag of ${state1LowerCase}`}
                      />
                    </div>
                  </div>
                </th>

                <th>
                  <div className="heading-map-name-flag">
                    <div className="second-entity-map-pages-comparison">
                      <Image
                        src={`/images/${state2LowerCase}-map-small.png`}
                        layout="fill"
                        objectFit="contain"
                        alt={`Pictorial representation of map of ${state2LowerCase}`}
                      />
                    </div>

                    <div className="second-entity-name-pages-comparison">
                      {' '}
                      {state2}{' '}
                    </div>

                    <div className="second-entity-flag-pages-comparison">
                      <Image
                        src={`/images/${state2LowerCase}-flag-small.png`}
                        layout="fill"
                        objectFit="contain"
                        alt={`Image illustrating the flag of ${state2LowerCase}`}
                      />
                    </div>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    Standard Wifi Cost Per Month
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/wifi-cost-per-month-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing wifi cost per month"
                    />
                  </div>
                </td>

                <td className="wifi-cost-per-month-answer-first-entity all-indicator-answers">
                  {state1WifiCostPerMonth
                    ? `${formatNumberWithCommas(state1WifiCostPerMonth)} USD`
                    : 'Yet to Update'}
                </td>
                <td className="wifi-cost-per-month-answer-second-entity all-indicator-answers">
                  {state2WifiCostPerMonth
                    ? `${formatNumberWithCommas(state2WifiCostPerMonth)} USD`
                    : 'Yet to Update'}
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
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing mobile phone basic plan cost per month"
                    />
                  </div>
                </td>

                <td className="mobile-phone-plan-cost-per-month-answer-first-entity all-indicator-answers">
                  {state1MobilePhonePlanCostPerMonth
                    ? `${formatNumberWithCommas(
                        state1MobilePhonePlanCostPerMonth
                      )} USD`
                    : 'Yet to Update'}
                </td>
                <td className="mobile-phone-plan-cost-per-month-answer-second-entity all-indicator-answers">
                  {state2MobilePhonePlanCostPerMonth
                    ? `${formatNumberWithCommas(
                        state2MobilePhonePlanCostPerMonth
                      )} USD`
                    : 'Yet to Update'}
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
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing Landline phone basic plan cost per month"
                    />
                  </div>
                </td>

                <td className="landline-phone-plan-cost-per-month-answer-first-entity all-indicator-answers">
                  {state1LandlinePhoneServicePerMonth
                    ? `${formatNumberWithCommas(
                        state1LandlinePhoneServicePerMonth
                      )} USD`
                    : 'Yet to Update'}
                </td>
                <td className="landline-phone-plan-cost-per-month-answer-second-entity all-indicator-answers">
                  {state2LandlinePhoneServicePerMonth
                    ? `${formatNumberWithCommas(
                        state2LandlinePhoneServicePerMonth
                      )} USD`
                    : 'Yet to Update'}
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
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing Cable TV basic plan cost per month"
                    />
                  </div>
                </td>

                <td className="cable-tv-service-per-month-first-entity all-indicator-answers">
                  {state1CableTVServicePerMonth
                    ? `${formatNumberWithCommas(
                        state1CableTVServicePerMonth
                      )} USD`
                    : 'Yet to Update'}
                </td>
                <td className="mobile-phone-plan-cost-per-month-answer-second-entity all-indicator-answers">
                  {state2CableTVServicePerMonth
                    ? `${formatNumberWithCommas(
                        state2CableTVServicePerMonth
                      )} USD`
                    : 'Yet to Update'}
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
                {' '}
                <span className="network-and-communication-cost-calculation">
                  {' '}
                  {percentageDifference}%{' '}
                </span>
              </strong>
              <span className="internet-and-communication-more-less-calculation">
                {' '}
                {moreOrLess}{' '}
              </span>{' '}
              in
              <span className="first-entity-name-pages-paragraph">
                {' '}
                {state1}{' '}
              </span>{' '}
              compared to
              <span className="second-entity-name-pages-paragraph">
                {' '}
                {state2}
              </span>
              .
            </p>
          </div>
        </div>
      </>
    );
}

export default NetworkAndCommunication