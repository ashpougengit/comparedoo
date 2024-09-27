import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { dollarizedCountries } from "@/lib/array-list/dollarizedCountries"
import { formatNumberWithCommas, formatUSDWithCommas } from "@/lib/format/format"
import Image from "next/image"

function WagesAndTaxes({ costInfo, currency, propertyAndIncomeTaxInfo, unitValueInUSD, countryLowerCase }) {
    const country = costInfo.country
    const averageGrossSalary = costInfo.averageGrossSalary
    const averageNetSalary = costInfo.averageNetSalary
    const minimumWage = costInfo.minimumWage
    const averageBonus = costInfo.averageBonus
    const incomeTaxRates = propertyAndIncomeTaxInfo.incomeTaxRates
    const socialSecurityContributions = costInfo.socialSecurityContributions
    const pensionContributions = costInfo.pensionContributions
    const costOfLivingIndex = costInfo.costOfLivingIndex
    const medianHouseholdIncome = costInfo.medianHouseholdIncome

    return (
      <>
        <AdsHeaderBanner />

        <div className="geographical-map">
          <h2 className="pages-h2">Wages and Taxes Cost</h2>
        </div>

        <div className="basic-information-comparison-div1">
          <table className="indicators-single-country-divs">
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
                        src={`/images/${countryLowerCase}-map-small.png`}
                        layout="fill"
                        objectFit="contain"
                        alt={`Pictorial representation of map of ${countryLowerCase}`}
                      />
                    </div>

                    <div className="first-entity-name-pages-comparison">
                      {country}
                    </div>

                    <div className="first-entity-flag-pages-comparison">
                      <Image
                        src={`/images/${countryLowerCase}-flag-small.png`}
                        layout="fill"
                        objectFit="contain"
                        alt={`Image illustrating the flag of ${countryLowerCase}`}
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
                  {`${formatNumberWithCommas(averageGrossSalary)} ${
                    averageGrossSalary ? currency : ''
                  }`}
                  <br />{' '}
                  {dollarizedCountries.includes(country) ? (
                    ''
                  ) : (
                    <span className="average-gross-monthly-salary-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(
                      averageGrossSalary * unitValueInUSD
                    )}`}</span>
                  )}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    Average Net Monthly Salary
                  </div>
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
                  {`${formatNumberWithCommas(averageNetSalary)} ${
                    averageNetSalary ? currency : ''
                  }`}
                  <br />{' '}
                  {dollarizedCountries.includes(country) ? (
                    ''
                  ) : (
                    <span className="average-net-monthly-salary-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(
                      averageNetSalary * unitValueInUSD
                    )}`}</span>
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
                  {`${formatNumberWithCommas(minimumWage)} ${
                    minimumWage ? currency : ''
                  }`}
                  <br />{' '}
                  {dollarizedCountries.includes(country) ? (
                    ''
                  ) : (
                    <span className="minimum-wage-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(
                      minimumWage * unitValueInUSD
                    )}`}</span>
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
                  {`${formatNumberWithCommas(averageBonus)} ${
                    averageBonus ? currency : ''
                  }`}
                  <br />{' '}
                  {dollarizedCountries.includes(country) ? (
                    ''
                  ) : (
                    <span className="average-bonus-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(
                      averageBonus * unitValueInUSD
                    )}`}</span>
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
                  {incomeTaxRates ? `${incomeTaxRates}%` : 'Yet to Update'}
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
                  {socialSecurityContributions
                    ? `${socialSecurityContributions}%`
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
                  {pensionContributions
                    ? `${pensionContributions}%`
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
                  {costOfLivingIndex ?? 'Yet to Update'}
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
                  {`${formatNumberWithCommas(medianHouseholdIncome)} ${
                    medianHouseholdIncome ? currency : ''
                  }`}
                  <br />{' '}
                  {dollarizedCountries.includes(country) ? (
                    ''
                  ) : (
                    <span className="median-household-income-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(
                      medianHouseholdIncome * unitValueInUSD
                    )}`}</span>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
}

export default WagesAndTaxes