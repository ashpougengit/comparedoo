import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { formatCost, isDollarized } from '@/lib/format/formatCost';
import Image from 'next/image';

function Entertainment({
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
  const slug1MovieTicket = slug1CostInfo.movieTicket;
  const slug1TheaterTicket = slug1CostInfo.theaterTicket;
  const slug1ConcertTicket = slug1CostInfo.concertTicket;
  const slug1SportsEventTicket = slug1CostInfo.sportsEventTicket;
  const slug1GymMembership = slug1CostInfo.gymMembership;
  const slug1SwimmingPoolAccess = slug1CostInfo.swimmingPoolAccess;
  const slug1MuseumEntry = slug1CostInfo.museumEntry;
  const slug1ZooEntry = slug1CostInfo.zooEntry;
  const slug1AmusementParkEntry = slug1CostInfo.amusementParkEntry;
  const slug1Bowling = slug1CostInfo.bowling;
  const slug1MiniGolf = slug1CostInfo.miniGolf;
  const slug1VideoGames = slug1CostInfo.videoGames;
  const slug1StreamingServices = slug1CostInfo.streamingServices;
  const slug1OutdoorEquipmentRental = slug1CostInfo.outdoorEquipmentRental;
  const slug1ThemeParkAnnualPass = slug1CostInfo.themeParkAnnualPass;
  const slug1TotalCost =
    ((slug1MovieTicket || 0) +
      (slug1TheaterTicket || 0) +
      (slug1ConcertTicket || 0) +
      (slug1SportsEventTicket || 0) +
      (slug1GymMembership || 0) +
      (slug1SwimmingPoolAccess || 0) +
      (slug1MuseumEntry || 0) +
      (slug1ZooEntry || 0) +
      (slug1AmusementParkEntry || 0) +
      (slug1Bowling || 0) +
      (slug1MiniGolf || 0) +
      (slug1VideoGames || 0) +
      (slug1StreamingServices || 0) +
      (slug1OutdoorEquipmentRental || 0) +
      (slug1ThemeParkAnnualPass || 0)) *
    slug1ExchangeRate;

  const slug2MovieTicket = slug2CostInfo.movieTicket;
  const slug2TheaterTicket = slug2CostInfo.theaterTicket;
  const slug2ConcertTicket = slug2CostInfo.concertTicket;
  const slug2SportsEventTicket = slug2CostInfo.sportsEventTicket;
  const slug2GymMembership = slug2CostInfo.gymMembership;
  const slug2SwimmingPoolAccess = slug2CostInfo.swimmingPoolAccess;
  const slug2MuseumEntry = slug2CostInfo.museumEntry;
  const slug2ZooEntry = slug2CostInfo.zooEntry;
  const slug2AmusementParkEntry = slug2CostInfo.amusementParkEntry;
  const slug2Bowling = slug2CostInfo.bowling;
  const slug2MiniGolf = slug2CostInfo.miniGolf;
  const slug2VideoGames = slug2CostInfo.videoGames;
  const slug2StreamingServices = slug2CostInfo.streamingServices;
  const slug2OutdoorEquipmentRental = slug2CostInfo.outdoorEquipmentRental;
  const slug2ThemeParkAnnualPass = slug2CostInfo.themeParkAnnualPass;
  const slug2TotalCost =
    ((slug2MovieTicket || 0) +
      (slug2TheaterTicket || 0) +
      (slug2ConcertTicket || 0) +
      (slug2SportsEventTicket || 0) +
      (slug2GymMembership || 0) +
      (slug2SwimmingPoolAccess || 0) +
      (slug2MuseumEntry || 0) +
      (slug2ZooEntry || 0) +
      (slug2AmusementParkEntry || 0) +
      (slug2Bowling || 0) +
      (slug2MiniGolf || 0) +
      (slug2VideoGames || 0) +
      (slug2StreamingServices || 0) +
      (slug2OutdoorEquipmentRental || 0) +
      (slug2ThemeParkAnnualPass || 0)) *
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
        <h2 className="pages-h2">
          Entertainment and Recreation Cost Comparison
        </h2>
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
                      src={`/images/${slug1URLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Pictorial representation of map of ${slug1URLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {slug1}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${slug1URLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                <div className="all-indicators">Movie Ticket (Single)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/movie-ticket-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Single Movie Ticket"
                  />
                </div>
              </td>

              <td className="movie-ticket-first-entity all-indicator-answers">
                {slug1MovieTicket
                  ? formatCost(
                    slug1MovieTicket,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="movie-ticket-second-entity all-indicator-answers">
                {slug2MovieTicket
                  ? formatCost(
                    slug2MovieTicket,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Single Theater Ticket"
                  />
                </div>
              </td>

              <td className="theater-ticket-first-entity all-indicator-answers">
                {slug1TheaterTicket
                  ? formatCost(
                    slug1TheaterTicket,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="theater-ticket-second-entity all-indicator-answers">
                {slug2TheaterTicket
                  ? formatCost(
                    slug2TheaterTicket,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Single Concert Ticket"
                  />
                </div>
              </td>

              <td className="concert-ticket-first-entity all-indicator-answers">
                {slug1ConcertTicket
                  ? formatCost(
                    slug1ConcertTicket,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="concert-ticket-second-entity all-indicator-answers">
                {slug2ConcertTicket
                  ? formatCost(
                    slug2ConcertTicket,
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
                  Sports Event Ticket (Single)
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/sports-event-ticket-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Single Sports Event Ticket"
                  />
                </div>
              </td>

              <td className="sports-event-ticket-first-entity all-indicator-answers">
                {slug1SportsEventTicket
                  ? formatCost(
                    slug1SportsEventTicket,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="sports-event-ticket-second-entity all-indicator-answers">
                {slug2SportsEventTicket
                  ? formatCost(
                    slug2SportsEventTicket,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Gym Membership"
                  />
                </div>
              </td>

              <td className="gym-membership-first-entity all-indicator-answers">
                {slug1GymMembership
                  ? formatCost(
                    slug1GymMembership,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="gym-membership-second-entity all-indicator-answers">
                {slug2GymMembership
                  ? formatCost(
                    slug2GymMembership,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Swimming Pool Access"
                  />
                </div>
              </td>

              <td className="swimming-pool-access-first-entity all-indicator-answers">
                {slug1SwimmingPoolAccess
                  ? formatCost(
                    slug1SwimmingPoolAccess,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="swimming-pool-access-second-entity all-indicator-answers">
                {slug2SwimmingPoolAccess
                  ? formatCost(
                    slug2SwimmingPoolAccess,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Museum Entry Ticket"
                  />
                </div>
              </td>

              <td className="museum-entry-first-entity all-indicator-answers">
                {slug1MuseumEntry
                  ? formatCost(
                    slug1MuseumEntry,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="museum-entry-second-entity all-indicator-answers">
                {slug2MuseumEntry
                  ? formatCost(
                    slug2MuseumEntry,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Zoo Entry Ticket"
                  />
                </div>
              </td>

              <td className="zoo-entry-first-entity all-indicator-answers">
                {slug1ZooEntry
                  ? formatCost(
                    slug1ZooEntry,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="zoo-entry-second-entity all-indicator-answers">
                {slug2ZooEntry
                  ? formatCost(
                    slug2ZooEntry,
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
                  Amusement Park Entry Ticket
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/amusement-park-entry-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Amusement Park Entry Ticket"
                  />
                </div>
              </td>

              <td className="amusement-park-entry-first-entity all-indicator-answers">
                {slug1AmusementParkEntry
                  ? formatCost(
                    slug1AmusementParkEntry,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="amusement-park-entry-second-entity all-indicator-answers">
                {slug2AmusementParkEntry
                  ? formatCost(
                    slug2AmusementParkEntry,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Bowling"
                  />
                </div>
              </td>

              <td className="bowling-first-entity all-indicator-answers">
                {slug1Bowling
                  ? formatCost(
                    slug1Bowling,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="bowling-second-entity all-indicator-answers">
                {slug2Bowling
                  ? formatCost(
                    slug2Bowling,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Mini Golf"
                  />
                </div>
              </td>

              <td className="mini-golf-first-entity all-indicator-answers">
                {slug1MiniGolf
                  ? formatCost(
                    slug1MiniGolf,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="mini-golf-second-entity all-indicator-answers">
                {slug2MiniGolf
                  ? formatCost(
                    slug2MiniGolf,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Video Games"
                  />
                </div>
              </td>

              <td className="video-games-first-entity all-indicator-answers">
                {slug1VideoGames
                  ? formatCost(
                    slug1VideoGames,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="video-games-second-entity all-indicator-answers">
                {slug2VideoGames
                  ? formatCost(
                    slug2VideoGames,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Streaming Services"
                  />
                </div>
              </td>

              <td className="streaming-services-first-entity all-indicator-answers">
                {slug1StreamingServices
                  ? formatCost(
                    slug1StreamingServices,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="streaming-services-second-entity all-indicator-answers">
                {slug2StreamingServices
                  ? formatCost(
                    slug2StreamingServices,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Outdoor Equipment Rental"
                  />
                </div>
              </td>

              <td className="outdoor-equipment-rental-first-entity all-indicator-answers">
                {slug1OutdoorEquipmentRental
                  ? formatCost(
                    slug1OutdoorEquipmentRental,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="outdoor-equipment-rental-second-entity all-indicator-answers">
                {slug2OutdoorEquipmentRental
                  ? formatCost(
                    slug2OutdoorEquipmentRental,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Theme Park Annual Pass"
                  />
                </div>
              </td>

              <td className="theme-park-annual-pass-first-entity all-indicator-answers">
                {slug1ThemeParkAnnualPass
                  ? formatCost(
                    slug1ThemeParkAnnualPass,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="theme-park-annual-pass-second-entity all-indicator-answers">
                {slug2ThemeParkAnnualPass
                  ? formatCost(
                    slug2ThemeParkAnnualPass,
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
            Does Entertainment and Recreation cost more in
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
            , you would have to pay{' '}
            <strong>
              <span className="entertainment-and-recreation-cost-calculation">
                {costTimes}{' '}
              </span>
              times{' '}
            </strong>
            <span className="entertainment-and-recreation-cost-more-or-less-calculation">
              {moreOrLess}{' '}
            </span>
            for entertainment, recreation and fun activities.
          </p>
        </div>
      </div>
    </>
  );
}

export default Entertainment;
