import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { lastYear } from '@/lib/date-and-time/dateAndTime';
import { formatNumberWithCommas } from '@/lib/format/format';
import Image from 'next/image';

function EconomicFactors({
  country1StandardInfo,
  country2StandardInfo,
  country1URLCase,
  country2URLCase,
}) {
  const country1 = country1StandardInfo.country;
  const country1GDPNominal = country1StandardInfo.GDPNominal;
  const country1GDPPerCapita = country1StandardInfo.GDPPerCapita;
  const country1GINI = country1StandardInfo.GINI;
  const country1InflationOnConsumerPrices =
    country1StandardInfo.inflationOnConsumerPrices;
  const country1CentralGovernmentDebt =
    country1StandardInfo.centralGovernmentDebt;
  const country1HDI = country1StandardInfo.HDI;
  const country1HumanCapitalIndex = country1StandardInfo.humanCapitalIndex;
  const country1LiteracyRate = country1StandardInfo.literacyRate;
  const country1LifeExpectancyRatio = country1StandardInfo.lifeExpectancyRatio;
  const country1HealthyLifeExpectancyRatio =
    country1StandardInfo.healthyLifeExpectancyRatio;
  const country1PovertyRatio = country1StandardInfo.povertyRatio;
  const country1UnemploymentPercentageOfTotalLabourForce =
    country1StandardInfo.unemploymentPercentageOfTotalLabourForce;

  const country2 = country2StandardInfo.country;
  const country2GDPNominal = country2StandardInfo.GDPNominal;
  const country2GDPPerCapita = country2StandardInfo.GDPPerCapita;
  const country2GINI = country2StandardInfo.GINI;
  const country2InflationOnConsumerPrices =
    country2StandardInfo.inflationOnConsumerPrices;
  const country2CentralGovernmentDebt =
    country2StandardInfo.centralGovernmentDebt;
  const country2HDI = country2StandardInfo.HDI;
  const country2HumanCapitalIndex = country2StandardInfo.humanCapitalIndex;
  const country2LiteracyRate = country2StandardInfo.literacyRate;
  const country2LifeExpectancyRatio = country2StandardInfo.lifeExpectancyRatio;
  const country2HealthyLifeExpectancyRatio =
    country2StandardInfo.healthyLifeExpectancyRatio;
  const country2PovertyRatio = country2StandardInfo.povertyRatio;
  const country2UnemploymentPercentageOfTotalLabourForce =
    country2StandardInfo.unemploymentPercentageOfTotalLabourForce;

  const moreOrLess =
    country1GDPPerCapita > country2GDPPerCapita ? 'more' : 'less';
  const betterOrLower = country1HDI > country2HDI ? 'better' : 'lower';

  return (
    <>
      <AdsHeaderBanner />

      <div className="economic-factors-comparison">
        <h2 className="pages-h2">Economic Factors Comparison</h2>
      </div>

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
                      src={`/images/${country1URLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Pictorial representation of map of ${country1URLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {country1}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${country1URLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Image illustrating the flag of ${country1URLCase}`}
                    />
                  </div>
                </div>
              </th>

              <th>
                <div className="heading-map-name-flag">
                  <div className="second-entity-map-pages-comparison">
                    <Image
                      src={`/images/${country2URLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Pictorial representation of map of ${country2URLCase}`}
                    />
                  </div>

                  <div className="second-entity-name-pages-comparison">
                    {' '}
                    {country2}{' '}
                  </div>

                  <div className="second-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${country2URLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Image illustrating the flag of ${country2URLCase}`}
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
                    alt="Image representing the total Gross Domestic Product of any specific country"
                  />
                </div>
              </td>
              <td className="gdp-answer-first-entity all-indicator-answers">
                {country1GDPNominal
                  ? `${country1GDPNominal} USD`
                  : 'Yet to Update'}
              </td>
              <td className="gdp-answer-second-entity all-indicator-answers">
                {country2GDPNominal
                  ? `${country2GDPNominal} USD`
                  : 'Yet to Update'}
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
                {country1GDPPerCapita
                  ? `${formatNumberWithCommas(country1GDPPerCapita)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="gdp-per-capita-answer-second-entity all-indicator-answers">
                {country2GDPPerCapita
                  ? `${formatNumberWithCommas(country2GDPPerCapita)} USD`
                  : 'Yet to Update'}
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
                {country1GINI
                  ? (country1GINI / 100).toFixed(2)
                  : 'Yet to Update'}
              </td>
              <td className="gini-ratio-answer-second-entity all-indicator-answers">
                {country2GINI
                  ? (country2GINI / 100).toFixed(2)
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="inflation-on-consumer-prices-text">
                    Inflation on Consumer Prices <br /> ({lastYear})
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
                {country1InflationOnConsumerPrices &&
                  country1InflationOnConsumerPrices !== 'Yet to Update'
                  ? `${country1InflationOnConsumerPrices} % annually`
                  : 'Yet to Update'}
              </td>
              <td className="inflation-answer-second-entity all-indicator-answers">
                {country2InflationOnConsumerPrices &&
                  country2InflationOnConsumerPrices !== 'Yet to Update'
                  ? `${country2InflationOnConsumerPrices} % annually`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="central-government-debt-text">
                    Central Government Debt <br /> ({lastYear})
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
                {country1CentralGovernmentDebt &&
                  country1CentralGovernmentDebt !== 'Yet to Update'
                  ? `${country1CentralGovernmentDebt} % of GDP`
                  : 'Yet to Update'}
              </td>
              <td className="central-government-debt-answer-second-entity all-indicator-answers">
                {country2CentralGovernmentDebt &&
                  country2CentralGovernmentDebt !== 'Yet to Update'
                  ? `${country2CentralGovernmentDebt} % of GDP`
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
            <strong> Gross Domestic Product (GDP) </strong> is a measure of the
            total value of all goods and services produced within a country in a
            specific time period, usually a year. It is used to gauge the
            economic performance of a country and indicates how wealthy and
            productive a nation is. In simple terms, GDP tells us how much a
            country is producing and how well its economy is doing.
          </p>
          <br />
          {country1GDPNominal && country2GDPNominal && country1GDPNominal !== 'Yet to Update' && country2GDPNominal !== 'Yet to Update' &&
            <p>
              As per the statistics from the World Bank Data for the year{' '}
              <strong>{lastYear}</strong>, the total GDP of
              <strong>
                <span className="first-entity-name-pages-paragraph">
                  {' '}
                  {country1}{' '}
                </span>
              </strong>{' '}
              is{' '}
              <span className="gdp-answer-first-entity">
                {' '}
                {country1GDPNominal}{' '}
              </span>
              <span>USD</span> and that of
              <strong>
                <span className="second-entity-name-pages-paragraph">
                  {' '}
                  {country2}{' '}
                </span>
              </strong>{' '}
              is
              <span className="gdp-answer-second-entity">
                {' '}
                {country2GDPNominal} <span>USD</span>.
              </span>
            </p>
          }
          <br />

          <p>
            On the other hand,{' '}
            <strong> Gross Domestic Product (GDP) Per Capita</strong> is the
            average economic output per person in a country. Simply put, it
            shows how much, on average, each person contributes to the economy,
            giving an idea of the standard of living and economic well-being of
            the people in that country.
          </p>
          <br />

          {country1GDPPerCapita && country2GDPPerCapita &&
            <p>
              From the above data, we can say that a person living and working in{' '}
              <strong>
                <span className="first-entity-name-pages-paragraph">
                  {' '}
                  {country1}{' '}
                </span>
              </strong>{' '}
              contributes{' '}
              <span className="more-or-less-gdp-per-capita-calculation">
                {' '}
                {moreOrLess}{' '}
              </span>{' '}
              to the country&apos;s economy compared to a person working in{' '}
              <strong>
                <span className="second-entity-name-pages-paragraph">
                  {' '}
                  {country2}
                </span>
              </strong>
              .
            </p>
          }

        </div>
      </div>

      <AdsHeaderBanner />

      {/* <!-- .... Economic Factors Comparison second table Here  .... --> */}

      <div className="economic-factors-comparison-div2">
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
                      src={`/images/${country1URLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Pictorial representation of map of ${country1URLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {country1}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${country1URLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Image illustrating the flag of ${country1URLCase}`}
                    />
                  </div>
                </div>
              </th>

              <th>
                <div className="heading-map-name-flag">
                  <div className="second-entity-map-pages-comparison">
                    <Image
                      src={`/images/${country2URLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Pictorial representation of map of ${country2URLCase}`}
                    />
                  </div>

                  <div className="second-entity-name-pages-comparison">
                    {' '}
                    {country2}{' '}
                  </div>

                  <div className="second-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${country2URLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Image illustrating the flag of ${country2URLCase}`}
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
                    Human Development Index (HDI) (2024)
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
                {country1HDI ? country1HDI : 'Yet to Update'}
              </td>
              <td className="hdi-answer-second-entity all-indicator-answers">
                {country2HDI ? country2HDI : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="hdi-text">
                    Human Capital Index (HCI) (2024)
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
                {country1HumanCapitalIndex
                  ? country1HumanCapitalIndex
                  : 'Yet to Update'}
              </td>
              <td className="human-capital-index-answer-second-entity all-indicator-answers">
                {country2HumanCapitalIndex
                  ? country2HumanCapitalIndex
                  : 'Yet to Update'}
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
                {country1LiteracyRate
                  ? `${country1LiteracyRate}% (15 years+ above age)`
                  : 'Yet to Update'}
              </td>
              <td className="literacy-rate-answer-second-entity all-indicator-answers">
                {country2LiteracyRate
                  ? `${country2LiteracyRate}% (15 years+ above age)`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="life-expectancy-ratio-text">
                    Life Expectancy Ratio
                  </div>

                  <div className="life-expectancy-ratio-year">({lastYear})</div>
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
                {country1LifeExpectancyRatio
                  ? `${country1LifeExpectancyRatio} years`
                  : 'Yet to Update'}
              </td>
              <td className="life-expectancy-ratio-answer-second-entity all-indicator-answers">
                {country2LifeExpectancyRatio
                  ? `${country2LifeExpectancyRatio} years`
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
                {country1HealthyLifeExpectancyRatio
                  ? `${country1HealthyLifeExpectancyRatio} years`
                  : 'Yet to Update'}
              </td>
              <td className="healthy-life-expectancy-ratio-answer-second-entity all-indicator-answers">
                {country2HealthyLifeExpectancyRatio
                  ? `${country2HealthyLifeExpectancyRatio} years`
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
                    src="/images/poverty-headcount-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image representing the Poverty Rate of any specific country"
                  />
                </div>
              </td>
              <td className="poverty-ratio-answer-first-entity all-indicator-answers">
                {country1PovertyRatio
                  ? `${country1PovertyRatio}% of total Population`
                  : 'Yet to Update'}
              </td>
              <td className="poverty-ratio-answer-second-entity all-indicator-answers">
                {country2PovertyRatio
                  ? `${country2PovertyRatio}% of total Population`
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
                {country1UnemploymentPercentageOfTotalLabourForce
                  ? `${country1UnemploymentPercentageOfTotalLabourForce}% of total labor force`
                  : 'Yet to Update'}
              </td>
              <td className="unemployment-rate-answer-second-entity all-indicator-answers">
                {country2UnemploymentPercentageOfTotalLabourForce
                  ? `${country2UnemploymentPercentageOfTotalLabourForce}% of total labor force`
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
            used to assess the overall well-being and quality of life of people
            living in a country. The key dimensions that give a country good HDI
            rank are a long and healthy life, being knowledgeable and having a
            decent standard of living.
          </p>
          <br />

          {country1HDI && country2HDI &&
            (
              <>
                <p>
                  From the above given statistics, we can see that the HDI of{' '}
                  <strong>
                    <span className="first-entity-name-pages-paragraph">
                      {' '}
                      {country1}{' '}
                    </span>
                  </strong>{' '}
                  is{' '}
                  <strong>
                    {' '}
                    [<span className="hdi-answer-first-entity">{' '} {country1HDI}{' '} </span>]
                  </strong>{' '}
                  and the HDI of{' '}
                  <strong>
                    <span className="second-entity-name-pages-paragraph">
                      {' '}
                      {country2}{' '}
                    </span>
                  </strong>{' '}
                  is{' '}
                  <strong>
                    [<span className="hdi-answer-second-entity"> {' '}{country2HDI}{' '} </span>]
                  </strong>
                  .
                </p>

                <p>
                  The data shows that the people living in{' '}
                  <strong>
                    <span className="first-entity-name-pages-paragraph">
                      {' '}
                      {country1}{' '}
                    </span>
                  </strong>{' '}
                  has{' '}
                  <span className="better-or-lower-calculation">
                    {' '}
                    {betterOrLower}{' '}
                  </span>{' '}
                  income, life expectancy and education level compared to
                  <strong>
                    <span className="second-entity-name-pages-paragraph">
                      {' '}
                      {country2}
                    </span>
                    .
                  </strong>
                </p>
              </>
            )
          }

        </div>
      </div>
    </>
  );
}

export default EconomicFactors;
