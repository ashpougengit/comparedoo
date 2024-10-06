import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { allCountries } from '@/lib/array-list/allCountriesList';
import { removeZerosAfterDecimal } from '@/lib/format/format';
import { formatCost, isDollarized } from '@/lib/format/formatCost';
import Image from 'next/image';

function WagesAndTaxes({
  slug1,
  slug2,
  value1,
  value2,
  slug1CostInfo,
  slug2CostInfo,
  slug1Currency,
  slug2Currency,
  entity1PropertyAndIncomeTaxInfo,
  entity2PropertyAndIncomeTaxInfo,
  slug1ExchangeRate,
  slug2ExchangeRate,
  slug1URLCase,
  slug2URLCase,
}) {
  const slug1AverageGrossSalary = slug1CostInfo.averageGrossSalary;
  const slug1AverageNetSalary = slug1CostInfo.averageNetSalary;
  const slug1MinimumWage = allCountries.includes(slug1)
    ? slug1CostInfo.minimumWage / 30
    : slug1CostInfo.minimumWage;
  const slug1AverageBonus = slug1CostInfo.averageBonus;
  const slug1IncomeTaxRates = entity1PropertyAndIncomeTaxInfo.incomeTaxRates;
  const slug1SocialSecurityContributions =
    slug1CostInfo.socialSecurityContributions;
  const slug1PensionContributions = slug1CostInfo.pensionContributions;
  const slug1MedianHouseholdIncome = slug1CostInfo.medianHouseholdIncome;
  const slug1TotalCost =
    ((slug1AverageGrossSalary || 0) +
      (slug1AverageNetSalary || 0) +
      (slug1MinimumWage || 0) +
      (slug1AverageBonus || 0) +
      (slug1MedianHouseholdIncome || 0)) *
    slug1ExchangeRate;

  const slug2AverageGrossSalary = slug2CostInfo.averageGrossSalary;
  const slug2AverageNetSalary = slug2CostInfo.averageNetSalary;
  const slug2MinimumWage = allCountries.includes(slug2)
    ? slug2CostInfo.minimumWage / 30
    : slug2CostInfo.minimumWage;
  const slug2AverageBonus = slug2CostInfo.averageBonus;
  const slug2IncomeTaxRates = entity2PropertyAndIncomeTaxInfo.incomeTaxRates;
  const slug2SocialSecurityContributions =
    slug2CostInfo.socialSecurityContributions;
  const slug2PensionContributions = slug2CostInfo.pensionContributions;
  const slug2CostOfLivingIndex = slug2CostInfo.costOfLivingIndex;
  const slug2MedianHouseholdIncome = slug2CostInfo.medianHouseholdIncome;
  const slug2TotalCost =
    ((slug2AverageGrossSalary || 0) +
      (slug2AverageNetSalary || 0) +
      (slug2MinimumWage || 0) +
      (slug2AverageBonus || +slug2MedianHouseholdIncome || 0)) *
    slug2ExchangeRate;

  const costTimes =
    slug1TotalCost > slug2TotalCost
      ? (slug1TotalCost / slug2TotalCost).toFixed(2)
      : (slug2TotalCost / slug1TotalCost).toFixed(2);
  const moreOrLess = slug1TotalCost > slug2TotalCost ? 'more' : 'less';

  const isDollarizedSlug1 = isDollarized(value1, slug1);
  const isDollarizedSlug2 = isDollarized(value2, slug2);

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
                      src={`/images/${slug1URLCase}-map-small.png`}
                      fill
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
                <div className="all-indicators">
                  Average Gross Monthly Salary
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/average-gross-monthly-salary-image.png"
                    fill
                    alt="Image Describing Average Gross Monthly Salary"
                  />
                </div>
              </td>

              <td className="average-gross-monthly-salary-first-entity all-indicator-answers">
                {slug1AverageGrossSalary
                  ? formatCost(
                    slug1AverageGrossSalary,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="average-gross-monthly-salary-second-entity all-indicator-answers">
                {slug2AverageGrossSalary
                  ? formatCost(
                    slug2AverageGrossSalary,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
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
                    alt="Image Describing Average Net Monthly Salary"
                  />
                </div>
              </td>

              <td className="average-net-monthly-salary-first-entity all-indicator-answers">
                {slug1AverageNetSalary
                  ? formatCost(
                    slug1AverageNetSalary,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="average-net-monthly-salary-second-entity all-indicator-answers">
                {slug2AverageNetSalary
                  ? formatCost(
                    slug2AverageNetSalary,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
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
                    alt="Image Describing Minimum Wages"
                  />
                </div>
              </td>

              <td className="minimum-wage-first-entity all-indicator-answers">
                {slug1MinimumWage
                  ? `${removeZerosAfterDecimal(
                    slug1MinimumWage
                  )} ${slug1Currency} per hour`
                  : 'Yet to Update'}
              </td>
              <td className="minimum-wage-second-entity all-indicator-answers">
                {slug2MinimumWage
                  ? `${removeZerosAfterDecimal(
                    slug2MinimumWage
                  )} ${slug2Currency} per hour`
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
                    alt="Image Describing Average Bonus"
                  />
                </div>
              </td>

              <td className="average-bonus-first-entity all-indicator-answers">
                {slug1AverageBonus
                  ? formatCost(
                    slug1AverageBonus,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="average-bonus-second-entity all-indicator-answers">
                {slug2AverageBonus
                  ? formatCost(
                    slug2AverageBonus,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
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
                    alt="Image Describing Income Tax Rate"
                  />
                </div>
              </td>

              <td className="income-tax-rate-first-entity all-indicator-answers">
                {slug1IncomeTaxRates && slug1IncomeTaxRates !== 'Yet to Update'
                  ? `${slug1IncomeTaxRates} %`
                  : 'Yet to Update'}
              </td>
              <td className="income-tax-rate-second-entity all-indicator-answers">
                {slug2IncomeTaxRates && slug2IncomeTaxRates !== 'Yet to Update'
                  ? `${slug2IncomeTaxRates} %`
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
                    fill
                    alt="Image Describing Social Security Contributions"
                  />
                </div>
              </td>

              <td className="social-security-contributions-first-entity all-indicator-answers">
                {slug1SocialSecurityContributions &&
                  slug1SocialSecurityContributions !== 'Yet to Update'
                  ? `${slug1SocialSecurityContributions} %`
                  : 'Yet to Update'}
              </td>
              <td className="social-security-contributions-second-entity all-indicator-answers">
                {slug2SocialSecurityContributions &&
                  slug2SocialSecurityContributions !== 'Yet to Update'
                  ? `${slug2SocialSecurityContributions} %`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Pension Contributions</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/pension-contributions-image.png"
                    fill
                    alt="Image Describing Pension Contributions"
                  />
                </div>
              </td>

              <td className="pension-contributions-first-entity all-indicator-answers">
                {slug1PensionContributions &&
                  slug1PensionContributions !== 'Yet to Update'
                  ? `${slug1PensionContributions} %`
                  : 'Yet to Update'}
              </td>
              <td className="pension-contributions-second-entity all-indicator-answers">
                {slug2PensionContributions &&
                  slug2PensionContributions !== 'Yet to Update'
                  ? `${slug2PensionContributions} %`
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
            <span className="first-entity-name-pages-paragraph">{' '} {slug1}{' '} </span>
            than in
            <span className="second-entity-name-pages-paragraph">{' '} {slug2}</span>
            ?
          </h3>
          <p>
            If you lived in
            <span className="first-entity-name-pages-paragraph"> {' '}{slug1}</span>,
            you would earn
            <strong>
              <span className="salary-cost-calculation"> {' '}{costTimes} {' '}</span>
              times{' '}
            </strong>
            <span className="salary-cost-more-or-less-calculation">
              {' '}
              {moreOrLess}{' '}
            </span>
            salary as compared to
            <span className="second-entity-name-pages-paragraph"> {' '}{slug2}</span>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default WagesAndTaxes;
