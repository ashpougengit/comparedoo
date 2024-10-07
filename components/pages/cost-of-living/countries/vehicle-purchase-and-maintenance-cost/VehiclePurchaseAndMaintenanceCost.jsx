import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { dollarizedCountries } from '@/lib/array-list/dollarizedCountries';
import {
  formatNumberWithCommas,
  formatUSDWithCommas,
} from '@/lib/format/format';
import Image from 'next/image';

function VehiclePurchaseAndMaintenanceCost({
  country1CostInfo,
  country2CostInfo,
  country1Currency,
  country2Currency,
  country1UnitValueInUSD,
  country2UnitValueInUSD,
  country1URLCase,
  country2URLCase,
}) {
  const country1 = country1CostInfo.country;
  const country1VehiclePurchasePrice = country1CostInfo.vehiclePurchasePrice;
  const country1VehicleRegistration = country1CostInfo.vehicleRegistration;
  const country1DrivingLicenseFees = country1CostInfo.drivingLicenseFees;
  const country1CarInsurance = country1CostInfo.carInsurance;
  const country1CarMaintenance = country1CostInfo.carMaintenance;
  const country1CarLoanInterestRates = country1CostInfo.carLoanInterestRates;
  const country1FuelPerLiter = country1CostInfo.fuelPerLiter;
  const country1FuelPerGallon = country1CostInfo.fuelPerGallon;
  const country1TollFees = country1CostInfo.tollFees;
  const country1TotalCost =
    ((country1VehiclePurchasePrice || 0) +
      (country1VehicleRegistration || 0) +
      (country1DrivingLicenseFees || 0) +
      (country1CarInsurance || 0) +
      (country1CarMaintenance || 0) +
      (country1FuelPerLiter || 0) +
      (country1FuelPerGallon || 0) +
      (country1TollFees || 0)) *
    country1UnitValueInUSD;

  const country2 = country2CostInfo.country;
  const country2VehiclePurchasePrice = country2CostInfo.vehiclePurchasePrice;
  const country2VehicleRegistration = country2CostInfo.vehicleRegistration;
  const country2DrivingLicenseFees = country2CostInfo.drivingLicenseFees;
  const country2CarInsurance = country2CostInfo.carInsurance;
  const country2CarMaintenance = country2CostInfo.carMaintenance;
  const country2CarLoanInterestRates = country2CostInfo.carLoanInterestRates;
  const country2FuelPerLiter = country2CostInfo.fuelPerLiter;
  const country2FuelPerGallon = country2CostInfo.fuelPerGallon;
  const country2TollFees = country2CostInfo.tollFees;
  const country2TotalCost =
    ((country2VehiclePurchasePrice || 0) +
      (country2VehicleRegistration || 0) +
      (country2DrivingLicenseFees || 0) +
      (country2CarInsurance || 0) +
      (country2CarMaintenance || 0) +
      (country2FuelPerLiter || 0) +
      (country2FuelPerGallon || 0) +
      (country2TollFees || 0)) *
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
        <h2 className="pages-h2">Vehicle Purchase and Maintenance Cost</h2>
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
                      src={`/images/${country1URLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                  Reasonable Vehicle Purchase Cost
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/vehicle-purchase-price-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Reasonable Vehicle Purchase Cost"
                  />
                </div>
              </td>

              <td className="vehicle-purchase-price-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1VehiclePurchasePrice)} ${country1VehiclePurchasePrice ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="vehicle-purchase-price-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1VehiclePurchasePrice * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="vehicle-purchase-price-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2VehiclePurchasePrice)} ${country2VehiclePurchasePrice ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="vehicle-purchase-price-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2VehiclePurchasePrice * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Vehicle Registration Cost</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/vehicle-registration-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Vehicle Registration Cost"
                  />
                </div>
              </td>

              <td className="vehicle-registration-cost-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1VehicleRegistration)} ${country1VehicleRegistration ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="vehicle-registration-cost-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1VehicleRegistration * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="vehicle-registration-cost-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2VehicleRegistration)} ${country2VehicleRegistration ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="vehicle-registration-cost-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2VehicleRegistration * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Driving License Fees</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/driving-license-fees-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Driving License Fees"
                  />
                </div>
              </td>

              <td className="driving-license-fees-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1DrivingLicenseFees)} ${country1DrivingLicenseFees ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="driving-license-fees-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1DrivingLicenseFees * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="driving-license-fees-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2DrivingLicenseFees)} ${country2DrivingLicenseFees ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="driving-license-fees-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2DrivingLicenseFees * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Car Insurance Cost</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/car-insurance-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Car Insurance Cost"
                  />
                </div>
              </td>

              <td className="car-insurance-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1CarInsurance)} ${country1CarInsurance ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="car-insurance-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1CarInsurance * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="car-insurance-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2CarInsurance)} ${country2CarInsurance ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="car-insurance-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2CarInsurance * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Car Maintenance Cost</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/car-maintenance-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Car Maintenance Cost"
                  />
                </div>
              </td>

              <td className="car-maintenance-cost-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1CarMaintenance)} ${country1CarMaintenance ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="car-maintenance-cost-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1CarMaintenance * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="car-maintenance-cost-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2CarMaintenance)} ${country2CarMaintenance ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="car-maintenance-cost-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2CarMaintenance * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Car Loan Interest Rates</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/car-loan-interest-rate-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Car Loan Interest Rates"
                  />
                </div>
              </td>

              <td className="car-loan-interest-rates-first-entity all-indicator-answers">
                {country1CarLoanInterestRates && country1CarLoanInterestRates !== 'Yet to Update'
                  ? `${country1CarLoanInterestRates} %`
                  : 'Yet to Update'}
              </td>
              <td className="car-loan-interest-rates-second-entity all-indicator-answers">
                {country2CarLoanInterestRates && country2CarLoanInterestRates !== 'Yet to Update'
                  ? `${country2CarLoanInterestRates} %`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Fuel Per Liter</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/fuel-per-liter-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Fuel Per Liter"
                  />
                </div>
              </td>

              <td className="fuel-per-liter-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1FuelPerLiter)} ${country1FuelPerLiter ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="fuel-per-liter-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1FuelPerLiter * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="fuel-per-liter-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2FuelPerLiter)} ${country2FuelPerLiter ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="fuel-per-liter-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2FuelPerLiter * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Fuel Per Gallon</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/fuel-per-gallon-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Fuel Per Gallon"
                  />
                </div>
              </td>

              <td className="fuel-per-gallon-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1FuelPerGallon)} ${country1FuelPerGallon ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="fuel-per-gallon-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1FuelPerGallon * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="fuel-per-gallon-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2FuelPerGallon)} ${country2FuelPerGallon ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="fuel-per-gallon-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2FuelPerGallon * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Average Toll Fees</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/toll-fees-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Average Toll Fees"
                  />
                </div>
              </td>

              <td className="toll-fees-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1TollFees)} ${country1TollFees ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="toll-fees-first-entity-amount-in-usd amount-in-dollar">{`${country1TollFees == null
                    ? ''
                    : formatUSDWithCommas(
                      country1TollFees * country1UnitValueInUSD
                    )
                    }`}</span>
                )}
              </td>
              <td className="toll-fees-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2TollFees)} ${country2TollFees ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="toll-fees-second-entity-amount-in-usd amount-in-dollar">{`${country2TollFees == null
                    ? ''
                    : formatUSDWithCommas(
                      country2TollFees * country2UnitValueInUSD
                    )
                    }`}</span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="paragraph-for-pages-below-table">
        <div className="para-for-pages-single-div">
          <h3>
            Is Vehicle Operation and Maintenance more expensive in
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
            You would have to pay{' '}
            <strong>
              {' '}
              <span className="vehicle-maintenance-calculation">
                {costTimes}{' '}
              </span>{' '}
              times{' '}
            </strong>
            <span className="vehicle-maintenance-more-or-less-calculation">
              {' '}
              {moreOrLess}{' '}
            </span>{' '}
            for Vehicle purchase, daily operation and maintenance in{' '}
            <span className="first-entity-name-pages-paragraph">
              {' '}
              {country1}{' '}
            </span>{' '}
            compared to that of{' '}
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

export default VehiclePurchaseAndMaintenanceCost;
