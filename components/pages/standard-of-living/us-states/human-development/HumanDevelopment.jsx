import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { lastYear } from '@/lib/date-and-time/dateAndTime';
import { removeZerosAfterDecimal } from '@/lib/format/format';
import Image from 'next/image';

function HumanDevelopment({
  state1StandardInfo,
  state2StandardInfo,
  state1URLCase,
  state2URLCase,
}) {
  const state1 = state1StandardInfo.state;
  const state1HDI = state1StandardInfo.HDI;
  const state1LiteracyRate = state1StandardInfo.literacyRate;
  const state1LifeExpectancyRatio = state1StandardInfo.lifeExpectancyRatio;
  const state1PovertyRatio = state1StandardInfo.povertyRatio;
  const state1EmploymentRate = state1StandardInfo.employmentRate;

  const state2 = state2StandardInfo.state;
  const state2HDI = state2StandardInfo.HDI;
  const state2LiteracyRate = state2StandardInfo.literacyRate;
  const state2LifeExpectancyRatio = state2StandardInfo.lifeExpectancyRatio;
  const state2PovertyRatio = state2StandardInfo.povertyRatio;
  const state2EmploymentRate = state2StandardInfo.employmentRate;

  const lifeDifference = removeZerosAfterDecimal(
    Math.abs(state1LifeExpectancyRatio - state2LifeExpectancyRatio)
  );
  const moreOrLess =
    state1LifeExpectancyRatio > state2LifeExpectancyRatio ? 'more' : 'less';

  return (
    <>
      <AdsHeaderBanner />

      <div className="economic-factors-comparison">
        <h2 className="pages-h2">Human Development Factors Comparison</h2>
      </div>

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
                  <div className="hdi-text">
                    Human Development Index (HDI) ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/hdi-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image representing the Human Development Index of any specific country or state"
                  />
                </div>
              </td>
              <td className="hdi-answer-first-entity all-indicator-answers">
                {state1HDI ?? 'Yet to Update'}
              </td>
              <td className="hdi-answer-second-entity all-indicator-answers">
                {state2HDI ?? 'Yet to Update'}
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
                    alt="Image representing the Literacy Rate of any specific country or state"
                  />
                </div>
              </td>

              <td className="literacy-rate-answer-first-entity all-indicator-answers">
                {state1LiteracyRate
                  ? `${state1LiteracyRate}% (15 years+ above
                                age)`
                  : 'Yet to Update'}
              </td>
              <td className="literacy-rate-answer-second-entity all-indicator-answers">
                {state2LiteracyRate
                  ? `${state2LiteracyRate}% (15 years+ above
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
                {state1LifeExpectancyRatio
                  ? `${state1LifeExpectancyRatio} years`
                  : 'Yet to Update'}
              </td>
              <td className="life-expectancy-ratio-answer-second-entity all-indicator-answers">
                {state2LifeExpectancyRatio
                  ? `${state2LifeExpectancyRatio} years`
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
                    alt="Image representing the Poverty Rate of any specific country or state"
                  />
                </div>
              </td>
              <td className="poverty-ratio-answer-first-entity all-indicator-answers">
                {state1PovertyRatio
                  ? `${state1PovertyRatio}% of total
                                Population`
                  : 'Yet to Update'}
              </td>
              <td className="poverty-ratio-answer-second-entity all-indicator-answers">
                {state2PovertyRatio
                  ? `${state2PovertyRatio}% of total
                                Population`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="employment-rate-text">
                    Employment Rate <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/employment-rate-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image representing the Employment Rate of any specific country or state"
                  />
                </div>
              </td>
              <td className="unemployment-rate-answer-first-entity all-indicator-answers">
                {state1EmploymentRate
                  ? `${state1EmploymentRate}% of
                                total labor force`
                  : 'Yet to Update'}
              </td>
              <td className="unemployment-rate-answer-second-entity all-indicator-answers">
                {state2EmploymentRate
                  ? `${state2EmploymentRate}% of
                                total labor force`
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
            living in a country or a state. The key dimensions that give a
            country or a state good HDI rank are a long and healthy life, being
            knowledgeable and having a decent standard of living. This is
            expressed as a value between 0 and 1. The higher a country&apos;s or
            a state&apos;s human development, the higher its HDI value.
          </p>
          <br />

          {state1LifeExpectancyRatio && state2LifeExpectancyRatio &&
            <p>
              The life expectancy ratio at birth in{' '}
              <strong>
                <span className="first-entity-name-pages-paragraph">
                  {' '}
                  {state1}
                </span>
                ,{' '}
              </strong>
              is{' '}
              <strong>
                {' '}
                [{' '}
                <span className="life-expectancy-ratio-answer-first-entity">
                  {' '}
                  {state1LifeExpectancyRatio} years
                </span>{' '}
                ],{' '}
              </strong>
              whereas the life expectancy ratio at birth in{' '}
              <strong>
                {' '}
                <span className="second-entity-name-pages-paragraph">
                  {' '}
                  {state2}{' '}
                </span>
              </strong>{' '}
              is{' '}
              <strong>
                {' '}
                [{' '}
                <span className="life-expectancy-ratio-answer-first-entity">
                  {' '}
                  {state2LifeExpectancyRatio} years
                </span>{' '}
                ].{' '}
              </strong>
            </p>
          }

          {lifeDifference !== 0 &&
            <p>
              As per the data, a person born and lived in{' '}
              <strong>
                {' '}
                <span className="first-entity-name-pages-paragraph">
                  {' '}
                  {state1}{' '}
                </span>
              </strong>{' '}
              is expected to live{' '}
              <strong>
                {' '}
                [{' '}
                <span className="life-expectancy-ratio-age-calculation">
                  {' '}
                  {lifeDifference}{' '}
                </span>
                years {' '}]
              </strong>{' '}
              <span className="more-or-less-life-expectancy-calculation">
                {' '}
                {moreOrLess}{' '}
              </span>{' '}
              than a person born and lived in
              <strong>
                {' '}
                <span className="second-entity-name-pages-paragraph">
                  {' '}
                  {state2}
                </span>
                .
              </strong>
            </p>
          }
        </div>
      </div>
    </>
  );
}

export default HumanDevelopment;
