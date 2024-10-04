import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { lastYear } from '@/lib/date-and-time/dateAndTime';
import Image from 'next/image';

function Health({ generalInfo, countryURLCase }) {
  const country = generalInfo.country
  const fertilityRate = generalInfo.fertilityRate
  const mortalityRateMale = generalInfo.mortalityRateMale
  const mortalityRateFemale = generalInfo.mortalityRateFemale
  const infantMortalityRate = generalInfo.infantMortalityRate
  const topCauseOfDeath = generalInfo.topCauseOfDeath
  const topCauseOfDeathNumber = generalInfo.topCauseOfDeathNumber
  const lowestCauseOfDeath = generalInfo.lowestCauseOfDeath
  const lowestCauseOfDeathNumber = generalInfo.lowestCauseOfDeathNumber
  const roadTrafficDeaths = generalInfo.roadTrafficDeaths
  const suicideDeaths = generalInfo.suicideDeaths
  const numberOfNewHIVInfections = generalInfo.numberOfNewHIVInfections
  const prevalenceOfHypertensionPercentage = generalInfo.prevalenceOfHypertensionPercentage
  const adultObesityPercentage = generalInfo.adultObesityPercentage
  const tobaccoConsumptionPercentage = generalInfo.tobaccoConsumptionPercentage
  const alcoholConsumptionPercentage = generalInfo.alcoholConsumptionPercentage

  return (
    <>
      <AdsHeaderBanner />

      <div className="health-factors">
        <h2 className="pages-h2">Health Factors Information</h2>
      </div>

      <div className="health-factors-comparison-div1">
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
                      src={`/images/${countryURLCase}-map-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Pictorial representation of map of ${countryURLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {country}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${countryURLCase}-flag-small.png`}
                      layout="fill"
                      objectFit="contain"
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
                  <div className="fertility-ratio-text">
                    Fertility Rate <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/fertility-ratio-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image representation of Fertility rate or ratio of any given country"
                  />
                </div>
              </td>
              <td className="fertility-ratio-answer-first-entity all-indicator-answers">
                {fertilityRate ? (
                  <>
                    {fertilityRate}{' '}
                    <span>
                      <br /> (Births Per Woman)
                    </span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="death-rate-male-text">
                    Mortality Rate (Adult Male) <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/death-rate-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image representation of Death rate or Mortality rate of adult male any given country"
                  />
                </div>
              </td>
              <td className="death-rate-male-answer-first-entity all-indicator-answers">
                {mortalityRateMale ? (
                  <>
                    {mortalityRateMale}{' '}
                    <span>
                      <br /> (Per 1000 Male Adults)
                    </span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="death-rate-female-text">
                    Mortality Rate (Adult Female) <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/death-rate-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image representation of Death rate or Mortality rate of adult female any given country"
                  />
                </div>
              </td>
              <td className="death-rate-female-answer-first-entity all-indicator-answers">
                {mortalityRateFemale ? (
                  <>
                    {mortalityRateFemale}{' '}
                    <span>
                      <br /> (Per 1000 Female Adults)
                    </span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="infant-mortality-rate-text">
                    Infant Mortality Rate <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/infant-mortality-ratio-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image representation of Infant Mortality Rate of any given country"
                  />
                </div>
              </td>
              <td className="infant-mortality-rate-answer-first-entity all-indicator-answers">
                {infantMortalityRate ? (
                  <>
                    {infantMortalityRate}{' '}
                    <span>
                      <br /> (Per 1000 Live Births)
                    </span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <AdsHeaderBanner />

      {/* <!-- .................. Health Factors second table Here  ............ --> */}

      <div className="health-factors-comparison-div2">
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
                      src={`/images/${countryURLCase}-map-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Pictorial representation of map of ${countryURLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {country}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${countryURLCase}-flag-small.png`}
                      layout="fill"
                      objectFit="contain"
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
                  <div className="leading-cause-of-death-text">
                    Top Cause of Death <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/top-cause-of-death-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image representation of top cause of death of any given country"
                  />
                </div>
              </td>
              <td className="leading-cause-of-death-answer-first-entity all-indicator-answers">
                {topCauseOfDeath ? (
                  <>
                    {topCauseOfDeath}{' '}
                    <span>
                      {' '}
                      <br />(
                    </span>
                    {topCauseOfDeathNumber ? (
                      <>
                        <span className="leading-cause-of-death-answer-number-first-entity">
                          {topCauseOfDeathNumber}
                        </span>{' '}
                        people per 100K population
                      </>
                    ) : (
                      ''
                    )}
                    )
                  </>
                ) : (
                  'Yet to update'
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="least-cause-of-death-text">
                    Lowest Cause of Death <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/lowest-cause-of-death-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image representation of lowest cause of death of any given country"
                  />
                </div>
              </td>

              <td className="least-cause-of-death-answer-first-entity all-indicator-answers">
                {lowestCauseOfDeath ? (
                  <>
                    {lowestCauseOfDeath}{' '}
                    <span>
                      {' '}
                      <br />(
                    </span>
                    {lowestCauseOfDeathNumber ? (
                      <>
                        <span className="least-cause-of-death-answer-number-first-entity">
                          {lowestCauseOfDeathNumber}
                        </span>{' '}
                        people per 100K population
                      </>
                    ) : (
                      ''
                    )}
                    )
                  </>
                ) : (
                  'Yet to update'
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="road-traffic-deaths-text">
                    Road Traffic Deaths <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/road-traffic-death-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image representation of road accident death of any given country"
                  />
                </div>
              </td>
              <td className="road-traffic-death-answer-first-entity all-indicator-answers">
                {roadTrafficDeaths ? (
                  <>
                    {roadTrafficDeaths} <br />(
                    <span className="road-traffic-death-text-no-change">
                      people per 100K population){' '}
                    </span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="suicide-deaths-text">
                    Suicide Deaths <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/suicide-death-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image representation of number of suicide deaths of any given country"
                  />
                </div>
              </td>
              <td className="suicide-death-answer-first-entity all-indicator-answers">
                {suicideDeaths ? (
                  <>
                    {suicideDeaths} <br />(
                    <span className="suicide-death-text-no-change">
                      Number of suicide deaths per 100K people)
                    </span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="new-hiv-infections-text">
                    New HIV Infections <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/new-hiv-infections-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image representation of new HIV Infections of any given country"
                  />
                </div>
              </td>
              <td className="new-hiv-infections-answer-first-entity all-indicator-answers">
                {numberOfNewHIVInfections ? (
                  <>
                    {numberOfNewHIVInfections} <br />(
                    <span className="new-hiv-infections-text-no-change">
                      HIV infections per 1000 people)
                    </span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="paragraph-for-pages-below-table">
        <div className="para-for-pages-single-div">
          <p>
            The leading cause of death in{' '}
            <strong>
              <span className="first-entity-name-pages-paragraph">
                {' '}
                {country}
              </span>
              ,
            </strong>
            {' '}is{' '}
            <strong>
              {' '}
              [{' '}
              <span className="leading-cause-of-death-answer-first-entity">
                {topCauseOfDeath}
              </span>{' '}
              ].{' '}
            </strong>{' '}
            Around
            <strong>
              {' '}
              <span className="leading-cause-of-death-answer-number-first-entity">
                {' '}
                {topCauseOfDeathNumber}{' '}
              </span>{' '}
              people per 100,000 people{' '}
            </strong>{' '}
            in{' '}
            <strong>
              <span className="first-entity-name-pages-paragraph">
                {' '}
                {country}
              </span>
              ,
            </strong>{' '}
            are dying of{' '}
            <span className="leading-cause-of-death-answer-first-entity">
              {' '}
              {topCauseOfDeath}
            </span>
            .
          </p>
        </div>
      </div>

      <AdsHeaderBanner />

      {/* <!-- ......... Health Factors third table Here  ............ --> */}

      <div className="health-factors-comparison-div3">
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
                      src={`/images/${countryURLCase}-map-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Pictorial representation of map of ${countryURLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {country}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${countryURLCase}-flag-small.png`}
                      layout="fill"
                      objectFit="contain"
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
                  <div className="prevalance-of-hypertension-text">
                    Prevalance Of Hypertension ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/hypertension-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Visual representation of prevalance of hypertension ratio of any given country"
                  />
                </div>
              </td>
              <td className="prevalence-of-hypertension-answer-first-entity all-indicator-answers">
                {prevalenceOfHypertensionPercentage ? (
                  <>
                    {prevalenceOfHypertensionPercentage}% <br />(
                    <span className="prevalence-of-hypertension-no-change">
                      Percentage of adults [30-79] with hypertension)
                    </span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="adult-obesity-text">
                    Adult Obesity <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/obesity-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Visual representation of obesity ratio of any given country"
                  />
                </div>
              </td>
              <td className="adult-obesity-answer-first-entity all-indicator-answers">
                {adultObesityPercentage ? (
                  <>
                    {adultObesityPercentage}% <br />(
                    <span className="adult-obesity-no-change">
                      Percentage of Obesity in adults)
                    </span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="pure-alcohol-consumption-text">
                    Pure Alcohol Consumption ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/pure-alcohol-consumption-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Visual representation of pure alcohol consumption ratio of any given country"
                  />
                </div>
              </td>
              <td className="pure-alcohol-consumption-answer-first-entity all-indicator-answers">
                {alcoholConsumptionPercentage ? (
                  <>
                    {alcoholConsumptionPercentage} <span>Liters</span>
                    <br />(
                    <span className="pure-alcohol-consumption-no-change">
                      per adult over a calendar year)
                    </span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="tobacco-consumption-text">
                    Tobacco Consumption <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/tobacco-consumption-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Visual representation of tobacco consumption ratio of any given country"
                  />
                </div>
              </td>
              <td className="tobacco-consumption-answer-first-entity all-indicator-answers">
                {tobaccoConsumptionPercentage ? (
                  <>
                    {tobaccoConsumptionPercentage}%
                    <br />(
                    <span className="tobacco-consumption-no-change">
                      Used by people aged 15 and above)
                    </span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Health;
