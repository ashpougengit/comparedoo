import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { formatNumberWithCommas } from '@/lib/format/format';
import Image from 'next/image';

function BasicUtilities({
  state1CostInfo,
  state2CostInfo,
  state1URLCase,
  state2URLCase,
}) {
  const state1 = state1CostInfo.state;
  const state1HomeFurnishing = state1CostInfo.homeFurnishing;
  const state1ElectricityCostPerMonth = state1CostInfo.electricityCostPerMonth;
  const state1HeatingCostPerMonth = state1CostInfo.heatingCostPerMonth;
  const state1CoolingCostPerMonth = state1CostInfo.coolingCostPerMonth;
  const state1WaterCostPerMonth = state1CostInfo.waterCostPerMonth;
  const state1TotalCost =
    (state1HomeFurnishing || 0) +
    (state1ElectricityCostPerMonth || 0) +
    (state1HeatingCostPerMonth || 0) +
    (state1CoolingCostPerMonth || 0) +
    (state1WaterCostPerMonth || 0);

  const state2 = state2CostInfo.state;
  const state2HomeFurnishing = state2CostInfo.homeFurnishing;
  const state2ElectricityCostPerMonth = state2CostInfo.electricityCostPerMonth;
  const state2HeatingCostPerMonth = state2CostInfo.heatingCostPerMonth;
  const state2CoolingCostPerMonth = state2CostInfo.coolingCostPerMonth;
  const state2WaterCostPerMonth = state2CostInfo.waterCostPerMonth;
  const state2TotalCost =
    (state2HomeFurnishing || 0) +
    (state2ElectricityCostPerMonth || 0) +
    (state2HeatingCostPerMonth || 0) +
    (state2CoolingCostPerMonth || 0) +
    (state2WaterCostPerMonth || 0);

  const furnishingCostTimes =
    state1HomeFurnishing > state2HomeFurnishing
      ? (state1HomeFurnishing / state2HomeFurnishing).toFixed(2)
      : (state2HomeFurnishing / state1HomeFurnishing).toFixed(2);
  const moreOrLessFurnishing =
    state1HomeFurnishing > state2HomeFurnishing ? 'more' : 'less';

  const percentageDifference = (
    (Math.abs(state1TotalCost - state2TotalCost) / state2TotalCost) *
    100
  ).toFixed(2);
  const moreOrLessUtilities =
    state1TotalCost > state2TotalCost ? 'more' : 'less';

  return (
    <>
      <AdsHeaderBanner />

      <div className="geographical-map">
        <h2 className="pages-h2">Basic Utilities Cost Comparison</h2>
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
                      src={`/images/${state1URLCase}-map-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Pictorial representation of map of ${state1URLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {state1}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${state1URLCase}-flag-small.png`}
                      layout="fill"
                      objectFit="contain"
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
                      layout="fill"
                      objectFit="contain"
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
                      layout="fill"
                      objectFit="contain"
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
                <div className="all-indicators">Basic Home Furnishing</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/home-furnishing-image.png"
                    fill
                    alt="Image Describing Home Furnishing Cost"
                  />
                </div>
              </td>

              <td className="home-furnishing-answer-first-entity all-indicator-answers">
                {state1HomeFurnishing
                  ? `${formatNumberWithCommas(state1HomeFurnishing)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="home-furnishing-answer-second-entity all-indicator-answers">
                {state2HomeFurnishing
                  ? `${formatNumberWithCommas(state2HomeFurnishing)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Electricity Cost Per Month</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/electricity-cost-per-month-image.png"
                    fill
                    alt="Image Describing Electricity Cost per month"
                  />
                </div>
              </td>

              <td className="electricity-cost-per-month-answer-first-entity all-indicator-answers">
                {state1ElectricityCostPerMonth
                  ? `${formatNumberWithCommas(
                    state1ElectricityCostPerMonth
                  )} USD`
                  : 'Yet to Update'}
              </td>
              <td className="electricity-cost-per-month-answer-second-entity all-indicator-answers">
                {state2ElectricityCostPerMonth
                  ? `${formatNumberWithCommas(
                    state2ElectricityCostPerMonth
                  )} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Heating Cost Per Month</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/heating-cost-per-month-image.png"
                    fill
                    alt="Image Describing Heating Cost per month"
                  />
                </div>
              </td>

              <td className="heating-cost-per-month-answer-first-entity all-indicator-answers">
                {state1HeatingCostPerMonth
                  ? `${formatNumberWithCommas(state1HeatingCostPerMonth)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="heating-cost-per-month-answer-second-entity all-indicator-answers">
                {state2HeatingCostPerMonth
                  ? `${formatNumberWithCommas(state2HeatingCostPerMonth)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Cooling Cost Per Month</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/cooling-cost-per-month-image.png"
                    fill
                    alt="Image Describing Cooling Cost per month"
                  />
                </div>
              </td>

              <td className="cooling-cost-per-month-answer-first-entity all-indicator-answers">
                {state1CoolingCostPerMonth
                  ? `${formatNumberWithCommas(state1CoolingCostPerMonth)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="cooling-cost-per-month-answer-second-entity all-indicator-answers">
                {state2CoolingCostPerMonth
                  ? `${formatNumberWithCommas(state2CoolingCostPerMonth)} USD`
                  : 'Yet to Update'}
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
                    alt="Image Describing water cost per month"
                  />
                </div>
              </td>

              <td className="water-cost-per-month-answer-first-entity all-indicator-answers">
                {state1WaterCostPerMonth
                  ? `${formatNumberWithCommas(state1WaterCostPerMonth)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="water-cost-per-month-answer-second-entity all-indicator-answers">
                {state2WaterCostPerMonth
                  ? `${formatNumberWithCommas(state2WaterCostPerMonth)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="paragraph-for-pages-below-table">
        <div className="para-for-pages-single-div">
          <h3>
            Does the utility cost more in
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
            If you lived in
            <span className="first-entity-name-pages-paragraph"> {state1}</span>
            , instead of
            <span className="second-entity-name-pages-paragraph">
              {' '}
              {state2}
            </span>
            , you would have to pay
            <strong>
              <span className="utility-bills-calculation">
                {' '}
                {percentageDifference}%
              </span>{' '}
              <span className="utility-more-or-less-calculation">
                {' '}
                {moreOrLessUtilities}{' '}
              </span>
            </strong>
            for Utilities.
          </p>

          <p>
            The basic home furnishing in
            <span className="first-entity-name-pages-paragraph">
              {' '}
              {state1}{' '}
            </span>
            <strong>
              costs{' '}
              <span className="home-furnishing-answer-first-entity">
                {' '}
                {furnishingCostTimes}{' '}
              </span>{' '}
              times
            </strong>
            <span className="less-or-more-expensive-calculation">
              {' '}
              {moreOrLessFurnishing}{' '}
            </span>
            compared to
            <span className="second-entity-name-pages-paragraph">
              {' '}
              {state2}
            </span>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default BasicUtilities;
