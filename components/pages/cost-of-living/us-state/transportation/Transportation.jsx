import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { formatNumberWithCommas } from '@/lib/format/format';
import Image from 'next/image';

function Transportation({ costInfo, stateURLCase }) {
  const state = costInfo.state;
  const publicTransportPass = costInfo.publicTransportPass;
  const singlePublicTransportTicket = costInfo.singlePublicTransportTicket;
  const trainTickets = costInfo.trainTickets;
  const airfareDomestic = costInfo.airfareDomestic;
  const taxiStartFare = costInfo.taxiStartFare;
  const taxiRatePerKm = costInfo.taxiRatePerKm;
  const carRentalPerDay = costInfo.carRentalPerDay;
  const parkingFeesCityCenterPerHour = costInfo.parkingFeesCityCenterPerHour;
  const parkingFeesOutsideCityCenterPerHour =
    costInfo.parkingFeesOutsideCityCenterPerHour;

  return (
    <>
      <AdsHeaderBanner />

      <div className="geographical-map">
        <h2 className="pages-h2">Transportation Cost</h2>
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
                      src={`/images/${stateURLCase}-map-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Pictorial representation of map of ${stateURLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {state}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${stateURLCase}-flag-small.png`}
                      layout="fill"
                      objectFit="contain"
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
                {publicTransportPass
                  ? `${formatNumberWithCommas(publicTransportPass)} USD`
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
                {singlePublicTransportTicket
                  ? `${formatNumberWithCommas(singlePublicTransportTicket)} USD`
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
                {trainTickets
                  ? `${formatNumberWithCommas(trainTickets)} USD`
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
                {airfareDomestic
                  ? `${formatNumberWithCommas(airfareDomestic)} USD`
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
                {taxiStartFare
                  ? `${formatNumberWithCommas(taxiStartFare)} USD`
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
                {taxiRatePerKm
                  ? `${formatNumberWithCommas(taxiRatePerKm)} USD`
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
                {carRentalPerDay
                  ? `${formatNumberWithCommas(carRentalPerDay)} USD`
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
                {parkingFeesCityCenterPerHour
                  ? `${formatNumberWithCommas(
                    parkingFeesCityCenterPerHour
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
                    fill
                    alt="Image Describing Parking Fees outside City Center"
                  />
                </div>
              </td>

              <td className="parking-fees-outside-city-center-first-entity all-indicator-answers">
                {parkingFeesOutsideCityCenterPerHour
                  ? `${formatNumberWithCommas(
                    parkingFeesOutsideCityCenterPerHour
                  )} USD`
                  : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Transportation;
