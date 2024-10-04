import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { lastYear } from "@/lib/date-and-time/dateAndTime"
import { formatNumberWithCommas } from "@/lib/format/format"
import Image from "next/image"

function EconomicFactors({ standardInfo, stateURLCase }) {
  const state = standardInfo.state
  const GDPNominal = standardInfo.GDPNominal
  const GDPPerCapita = standardInfo.GDPPerCapita
  const GINI = standardInfo.GINI

  return (
    <>
      <div className="economic-factors-comparison">
        <h2 className="pages-h2">Economic Factors Information</h2>
      </div>
      {/* ........ Economic Factors Comparison first table Here  ... */}
      <div className="economic-factors-comparison-div1">
        <table className="indicators-single-country-divs">
          <thead>
            <tr className="first-tr">
              <th>
                <div className="heading-map-name-flag">
                  <div className="right-indicator">
                    <Image
                      src="/images/indicators-right-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image representing an indicator"
                    />
                  </div>
                  <div className="indicator-text">Indicators</div>
                  <div className="left-indicator">
                    <Image
                      src="/images/indicators-left-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image illustrating an indicator"
                    />
                  </div>
                </div>
              </th>

              <th>
                <div className="heading-map-name-flag">
                  <div className="first-entity-map-pages-comparison">
                    <Image
                      src={`/images/${stateURLCase}-map-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Pictorial representation of map of ${stateURLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {state}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${stateURLCase}-flag-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Image illustrating the flag of ${stateURLCase}`}
                    />
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="gdp-text">
                    Gross Domestic Product (GDP)
                    <br />({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/gdp-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image representing the total Gross Domestic Product of any specific country or state"
                  />
                </div>
              </td>
              <td className="gdp-answer-first-entity all-indicator-answers">
                {GDPNominal
                  ? `${formatNumberWithCommas(GDPNominal)} million USD`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="gdp-per-capita-text">
                    GDP Per Capita
                    <br />({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/gdp-per-capita-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image representing the total Gross Domestic Product Per Capita of any specific country or state"
                  />
                </div>
              </td>
              <td className="gdp-per-capita-answer-first-entity all-indicator-answers">
                {GDPPerCapita
                  ? `${formatNumberWithCommas(GDPPerCapita)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="gini-ratio-text">
                    GINI Ratio
                    <br />({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/gini-ratio-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image representing the total GINI Ratio or GINI Coefficient of any specific country or state"
                  />
                </div>
              </td>
              <td className="gini-ratio-answer-first-entity all-indicator-answers">
                {GINI ?? 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <AdsHeaderBanner />


      <div className="paragraph-for-pages-below-table">
        <div className="para-for-pages-single-div">
          <p>
            <strong>Gross Domestic Product (GDP) </strong>
            is a measure of the total value of all goods and services produced
            within a country or a state in a specific time period, usually a
            year. It is used to gauge the economic performance of a country or
            a state and indicates how wealthy and productive a nation or a
            state is. In simple terms, GDP tells us how much a country or a
            state is producing and how well its economy is doing.
          </p>
          <br />
          {GDPNominal &&
            <p>
              As per the statistics from the World Bank Data for the year
              <strong> {lastYear}</strong>, the total GDP of
              <strong>
                <span className="first-entity-name-pages-paragraph">
                  {' '}
                  {state}{' '}
                </span>
              </strong>
              is
              <span className="gdp-answer-first-entity">
                {' '}
                {formatNumberWithCommas(GDPNominal)}{' '}
              </span>
              <span> million USD</span>.
            </p>
          }

          <br />
          <p>
            On the other hand,
            <strong> Gross Domestic Product (GDP) Per Capita </strong>
            is the average economic output per person in a country or a state.
            Simply put, it shows how much, on average, each person contributes
            to the economy, giving an idea of the standard of living and
            economic well-being of the people in that country or state.
          </p>
        </div>
      </div>
    </>
  );
}

export default EconomicFactors