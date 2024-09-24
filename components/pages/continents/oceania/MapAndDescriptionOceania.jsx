import Image from "next/image"

function MapAndDescriptionOceania() {
    return (
        <>
            <div className="geographical-map-continents-pages">
                <h2 className="pages-h2">Map and Description</h2>
            </div>

            <div className="map-of-continent-and-ads-section">



                <div className="continent-map">
                    <Image src="/images/map-of-oceania-big.png" fill alt="Map of Oceania and outline showing for all countries in Oceania" />
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
                            <td className="total-countries-answer-continent continent-indicator-answers">15 as per United Nations </td>

                        </tr>
                        <tr>
                            <td className="continent-indicators">Demonym</td>
                            <td className="demonym-answer-continent continent-indicator-answers">Oceanian</td>

                        </tr>
                        <tr>
                            <td className="continent-indicators">Area in Sq Kilometers</td>
                            <td className="area-km-text-answer-continent continent-indicator-answers">9,000,000 Sq Km</td>

                        </tr>

                        <tr>
                            <td className="continent-indicators">Area in Sq Mile</td>
                            <td className="area-mile-text-answer-continent continent-indicator-answers">3,500,000 Sq Mi</td>

                        </tr>

                        <tr>
                            <td className="continent-indicators">Population (2021)</td>
                            <td className="population-answer-continent continent-indicator-answers">44,491,724</td>

                        </tr>

                        <tr>
                            <td className="continent-indicators">Population Density (2021)</td>
                            <td className="population-density-answer-continent continent-indicator-answers">4.94 / Square KM [12.8 / Square
                                Mile]
                            </td>

                        </tr>

                        <tr>
                            <td className="continent-indicators">Timezones</td>
                            <td className="timezone-answer-continent continent-indicator-answers">UTC+9 (Papua, Palau) to UTC–6 (Easter
                                Island)
                                (west to east)</td>

                        </tr>

                        <tr>
                            <td className="continent-indicators">Biggest Country</td>
                            <td className="biggest-country-answer-continent continent-indicator-answers">Australia</td>

                        </tr>

                        <tr>
                            <td className="continent-indicators">Smallest Country</td>
                            <td className="smallest-country-answer-continent continent-indicator-answers">Nauru</td>

                        </tr>

                        <tr>
                            <td className="continent-indicators">Gross Domestic Product (2022)</td>
                            <td className="gdp-answer-continent continent-indicator-answers">$1.630 trillion</td>

                        </tr>

                        <tr>
                            <td className="continent-indicators">Internet TLD</td>
                            <td className="internet-tld-continent continent-indicator-answers">n/a</td>

                        </tr>
                    </tbody>



                </table>

            </div>

            <div className="in-content-banner-ads all-ads-formats">
                <img src="header-top-banner-ads.png" alt="" />
            </div>

        </>
    )
}

export default MapAndDescriptionOceania