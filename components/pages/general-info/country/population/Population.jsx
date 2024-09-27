import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import Image from "next/image"
import { dateRange, lastYear } from "@/lib/date-and-time/dateAndTime"
import { numberWithCommas } from "@/lib/format/format"
import { calcPopGrowthRate } from "@/lib/helper"
import PopulationChart from "@/components/population-chart/PopulationChart"

function Population({ generalInfo, countryURLCase }) {
    const country = generalInfo.country
    const popInfo = JSON.parse(generalInfo.population).reverse()
    const population = popInfo.at(-1)
    const popString = numberWithCommas(population)
    const chartDescription = `Population data of ${country} from ${lastYear - 10} to ${lastYear - 1}.`;

    const popGrowthRate = calcPopGrowthRate(popInfo)

    return (
      <>
        <AdsHeaderBanner />

        <div className="population-comparison">
          <h2 className="pages-h2">Population Information</h2>
        </div>

        <div className="paragraph-for-pages-below-table">
          <div className="para-for-pages-single-div">
            <p>
              Based on the elaboration of latest World Bank Data, the total
              population of
              <strong>
                <span className="first-entity-name-pages-paragraph">
                  {' '}
                  {country}{' '}
                </span>{' '}
              </strong>
              as of {lastYear} is estimated to be around
              <strong>
                <span className="population-of-first-entity-name">
                  {' '}
                  {popString}
                </span>
              </strong>
              .
            </p>

            <p>
              Over the past decade,{' '}
              <span className="first-entity-name-pages-paragraph">
                {' '}
                {country}{' '}
              </span>{' '}
              has experienced an average population growth rate of{' '}
              <strong>
                <span className="population-growth-precentage-annually">
                  {' '}
                  {popGrowthRate}
                </span>
                %.
              </strong>
            </p>
          </div>
        </div>

        {/* <!-- ........ Population Comparison Chart Here  ........ --> */}

        <div className="population-comparison-layout">
          <div className="first-entity-population-comparison">
            <div className="first-entity-map-text-flag-population-comparison">
              <div className="first-entity-map-population-comparison">
                <Image
                  src={`/images/${countryURLCase}-map-small.png`}
                  layout="fill"
                  objectFit="contain"
                  alt={`Pictorial representation of map of ${countryURLCase}`}
                />
              </div>

              <div className="first-entity-name-population-comparison">
                {country}
              </div>

              <div className="first-entity-flag-population-comparison">
                <Image
                  src={`/images/${countryURLCase}-flag-small.png`}
                  layout="fill"
                  objectFit="contain"
                  alt={`Image illustrating the flag of ${countryURLCase}`}
                />
              </div>
            </div>

            <div className="horizontal-line"></div>

            <div className="population-graph-text">
              Population Graph ({dateRange})
            </div>

            <div className="population-growth-graph">
              <PopulationChart popInfo={popInfo} ariaLabel={chartDescription} />
            </div>
          </div>
        </div>
      </>
    );
}

export default Population