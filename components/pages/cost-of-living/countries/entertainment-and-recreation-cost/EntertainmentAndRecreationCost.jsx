import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { dollarizedCountries } from "@/lib/array-list/dollarizedCountries"
import { formatNumberWithCommas, formatUSDWithCommas } from "@/lib/format/format"
import Image from "next/image"

function EntertainmentAndRecreationCost({ country1CostInfo, country2CostInfo, country1Currency, country2Currency, country1UnitValueInUSD, country2UnitValueInUSD, country1URLCase, country2URLCase }) {
    const country1 = country1CostInfo.country
    const country1MovieTicket = country1CostInfo.movieTicket
    const country1TheaterTicket = country1CostInfo.theaterTicket
    const country1ConcertTicket = country1CostInfo.concertTicket
    const country1SportsEventTicket = country1CostInfo.sportsEventTicket
    const country1GymMembership = country1CostInfo.gymMembership
    const country1SwimmingPoolAccess = country1CostInfo.swimmingPoolAccess
    const country1MuseumEntry = country1CostInfo.museumEntry
    const country1ZooEntry = country1CostInfo.zooEntry
    const country1AmusementParkEntry = country1CostInfo.amusementParkEntry
    const country1Bowling = country1CostInfo.bowling
    const country1MiniGolf = country1CostInfo.miniGolf
    const country1VideoGames = country1CostInfo.videoGames
    const country1StreamingServices = country1CostInfo.streamingServices
    const country1OutdoorEquipmentRental = country1CostInfo.outdoorEquipmentRental
    const country1ThemeParkAnnualPass = country1CostInfo.themeParkAnnualPass
    const country1TotalCost = ((country1MovieTicket || 0) + (country1TheaterTicket || 0) + (country1ConcertTicket || 0) + (country1SportsEventTicket || 0) + (country1GymMembership || 0) + (country1SwimmingPoolAccess || 0) + (country1MuseumEntry || 0) + (country1ZooEntry || 0) + (country1AmusementParkEntry || 0) + (country1Bowling || 0) + (country1MiniGolf || 0) + (country1VideoGames || 0) + (country1StreamingServices || 0) + (country1OutdoorEquipmentRental || 0) + (country1ThemeParkAnnualPass || 0)) * country1UnitValueInUSD

    const country2 = country2CostInfo.country
    const country2MovieTicket = country2CostInfo.movieTicket
    const country2TheaterTicket = country2CostInfo.theaterTicket
    const country2ConcertTicket = country2CostInfo.concertTicket
    const country2SportsEventTicket = country2CostInfo.sportsEventTicket
    const country2GymMembership = country2CostInfo.gymMembership
    const country2SwimmingPoolAccess = country2CostInfo.swimmingPoolAccess
    const country2MuseumEntry = country2CostInfo.museumEntry
    const country2ZooEntry = country2CostInfo.zooEntry
    const country2AmusementParkEntry = country2CostInfo.amusementParkEntry
    const country2Bowling = country2CostInfo.bowling
    const country2MiniGolf = country2CostInfo.miniGolf
    const country2VideoGames = country2CostInfo.videoGames
    const country2StreamingServices = country2CostInfo.streamingServices
    const country2OutdoorEquipmentRental = country2CostInfo.outdoorEquipmentRental
    const country2ThemeParkAnnualPass = country2CostInfo.themeParkAnnualPass
    const country2TotalCost = ((country2MovieTicket || 0) + (country2TheaterTicket || 0) + (country2ConcertTicket || 0) + (country2SportsEventTicket || 0) + (country2GymMembership || 0) + (country2SwimmingPoolAccess || 0) + (country2MuseumEntry || 0) + (country2ZooEntry || 0) + (country2AmusementParkEntry || 0) + (country2Bowling || 0) + (country2MiniGolf || 0) + (country2VideoGames || 0) + (country2StreamingServices || 0) + (country2OutdoorEquipmentRental || 0) + (country2ThemeParkAnnualPass || 0)) * country2UnitValueInUSD

    const costTimes = country1TotalCost > country2TotalCost ? (country1TotalCost / country2TotalCost).toFixed(2) : (country2TotalCost / country1TotalCost).toFixed(2)
    const moreOrLess = country1TotalCost > country2TotalCost ? 'more' : 'less'

    return (
        <>
            <AdsHeaderBanner />

            <div className="geographical-map">
                <h2 className="pages-h2">Entertainment and Recreation Cost Comparison</h2>
            </div>

            <div className="basic-information-comparison-div1">
                <table className="indicators-first-entity-and-second-entity-div1">
                    <thead>
                        <tr className="first-tr">
                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="right-indicator">
                                        <Image src="/images/indicators-right-image.png" fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            alt="Image representing an indicator" />
                                    </div>

                                    <div className="indicator-text">Indicators</div>

                                    <div className="left-indicator">
                                        <Image src="/images/indicators-left-image.png" fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            alt="Image illustrating an indicator" />
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="first-entity-map-pages-comparison">
                                        <Image src={`/images/${country1URLCase}-map-small.png`} fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            alt={`Pictorial representation of map of ${country1URLCase}`} />
                                    </div>

                                    <div className="first-entity-name-pages-comparison">{country1}</div>

                                    <div className="first-entity-flag-pages-comparison">
                                        <Image src={`/images/${country1URLCase}-flag-small.png`} fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            alt={`Image illustrating the flag of ${country1URLCase}`} />
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="second-entity-map-pages-comparison">
                                        <Image src={`/images/${country2URLCase}-map-small.png`} fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            alt={`Pictorial representation of map of ${country2URLCase}`} />
                                    </div>

                                    <div className="second-entity-name-pages-comparison"> {country2} </div>

                                    <div className="second-entity-flag-pages-comparison">
                                        <Image src={`/images/${country2URLCase}-flag-small.png`} fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            alt={`Image illustrating the flag of ${country2URLCase}`} />
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
                                    <Image src="/images/movie-ticket-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image Describing Single Movie Ticket" />
                                </div>
                            </td>

                            <td className="movie-ticket-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1MovieTicket)} ${country1MovieTicket ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="movie-ticket-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country1MovieTicket * country1UnitValueInUSD)})`}</span>)}
                            </td>
                            <td className="movie-ticket-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2MovieTicket)} ${country2MovieTicket ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="movie-ticket-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country2MovieTicket * country2UnitValueInUSD)})`}</span>)}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Theater Ticket (Single)</div>
                                <div className="basic-information-images">
                                    <Image src="/images/theater-ticket-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image Describing Single Theater Ticket" />
                                </div>
                            </td>

                            <td className="theater-ticket-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1TheaterTicket)} ${country1TheaterTicket ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="theater-ticket-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country1TheaterTicket * country1UnitValueInUSD)})`}</span>)}
                            </td>
                            <td className="theater-ticket-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2TheaterTicket)} ${country2TheaterTicket ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="theater-ticket-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country2TheaterTicket * country2UnitValueInUSD)})`}</span>)}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Concert Ticket (Single)</div>
                                <div className="basic-information-images">
                                    <Image src="/images/concert-ticket-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image Describing Single Concert Ticket" />
                                </div>
                            </td>

                            <td className="concert-ticket-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1ConcertTicket)} ${country1ConcertTicket ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="concert-ticket-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country1ConcertTicket * country1UnitValueInUSD)})`}</span>)}
                            </td>
                            <td className="concert-ticket-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2ConcertTicket)} ${country2ConcertTicket ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="concert-ticket-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country2ConcertTicket * country2UnitValueInUSD)})`}</span>)}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Sports Event Ticket (Single)</div>
                                <div className="basic-information-images">
                                    <Image src="/images/sports-event-ticket-image.png"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image Describing Single Sports Event Ticket" />
                                </div>
                            </td>

                            <td className="sports-event-ticket-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1SportsEventTicket)} ${country1SportsEventTicket ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="sports-event-ticket-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country1SportsEventTicket * country1UnitValueInUSD)})`}</span>)}
                            </td>
                            <td className="sports-event-ticket-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2SportsEventTicket)} ${country2SportsEventTicket ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="sports-event-ticket-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country2SportsEventTicket * country2UnitValueInUSD)})`}</span>)}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Gym Membership</div>
                                <div className="basic-information-images">
                                    <Image src="/images/gym-membership-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image Describing Gym Membership" />
                                </div>
                            </td>

                            <td className="gym-membership-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1GymMembership)} ${country1GymMembership ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="gym-membership-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country1GymMembership * country1UnitValueInUSD)})`}</span>)}
                            </td>
                            <td className="gym-membership-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2GymMembership)} ${country2GymMembership ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="gym-membership-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country2GymMembership * country2UnitValueInUSD)})`}</span>)}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Swimming Pool Access</div>
                                <div className="basic-information-images">
                                    <Image src="/images/swimming-pool-access-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image Describing Swimming Pool Access" />
                                </div>
                            </td>

                            <td className="swimming-pool-access-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1SwimmingPoolAccess)} ${country1SwimmingPoolAccess ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="swimming-pool-access-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country1SwimmingPoolAccess * country1UnitValueInUSD)})`}</span>)}
                            </td>
                            <td className="swimming-pool-access-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2SwimmingPoolAccess)} ${country2SwimmingPoolAccess ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="swimming-pool-access-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country2SwimmingPoolAccess * country2UnitValueInUSD)})`}</span>)}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Museum Entry Ticket</div>
                                <div className="basic-information-images">
                                    <Image src="/images/museum-entry-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image Describing Museum Entry Ticket" />
                                </div>
                            </td>

                            <td className="museum-entry-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1MuseumEntry)} ${country1MuseumEntry ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="museum-entry-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country1MuseumEntry * country1UnitValueInUSD)})`}</span>)}
                            </td>
                            <td className="museum-entry-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2MuseumEntry)} ${country2MuseumEntry ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="museum-entry-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country2MuseumEntry * country2UnitValueInUSD)})`}</span>)}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Zoo Entry Ticket</div>
                                <div className="basic-information-images">
                                    <Image src="/images/zoo-entry-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image Describing Zoo Entry Ticket" />
                                </div>
                            </td>

                            <td className="zoo-entry-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1ZooEntry)} ${country1ZooEntry ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="zoo-entry-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country1ZooEntry * country1UnitValueInUSD)})`}</span>)}
                            </td>
                            <td className="zoo-entry-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2ZooEntry)} ${country2ZooEntry ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="zoo-entry-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country2ZooEntry * country2UnitValueInUSD)})`}</span>)}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Amusement Park Entry Ticket</div>
                                <div className="basic-information-images">
                                    <Image src="/images/amusement-park-entry-image.png"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image Describing Amusement Park Entry Ticket" />
                                </div>
                            </td>

                            <td className="amusement-park-entry-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1AmusementParkEntry)} ${country1AmusementParkEntry ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="amusement-park-entry-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country1AmusementParkEntry * country1UnitValueInUSD)})`}</span>)}
                            </td>
                            <td className="amusement-park-entry-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2AmusementParkEntry)} ${country2AmusementParkEntry ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="amusement-park-entry-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country2AmusementParkEntry * country2UnitValueInUSD)})`}</span>)}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Bowling</div>
                                <div className="basic-information-images">
                                    <Image src="/images/bowling-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image Describing Bowling" />
                                </div>
                            </td>

                            <td className="bowling-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1Bowling)} ${country1Bowling ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="bowling-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country1Bowling * country1UnitValueInUSD)})`}</span>)}
                            </td>
                            <td className="bowling-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2Bowling)} ${country2Bowling ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="bowling-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country2Bowling * country2UnitValueInUSD)})`}</span>)}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Mini Golf</div>
                                <div className="basic-information-images">
                                    <Image src="/images/mini-golf-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image Describing Mini Golf" />
                                </div>
                            </td>

                            <td className="mini-golf-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1MiniGolf)} ${country1MiniGolf ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="mini-golf-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country1MiniGolf * country1UnitValueInUSD)})`}</span>)}
                            </td>
                            <td className="mini-golf-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2MiniGolf)} ${country2MiniGolf ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="mini-golf-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country2MiniGolf * country2UnitValueInUSD)})`}</span>)}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Video Games</div>
                                <div className="basic-information-images">
                                    <Image src="/images/video-games-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image Describing Video Games" />
                                </div>
                            </td>

                            <td className="video-games-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1VideoGames)} ${country1VideoGames ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="video-games-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country1VideoGames * country1UnitValueInUSD)})`}</span>)}
                            </td>
                            <td className="video-games-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2VideoGames)} ${country2VideoGames ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="video-games-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country2VideoGames * country2UnitValueInUSD)})`}</span>)}
                            </td>
                        </tr>


                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Streaming Services</div>
                                <div className="basic-information-images">
                                    <Image src="/images/streaming-services-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image Describing Streaming Services" />
                                </div>
                            </td>

                            <td className="streaming-services-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1StreamingServices)} ${country1StreamingServices ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="streaming-services-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country1StreamingServices * country1UnitValueInUSD)})`}</span>)}
                            </td>
                            <td className="streaming-services-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2StreamingServices)} ${country2StreamingServices ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="streaming-services-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country2StreamingServices * country2UnitValueInUSD)})`}</span>)}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Outdoor Equipment Rental</div>
                                <div className="basic-information-images">
                                    <Image src="/images/outdoor-equipment-rental-image.png"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image Describing Outdoor Equipment Rental" />
                                </div>
                            </td>

                            <td className="outdoor-equipment-rental-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1OutdoorEquipmentRental)} ${country1OutdoorEquipmentRental ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="outdoor-equipment-rental-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country1OutdoorEquipmentRental * country1UnitValueInUSD)})`}</span>)}
                            </td>
                            <td className="outdoor-equipment-rental-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2OutdoorEquipmentRental)} ${country2OutdoorEquipmentRental ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="outdoor-equipment-rental-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country2OutdoorEquipmentRental * country2UnitValueInUSD)})`}</span>)}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Theme Park Annual Pass</div>
                                <div className="basic-information-images">
                                    <Image src="/images/theme-park-annual-pass-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image Describing Theme Park Annual Pass" />
                                </div>
                            </td>

                            <td className="theme-park-annual-pass-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1ThemeParkAnnualPass)} ${country1ThemeParkAnnualPass ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="theme-park-annual-pass-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country1ThemeParkAnnualPass * country1UnitValueInUSD)})`}</span>)}
                            </td>
                            <td className="theme-park-annual-pass-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2ThemeParkAnnualPass)} ${country2ThemeParkAnnualPass ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="theme-park-annual-pass-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country2ThemeParkAnnualPass * country2UnitValueInUSD)})`}</span>)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="paragraph-for-pages-below-table">
                <div className="para-for-pages-single-div">
                    <h3>
                        Does Entertainment and Recreation cost more in
                        <span className="first-entity-name-pages-paragraph"> {' '}{country1}{' '} </span> than in
                        <span className="second-entity-name-pages-paragraph">{' '} {country2}</span>?
                    </h3>

                    <p>

                        If you lived in
                        <span className="first-entity-name-pages-paragraph">{' '} {country1}</span>, instead of
                        <span className="second-entity-name-pages-paragraph">{' '} {country2}</span>, you would have
                        to pay
                        <strong>
                            <span className="entertainment-and-recreation-cost-calculation"> {' '}{costTimes}{' '} </span> times </strong> <span
                                className="entertainment-and-recreation-cost-more-or-less-calculation">{' '} {moreOrLess} {' '}</span>
                        for entertainment, recreation and fun activities.
                    </p>
                </div>
            </div>
        </>
    )
}

export default EntertainmentAndRecreationCost