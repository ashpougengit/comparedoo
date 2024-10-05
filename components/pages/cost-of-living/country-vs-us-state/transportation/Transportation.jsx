import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { formatCost, isDollarized } from '@/lib/format/formatCost';
import Image from 'next/image';

function Transportation({
  slug1,
  slug2,
  value1,
  value2,
  slug1CostInfo,
  slug2CostInfo,
  slug1Currency,
  slug2Currency,
  slug1ExchangeRate,
  slug2ExchangeRate,
  slug1URLCase,
  slug2URLCase,
}) {
  const slug1PublicTransportPass = slug1CostInfo.publicTransportPass;
  const slug1SinglePublicTransportTicket =
    slug1CostInfo.singlePublicTransportTicket;
  const slug1TrainTickets = slug1CostInfo.trainTickets;
  const slug1AirfareDomestic = slug1CostInfo.airfareDomestic;
  const slug1TaxiStartFare = slug1CostInfo.taxiStartFare;
  const slug1TaxiRatePerKm = slug1CostInfo.taxiRatePerKm;
  const slug1CarRentalPerDay = slug1CostInfo.carRentalPerDay;
  const slug1ParkingFeesCityCenterPerHour =
    slug1CostInfo.parkingFeesCityCenterPerHour;
  const slug1ParkingFeesOutsideCityCenterPerHour =
    slug1CostInfo.parkingFeesOutsideCityCenterPerHour;
  const slug1TotalCost =
    ((slug1PublicTransportPass || 0) +
      (slug1SinglePublicTransportTicket || 0) +
      (slug1TrainTickets || 0) +
      (slug1AirfareDomestic || 0) +
      (slug1TaxiStartFare || 0) +
      (slug1TaxiRatePerKm || 0) +
      (slug1CarRentalPerDay || 0) +
      (slug1ParkingFeesCityCenterPerHour || 0) +
      (slug1ParkingFeesOutsideCityCenterPerHour || 0)) *
    slug1ExchangeRate;

  const slug2PublicTransportPass = slug2CostInfo.publicTransportPass;
  const slug2SinglePublicTransportTicket =
    slug2CostInfo.singlePublicTransportTicket;
  const slug2TrainTickets = slug2CostInfo.trainTickets;
  const slug2AirfareDomestic = slug2CostInfo.airfareDomestic;
  const slug2TaxiStartFare = slug2CostInfo.taxiStartFare;
  const slug2TaxiRatePerKm = slug2CostInfo.taxiRatePerKm;
  const slug2CarRentalPerDay = slug2CostInfo.carRentalPerDay;
  const slug2ParkingFeesCityCenterPerHour =
    slug2CostInfo.parkingFeesCityCenterPerHour;
  const slug2ParkingFeesOutsideCityCenterPerHour =
    slug2CostInfo.parkingFeesOutsideCityCenterPerHour;
  const slug2TotalCost =
    ((slug2PublicTransportPass || 0) +
      (slug2SinglePublicTransportTicket || 0) +
      (slug2TrainTickets || 0) +
      (slug2AirfareDomestic || 0) +
      (slug2TaxiStartFare || 0) +
      (slug2TaxiRatePerKm || 0) +
      (slug2CarRentalPerDay || 0) +
      (slug2ParkingFeesCityCenterPerHour || 0) +
      (slug2ParkingFeesOutsideCityCenterPerHour || 0)) *
    slug2ExchangeRate;

  const costTimes =
    slug1TotalCost > slug2TotalCost
      ? (slug1TotalCost / slug2TotalCost).toFixed(2)
      : (slug2TotalCost / slug1TotalCost).toFixed(2);
  const moreOrLess = slug1TotalCost > slug2TotalCost ? 'more' : 'less';

  const isDollarizedSlug1 = isDollarized(value1, slug1);
  const isDollarizedSlug2 = isDollarized(value2, slug2);

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
                      src={`/images/${slug1URLCase}-map-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Pictorial representation of map of ${slug1URLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {slug1}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${slug1URLCase}-flag-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Image illustrating the flag of ${slug1URLCase}`}
                    />
                  </div>
                </div>
              </th>

              <th>
                <div className="heading-map-name-flag">
                  <div className="second-entity-map-pages-comparison">
                    <Image
                      src={`/images/${slug2URLCase}-map-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Pictorial representation of map of ${slug2URLCase}`}
                    />
                  </div>

                  <div className="second-entity-name-pages-comparison">
                    {' '}
                    {slug2}{' '}
                  </div>

                  <div className="second-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${slug2URLCase}-flag-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Image illustrating the flag of ${slug2URLCase}`}
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
                    fill
                    alt="Image Describing Monthly Public Transportation Pass"
                  />
                </div>
              </td>

              <td className="public-transport-pass-first-entity all-indicator-answers">
                {slug1PublicTransportPass
                  ? formatCost(
                    slug1PublicTransportPass,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="public-transport-pass-second-entity all-indicator-answers">
                {slug2PublicTransportPass
                  ? formatCost(
                    slug2PublicTransportPass,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
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
                    fill
                    alt="Image Describing Single Public Transportation Ticket"
                  />
                </div>
              </td>

              <td className="single-public-transportation-ticket-first-entity all-indicator-answers">
                {slug1SinglePublicTransportTicket
                  ? formatCost(
                    slug1SinglePublicTransportTicket,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="single-public-transportation-ticket-second-entity all-indicator-answers">
                {slug2SinglePublicTransportTicket
                  ? formatCost(
                    slug2SinglePublicTransportTicket,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Single Train Ticket</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/train-tickets-image.png"
                    fill
                    alt="Image Describing Single Train Ticket"
                  />
                </div>
              </td>

              <td className="single-train-ticket-first-entity all-indicator-answers">
                {slug1TrainTickets
                  ? formatCost(
                    slug1TrainTickets,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="single-train-ticket-second-entity all-indicator-answers">
                {slug2TrainTickets
                  ? formatCost(
                    slug2TrainTickets,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Domestic Airplane Ticket</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/air-fare-domestic.png"
                    fill
                    alt="Image Describing Domestic Airplane Ticket"
                  />
                </div>
              </td>

              <td className="air-fare-domestic-first-entity all-indicator-answers">
                {slug1AirfareDomestic
                  ? formatCost(
                    slug1AirfareDomestic,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="air-fare-domestic-second-entity all-indicator-answers">
                {slug2AirfareDomestic
                  ? formatCost(
                    slug2AirfareDomestic,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Taxi Start Fare</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/taxi-start-fare-image.png"
                    fill
                    alt="Image Describing Taxi Start Fare"
                  />
                </div>
              </td>

              <td className="taxi-start-fare-first-entity all-indicator-answers">
                {slug1TaxiStartFare
                  ? formatCost(
                    slug1TaxiStartFare,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="taxi-start-fare-second-entity all-indicator-answers">
                {slug2TaxiStartFare
                  ? formatCost(
                    slug2TaxiStartFare,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Taxi Rate Per Kilometer</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/taxi-rate-per-kilometers-image.png"
                    fill
                    alt="Image Describing Taxi Rate Per Kilometer"
                  />
                </div>
              </td>

              <td className="taxi-rate-per-kilometers-first-entity all-indicator-answers">
                {slug1TaxiRatePerKm
                  ? formatCost(
                    slug1TaxiRatePerKm,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="taxi-rate-per-kilometers-second-entity all-indicator-answers">
                {slug2TaxiRatePerKm
                  ? formatCost(
                    slug2TaxiRatePerKm,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Car Rental Per Day</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/car-rental-per-day-image.png"
                    fill
                    alt="Image Describing Car Rental Per Day"
                  />
                </div>
              </td>

              <td className="car-rental-per-day-first-entity all-indicator-answers">
                {slug1CarRentalPerDay
                  ? formatCost(
                    slug1CarRentalPerDay,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="car-rental-per-day-second-entity all-indicator-answers">
                {slug2CarRentalPerDay
                  ? formatCost(
                    slug2CarRentalPerDay,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
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
                    fill
                    alt="Image Describing Parking Fees in City Center"
                  />
                </div>
              </td>

              <td className="parking-fees-in-city-center-first-entity all-indicator-answers">
                {slug1ParkingFeesCityCenterPerHour
                  ? formatCost(
                    slug1ParkingFeesCityCenterPerHour,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="parking-fees-in-city-center-second-entity all-indicator-answers">
                {slug2ParkingFeesCityCenterPerHour
                  ? formatCost(
                    slug2ParkingFeesCityCenterPerHour,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
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
                    fill
                    alt="Image Describing Parking Fees outside City Center"
                  />
                </div>
              </td>

              <td className="parking-fees-outside-city-center-first-entity all-indicator-answers">
                {slug1ParkingFeesOutsideCityCenterPerHour
                  ? formatCost(
                    slug1ParkingFeesOutsideCityCenterPerHour,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="parking-fees-outside-city-center-second-entity all-indicator-answers">
                {slug2ParkingFeesOutsideCityCenterPerHour
                  ? formatCost(
                    slug2ParkingFeesOutsideCityCenterPerHour,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
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
            <span className="first-entity-name-pages-paragraph"> {slug1} </span>
            than in
            <span className="second-entity-name-pages-paragraph"> {slug2}</span>
            ?
          </h3>

          <p>
            If you lived in
            <span className="first-entity-name-pages-paragraph"> {slug1}</span>,
            instead of
            <span className="second-entity-name-pages-paragraph"> {slug2}</span>
            , you would have to pay
            <strong>
              <span className="drinks-cost-calculation"> {costTimes} </span>
              times
            </strong>
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
