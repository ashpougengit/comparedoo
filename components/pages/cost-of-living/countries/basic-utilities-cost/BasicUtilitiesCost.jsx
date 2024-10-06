import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { dollarizedCountries } from "@/lib/array-list/dollarizedCountries"
import { formatNumberWithCommas, formatUSDWithCommas } from "@/lib/format/format"
import Image from "next/image"

function BasicUtilitiesCost({ country1CostInfo, country2CostInfo, country1Currency, country2Currency, country1UnitValueInUSD, country2UnitValueInUSD, country1URLCase, country2URLCase }) {
  const country1 = country1CostInfo.country
  const country1HomeFurnishing = country1CostInfo.homeFurnishing
  const country1HomeFurnishingInUSD = country1HomeFurnishing * country1UnitValueInUSD
  const country1ElectricityCostPerMonth = country1CostInfo.electricityCostPerMonth
  const country1HeatingCostPerMonth = country1CostInfo.heatingCostPerMonth
  const country1CoolingCostPerMonth = country1CostInfo.coolingCostPerMonth
  const country1WaterCostPerMonth = country1CostInfo.waterCostPerMonth
  const country1TotalBasicUtilitiesCost = ((country1HomeFurnishing || 0) + (country1ElectricityCostPerMonth || 0) + (country1HeatingCostPerMonth || 0) + (country1CoolingCostPerMonth || 0) + (country1WaterCostPerMonth || 0)) * country1UnitValueInUSD

  const country2 = country2CostInfo.country
  const country2HomeFurnishing = country2CostInfo.homeFurnishing
  const country2HomeFurnishingInUSD = country2HomeFurnishing * country2UnitValueInUSD
  const country2ElectricityCostPerMonth = country2CostInfo.electricityCostPerMonth
  const country2HeatingCostPerMonth = country2CostInfo.heatingCostPerMonth
  const country2CoolingCostPerMonth = country2CostInfo.coolingCostPerMonth
  const country2WaterCostPerMonth = country2CostInfo.waterCostPerMonth
  const country2TotalBasicUtilitiesCost = ((country2HomeFurnishing || 0) + (country2ElectricityCostPerMonth || 0) + (country2HeatingCostPerMonth || 0) + (country2CoolingCostPerMonth || 0) + (country2WaterCostPerMonth || 0)) * country2UnitValueInUSD

  const homeFurnishingDifferenceTimes = country1HomeFurnishingInUSD > country2HomeFurnishingInUSD ? (country1HomeFurnishingInUSD / country2HomeFurnishingInUSD).toFixed(2) : (country2HomeFurnishingInUSD / country1HomeFurnishingInUSD).toFixed(2)
  const moreOrLessForHomeFurnishing = country1HomeFurnishingInUSD > country2HomeFurnishingInUSD ? 'more' : 'less'

  const percentageDifference = (((Math.abs(country1TotalBasicUtilitiesCost - country2TotalBasicUtilitiesCost)) / country2TotalBasicUtilitiesCost) * 100).toFixed(2)
  const moreOrLess = country1TotalBasicUtilitiesCost > country2TotalBasicUtilitiesCost ? 'more' : 'less'

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
                      src={`/images/${country1URLCase}-map-small.png`}
                      fill
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
                {`${formatNumberWithCommas(country1HomeFurnishing)} ${country1HomeFurnishing ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="home-furnishing-answer-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1HomeFurnishing * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="home-furnishing-answer-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2HomeFurnishing)} ${country2HomeFurnishing ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="home-furnishing-answer-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2HomeFurnishing * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  Electricity Cost Per Month
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/electricity-cost-per-month-image.png"
                    fill
                    alt="Image Describing Electricity Cost per month"
                  />
                </div>
              </td>

              <td className="electricity-cost-per-month-answer-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(
                  country1ElectricityCostPerMonth
                )} ${country1ElectricityCostPerMonth ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="electricity-cost-per-month-answer-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1ElectricityCostPerMonth * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="electricity-cost-per-month-answer-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(
                  country2ElectricityCostPerMonth
                )} ${country2ElectricityCostPerMonth ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="electricity-cost-per-month-answer-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2ElectricityCostPerMonth * country2UnitValueInUSD
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
                    alt="Image Describing Heating Cost per month"
                  />
                </div>
              </td>

              <td className="heating-cost-per-month-answer-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1HeatingCostPerMonth)} ${country1HeatingCostPerMonth ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="heating-cost-per-month-answer-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1HeatingCostPerMonth * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="heating-cost-per-month-answer-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2HeatingCostPerMonth)} ${country2HeatingCostPerMonth ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="heating-cost-per-month-answer-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2HeatingCostPerMonth * country2UnitValueInUSD
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
                    alt="Image Describing Cooling Cost per month"
                  />
                </div>
              </td>

              <td className="cooling-cost-per-month-answer-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1CoolingCostPerMonth)} ${country1CoolingCostPerMonth ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="cooling-cost-per-month-answer-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1CoolingCostPerMonth * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="cooling-cost-per-month-answer-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2CoolingCostPerMonth)} ${country2CoolingCostPerMonth ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="cooling-cost-per-month-answer-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2CoolingCostPerMonth * country2UnitValueInUSD
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
                    alt="Image Describing water cost per month"
                  />
                </div>
              </td>

              <td className="water-cost-per-month-answer-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1WaterCostPerMonth)} ${country1WaterCostPerMonth ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="water-cost-per-month-answer-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1WaterCostPerMonth * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="water-cost-per-month-answer-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2WaterCostPerMonth)} ${country2WaterCostPerMonth ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="water-cost-per-month-answer-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2WaterCostPerMonth * country2UnitValueInUSD
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
            Does the utility cost more in
            <span className="first-entity-name-pages-paragraph">
              {' '}
              {country1}{' '}
            </span>
            than in
            <span className="second-entity-name-pages-paragraph">
              {' '}
              {country2}
            </span>
            ?
          </h3>

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
              <span className="utility-bills-calculation">
                {' '}
                {percentageDifference}%
              </span>{' '}
              <span className="utility-more-or-less-calculation">
                {' '}
                {moreOrLess}{' '}
              </span>
            </strong>
            for Utilities.
          </p>

          <p>
            The basic home furnishing in
            <span className="first-entity-name-pages-paragraph">
              {' '}
              {country1}{' '}
            </span>
            <strong>
              costs{' '}
              <span className="home-furnishing-answer-first-entity">
                {' '}
                {homeFurnishingDifferenceTimes}{' '}
              </span>
              times
            </strong>
            <span className="less-or-more-expensive-calculation">
              {' '}
              {moreOrLessForHomeFurnishing}{' '}
            </span>
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

export default BasicUtilitiesCost