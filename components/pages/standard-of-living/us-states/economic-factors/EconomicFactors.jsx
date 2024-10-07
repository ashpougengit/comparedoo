import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { lastYear } from "@/lib/date-and-time/dateAndTime"
import { formatNumberWithCommas } from "@/lib/format/format"
import Image from "next/image"

function EconomicFactors({ state1StandardInfo, state2StandardInfo, state1URLCase, state2URLCase }) {
  const state1 = state1StandardInfo.state
  const state1GDPNominal = state1StandardInfo.GDPNominal
  const state1GDPPerCapita = state1StandardInfo.GDPPerCapita
  const state1GINI = state1StandardInfo.GINI

  const state2 = state2StandardInfo.state
  const state2GDPNominal = state2StandardInfo.GDPNominal
  const state2GDPPerCapita = state2StandardInfo.GDPPerCapita
  const state2GINI = state2StandardInfo.GINI

  return (
    <>
      <div className="economic-factors-comparison">
        <h2 className="pages-h2">Economic Factors Comparison</h2>
      </div>

      {/* ..... Economic Factors Comparison first table Here  ..... */}

      <div className="economic-factors-comparison-div1">
        <table className="indicators-first-entity-and-second-entity-div1">
          <thead>
            <tr className="first-tr">
              <th>
                <div className="heading-map-name-flag">
                  <div className="right-indicator">
                    <Image
                      src="/images/indicators-right-image.png"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt="Image representing an indicator"
                    />
                  </div>
                  <div className="indicator-text">Indicators</div>
                  <div className="left-indicator">
                    <Image
                      src="/images/indicators-left-image.png"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt="Image illustrating an indicator"
                    />
                  </div>
                </div>
              </th>

              <th>
                <div className="heading-map-name-flag">
                  <div className="first-entity-map-pages-comparison">
                    <Image
                      src={`/images/${state1URLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Pictorial representation of map of ${state1URLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {state1}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${state1URLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Image illustrating the flag of ${state1URLCase}`}
                    />
                  </div>
                </div>
              </th>

              <th>
                <div className="heading-map-name-flag">
                  <div className="second-entity-map-pages-comparison">
                    <Image
                      src={`/images/${state2URLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Pictorial representation of map of ${state2URLCase}`}
                    />
                  </div>

                  <div className="second-entity-name-pages-comparison">
                    {' '}
                    {state2}{' '}
                  </div>

                  <div className="second-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${state2URLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Image illustrating the flag of ${state2URLCase}`}
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
                    Gross Domestic Product (GDP)({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/gdp-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image representing the total Gross Domestic Product of any specific country or state"
                  />
                </div>
              </td>
              <td className="gdp-answer-first-entity all-indicator-answers">
                {state1GDPNominal
                  ? `${formatNumberWithCommas(state1GDPNominal)} million USD`
                  : 'Yet to Update'}
              </td>
              <td className="gdp-answer-second-entity all-indicator-answers">
                {state2GDPNominal
                  ? `${formatNumberWithCommas(state2GDPNominal)} million USD`
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
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image representing the total Gross Domestic Product Per Capita of any specific country or state"
                  />
                </div>
              </td>
              <td className="gdp-per-capita-answer-first-entity all-indicator-answers">
                {state1GDPPerCapita
                  ? `${formatNumberWithCommas(state1GDPPerCapita)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="gdp-per-capita-answer-second-entity all-indicator-answers">
                {state2GDPPerCapita
                  ? `${formatNumberWithCommas(state2GDPPerCapita)} USD`
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
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image representing the total GINI Ratio or GINI Coefficient of any specific country or state"
                  />
                </div>
              </td>
              <td className="gini-ratio-answer-first-entity all-indicator-answers">
                {state1GINI ?? 'Yet to Update'}
              </td>
              <td className="gini-ratio-answer-second-entity all-indicator-answers">
                {state2GINI ?? 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <AdsHeaderBanner />

      <div className="paragraph-for-pages-below-table">
        <div className="para-for-pages-single-div">
          <p>
            <strong> Gross Domestic Product (GDP) </strong>
            is a measure of the total value of all goods and services produced
            within a country or a state in a specific time period, usually a
            year. It is used to gauge the economic performance of a country or
            a state and indicates how wealthy and productive a nation or a
            state is. In simple terms, GDP tells us how much a country or a
            state is producing and how well its economy is doing.
          </p>
          <br />
          {state1GDPNominal && state2GDPNominal &&
            <p>
              As per the statistics from the World Bank Data for the year
              <strong> {lastYear}</strong>, the total GDP of
              <strong>
                <span className="first-entity-name-pages-paragraph">
                  {' '}
                  {state1}{' '}
                </span>
              </strong>{' '}
              is
              <span className="gdp-answer-first-entity">
                {' '}
                {formatNumberWithCommas(state1GDPNominal)} million USD
              </span>{' '}
              and the total GDP of
              <strong>
                <span className="second-entity-name-pages-paragraph">
                  {' '}
                  {state2}{' '}
                </span>
              </strong>{' '}
              is
              <span className="gdp-answer-second-entity">
                {' '}
                {formatNumberWithCommas(state2GDPNominal)} million USD
              </span>
              .
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

export default EconomicFactors;