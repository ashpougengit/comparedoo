import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { dollarizedCountries } from '@/lib/array-list/dollarizedCountries';
import {
  formatNumberWithCommas,
  formatUSDWithCommas,
} from '@/lib/format/format';
import Image from 'next/image';

function Groceries({ costInfo, currency, unitValueInUSD, countryURLCase }) {
  const country = costInfo.country;
  const rice1Kg = costInfo.rice1Kg;
  const milk1Liter = costInfo.milk1Liter;
  const water1Liter = costInfo.water1Liter;
  const bread500g = costInfo.bread500g;
  const eggsDozen = costInfo.eggsDozen;
  const cheese1Kg = costInfo.cheese1Kg;
  const chickenBreasts1Kg = costInfo.chickenBreasts1Kg;

  return (
    <>
      <AdsHeaderBanner />

      <div className="geographical-map">
        <h2 className="pages-h2">Groceries Cost</h2>
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
                <div className="all-indicators">Long Grain Rice (1 KG)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/rice-1-kg-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing rice cost per month"
                  />
                </div>
              </td>

              <td className="rice-1-kg-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(rice1Kg)} ${rice1Kg ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="rice-1-kg-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    rice1Kg * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Milk (1 Liter)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/milk-1-liter-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing milk cost per month"
                  />
                </div>
              </td>

              <td className="milk-1-liter-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(milk1Liter)} ${milk1Liter ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="milk-1-liter-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    milk1Liter * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Water (1 Liter)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/water-1-liter-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing water cost per month"
                  />
                </div>
              </td>

              <td className="water-1-liter-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(water1Liter)} ${water1Liter ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="water-1-liter-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    water1Liter * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Bread (500 gm)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/bread-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing bread cost per month"
                  />
                </div>
              </td>

              <td className="bread-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(bread500g)} ${bread500g ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="bread-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    bread500g * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Eggs (1 Dozen)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/eggs-dozen-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing eggs cost per month"
                  />
                </div>
              </td>

              <td className="eggs-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(eggsDozen)} ${eggsDozen ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="eggs-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    eggsDozen * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Cheese (1 KG)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/cheese-1-kg-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing cheese cost per month"
                  />
                </div>
              </td>

              <td className="cheese-1-kg-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(cheese1Kg)} ${cheese1Kg ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="cheese-1-kg-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    cheese1Kg * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Chicken Breast (1 KG)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/chicken-breast-1-kg-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing chicken cost per month"
                  />
                </div>
              </td>

              <td className="chicken-1-kg-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(chickenBreasts1Kg)} ${chickenBreasts1Kg ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="chicken-1-kg-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    chickenBreasts1Kg * unitValueInUSD
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

export default Groceries;
