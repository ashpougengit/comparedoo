import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { dollarizedCountries } from '@/lib/array-list/dollarizedCountries';
import {
  formatNumberWithCommas,
  formatUSDWithCommas,
} from '@/lib/format/format';
import Image from 'next/image';

function GroceriesCost({
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
  const country1Rice1Kg = country1CostInfo.rice1Kg;
  const country1Milk1Liter = country1CostInfo.milk1Liter;
  const country1Water1Liter = country1CostInfo.water1Liter;
  const country1Bread500g = country1CostInfo.bread500g;
  const country1EggsDozen = country1CostInfo.eggsDozen;
  const country1Cheese1Kg = country1CostInfo.cheese1Kg;
  const country1ChickenBreasts1Kg = country1CostInfo.chickenBreasts1Kg;
  const country1WaterAndMilkCost =
    ((country1Water1Liter || 0) + (country1Milk1Liter || 0)) *
    country1UnitValueInUSD;
  const country1TotalCost =
    ((country1Rice1Kg || 0) +
      (country1Milk1Liter || 0) +
      (country1Water1Liter || 0) +
      (country1Bread500g || 0) +
      (country1EggsDozen || 0) +
      (country1Cheese1Kg || 0) +
      (country1ChickenBreasts1Kg || 0)) *
    country1UnitValueInUSD;

  const country2 = country2CostInfo.country;
  const country2Rice1Kg = country2CostInfo.rice1Kg;
  const country2Milk1Liter = country2CostInfo.milk1Liter;
  const country2Water1Liter = country2CostInfo.water1Liter;
  const country2Bread500g = country2CostInfo.bread500g;
  const country2EggsDozen = country2CostInfo.eggsDozen;
  const country2Cheese1Kg = country2CostInfo.cheese1Kg;
  const country2ChickenBreasts1Kg = country2CostInfo.chickenBreasts1Kg;
  const country2WaterAndMilkCost =
    ((country2Water1Liter || 0) + (country2Milk1Liter || 0)) *
    country2UnitValueInUSD;
  const country2TotalCost =
    ((country2Rice1Kg || 0) +
      (country2Milk1Liter || 0) +
      (country2Water1Liter || 0) +
      (country2Bread500g || 0) +
      (country2EggsDozen || 0) +
      (country2Cheese1Kg || 0) +
      (country2ChickenBreasts1Kg || 0)) *
    country2UnitValueInUSD;

  const waterAndMilkTimes =
    country1WaterAndMilkCost > country2WaterAndMilkCost
      ? (country1WaterAndMilkCost / country2WaterAndMilkCost).toFixed(2)
      : (country2WaterAndMilkCost / country1WaterAndMilkCost).toFixed(2);
  const moreOrLessTimes =
    country1WaterAndMilkCost > country2WaterAndMilkCost ? 'more' : 'less';
  const percentageDifference = (
    (Math.abs(country1TotalCost - country2TotalCost) / country2TotalCost) *
    100
  ).toFixed(2);
  const moreOrLessPercentage =
    country1TotalCost > country2TotalCost ? 'more' : 'less';

  return (
    <>
      <AdsHeaderBanner />

      <div className="geographical-map">
        <h2 className="pages-h2">Groceries Cost Comparison</h2>
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
                      src={`/images/${country1URLCase}-map-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Pictorial representation of map of ${country1URLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {country1}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${country1URLCase}-flag-small.png`}
                      layout="fill"
                      objectFit="contain"
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
                      layout="fill"
                      objectFit="contain"
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
                      layout="fill"
                      objectFit="contain"
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
                <div className="all-indicators">Long Grain Rice (1 KG)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/rice-1-kg-image.png"
                    fill
                    alt="Image Describing rice cost per month"
                  />
                </div>
              </td>

              <td className="rice-1-kg-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1Rice1Kg)} ${country1Rice1Kg ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="rice-1-kg-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1Rice1Kg * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="rice-1-kg-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2Rice1Kg)} ${country2Rice1Kg ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="rice-1-kg-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2Rice1Kg * country2UnitValueInUSD
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
                    fill
                    alt="Image Describing milk cost per month"
                  />
                </div>
              </td>

              <td className="milk-1-liter-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1Milk1Liter)} ${country1Milk1Liter ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="milk-1-liter-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1Milk1Liter * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="milk-1-liter-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2Milk1Liter)} ${country2Milk1Liter ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="milk-1-liter-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2Milk1Liter * country2UnitValueInUSD
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
                    fill
                    alt="Image Describing water cost per month"
                  />
                </div>
              </td>

              <td className="water-1-liter-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1Water1Liter)} ${country1Water1Liter ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="water-1-liter-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1Water1Liter * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="water-1-liter-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2Water1Liter)} ${country2Water1Liter ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="water-1-liter-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2Water1Liter * country2UnitValueInUSD
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
                    fill
                    alt="Image Describing bread cost per month"
                  />
                </div>
              </td>

              <td className="bread-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1Bread500g)} ${country1Bread500g ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="bread-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1Bread500g * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="bread-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2Bread500g)} ${country2Bread500g ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="bread-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2Bread500g * country2UnitValueInUSD
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
                    fill
                    alt="Image Describing eggs cost per month"
                  />
                </div>
              </td>

              <td className="eggs-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1EggsDozen)} ${country1EggsDozen ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="eggs-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1EggsDozen * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="eggs-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2EggsDozen)} ${country2EggsDozen ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="eggs-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2EggsDozen * country2UnitValueInUSD
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
                    fill
                    alt="Image Describing cheese cost per month"
                  />
                </div>
              </td>

              <td className="cheese-1-kg-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1Cheese1Kg)} ${country1Cheese1Kg ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="cheese-1-kg-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1Cheese1Kg * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="cheese-1-kg-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2Cheese1Kg)} ${country2Cheese1Kg ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="cheese-1-kg-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2Cheese1Kg * country2UnitValueInUSD
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
                    fill
                    alt="Image Describing chicken cost per month"
                  />
                </div>
              </td>

              <td className="chicken-1-kg-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1ChickenBreasts1Kg)} ${country1ChickenBreasts1Kg ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="chicken-1-kg-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1ChickenBreasts1Kg * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="chicken-1-kg-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2ChickenBreasts1Kg)} ${country2ChickenBreasts1Kg ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="chicken-1-kg-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2ChickenBreasts1Kg * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="paragraph-for-pages-below-table">
        <div className="para-for-pages-single-div">
          <h3>
            Does the Groceries cost more in
            <span className="first-entity-name-pages-paragraph">
              {' '}
              {country1}{' '}
            </span>{' '}
            than in
            <span className="second-entity-name-pages-paragraph">
              {' '}
              {country2}
            </span>
            ?
          </h3>

          <p>
            In{' '}
            <span className="first-entity-name-pages-paragraph">
              {' '}
              {country1}
            </span>
            , the cost of 1 Liter Water and 1 Liter Milk is{' '}
            <strong>
              <span className="water-and-milk-dollar-price-calculation">
                {' '}
                {waterAndMilkTimes}{' '}
              </span>{' '}
              times{' '}
            </strong>
            <span className="milk-water-more-less-calculation">
              {' '}
              {moreOrLessTimes}{' '}
            </span>{' '}
            expensive than the cost in
            <span className="second-entity-name-pages-paragraph">
              {' '}
              {country2}
            </span>
            .
          </p>

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
              <span className="groceries-calculation">
                {' '}
                {percentageDifference}%{' '}
              </span>{' '}
              <span className="groceries-more-or-less-calculation">
                {' '}
                {moreOrLessPercentage}{' '}
              </span>
            </strong>
            for Groceries.
          </p>
        </div>
      </div>
    </>
  );
}

export default GroceriesCost;
