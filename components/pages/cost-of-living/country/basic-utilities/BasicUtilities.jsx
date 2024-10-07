import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { dollarizedCountries } from '@/lib/array-list/dollarizedCountries';
import {
  formatNumberWithCommas,
  formatUSDWithCommas,
} from '@/lib/format/format';
import Image from 'next/image';

function BasicUtilities({
  costInfo,
  currency,
  unitValueInUSD,
  countryURLCase,
}) {
  const country = costInfo.country;
  const homeFurnishing = costInfo.homeFurnishing;
  const electricityCostPerMonth = costInfo.electricityCostPerMonth;
  const heatingCostPerMonth = costInfo.heatingCostPerMonth;
  const coolingCostPerMonth = costInfo.coolingCostPerMonth;
  const waterCostPerMonth = costInfo.waterCostPerMonth;
  return (
    <>
      <AdsHeaderBanner />

      <div className="geographical-map">
        <h2 className="pages-h2">Basic Utilities Cost</h2>
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
                      src={`/images/${countryURLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Pictorial representation of map of ${countryURLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {country}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${countryURLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                <div className="all-indicators">Basic Home Furnishing</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/home-furnishing-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Home Furnishing Cost"
                  />
                </div>
              </td>

              <td className="home-furnishing-answer-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(homeFurnishing)} ${homeFurnishing ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="home-furnishing-answer-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    homeFurnishing * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Electricity Cost Per Month</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/electricity-cost-per-month-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Electricity Cost per month"
                  />
                </div>
              </td>

              <td className="electricity-cost-per-month-answer-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(electricityCostPerMonth)} ${electricityCostPerMonth ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="electricity-cost-per-month-answer-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    electricityCostPerMonth * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Heating Cost Per Month</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/heating-cost-per-month-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Heating Cost per month"
                  />
                </div>
              </td>

              <td className="heating-cost-per-month-answer-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(heatingCostPerMonth)} ${heatingCostPerMonth ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="heating-cost-per-month-answer-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    heatingCostPerMonth * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Cooling Cost Per Month</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/cooling-cost-per-month-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Cooling Cost per month"
                  />
                </div>
              </td>

              <td className="cooling-cost-per-month-answer-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(coolingCostPerMonth)} ${coolingCostPerMonth ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="cooling-cost-per-month-answer-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    coolingCostPerMonth * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  Water Supply Cost Per Month
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/water-cost-per-month-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing water cost per month"
                  />
                </div>
              </td>

              <td className="water-cost-per-month-answer-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(waterCostPerMonth)} ${waterCostPerMonth ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="water-cost-per-month-answer-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    waterCostPerMonth * unitValueInUSD
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

export default BasicUtilities;
