import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner'
import { lastYear } from '@/lib/date-and-time/dateAndTime'
import Image from 'next/image'
import React from 'react'

function AgeDistribution({ country1GeneralInfo, country2GeneralInfo, country1URLCase, country2URLCase }) {
  const country1 = country1GeneralInfo.country
  const country1Age0_14 = country1GeneralInfo.age0_14
  const country1Age15_64 = country1GeneralInfo.age15_64
  const country1Age65Plus = country1GeneralInfo.age65Plus

  const country2 = country2GeneralInfo.country
  const country2Age0_14 = country2GeneralInfo.age0_14
  const country2Age15_64 = country2GeneralInfo.age15_64
  const country2Age65Plus = country2GeneralInfo.age65Plus

  return (
    <>
      <div className="age-distribution-of-population-comparison">
        <h2 className="pages-h2">Age Distribution of Population</h2>
      </div>

      <div className="age-distribution-of-population">
        <table className="indicators-first-entity-and-second-entity-div1 age-distribution-div">
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
                {country1Age0_14 ? `${country1Age0_14} %` : 'Yet to Update'}{' '}
              </td>
              <td className="age_0_14-answer-second-entity all-indicator-answers">
                {country2Age0_14 ? `${country2Age0_14} %` : 'Yet to Update'}{' '}
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
                {country1Age15_64 ? `${country1Age15_64} %` : 'Yet to Update'}
              </td>
              <td className="age_15_64-answer-second-entity all-indicator-answers">
                {country2Age15_64 ? `${country2Age15_64} %` : 'Yet to Update'}
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
                {country1Age65Plus
                  ? `${country1Age65Plus} %`
                  : 'Yet to Update'}
              </td>
              <td className="age65plus-answer-second-entity all-indicator-answers">
                {country2Age65Plus
                  ? `${country2Age65Plus} %`
                  : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <AdsHeaderBanner />
    </>
  );
}

export default AgeDistribution