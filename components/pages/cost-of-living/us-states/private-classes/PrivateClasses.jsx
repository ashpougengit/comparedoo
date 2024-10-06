import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { formatNumberWithCommas } from '@/lib/format/format';
import Image from 'next/image';

function PrivateClasses({
  state1CostInfo,
  state2CostInfo,
  state1URLCase,
  state2URLCase,
}) {
  const state1 = state1CostInfo.state;
  const state1LanguageClasses = state1CostInfo.languageClasses;
  const state1ParentingClasses = state1CostInfo.parentingClasses;
  const state1ArtClasses = state1CostInfo.artClasses;
  const state1FitnessClass = state1CostInfo.fitnessClass;
  const state1MusicLessons = state1CostInfo.musicLessons;
  const state1DanceLessons = state1CostInfo.danceLessons;
  const state1ReadingMaterials = state1CostInfo.readingMaterials;
  const state1EducationalSoftware = state1CostInfo.educationalSoftware;
  const state1TotalCost =
    (state1LanguageClasses || 0) +
    (state1ParentingClasses || 0) +
    (state1ArtClasses || 0) +
    (state1FitnessClass || 0) +
    (state1MusicLessons || 0) +
    (state1DanceLessons || 0) +
    (state1ReadingMaterials || 0) +
    (state1EducationalSoftware || 0);

  const state2 = state2CostInfo.state;
  const state2LanguageClasses = state2CostInfo.languageClasses;
  const state2ParentingClasses = state2CostInfo.parentingClasses;
  const state2ArtClasses = state2CostInfo.artClasses;
  const state2FitnessClass = state2CostInfo.fitnessClass;
  const state2MusicLessons = state2CostInfo.musicLessons;
  const state2DanceLessons = state2CostInfo.danceLessons;
  const state2ReadingMaterials = state2CostInfo.readingMaterials;
  const state2EducationalSoftware = state2CostInfo.educationalSoftware;
  const state2TotalCost =
    (state2LanguageClasses || 0) +
    (state2ParentingClasses || 0) +
    (state2ArtClasses || 0) +
    (state2FitnessClass || 0) +
    (state2MusicLessons || 0) +
    (state2DanceLessons || 0) +
    (state2ReadingMaterials || 0) +
    (state2EducationalSoftware || 0);

  const costTimes =
    state1TotalCost > state2TotalCost
      ? (state1TotalCost / state2TotalCost).toFixed(2)
      : (state2TotalCost / state1TotalCost).toFixed(2);
  const moreOrLess = state1TotalCost > state2TotalCost ? 'more' : 'less';

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
                      alt="Image representing an indicator"
                    />
                  </div>

                  <div className="indicator-text">Indicators</div>

                  <div className="left-indicator">
                    <Image
                      src="/images/indicators-left-image.png"
                      fill
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
                <div className="all-indicators">Language Classes</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/language-classes-image.png"
                    fill
                    alt="Image Describing Language Classes"
                  />
                </div>
              </td>

              <td className="language-classes-first-entity all-indicator-answers">
                {state1LanguageClasses
                  ? `${formatNumberWithCommas(state1LanguageClasses)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="language-classes-second-entity all-indicator-answers">
                {state2LanguageClasses
                  ? `${formatNumberWithCommas(state2LanguageClasses)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Parenting Classes</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/parenting-classes-image.png"
                    fill
                    alt="Image Describing Parenting Classes"
                  />
                </div>
              </td>

              <td className="parenting-classes-first-entity all-indicator-answers">
                {state1ParentingClasses
                  ? `${formatNumberWithCommas(state1ParentingClasses)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="parenting-classes-second-entity all-indicator-answers">
                {state2ParentingClasses
                  ? `${formatNumberWithCommas(state2ParentingClasses)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Art Classes</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/art-classes-image.png"
                    fill
                    alt="Image Describing Art Classes"
                  />
                </div>
              </td>

              <td className="art-classes-first-entity all-indicator-answers">
                {state1ArtClasses
                  ? `${formatNumberWithCommas(state1ArtClasses)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="art-classes-second-entity all-indicator-answers">
                {state2ArtClasses
                  ? `${formatNumberWithCommas(state2ArtClasses)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Fitness Classes</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/fitness-class-image.png"
                    fill
                    alt="Image Describing Fitness Classes"
                  />
                </div>
              </td>

              <td className="fitness-class-first-entity all-indicator-answers">
                {state1FitnessClass
                  ? `${formatNumberWithCommas(state1FitnessClass)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="fitness-class-second-entity all-indicator-answers">
                {state2FitnessClass
                  ? `${formatNumberWithCommas(state2FitnessClass)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Music Lessons</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/music-lessons-image.png"
                    fill
                    alt="Image Describing Music Lessons"
                  />
                </div>
              </td>

              <td className="music-lessons-first-entity all-indicator-answers">
                {state1MusicLessons
                  ? `${formatNumberWithCommas(state1MusicLessons)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="music-lessons-second-entity all-indicator-answers">
                {state2MusicLessons
                  ? `${formatNumberWithCommas(state2MusicLessons)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Dance Lessons</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/dance-lessons-image.png"
                    fill
                    alt="Image Describing Dance Lessons"
                  />
                </div>
              </td>

              <td className="dance-lessons-first-entity all-indicator-answers">
                {state1DanceLessons
                  ? `${formatNumberWithCommas(state1DanceLessons)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="dance-lessons-second-entity all-indicator-answers">
                {state2DanceLessons
                  ? `${formatNumberWithCommas(state2DanceLessons)} USD`
                  : 'Yet to Update'}
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
                    alt="Image Describing Reading Materials for Classes"
                  />
                </div>
              </td>

              <td className="reading-materials-first-entity all-indicator-answers">
                {state1ReadingMaterials
                  ? `${formatNumberWithCommas(state1ReadingMaterials)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="reading-materials-second-entity all-indicator-answers">
                {state2ReadingMaterials
                  ? `${formatNumberWithCommas(state2ReadingMaterials)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Educational Software</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/educational-software-image.png"
                    fill
                    alt="Image Describing Educational Software"
                  />
                </div>
              </td>

              <td className="educational-software-first-entity all-indicator-answers">
                {state1EducationalSoftware
                  ? `${formatNumberWithCommas(state1EducationalSoftware)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="educational-software-second-entity all-indicator-answers">
                {state2EducationalSoftware
                  ? `${formatNumberWithCommas(state2EducationalSoftware)} USD`
                  : 'Yet to Update'}
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
              {state1}{' '}
            </span>{' '}
            than in
            <span className="second-entity-name-pages-paragraph">
              {' '}
              {state2}
            </span>
            ?
          </h3>

          <p>
            If you lived in
            <span className="first-entity-name-pages-paragraph"> {state1}</span>
            , instead of
            <span className="second-entity-name-pages-paragraph">
              {' '}
              {state2}
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

export default PrivateClasses;
