import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { formatNumberWithCommas } from '@/lib/format/format';
import Image from 'next/image';

function Entertainment({ costInfo, stateURLCase }) {
  const state = costInfo.state;
  const movieTicket = costInfo.movieTicket;
  const theaterTicket = costInfo.theaterTicket;
  const concertTicket = costInfo.concertTicket;
  const sportsEventTicket = costInfo.sportsEventTicket;
  const gymMembership = costInfo.gymMembership;
  const swimmingPoolAccess = costInfo.swimmingPoolAccess;
  const museumEntry = costInfo.museumEntry;
  const zooEntry = costInfo.zooEntry;
  const amusementParkEntry = costInfo.amusementParkEntry;
  const bowling = costInfo.bowling;
  const miniGolf = costInfo.miniGolf;
  const videoGames = costInfo.videoGames;
  const streamingServices = costInfo.streamingServices;
  const outdoorEquipmentRental = costInfo.outdoorEquipmentRental;
  const themeParkAnnualPass = costInfo.themeParkAnnualPass;

  return (
    <>
      <AdsHeaderBanner />

      <div className="geographical-map">
        <h2 className="pages-h2">Entertainment and Recreation Cost</h2>
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
                <div className="all-indicators">Movie Ticket (Single)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/movie-ticket-image.png"
                    fill
                    alt="Image Describing Single Movie Ticket"
                  />
                </div>
              </td>

              <td className="movie-ticket-first-entity all-indicator-answers">
                {movieTicket
                  ? `${formatNumberWithCommas(movieTicket)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Theater Ticket (Single)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/theater-ticket-image.png"
                    fill
                    alt="Image Describing Single Theater Ticket"
                  />
                </div>
              </td>

              <td className="theater-ticket-first-entity all-indicator-answers">
                {theaterTicket
                  ? `${formatNumberWithCommas(theaterTicket)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Concert Ticket (Single)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/concert-ticket-image.png"
                    fill
                    alt="Image Describing Single Concert Ticket"
                  />
                </div>
              </td>

              <td className="concert-ticket-first-entity all-indicator-answers">
                {concertTicket
                  ? `${formatNumberWithCommas(concertTicket)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  Sports Event Ticket (Single)
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/sports-event-ticket-image.png"
                    fill
                    alt="Image Describing Single Sports Event Ticket"
                  />
                </div>
              </td>

              <td className="sports-event-ticket-first-entity all-indicator-answers">
                {sportsEventTicket
                  ? `${formatNumberWithCommas(sportsEventTicket)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Gym Membership</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/gym-membership-image.png"
                    fill
                    alt="Image Describing Gym Membership"
                  />
                </div>
              </td>

              <td className="gym-membership-first-entity all-indicator-answers">
                {gymMembership
                  ? `${formatNumberWithCommas(gymMembership)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Swimming Pool Access</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/swimming-pool-access-image.png"
                    fill
                    alt="Image Describing Swimming Pool Access"
                  />
                </div>
              </td>

              <td className="swimming-pool-access-first-entity all-indicator-answers">
                {swimmingPoolAccess
                  ? `${formatNumberWithCommas(swimmingPoolAccess)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Museum Entry Ticket</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/museum-entry-image.png"
                    fill
                    alt="Image Describing Museum Entry Ticket"
                  />
                </div>
              </td>

              <td className="museum-entry-first-entity all-indicator-answers">
                {museumEntry
                  ? `${formatNumberWithCommas(museumEntry)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Zoo Entry Ticket</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/zoo-entry-image.png"
                    fill
                    alt="Image Describing Zoo Entry Ticket"
                  />
                </div>
              </td>

              <td className="zoo-entry-first-entity all-indicator-answers">
                {zooEntry
                  ? `${formatNumberWithCommas(zooEntry)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  Amusement Park Entry Ticket
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/amusement-park-entry-image.png"
                    fill
                    alt="Image Describing Amusement Park Entry Ticket"
                  />
                </div>
              </td>

              <td className="amusement-park-entry-first-entity all-indicator-answers">
                {amusementParkEntry
                  ? `${formatNumberWithCommas(amusementParkEntry)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Bowling</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/bowling-image.png"
                    fill
                    alt="Image Describing Bowling"
                  />
                </div>
              </td>

              <td className="bowling-first-entity all-indicator-answers">
                {bowling
                  ? `${formatNumberWithCommas(bowling)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Mini Golf</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/mini-golf-image.png"
                    fill
                    alt="Image Describing Mini Golf"
                  />
                </div>
              </td>

              <td className="mini-golf-first-entity all-indicator-answers">
                {miniGolf
                  ? `${formatNumberWithCommas(miniGolf)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Video Games</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/video-games-image.png"
                    fill
                    alt="Image Describing Video Games"
                  />
                </div>
              </td>

              <td className="video-games-first-entity all-indicator-answers">
                {videoGames
                  ? `${formatNumberWithCommas(videoGames)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Streaming Services</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/streaming-services-image.png"
                    fill
                    alt="Image Describing Streaming Services"
                  />
                </div>
              </td>

              <td className="streaming-services-first-entity all-indicator-answers">
                {streamingServices
                  ? `${formatNumberWithCommas(streamingServices)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Outdoor Equipment Rental</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/outdoor-equipment-rental-image.png"
                    fill
                    alt="Image Describing Outdoor Equipment Rental"
                  />
                </div>
              </td>

              <td className="outdoor-equipment-rental-first-entity all-indicator-answers">
                {outdoorEquipmentRental
                  ? `${formatNumberWithCommas(outdoorEquipmentRental)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Theme Park Annual Pass</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/theme-park-annual-pass-image.png"
                    fill
                    alt="Image Describing Theme Park Annual Pass"
                  />
                </div>
              </td>

              <td className="theme-park-annual-pass-first-entity all-indicator-answers">
                {themeParkAnnualPass
                  ? `${formatNumberWithCommas(themeParkAnnualPass)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Entertainment;
