import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { dollarizedCountries } from '@/lib/array-list/dollarizedCountries';
import {
  formatNumberWithCommas,
  formatUSDWithCommas,
} from '@/lib/format/format';
import Image from 'next/image';

function NetworkAndCommunication({
  country1CostInfo,
  country2CostInfo,
  country1Currency,
  country2Currency,
  country1UnitValueInUSD,
  country2UnitValueInUSD,
  country1URLCase,
  country2URLCase,
}) {
  const country1 = country1CostInfo.country;
  const country1WifiCostPerMonth = country1CostInfo.wifiCostPerMonth;
  const country1MobilePhonePlanCostPerMonth =
    country1CostInfo.mobilePhonePlanCostPerMonth;
  const country1LandlinePhoneServicePerMonth =
    country1CostInfo.landlinePhoneServicePerMonth;
  const country1CableTVServicePerMonth =
    country1CostInfo.cableTVServicePerMonth;
  const country1TotalCost =
    ((country1WifiCostPerMonth || 0) +
      (country1MobilePhonePlanCostPerMonth || 0) +
      (country1LandlinePhoneServicePerMonth || 0) +
      (country1CableTVServicePerMonth || 0)) *
    country1UnitValueInUSD;

  const country2 = country2CostInfo.country;
  const country2WifiCostPerMonth = country2CostInfo.wifiCostPerMonth;
  const country2MobilePhonePlanCostPerMonth =
    country2CostInfo.mobilePhonePlanCostPerMonth;
  const country2LandlinePhoneServicePerMonth =
    country2CostInfo.landlinePhoneServicePerMonth;
  const country2CableTVServicePerMonth =
    country2CostInfo.cableTVServicePerMonth;
  const country2TotalCost =
    ((country2WifiCostPerMonth || 0) +
      (country2MobilePhonePlanCostPerMonth || 0) +
      (country2LandlinePhoneServicePerMonth || 0) +
      (country2CableTVServicePerMonth || 0)) *
    country2UnitValueInUSD;

  const percentageDifference = (
    (Math.abs(country1TotalCost - country2TotalCost) / country2TotalCost) *
    100
  ).toFixed(2);
  const moreOrLess = country1TotalCost > country2TotalCost ? 'more' : 'less';

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
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt="Image representing an indicator"
                    />
                  </div>

                  <div className="indicator-text">Indicators</div>

                  <div className="left-indicator">
                    <Image
                      src="/images/indicators-left-image.png"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt="Image illustrating an indicator"
                    />
                  </div>
                </div>
              </th>

              <th>
                <div className="heading-map-name-flag">
                  <div className="first-entity-map-pages-comparison">
                    <Image
                      src={`/images/${country1URLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Pictorial representation of map of ${country1URLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {country1}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${country1URLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Image illustrating the flag of ${country1URLCase}`}
                    />
                  </div>
                </div>
              </th>

              <th>
                <div className="heading-map-name-flag">
                  <div className="second-entity-map-pages-comparison">
                    <Image
                      src={`/images/${country2URLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Pictorial representation of map of ${country2URLCase}`}
                    />
                  </div>

                  <div className="second-entity-name-pages-comparison">
                    {' '}
                    {country2}{' '}
                  </div>

                  <div className="second-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${country2URLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Image illustrating the flag of ${country2URLCase}`}
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing wifi cost per month"
                  />
                </div>
              </td>

              <td className="wifi-cost-per-month-answer-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1WifiCostPerMonth)} ${country1WifiCostPerMonth ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="wifi-cost-per-month-answer-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1WifiCostPerMonth * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="wifi-cost-per-month-answer-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2WifiCostPerMonth)} ${country2WifiCostPerMonth ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="wifi-cost-per-month-answer-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2WifiCostPerMonth * country2UnitValueInUSD
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing mobile phone basic plan cost per month"
                  />
                </div>
              </td>

              <td className="mobile-phone-plan-cost-per-month-answer-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(
                  country1MobilePhonePlanCostPerMonth
                )} ${country1MobilePhonePlanCostPerMonth ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="mobile-phone-plan-cost-per-month-answer-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1MobilePhonePlanCostPerMonth * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="mobile-phone-plan-cost-per-month-answer-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(
                  country2MobilePhonePlanCostPerMonth
                )} ${country2MobilePhonePlanCostPerMonth ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="mobile-phone-plan-cost-per-month-answer-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2MobilePhonePlanCostPerMonth * country2UnitValueInUSD
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Landline phone basic plan cost per month"
                  />
                </div>
              </td>

              <td className="landline-phone-plan-cost-per-month-answer-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(
                  country1LandlinePhoneServicePerMonth
                )} ${country1LandlinePhoneServicePerMonth ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="landline-phone-plan-cost-per-month-answer-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1LandlinePhoneServicePerMonth *
                    country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="landline-phone-plan-cost-per-month-answer-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(
                  country2LandlinePhoneServicePerMonth
                )} ${country2LandlinePhoneServicePerMonth ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="landline-phone-plan-cost-per-month-answer-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2LandlinePhoneServicePerMonth *
                    country2UnitValueInUSD
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Cable TV basic plan cost per month"
                  />
                </div>
              </td>

              <td className="cable-tv-service-per-month-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1CableTVServicePerMonth)} ${country1CableTVServicePerMonth ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="cable-tv-service-per-month-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1CableTVServicePerMonth * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="mobile-phone-plan-cost-per-month-answer-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2CableTVServicePerMonth)} ${country2CableTVServicePerMonth ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="cable-tv-service-per-month-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2CableTVServicePerMonth * country2UnitValueInUSD
                  )})`}</span>
                )}
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
              {country1}{' '}
            </span>{' '}
            compared to
            <span className="second-entity-name-pages-paragraph">
              {' '}
              {country2}
            </span>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default NetworkAndCommunication;
