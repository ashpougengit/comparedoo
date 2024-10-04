import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { lastYear } from '@/lib/date-and-time/dateAndTime';
import Image from 'next/image';

function HealthFactors({
  country1GeneralInfo,
  country2GeneralInfo,
  country1CurrentHealthExpenditurePercentage,
  country2CurrentHealthExpenditurePercentage,
  country1URLCase,
  country2URLCase,
}) {
  const country1 = country1GeneralInfo.country;
  const country1FertilityRate = country1GeneralInfo.fertilityRate;
  const country1MortalityRateMale = country1GeneralInfo.mortalityRateMale;
  const country1MortalityRateFemale = country1GeneralInfo.mortalityRateFemale;
  const country1InfantMortalityRate = country1GeneralInfo.infantMortalityRate;
  const country1TopCauseOfDeath = country1GeneralInfo.topCauseOfDeath;
  const country1TopCauseOfDeathNumber =
    country1GeneralInfo.topCauseOfDeathNumber;
  const country1LowestCauseOfDeath = country1GeneralInfo.lowestCauseOfDeath;
  const country1LowestCauseOfDeathNumber =
    country1GeneralInfo.lowestCauseOfDeathNumber;
  const country1RoadTrafficDeaths = country1GeneralInfo.roadTrafficDeaths;
  const country1SuicideDeaths = country1GeneralInfo.suicideDeaths;
  const country1NumberOfNewHIVInfections =
    country1GeneralInfo.numberOfNewHIVInfections;
  const country1PrevalenceOfHypertensionPercentage =
    country1GeneralInfo.prevalenceOfHypertensionPercentage;
  const country1AdultObesityPercentage =
    country1GeneralInfo.adultObesityPercentage;
  const country1AlcoholConsumptionPercentage =
    country1GeneralInfo.alcoholConsumptionPercentage;
  const country1TobaccoConsumptionPercentage =
    country1GeneralInfo.tobaccoConsumptionPercentage;

  const country2 = country2GeneralInfo.country;
  const country2FertilityRate = country2GeneralInfo.fertilityRate;
  const country2MortalityRateMale = country2GeneralInfo.mortalityRateMale;
  const country2MortalityRateFemale = country2GeneralInfo.mortalityRateFemale;
  const country2InfantMortalityRate = country2GeneralInfo.infantMortalityRate;
  const country2TopCauseOfDeath = country2GeneralInfo.topCauseOfDeath;
  const country2TopCauseOfDeathNumber =
    country2GeneralInfo.topCauseOfDeathNumber;
  const country2LowestCauseOfDeath = country2GeneralInfo.lowestCauseOfDeath;
  const country2LowestCauseOfDeathNumber =
    country2GeneralInfo.lowestCauseOfDeathNumber;
  const country2RoadTrafficDeaths = country2GeneralInfo.roadTrafficDeaths;
  const country2SuicideDeaths = country2GeneralInfo.suicideDeaths;
  const country2NumberOfNewHIVInfections =
    country2GeneralInfo.numberOfNewHIVInfections;
  const country2PrevalenceOfHypertensionPercentage =
    country2GeneralInfo.prevalenceOfHypertensionPercentage;
  const country2AdultObesityPercentage =
    country2GeneralInfo.adultObesityPercentage;
  const country2AlcoholConsumptionPercentage =
    country2GeneralInfo.alcoholConsumptionPercentage;
  const country2TobaccoConsumptionPercentage =
    country2GeneralInfo.tobaccoConsumptionPercentage;

  const obeseTimes =
    country1AdultObesityPercentage > country2AdultObesityPercentage
      ? (
        country1AdultObesityPercentage / country2AdultObesityPercentage
      ).toFixed(2)
      : (
        country2AdultObesityPercentage / country1AdultObesityPercentage
      ).toFixed(2);
  const moreOrLess =
    country1AdultObesityPercentage > country2AdultObesityPercentage
      ? 'more'
      : 'less';

  return (
    <>
      <AdsHeaderBanner />

      <div className="health-factors">
        <h2 className="pages-h2">Health Factors Comparison</h2>
      </div>

      <div className="health-factors-comparison-div1">
        <table className="indicators-first-entity-and-second-entity-div1">
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
                      src={`/images/${country1URLCase}-map-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Pictorial representation of map of ${country1URLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {country1}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${country1URLCase}-flag-small.png`}
                      layout="fill"
                      objectFit="contain"
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
                      layout="fill"
                      objectFit="contain"
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
                      layout="fill"
                      objectFit="contain"
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
                {country1FertilityRate ? (
                  <>
                    {country1FertilityRate}
                    <span>
                      <br /> (Births Per Woman)
                    </span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="fertility-ratio-answer-second-entity all-indicator-answers">
                {country2FertilityRate ? (
                  <>
                    {country2FertilityRate}
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
                {country1MortalityRateMale ? (
                  <>
                    {country1MortalityRateMale}
                    <span>
                      <br /> (Per 1000 Male Adults)
                    </span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="death-rate-male-answer-second-entity all-indicator-answers">
                {country2MortalityRateMale ? (
                  <>
                    {country2MortalityRateMale}
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
                {country1MortalityRateFemale ? (
                  <>
                    {country1MortalityRateFemale}
                    <span>
                      <br /> (Per 1000 Female Adults)
                    </span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="death-rate-female-answer-second-entity all-indicator-answers">
                {country2MortalityRateFemale ? (
                  <>
                    {country2MortalityRateFemale}
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
                {country1InfantMortalityRate ? (
                  <>
                    {country1InfantMortalityRate}
                    <span>
                      <br /> (Per 1000 Live Births)
                    </span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="infant-mortality-rate-answer-second-entity all-indicator-answers">
                {country2InfantMortalityRate ? (
                  <>
                    {country2InfantMortalityRate}
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

      {/* <!-- ......... Health Factors second table Here  ......... --> */}

      <div className="health-factors-comparison-div2">
        <table className="indicators-first-entity-and-second-entity-div1">
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
                      src={`/images/${country1URLCase}-map-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Pictorial representation of map of ${country1URLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {country1}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${country1URLCase}-flag-small.png`}
                      layout="fill"
                      objectFit="contain"
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
                      layout="fill"
                      objectFit="contain"
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
                      layout="fill"
                      objectFit="contain"
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
                {country1TopCauseOfDeath ? (
                  <>
                    {country1TopCauseOfDeath}{' '}
                    <span>
                      {' '}
                      <br />(
                    </span>
                    <span className="leading-cause-of-death-answer-number-first-entity">
                      {country1TopCauseOfDeathNumber}{' '}
                    </span>{' '}
                    {country1TopCauseOfDeathNumber
                      ? 'people per 100K population'
                      : ''}
                    )
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="leading-cause-of-death-answer-second-entity all-indicator-answers">
                {country2TopCauseOfDeath ? (
                  <>
                    {country2TopCauseOfDeath}{' '}
                    <span>
                      {' '}
                      <br />(
                    </span>
                    <span className="leading-cause-of-death-answer-number-second-entity">
                      {country2TopCauseOfDeathNumber}{' '}
                    </span>{' '}
                    {country2TopCauseOfDeathNumber
                      ? 'people per 100K population'
                      : ''}
                    )
                  </>
                ) : (
                  'Yet to Update'
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
                {country1LowestCauseOfDeath ? (
                  <>
                    {country1LowestCauseOfDeath}{' '}
                    <span>
                      {' '}
                      <br />(
                    </span>
                    <span className="least-cause-of-death-answer-number-first-entity">
                      {' '}
                      {country1LowestCauseOfDeathNumber}{' '}
                    </span>{' '}
                    {country1LowestCauseOfDeathNumber
                      ? 'people per 100K population'
                      : ''}
                    )
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="least-cause-of-death-answer-second-entity all-indicator-answers">
                {country2LowestCauseOfDeath ? (
                  <>
                    {country2LowestCauseOfDeath}{' '}
                    <span>
                      {' '}
                      <br />(
                    </span>
                    <span className="least-cause-of-death-answer-number-second-entity">
                      {' '}
                      {country2LowestCauseOfDeathNumber}{' '}
                    </span>{' '}
                    {country2LowestCauseOfDeathNumber
                      ? 'people per 100K population'
                      : ''}
                    )
                  </>
                ) : (
                  'Yet to Update'
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
                {country1RoadTrafficDeaths ? (
                  <>
                    {country1RoadTrafficDeaths} <br />(
                    <span className="road-traffic-death-text-no-change">
                      people per 100K population){' '}
                    </span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="road-traffic-death-answer-second-entity all-indicator-answers">
                {country2RoadTrafficDeaths ? (
                  <>
                    {country2RoadTrafficDeaths} <br />(
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
                {country1SuicideDeaths ? (
                  <>
                    {country1SuicideDeaths} <br />(
                    <span className="suicide-death-text-no-change">
                      Number of suicide deaths per 100K people)
                    </span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="suicide-death-answer-second-entity all-indicator-answers">
                {country2SuicideDeaths ? (
                  <>
                    {country2SuicideDeaths} <br />(
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
                {country1NumberOfNewHIVInfections ? (
                  <>
                    {country1NumberOfNewHIVInfections} <br />(
                    <span className="new-hiv-infections-text-no-change">
                      HIV infections per 1000 people)
                    </span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="new-hiv-infections-answer-second-entity all-indicator-answers">
                {country2NumberOfNewHIVInfections ? (
                  <>
                    {country2NumberOfNewHIVInfections} <br />(
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
          {country1TopCauseOfDeath &&
            country1TopCauseOfDeathNumber &&
            country2TopCauseOfDeath &&
            country2TopCauseOfDeathNumber && (
              <>
                <p>
                  The leading cause of death in{' '}
                  <strong>
                    <span className="first-entity-name-pages-paragraph">
                      {' '}
                      {country1}
                    </span>
                    ,{' '}
                  </strong>
                  is{' '}
                  <strong>
                    {' '}
                    [{' '}
                    <span className="leading-cause-of-death-answer-first-entity">
                      {country1TopCauseOfDeath}
                    </span>{' '}
                    ].{' '}
                  </strong>{' '}
                  Around
                  <strong>
                    {' '}
                    <span className="leading-cause-of-death-answer-number-first-entity">
                      {' '}
                      {country1TopCauseOfDeathNumber}{' '}
                    </span>{' '}
                    people per 100,000 people{' '}
                  </strong>{' '}
                  in{' '}
                  <strong>
                    <span className="first-entity-name-pages-paragraph">
                      {' '}
                      {country1}
                    </span>
                    ,
                  </strong>{' '}
                  are dying of{' '}
                  <span className="leading-cause-of-death-answer-first-entity">
                    {' '}
                    {country1TopCauseOfDeath}
                  </span>
                  .
                </p>

                <p>
                  Similarly, around{' '}
                  <strong>
                    {' '}
                    <span className="leading-cause-of-death-answer-number-second-entity">
                      {' '}
                      {country2TopCauseOfDeathNumber}{' '}
                    </span>
                    people per 100,000 people{' '}
                  </strong>{' '}
                  in{' '}
                  <strong>
                    <span className="second-entity-name-pages-paragraph">
                      {' '}
                      {country2}
                    </span>
                    ,
                  </strong>{' '}
                  are dying of{' '}
                  <strong>
                    {' '}
                    <span className="leading-cause-of-death-answer-second-entity">
                      {' '}
                      {country2TopCauseOfDeath}
                    </span>
                  </strong>
                  , as it is the leading cause of death in there.
                </p>
              </>
            )}

          <br />
          {country1CurrentHealthExpenditurePercentage &&
            country2CurrentHealthExpenditurePercentage && (
              <>
                <p>
                  The government of{' '}
                  <strong>
                    <span className="first-entity-name-pages-paragraph">
                      {' '}
                      {country1}
                    </span>
                    ,{' '}
                  </strong>
                  spent{' '}
                  <strong>
                    {' '}
                    [{' '}
                    <span className="health-expenditure-rate-answer-first-entity">
                      {' '}
                      {country1CurrentHealthExpenditurePercentage}%
                    </span>{' '}
                    ]{' '}
                  </strong>{' '}
                  of the amount of the Gross Domestic Product (GDP) in health
                  sectors in the year{' '}
                  <strong>
                    <span className="health-expenditure-rate-year">
                      {' '}
                      {lastYear}
                    </span>
                  </strong>
                  .
                </p>

                <p>
                  Likewise, the government of{' '}
                  <strong>
                    <span className="second-entity-name-pages-paragraph">
                      {' '}
                      {country2}
                    </span>
                    ,
                  </strong>
                  {' '}spent{' '}
                  <strong>
                    {' '}
                    [{' '}
                    <span className="health-expenditure-rate-answer-second-entity">
                      {' '}
                      {country2CurrentHealthExpenditurePercentage}%
                    </span>{' '}
                    ]{' '}
                  </strong>{' '}
                  of the amount of the Gross Domestic Product (GDP) in health
                  sectors in the year{' '}
                  <strong>
                    <span className="health-expenditure-rate-year">
                      {' '}
                      {lastYear}
                    </span>
                  </strong>
                  .
                </p>
              </>
            )}
        </div>
      </div>

      <AdsHeaderBanner />

      {/* <!-- .......... Health Factors third table Here  ........... --> */}

      <div className="health-factors-comparison-div3">
        <table className="indicators-first-entity-and-second-entity-div1">
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
                      src={`/images/${country1URLCase}-map-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Pictorial representation of map of ${country1URLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {country1}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${country1URLCase}-flag-small.png`}
                      layout="fill"
                      objectFit="contain"
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
                      layout="fill"
                      objectFit="contain"
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
                      layout="fill"
                      objectFit="contain"
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
                  <div className="prevalance-of-hypertension-text">
                    Prevalance Of Hypertension <br /> ({lastYear})
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
                {country1PrevalenceOfHypertensionPercentage ? (
                  <>
                    {country1PrevalenceOfHypertensionPercentage} <br />(
                    <span className="prevalence-of-hypertension-no-change">
                      Percentage of adults [30-79] with hypertension)
                    </span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="prevalence-of-hypertension-answer-second-entity all-indicator-answers">
                {country2PrevalenceOfHypertensionPercentage ? (
                  <>
                    {country2PrevalenceOfHypertensionPercentage} <br />(
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
                {country1AdultObesityPercentage ? (
                  <>
                    {country1AdultObesityPercentage}% <br />(
                    <span className="adult-obesity-no-change">
                      Percentage of Obesity in adults)
                    </span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="adult-obesity-answer-second-entity all-indicator-answers">
                {country2AdultObesityPercentage ? (
                  <>
                    {country2AdultObesityPercentage}% <br />(
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
                    Pure Alcohol Consumption <br /> ({lastYear})
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
                {country1AlcoholConsumptionPercentage ? (
                  <>
                    {country1AlcoholConsumptionPercentage} <span>Liters</span>
                    <br />(
                    <span className="pure-alcohol-consumption-no-change">
                      per adult over a calendar year)
                    </span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="pure-alcohol-consumption-answer-second-entity all-indicator-answers">
                {country2AlcoholConsumptionPercentage ? (
                  <>
                    {country2AlcoholConsumptionPercentage} <span>Liters</span>
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
                {country1TobaccoConsumptionPercentage ? (
                  <>
                    {country1TobaccoConsumptionPercentage}% <br />(
                    <span className="tobacco-consumption-no-change">
                      Used by people aged 15 and above)
                    </span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="tobacco-consumption-answer-second-entity all-indicator-answers">
                {country2TobaccoConsumptionPercentage ? (
                  <>
                    {country2TobaccoConsumptionPercentage}% <br />(
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

      {country1AdultObesityPercentage && country2AdultObesityPercentage &&
        <div className="paragraph-for-pages-below-table">
          <div className="para-for-pages-single-div">
            <p>
              As per the data from the World Health Organization (WHO), people
              living in{' '}
              <strong>
                <span className="first-entity-name-pages-paragraph">
                  {' '}
                  {country1}
                </span>
                ,
              </strong>{' '}
              are{' '}
              <strong>
                {' '}
                <span className="obese-calculations">
                  {obeseTimes}
                </span> times{' '}
              </strong>
              <span className="more-or-less-obese-calculation-text">
                {' '}
                {moreOrLess}{' '}
              </span>{' '}
              likely to be obese compared to the people living in{' '}
              <strong>
                <span className="second-entity-name-pages-paragraph">
                  {' '}
                  {country2}
                </span>
              </strong>
              .
            </p>
          </div>
        </div>
      }
    </>
  );
}

export default HealthFactors;
