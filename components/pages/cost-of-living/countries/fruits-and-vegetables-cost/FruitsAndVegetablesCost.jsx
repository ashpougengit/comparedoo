import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner'
import { dollarizedCountries } from '@/lib/array-list/dollarizedCountries'
import { formatNumberWithCommas, formatUSDWithCommas } from "@/lib/format/format"
import Image from 'next/image'

function FruitsAndVegetablesCost({ country1CostInfo, country2CostInfo, country1Currency, country2Currency, country1UnitValueInUSD, country2UnitValueInUSD, country1URLCase, country2URLCase }) {
  const country1 = country1CostInfo.country
  const country1Apples1Kg = country1CostInfo.apples1Kg
  const country1Bananas1Kg = country1CostInfo.bananas1Kg
  const country1Oranges1Kg = country1CostInfo.oranges1Kg
  const country1Tomatoes1Kg = country1CostInfo.tomatoes1Kg
  const country1Potatoes1Kg = country1CostInfo.potatoes1Kg
  const country1Lemons1Kg = country1CostInfo.lemons1Kg
  const country1Onions1Kg = country1CostInfo.onions1Kg
  const country1Lentils1Kg = country1CostInfo.lentils1Kg
  const country1TotalCost = ((country1Apples1Kg || 0) + (country1Bananas1Kg || 0) + (country1Oranges1Kg || 0) + (country1Tomatoes1Kg || 0) + (country1Potatoes1Kg || 0) + (country1Lemons1Kg || 0) + (country1Onions1Kg || 0) + (country1Lentils1Kg || 0)) * country1UnitValueInUSD

  const country2 = country2CostInfo.country
  const country2Apples1Kg = country2CostInfo.apples1Kg
  const country2Bananas1Kg = country2CostInfo.bananas1Kg
  const country2Oranges1Kg = country2CostInfo.oranges1Kg
  const country2Tomatoes1Kg = country2CostInfo.tomatoes1Kg
  const country2Potatoes1Kg = country2CostInfo.potatoes1Kg
  const country2Lemons1Kg = country2CostInfo.lemons1Kg
  const country2Onions1Kg = country2CostInfo.onions1Kg
  const country2Lentils1Kg = country2CostInfo.lentils1Kg
  const country2TotalCost = ((country2Apples1Kg || 0) + (country2Bananas1Kg || 0) + (country2Oranges1Kg || 0) + (country2Tomatoes1Kg || 0) + (country2Potatoes1Kg || 0) + (country2Lemons1Kg || 0) + (country2Onions1Kg || 0) + (country2Lentils1Kg || 0)) * country2UnitValueInUSD

  const costTimes = country1TotalCost > country2TotalCost ? (country1TotalCost / country2TotalCost).toFixed(2) : (country2TotalCost / country1TotalCost).toFixed(2)
  const moreOrLess = country1TotalCost > country2TotalCost ? 'more' : 'less'

  return (
    <>
      <AdsHeaderBanner />

      <div className="geographical-map">
        <h2 className="pages-h2">Fruits and Vegetables Cost Comparison</h2>
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
                <div className="all-indicators">Apples (1 KG)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/apples-1-kg-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing apples cost per month"
                  />
                </div>
              </td>

              <td className="apples-1-kg-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1Apples1Kg)} ${country1Apples1Kg ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="apples-1-kg-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1Apples1Kg * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="apples-1-kg-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2Apples1Kg)} ${country2Apples1Kg ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="apples-1-kg-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2Apples1Kg * country2UnitValueInUSD
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing bananas cost per month"
                  />
                </div>
              </td>

              <td className="bananas-1-kg-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1Bananas1Kg)} ${country1Bananas1Kg ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="bananas-1-kg-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1Bananas1Kg * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="bananas-1-kg-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2Bananas1Kg)} ${country2Bananas1Kg ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="bananas-1-kg-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2Bananas1Kg * country2UnitValueInUSD
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing oranges cost per month"
                  />
                </div>
              </td>

              <td className="oranges-1-kg-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1Oranges1Kg)} ${country1Oranges1Kg ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="oranges-1-kg-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1Oranges1Kg * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="oranges-1-kg-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2Oranges1Kg)} ${country2Oranges1Kg ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="oranges-1-kg-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2Oranges1Kg * country2UnitValueInUSD
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing tomatoes cost per month"
                  />
                </div>
              </td>

              <td className="tomatoes-1-kg-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1Tomatoes1Kg)} ${country1Tomatoes1Kg ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="tomatoes-1-kg-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1Tomatoes1Kg * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="tomatoes-1-kg-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2Tomatoes1Kg)} ${country2Tomatoes1Kg ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="tomatoes-1-kg-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2Tomatoes1Kg * country2UnitValueInUSD
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing potatoes cost per month"
                  />
                </div>
              </td>

              <td className="potatoes-1-kg-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1Potatoes1Kg)} ${country1Potatoes1Kg ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="potatoes-1-kg-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1Potatoes1Kg * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="potatoes-1-kg-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2Potatoes1Kg)} ${country2Potatoes1Kg ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="potatoes-1-kg-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2Potatoes1Kg * country2UnitValueInUSD
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing lemons cost per month"
                  />
                </div>
              </td>

              <td className="lemons-1-kg-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1Lemons1Kg)} ${country1Lemons1Kg ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="lemons-1-kg-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1Lemons1Kg * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="lemons-1-kg-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2Lemons1Kg)} ${country2Lemons1Kg ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="lemons-1-kg-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2Lemons1Kg * country2UnitValueInUSD
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing onions cost per month"
                  />
                </div>
              </td>

              <td className="onions-1-kg-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1Onions1Kg)} ${country1Onions1Kg ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="onions-1-kg-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1Onions1Kg * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="onions-1-kg-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2Onions1Kg)} ${country2Onions1Kg ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="onions-1-kg-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2Onions1Kg * country2UnitValueInUSD
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing lentils cost per month"
                  />
                </div>
              </td>

              <td className="lentils-1-kg-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1Lentils1Kg)} ${country1Lentils1Kg ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="lentils-1-kg-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1Lentils1Kg * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="lentils-1-kg-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2Lentils1Kg)} ${country2Lentils1Kg ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="lentils-1-kg-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2Lentils1Kg * country2UnitValueInUSD
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
            If you lived in
            <span className="first-entity-name-pages-paragraph">
              {' '}
              {country1}
            </span>
            , instead of
            <span className="second-entity-name-pages-paragraph">
              {' '}
              {country2}
            </span>
            , you would have to pay
            <strong>
              <span className="fruits-and-vegetables-calculation">
                {' '}
                {costTimes}{' '}
              </span>{' '}
              times{' '}
            </strong>{' '}
            <span className="fruits-and-vegetables-more-or-less-calculation">
              {' '}
              {moreOrLess}{' '}
            </span>
            for Fruits and Vegetables.
          </p>
        </div>
      </div>
    </>
  );
}

export default FruitsAndVegetablesCost