import Image from 'next/image'

function MapAndDescriptionAsia() {
  return (
    <>
      <div className="geographical-map-continents-pages">
        <h2 className="pages-h2">Map and Description</h2>
      </div>

      <div className="map-of-continent-and-ads-section">
        <div className="continent-map">
          <Image
            src="/images/map-of-asia-big.png"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

            alt="Map of Asia and outline showing for all countries in Asia"
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
                48 as per United Nations{' '}
              </td>
            </tr>
            <tr>
              <td className="continent-indicators">Demonym</td>
              <td className="demonym-answer-continent continent-indicator-answers">
                Asian
              </td>
            </tr>
            <tr>
              <td className="continent-indicators">Area in Sq Kilometers</td>
              <td className="area-km-text-answer-continent continent-indicator-answers">
                44,579,000 Sq Km
              </td>
            </tr>

            <tr>
              <td className="continent-indicators">Area in Sq Mile</td>
              <td className="area-mile-text-answer-continent continent-indicator-answers">
                17,212,000 Sq Mi
              </td>
            </tr>

            <tr>
              <td className="continent-indicators">Population (2021)</td>
              <td className="population-answer-continent continent-indicator-answers">
                4,694,576,167
              </td>
            </tr>

            <tr>
              <td className="continent-indicators">
                Population Density (2021)
              </td>
              <td className="population-density-answer-continent continent-indicator-answers">
                100 / Square KM [260 / Square Mile]
              </td>
            </tr>

            <tr>
              <td className="continent-indicators">Timezones</td>
              <td className="timezone-answer-continent continent-indicator-answers">
                UTC+02:00 to UTC+12:00
              </td>
            </tr>

            <tr>
              <td className="continent-indicators">Biggest Country</td>
              <td className="biggest-country-answer-continent continent-indicator-answers">
                Russia
              </td>
            </tr>

            <tr>
              <td className="continent-indicators">Smallest Country</td>
              <td className="smallest-country-answer-continent continent-indicator-answers">
                Maldives
              </td>
            </tr>

            <tr>
              <td className="continent-indicators">
                Gross Domestic Product (2022)
              </td>
              <td className="gdp-answer-continent continent-indicator-answers">
                $39 trillion
              </td>
            </tr>

            <tr>
              <td className="continent-indicators">Internet TLD</td>
              <td className="internet-tld-continent continent-indicator-answers">
                .asia
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MapAndDescriptionAsia