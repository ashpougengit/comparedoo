import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { formatNumberWithCommas } from '@/lib/format/format';
import Image from 'next/image';

function Housing({
  state1CostInfo,
  state2CostInfo,
  entity1PropertyAndIncomeTaxInfo,
  entity2PropertyAndIncomeTaxInfo,
  state1URLCase,
  state2URLCase,
}) {
  const state1 = state1CostInfo.state;
  const state1Rent1bedroomflatInCityCenter =
    state1CostInfo.rent1bedroomflatInCityCenter;
  const state1Rent2bedroomflatInCityCenter =
    state1CostInfo.rent2bedroomflatInCityCenter;
  const state1Rent3bedroomflatInCityCenter =
    state1CostInfo.rent3bedroomflatInCityCenter;
  const state1Rent1bedroomflatOutsideCityCenter =
    state1CostInfo.rent1bedroomflatOutsideCityCenter;
  const state1Rent2bedroomflatOutsideCityCenter =
    state1CostInfo.rent2bedroomflatOutsideCityCenter;
  const state1Rent3bedroomflatOutsideCityCenter =
    state1CostInfo.rent3bedroomflatOutsideCityCenter;
  const state1MortgageRatesPerMonth = state1CostInfo.mortgageRatesPerMonth;
  const state1RealEstateAgentsCommissionFees =
    state1CostInfo.realEstateAgentsCommissionFees;
  const state1PropertyTaxRates =
    entity1PropertyAndIncomeTaxInfo.propertyTaxRates;
  const state1AverageCost =
    ((state1Rent1bedroomflatInCityCenter || 0) +
      (state1Rent2bedroomflatInCityCenter || 0) +
      (state1Rent3bedroomflatInCityCenter || 0) +
      (state1Rent1bedroomflatOutsideCityCenter || 0) +
      (state1Rent2bedroomflatOutsideCityCenter || 0) +
      (state1Rent3bedroomflatOutsideCityCenter || 0)) /
    6;

  const state2 = state2CostInfo.state;
  const state2Rent1bedroomflatInCityCenter =
    state2CostInfo.rent1bedroomflatInCityCenter;
  const state2Rent2bedroomflatInCityCenter =
    state2CostInfo.rent2bedroomflatInCityCenter;
  const state2Rent3bedroomflatInCityCenter =
    state2CostInfo.rent3bedroomflatInCityCenter;
  const state2Rent1bedroomflatOutsideCityCenter =
    state2CostInfo.rent1bedroomflatOutsideCityCenter;
  const state2Rent2bedroomflatOutsideCityCenter =
    state2CostInfo.rent2bedroomflatOutsideCityCenter;
  const state2Rent3bedroomflatOutsideCityCenter =
    state2CostInfo.rent3bedroomflatOutsideCityCenter;
  const state2MortgageRatesPerMonth = state2CostInfo.mortgageRatesPerMonth;
  const state2RealEstateAgentsCommissionFees =
    state2CostInfo.realEstateAgentsCommissionFees;
  const state2PropertyTaxRates =
    entity2PropertyAndIncomeTaxInfo.propertyTaxRates;
  const state2AverageCost =
    ((state2Rent1bedroomflatInCityCenter || 0) +
      (state2Rent2bedroomflatInCityCenter || 0) +
      (state2Rent3bedroomflatInCityCenter || 0) +
      (state2Rent1bedroomflatOutsideCityCenter || 0) +
      (state2Rent2bedroomflatOutsideCityCenter || 0) +
      (state2Rent3bedroomflatOutsideCityCenter || 0)) /
    6;

  const costTimes =
    state1AverageCost > state2AverageCost
      ? (state1AverageCost / state2AverageCost).toFixed(2)
      : (state2AverageCost / state1AverageCost).toFixed(2);
  const moreOrLess = state1AverageCost > state2AverageCost ? 'more' : 'less';

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
                {state1Rent1bedroomflatInCityCenter
                  ? `${formatNumberWithCommas(
                    state1Rent1bedroomflatInCityCenter
                  )} USD`
                  : 'Yet to Update'}
              </td>
              <td className="rent-1-bedroom-flat-in-city-center-answer-second-entity all-indicator-answers">
                {state2Rent1bedroomflatInCityCenter
                  ? `${formatNumberWithCommas(
                    state2Rent1bedroomflatInCityCenter
                  )} USD`
                  : 'Yet to Update'}
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
                {state1Rent2bedroomflatInCityCenter
                  ? `${formatNumberWithCommas(
                    state1Rent2bedroomflatInCityCenter
                  )} USD`
                  : 'Yet to Update'}
              </td>
              <td className="rent-2-bedroom-flat-in-city-center-answer-second-entity all-indicator-answers">
                {state2Rent2bedroomflatInCityCenter
                  ? `${formatNumberWithCommas(
                    state2Rent2bedroomflatInCityCenter
                  )} USD`
                  : 'Yet to Update'}
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
                {state1Rent3bedroomflatInCityCenter
                  ? `${formatNumberWithCommas(
                    state1Rent3bedroomflatInCityCenter
                  )} USD`
                  : 'Yet to Update'}
              </td>
              <td className="rent-3-bedroom-flat-in-city-center-answer-second-entity all-indicator-answers">
                {state2Rent3bedroomflatInCityCenter
                  ? `${formatNumberWithCommas(
                    state2Rent3bedroomflatInCityCenter
                  )} USD`
                  : 'Yet to Update'}
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
                {state1Rent1bedroomflatOutsideCityCenter
                  ? `${formatNumberWithCommas(
                    state1Rent1bedroomflatOutsideCityCenter
                  )} USD`
                  : 'Yet to Update'}
              </td>
              <td className="rent-1-bedroom-flat-outside-city-center-answer-second-entity all-indicator-answers">
                {state2Rent1bedroomflatOutsideCityCenter
                  ? `${formatNumberWithCommas(
                    state2Rent1bedroomflatOutsideCityCenter
                  )} USD`
                  : 'Yet to Update'}
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
                {state1Rent2bedroomflatOutsideCityCenter
                  ? `${formatNumberWithCommas(
                    state1Rent2bedroomflatOutsideCityCenter
                  )} USD`
                  : 'Yet to Update'}
              </td>
              <td className="rent-2-bedroom-flat-outside-city-center-answer-second-entity all-indicator-answers">
                {state2Rent2bedroomflatOutsideCityCenter
                  ? `${formatNumberWithCommas(
                    state2Rent2bedroomflatOutsideCityCenter
                  )} USD`
                  : 'Yet to Update'}
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
                {state1Rent3bedroomflatOutsideCityCenter
                  ? `${formatNumberWithCommas(
                    state1Rent3bedroomflatOutsideCityCenter
                  )} USD`
                  : 'Yet to Update'}
              </td>
              <td className="rent-3-bedroom-flat-outside-city-center-answer-second-entity all-indicator-answers">
                {state2Rent3bedroomflatOutsideCityCenter
                  ? `${formatNumberWithCommas(
                    state2Rent3bedroomflatOutsideCityCenter
                  )} USD`
                  : 'Yet to Update'}
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
                {state1MortgageRatesPerMonth && state1MortgageRatesPerMonth !== 'Yet to Update'
                  ? `${state1MortgageRatesPerMonth} %`
                  : 'Yet to Update'}
              </td>
              <td className="mortgage-rates-per-month-index-answer-second-entity all-indicator-answers">
                {state2MortgageRatesPerMonth && state2MortgageRatesPerMonth !== 'Yet to Update'
                  ? `${state2MortgageRatesPerMonth} %`
                  : 'Yet to Update'}
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
                {state1RealEstateAgentsCommissionFees && state1RealEstateAgentsCommissionFees !== 'Yet to Update'
                  ? `${state1RealEstateAgentsCommissionFees} %`
                  : 'Yet to Update'}
              </td>
              <td className="real-estate-agents-commission-fees-answer-second-entity all-indicator-answers">
                {state2RealEstateAgentsCommissionFees && state2RealEstateAgentsCommissionFees !== 'Yet to Update'
                  ? `${state2RealEstateAgentsCommissionFees} %`
                  : 'Yet to Update'}
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
                {state1PropertyTaxRates && state1PropertyTaxRates !== 'Yet to Update'
                  ? `${state1PropertyTaxRates} %`
                  : 'Yet to Update'}
              </td>
              <td className="property-taxes-answer-second-entity all-indicator-answers">
                {state2PropertyTaxRates && state2PropertyTaxRates !== 'Yet to Update'
                  ? `${state2PropertyTaxRates} %`
                  : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="paragraph-for-pages-below-table">
        <div className="para-for-pages-single-div">
          <h3>
            Is housing more expensive in
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
            The average housing cost in
            <span className="first-entity-name-pages-paragraph">
              {' '}
              {state1}{' '}
            </span>
            <strong>
              is <span className="housing-cost-calculation"> {costTimes} </span>{' '}
              times{' '}
            </strong>
            <span className="housing-cost-less-or-more-expensive-calculation">
              {moreOrLess}{' '}
            </span>
            expensive than
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

export default Housing;
