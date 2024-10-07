import Image from 'next/image'

function MapAndDescriptionEurope() {
  return (
    <>
      <div className="geographical-map-continents-pages">
        <h2 className="pages-h2">Map and Description</h2>
      </div>

      <div className="map-of-continent-and-ads-section">
        <div className="continent-map">
          <Image
            src="/images/map-of-europe-big.png"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

            alt="Map of Europe and outline showing for all countries in Europe"
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
                44 as per United Nations{' '}
              </td>
            </tr>
            <tr>
              <td className="continent-indicators">Demonym</td>
              <td className="demonym-answer-continent continent-indicator-answers">
                European
              </td>
            </tr>
            <tr>
              <td className="continent-indicators">Area in Sq Kilometers</td>
              <td className="area-km-text-answer-continent continent-indicator-answers">
                10,180,000 Sq Km
              </td>
            </tr>

            <tr>
              <td className="continent-indicators">Area in Sq Mile</td>
              <td className="area-mile-text-answer-continent continent-indicator-answers">
                3,930,000 Sq Mi
              </td>
            </tr>

            <tr>
              <td className="continent-indicators">Population (2021)</td>
              <td className="population-answer-continent continent-indicator-answers">
                745,173,774
              </td>
            </tr>

            <tr>
              <td className="continent-indicators">
                Population Density (2021)
              </td>
              <td className="population-density-answer-continent continent-indicator-answers">
                72.9 / Square KM [188 / Square Mile]
              </td>
            </tr>

            <tr>
              <td className="continent-indicators">Timezones</td>
              <td className="timezone-answer-continent continent-indicator-answers">
                UTC−1 to UTC+5
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
                Vatican City
              </td>
            </tr>

            <tr>
              <td className="continent-indicators">
                Gross Domestic Product (2022)
              </td>
              <td className="gdp-answer-continent continent-indicator-answers">
                $24.02 trillion
              </td>
            </tr>

            <tr>
              <td className="continent-indicators">Internet TLD</td>
              <td className="internet-tld-continent continent-indicator-answers">
                .eu
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MapAndDescriptionEurope