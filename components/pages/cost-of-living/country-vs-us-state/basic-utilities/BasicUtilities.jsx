import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { dollarizedCountries } from '@/lib/array-list/dollarizedCountries';
import { formatNumberWithCommas } from '@/lib/format/format';
import Image from 'next/image';

function BasicUtilities({
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
  const slug1HomeFurnishing = slug1CostInfo.homeFurnishing;
  const slug1ElectricityCostPerMonth = slug1CostInfo.electricityCostPerMonth;
  const slug1HeatingCostPerMonth = slug1CostInfo.heatingCostPerMonth;
  const slug1CoolingCostPerMonth = slug1CostInfo.coolingCostPerMonth;
  const slug1WaterCostPerMonth = slug1CostInfo.waterCostPerMonth;
  const slug1TotalCost =
    ((slug1HomeFurnishing || 0) +
      (slug1ElectricityCostPerMonth || 0) +
      (slug1HeatingCostPerMonth || 0) +
      (slug1CoolingCostPerMonth || 0) +
      (slug1WaterCostPerMonth || 0)) *
    slug1ExchangeRate;

  const slug2HomeFurnishing = slug2CostInfo.homeFurnishing;
  const slug2ElectricityCostPerMonth = slug2CostInfo.electricityCostPerMonth;
  const slug2HeatingCostPerMonth = slug2CostInfo.heatingCostPerMonth;
  const slug2CoolingCostPerMonth = slug2CostInfo.coolingCostPerMonth;
  const slug2WaterCostPerMonth = slug2CostInfo.waterCostPerMonth;
  const slug2TotalCost =
    ((slug2HomeFurnishing || 0) +
      (slug2ElectricityCostPerMonth || 0) +
      (slug2HeatingCostPerMonth || 0) +
      (slug2CoolingCostPerMonth || 0) +
      (slug2WaterCostPerMonth || 0)) *
    slug2ExchangeRate;

  const slug1HomeFurnishingInUSD = slug1HomeFurnishing * slug1ExchangeRate;
  const slug2HomeFurnishingInUSD = slug2HomeFurnishing * slug2ExchangeRate;
  const furnishingCostTimes =
    slug1HomeFurnishingInUSD > slug2HomeFurnishingInUSD
      ? (slug1HomeFurnishingInUSD / slug2HomeFurnishingInUSD).toFixed(2)
      : (slug2HomeFurnishingInUSD / slug1HomeFurnishingInUSD).toFixed(2);
  const moreOrLessFurnishing =
    slug1HomeFurnishingInUSD > slug2HomeFurnishingInUSD ? 'more' : 'less';

  const percentageDifference = (
    (Math.abs(slug1TotalCost - slug2TotalCost) / slug2TotalCost) *
    100
  ).toFixed(2);
  const moreOrLessUtilities = slug1TotalCost > slug2TotalCost ? 'more' : 'less';
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
                {slug1HomeFurnishing ? (
                  value1 === 'state' || dollarizedCountries.includes(slug1) ? (
                    `${formatNumberWithCommas(slug1HomeFurnishing)} USD`
                  ) : (
                    <>
                      {`${formatNumberWithCommas(
                        slug1HomeFurnishing
                      )} ${slug1Currency}`}{' '}
                      <br />
                      {`(${formatNumberWithCommas(
                        slug1HomeFurnishing * slug1ExchangeRate
                      )} USD)`}
                    </>
                  )
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="home-furnishing-answer-second-entity all-indicator-answers">
                {slug2HomeFurnishing ? (
                  value2 === 'state' || dollarizedCountries.includes(slug2) ? (
                    `${formatNumberWithCommas(slug2HomeFurnishing)} USD`
                  ) : (
                    <>
                      {`${formatNumberWithCommas(
                        slug2HomeFurnishing
                      )} ${slug2Currency}`}{' '}
                      <br />
                      {`(${formatNumberWithCommas(
                        slug2HomeFurnishing * slug2ExchangeRate
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
                {slug1ElectricityCostPerMonth ? (
                  value1 === 'state' || dollarizedCountries.includes(slug1) ? (
                    `${formatNumberWithCommas(
                      slug1ElectricityCostPerMonth
                    )} USD`
                  ) : (
                    <>
                      {`${formatNumberWithCommas(
                        slug1ElectricityCostPerMonth
                      )} ${slug1Currency}`}{' '}
                      <br />
                      {`(${formatNumberWithCommas(
                        slug1ElectricityCostPerMonth * slug1ExchangeRate
                      )} USD)`}
                    </>
                  )
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="electricity-cost-per-month-answer-second-entity all-indicator-answers">
                {slug2ElectricityCostPerMonth ? (
                  value2 === 'state' || dollarizedCountries.includes(slug2) ? (
                    `${formatNumberWithCommas(
                      slug2ElectricityCostPerMonth
                    )} USD`
                  ) : (
                    <>
                      {`${formatNumberWithCommas(
                        slug2ElectricityCostPerMonth
                      )} ${slug2Currency}`}{' '}
                      <br />
                      {`(${formatNumberWithCommas(
                        slug2ElectricityCostPerMonth * slug2ExchangeRate
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
                {slug1HeatingCostPerMonth ? (
                  value1 === 'state' || dollarizedCountries.includes(slug1) ? (
                    `${formatNumberWithCommas(slug1HeatingCostPerMonth)} USD`
                  ) : (
                    <>
                      {`${formatNumberWithCommas(
                        slug1HeatingCostPerMonth
                      )} ${slug1Currency}`}{' '}
                      <br />
                      {`(${formatNumberWithCommas(
                        slug1HeatingCostPerMonth * slug1ExchangeRate
                      )} USD)`}
                    </>
                  )
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="heating-cost-per-month-answer-second-entity all-indicator-answers">
                {slug2HeatingCostPerMonth ? (
                  value2 === 'state' || dollarizedCountries.includes(slug2) ? (
                    `${formatNumberWithCommas(slug2HeatingCostPerMonth)} USD`
                  ) : (
                    <>
                      {`${formatNumberWithCommas(
                        slug2HeatingCostPerMonth
                      )} ${slug2Currency}`}{' '}
                      <br />
                      {`(${formatNumberWithCommas(
                        slug2HeatingCostPerMonth * slug2ExchangeRate
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
                {slug1CoolingCostPerMonth ? (
                  value1 === 'state' || dollarizedCountries.includes(slug1) ? (
                    `${formatNumberWithCommas(slug1CoolingCostPerMonth)} USD`
                  ) : (
                    <>
                      {`${formatNumberWithCommas(
                        slug1CoolingCostPerMonth
                      )} ${slug1Currency}`}{' '}
                      <br />
                      {`(${formatNumberWithCommas(
                        slug1CoolingCostPerMonth * slug1ExchangeRate
                      )} USD)`}
                    </>
                  )
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="cooling-cost-per-month-answer-second-entity all-indicator-answers">
                {slug2CoolingCostPerMonth ? (
                  value2 === 'state' || dollarizedCountries.includes(slug2) ? (
                    `${formatNumberWithCommas(slug2CoolingCostPerMonth)} USD`
                  ) : (
                    <>
                      {`${formatNumberWithCommas(
                        slug2CoolingCostPerMonth
                      )} ${slug2Currency}`}{' '}
                      <br />
                      {`(${formatNumberWithCommas(
                        slug2CoolingCostPerMonth * slug2ExchangeRate
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
                {slug1WaterCostPerMonth ? (
                  value1 === 'state' || dollarizedCountries.includes(slug1) ? (
                    `${formatNumberWithCommas(slug1WaterCostPerMonth)} USD`
                  ) : (
                    <>
                      {`${formatNumberWithCommas(
                        slug1WaterCostPerMonth
                      )} ${slug1Currency}`}{' '}
                      <br />
                      {`(${formatNumberWithCommas(
                        slug1WaterCostPerMonth * slug1ExchangeRate
                      )} USD)`}
                    </>
                  )
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="water-cost-per-month-answer-second-entity all-indicator-answers">
                {slug2WaterCostPerMonth ? (
                  value2 === 'state' || dollarizedCountries.includes(slug2) ? (
                    `${formatNumberWithCommas(slug2WaterCostPerMonth)} USD`
                  ) : (
                    <>
                      {`${formatNumberWithCommas(
                        slug2WaterCostPerMonth
                      )} ${slug2Currency}`}{' '}
                      <br />
                      {`(${formatNumberWithCommas(
                        slug2WaterCostPerMonth * slug2ExchangeRate
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
            Does the utility cost more in
            <span className="first-entity-name-pages-paragraph"> {slug1} </span>
            than in
            <span className="second-entity-name-pages-paragraph"> {slug2}</span>
            ?
          </h3>

          <p>
            If you lived in
            <span className="first-entity-name-pages-paragraph"> {slug1}</span>,
            instead of
            <span className="second-entity-name-pages-paragraph"> {slug2}</span>
            , you would have to pay
            <strong>
              <span className="utility-bills-calculation">
                {' '}
                {percentageDifference}%{' '}
              </span>
              <span className="utility-more-or-less-calculation">
                {' '}
                {moreOrLessUtilities}{' '}
              </span>
            </strong>
            for Utilities.
          </p>

          <p>
            The basic home furnishing in
            <span className="first-entity-name-pages-paragraph"> {slug1} </span>
            <strong>
              costs
              <span className="home-furnishing-answer-first-entity">
                {' '}
                {furnishingCostTimes}{' '}
              </span>
              times
            </strong>
            <span className="less-or-more-expensive-calculation">
              {' '}
              {moreOrLessFurnishing}{' '}
            </span>
            compared to
            <span className="second-entity-name-pages-paragraph"> {slug2}</span>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default BasicUtilities;
