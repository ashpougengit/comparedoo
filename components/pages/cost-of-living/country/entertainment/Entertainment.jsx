import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { dollarizedCountries } from '@/lib/array-list/dollarizedCountries';
import {
  formatNumberWithCommas,
  formatUSDWithCommas,
} from '@/lib/format/format';
import Image from 'next/image';

function Entertainment({
  costInfo,
  currency,
  unitValueInUSD,
  countryURLCase,
}) {
  const country = costInfo.country;
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
                      src={`/images/${countryURLCase}-map-small.png`}
                      fill
                      alt={`Pictorial representation of map of ${countryURLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {country}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${countryURLCase}-flag-small.png`}
                      fill
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
                {`${formatNumberWithCommas(movieTicket)} ${movieTicket ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="movie-ticket-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    movieTicket * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(theaterTicket)} ${theaterTicket ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="theater-ticket-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    theaterTicket * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(concertTicket)} ${concertTicket ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="concert-ticket-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    concertTicket * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(sportsEventTicket)} ${sportsEventTicket ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="sports-event-ticket-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    sportsEventTicket * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(gymMembership)} ${gymMembership ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="gym-membership-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    gymMembership * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(swimmingPoolAccess)} ${swimmingPoolAccess ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="swimming-pool-access-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    swimmingPoolAccess * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(museumEntry)} ${museumEntry ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="museum-entry-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    museumEntry * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(zooEntry)} ${zooEntry ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="zoo-entry-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    zooEntry * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(amusementParkEntry)} ${amusementParkEntry ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="amusement-park-entry-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    amusementParkEntry * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(bowling)} ${bowling ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="bowling-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    bowling * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(miniGolf)} ${miniGolf ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="mini-golf-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    miniGolf * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(videoGames)} ${videoGames ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="video-games-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    videoGames * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(streamingServices)} ${streamingServices ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="streaming-services-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    streamingServices * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(outdoorEquipmentRental)} ${outdoorEquipmentRental ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="outdoor-equipment-rental-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    outdoorEquipmentRental * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(themeParkAnnualPass)} ${themeParkAnnualPass ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="theme-park-annual-pass-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    themeParkAnnualPass * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Entertainment;
