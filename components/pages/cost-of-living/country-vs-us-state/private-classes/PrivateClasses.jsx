import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { formatCost, isDollarized } from "@/lib/format/formatCost"
import Image from "next/image"

function PrivateClasses({ slug1, slug2, value1, value2, slug1CostInfo, slug2CostInfo, slug1Currency, slug2Currency, slug1ExchangeRate, slug2ExchangeRate, slug1LowerCase, slug2LowerCase }) {
  const slug1LanguageClasses = slug1CostInfo.languageClasses
  const slug1ParentingClasses = slug1CostInfo.parentingClasses
  const slug1ArtClasses = slug1CostInfo.artClasses
  const slug1FitnessClass = slug1CostInfo.fitnessClass
  const slug1MusicLessons = slug1CostInfo.musicLessons
  const slug1DanceLessons = slug1CostInfo.danceLessons
  const slug1ReadingMaterials = slug1CostInfo.readingMaterials
  const slug1EducationalSoftware = slug1CostInfo.educationalSoftware
  const slug1TotalCost = ((slug1LanguageClasses || 0) + (slug1ParentingClasses || 0) + (slug1ArtClasses || 0) + (slug1FitnessClass || 0) + (slug1MusicLessons || 0) + (slug1DanceLessons || 0) + (slug1ReadingMaterials || 0) + (slug1EducationalSoftware || 0)) * slug1ExchangeRate

  const slug2LanguageClasses = slug2CostInfo.languageClasses
  const slug2ParentingClasses = slug2CostInfo.parentingClasses
  const slug2ArtClasses = slug2CostInfo.artClasses
  const slug2FitnessClass = slug2CostInfo.fitnessClass
  const slug2MusicLessons = slug2CostInfo.musicLessons
  const slug2DanceLessons = slug2CostInfo.danceLessons
  const slug2ReadingMaterials = slug2CostInfo.readingMaterials
  const slug2EducationalSoftware = slug2CostInfo.educationalSoftware
  const slug2TotalCost = ((slug2LanguageClasses || 0) + (slug2ParentingClasses || 0) + (slug2ArtClasses || 0) + (slug2FitnessClass || 0) + (slug2MusicLessons || 0) + (slug2DanceLessons || 0) + (slug2ReadingMaterials || 0) + (slug2EducationalSoftware || 0)) * slug2ExchangeRate

  const costTimes = slug1TotalCost > slug2TotalCost ? (slug1TotalCost / slug2TotalCost).toFixed(2) : (slug2TotalCost / slug1TotalCost).toFixed(2)
  const moreOrLess = slug1TotalCost > slug2TotalCost ? 'more' : 'less'

  const isDollarizedSlug1 = isDollarized(value1, slug1);
  const isDollarizedSlug2 = isDollarized(value2, slug2);

  return (
    <>
      <AdsHeaderBanner />

      <div className="geographical-map">
        <h2 className="pages-h2">Private Classes and Lessons Cost Comparison</h2>
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
                      fill alt="Image representing an indicator" />
                  </div>

                  <div className="indicator-text">Indicators</div>

                  <div className="left-indicator">
                    <Image
                      src="/images/indicators-left-image.png"
                      fill alt="Image illustrating an indicator" />
                  </div>
                </div>
              </th>

              <th>
                <div className="heading-map-name-flag">
                  <div className="first-entity-map-pages-comparison">
                    <Image src={`/images/${slug1LowerCase}-map-small.png`} fill alt={`Pictorial representation of map of ${slug1LowerCase}`} />
                  </div>

                  <div className="first-entity-name-pages-comparison">{slug1}</div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image src={`/images/${slug1LowerCase}-flag-small.png`} fill alt={`Image illustrating the flag of ${slug1LowerCase}`} />
                  </div>
                </div>
              </th>

              <th>
                <div className="heading-map-name-flag">
                  <div className="second-entity-map-pages-comparison">
                    <Image src={`/images/${slug2LowerCase}-map-small.png`} fill alt={`Pictorial representation of map of ${slug2LowerCase}`} />
                  </div>

                  <div className="second-entity-name-pages-comparison"> {slug2} </div>

                  <div className="second-entity-flag-pages-comparison">
                    <Image src={`/images/${slug2LowerCase}-flag-small.png`} fill alt={`Image illustrating the flag of ${slug2LowerCase}`} />
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
                    fill alt="Image Describing Language Classes" />
                </div>
              </td>

              <td className="language-classes-first-entity all-indicator-answers">
                {slug1LanguageClasses ? formatCost(slug1LanguageClasses, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
              </td>
              <td className="language-classes-second-entity all-indicator-answers">
                {slug2LanguageClasses ? formatCost(slug2LanguageClasses, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Parenting Classes</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/parenting-classes-image.png"
                    fill alt="Image Describing Parenting Classes" />
                </div>
              </td>

              <td className="parenting-classes-first-entity all-indicator-answers">
                {slug1ParentingClasses ? formatCost(slug1ParentingClasses, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
              </td>
              <td className="parenting-classes-second-entity all-indicator-answers">
                {slug2ParentingClasses ? formatCost(slug2ParentingClasses, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Art Classes</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/art-classes-image.png"
                    fill alt="Image Describing Art Classes" />
                </div>
              </td>

              <td className="art-classes-first-entity all-indicator-answers">
                {slug1ArtClasses ? formatCost(slug1ArtClasses, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
              </td>
              <td className="art-classes-second-entity all-indicator-answers">
                {slug2ArtClasses ? formatCost(slug2ArtClasses, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Fitness Classes</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/fitness-class-image.png"
                    fill alt="Image Describing Fitness Classes" />
                </div>
              </td>

              <td className="fitness-class-first-entity all-indicator-answers">
                {slug1FitnessClass ? formatCost(slug1FitnessClass, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
              </td>
              <td className="fitness-class-second-entity all-indicator-answers">
                {slug2FitnessClass ? formatCost(slug2FitnessClass, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Music Lessons</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/music-lessons-image.png"
                    fill alt="Image Describing Music Lessons" />
                </div>
              </td>

              <td className="music-lessons-first-entity all-indicator-answers">
                {slug1MusicLessons ? formatCost(slug1MusicLessons, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
              </td>
              <td className="music-lessons-second-entity all-indicator-answers">
                {slug2MusicLessons ? formatCost(slug2MusicLessons, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Dance Lessons</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/dance-lessons-image.png"
                    fill alt="Image Describing Dance Lessons" />
                </div>
              </td>

              <td className="dance-lessons-first-entity all-indicator-answers">
                {slug1DanceLessons ? formatCost(slug1DanceLessons, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
              </td>
              <td className="dance-lessons-second-entity all-indicator-answers">
                {slug2DanceLessons ? formatCost(slug2DanceLessons, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Reading Materials for Classes</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/reading-materials-image.png"
                    fill alt="Image Describing Reading Materials for Classes" />
                </div>
              </td>

              <td className="reading-materials-first-entity all-indicator-answers">
                {slug1ReadingMaterials ? formatCost(slug1ReadingMaterials, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
              </td>
              <td className="reading-materials-second-entity all-indicator-answers">
                {slug2ReadingMaterials ? formatCost(slug2ReadingMaterials, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Educational Software</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/educational-software-image.png"
                    fill alt="Image Describing Educational Software" />
                </div>
              </td>

              <td className="educational-software-first-entity all-indicator-answers">
                {slug1EducationalSoftware ? formatCost(slug1EducationalSoftware, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
              </td>
              <td
                className="educational-software-second-entity all-indicator-answers">
                {slug2EducationalSoftware ? formatCost(slug2EducationalSoftware, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="paragraph-for-pages-below-table">
        <div className="para-for-pages-single-div">
          <h3>
            Are Private Classes more expensive in
            <span className="first-entity-name-pages-paragraph"> {slug1} </span>
            than in
            <span className="second-entity-name-pages-paragraph"> {slug2}</span>
            ?
          </h3>

          <p>
            If you lived in
            <span className="first-entity-name-pages-paragraph"> {slug1}</span>
            , instead of
            <span className="second-entity-name-pages-paragraph"> {slug2}</span>
            , you would have to pay
            <strong>
              <span className="private-classes-cost-calculation"> {costTimes} </span>
              times{' '}
            </strong>
            <span className="private-classes-cost-more-or-less-calculation">
              {moreOrLess}{' '}
            </span>
            for Private Classes.
          </p>
        </div>
      </div>
    </>
  )
}

export default PrivateClasses