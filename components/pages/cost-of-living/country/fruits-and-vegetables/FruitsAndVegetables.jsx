import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { dollarizedCountries } from '@/lib/array-list/dollarizedCountries';
import {
  formatNumberWithCommas,
  formatUSDWithCommas,
} from '@/lib/format/format';
import Image from 'next/image';

function FruitsAndVegetables({
  costInfo,
  currency,
  unitValueInUSD,
  countryURLCase,
}) {
  const country = costInfo.country;
  const apples1Kg = costInfo.apples1Kg;
  const bananas1Kg = costInfo.bananas1Kg;
  const oranges1Kg = costInfo.oranges1Kg;
  const tomatoes1Kg = costInfo.tomatoes1Kg;
  const potatoes1Kg = costInfo.potatoes1Kg;
  const lemons1Kg = costInfo.lemons1Kg;
  const onions1Kg = costInfo.onions1Kg;
  const lentils1Kg = costInfo.lentils1Kg;

  return (
    <>
      <AdsHeaderBanner />

      <div className="geographical-map">
        <h2 className="pages-h2">Fruits and Vegetables Cost</h2>
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
                      alt="Image representing an indicator"
                    />
                  </div>

                  <div className="indicator-text">Indicators</div>

                  <div className="left-indicator">
                    <Image
                      src="/images/indicators-left-image.png"
                      fill
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
                <div className="all-indicators">Apples (1 KG)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/apples-1-kg-image.png"
                    fill
                    alt="Image Describing apples cost per month"
                  />
                </div>
              </td>

              <td className="apples-1-kg-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(apples1Kg)} ${apples1Kg ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="apples-1-kg-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    apples1Kg * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Bananas (1 KG)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/bananas-1-kg-image.png"
                    fill
                    alt="Image Describing bananas cost per month"
                  />
                </div>
              </td>

              <td className="bananas-1-kg-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(bananas1Kg)} ${bananas1Kg ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="bananas-1-kg-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    bananas1Kg * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Oranges (1 KG)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/oranges-1-kg-image.png"
                    fill
                    alt="Image Describing oranges cost per month"
                  />
                </div>
              </td>

              <td className="oranges-1-kg-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(oranges1Kg)} ${oranges1Kg ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="oranges-1-kg-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    oranges1Kg * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Tomatoes (1 KG)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/tomatoes-1-kg-image.png"
                    fill
                    alt="Image Describing tomatoes cost per month"
                  />
                </div>
              </td>

              <td className="tomatoes-1-kg-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(tomatoes1Kg)} ${tomatoes1Kg ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="tomatoes-1-kg-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    tomatoes1Kg * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Potatoes (1 KG)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/potatoes-1-kg-image.png"
                    fill
                    alt="Image Describing potatoes cost per month"
                  />
                </div>
              </td>

              <td className="potatoes-1-kg-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(potatoes1Kg)} ${potatoes1Kg ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="potatoes-1-kg-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    potatoes1Kg * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Lemons (1 KG)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/lemons-1-kg-image.png"
                    fill
                    alt="Image Describing lemons cost per month"
                  />
                </div>
              </td>

              <td className="lemons-1-kg-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(lemons1Kg)} ${lemons1Kg ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="lemons-1-kg-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    lemons1Kg * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Onions (1 KG)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/onions-1-kg-image.png"
                    fill
                    alt="Image Describing onions cost per month"
                  />
                </div>
              </td>

              <td className="onions-1-kg-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(onions1Kg)} ${onions1Kg ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="onions-1-kg-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    onions1Kg * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Lentils (1 KG)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/lentils-1-kg-image.png"
                    fill
                    alt="Image Describing lentils cost per month"
                  />
                </div>
              </td>

              <td className="lentils-1-kg-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(lentils1Kg)} ${lentils1Kg ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="lentils-1-kg-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    lentils1Kg * unitValueInUSD
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

export default FruitsAndVegetables;
