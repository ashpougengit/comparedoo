import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner'

function MapAndDescriptionAntartica() {
    return (
        <>
            <div className="geographical-map-continents-pages">
                <h2 className="pages-h2">Map and Description</h2>
            </div>

            <div className="map-of-continent-and-ads-section">
                <div className="continent-map">
                    <img src="/images/map-of-antarctica-big.png" alt="Map of Antartica" />
                </div>
                <table className="continent-table">


                    <thead>
                        <tr className="first-tr">
                            <th>Indicator</th>
                            <th>Value</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="continent-indicators">Total Countries</td>
                            <td className="total-countries-answer-continent continent-indicator-answers">No Countries </td>

                        </tr>

                        <tr>
                            <td className="continent-indicators">Area in Sq Kilometers</td>
                            <td className="area-km-text-answer-continent continent-indicator-answers">14,200,000 Sq Km</td>

                        </tr>

                        <tr>
                            <td className="continent-indicators">Area in Sq Mile</td>
                            <td className="area-mile-text-answer-continent continent-indicator-answers">5,500,000 Sq Mi</td>

                        </tr>

                        <tr>
                            <td className="continent-indicators">Population (2021)</td>
                            <td className="population-answer-continent continent-indicator-answers">1,300 to 5,100 (seasonal)</td>

                        </tr>



                        <tr>
                            <td className="continent-indicators">Timezones</td>
                            <td className="timezone-answer-continent continent-indicator-answers">All time zones</td>

                        </tr>

                        <tr>
                            <td className="continent-indicators">Internet TLD</td>
                            <td className="internet-tld-continent continent-indicator-answers">.africa</td>

                        </tr>


                        <tr>
                            <td className="continent-indicators">Latitude</td>
                            <td className="latitude-answer-continent continent-indicator-answers">90° 0′ 0″ S</td>

                        </tr>

                        <tr>
                            <td className="continent-indicators">Longitude</td>
                            <td className="longitude-answer-continent continent-indicator-answers">0° 0′ 0″ E</td>

                        </tr>
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default MapAndDescriptionAntartica