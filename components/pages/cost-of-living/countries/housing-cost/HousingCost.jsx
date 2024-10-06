import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { dollarizedCountries } from '@/lib/array-list/dollarizedCountries';
import {
  formatNumberWithCommas,
  formatUSDWithCommas,
} from '@/lib/format/format';
import Image from 'next/image';

function HousingCost({
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
  const country1OneBHKCityCenter =
    country1CostInfo.rent1bedroomflatInCityCenter;
  const country1TwoBHKCityCenter =
    country1CostInfo.rent2bedroomflatInCityCenter;
  const country1ThreeBHKCityCenter =
    country1CostInfo.rent3bedroomflatInCityCenter;
  const country1OneBHKOutsideCity =
    country1CostInfo.rent1bedroomflatOutsideCityCenter;
  const country1TwoBHKOutsideCity =
    country1CostInfo.rent2bedroomflatOutsideCityCenter;
  const country1ThreeBHKOutsideCity =
    country1CostInfo.rent3bedroomflatOutsideCityCenter;
  const country1MortgageRatesPerMonth = country1CostInfo.mortgageRatesPerMonth;
  const country1RealEstateAgentsCommissionFees =
    country1CostInfo.realEstateAgentsCommissionFees;
  const country1PropertyTaxRates =
    entity1PropertyAndIncomeTaxInfo.propertyTaxRates;
  const country1AverageHousingCost =
    ((country1OneBHKCityCenter || 0) +
      (country1TwoBHKCityCenter || 0) +
      (country1ThreeBHKCityCenter || 0) +
      (country1OneBHKOutsideCity || 0) +
      (country1TwoBHKOutsideCity || 0) +
      (country1ThreeBHKOutsideCity || 0) / 6) *
    country1UnitValueInUSD;

  const country2 = country2CostInfo.country;
  const country2OneBHKCityCenter =
    country2CostInfo.rent1bedroomflatInCityCenter;
  const country2TwoBHKCityCenter =
    country2CostInfo.rent2bedroomflatInCityCenter;
  const country2ThreeBHKCityCenter =
    country2CostInfo.rent3bedroomflatInCityCenter;
  const country2OneBHKOutsideCity =
    country2CostInfo.rent1bedroomflatOutsideCityCenter;
  const country2TwoBHKOutsideCity =
    country2CostInfo.rent2bedroomflatOutsideCityCenter;
  const country2ThreeBHKOutsideCity =
    country2CostInfo.rent3bedroomflatOutsideCityCenter;
  const country2MortgageRatesPerMonth = country2CostInfo.mortgageRatesPerMonth;
  const country2RealEstateAgentsCommissionFees =
    country2CostInfo.realEstateAgentsCommissionFees;
  const country2PropertyTaxRates =
    entity2PropertyAndIncomeTaxInfo.propertyTaxRates;
  const country2AverageHousingCost =
    ((country2OneBHKCityCenter || 0) +
      (country2TwoBHKCityCenter || 0) +
      (country2ThreeBHKCityCenter || 0) +
      (country2OneBHKOutsideCity || 0) +
      (country2TwoBHKOutsideCity || 0) +
      (country2ThreeBHKOutsideCity || 0) / 6) *
    country2UnitValueInUSD;

  const moreOrLess =
    country1AverageHousingCost > country2AverageHousingCost ? 'more' : 'less';
  const housingCostTimes =
    country1AverageHousingCost > country2AverageHousingCost
      ? (country1AverageHousingCost / country2AverageHousingCost).toFixed(2)
      : (country2AverageHousingCost / country1AverageHousingCost).toFixed(2);

  return (
    <>
      <AdsHeaderBanner />
      <div className="geographical-map">
        <h2 className="pages-h2">Housing Cost Comparison</h2>
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
                <div className="all-indicators">
                  1 BHK Apartment in City Center
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/rent-1-bedroom-flat-in-city-center-image.png"
                    fill
                    alt="Image Describing 1 bedroom apartment in City Center"
                  />
                </div>
              </td>

              <td className="rent-1-bedroom-flat-in-city-center-answer-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1OneBHKCityCenter)} ${country1OneBHKCityCenter ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="rent-1-bedroom-flat-in-city-center-answer-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1OneBHKCityCenter * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="rent-1-bedroom-flat-in-city-center-answer-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2OneBHKCityCenter)} ${country2OneBHKCityCenter ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="rent-1-bedroom-flat-in-city-center-answer-second-entity-amount-in-usd amount-in-dollar">
                    {dollarizedCountries.includes(country2)
                      ? ''
                      : `(${formatUSDWithCommas(
                        country2OneBHKCityCenter * country2UnitValueInUSD
                      )})`}
                  </span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  2 BHK Apartment in City Center
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/rent-2-bedroom-flat-in-city-center-image.png"
                    fill
                    alt="Image Describing 2 bedroom apartment in City Center"
                  />
                </div>
              </td>

              <td className="rent-2-bedroom-flat-in-city-center-answer-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1TwoBHKCityCenter)} ${country1TwoBHKCityCenter ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="rent-2-bedroom-flat-in-city-center-answer-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1TwoBHKCityCenter * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="rent-2-bedroom-flat-in-city-center-answer-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2TwoBHKCityCenter)} ${country2TwoBHKCityCenter ? country2Currency : ''
                  }`}
                <br />
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="rent-2-bedroom-flat-in-city-center-answer-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2TwoBHKCityCenter * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  3 BHK Apartment in City Center
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/rent-3-bedroom-flat-in-city-center-image.png"
                    fill
                    alt="Image Describing 3 bedroom apartment in City Center"
                  />
                </div>
              </td>

              <td className="rent-3-bedroom-flat-in-city-center-answer-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1ThreeBHKCityCenter)} ${country1ThreeBHKCityCenter ? country1Currency : ''
                  }`}
                <br />
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="rent-3-bedroom-flat-in-city-center-answer-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1ThreeBHKCityCenter * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="rent-3-bedroom-flat-in-city-center-answer-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2ThreeBHKCityCenter)} ${country2ThreeBHKCityCenter ? country2Currency : ''
                  }`}
                <br />
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="rent-3-bedroom-flat-in-city-center-answer-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2ThreeBHKCityCenter * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  1 BHK Apartment outside City Center
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/rent-1-bedroom-flat-outside-city-center-image.png"
                    fill
                    alt="Image Describing 1 bedroom apartment outside City Center"
                  />
                </div>
              </td>

              <td className="rent-1-bedroom-flat-outside-city-center-answer-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1OneBHKOutsideCity)} ${country1OneBHKOutsideCity ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="rent-1-bedroom-flat-outside-city-center-answer-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1OneBHKOutsideCity * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="rent-1-bedroom-flat-outside-city-center-answer-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2OneBHKOutsideCity)} ${country2OneBHKOutsideCity ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="rent-1-bedroom-flat-outside-city-center-answer-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2OneBHKOutsideCity * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  2 BHK Apartment outside City Center
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/rent-2-bedroom-flat-outside-city-center-image.png"
                    fill
                    alt="Image Describing 2 bedroom apartment outside City Center"
                  />
                </div>
              </td>

              <td className="rent-2-bedroom-flat-outside-city-center-answer-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1TwoBHKOutsideCity)} ${country1TwoBHKOutsideCity ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="rent-2-bedroom-flat-outside-city-center-answer-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1TwoBHKOutsideCity * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="rent-2-bedroom-flat-outside-city-center-answer-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2TwoBHKOutsideCity)} ${country2TwoBHKOutsideCity ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="rent-2-bedroom-flat-outside-city-center-answer-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2TwoBHKOutsideCity * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  3 BHK Apartment outside City Center
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/rent-3-bedroom-flat-outside-city-center-image.png"
                    fill
                    alt="Image Describing 3 bedroom apartment outside City Center"
                  />
                </div>
              </td>

              <td className="rent-3-bedroom-flat-outside-city-center-answer-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1ThreeBHKOutsideCity)} ${country1ThreeBHKOutsideCity ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="rent-3-bedroom-flat-outside-city-center-answer-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1ThreeBHKOutsideCity * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="rent-3-bedroom-flat-outside-city-center-answer-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2ThreeBHKOutsideCity)} ${country2ThreeBHKOutsideCity ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="rent-3-bedroom-flat-outside-city-center-answer-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2ThreeBHKOutsideCity * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Mortgage Rates Per Month</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/mortgage-rates-per-month-image.png"
                    fill
                    alt="Image Describing Mortgage Rates Per Month"
                  />
                </div>
              </td>

              <td className="mortgage-rates-per-month-index-answer-first-entity all-indicator-answers">
                {country1MortgageRatesPerMonth && country1MortgageRatesPerMonth !== 'Yet to Update' ? `${country1MortgageRatesPerMonth} %` : 'Yet to Update'}
              </td>
              <td className="mortgage-rates-per-month-index-answer-second-entity all-indicator-answers">
                {country2MortgageRatesPerMonth && country2MortgageRatesPerMonth !== 'Yet to Update' ? `${country2MortgageRatesPerMonth} %` : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Realtor Commission</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/real-estate-agents-comission-fees-image.png"
                    fill
                    alt="Image Describing Real Estate Agents Comission Fees"
                  />
                </div>
              </td>

              <td className="real-estate-agents-commission-fees-answer-first-entity all-indicator-answers">
                {country1RealEstateAgentsCommissionFees && country1RealEstateAgentsCommissionFees !== 'Yet to Update' ? `${country1RealEstateAgentsCommissionFees} %` : 'Yet to Update'}
              </td>
              <td className="real-estate-agents-commission-fees-answer-second-entity all-indicator-answers">
                {country2RealEstateAgentsCommissionFees && country2RealEstateAgentsCommissionFees !== 'Yet to Update' ? `${country2RealEstateAgentsCommissionFees} %` : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Property Taxes</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/property-taxes-image.png"
                    fill
                    alt="Image Describing Property Taxes in any given country"
                  />
                </div>
              </td>

              <td className="property-taxes-answer-first-entity all-indicator-answers">
                {country1PropertyTaxRates && country1PropertyTaxRates !== 'Yet to Update' ? `${country1PropertyTaxRates} %` : 'Yet to Update'}
              </td>
              <td className="property-taxes-answer-second-entity all-indicator-answers">
                {country2PropertyTaxRates && country2PropertyTaxRates !== 'Yet to Update' ? `${country2PropertyTaxRates} %` : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="paragraph-for-pages-below-table">
        <div className="para-for-pages-single-div">
          <h3>
            Is housing more expensive in{' '}
            <span className="first-entity-name-pages-paragraph">
              {country1}{' '}
            </span>{' '}
            than in{' '}
            <span className="second-entity-name-pages-paragraph">
              {country2}
            </span>
            ?
          </h3>

          <p>
            The average housing cost in
            <span className="first-entity-name-pages-paragraph">
              {' '}
              {country1}{' '}
            </span>
            <strong>
              is{' '}
              <span className="housing-cost-calculation">
                {housingCostTimes}
              </span>{' '}
              times
            </strong>
            <span className="housing-cost-less-or-more-expensive-calculation">
              {' '}
              {moreOrLess}{' '}
            </span>
            expensive than
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

export default HousingCost;
