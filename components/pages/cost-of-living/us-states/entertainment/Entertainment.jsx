import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { formatNumberWithCommas } from "@/lib/format/format"
import Image from "next/image"

function Entertainment({ state1CostInfo, state2CostInfo, state1LowerCase, state2LowerCase }) {
    const state1 = state1CostInfo.state
    const state1MovieTicket = state1CostInfo.movieTicket
    const state1TheaterTicket = state1CostInfo.theaterTicket
    const state1ConcertTicket = state1CostInfo.concertTicket
    const state1SportsEventTicket = state1CostInfo.sportsEventTicket
    const state1GymMembership = state1CostInfo.gymMembership
    const state1SwimmingPoolAccess = state1CostInfo.swimmingPoolAccess
    const state1MuseumEntry = state1CostInfo.museumEntry
    const state1ZooEntry = state1CostInfo.zooEntry
    const state1AmusementParkEntry = state1CostInfo.amusementParkEntry
    const state1Bowling = state1CostInfo.bowling
    const state1MiniGolf = state1CostInfo.miniGolf
    const state1VideoGames = state1CostInfo.videoGames
    const state1StreamingServices = state1CostInfo.streamingServices
    const state1OutdoorEquipmentRental = state1CostInfo.outdoorEquipmentRental
    const state1ThemeParkAnnualPass = state1CostInfo.themeParkAnnualPass
    const state1TotalCost = (state1MovieTicket || 0) + (state1TheaterTicket || 0) + (state1ConcertTicket || 0) + (state1SportsEventTicket || 0) + (state1GymMembership || 0) + (state1SwimmingPoolAccess || 0) + (state1MuseumEntry || 0) + (state1ZooEntry || 0) + (state1AmusementParkEntry || 0) + (state1Bowling || 0) + (state1MiniGolf || 0) + (state1VideoGames || 0) + (state1StreamingServices || 0) + (state1OutdoorEquipmentRental || 0) + (state1ThemeParkAnnualPass || 0)

    const state2 = state2CostInfo.state
    const state2MovieTicket = state2CostInfo.movieTicket
    const state2TheaterTicket = state2CostInfo.theaterTicket
    const state2ConcertTicket = state2CostInfo.concertTicket
    const state2SportsEventTicket = state2CostInfo.sportsEventTicket
    const state2GymMembership = state2CostInfo.gymMembership
    const state2SwimmingPoolAccess = state2CostInfo.swimmingPoolAccess
    const state2MuseumEntry = state2CostInfo.museumEntry
    const state2ZooEntry = state2CostInfo.zooEntry
    const state2AmusementParkEntry = state2CostInfo.amusementParkEntry
    const state2Bowling = state2CostInfo.bowling
    const state2MiniGolf = state2CostInfo.miniGolf
    const state2VideoGames = state2CostInfo.videoGames
    const state2StreamingServices = state2CostInfo.streamingServices
    const state2OutdoorEquipmentRental = state2CostInfo.outdoorEquipmentRental
    const state2ThemeParkAnnualPass = state2CostInfo.themeParkAnnualPass
    const state2TotalCost = (state2MovieTicket || 0) + (state2TheaterTicket || 0) + (state2ConcertTicket || 0) + (state2SportsEventTicket || 0) + (state2GymMembership || 0) + (state2SwimmingPoolAccess || 0) + (state2MuseumEntry || 0) + (state2ZooEntry || 0) + (state2AmusementParkEntry || 0) + (state2Bowling || 0) + (state2MiniGolf || 0) + (state2VideoGames || 0) + (state2StreamingServices || 0) + (state2OutdoorEquipmentRental || 0) + (state2ThemeParkAnnualPass || 0)

    const costTimes = state1TotalCost > state2TotalCost ? (state1TotalCost / state2TotalCost).toFixed(2) : (state2TotalCost / state1TotalCost).toFixed(2)
    const moreOrLess = state1TotalCost > state2TotalCost ? 'more' : 'less'

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
                                        <Image src="/images/indicators-right-image.png"layout="fill"
objectFit="contain"alt="Image representing an indicator" />
                                    </div>

                                    <div className="indicator-text">Indicators</div>

                                    <div className="left-indicator">
                                        <Image src="/images/indicators-left-image.png"layout="fill"
objectFit="contain"alt="Image illustrating an indicator" />
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
                                <div className="all-indicators">Movie Ticket (Single)</div>
                                <div className="basic-information-images">
                                    <Image src="/images/movie-ticket-image.png"layout="fill"
objectFit="contain"alt="Image Describing Single Movie Ticket" />
                                </div>
                            </td>

                            <td className="movie-ticket-first-entity all-indicator-answers">
                                {state1MovieTicket ? `${formatNumberWithCommas(state1MovieTicket)} USD` : 'Yet to Update'}
                            </td>
                            <td className="movie-ticket-second-entity all-indicator-answers">
                                {state2MovieTicket ? `${formatNumberWithCommas(state2MovieTicket)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Theater Ticket (Single)</div>
                                <div className="basic-information-images">
                                    <Image src="/images/theater-ticket-image.png"layout="fill"
objectFit="contain"alt="Image Describing Single Theater Ticket" />
                                </div>
                            </td>

                            <td className="theater-ticket-first-entity all-indicator-answers">
                                {state1TheaterTicket ? `${formatNumberWithCommas(state1TheaterTicket)} USD` : 'Yet to Update'}
                            </td>
                            <td className="theater-ticket-second-entity all-indicator-answers">
                                {state2TheaterTicket ? `${formatNumberWithCommas(state2TheaterTicket)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Concert Ticket (Single)</div>
                                <div className="basic-information-images">
                                    <Image src="/images/concert-ticket-image.png"layout="fill"
objectFit="contain"alt="Image Describing Single Concert Ticket" />
                                </div>
                            </td>

                            <td className="concert-ticket-first-entity all-indicator-answers">
                                {state1ConcertTicket ? `${formatNumberWithCommas(state1ConcertTicket)} USD` : 'Yet to Update'}
                            </td>
                            <td className="concert-ticket-second-entity all-indicator-answers">
                                {state2ConcertTicket ? `${formatNumberWithCommas(state2ConcertTicket)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Sports Event Ticket (Single)</div>
                                <div className="basic-information-images">
                                    <Image src="/images/sports-event-ticket-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing Single Sports Event Ticket" />
                                </div>
                            </td>

                            <td className="sports-event-ticket-first-entity all-indicator-answers">
                                {state1SportsEventTicket ? `${formatNumberWithCommas(state1SportsEventTicket)} USD` : 'Yet to Update'}
                            </td>
                            <td className="sports-event-ticket-second-entity all-indicator-answers">
                                {state2SportsEventTicket ? `${formatNumberWithCommas(state2SportsEventTicket)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Gym Membership</div>
                                <div className="basic-information-images">
                                    <Image src="/images/gym-membership-image.png"layout="fill"
objectFit="contain"alt="Image Describing Gym Membership" />
                                </div>
                            </td>

                            <td className="gym-membership-first-entity all-indicator-answers">
                                {state1GymMembership ? `${formatNumberWithCommas(state1GymMembership)} USD` : 'Yet to Update'}
                            </td>
                            <td className="gym-membership-second-entity all-indicator-answers">
                                {state2GymMembership ? `${formatNumberWithCommas(state2GymMembership)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Swimming Pool Access</div>
                                <div className="basic-information-images">
                                    <Image src="/images/swimming-pool-access-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing Swimming Pool Access" />
                                </div>
                            </td>

                            <td className="swimming-pool-access-first-entity all-indicator-answers">
                                {state1SwimmingPoolAccess ? `${formatNumberWithCommas(state1SwimmingPoolAccess)} USD` : 'Yet to Update'}
                            </td>
                            <td className="swimming-pool-access-second-entity all-indicator-answers">
                                {state2SwimmingPoolAccess ? `${formatNumberWithCommas(state2SwimmingPoolAccess)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Museum Entry Ticket</div>
                                <div className="basic-information-images">
                                    <Image src="/images/museum-entry-image.png"layout="fill"
objectFit="contain"alt="Image Describing Museum Entry Ticket" />
                                </div>
                            </td>

                            <td className="museum-entry-first-entity all-indicator-answers">
                                {state1MuseumEntry ? `${formatNumberWithCommas(state1MuseumEntry)} USD` : 'Yet to Update'}
                            </td>
                            <td className="museum-entry-second-entity all-indicator-answers">
                                {state2MuseumEntry ? `${formatNumberWithCommas(state2MuseumEntry)} USD` : 'Yet to Update'}
                            </td>
                        </tr>


                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Zoo Entry Ticket</div>
                                <div className="basic-information-images">
                                    <Image src="/images/zoo-entry-image.png"layout="fill"
objectFit="contain"alt="Image Describing Zoo Entry Ticket" />
                                </div>
                            </td>

                            <td className="zoo-entry-first-entity all-indicator-answers">
                                {state1ZooEntry ? `${formatNumberWithCommas(state1ZooEntry)} USD` : 'Yet to Update'}
                            </td>
                            <td className="zoo-entry-second-entity all-indicator-answers">
                                {state2ZooEntry ? `${formatNumberWithCommas(state2ZooEntry)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Amusement Park Entry Ticket</div>
                                <div className="basic-information-images">
                                    <Image src="/images/amusement-park-entry-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing Amusement Park Entry Ticket" />
                                </div>
                            </td>

                            <td className="amusement-park-entry-first-entity all-indicator-answers">
                                {state1AmusementParkEntry ? `${formatNumberWithCommas(state1AmusementParkEntry)} USD` : 'Yet to Update'}
                            </td>
                            <td className="amusement-park-entry-second-entity all-indicator-answers">
                                {state2AmusementParkEntry ? `${formatNumberWithCommas(state2AmusementParkEntry)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Bowling</div>
                                <div className="basic-information-images">
                                    <Image src="/images/bowling-image.png"layout="fill"
objectFit="contain"alt="Image Describing Bowling" />
                                </div>
                            </td>

                            <td className="bowling-first-entity all-indicator-answers">
                                {state1Bowling ? `${formatNumberWithCommas(state1Bowling)} USD` : 'Yet to Update'}
                            </td>
                            <td className="bowling-second-entity all-indicator-answers">
                                {state2Bowling ? `${formatNumberWithCommas(state2Bowling)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Mini Golf</div>
                                <div className="basic-information-images">
                                    <Image src="/images/mini-golf-image.png"layout="fill"
objectFit="contain"alt="Image Describing Mini Golf" />
                                </div>
                            </td>

                            <td className="mini-golf-first-entity all-indicator-answers">
                                {state1MiniGolf ? `${formatNumberWithCommas(state1MiniGolf)} USD` : 'Yet to Update'}
                            </td>
                            <td className="mini-golf-second-entity all-indicator-answers">
                                {state2MiniGolf ? `${formatNumberWithCommas(state2MiniGolf)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Video Games</div>
                                <div className="basic-information-images">
                                    <Image src="/images/video-games-image.png"layout="fill"
objectFit="contain"alt="Image Describing Video Games" />
                                </div>
                            </td>

                            <td className="video-games-first-entity all-indicator-answers">
                                {state1VideoGames ? `${formatNumberWithCommas(state1VideoGames)} USD` : 'Yet to Update'}
                            </td>
                            <td className="video-games-second-entity all-indicator-answers">
                                {state2VideoGames ? `${formatNumberWithCommas(state2VideoGames)} USD` : 'Yet to Update'}
                            </td>
                        </tr>


                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Streaming Services</div>
                                <div className="basic-information-images">
                                    <Image src="/images/streaming-services-image.png"layout="fill"
objectFit="contain"alt="Image Describing Streaming Services" />
                                </div>
                            </td>

                            <td className="streaming-services-first-entity all-indicator-answers">
                                {state1StreamingServices ? `${formatNumberWithCommas(state1StreamingServices)} USD` : 'Yet to Update'}
                            </td>
                            <td className="streaming-services-second-entity all-indicator-answers">
                                {state2StreamingServices ? `${formatNumberWithCommas(state2StreamingServices)} USD` : 'Yet to Update'}
                            </td>
                        </tr>


                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Outdoor Equipment Rental</div>
                                <div className="basic-information-images">
                                    <Image src="/images/outdoor-equipment-rental-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing Outdoor Equipment Rental" />
                                </div>
                            </td>

                            <td className="outdoor-equipment-rental-first-entity all-indicator-answers">
                                {state1OutdoorEquipmentRental ? `${formatNumberWithCommas(state1OutdoorEquipmentRental)} USD` : 'Yet to Update'}
                            </td>
                            <td className="outdoor-equipment-rental-second-entity all-indicator-answers">
                                {state2OutdoorEquipmentRental ? `${formatNumberWithCommas(state2OutdoorEquipmentRental)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Theme Park Annual Pass</div>
                                <div className="basic-information-images">
                                    <Image src="/images/theme-park-annual-pass-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing Theme Park Annual Pass" />
                                </div>
                            </td>

                            <td className="theme-park-annual-pass-first-entity all-indicator-answers">
                                {state1ThemeParkAnnualPass ? `${formatNumberWithCommas(state1ThemeParkAnnualPass)} USD` : 'Yet to Update'}
                            </td>
                            <td className="theme-park-annual-pass-second-entity all-indicator-answers">
                                {state2ThemeParkAnnualPass ? `${formatNumberWithCommas(state2ThemeParkAnnualPass)} USD` : 'Yet to Update'}
                            </td>
                        </tr>




                    </tbody>
                </table>
            </div>

            <div className="paragraph-for-pages-below-table">
                <div className="para-for-pages-single-div">




                    <h3>
                        Does Entertainment and Recreation cost more in
                        <span className="first-entity-name-pages-paragraph"> {state1} </span> than in
                        <span className="second-entity-name-pages-paragraph"> {state2}</span>?
                    </h3>

                    <p>
                        If you lived in
                        <span className="first-entity-name-pages-paragraph"> {state1}</span>, instead of
                        <span className="second-entity-name-pages-paragraph"> {state2}</span>, you would have
                        to pay
                        <strong>
                            <span className="entertainment-and-recreation-cost-calculation"> {costTimes} </span> times </strong> <span
                                className="entertainment-and-recreation-cost-more-or-less-calculation"> {moreOrLess} </span>
                        for entertainment, recreation and fun activities.

                    </p>



                </div>
            </div>

        </>
    )
}

export default Entertainment