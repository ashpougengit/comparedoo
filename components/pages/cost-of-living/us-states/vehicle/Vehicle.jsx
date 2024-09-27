import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { formatNumberWithCommas } from '@/lib/format/format';
import Image from 'next/image';

function Vehicle({ state1CostInfo, state2CostInfo, state1LowerCase, state2LowerCase }) {
    const state1 = state1CostInfo.state
    const state1VehiclePurchasePrice = state1CostInfo.vehiclePurchasePrice
    const state1VehicleRegistration = state1CostInfo.vehicleRegistration
    const state1DrivingLicenseFees = state1CostInfo.drivingLicenseFees
    const state1CarInsurance = state1CostInfo.carInsurance
    const state1CarMaintenance = state1CostInfo.carMaintenance
    const state1CarLoanInterestRates = state1CostInfo.carLoanInterestRates
    const state1FuelPerLiter = state1CostInfo.fuelPerLiter
    const state1FuelPerGallon = state1CostInfo.fuelPerGallon
    const state1TollFees = state1CostInfo.tollFees
    const state1TotalCost = (state1VehiclePurchasePrice || 0) + (state1VehicleRegistration || 0) + (state1DrivingLicenseFees || 0) + (state1CarInsurance || 0) + (state1CarMaintenance || 0) + (state1CarLoanInterestRates || 0) + (state1FuelPerLiter || 0) + (state1FuelPerGallon || 0) + (state1TollFees || 0)

    const state2 = state2CostInfo.state
    const state2VehiclePurchasePrice = state2CostInfo.vehiclePurchasePrice
    const state2VehicleRegistration = state2CostInfo.vehicleRegistration
    const state2DrivingLicenseFees = state2CostInfo.drivingLicenseFees
    const state2CarInsurance = state2CostInfo.carInsurance
    const state2CarMaintenance = state2CostInfo.carMaintenance
    const state2CarLoanInterestRates = state2CostInfo.carLoanInterestRates
    const state2FuelPerLiter = state2CostInfo.fuelPerLiter
    const state2FuelPerGallon = state2CostInfo.fuelPerGallon
    const state2TollFees = state2CostInfo.tollFees
    const state2TotalCost = (state2VehiclePurchasePrice || 0) + (state2VehicleRegistration || 0) + (state2DrivingLicenseFees || 0) + (state2CarInsurance || 0) + (state2CarMaintenance || 0) + (state2CarLoanInterestRates || 0) + (state2FuelPerLiter || 0) + (state2FuelPerGallon || 0) + (state2TollFees || 0)

    const costTimes = state1TotalCost > state2TotalCost ? (state1TotalCost / state2TotalCost).toFixed(2) : (state2TotalCost / state1TotalCost).toFixed(2)
    const moreOrLess = state1TotalCost > state2TotalCost ? 'more' : 'less'

    return (
        <>
            <AdsHeaderBanner />

            <div className="geographical-map">
                <h2 className="pages-h2">Vehicle Purchase and Maintainence Cost</h2>
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
objectFit="contain"alt="Image representing an indicator"
                                        />
                                    </div>

                                    <div className="indicator-text">Indicators</div>

                                    <div className="left-indicator">
                                        <Image
                                            src="/images/indicators-left-image.png"
                                           layout="fill"
objectFit="contain"alt="Image illustrating an indicator"
                                        />
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="first-entity-map-pages-comparison">
                                        <Image src={`/images/${state1LowerCase}-map-small.png`}layout="fill"
objectFit="contain"alt={`Pictorial representation of map of ${state1LowerCase}`} />
                                    </div>

                                    <div className="first-entity-name-pages-comparison">{state1}</div>

                                    <div className="first-entity-flag-pages-comparison">
                                        <Image src={`/images/${state1LowerCase}-flag-small.png`}layout="fill"
objectFit="contain"alt={`Image illustrating the flag of ${state1LowerCase}`} />
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="second-entity-map-pages-comparison">
                                        <Image src={`/images/${state2LowerCase}-map-small.png`}layout="fill"
objectFit="contain"alt={`Pictorial representation of map of ${state2LowerCase}`} />
                                    </div>

                                    <div className="second-entity-name-pages-comparison"> {state2} </div>

                                    <div className="second-entity-flag-pages-comparison">
                                        <Image src={`/images/${state2LowerCase}-flag-small.png`}layout="fill"
objectFit="contain"alt={`Image illustrating the flag of ${state2LowerCase}`} />
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
objectFit="contain"alt="Image Describing Reasonable Vehicle Purchase Cost"
                                    />
                                </div>
                            </td>

                            <td className="vehicle-purchase-price-first-entity all-indicator-answers">
                                {state1VehiclePurchasePrice ? `${formatNumberWithCommas(state1VehiclePurchasePrice)} USD` : 'Yet to Update'}
                            </td>
                            <td className="vehicle-purchase-price-second-entity all-indicator-answers">
                                {state2VehiclePurchasePrice ? `${formatNumberWithCommas(state2VehiclePurchasePrice)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Vehicle Registration Cost</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/vehicle-registration-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing Vehicle Registration Cost"
                                    />
                                </div>
                            </td>

                            <td className="vehicle-registration-cost-first-entity all-indicator-answers">
                                {state1VehicleRegistration ? `${formatNumberWithCommas(state1VehicleRegistration)} USD` : 'Yet to Update'}
                            </td>
                            <td className="vehicle-registration-cost-second-entity all-indicator-answers">
                                {state2VehicleRegistration ? `${formatNumberWithCommas(state2VehicleRegistration)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Driving License Fees</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/driving-license-fees-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing Driving License Fees"
                                    />
                                </div>
                            </td>

                            <td className="driving-license-fees-first-entity all-indicator-answers">
                                {state1DrivingLicenseFees ? `${formatNumberWithCommas(state1DrivingLicenseFees)} USD` : 'Yet to Update'}
                            </td>
                            <td className="driving-license-fees-second-entity all-indicator-answers">
                                {state2DrivingLicenseFees ? `${formatNumberWithCommas(state2DrivingLicenseFees)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Car Insurance Cost</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/car-insurance-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing Car Insurance Cost"
                                    />
                                </div>
                            </td>

                            <td className="car-insurance-first-entity all-indicator-answers">
                                {state1CarInsurance ? `${formatNumberWithCommas(state1CarInsurance)} USD` : 'Yet to Update'}
                            </td>
                            <td className="car-insurance-second-entity all-indicator-answers">
                                {state2CarInsurance ? `${formatNumberWithCommas(state2CarInsurance)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Car Maintainence Cost</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/car-maintenance-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing Car Maintainence Cost"
                                    />
                                </div>
                            </td>

                            <td className="car-maintainence-cost-first-entity all-indicator-answers">
                                {state1CarMaintenance ? `${formatNumberWithCommas(state1CarMaintenance)} USD` : 'Yet to Update'}
                            </td>
                            <td className="car-maintainence-cost-second-entity all-indicator-answers">
                                {state2CarMaintenance ? `${formatNumberWithCommas(state2CarMaintenance)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Car Loan Interest Rates</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/car-loan-interest-rate-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing Car Loan Interest Rates"
                                    />
                                </div>
                            </td>

                            <td className="car-loan-interest-rates-first-entity all-indicator-answers">
                                {state1CarLoanInterestRates ? `${state1CarLoanInterestRates}%` : 'Yet to Update'}
                            </td>
                            <td className="car-loan-interest-rates-second-entity all-indicator-answers">
                                {state2CarLoanInterestRates ? `${state2CarLoanInterestRates}%` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Fuel Per Liter</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/fuel-per-liter-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing Fuel Per Liter"
                                    />
                                </div>
                            </td>

                            <td className="fuel-per-liter-first-entity all-indicator-answers">
                                {state1FuelPerLiter ? `${formatNumberWithCommas(state1FuelPerLiter)} USD` : 'Yet to Update'}
                            </td>
                            <td className="fuel-per-liter-second-entity all-indicator-answers">
                                {state2FuelPerLiter ? `${formatNumberWithCommas(state2FuelPerLiter)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Fuel Per Gallon</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/fuel-per-gallon-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing Fuel Per Gallon"
                                    />
                                </div>
                            </td>

                            <td className="fuel-per-gallon-first-entity all-indicator-answers">
                                {state1FuelPerGallon ? `${formatNumberWithCommas(state1FuelPerGallon)} USD` : 'Yet to Update'}
                            </td>
                            <td className="fuel-per-gallon-second-entity all-indicator-answers">
                                {state2FuelPerGallon ? `${formatNumberWithCommas(state2FuelPerGallon)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Average Toll Fees</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/toll-fees-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing Average Toll Fees"
                                    />
                                </div>
                            </td>

                            <td className="toll-fees-first-entity all-indicator-answers">
                                {state1TollFees ? `${formatNumberWithCommas(state1TollFees)} USD` : 'Yet to Update'}
                            </td>
                            <td className="toll-fees-second-entity all-indicator-answers">
                                {state2TollFees ? `${formatNumberWithCommas(state2TollFees)} USD` : 'Yet to Update'}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="paragraph-for-pages-below-table">
                <div className="para-for-pages-single-div">
                    <h3>
                        Is Vehicle Operation and Maintainence more expensive in
                        <span className="first-entity-name-pages-paragraph">
                            {state1}
                        </span>{' '}
                        than in
                        <span className="second-entity-name-pages-paragraph"> {state2}</span>?
                    </h3>

                    <p>
                        You would have to pay{' '}
                        <strong>
                            {' '}
                            <span className="vehicle-maintainence-calculation"> {costTimes} </span>{' '}
                            times{' '}
                        </strong>
                        <span className="vehicle-maintainence-more-or-less-calculation">
                            {moreOrLess}
                        </span>{' '}
                        for Vehicle purchase, daily operation and maintainence in{' '}
                        <span className="first-entity-name-pages-paragraph"> {state1} </span>{' '}
                        compared to that of{' '}
                        <span className="second-entity-name-pages-paragraph"> {state2}</span>.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Vehicle;
