import Image from "next/image"

function MapAndDescriptionSouthAmerica() {
  return (
    <>
      <div className="geographical-map-continents-pages">
        <h2 className="pages-h2">Map and Description</h2>
      </div>

      <div className="map-of-continent-and-ads-section">
        <div className="continent-map">
          <Image
            src="/images/map-of-south-america-big.png"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

            alt="Map of south America and outline showing for all countries in South America"
          />
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
              <td className="total-countries-answer-continent continent-indicator-answers">
                12 as per United Nations{' '}
              </td>
            </tr>
            <tr>
              <td className="continent-indicators">Demonym</td>
              <td className="demonym-answer-continent continent-indicator-answers">
                South American
              </td>
            </tr>
            <tr>
              <td className="continent-indicators">Area in Sq Kilometers</td>
              <td className="area-km-text-answer-continent continent-indicator-answers">
                17,840,000 Sq Km
              </td>
            </tr>

            <tr>
              <td className="continent-indicators">Area in Sq Mile</td>
              <td className="area-mile-text-answer-continent continent-indicator-answers">
                6,890,000 Sq Mi
              </td>
            </tr>

            <tr>
              <td className="continent-indicators">Population (2021)</td>
              <td className="population-answer-continent continent-indicator-answers">
                434,254,119
              </td>
            </tr>

            <tr>
              <td className="continent-indicators">
                Population Density (2021)
              </td>
              <td className="population-density-answer-continent continent-indicator-answers">
                21.4 / Square KM [56.0 / Square Mile]
              </td>
            </tr>

            <tr>
              <td className="continent-indicators">Timezones</td>
              <td className="timezone-answer-continent continent-indicator-answers">
                UTC−02:00 to UTC−05:00
              </td>
            </tr>

            <tr>
              <td className="continent-indicators">Biggest Country</td>
              <td className="biggest-country-answer-continent continent-indicator-answers">
                Brazil
              </td>
            </tr>

            <tr>
              <td className="continent-indicators">Smallest Country</td>
              <td className="smallest-country-answer-continent continent-indicator-answers">
                Suriname
              </td>
            </tr>

            <tr>
              <td className="continent-indicators">
                Gross Domestic Product (2022)
              </td>
              <td className="gdp-answer-continent continent-indicator-answers">
                $3.62 trillion
              </td>
            </tr>

            <tr>
              <td className="continent-indicators">Internet TLD</td>
              <td className="internet-tld-continent continent-indicator-answers">
                n/a
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MapAndDescriptionSouthAmerica