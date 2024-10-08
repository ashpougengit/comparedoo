import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { formatNumberWithCommas } from '@/lib/format/format';
import Image from 'next/image';

function Groceries({
  state1CostInfo,
  state2CostInfo,
  state1URLCase,
  state2URLCase,
}) {
  const state1 = state1CostInfo.state;
  const state1Rice1Kg = state1CostInfo.rice1Kg;
  const state1Milk1Liter = state1CostInfo.milk1Liter;
  const state1Water1Liter = state1CostInfo.water1Liter;
  const state1Bread500g = state1CostInfo.bread500g;
  const state1EggsDozen = state1CostInfo.eggsDozen;
  const state1Cheese1Kg = state1CostInfo.cheese1Kg;
  const state1ChickenBreasts1Kg = state1CostInfo.chickenBreasts1Kg;
  const state1WaterAndMilkCost =
    (state1Water1Liter || 0) + (state1Milk1Liter || 0);
  const state1TotalCost =
    (state1Rice1Kg || 0) +
    (state1Milk1Liter || 0) +
    (state1Water1Liter || 0) +
    (state1Bread500g || 0) +
    (state1EggsDozen || 0) +
    (state1Cheese1Kg || 0) +
    (state1ChickenBreasts1Kg || 0);

  const state2 = state2CostInfo.state;
  const state2Rice1Kg = state2CostInfo.rice1Kg;
  const state2Milk1Liter = state2CostInfo.milk1Liter;
  const state2Water1Liter = state2CostInfo.water1Liter;
  const state2Bread500g = state2CostInfo.bread500g;
  const state2EggsDozen = state2CostInfo.eggsDozen;
  const state2Cheese1Kg = state2CostInfo.cheese1Kg;
  const state2ChickenBreasts1Kg = state2CostInfo.chickenBreasts1Kg;
  const state2WaterAndMilkCost =
    (state2Water1Liter || 0) + (state2Milk1Liter || 0);
  const state2TotalCost =
    (state2Rice1Kg || 0) +
    (state2Milk1Liter || 0) +
    (state2Water1Liter || 0) +
    (state2Bread500g || 0) +
    (state2EggsDozen || 0) +
    (state2Cheese1Kg || 0) +
    (state2ChickenBreasts1Kg || 0);

  const waterAndMilkTimes =
    state1WaterAndMilkCost > state2WaterAndMilkCost
      ? (state1WaterAndMilkCost / state2WaterAndMilkCost).toFixed(2)
      : (state2WaterAndMilkCost / state1WaterAndMilkCost).toFixed(2);
  const moreOrLessTimes =
    state1WaterAndMilkCost > state2WaterAndMilkCost ? 'more' : 'less';
  const percentageDifference = (
    (Math.abs(state1TotalCost - state2TotalCost) / state2TotalCost) *
    100
  ).toFixed(2);
  const moreOrLessPercentage =
    state1TotalCost > state2TotalCost ? 'more' : 'less';

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
                      src={`/images/${state1URLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Pictorial representation of map of ${state1URLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {state1}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${state1URLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Image illustrating the flag of ${state1URLCase}`}
                    />
                  </div>
                </div>
              </th>

              <th>
                <div className="heading-map-name-flag">
                  <div className="second-entity-map-pages-comparison">
                    <Image
                      src={`/images/${state2URLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Pictorial representation of map of ${state2URLCase}`}
                    />
                  </div>

                  <div className="second-entity-name-pages-comparison">
                    {' '}
                    {state2}{' '}
                  </div>

                  <div className="second-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${state2URLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Image illustrating the flag of ${state2URLCase}`}
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
                {state1Rice1Kg
                  ? `${formatNumberWithCommas(state1Rice1Kg)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="rice-1-kg-second-entity all-indicator-answers">
                {state2Rice1Kg
                  ? `${formatNumberWithCommas(state2Rice1Kg)} USD`
                  : 'Yet to Update'}
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
                {state1Milk1Liter
                  ? `${formatNumberWithCommas(state1Milk1Liter)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="milk-1-liter-second-entity all-indicator-answers">
                {state2Milk1Liter
                  ? `${formatNumberWithCommas(state2Milk1Liter)} USD`
                  : 'Yet to Update'}
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
                {state1Water1Liter
                  ? `${formatNumberWithCommas(state1Water1Liter)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="water-1-liter-second-entity all-indicator-answers">
                {state2Water1Liter
                  ? `${formatNumberWithCommas(state2Water1Liter)} USD`
                  : 'Yet to Update'}
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
                {state1Bread500g
                  ? `${formatNumberWithCommas(state1Bread500g)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="bread-second-entity all-indicator-answers">
                {state2Bread500g
                  ? `${formatNumberWithCommas(state2Bread500g)} USD`
                  : 'Yet to Update'}
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
                {state1EggsDozen
                  ? `${formatNumberWithCommas(state1EggsDozen)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="eggs-second-entity all-indicator-answers">
                {state2EggsDozen
                  ? `${formatNumberWithCommas(state2EggsDozen)} USD`
                  : 'Yet to Update'}
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
                {state1Cheese1Kg
                  ? `${formatNumberWithCommas(state1Cheese1Kg)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="cheese-1-kg-second-entity all-indicator-answers">
                {state2Cheese1Kg
                  ? `${formatNumberWithCommas(state2Cheese1Kg)} USD`
                  : 'Yet to Update'}
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
                {state1ChickenBreasts1Kg
                  ? `${formatNumberWithCommas(state1ChickenBreasts1Kg)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="chicken-1-kg-second-entity all-indicator-answers">
                {state2ChickenBreasts1Kg
                  ? `${formatNumberWithCommas(state2ChickenBreasts1Kg)} USD`
                  : 'Yet to Update'}
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
              {state1}{' '}
            </span>{' '}
            than in
            <span className="second-entity-name-pages-paragraph">
              {' '}
              {state2}
            </span>
            ?
          </h3>
          <p>
            In{' '}
            <span className="first-entity-name-pages-paragraph"> {state1}</span>
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
              {state2}
            </span>
            .
          </p>

          <p>
            If you lived in
            <span className="first-entity-name-pages-paragraph"> {state1}</span>
            , instead of
            <span className="second-entity-name-pages-paragraph">
              {' '}
              {state2}
            </span>
            , you would have to pay
            <strong>
              <span className="groceries-calculation">
                {' '}
                {percentageDifference}%
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

export default Groceries;
