import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { dollarizedCountries } from '@/lib/array-list/dollarizedCountries';
import { formatNumberWithCommas } from '@/lib/format/format';
import Image from 'next/image';

function Groceries({
  slug1,
  slug2,
  value1,
  value2,
  slug1CostInfo,
  slug2CostInfo,
  slug1Currency,
  slug2Currency,
  slug1ExchangeRate,
  slug2ExchangeRate,
  slug1URLCase,
  slug2URLCase,
}) {
  const slug1Rice1Kg = slug1CostInfo.rice1Kg;
  const slug1Milk1Liter = slug1CostInfo.milk1Liter;
  const slug1Water1Liter = slug1CostInfo.water1Liter;
  const slug1Bread500g = slug1CostInfo.bread500g;
  const slug1EggsDozen = slug1CostInfo.eggsDozen;
  const slug1Cheese1Kg = slug1CostInfo.cheese1Kg;
  const slug1ChickenBreasts1Kg = slug1CostInfo.chickenBreasts1Kg;
  const slug1WaterAndMilkCost =
    ((slug1Water1Liter || 0) + (slug1Milk1Liter || 0)) * slug1ExchangeRate;
  const slug1TotalCost =
    ((slug1Rice1Kg || 0) +
      (slug1Milk1Liter || 0) +
      (slug1Water1Liter || 0) +
      (slug1Bread500g || 0) +
      (slug1EggsDozen || 0) +
      (slug1Cheese1Kg || 0) +
      (slug1ChickenBreasts1Kg || 0)) *
    slug1ExchangeRate;

  const slug2Rice1Kg = slug2CostInfo.rice1Kg;
  const slug2Milk1Liter = slug2CostInfo.milk1Liter;
  const slug2Water1Liter = slug2CostInfo.water1Liter;
  const slug2Bread500g = slug2CostInfo.bread500g;
  const slug2EggsDozen = slug2CostInfo.eggsDozen;
  const slug2Cheese1Kg = slug2CostInfo.cheese1Kg;
  const slug2ChickenBreasts1Kg = slug2CostInfo.chickenBreasts1Kg;
  const slug2WaterAndMilkCost =
    ((slug2Water1Liter || 0) + (slug2Milk1Liter || 0)) * slug2ExchangeRate;
  const slug2TotalCost =
    ((slug2Rice1Kg || 0) +
      (slug2Milk1Liter || 0) +
      (slug2Water1Liter || 0) +
      (slug2Bread500g || 0) +
      (slug2EggsDozen || 0) +
      (slug2Cheese1Kg || 0) +
      (slug2ChickenBreasts1Kg || 0)) *
    slug2ExchangeRate;

  const waterAndMilkTimes =
    slug1WaterAndMilkCost > slug2WaterAndMilkCost
      ? (slug1WaterAndMilkCost / slug2WaterAndMilkCost).toFixed(2)
      : (slug2WaterAndMilkCost / slug1WaterAndMilkCost).toFixed(2);
  const moreOrLessTimes =
    slug1WaterAndMilkCost > slug2WaterAndMilkCost ? 'more' : 'less';
  const percentageDifference = (
    (Math.abs(slug1TotalCost - slug2TotalCost) / slug2TotalCost) *
    100
  ).toFixed(2);
  const moreOrLessPercentage =
    slug1TotalCost > slug2TotalCost ? 'more' : 'less';

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
                      src={`/images/${slug1URLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Pictorial representation of map of ${slug1URLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {slug1}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${slug1URLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Image illustrating the flag of ${slug1URLCase}`}
                    />
                  </div>
                </div>
              </th>

              <th>
                <div className="heading-map-name-flag">
                  <div className="second-entity-map-pages-comparison">
                    <Image
                      src={`/images/${slug2URLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Pictorial representation of map of ${slug2URLCase}`}
                    />
                  </div>

                  <div className="second-entity-name-pages-comparison">
                    {' '}
                    {slug2}{' '}
                  </div>

                  <div className="second-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${slug2URLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Image illustrating the flag of ${slug2URLCase}`}
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing rice cost per month"
                  />
                </div>
              </td>

              <td className="rice-1-kg-first-entity all-indicator-answers">
                {slug1Rice1Kg ? (
                  value1 === 'state' || dollarizedCountries.includes(slug1) ? (
                    `${formatNumberWithCommas(slug1Rice1Kg)} USD`
                  ) : (
                    <>
                      {`${formatNumberWithCommas(
                        slug1Rice1Kg
                      )} ${slug1Currency}`}{' '}
                      <br />
                      {`(${formatNumberWithCommas(
                        slug1Rice1Kg * slug1ExchangeRate
                      )} USD)`}
                    </>
                  )
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="rice-1-kg-second-entity all-indicator-answers">
                {slug2Rice1Kg ? (
                  value2 === 'state' || dollarizedCountries.includes(slug2) ? (
                    `${formatNumberWithCommas(slug2Rice1Kg)} USD`
                  ) : (
                    <>
                      {`${formatNumberWithCommas(
                        slug2Rice1Kg
                      )} ${slug2Currency}`}{' '}
                      <br />
                      {`(${formatNumberWithCommas(
                        slug2Rice1Kg * slug2ExchangeRate
                      )} USD)`}
                    </>
                  )
                ) : (
                  'Yet to Update'
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing milk cost per month"
                  />
                </div>
              </td>

              <td className="milk-1-liter-first-entity all-indicator-answers">
                {slug1Milk1Liter ? (
                  value1 === 'state' || dollarizedCountries.includes(slug1) ? (
                    `${formatNumberWithCommas(slug1Milk1Liter)} USD`
                  ) : (
                    <>
                      {`${formatNumberWithCommas(
                        slug1Milk1Liter
                      )} ${slug1Currency}`}{' '}
                      <br />
                      {`(${formatNumberWithCommas(
                        slug1Milk1Liter * slug1ExchangeRate
                      )} USD)`}
                    </>
                  )
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="milk-1-liter-second-entity all-indicator-answers">
                {slug2Milk1Liter ? (
                  value2 === 'state' || dollarizedCountries.includes(slug2) ? (
                    `${formatNumberWithCommas(slug2Milk1Liter)} USD`
                  ) : (
                    <>
                      {`${formatNumberWithCommas(
                        slug2Milk1Liter
                      )} ${slug2Currency}`}{' '}
                      <br />
                      {`(${formatNumberWithCommas(
                        slug2Milk1Liter * slug2ExchangeRate
                      )} USD)`}
                    </>
                  )
                ) : (
                  'Yet to Update'
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing water cost per month"
                  />
                </div>
              </td>

              <td className="water-1-liter-first-entity all-indicator-answers">
                {slug1Water1Liter ? (
                  value1 === 'state' || dollarizedCountries.includes(slug1) ? (
                    `${formatNumberWithCommas(slug1Water1Liter)} USD`
                  ) : (
                    <>
                      {`${formatNumberWithCommas(
                        slug1Water1Liter
                      )} ${slug1Currency}`}{' '}
                      <br />
                      {`(${formatNumberWithCommas(
                        slug1Water1Liter * slug1ExchangeRate
                      )} USD)`}
                    </>
                  )
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="water-1-liter-second-entity all-indicator-answers">
                {slug2Water1Liter ? (
                  value2 === 'state' || dollarizedCountries.includes(slug2) ? (
                    `${formatNumberWithCommas(slug2Water1Liter)} USD`
                  ) : (
                    <>
                      {`${formatNumberWithCommas(
                        slug2Water1Liter
                      )} ${slug2Currency}`}{' '}
                      <br />
                      {`(${formatNumberWithCommas(
                        slug2Water1Liter * slug2ExchangeRate
                      )} USD)`}
                    </>
                  )
                ) : (
                  'Yet to Update'
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing bread cost per month"
                  />
                </div>
              </td>

              <td className="bread-first-entity all-indicator-answers">
                {slug1Bread500g ? (
                  value1 === 'state' || dollarizedCountries.includes(slug1) ? (
                    `${formatNumberWithCommas(slug1Bread500g)} USD`
                  ) : (
                    <>
                      {`${formatNumberWithCommas(
                        slug1Bread500g
                      )} ${slug1Currency}`}{' '}
                      <br />
                      {`(${formatNumberWithCommas(
                        slug1Bread500g * slug1ExchangeRate
                      )} USD)`}
                    </>
                  )
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="bread-second-entity all-indicator-answers">
                {slug2Bread500g ? (
                  value2 === 'state' || dollarizedCountries.includes(slug2) ? (
                    `${formatNumberWithCommas(slug2Bread500g)} USD`
                  ) : (
                    <>
                      {`${formatNumberWithCommas(
                        slug2Bread500g
                      )} ${slug2Currency}`}{' '}
                      <br />
                      {`(${formatNumberWithCommas(
                        slug2Bread500g * slug2ExchangeRate
                      )} USD)`}
                    </>
                  )
                ) : (
                  'Yet to Update'
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing eggs cost per month"
                  />
                </div>
              </td>

              <td className="eggs-first-entity all-indicator-answers">
                {slug1EggsDozen ? (
                  value1 === 'state' || dollarizedCountries.includes(slug1) ? (
                    `${formatNumberWithCommas(slug1EggsDozen)} USD`
                  ) : (
                    <>
                      {`${formatNumberWithCommas(
                        slug1EggsDozen
                      )} ${slug1Currency}`}{' '}
                      <br />
                      {`(${formatNumberWithCommas(
                        slug1EggsDozen * slug1ExchangeRate
                      )} USD)`}
                    </>
                  )
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="eggs-second-entity all-indicator-answers">
                {slug2EggsDozen ? (
                  value2 === 'state' || dollarizedCountries.includes(slug2) ? (
                    `${formatNumberWithCommas(slug2EggsDozen)} USD`
                  ) : (
                    <>
                      {`${formatNumberWithCommas(
                        slug2EggsDozen
                      )} ${slug2Currency}`}{' '}
                      <br />
                      {`(${formatNumberWithCommas(
                        slug2EggsDozen * slug2ExchangeRate
                      )} USD)`}
                    </>
                  )
                ) : (
                  'Yet to Update'
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing cheese cost per month"
                  />
                </div>
              </td>

              <td className="cheese-1-kg-first-entity all-indicator-answers">
                {slug1Cheese1Kg ? (
                  value1 === 'state' || dollarizedCountries.includes(slug1) ? (
                    `${formatNumberWithCommas(slug1Cheese1Kg)} USD`
                  ) : (
                    <>
                      {`${formatNumberWithCommas(
                        slug1Cheese1Kg
                      )} ${slug1Currency}`}{' '}
                      <br />
                      {`(${formatNumberWithCommas(
                        slug1Cheese1Kg * slug1ExchangeRate
                      )} USD)`}
                    </>
                  )
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="cheese-1-kg-second-entity all-indicator-answers">
                {slug2Cheese1Kg ? (
                  value2 === 'state' || dollarizedCountries.includes(slug2) ? (
                    `${formatNumberWithCommas(slug2Cheese1Kg)} USD`
                  ) : (
                    <>
                      {`${formatNumberWithCommas(
                        slug2Cheese1Kg
                      )} ${slug2Currency}`}{' '}
                      <br />
                      {`(${formatNumberWithCommas(
                        slug2Cheese1Kg * slug2ExchangeRate
                      )} USD)`}
                    </>
                  )
                ) : (
                  'Yet to Update'
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing chicken cost per month"
                  />
                </div>
              </td>

              <td className="chicken-1-kg-first-entity all-indicator-answers">
                {slug1ChickenBreasts1Kg ? (
                  value1 === 'state' || dollarizedCountries.includes(slug1) ? (
                    `${formatNumberWithCommas(slug1ChickenBreasts1Kg)} USD`
                  ) : (
                    <>
                      {`${formatNumberWithCommas(
                        slug1ChickenBreasts1Kg
                      )} ${slug1Currency}`}{' '}
                      <br />
                      {`(${formatNumberWithCommas(
                        slug1ChickenBreasts1Kg * slug1ExchangeRate
                      )} USD)`}
                    </>
                  )
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="chicken-1-kg-second-entity all-indicator-answers">
                {slug2ChickenBreasts1Kg ? (
                  value2 === 'state' || dollarizedCountries.includes(slug2) ? (
                    `${formatNumberWithCommas(slug2ChickenBreasts1Kg)} USD`
                  ) : (
                    <>
                      {`${formatNumberWithCommas(
                        slug2ChickenBreasts1Kg
                      )} ${slug2Currency}`}{' '}
                      <br />
                      {`(${formatNumberWithCommas(
                        slug2ChickenBreasts1Kg * slug2ExchangeRate
                      )} USD)`}
                    </>
                  )
                ) : (
                  'Yet to Update'
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
            <span className="first-entity-name-pages-paragraph"> {slug1} </span>
            than in
            <span className="second-entity-name-pages-paragraph"> {slug2}</span>
            ?
          </h3>
          <p>
            In
            <span className="first-entity-name-pages-paragraph"> {slug1}</span>,
            the cost of 1 Liter Water and 1 Liter Milk is
            <strong>
              <span className="water-and-milk-dollar-price-calculation">
                {' '}
                {waterAndMilkTimes}{' '}
              </span>
              times
            </strong>
            <span className="milk-water-more-less-calculation">
              {' '}
              {moreOrLessTimes}{' '}
            </span>
            expensive than the cost in
            <span className="second-entity-name-pages-paragraph"> {slug2}</span>
            .
          </p>

          <p>
            If you lived in
            <span className="first-entity-name-pages-paragraph"> {slug1}</span>,
            instead of
            <span className="second-entity-name-pages-paragraph"> {slug2}</span>
            , you would have to pay
            <strong>
              <span className="groceries-calculation">
                {' '}
                {percentageDifference}%{' '}
              </span>
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

export default Groceries;
