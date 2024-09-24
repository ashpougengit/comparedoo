import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { dollarizedCountries } from "@/lib/array-list/dollarizedCountries"
import { formatNumberWithCommas, formatUSDWithCommas } from "@/lib/format/format"
import Image from "next/image"

function TransportationCost({ country1CostInfo, country2CostInfo, country1Currency, country2Currency, country1UnitValueInUSD, country2UnitValueInUSD, country1LowerCase, country2LowerCase }) {
    const country1 = country1CostInfo.country
    const country1PublicTransportPass = country1CostInfo.publicTransportPass
    const country1SinglePublicTransportTicket = country1CostInfo.singlePublicTransportTicket
    const country1TrainTickets = country1CostInfo.trainTickets
    const country1AirfareDomestic = country1CostInfo.airfareDomestic
    const country1TaxiStartFare = country1CostInfo.taxiStartFare
    const country1TaxiRatePerKm = country1CostInfo.taxiRatePerKm
    const country1CarRentalPerDay = country1CostInfo.carRentalPerDay
    const country1ParkingFeesCityCenterPerHour = country1CostInfo.parkingFeesCityCenterPerHour
    const country1ParkingFeesOutsideCityCenterPerHour = country1CostInfo.parkingFeesOutsideCityCenterPerHour
    const country1TotalCost = ((country1PublicTransportPass || 0 ) + (country1SinglePublicTransportTicket || 0 ) + (country1TrainTickets || 0 ) + (country1AirfareDomestic || 0 ) + (country1TaxiStartFare || 0 ) + (country1TaxiRatePerKm || 0 ) + (country1CarRentalPerDay || 0 ) + (country1ParkingFeesCityCenterPerHour || 0 ) + (country1ParkingFeesOutsideCityCenterPerHour || 0)) * country1UnitValueInUSD

    const country2 = country2CostInfo.country
    const country2PublicTransportPass = country2CostInfo.publicTransportPass
    const country2SinglePublicTransportTicket = country2CostInfo.singlePublicTransportTicket
    const country2TrainTickets = country2CostInfo.trainTickets
    const country2AirfareDomestic = country2CostInfo.airfareDomestic
    const country2TaxiStartFare = country2CostInfo.taxiStartFare
    const country2TaxiRatePerKm = country2CostInfo.taxiRatePerKm
    const country2CarRentalPerDay = country2CostInfo.carRentalPerDay
    const country2ParkingFeesCityCenterPerHour = country2CostInfo.parkingFeesCityCenterPerHour
    const country2ParkingFeesOutsideCityCenterPerHour = country2CostInfo.parkingFeesOutsideCityCenterPerHour
    const country2TotalCost = ((country2PublicTransportPass || 0 ) + (country2SinglePublicTransportTicket || 0 ) + (country2TrainTickets || 0 ) + (country2AirfareDomestic || 0 ) + (country2TaxiStartFare || 0 ) + (country2TaxiRatePerKm || 0 ) + (country2CarRentalPerDay || 0 ) + (country2ParkingFeesCityCenterPerHour || 0 ) + (country2ParkingFeesOutsideCityCenterPerHour || 0)) * country2UnitValueInUSD

    const costTimes = country1TotalCost > country2TotalCost ? (country1TotalCost / country2TotalCost).toFixed(2) : (country2TotalCost / country1TotalCost).toFixed(2)
    const moreOrLess = country1TotalCost > country2TotalCost ? 'more' : 'less'

    return (
        <>
            <AdsHeaderBanner />

            <div className="geographical-map">
                <h2 className="pages-h2">Transportation Cost Comparison</h2>
            </div>

            <div className="basic-information-comparison-div1">
                <table className="indicators-first-entity-and-second-entity-div1">
                    <thead>
                        <tr className="first-tr">
                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="right-indicator">
                                        <Image src="/images/indicators-right-image.png" fill alt="Image representing an indicator" />
                                    </div>

                                    <div className="indicator-text">Indicators</div>

                                    <div className="left-indicator">
                                        <Image src="/images/indicators-left-image.png" fill alt="Image illustrating an indicator" />
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="first-entity-map-pages-comparison">
                                        <Image src={`/images/${country1LowerCase}-map-small.png`} fill alt={`Pictorial representation of map of ${country1LowerCase}`} />
                                    </div>

                                    <div className="first-entity-name-pages-comparison">{country1}</div>

                                    <div className="first-entity-flag-pages-comparison">
                                        <Image src={`/images/${country1LowerCase}-flag-small.png`} fill alt={`Image illustrating the flag of ${country1LowerCase}`} />
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="second-entity-map-pages-comparison">
                                        <Image src={`/images/${country2LowerCase}-map-small.png`} fill alt={`Pictorial representation of map of ${country2LowerCase}`} />
                                    </div>

                                    <div className="second-entity-name-pages-comparison"> {country2} </div>

                                    <div className="second-entity-flag-pages-comparison">
                                        <Image src={`/images/${country2LowerCase}-flag-small.png`} fill alt={`Image illustrating the flag of ${country2LowerCase}`} />
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Monthly Public Transportation Pass</div>
                                <div className="basic-information-images">
                                    <Image src="/images/public-transportation-pass-per-month-image.png"
                                        fill alt="Image Describing Monthly Public Transportation Pass" />
                                </div>
                            </td>

                            <td className="public-transport-pass-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1PublicTransportPass)} ${country1PublicTransportPass ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' :(<span className="public-transport-pass-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country1PublicTransportPass * country1UnitValueInUSD)}`}</span>)}
                            </td>
                            <td className="public-transport-pass-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2PublicTransportPass)} ${country2PublicTransportPass ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="public-transport-pass-second-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country2PublicTransportPass * country2UnitValueInUSD)}`}</span>)}
                            </td>
                        </tr>


                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Single Public Transportation Ticket</div>
                                <div className="basic-information-images">
                                    <Image src="/images/single-public-transportation-ticket-image.png"
                                        fill alt="Image Describing Single Public Transportation Ticket" />
                                </div>
                            </td>

                            <td className="single-public-transportation-ticket-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1SinglePublicTransportTicket)} ${country1SinglePublicTransportTicket ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' :(<span
                                    className="single-public-transportation-ticket-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country1SinglePublicTransportTicket * country1UnitValueInUSD)}`}</span>)}
                            </td>
                            <td className="single-public-transportation-ticket-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2SinglePublicTransportTicket)} ${country2SinglePublicTransportTicket ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span
                                    className="single-public-transportation-ticket-second-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country2SinglePublicTransportTicket * country2UnitValueInUSD)}`}</span>)}
                            </td>
                        </tr>


                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Single Train Ticket</div>
                                <div className="basic-information-images">
                                    <Image src="/images/train-tickets-image.png" fill alt="Image Describing Single Train Ticket" />
                                </div>
                            </td>

                            <td className="single-train-ticket-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1TrainTickets)} ${country1TrainTickets ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' :(<span className="single-train-ticket-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country1TrainTickets * country1UnitValueInUSD)}`}</span>)}
                            </td>
                            <td className="single-train-ticket-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2TrainTickets)} ${country2TrainTickets ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="single-train-ticket-second-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country2TrainTickets * country2UnitValueInUSD)}`}</span>)}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Domestic Airplane Ticket</div>
                                <div className="basic-information-images">
                                    <Image src="/images/air-fare-domestic.png" fill alt="Image Describing Domestic Airplane Ticket" />
                                </div>
                            </td>

                            <td className="air-fare-domestic-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1AirfareDomestic)} ${country1AirfareDomestic ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' :(<span className="air-fare-domestic-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country1AirfareDomestic * country1UnitValueInUSD)}`}</span>)}
                            </td>
                            <td className="air-fare-domestic-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2AirfareDomestic)} ${country2AirfareDomestic ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="air-fare-domestic-second-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country2AirfareDomestic * country2UnitValueInUSD)}`}</span>)}
                            </td>
                        </tr>


                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Taxi Start Fare</div>
                                <div className="basic-information-images">
                                    <Image src="/images/taxi-start-fare-image.png" fill alt="Image Describing Taxi Start Fare" />
                                </div>
                            </td>

                            <td className="taxi-start-fare-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1TaxiStartFare)} ${country1TaxiStartFare ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' :(<span className="taxi-start-fare-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country1TaxiStartFare * country1UnitValueInUSD)}`}</span>)}
                            </td>
                            <td className="taxi-start-fare-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2TaxiStartFare)} ${country2TaxiStartFare ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="taxi-start-fare-second-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country2TaxiStartFare * country2UnitValueInUSD)}`}</span>)}
                            </td>
                        </tr>


                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Taxi Rate Per Kilometer</div>
                                <div className="basic-information-images">
                                    <Image src="/images/taxi-rate-per-kilometers-image.png"
                                        fill alt="Image Describing Taxi Rate Per Kilometer" />
                                </div>
                            </td>

                            <td className="taxi-rate-per-kilometers-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1TaxiRatePerKm)} ${country1TaxiRatePerKm ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' :(<span className="taxi-rate-per-kilometers-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country1TaxiRatePerKm * country1UnitValueInUSD)}`}</span>)}
                            </td>
                            <td className="taxi-rate-per-kilometers-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2TaxiRatePerKm)} ${country2TaxiRatePerKm ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="taxi-rate-per-kilometers-second-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country2TaxiRatePerKm * country2UnitValueInUSD)}`}</span>)}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Car Rental Per Day</div>
                                <div className="basic-information-images">
                                    <Image src="/images/car-rental-per-day-image.png" fill alt="Image Describing Car Rental Per Day" />
                                </div>
                            </td>

                            <td className="car-rental-per-day-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1CarRentalPerDay)} ${country1CarRentalPerDay ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' :(<span className="car-rental-per-day-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country1CarRentalPerDay * country1UnitValueInUSD)}`}</span>)}
                            </td>
                            <td className="car-rental-per-day-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2CarRentalPerDay)} ${country2CarRentalPerDay ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="car-rental-per-day-second-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country2CarRentalPerDay * country2UnitValueInUSD)}`}</span>)}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Parking Fees in City Center Per Hour</div>
                                <div className="basic-information-images">
                                    <Image src="/images/parking-fees-inside-city-per-hour-image.png"
                                        fill alt="Image Describing Parking Fees in City Center" />
                                </div>
                            </td>

                            <td className="parking-fees-in-city-center-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1ParkingFeesCityCenterPerHour)} ${country1ParkingFeesCityCenterPerHour ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' :(<span className="parking-fees-in-city-center-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country1ParkingFeesCityCenterPerHour * country1UnitValueInUSD)}`}</span>)}
                            </td>
                            <td className="parking-fees-in-city-center-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2ParkingFeesCityCenterPerHour)} ${country2ParkingFeesCityCenterPerHour ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span
                                    className="parking-fees-in-city-center-second-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country2ParkingFeesCityCenterPerHour * country2UnitValueInUSD)}`}</span>)}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Parking Fees outside City Center Per Hour</div>
                                <div className="basic-information-images">
                                    <Image src="/images/parking-fees-outside-city-per-hour-image.png"
                                        fill alt="Image Describing Parking Fees outside City Center" />
                                </div>
                            </td>

                            <td className="parking-fees-outside-city-center-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1ParkingFeesOutsideCityCenterPerHour)} ${country1ParkingFeesOutsideCityCenterPerHour ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' :(<span
                                    className="parking-fees-outside-city-center-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country1ParkingFeesOutsideCityCenterPerHour * country1UnitValueInUSD)}`}</span>)}
                            </td>
                            <td className="parking-fees-outside-city-center-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2ParkingFeesOutsideCityCenterPerHour)} ${country2ParkingFeesOutsideCityCenterPerHour ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span
                                    className="parking-fees-outside-city-center-second-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(country2ParkingFeesOutsideCityCenterPerHour * country2UnitValueInUSD)}`}</span>)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="paragraph-for-pages-below-table">
                <div className="para-for-pages-single-div">
                    <h3>
                        Is Transportation more expensive in
                        <span className="first-entity-name-pages-paragraph"> {country1} </span> than in
                        <span className="second-entity-name-pages-paragraph"> {country2}</span>?
                    </h3>

                    <p>

                        If you lived in
                        <span className="first-entity-name-pages-paragraph"> {country1}</span>, instead of
                        <span className="second-entity-name-pages-paragraph"> {country2}</span>, you would have
                        to pay
                        <strong>
                            <span className="drinks-cost-calculation"> {costTimes} </span> times </strong> <span
                                className="drinks-cost-more-or-less-calculation"> {moreOrLess} </span>
                        for transportation.
                    </p>
                </div>
            </div>
        </>
    )
}

export default TransportationCost