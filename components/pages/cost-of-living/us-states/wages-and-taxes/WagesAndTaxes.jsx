import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { formatNumberWithCommas } from '@/lib/format/format';
import Image from 'next/image';

function WagesAndTaxes({
  state1CostInfo,
  state2CostInfo,
  entity1PropertyAndIncomeTaxInfo,
  entity2PropertyAndIncomeTaxInfo,
  state1URLCase,
  state2URLCase,
}) {
  const state1 = state1CostInfo.state;
  const state1AverageGrossSalary = state1CostInfo.averageGrossSalary;
  const state1AverageNetSalary = state1CostInfo.averageNetSalary;
  const state1MinimumWage = state1CostInfo.minimumWage;
  const state1AverageBonus = state1CostInfo.averageBonus;
  const state1IncomeTaxRates = entity1PropertyAndIncomeTaxInfo.incomeTaxRates;
  const state1SocialSecurityContributions =
    state1CostInfo.socialSecurityContributions;
  const state1PensionContributions = state1CostInfo.pensionContributions;
  const state1CostOfLivingIndex = state1CostInfo.costOfLivingIndex;
  const state1MedianHouseholdIncome = state1CostInfo.medianHouseholdIncome;
  const state1TotalCost =
    (state1AverageGrossSalary || 0) +
    (state1AverageNetSalary || 0) +
    (state1MinimumWage || 0) +
    (state1AverageBonus || 0) +
    (state1MedianHouseholdIncome || 0);

  const state2 = state2CostInfo.state;
  const state2AverageGrossSalary = state2CostInfo.averageGrossSalary;
  const state2AverageNetSalary = state2CostInfo.averageNetSalary;
  const state2MinimumWage = state2CostInfo.minimumWage;
  const state2AverageBonus = state2CostInfo.averageBonus;
  const state2IncomeTaxRates = entity2PropertyAndIncomeTaxInfo.incomeTaxRates;
  const state2SocialSecurityContributions =
    state2CostInfo.socialSecurityContributions;
  const state2PensionContributions = state2CostInfo.pensionContributions;
  const state2CostOfLivingIndex = state2CostInfo.costOfLivingIndex;
  const state2MedianHouseholdIncome = state2CostInfo.medianHouseholdIncome;
  const state2TotalCost =
    (state2AverageGrossSalary || 0) +
    (state2AverageNetSalary || 0) +
    (state2MinimumWage || 0) +
    (state2AverageBonus || 0) +
    (state2MedianHouseholdIncome || 0);

  const costTimes =
    state1TotalCost > state2TotalCost
      ? (state1TotalCost / state2TotalCost).toFixed(2)
      : (state2TotalCost / state1TotalCost).toFixed(2);
  const moreOrLess = state1TotalCost > state2TotalCost ? 'more' : 'less';

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
                <div className="all-indicators">
                  Average Gross Monthly Salary
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/average-gross-monthly-salary-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Average Gross Monthly Salary"
                  />
                </div>
              </td>

              <td className="average-gross-monthly-salary-first-entity all-indicator-answers">
                {state1AverageGrossSalary
                  ? `${formatNumberWithCommas(state1AverageGrossSalary)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="average-gross-monthly-salary-second-entity all-indicator-answers">
                {state2AverageGrossSalary
                  ? `${formatNumberWithCommas(state2AverageGrossSalary)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Average Net Monthly Salary</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/average-net-monthly-salary-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Average Net Monthly Salary"
                  />
                </div>
              </td>

              <td className="average-net-monthly-salary-first-entity all-indicator-answers">
                {state1AverageNetSalary
                  ? `${formatNumberWithCommas(state1AverageNetSalary)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="average-net-monthly-salary-second-entity all-indicator-answers">
                {state2AverageNetSalary
                  ? `${formatNumberWithCommas(state2AverageNetSalary)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Minimum Wages</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/minimum-wage-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Minimum Wages"
                  />
                </div>
              </td>

              <td className="minimum-wage-first-entity all-indicator-answers">
                {state1MinimumWage
                  ? `${formatNumberWithCommas(state1MinimumWage)} USD per hour`
                  : 'Yet to Update'}
              </td>
              <td className="minimum-wage-second-entity all-indicator-answers">
                {state2MinimumWage
                  ? `${formatNumberWithCommas(state2MinimumWage)} USD per hour`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Average Bonus</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/average-bonus-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Average Bonus"
                  />
                </div>
              </td>

              <td className="average-bonus-first-entity all-indicator-answers">
                {state1AverageBonus
                  ? `${formatNumberWithCommas(state1AverageBonus)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="average-bonus-second-entity all-indicator-answers">
                {state2AverageBonus
                  ? `${formatNumberWithCommas(state2AverageBonus)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Income Tax Rate</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/income-tax-rate-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Income Tax Rate"
                  />
                </div>
              </td>

              <td className="income-tax-rate-first-entity all-indicator-answers">
                {state1IncomeTaxRates && state1IncomeTaxRates !== 'Yet to Update'
                  ? `${state1IncomeTaxRates} %`
                  : 'Yet to update'}
              </td>
              <td className="income-tax-rate-second-entity all-indicator-answers">
                {state2IncomeTaxRates && state2IncomeTaxRates !== 'Yet to Update'
                  ? `${state2IncomeTaxRates} %`
                  : 'Yet to update'}
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
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Social Security Contributions"
                  />
                </div>
              </td>

              <td className="social-security-contributions-first-entity all-indicator-answers">
                {state1SocialSecurityContributions && state1SocialSecurityContributions !== 'Yet to Update'
                  ? `${state1SocialSecurityContributions} %`
                  : 'Yet to update'}
              </td>
              <td className="social-security-contributions-second-entity all-indicator-answers">
                {state2SocialSecurityContributions && state2SocialSecurityContributions !== 'Yet to Update'
                  ? `${state2SocialSecurityContributions} %`
                  : 'Yet to update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Pension Contributions</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/pension-contributions-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Pension Contributions"
                  />
                </div>
              </td>

              <td className="pension-contributions-first-entity all-indicator-answers">
                {state1PensionContributions && state1PensionContributions !== 'Yet to Update'
                  ? `${state1PensionContributions} %`
                  : 'Yet to update'}
              </td>
              <td className="pension-contributions-second-entity all-indicator-answers">
                {state2PensionContributions && state2PensionContributions !== 'Yet to Update'
                  ? `${state2PensionContributions} %`
                  : 'Yet to update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Cost of Living Index</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/cost-of-living-index-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Cost of Living Index"
                  />
                </div>
              </td>

              <td className="cost-of-living-index-first-entity all-indicator-answers">
                {state1CostOfLivingIndex ?? 'Yet to Update'}
              </td>
              <td className="cost-of-living-index-second-entity all-indicator-answers">
                {state2CostOfLivingIndex ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Median Household Income</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/median-household-income-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Median Household Income"
                  />
                </div>
              </td>

              <td className="median-household-income-first-entity all-indicator-answers">
                {state1MedianHouseholdIncome
                  ? `${formatNumberWithCommas(state1MedianHouseholdIncome)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="median-household-income-second-entity all-indicator-answers">
                {state2MedianHouseholdIncome
                  ? `${formatNumberWithCommas(state2MedianHouseholdIncome)} USD`
                  : 'Yet to Update'}
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
            <span className="first-entity-name-pages-paragraph"> {' '}{state1}</span>
            , you would earn
            <strong>
              <span className="salary-cost-calculation">{' '} {costTimes} </span>{' '}
              times{' '}
            </strong>{' '}
            <span className="salary-cost-more-or-less-calculation">
              {' '}
              {moreOrLess}{' '}
            </span>
            salary as compared to
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

export default WagesAndTaxes;
