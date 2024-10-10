import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { lastYear } from "@/lib/date-and-time/dateAndTime"
import { formatNumberWithCommas } from "@/lib/format/format"
import Image from "next/image"

function EconomicFactors({ standardInfo, countryURLCase }) {
  const country = standardInfo.country
  const GDPNominal = standardInfo.GDPNominal
  const GDPPerCapita = standardInfo.GDPPerCapita
  const GINI = standardInfo.GINI
  const inflationOnConsumerPrices = standardInfo.inflationOnConsumerPrices
  const centralGovernmentDebt = standardInfo.centralGovernmentDebt
  const HDI = standardInfo.HDI
  const humanCapitalIndex = standardInfo.humanCapitalIndex
  const literacyRate = standardInfo.literacyRate
  const lifeExpectancyRatio = standardInfo.lifeExpectancyRatio
  const healthyLifeExpectancyRatio = standardInfo.healthyLifeExpectancyRatio
  const povertyRatio = standardInfo.povertyRatio
  const unemploymentPercentageOfTotalLabourForce = standardInfo.unemploymentPercentageOfTotalLabourForce
  return (
    <>
      <AdsHeaderBanner />

      <div className="economic-factors-comparison">
        <h2 className="pages-h2">Economic Factors Information</h2>
      </div>

      {/* <!-- ........... Economic Factors Comparison first table Here  .......... --> */}

      <div className="economic-factors-comparison-div1">
        <table className="indicators-single-country-divs">
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
                      src={`/images/${countryURLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Pictorial representation of map of ${countryURLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {country}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${countryURLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Image illustrating the flag of ${countryURLCase}`}
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
                    Gross Domestic Product (GDP) ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/gdp-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image representing the total Gross Domestic Product of any specific country"
                  />
                </div>
              </td>
              <td className="gdp-answer-first-entity all-indicator-answers">
                {GDPNominal ? `${GDPNominal} USD` : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="gdp-per-capita-text">
                    GDP Per Capita <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/gdp-per-capita-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image representing the total Gross Domestic Product Per Capita of any specific country"
                  />
                </div>
              </td>
              <td className="gdp-per-capita-answer-first-entity all-indicator-answers">
                {GDPPerCapita ? `${formatNumberWithCommas(GDPPerCapita)} USD` : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="gini-ratio-text">
                    GINI Ratio <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/gini-ratio-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image representing the total GINI Ratio or GINI Coefficient of any specific country"
                  />
                </div>
              </td>
              <td className="gini-ratio-answer-first-entity all-indicator-answers">
                {GINI ? `${(GINI / 100).toFixed(2)}` : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="inflation-on-consumer-prices-text">
                    Inflation on Consumer Prices ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/inflation-on-consumer-prices-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image representing the Percentage of Inflation on consumer prices of any specific country"
                  />
                </div>
              </td>
              <td className="inflation-answer-first-entity all-indicator-answers">
                {inflationOnConsumerPrices && inflationOnConsumerPrices !== 'Yet to Update'
                  ? `${inflationOnConsumerPrices} % anually`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="central-government-debt-text">
                    Central Government Debt ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/central-government-debt-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image representing the Central Government Debt of any specific country"
                  />
                </div>
              </td>
              <td className="central-government-debt-answer-first-entity all-indicator-answers">
                {centralGovernmentDebt && centralGovernmentDebt !== 'Yet to Update'
                  ? `${centralGovernmentDebt} % of GDP`
                  : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <AdsHeaderBanner />

      <div className="paragraph-for-pages-below-table">
        <div className="para-for-pages-single-div">
          <p>
            <strong> Gross Domestic Product (GDP) </strong> is a measure of
            the total value of all goods and services produced within a
            country in a specific time period, usually a year. It is used to
            gauge the economic performance of a country and indicates how
            wealthy and productive a nation is. In simple terms, GDP tells us
            how much a country is producing and how well its economy is doing.
          </p>
          <br />
          {GDPNominal &&
            <p>
              As per the statistics from the World Bank Data for the year{' '}
              <strong> {lastYear}</strong>, the total GDP of
              <strong>
                <span className="first-entity-name-pages-paragraph">
                  {' '}
                  {country}{' '}
                </span>
              </strong>{' '}
              is <span className="gdp-answer-first-entity"> {GDPNominal} </span>{' '}
              USD.
            </p>
          }
          <br />

          <p>
            On the other hand,{' '}
            <strong> Gross Domestic Product (GDP) Per Capita</strong> is the
            average economic output per person in a country. Simply put, it
            shows how much, on average, each person contributes to the
            economy, giving an idea of the standard of living and economic
            well-being of the people in that country.
          </p>
        </div>
      </div>

      <AdsHeaderBanner />

      {/* <!-- ............ Economic Factors Comparison second table Here  ........... --> */}

      <div className="economic-factors-comparison-div2">
        <table className="indicators-single-country-divs">
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
                      src={`/images/${countryURLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Pictorial representation of map of ${countryURLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {country}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${countryURLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Image illustrating the flag of ${countryURLCase}`}
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
                  <div className="hdi-text">
                    Human Development Index (HDI) <br />({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/hdi-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image representing the Human Development Index of any specific country"
                  />
                </div>
              </td>
              <td className="hdi-answer-first-entity all-indicator-answers">
                {HDI ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="hdi-text">
                    Human Capital Index (HCI) <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/human-capital-index-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image representing the Human Capital Index of any specific country"
                  />
                </div>
              </td>
              <td className="human-capital-index-answer-first-entity all-indicator-answers">
                {humanCapitalIndex ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="literacy-rate-text">
                    Literacy Rate <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/literacy-rate-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image representing the Literacy Rate of any specific country"
                  />
                </div>
              </td>
              <td className="literacy-rate-answer-first-entity all-indicator-answers">
                {literacyRate
                  ? `${literacyRate}% (15 years+ above
                                age)`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="life-expectancy-ratio-text">
                    Life Expectancy Ratio
                  </div>

                  <div className="life-expectancy-ratio-year">
                    ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/life-expectancy-ratio-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image representation of Life Expectancy Ratio any given country"
                  />
                </div>
              </td>
              <td className="life-expectancy-ratio-answer-first-entity all-indicator-answers">
                {lifeExpectancyRatio
                  ? `${lifeExpectancyRatio} years`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="healthy-life-expectancy-ratio-text">
                    Healthy Life Expectancy Ratio
                  </div>

                  <div className="healthy-life-expectancy-ratio-year">
                    ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/healthy-life-expectancy-ratio-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image representation of Healthy Life Expectancy Ratio any given country"
                  />
                </div>
              </td>
              <td className="healthy-life-expectancy-ratio-answer-first-entity all-indicator-answers">
                {healthyLifeExpectancyRatio
                  ? `${healthyLifeExpectancyRatio} years`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="poverty-ratio-text">
                    Poverty Ratio <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/poverty-ratio-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image representing the Poverty Rate of any specific country"
                  />
                </div>
              </td>
              <td className="poverty-ratio-answer-first-entity all-indicator-answers">
                {povertyRatio
                  ? `${povertyRatio}% of total
                                Population`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="unemployment-rate-text">
                    Unemployment Rate <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/unemployment-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image representing the Unemployment Rate of any specific country"
                  />
                </div>
              </td>
              <td className="unemployment-rate-answer-first-entity all-indicator-answers">
                {unemploymentPercentageOfTotalLabourForce
                  ? `${unemploymentPercentageOfTotalLabourForce}% of total labor force`
                  : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="paragraph-for-pages-below-table">
        <div className="para-for-pages-single-div">
          <p>
            <strong> The Human Development Index (HDI) </strong> is a measure
            used to assess the overall well-being and quality of life of
            people living in a country. The key dimensions that give a country
            good HDI rank are a long and healthy life, being knowledgeable and
            having a decent standard of living. This is expressed as a value
            between 0 and 1. The higher a country&apos;s human development,
            the higher its HDI value.
          </p>
        </div>
      </div>
    </>
  );
}

export default EconomicFactors