import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { formatCost, isDollarized } from "@/lib/format/formatCost"
import Image from "next/image"

function Vehicle({ slug1, slug2, value1, value2, slug1CostInfo, slug2CostInfo, slug1Currency, slug2Currency, slug1ExchangeRate, slug2ExchangeRate, slug1LowerCase, slug2LowerCase }) {
    const slug1VehiclePurchasePrice = slug1CostInfo.vehiclePurchasePrice
    const slug1VehicleRegistration = slug1CostInfo.vehicleRegistration
    const slug1DrivingLicenseFees = slug1CostInfo.drivingLicenseFees
    const slug1CarInsurance = slug1CostInfo.carInsurance
    const slug1CarMaintenance = slug1CostInfo.carMaintenance
    const slug1CarLoanInterestRates = slug1CostInfo.carLoanInterestRates
    const slug1FuelPerLiter = slug1CostInfo.fuelPerLiter
    const slug1FuelPerGallon = slug1CostInfo.fuelPerGallon
    const slug1TollFees = slug1CostInfo.tollFees
    const slug1TotalCost = ((slug1VehiclePurchasePrice || 0) + (slug1VehicleRegistration || 0) + (slug1DrivingLicenseFees || 0) + (slug1CarInsurance || 0) + (slug1CarMaintenance || 0) + (slug1CarLoanInterestRates || 0) + (slug1FuelPerLiter || 0) + (slug1FuelPerGallon || 0) + (slug1TollFees || 0)) * slug1ExchangeRate

    const slug2VehiclePurchasePrice = slug2CostInfo.vehiclePurchasePrice
    const slug2VehicleRegistration = slug2CostInfo.vehicleRegistration
    const slug2DrivingLicenseFees = slug2CostInfo.drivingLicenseFees
    const slug2CarInsurance = slug2CostInfo.carInsurance
    const slug2CarMaintenance = slug2CostInfo.carMaintenance
    const slug2CarLoanInterestRates = slug2CostInfo.carLoanInterestRates
    const slug2FuelPerLiter = slug2CostInfo.fuelPerLiter
    const slug2FuelPerGallon = slug2CostInfo.fuelPerGallon
    const slug2TollFees = slug2CostInfo.tollFees
    const slug2TotalCost = ((slug2VehiclePurchasePrice || 0) + (slug2VehicleRegistration || 0) + (slug2DrivingLicenseFees || 0) + (slug2CarInsurance || 0) + (slug2CarMaintenance || 0) + (slug2CarLoanInterestRates || 0) + (slug2FuelPerLiter || 0) + (slug2FuelPerGallon || 0) + (slug2TollFees || 0)) * slug2ExchangeRate

    const costTimes = slug1TotalCost > slug2TotalCost ? (slug1TotalCost / slug2TotalCost).toFixed(2) : (slug2TotalCost / slug1TotalCost).toFixed(2)
    const moreOrLess = slug1TotalCost > slug2TotalCost ? 'more' : 'less'

    const isDollarizedSlug1 = isDollarized(value1, slug1);
    const isDollarizedSlug2 = isDollarized(value2, slug2);
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
objectFit="contain"alt="Image representing an indicator" />
                                    </div>

                                    <div className="indicator-text">Indicators</div>

                                    <div className="left-indicator">
                                        <Image
                                            src="/images/indicators-left-image.png"
                                           layout="fill"
objectFit="contain"alt="Image illustrating an indicator" />
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="first-entity-map-pages-comparison">
                                        <Image src={`/images/${slug1LowerCase}-map-small.png`}layout="fill"
objectFit="contain"alt={`Pictorial representation of map of ${slug1LowerCase}`} />
                                    </div>

                                    <div className="first-entity-name-pages-comparison">{slug1}</div>

                                    <div className="first-entity-flag-pages-comparison">
                                        <Image src={`/images/${slug1LowerCase}-flag-small.png`}layout="fill"
objectFit="contain"alt={`Image illustrating the flag of ${slug1LowerCase}`} />
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="second-entity-map-pages-comparison">
                                        <Image src={`/images/${slug2LowerCase}-map-small.png`}layout="fill"
objectFit="contain"alt={`Pictorial representation of map of ${slug2LowerCase}`} />
                                    </div>

                                    <div className="second-entity-name-pages-comparison"> {slug2} </div>

                                    <div className="second-entity-flag-pages-comparison">
                                        <Image src={`/images/${slug2LowerCase}-flag-small.png`}layout="fill"
objectFit="contain"alt={`Image illustrating the flag of ${slug2LowerCase}`} />
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Reasonable Vehicle Purchase Cost</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/vehicle-purchase-price-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing Reasonable Vehicle Purchase Cost" />
                                </div>
                            </td>

                            <td
                                className="vehicle-purchase-price-first-entity all-indicator-answers">
                                {slug1VehiclePurchasePrice ? formatCost(slug1VehiclePurchasePrice, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td
                                className="vehicle-purchase-price-second-entity all-indicator-answers">
                                {slug2VehiclePurchasePrice ? formatCost(slug2VehiclePurchasePrice, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Vehicle Registration Cost</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/vehicle-registration-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing Vehicle Registration Cost" />
                                </div>
                            </td>

                            <td
                                className="vehicle-registration-cost-first-entity all-indicator-answers">
                                {slug1VehicleRegistration ? formatCost(slug1VehicleRegistration, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td
                                className="vehicle-registration-cost-second-entity all-indicator-answers">
                                {slug2VehicleRegistration ? formatCost(slug2VehicleRegistration, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Driving License Fees</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/driving-license-fees-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing Driving License Fees" />
                                </div>
                            </td>

                            <td className="driving-license-fees-first-entity all-indicator-answers">
                                {slug1DrivingLicenseFees ? formatCost(slug1DrivingLicenseFees, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td
                                className="driving-license-fees-second-entity all-indicator-answers">
                                {slug2DrivingLicenseFees ? formatCost(slug2DrivingLicenseFees, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Car Insurance Cost</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/car-insurance-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing Car Insurance Cost" />
                                </div>
                            </td>

                            <td className="car-insurance-first-entity all-indicator-answers">
                                {slug1CarInsurance ? formatCost(slug1CarInsurance, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td className="car-insurance-second-entity all-indicator-answers">
                                {slug2CarInsurance ? formatCost(slug2CarInsurance, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Car Maintainence Cost</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/car-maintenance-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing Car Maintainence Cost" />
                                </div>
                            </td>

                            <td
                                className="car-maintainence-cost-first-entity all-indicator-answers">
                                {slug1CarMaintenance ? formatCost(slug1CarMaintenance, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td
                                className="car-maintainence-cost-second-entity all-indicator-answers">
                                {slug2CarMaintenance ? formatCost(slug2CarMaintenance, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Car Loan Interest Rates</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/car-loan-interest-rate-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing Car Loan Interest Rates" />
                                </div>
                            </td>

                            <td
                                className="car-loan-interest-rates-first-entity all-indicator-answers">
                                {slug1CarLoanInterestRates ? `${slug1CarLoanInterestRates} %` : 'Yet to Update'}
                            </td>
                            <td
                                className="car-loan-interest-rates-second-entity all-indicator-answers">
                                {slug2CarLoanInterestRates ? `${slug2CarLoanInterestRates} %` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Fuel Per Liter</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/fuel-per-liter-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing Fuel Per Liter" />
                                </div>
                            </td>

                            <td className="fuel-per-liter-first-entity all-indicator-answers">
                                {slug1FuelPerLiter ? formatCost(slug1FuelPerLiter, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td className="fuel-per-liter-second-entity all-indicator-answers">
                                {slug2FuelPerLiter ? formatCost(slug2FuelPerLiter, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Fuel Per Gallon</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/fuel-per-gallon-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing Fuel Per Gallon" />
                                </div>
                            </td>

                            <td className="fuel-per-gallon-first-entity all-indicator-answers">
                                {slug1FuelPerGallon ? formatCost(slug1FuelPerGallon, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td className="fuel-per-gallon-second-entity all-indicator-answers">
                                {slug2FuelPerGallon ? formatCost(slug2FuelPerGallon, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Average Toll Fees</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/toll-fees-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing Average Toll Fees" />
                                </div>
                            </td>

                            <td className="toll-fees-first-entity all-indicator-answers">
                                {slug1TollFees ? formatCost(slug1TollFees, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td className="toll-fees-second-entity all-indicator-answers">
                                {slug2TollFees ? formatCost(slug2TollFees, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="paragraph-for-pages-below-table">
                <div className="para-for-pages-single-div">
                    <h3>
                        Is Vehicle Operation and Maintainence more expensive in
                        <span className="first-entity-name-pages-paragraph"> {slug1} </span>
                        than in
                        <span className="second-entity-name-pages-paragraph"> {slug2}</span>
                        ?
                    </h3>

                    <p>
                        You would have to pay
                        <strong>
                            <span className="vehicle-maintainence-calculation"> {costTimes} </span>
                            times{' '}
                        </strong>
                        <span className="vehicle-maintainence-more-or-less-calculation">
                            {moreOrLess}{' '}
                        </span>
                        for Vehicle purchase, daily operation and maintainence in
                        <span className="first-entity-name-pages-paragraph"> {slug1} </span>
                        compared to that of
                        <span className="second-entity-name-pages-paragraph"> {slug2}</span>
                        .
                    </p>
                </div>
            </div>
        </>
    )
}

export default Vehicle