import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { formatNumberWithCommas } from '@/lib/format/format';
import Image from 'next/image';

function NetworkAndCommunication({ costInfo, stateURLCase }) {
  const state = costInfo.state;
  const wifiCostPerMonth = costInfo.wifiCostPerMonth;
  const mobilePhonePlanCostPerMonth = costInfo.mobilePhonePlanCostPerMonth;
  const landlinePhoneServicePerMonth = costInfo.landlinePhoneServicePerMonth;
  const cableTVServicePerMonth = costInfo.cableTVServicePerMonth;

  return (
    <>
      <AdsHeaderBanner />

      <div className="geographical-map">
        <h2 className="pages-h2">Network and Communication Cost</h2>
      </div>

      <div className="basic-information-comparison-div1">
        <table className="indicators-single-country-divs">
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
                      src={`/images/${stateURLCase}-map-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Pictorial representation of map of ${stateURLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {state}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${stateURLCase}-flag-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Image illustrating the flag of ${stateURLCase}`}
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
                {wifiCostPerMonth
                  ? `${formatNumberWithCommas(wifiCostPerMonth)} USD`
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
                {mobilePhonePlanCostPerMonth
                  ? `${formatNumberWithCommas(mobilePhonePlanCostPerMonth)} USD`
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
                {landlinePhoneServicePerMonth
                  ? `${formatNumberWithCommas(
                    landlinePhoneServicePerMonth
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
                {cableTVServicePerMonth
                  ? `${formatNumberWithCommas(cableTVServicePerMonth)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default NetworkAndCommunication;
