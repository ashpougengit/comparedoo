import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { formatNumberWithCommas } from '@/lib/format/format';
import Image from 'next/image';

function Childcare({ costInfo, stateURLCase }) {
  const state = costInfo.state;
  const childrensJeans = costInfo.childrensJeans;
  const childrensSneakers = costInfo.childrensSneakers;
  const childrensWinterCoat = costInfo.childrensWinterCoat;
  const daycareInfant = costInfo.daycareInfant;
  const daycareToddler = costInfo.daycareToddler;
  const childcareForSickDays = costInfo.childcareForSickDays;
  const earlyChildhoodEducationPrograms =
    costInfo.earlyChildhoodEducationPrograms;
  const extracurricularActivities = costInfo.extracurricularActivities;
  const summerCamp = costInfo.summerCamp;

  return (
    <>
      <AdsHeaderBanner />

      <div className="geographical-map">
        <h2 className="pages-h2">Childcare Cost</h2>
      </div>

      <div className="basic-information-comparison-div1">
        <table className="indicators-single-country-divs">
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
                      src={`/images/${stateURLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Pictorial representation of map of ${stateURLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {state}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${stateURLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Image illustrating the flag of ${stateURLCase}`}
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Children Jeans"
                  />
                </div>
              </td>

              <td className="children-jeans-first-entity all-indicator-answers">
                {childrensJeans
                  ? `${formatNumberWithCommas(childrensJeans)} USD`
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Children Normal Sneakers"
                  />
                </div>
              </td>

              <td className="children-sneakers-first-entity all-indicator-answers">
                {childrensSneakers
                  ? `${formatNumberWithCommas(childrensSneakers)} USD`
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Children's Winter Coat"
                  />
                </div>
              </td>

              <td className="children-winter-coat-first-entity all-indicator-answers">
                {childrensWinterCoat
                  ? `${formatNumberWithCommas(childrensWinterCoat)} USD`
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Daycare for Infant"
                  />
                </div>
              </td>

              <td className="daycare-infant-first-entity all-indicator-answers">
                {daycareInfant
                  ? `${formatNumberWithCommas(daycareInfant)} USD`
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Daycare for Toddler"
                  />
                </div>
              </td>

              <td className="daycare-toddler-first-entity all-indicator-answers">
                {daycareToddler
                  ? `${formatNumberWithCommas(daycareToddler)} USD`
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Childcare for Sick Days"
                  />
                </div>
              </td>

              <td className="childcare-for-sick-days-first-entity all-indicator-answers">
                {childcareForSickDays
                  ? `${formatNumberWithCommas(childcareForSickDays)} USD`
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Early Childhood Education Programs"
                  />
                </div>
              </td>

              <td className="early-childhood-education-program-first-entity all-indicator-answers">
                {earlyChildhoodEducationPrograms
                  ? `${formatNumberWithCommas(
                    earlyChildhoodEducationPrograms
                  )} USD`
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Extra Curricular Activities"
                  />
                </div>
              </td>

              <td className="extra-curricular-activities-first-entity all-indicator-answers">
                {extracurricularActivities
                  ? `${formatNumberWithCommas(extracurricularActivities)} USD`
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Summer Camp"
                  />
                </div>
              </td>

              <td className="summer-camp-first-entity all-indicator-answers">
                {summerCamp
                  ? `${formatNumberWithCommas(summerCamp)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Childcare;
