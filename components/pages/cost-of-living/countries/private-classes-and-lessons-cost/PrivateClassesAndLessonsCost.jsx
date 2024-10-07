import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { dollarizedCountries } from '@/lib/array-list/dollarizedCountries';
import {
  formatNumberWithCommas,
  formatUSDWithCommas,
} from '@/lib/format/format';
import Image from 'next/image';

function PrivateClassesAndLessonsCost({
  country1CostInfo,
  country2CostInfo,
  country1Currency,
  country2Currency,
  country1UnitValueInUSD,
  country2UnitValueInUSD,
  country1URLCase,
  country2URLCase,
}) {
  const country1 = country1CostInfo.country;
  const country1LanguageClasses = country1CostInfo.languageClasses;
  const country1ParentingClasses = country1CostInfo.parentingClasses;
  const country1ArtClasses = country1CostInfo.artClasses;
  const country1FitnessClass = country1CostInfo.fitnessClass;
  const country1MusicLessons = country1CostInfo.musicLessons;
  const country1DanceLessons = country1CostInfo.danceLessons;
  const country1ReadingMaterials = country1CostInfo.readingMaterials;
  const country1EducationalSoftware = country1CostInfo.educationalSoftware;
  const country1TotalCost =
    ((country1LanguageClasses || 0) +
      (country1ParentingClasses || 0) +
      (country1ArtClasses || 0) +
      (country1FitnessClass || 0) +
      (country1MusicLessons || 0) +
      (country1DanceLessons || 0) +
      (country1ReadingMaterials || 0) +
      (country1EducationalSoftware || 0)) *
    country1UnitValueInUSD;

  const country2 = country2CostInfo.country;
  const country2LanguageClasses = country2CostInfo.languageClasses;
  const country2ParentingClasses = country2CostInfo.parentingClasses;
  const country2ArtClasses = country2CostInfo.artClasses;
  const country2FitnessClass = country2CostInfo.fitnessClass;
  const country2MusicLessons = country2CostInfo.musicLessons;
  const country2DanceLessons = country2CostInfo.danceLessons;
  const country2ReadingMaterials = country2CostInfo.readingMaterials;
  const country2EducationalSoftware = country2CostInfo.educationalSoftware;
  const country2TotalCost =
    ((country2LanguageClasses || 0) +
      (country2ParentingClasses || 0) +
      (country2ArtClasses || 0) +
      (country2FitnessClass || 0) +
      (country2MusicLessons || 0) +
      (country2DanceLessons || 0) +
      (country2ReadingMaterials || 0) +
      (country2EducationalSoftware || 0)) *
    country2UnitValueInUSD;

  const costTimes =
    country1TotalCost > country2TotalCost
      ? (country1TotalCost / country2TotalCost).toFixed(2)
      : (country2TotalCost / country1TotalCost).toFixed(2);
  const moreOrLess = country1TotalCost > country2TotalCost ? 'more' : 'less';

  return (
    <>
      <AdsHeaderBanner />

      <div className="geographical-map">
        <h2 className="pages-h2">
          Private Classes and Lessons Cost Comparison
        </h2>
      </div>

      <div className="basic-information-comparison-div1">
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
                <div className="all-indicators">Language Classes</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/language-classes-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Language Classes"
                  />
                </div>
              </td>

              <td className="language-classes-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1LanguageClasses)} ${country1LanguageClasses ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="language-classes-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1LanguageClasses * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="language-classes-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2LanguageClasses)} ${country2LanguageClasses ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="language-classes-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2LanguageClasses * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Parenting Classes</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/parenting-classes-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Parenting Classes"
                  />
                </div>
              </td>

              <td className="parenting-classes-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1ParentingClasses)} ${country1ParentingClasses ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="parenting-classes-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1ParentingClasses * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="parenting-classes-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2ParentingClasses)} ${country2ParentingClasses ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="parenting-classes-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2ParentingClasses * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Art Classes</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/art-classes-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Art Classes"
                  />
                </div>
              </td>

              <td className="art-classes-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1ArtClasses)} ${country1ArtClasses ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="art-classes-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1ArtClasses * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="art-classes-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2ArtClasses)} ${country2ArtClasses ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="art-classes-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2ArtClasses * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Fitness Classes</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/fitness-class-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Fitness Classes"
                  />
                </div>
              </td>

              <td className="fitness-class-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1FitnessClass)} ${country1FitnessClass ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="fitness-class-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1FitnessClass * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="fitness-class-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2FitnessClass)} ${country2FitnessClass ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="fitness-class-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2FitnessClass * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Music Lessons</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/music-lessons-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Music Lessons"
                  />
                </div>
              </td>

              <td className="music-lessons-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1MusicLessons)} ${country1MusicLessons ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="music-lessons-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1MusicLessons * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="music-lessons-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2MusicLessons)} ${country2MusicLessons ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="music-lessons-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2MusicLessons * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Dance Lessons</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/dance-lessons-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Dance Lessons"
                  />
                </div>
              </td>

              <td className="dance-lessons-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1DanceLessons)} ${country1DanceLessons ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="dance-lessons-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1DanceLessons * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="dance-lessons-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2DanceLessons)} ${country2DanceLessons ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="dance-lessons-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2DanceLessons * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  Reading Materials for Classes
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/reading-materials-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Reading Materials for Classes"
                  />
                </div>
              </td>

              <td className="reading-materials-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1ReadingMaterials)} ${country1ReadingMaterials ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="reading-materials-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1ReadingMaterials * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="reading-materials-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2ReadingMaterials)} ${country2ReadingMaterials ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="reading-materials-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2ReadingMaterials * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Educational Software</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/educational-software-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Educational Software"
                  />
                </div>
              </td>

              <td className="educational-software-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1EducationalSoftware)} ${country1EducationalSoftware ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="educational-software-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1EducationalSoftware * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="educational-software-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2EducationalSoftware)} ${country2EducationalSoftware ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="educational-software-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2EducationalSoftware * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="paragraph-for-pages-below-table">
        <div className="para-for-pages-single-div">
          <h3>
            Are Private Classes more expensive in
            <span className="first-entity-name-pages-paragraph">
              {' '}
              {country1}{' '}
            </span>{' '}
            than in
            <span className="second-entity-name-pages-paragraph">
              {' '}
              {country2}
            </span>
            ?
          </h3>

          <p>
            If you lived in
            <span className="first-entity-name-pages-paragraph">
              {' '}
              {country1}
            </span>
            , instead of
            <span className="second-entity-name-pages-paragraph">
              {' '}
              {country2}
            </span>
            , you would have to pay
            <strong>
              <span className="private-classes-cost-calculation">
                {' '}
                {costTimes}{' '}
              </span>{' '}
              times{' '}
            </strong>{' '}
            <span className="private-classes-cost-more-or-less-calculation">
              {' '}
              {moreOrLess}{' '}
            </span>
            for Private Classes.
          </p>
        </div>
      </div>
    </>
  );
}

export default PrivateClassesAndLessonsCost;
