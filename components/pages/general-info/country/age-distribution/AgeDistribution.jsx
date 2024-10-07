import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { lastYear } from "@/lib/date-and-time/dateAndTime"
import Image from "next/image"

function AgeDistribution({ generalInfo, countryURLCase }) {
  const country = generalInfo.country
  const age0_14 = generalInfo.age0_14
  const age15_64 = generalInfo.age15_64
  const age65Plus = generalInfo.age65Plus

  return (
    <>
      <AdsHeaderBanner />

      <div className="age-distribution-of-population-comparison">
        <h2 className="pages-h2">Age Distribution of Population</h2>
      </div>

      <div className="age-distribution-of-population">
        <table className="indicators-single-country-divs age-distribution-div">
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
              <td className="age-teenage">
                <div className="all-indicators">
                  Age ( 0 - 14 )
                  <br />
                  (Year: {lastYear})
                </div>
                <div className="age-distribution-images">
                  <Image
                    src="/images/teenage-girl.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image of a Teenage Girl"
                  />
                </div>
              </td>
              <td className="age_0_14-answer-first-entity all-indicator-answers">
                {' '}
                {age0_14 ? `${age0_14} %` : 'Yet to Update'}{' '}
              </td>
            </tr>

            <tr>
              <td className="age-teenage">
                <div className="all-indicators">
                  Age ( 15 - 64 )
                  <br />
                  (Year: {lastYear})
                </div>
                <div className="age-distribution-images">
                  <Image
                    src="/images/adult-woman.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image of an Adult Woman"
                  />
                </div>
              </td>
              <td className="age_15_64-answer-first-entity all-indicator-answers">
                {age15_64 ? `${age15_64} %` : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="age-teenage">
                <div className="all-indicators">
                  Age ( 65+ )
                  <br />
                  (Year: {lastYear})
                </div>
                <div className="age-distribution-images">
                  <Image
                    src="/images/old-aged-woman.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image of a Older Aged Woman"
                  />
                </div>
              </td>
              <td className="age65plus-answer-first-entity all-indicator-answers">
                {age65Plus ? `${age65Plus} %` : 'Yet to Update'}{' '}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AgeDistribution