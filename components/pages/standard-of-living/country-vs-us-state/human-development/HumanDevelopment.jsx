import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { allCountries } from '@/lib/array-list/allCountriesList';
import { lastYear } from '@/lib/date-and-time/dateAndTime';
import { removeZerosAfterDecimal } from '@/lib/format/format';
import Image from 'next/image';

function HumanDevelopment({
  slug1,
  slug2,
  slug1StandardInfo,
  slug2StandardInfo,
  slug1URLCase,
  slug2URLCase,
}) {
  const slug1HDI = slug1StandardInfo.HDI;
  const slug1LiteracyRate = slug1StandardInfo.literacyRate;
  const slug1LifeExpectancyRatio = slug1StandardInfo.lifeExpectancyRatio;
  const slug1PovertyRatio = slug1StandardInfo.povertyRatio;
  const slug1EmploymentRate = allCountries.includes(slug1)
    ? slug1StandardInfo.unemploymentPercentageOfTotalLabourForce
      ? 100 - slug1StandardInfo.unemploymentPercentageOfTotalLabourForce
      : null
    : slug1StandardInfo.employmentRate;

  const slug2HDI = slug2StandardInfo.HDI;
  const slug2LiteracyRate = slug2StandardInfo.literacyRate;
  const slug2LifeExpectancyRatio = slug2StandardInfo.lifeExpectancyRatio;
  const slug2PovertyRatio = slug2StandardInfo.povertyRatio;
  const slug2EmploymentRate = allCountries.includes(slug2)
    ? slug2StandardInfo.unemploymentPercentageOfTotalLabourForce
      ? 100 - slug2StandardInfo.unemploymentPercentageOfTotalLabourForce
      : null
    : slug2StandardInfo.employmentRate;

  const lifeDifference = removeZerosAfterDecimal(
    Math.abs(slug1LifeExpectancyRatio - slug2LifeExpectancyRatio)
  );
  const moreOrLess =
    slug1LifeExpectancyRatio > slug2LifeExpectancyRatio ? 'more' : 'less';

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
                      src={`/images/${slug1URLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Pictorial representation of map of ${slug1URLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {slug1}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${slug1URLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Image illustrating the flag of ${slug1URLCase}`}
                    />
                  </div>
                </div>
              </th>

              <th>
                <div className="heading-map-name-flag">
                  <div className="second-entity-map-pages-comparison">
                    <Image
                      src={`/images/${slug2URLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Pictorial representation of map of ${slug2URLCase}`}
                    />
                  </div>

                  <div className="second-entity-name-pages-comparison">
                    {' '}
                    {slug2}{' '}
                  </div>

                  <div className="second-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${slug2URLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Image illustrating the flag of ${slug2URLCase}`}
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
                {slug1HDI ?? 'Yet to Update'}
              </td>
              <td className="hdi-answer-second-entity all-indicator-answers">
                {slug2HDI ?? 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="literacy-rate-text">
                    Literacy Rate
                    <br />({lastYear})
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
                {slug1LiteracyRate
                  ? `${slug1LiteracyRate} % (15 years+ above
                                age)`
                  : 'Yet to Update'}
              </td>
              <td className="literacy-rate-answer-second-entity all-indicator-answers">
                {slug2LiteracyRate
                  ? `${slug2LiteracyRate} % (15 years+ above
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
                {slug1LifeExpectancyRatio
                  ? `${slug1LifeExpectancyRatio} years`
                  : 'Yet to Update'}
              </td>
              <td className="life-expectancy-ratio-answer-second-entity all-indicator-answers">
                {slug2LifeExpectancyRatio
                  ? `${slug2LifeExpectancyRatio} years`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="poverty-ratio-text">
                    Poverty Ratio
                    <br />({lastYear})
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
                {slug1PovertyRatio
                  ? `${slug1PovertyRatio} % of total
                                Population`
                  : 'Yet to Update'}
              </td>
              <td className="poverty-ratio-answer-second-entity all-indicator-answers">
                {slug2PovertyRatio
                  ? `${slug2PovertyRatio} % of total
                                Population`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="employment-rate-text">
                    Employment Rate
                    <br />({lastYear})
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
                {slug1EmploymentRate
                  ? `${slug1EmploymentRate} % of
                                total labor force`
                  : 'Yet to Update'}
              </td>
              <td className="unemployment-rate-answer-second-entity all-indicator-answers">
                {slug2EmploymentRate
                  ? `${slug2EmploymentRate} % of
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
            <strong>The Human Development Index (HDI) </strong>
            is a measure used to assess the overall well-being and quality of
            life of people living in a country or a state. The key dimensions
            that give a country or a state good HDI rank are a long and healthy
            life, being knowledgeable and having a decent standard of living.
            This is expressed as a value between 0 and 1. The higher a
            country&apos;s or a state&apos;s human development, the higher its
            HDI value.
          </p>
          <br />
          {slug1LifeExpectancyRatio && slug2LifeExpectancyRatio && (
            <>
              <p>
                The life expectancy ratio at birth in
                <strong>
                  <span className="first-entity-name-pages-paragraph">
                    {' '}
                    {slug1}
                  </span>
                  ,{' '}
                </strong>
                is{' '}
                <strong>
                  [
                  <span className="life-expectancy-ratio-answer-first-entity">
                    {' '}
                    {slug1LifeExpectancyRatio} years{' '}
                  </span>
                  ],{' '}
                </strong>
                whereas the life expectancy ratio at birth in
                <strong>
                  <span className="second-entity-name-pages-paragraph">
                    {' '}
                    {slug2}{' '}
                  </span>
                </strong>
                is{' '}
                <strong>
                  [
                  <span className="life-expectancy-ratio-answer-first-entity">
                    {' '}
                    {slug2LifeExpectancyRatio} years{' '}
                  </span>
                  ].
                </strong>
              </p>
              {lifeDifference !== 0 && (
                <p>
                  As per the data, a person born and lived in
                  <strong>
                    <span className="first-entity-name-pages-paragraph">
                      {' '}
                      {slug1}{' '}
                    </span>
                  </strong>
                  is expected to live{' '}
                  <strong>
                    [
                    <span className="life-expectancy-ratio-age-calculation">
                      {' '}
                      {lifeDifference}{' '}
                    </span>
                    years ]{' '}
                  </strong>
                  <span className="more-or-less-life-expectancy-calculation">
                    {moreOrLess}{' '}
                  </span>
                  than a person born and lived in
                  <strong>
                    <span className="second-entity-name-pages-paragraph">
                      {' '}
                      {slug2}
                    </span>
                    .
                  </strong>
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default HumanDevelopment;
