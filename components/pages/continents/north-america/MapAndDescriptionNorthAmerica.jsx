import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner'
import Image from 'next/image'

function MapAndDescriptionNorthAmerica() {
    return (
        <>
            <div className="geographical-map-continents-pages">
                <h2 className="pages-h2">Map and Description</h2>
            </div>

            <div className="map-of-continent-and-ads-section">



                <div className="continent-map">
                    <Image src="/images/map-of-north-america-big.png"
                        fill alt="Map of North America and outline showing for all countries in North America" />
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
                            <td className="total-countries-answer-continent continent-indicator-answers">23 as per United Nations </td>

                        </tr>
                        <tr>
                            <td className="continent-indicators">Demonym</td>
                            <td className="demonym-answer-continent continent-indicator-answers">North American</td>

                        </tr>
                        <tr>
                            <td className="continent-indicators">Area in Sq Kilometers</td>
                            <td className="area-km-text-answer-continent continent-indicator-answers">24.709 Million Sq Km</td>

                        </tr>

                        <tr>
                            <td className="continent-indicators">Area in Sq Mile</td>
                            <td className="area-mile-text-answer-continent continent-indicator-answers">9.54 million Sq Mi</td>

                        </tr>

                        <tr>
                            <td className="continent-indicators">Population (2021)</td>
                            <td className="population-answer-continent continent-indicator-answers">592,296,233</td>

                        </tr>

                        <tr>
                            <td className="continent-indicators">Population Density (2021)</td>
                            <td className="population-density-answer-continent continent-indicator-answers">25.7 / Square KM [66.4 / Square
                                Mile]
                            </td>

                        </tr>

                        <tr>
                            <td className="continent-indicators">Timezones</td>
                            <td className="timezone-answer-continent continent-indicator-answers">UTC−10:00 to UTC+00:00</td>

                        </tr>

                        <tr>
                            <td className="continent-indicators">Biggest Country</td>
                            <td className="biggest-country-answer-continent continent-indicator-answers">Canada</td>

                        </tr>

                        <tr>
                            <td className="continent-indicators">Smallest Country</td>
                            <td className="smallest-country-answer-continent continent-indicator-answers">Antigua and Barbuda</td>

                        </tr>

                        <tr>
                            <td className="continent-indicators">Gross Domestic Product (2022)</td>
                            <td className="gdp-answer-continent continent-indicator-answers">$29.01 trillion</td>

                        </tr>

                        <tr>
                            <td className="continent-indicators">Internet TLD</td>
                            <td className="internet-tld-continent continent-indicator-answers">n/a</td>

                        </tr>
                    </tbody>



                </table>

            </div>

            <AdsHeaderBanner />
        </>
    )
}

export default MapAndDescriptionNorthAmerica