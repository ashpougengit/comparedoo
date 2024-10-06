import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { formatNumberWithCommas } from '@/lib/format/format';
import Image from 'next/image';

function Vehicle({ costInfo, stateURLCase }) {
  const state = costInfo.state;
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
                      src={`/images/${stateURLCase}-map-small.png`}
                      fill
                      alt={`Pictorial representation of map of ${stateURLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {state}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${stateURLCase}-flag-small.png`}
                      fill
                      alt={`Image illustrating the flag of ${stateURLCase}`}
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
                    alt="Image Describing Reasonable Vehicle Purchase Cost"
                  />
                </div>
              </td>

              <td className="vehicle-purchase-price-first-entity all-indicator-answers">
                {vehiclePurchasePrice
                  ? `${formatNumberWithCommas(vehiclePurchasePrice)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Vehicle Registration Cost</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/vehicle-registration-image.png"
                    fill
                    alt="Image Describing Vehicle Registration Cost"
                  />
                </div>
              </td>

              <td className="vehicle-registration-cost-first-entity all-indicator-answers">
                {vehicleRegistration
                  ? `${formatNumberWithCommas(vehicleRegistration)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Driving License Fees</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/driving-license-fees-image.png"
                    fill
                    alt="Image Describing Driving License Fees"
                  />
                </div>
              </td>

              <td className="driving-license-fees-first-entity all-indicator-answers">
                {drivingLicenseFees
                  ? `${formatNumberWithCommas(drivingLicenseFees)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Car Insurance Cost</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/car-insurance-image.png"
                    fill
                    alt="Image Describing Car Insurance Cost"
                  />
                </div>
              </td>

              <td className="car-insurance-first-entity all-indicator-answers">
                {carInsurance
                  ? `${formatNumberWithCommas(carInsurance)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Car Maintainence Cost</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/car-maintenance-image.png"
                    fill
                    alt="Image Describing Car Maintainence Cost"
                  />
                </div>
              </td>

              <td className="car-maintainence-cost-first-entity all-indicator-answers">
                {carMaintenance
                  ? `${formatNumberWithCommas(carMaintenance)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Car Loan Interest Rates</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/car-loan-interest-rate-image.png"
                    fill
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
                    fill
                    alt="Image Describing Fuel Per Liter"
                  />
                </div>
              </td>

              <td className="fuel-per-liter-first-entity all-indicator-answers">
                {fuelPerLiter
                  ? `${formatNumberWithCommas(fuelPerLiter)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Fuel Per Gallon</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/fuel-per-gallon-image.png"
                    fill
                    alt="Image Describing Fuel Per Gallon"
                  />
                </div>
              </td>

              <td className="fuel-per-gallon-first-entity all-indicator-answers">
                {fuelPerGallon
                  ? `${formatNumberWithCommas(fuelPerGallon)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Average Toll Fees</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/toll-fees-image.png"
                    fill
                    alt="Image Describing Average Toll Fees"
                  />
                </div>
              </td>

              <td className="toll-fees-first-entity all-indicator-answers">
                {tollFees
                  ? `${formatNumberWithCommas(tollFees)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Vehicle;
