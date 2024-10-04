import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { dollarizedCountries } from '@/lib/array-list/dollarizedCountries';
import {
  formatNumberWithCommas,
  formatUSDWithCommas,
} from '@/lib/format/format';
import Image from 'next/image';

function WagesAndTaxesCost({
  country1CostInfo,
  country2CostInfo,
  country1Currency,
  country2Currency,
  entity1PropertyAndIncomeTaxInfo,
  entity2PropertyAndIncomeTaxInfo,
  country1UnitValueInUSD,
  country2UnitValueInUSD,
  country1URLCase,
  country2URLCase,
}) {
  const country1 = country1CostInfo.country;
  const country1AverageGrossSalary = country1CostInfo.averageGrossSalary;
  const country1AverageNetSalary = country1CostInfo.averageNetSalary;
  const country1MinimumWage = country1CostInfo.minimumWage / 30;
  const country1AverageBonus = country1CostInfo.averageBonus;
  const country1IncomeTaxRates = entity1PropertyAndIncomeTaxInfo.incomeTaxRates;
  const country1SocialSecurityContributions =
    country1CostInfo.socialSecurityContributions;
  const country1PensionContributions = country1CostInfo.pensionContributions;
  const country1CostOfLivingIndex = country1CostInfo.costOfLivingIndex;
  const country1MedianHouseholdIncome = country1CostInfo.medianHouseholdIncome;
  const country1TotalCost =
    ((country1AverageGrossSalary || 0) +
      (country1AverageNetSalary || 0) +
      (country1MinimumWage || 0) +
      (country1AverageBonus || 0) +
      (country1MedianHouseholdIncome || 0)) *
    country1UnitValueInUSD;

  const country2 = country2CostInfo.country;
  const country2AverageGrossSalary = country2CostInfo.averageGrossSalary;
  const country2AverageNetSalary = country2CostInfo.averageNetSalary;
  const country2MinimumWage = country2CostInfo.minimumWage / 30;
  const country2AverageBonus = country2CostInfo.averageBonus;
  const country2IncomeTaxRates = entity2PropertyAndIncomeTaxInfo.incomeTaxRates;
  const country2SocialSecurityContributions =
    country2CostInfo.socialSecurityContributions;
  const country2PensionContributions = country2CostInfo.pensionContributions;
  const country2CostOfLivingIndex = country2CostInfo.costOfLivingIndex;
  const country2MedianHouseholdIncome = country2CostInfo.medianHouseholdIncome;
  const country2TotalCost =
    ((country2AverageGrossSalary || 0) +
      (country2AverageNetSalary || 0) +
      (country2MinimumWage || 0) +
      (country2AverageBonus || 0) +
      (country2MedianHouseholdIncome || 0)) *
    country2UnitValueInUSD;

  const costTimes =
    country1TotalCost > country2TotalCost
      ? (country1TotalCost / country2TotalCost).toFixed(2)
      : (country2TotalCost / country1TotalCost).toFixed(2);
  const moreOrLess = country1TotalCost > country2TotalCost ? 'more' : 'less';

  return (
    <>
      <AdsHeaderBanner />

      <div className="geographical-map">
        <h2 className="pages-h2">Wages and Taxes Cost Comparison</h2>
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
                <div className="all-indicators">
                  Average Gross Monthly Salary
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/average-gross-monthly-salary-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Average Gross Monthly Salary"
                  />
                </div>
              </td>

              <td className="average-gross-monthly-salary-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1AverageGrossSalary)} ${country1AverageGrossSalary ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="average-gross-monthly-salary-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1AverageGrossSalary * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="average-gross-monthly-salary-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2AverageGrossSalary)} ${country2AverageGrossSalary ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="average-gross-monthly-salary-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2AverageGrossSalary * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Average Net Monthly Salary</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/average-net-monthly-salary-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Average Net Monthly Salary"
                  />
                </div>
              </td>

              <td className="average-net-monthly-salary-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1AverageNetSalary)} ${country1AverageNetSalary ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="average-net-monthly-salary-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1AverageNetSalary * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="average-net-monthly-salary-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2AverageNetSalary)} ${country2AverageNetSalary ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="average-net-monthly-salary-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2AverageNetSalary * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Minimum Wages</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/minimum-wage-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Minimum Wages"
                  />
                </div>
              </td>

              <td className="minimum-wage-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1MinimumWage)} ${country1MinimumWage ? `${country1Currency} per hour` : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="minimum-wage-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1MinimumWage * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="minimum-wage-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2MinimumWage)} ${country2MinimumWage ? `${country2Currency} per hour` : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="minimum-wage-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2MinimumWage * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Average Bonus</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/average-bonus-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Average Bonus"
                  />
                </div>
              </td>

              <td className="average-bonus-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1AverageBonus)} ${country1AverageBonus ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="average-bonus-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1AverageBonus * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="average-bonus-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2AverageBonus)} ${country2AverageBonus ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="average-bonus-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2AverageBonus * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Income Tax Rate</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/income-tax-rate-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Income Tax Rate"
                  />
                </div>
              </td>

              <td className="income-tax-rate-first-entity all-indicator-answers">
                {country1IncomeTaxRates && country1IncomeTaxRates !== 'Yet to Update'
                  ? `${country1IncomeTaxRates} %`
                  : 'Yet to Update'}
              </td>
              <td className="income-tax-rate-second-entity all-indicator-answers">
                {country2IncomeTaxRates && country2IncomeTaxRates !== 'Yet to Update'
                  ? `${country2IncomeTaxRates} %`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  Social Security Contributions
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/social-security-contributions-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Social Security Contributions"
                  />
                </div>
              </td>

              <td className="social-security-contributions-first-entity all-indicator-answers">
                {country1SocialSecurityContributions && country1SocialSecurityContributions !== 'Yet to Update'
                  ? `${country1SocialSecurityContributions} %`
                  : 'Yet to Update'}
              </td>
              <td className="social-security-contributions-second-entity all-indicator-answers">
                {country2SocialSecurityContributions && country2SocialSecurityContributions !== 'Yet to Update'
                  ? `${country2SocialSecurityContributions} %`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Pension Contributions</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/pension-contributions-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Pension Contributions"
                  />
                </div>
              </td>

              <td className="pension-contributions-first-entity all-indicator-answers">
                {country1PensionContributions && country1PensionContributions !== 'Yet to Update'
                  ? `${country1PensionContributions} %`
                  : 'Yet to Update'}
              </td>
              <td className="pension-contributions-second-entity all-indicator-answers">
                {country2PensionContributions && country2PensionContributions !== 'Yet to Update'
                  ? `${country2PensionContributions} %`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Cost of Living Index</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/cost-of-living-index-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Cost of Living Index"
                  />
                </div>
              </td>

              <td className="cost-of-living-index-first-entity all-indicator-answers">
                {country1CostOfLivingIndex ?? 'Yet to Update'}
              </td>
              <td className="cost-of-living-index-second-entity all-indicator-answers">
                {country2CostOfLivingIndex ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Median Household Income</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/median-household-income-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Median Household Income"
                  />
                </div>
              </td>

              <td className="median-household-income-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1MedianHouseholdIncome)} ${country1MedianHouseholdIncome ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="median-household-income-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1MedianHouseholdIncome * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="median-household-income-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2MedianHouseholdIncome)} ${country2MedianHouseholdIncome ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="median-household-income-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2MedianHouseholdIncome * country2UnitValueInUSD
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
            Do people earn more money as salary in
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
            If you lived in
            <span className="first-entity-name-pages-paragraph">
              {' '}
              {country1}
            </span>
            , you would earn
            <strong>
              <span className="salary-cost-calculation"> {costTimes} </span>{' '}
              times{' '}
            </strong>{' '}
            <span className="salary-cost-more-or-less-calculation">
              {' '}
              {moreOrLess}{' '}
            </span>
            salary as compared to
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

export default WagesAndTaxesCost;
