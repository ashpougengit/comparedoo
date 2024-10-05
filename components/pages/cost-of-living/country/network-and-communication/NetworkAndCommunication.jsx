import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { dollarizedCountries } from '@/lib/array-list/dollarizedCountries';
import {
  formatNumberWithCommas,
  formatUSDWithCommas,
} from '@/lib/format/format';
import Image from 'next/image';

function NetworkAndCommunication({
  costInfo,
  currency,
  unitValueInUSD,
  countryURLCase,
}) {
  const country = costInfo.country;
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
                      src={`/images/${countryURLCase}-map-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Pictorial representation of map of ${countryURLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {country}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${countryURLCase}-flag-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Image illustrating the flag of ${countryURLCase}`}
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
                    fill
                    alt="Image Describing wifi cost per month"
                  />
                </div>
              </td>

              <td className="wifi-cost-per-month-answer-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(wifiCostPerMonth)} ${wifiCostPerMonth ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="wifi-cost-per-month-answer-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    wifiCostPerMonth * unitValueInUSD
                  )})`}</span>
                )}
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
                    fill
                    alt="Image Describing mobile phone basic plan cost per month"
                  />
                </div>
              </td>

              <td className="mobile-phone-plan-cost-per-month-answer-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(mobilePhonePlanCostPerMonth)} ${mobilePhonePlanCostPerMonth ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="mobile-phone-plan-cost-per-month-answer-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    mobilePhonePlanCostPerMonth * unitValueInUSD
                  )})`}</span>
                )}
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
                    fill
                    alt="Image Describing Landline phone basic plan cost per month"
                  />
                </div>
              </td>

              <td className="landline-phone-plan-cost-per-month-answer-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(landlinePhoneServicePerMonth)} ${landlinePhoneServicePerMonth ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="landline-phone-plan-cost-per-month-answer-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    landlinePhoneServicePerMonth * unitValueInUSD
                  )})`}</span>
                )}
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
                    fill
                    alt="Image Describing Cable TV basic plan cost per month"
                  />
                </div>
              </td>

              <td className="cable-tv-service-per-month-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(cableTVServicePerMonth)} ${cableTVServicePerMonth ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="cable-tv-service-per-month-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    cableTVServicePerMonth * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default NetworkAndCommunication;
