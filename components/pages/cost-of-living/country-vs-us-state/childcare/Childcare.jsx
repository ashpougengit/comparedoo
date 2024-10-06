import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { formatCost, isDollarized } from '@/lib/format/formatCost';
import Image from 'next/image';

function Childcare({
  slug1,
  slug2,
  value1,
  value2,
  slug1CostInfo,
  slug2CostInfo,
  slug1Currency,
  slug2Currency,
  slug1ExchangeRate,
  slug2ExchangeRate,
  slug1URLCase,
  slug2URLCase,
}) {
  const slug1ChildrensJeans = slug1CostInfo.childrensJeans;
  const slug1ChildrensSneakers = slug1CostInfo.childrensSneakers;
  const slug1ChildrensWinterCoat = slug1CostInfo.childrensWinterCoat;
  const slug1DaycareInfant = slug1CostInfo.daycareInfant;
  const slug1DaycareToddler = slug1CostInfo.daycareToddler;
  const slug1ChildcareForSickDays = slug1CostInfo.childcareForSickDays;
  const slug1EarlyChildhoodEducationPrograms =
    slug1CostInfo.earlyChildhoodEducationPrograms;
  const slug1ExtracurricularActivities =
    slug1CostInfo.extracurricularActivities;
  const slug1SummerCamp = slug1CostInfo.summerCamp;
  const slug1TotalCost =
    ((slug1ChildrensJeans || 0) +
      (slug1ChildrensSneakers || 0) +
      (slug1ChildrensWinterCoat || 0) +
      (slug1DaycareInfant || 0) +
      (slug1DaycareToddler || 0) +
      (slug1ChildcareForSickDays || 0) +
      (slug1EarlyChildhoodEducationPrograms || 0) +
      (slug1ExtracurricularActivities || 0) +
      (slug1SummerCamp || 0)) *
    slug1ExchangeRate;

  const slug2ChildrensJeans = slug2CostInfo.childrensJeans;
  const slug2ChildrensSneakers = slug2CostInfo.childrensSneakers;
  const slug2ChildrensWinterCoat = slug2CostInfo.childrensWinterCoat;
  const slug2DaycareInfant = slug2CostInfo.daycareInfant;
  const slug2DaycareToddler = slug2CostInfo.daycareToddler;
  const slug2ChildcareForSickDays = slug2CostInfo.childcareForSickDays;
  const slug2EarlyChildhoodEducationPrograms =
    slug2CostInfo.earlyChildhoodEducationPrograms;
  const slug2ExtracurricularActivities =
    slug2CostInfo.extracurricularActivities;
  const slug2SummerCamp = slug2CostInfo.summerCamp;
  const slug2TotalCost =
    ((slug2ChildrensJeans || 0) +
      (slug2ChildrensSneakers || 0) +
      (slug2ChildrensWinterCoat || 0) +
      (slug2DaycareInfant || 0) +
      (slug2DaycareToddler || 0) +
      (slug2ChildcareForSickDays || 0) +
      (slug2EarlyChildhoodEducationPrograms || 0) +
      (slug2ExtracurricularActivities || 0) +
      (slug2SummerCamp || 0)) *
    slug2ExchangeRate;

  const costTimes =
    slug1TotalCost > slug2TotalCost
      ? (slug1TotalCost / slug2TotalCost).toFixed(2)
      : (slug2TotalCost / slug1TotalCost).toFixed(2);
  const moreOrLess = slug1TotalCost > slug2TotalCost ? 'more' : 'less';

  const isDollarizedSlug1 = isDollarized(value1, slug1);
  const isDollarizedSlug2 = isDollarized(value2, slug2);

  return (
    <>
      <AdsHeaderBanner />

      <div className="geographical-map">
        <h2 className="pages-h2">Childcare Cost Comparison</h2>
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
                      src={`/images/${slug1URLCase}-map-small.png`}
                      fill
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
                <div className="all-indicators">Children&apos;s Jeans</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/children-jeans-image.png"
                    fill
                    alt="Image Describing Children Jeans"
                  />
                </div>
              </td>

              <td className="children-jeans-first-entity all-indicator-answers">
                {slug1ChildrensJeans
                  ? formatCost(
                    slug1ChildrensJeans,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="children-jeans-second-entity all-indicator-answers">
                {slug2ChildrensJeans
                  ? formatCost(
                    slug2ChildrensJeans,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  Children&apos;s Normal Sneakers
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/children-sneakers-image.png"
                    fill
                    alt="Image Describing Children Normal Sneakers"
                  />
                </div>
              </td>

              <td className="children-sneakers-first-entity all-indicator-answers">
                {slug1ChildrensSneakers
                  ? formatCost(
                    slug1ChildrensSneakers,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="children-sneakers-second-entity all-indicator-answers">
                {slug2ChildrensSneakers
                  ? formatCost(
                    slug2ChildrensSneakers,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  Children&apos;s Winter Coat
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/children-winter-coat-image.png"
                    fill
                    alt="Image Describing Children's Winter Coat"
                  />
                </div>
              </td>

              <td className="children-winter-coat-first-entity all-indicator-answers">
                {slug1ChildrensWinterCoat
                  ? formatCost(
                    slug1ChildrensWinterCoat,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="children-winter-coat-second-entity all-indicator-answers">
                {slug2ChildrensWinterCoat
                  ? formatCost(
                    slug2ChildrensWinterCoat,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Daycare for Infant</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/day-care-infant-image.png"
                    fill
                    alt="Image Describing Daycare for Infant"
                  />
                </div>
              </td>

              <td className="daycare-infant-first-entity all-indicator-answers">
                {slug1DaycareInfant
                  ? formatCost(
                    slug1DaycareInfant,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="daycare-infant-second-entity all-indicator-answers">
                {slug2DaycareInfant
                  ? formatCost(
                    slug2DaycareInfant,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Daycare for Toddler</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/day-care-toddler-image.png"
                    fill
                    alt="Image Describing Daycare for Toddler"
                  />
                </div>
              </td>

              <td className="daycare-toddler-first-entity all-indicator-answers">
                {slug1DaycareToddler
                  ? formatCost(
                    slug1DaycareToddler,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="daycare-toddler-second-entity all-indicator-answers">
                {slug2DaycareToddler
                  ? formatCost(
                    slug2DaycareToddler,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Childcare for Sick Days</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/children-care-for-sick-days-image.png"
                    fill
                    alt="Image Describing Childcare for Sick Days"
                  />
                </div>
              </td>

              <td className="childcare-for-sick-days-first-entity all-indicator-answers">
                {slug1ChildcareForSickDays
                  ? formatCost(
                    slug1ChildcareForSickDays,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="childcare-for-sick-days-second-entity all-indicator-answers">
                {slug2ChildcareForSickDays
                  ? formatCost(
                    slug2ChildcareForSickDays,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  Early Childhood Education Programs
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/early-childhood-education-programs-image.png"
                    fill
                    alt="Image Describing Early Childhood Education Programs"
                  />
                </div>
              </td>

              <td className="early-childhood-education-program-first-entity all-indicator-answers">
                {slug1EarlyChildhoodEducationPrograms
                  ? formatCost(
                    slug1EarlyChildhoodEducationPrograms,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="early-childhood-education-program-second-entity all-indicator-answers">
                {slug2EarlyChildhoodEducationPrograms
                  ? formatCost(
                    slug2EarlyChildhoodEducationPrograms,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  Extra Curricular Activities
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/extra-curricular-activities-image.png"
                    fill
                    alt="Image Describing Extra Curricular Activities"
                  />
                </div>
              </td>

              <td className="extra-curricular-activities-first-entity all-indicator-answers">
                {slug1ExtracurricularActivities
                  ? formatCost(
                    slug1ExtracurricularActivities,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="extra-curricular-activities-second-entity all-indicator-answers">
                {slug2ExtracurricularActivities
                  ? formatCost(
                    slug2ExtracurricularActivities,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Summer Camp for Kids</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/summer-camp-image.png"
                    fill
                    alt="Image Describing Summer Camp"
                  />
                </div>
              </td>

              <td className="summer-camp-first-entity all-indicator-answers">
                {slug1SummerCamp
                  ? formatCost(
                    slug1SummerCamp,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="summer-camp-second-entity all-indicator-answers">
                {slug2SummerCamp
                  ? formatCost(
                    slug2SummerCamp,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="paragraph-for-pages-below-table">
        <div className="para-for-pages-single-div">
          <h3>
            Does Childcare Care cost more in
            <span className="first-entity-name-pages-paragraph"> {slug1} </span>
            than in
            <span className="second-entity-name-pages-paragraph"> {slug2}</span>
            ?
          </h3>

          <p>
            If you lived in
            <span className="first-entity-name-pages-paragraph"> {slug1}</span>,
            instead of
            <span className="second-entity-name-pages-paragraph"> {slug2}</span>
            , you would have to pay
            <strong>
              <span className="childcare-cost-calculation"> {costTimes} </span>
              times{' '}
            </strong>
            <span className="childcare-cost-more-or-less-calculation">
              {moreOrLess}{' '}
            </span>
            for Childcare and kids clothing.
          </p>
        </div>
      </div>
    </>
  );
}

export default Childcare;
