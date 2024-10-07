import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import PopulationChart from '@/components/population-chart/PopulationChart';
import { dateRange, lastYear } from '@/lib/date-and-time/dateAndTime';
import { numberWithCommas } from '@/lib/format/format';
import { calcPopGrowthRate } from '@/lib/helper';
import Image from 'next/image';

function PopulationComparison({ country1, country2, country1GeneralInfo, country2GeneralInfo, country1URLCase, country2URLCase }) {
  const country1PopInfo = JSON.parse(country1GeneralInfo.population).reverse()
  const country1Population = country1PopInfo.at(-1)
  const country1PopString = numberWithCommas(country1Population)
  const country1PopGrowthRate = calcPopGrowthRate(country1PopInfo)
  const country1ChartDescription = `Population data for ${country1} from ${lastYear - 10} to ${lastYear - 1}.`;

  const country2PopInfo = JSON.parse(country2GeneralInfo.population).reverse()
  const country2Population = country2PopInfo.at(-1)
  const country2PopString = numberWithCommas(country2Population)
  const country2PopGrowthRate = calcPopGrowthRate(country2PopInfo)
  const country2ChartDescription = `Population data for ${country2} from ${lastYear - 10} to ${lastYear - 1}.`;

  const popDifference = numberWithCommas(Math.abs(country1Population - country2Population))
  const moreOrLess = country1Population > country2Population ? 'more' : 'less'

  return (
    <>
      <div className="population-comparison">
        <h2 className="pages-h2">Population Comparison</h2>
      </div>

      <div className="paragraph-for-pages-below-table">
        <div className="para-for-pages-single-div">
          <p>
            Based on the elaboration of latest World Bank Data, the total
            population of
            <strong>
              <span className="first-entity-name-pages-paragraph">
                {' '}
                {country1}{' '}
              </span>{' '}
            </strong>
            as of {lastYear} is estimated to be around
            <strong>
              <span className="population-of-first-entity-name">
                {' '}
                {country1PopString}
              </span>
            </strong>
            , and the total population of
            <strong>
              <span className="second-entity-name-pages-paragraph">
                {' '}
                {country2}{' '}
              </span>{' '}
            </strong>
            as of {lastYear} is estimated to be around
            <strong>
              <span className="population-of-second-entity-name">
                {' '}
                {country2PopString}
              </span>
              .
            </strong>
          </p>

          <p>
            As per the above data, we can say that in the year
            <span className="last-year"> {lastYear}</span>,
            <strong>
              <span className="first-entity-name-pages-paragraph">
                {' '}
                {country1}{' '}
              </span>
            </strong>
            had{' '}
            <span className="population-difference-number">
              {popDifference}{' '}
            </span>
            <span className="more-or-less-population">{moreOrLess} </span>{' '}
            people than
            <strong>
              <span className="second-entity-name-pages-paragraph">
                {' '}
                {country2}
              </span>
              .
            </strong>
          </p>
        </div>
      </div>

      {/* //////////////////////population comparison chart///////////////////// */}

      <div className="population-comparison-layout">
        <div className="first-entity-population-comparison">
          <div className="first-entity-map-text-flag-population-comparison">
            <div className="first-entity-map-population-comparison">
              <Image
                src={`/images/${country1URLCase}-map-small.png`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={`Pictorial representation of map of ${country1URLCase}`}
              />
            </div>

            <div className="first-entity-name-population-comparison">
              {country1}
            </div>

            <div className="first-entity-flag-population-comparison">
              <Image
                src={`/images/${country1URLCase}-flag-small.png`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={`Image illustrating the flag of ${country1URLCase}`}
              />
            </div>
          </div>

          <div className="horizontal-line"></div>

          <div className="population-graph-text">
            Population Graph ({dateRange})
          </div>

          <div className="population-growth-graph">
            <PopulationChart
              popInfo={country1PopInfo}
              ariaLabel={country1ChartDescription}
            />
          </div>
        </div>

        <div className="second-entity-population-comparison">
          <div className="second-entity-map-text-flag-population-comparison">
            <div className="second-entity-map-population-comparison">
              <Image
                src={`/images/${country2URLCase}-map-small.png`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={`Pictorial representation of map of ${country2URLCase}`}
              />
            </div>

            <div className="second-entity-name-population-comparison">
              {country2}
            </div>

            <div className="second-entity-flag-population-comparison">
              <Image
                src={`/images/${country2URLCase}-flag-small.png`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={`Image illustrating the flag of ${country2URLCase}`}
              />
            </div>
          </div>

          <div className="horizontal-line"></div>

          <div className="population-graph-text">
            Population Graph ({dateRange})
          </div>

          <div className="population-growth-graph">
            <PopulationChart
              popInfo={country2PopInfo}
              ariaLabel={country2ChartDescription}
            />
          </div>
        </div>
      </div>

      <div className="paragraph-for-pages-below-table">
        <div className="para-for-pages-single-div">
          <p>
            The annual Population Growth in
            <span className="first-entity-name-pages-paragraph">
              {' '}
              {country1}{' '}
            </span>{' '}
            is{' '}
            <strong>
              {' '}
              <span className="annual-population-growth-first-entity">
                {' '}
                {country1PopGrowthRate}
              </span>
              %{' '}
            </strong>{' '}
            and the annual population growth in{' '}
            <span className="second-entity-name-pages-paragraph">
              {' '}
              {country2}{' '}
            </span>{' '}
            is{' '}
            <strong>
              <span className="annual-population-growth-second-entity">
                {' '}
                {country2PopGrowthRate}
              </span>
              %.
            </strong>
          </p>
        </div>
      </div>

      <AdsHeaderBanner />
    </>
  );
}

export default PopulationComparison;
