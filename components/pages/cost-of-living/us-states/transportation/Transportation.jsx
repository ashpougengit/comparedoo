import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { formatNumberWithCommas } from '@/lib/format/format';
import Image from 'next/image';

function Transportation({
  state1CostInfo,
  state2CostInfo,
  state1URLCase,
  state2URLCase,
}) {
  const state1 = state1CostInfo.state;
  const state1PublicTransportPass = state1CostInfo.publicTransportPass;
  const state1SinglePublicTransportTicket =
    state1CostInfo.singlePublicTransportTicket;
  const state1TrainTickets = state1CostInfo.trainTickets;
  const state1AirfareDomestic = state1CostInfo.airfareDomestic;
  const state1TaxiStartFare = state1CostInfo.taxiStartFare;
  const state1TaxiRatePerKm = state1CostInfo.taxiRatePerKm;
  const state1CarRentalPerDay = state1CostInfo.carRentalPerDay;
  const state1ParkingFeesCityCenterPerHour =
    state1CostInfo.parkingFeesCityCenterPerHour;
  const state1ParkingFeesOutsideCityCenterPerHour =
    state1CostInfo.parkingFeesOutsideCityCenterPerHour;
  const state1TotalCost =
    (state1PublicTransportPass || 0) +
    (state1SinglePublicTransportTicket || 0) +
    (state1TrainTickets || 0) +
    (state1AirfareDomestic || 0) +
    (state1TaxiStartFare || 0) +
    (state1TaxiRatePerKm || 0) +
    (state1CarRentalPerDay || 0) +
    (state1ParkingFeesCityCenterPerHour || 0) +
    (state1ParkingFeesOutsideCityCenterPerHour || 0);

  const state2 = state2CostInfo.state;
  const state2PublicTransportPass = state2CostInfo.publicTransportPass;
  const state2SinglePublicTransportTicket =
    state2CostInfo.singlePublicTransportTicket;
  const state2TrainTickets = state2CostInfo.trainTickets;
  const state2AirfareDomestic = state2CostInfo.airfareDomestic;
  const state2TaxiStartFare = state2CostInfo.taxiStartFare;
  const state2TaxiRatePerKm = state2CostInfo.taxiRatePerKm;
  const state2CarRentalPerDay = state2CostInfo.carRentalPerDay;
  const state2ParkingFeesCityCenterPerHour =
    state2CostInfo.parkingFeesCityCenterPerHour;
  const state2ParkingFeesOutsideCityCenterPerHour =
    state2CostInfo.parkingFeesOutsideCityCenterPerHour;
  const state2TotalCost =
    (state2PublicTransportPass || 0) +
    (state2SinglePublicTransportTicket || 0) +
    (state2TrainTickets || 0) +
    (state2AirfareDomestic || 0) +
    (state2TaxiStartFare || 0) +
    (state2TaxiRatePerKm || 0) +
    (state2CarRentalPerDay || 0) +
    (state2ParkingFeesCityCenterPerHour || 0) +
    (state2ParkingFeesOutsideCityCenterPerHour || 0);

  const costTimes =
    state1TotalCost > state2TotalCost
      ? (state1TotalCost / state2TotalCost).toFixed(2)
      : (state2TotalCost / state1TotalCost).toFixed(2);
  const moreOrLess = state1TotalCost > state2TotalCost ? 'more' : 'less';

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
                  Monthly Public Transportation Pass
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/public-transportation-pass-per-month-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Monthly Public Transportation Pass"
                  />
                </div>
              </td>

              <td className="public-transport-pass-first-entity all-indicator-answers">
                {state1PublicTransportPass
                  ? `${formatNumberWithCommas(state1PublicTransportPass)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="public-transport-pass-second-entity all-indicator-answers">
                {state2PublicTransportPass
                  ? `${formatNumberWithCommas(state2PublicTransportPass)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  Single Public Transportation Ticket
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/single-public-transportation-ticket-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Single Public Transportation Ticket"
                  />
                </div>
              </td>

              <td className="single-public-transportation-ticket-first-entity all-indicator-answers">
                {state1SinglePublicTransportTicket
                  ? `${formatNumberWithCommas(
                    state1SinglePublicTransportTicket
                  )} USD`
                  : 'Yet to Update'}
              </td>
              <td className="single-public-transportation-ticket-second-entity all-indicator-answers">
                {state2SinglePublicTransportTicket
                  ? `${formatNumberWithCommas(
                    state2SinglePublicTransportTicket
                  )} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Single Train Ticket</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/train-tickets-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Single Train Ticket"
                  />
                </div>
              </td>

              <td className="single-train-ticket-first-entity all-indicator-answers">
                {state1TrainTickets
                  ? `${formatNumberWithCommas(state1TrainTickets)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="single-train-ticket-second-entity all-indicator-answers">
                {state2TrainTickets
                  ? `${formatNumberWithCommas(state2TrainTickets)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Domestic Airplane Ticket</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/air-fare-domestic.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Domestic Airplane Ticket"
                  />
                </div>
              </td>

              <td className="air-fare-domestic-first-entity all-indicator-answers">
                {state1AirfareDomestic
                  ? `${formatNumberWithCommas(state1AirfareDomestic)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="air-fare-domestic-second-entity all-indicator-answers">
                {state2AirfareDomestic
                  ? `${formatNumberWithCommas(state2AirfareDomestic)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Taxi Start Fare</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/taxi-start-fare-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Taxi Start Fare"
                  />
                </div>
              </td>

              <td className="taxi-start-fare-first-entity all-indicator-answers">
                {state1TaxiStartFare
                  ? `${formatNumberWithCommas(state1TaxiStartFare)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="taxi-start-fare-second-entity all-indicator-answers">
                {state2TaxiStartFare
                  ? `${formatNumberWithCommas(state2TaxiStartFare)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Taxi Rate Per Kilometer</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/taxi-rate-per-kilometers-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Taxi Rate Per Kilometer"
                  />
                </div>
              </td>

              <td className="taxi-rate-per-kilometers-first-entity all-indicator-answers">
                {state1TaxiRatePerKm
                  ? `${formatNumberWithCommas(state1TaxiRatePerKm)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="taxi-rate-per-kilometers-second-entity all-indicator-answers">
                {state2TaxiRatePerKm
                  ? `${formatNumberWithCommas(state2TaxiRatePerKm)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Car Rental Per Day</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/car-rental-per-day-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Car Rental Per Day"
                  />
                </div>
              </td>

              <td className="car-rental-per-day-first-entity all-indicator-answers">
                {state1CarRentalPerDay
                  ? `${formatNumberWithCommas(state1CarRentalPerDay)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="car-rental-per-day-second-entity all-indicator-answers">
                {state2CarRentalPerDay
                  ? `${formatNumberWithCommas(state2CarRentalPerDay)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  Parking Fees in City Center Per Hour
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/parking-fees-inside-city-per-hour-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Parking Fees in City Center"
                  />
                </div>
              </td>

              <td className="parking-fees-in-city-center-first-entity all-indicator-answers">
                {state1ParkingFeesCityCenterPerHour
                  ? `${formatNumberWithCommas(
                    state1ParkingFeesCityCenterPerHour
                  )} USD`
                  : 'Yet to Update'}
              </td>
              <td className="parking-fees-in-city-center-second-entity all-indicator-answers">
                {state2ParkingFeesCityCenterPerHour
                  ? `${formatNumberWithCommas(
                    state2ParkingFeesCityCenterPerHour
                  )} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  Parking Fees outside City Center Per Hour
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/parking-fees-outside-city-per-hour-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Parking Fees outside City Center"
                  />
                </div>
              </td>

              <td className="parking-fees-outside-city-center-first-entity all-indicator-answers">
                {state1ParkingFeesOutsideCityCenterPerHour
                  ? `${formatNumberWithCommas(
                    state1ParkingFeesOutsideCityCenterPerHour
                  )} USD`
                  : 'Yet to Update'}
              </td>
              <td className="parking-fees-outside-city-center-second-entity all-indicator-answers">
                {state2ParkingFeesOutsideCityCenterPerHour
                  ? `${formatNumberWithCommas(
                    state2ParkingFeesOutsideCityCenterPerHour
                  )} USD`
                  : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="paragraph-for-pages-below-table">
        <div className="para-for-pages-single-div">
          <h3>
            Is Transportation more expensive in
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
            If you lived in
            <span className="first-entity-name-pages-paragraph"> {state1}</span>
            , instead of
            <span className="second-entity-name-pages-paragraph">
              {' '}
              {state2}
            </span>
            , you would have to pay
            <strong>
              <span className="drinks-cost-calculation"> {costTimes} </span>{' '}
              times{' '}
            </strong>{' '}
            <span className="drinks-cost-more-or-less-calculation">
              {' '}
              {moreOrLess}{' '}
            </span>
            for transportation.
          </p>
        </div>
      </div>
    </>
  );
}

export default Transportation;
