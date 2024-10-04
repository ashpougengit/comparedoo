import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { dollarizedCountries } from '@/lib/array-list/dollarizedCountries';
import {
  formatNumberWithCommas,
  formatUSDWithCommas,
} from '@/lib/format/format';
import Image from 'next/image';

function Vehicle({ costInfo, currency, unitValueInUSD, countryURLCase }) {
  const country = costInfo.country;
  const vehiclePurchasePrice = costInfo.vehiclePurchasePrice;
  const vehicleRegistration = costInfo.vehicleRegistration;
  const drivingLicenseFees = costInfo.drivingLicenseFees;
  const carInsurance = costInfo.carInsurance;
  const carMaintenance = costInfo.carMaintenance;
  const carLoanInterestRates = costInfo.carLoanInterestRates;
  const fuelPerLiter = costInfo.fuelPerLiter;
  const fuelPerGallon = costInfo.fuelPerGallon;
  const tollFees = costInfo.tollFees;

  return (
    <>
      <AdsHeaderBanner />

      <div className="geographical-map">
        <h2 className="pages-h2">Vehicle Purchase and Maintainence Cost</h2>
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
                      src={`/images/${countryURLCase}-map-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Pictorial representation of map of ${countryURLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {country}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${countryURLCase}-flag-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Image illustrating the flag of ${countryURLCase}`}
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
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Reasonable Vehicle Purchase Cost"
                  />
                </div>
              </td>

              <td className="vehicle-purchase-price-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(vehiclePurchasePrice)} ${vehiclePurchasePrice ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="vehicle-purchase-price-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    vehiclePurchasePrice * unitValueInUSD
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
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Vehicle Registration Cost"
                  />
                </div>
              </td>

              <td className="vehicle-registration-cost-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(vehicleRegistration)} ${vehicleRegistration ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="vehicle-registration-cost-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    vehicleRegistration * unitValueInUSD
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
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Driving License Fees"
                  />
                </div>
              </td>

              <td className="driving-license-fees-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(drivingLicenseFees)} ${drivingLicenseFees ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="driving-license-fees-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    drivingLicenseFees * unitValueInUSD
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
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Car Insurance Cost"
                  />
                </div>
              </td>

              <td className="car-insurance-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(carInsurance)} ${carInsurance ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="car-insurance-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    carInsurance * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Car Maintainence Cost</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/car-maintenance-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Car Maintainence Cost"
                  />
                </div>
              </td>

              <td className="car-maintainence-cost-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(carMaintenance)} ${carMaintenance ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="car-maintainence-cost-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    carMaintenance * unitValueInUSD
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
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Car Loan Interest Rates"
                  />
                </div>
              </td>

              <td className="car-loan-interest-rates-first-entity all-indicator-answers">
                {carLoanInterestRates && carLoanInterestRates !== 'Yet to Update'
                  ? `${carLoanInterestRates} %`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Fuel Per Liter</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/fuel-per-liter-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Fuel Per Liter"
                  />
                </div>
              </td>

              <td className="fuel-per-liter-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(fuelPerLiter)} ${fuelPerLiter ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="fuel-per-liter-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    fuelPerLiter * unitValueInUSD
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
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Fuel Per Gallon"
                  />
                </div>
              </td>

              <td className="fuel-per-gallon-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(fuelPerGallon)} ${fuelPerGallon ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="fuel-per-gallon-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    fuelPerGallon * unitValueInUSD
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
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Average Toll Fees"
                  />
                </div>
              </td>

              <td className="toll-fees-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(tollFees)} ${tollFees ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="toll-fees-first-entity-amount-in-usd amount-in-dollar">{`${tollFees === null
                    ? ''
                    : formatUSDWithCommas(tollFees * unitValueInUSD)
                    }`}</span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Vehicle;
