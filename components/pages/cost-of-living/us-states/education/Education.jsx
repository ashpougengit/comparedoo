import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { formatNumberWithCommas } from '@/lib/format/format';
import Image from 'next/image';

function Education({
  state1CostInfo,
  state2CostInfo,
  state1URLCase,
  state2URLCase,
}) {
  const state1 = state1CostInfo.state;
  const state1Preschool = state1CostInfo.preSchool;
  const state1PrimarySchoolFees = state1CostInfo.primarySchoolFees;
  const state1SecondarySchoolFees = state1CostInfo.secondarySchoolFees;
  const state1PrivateSchoolFees = state1CostInfo.privateSchoolFees;
  const state1UniversityTuition = state1CostInfo.universityTuition;
  const state1UniversityTuitionPrivate =
    state1CostInfo.universityTuitionPrivate;
  const state1AfterSchoolActivities = state1CostInfo.afterSchoolActivities;
  const state1SpecialEducationServices =
    state1CostInfo.specialEducationServices;
  const state1Tutoring = state1CostInfo.tutoring;
  const state1Textbooks = state1CostInfo.textbooks;
  const state1SchoolSupplies = state1CostInfo.schoolSupplies;
  const state1TotalCost =
    (state1Preschool || 0) +
    (state1PrimarySchoolFees || 0) +
    (state1SecondarySchoolFees || 0) +
    (state1PrivateSchoolFees || 0) +
    (state1UniversityTuition || 0) +
    (state1UniversityTuitionPrivate || 0) +
    (state1AfterSchoolActivities || 0) +
    (state1SpecialEducationServices || 0) +
    (state1Tutoring || 0) +
    (state1Textbooks || 0) +
    (state1SchoolSupplies || 0);

  const state2 = state2CostInfo.state;
  const state2Preschool = state2CostInfo.preSchool;
  const state2PrimarySchoolFees = state2CostInfo.primarySchoolFees;
  const state2SecondarySchoolFees = state2CostInfo.secondarySchoolFees;
  const state2PrivateSchoolFees = state2CostInfo.privateSchoolFees;
  const state2UniversityTuition = state2CostInfo.universityTuition;
  const state2UniversityTuitionPrivate =
    state2CostInfo.universityTuitionPrivate;
  const state2AfterSchoolActivities = state2CostInfo.afterSchoolActivities;
  const state2SpecialEducationServices =
    state2CostInfo.specialEducationServices;
  const state2Tutoring = state2CostInfo.tutoring;
  const state2Textbooks = state2CostInfo.textbooks;
  const state2SchoolSupplies = state2CostInfo.schoolSupplies;
  const state2TotalCost =
    (state2Preschool || 0) +
    (state2PrimarySchoolFees || 0) +
    (state2SecondarySchoolFees || 0) +
    (state2PrivateSchoolFees || 0) +
    (state2UniversityTuition || 0) +
    (state2UniversityTuitionPrivate || 0) +
    (state2AfterSchoolActivities || 0) +
    (state2SpecialEducationServices || 0) +
    (state2Tutoring || 0) +
    (state2Textbooks || 0) +
    (state2SchoolSupplies || 0);

  const costTimes =
    state1TotalCost > state2TotalCost
      ? (state1TotalCost / state2TotalCost).toFixed(2)
      : (state2TotalCost / state1TotalCost).toFixed(2);
  const moreOrLess = state1TotalCost > state2TotalCost ? 'more' : 'less';

  return (
    <>
      <AdsHeaderBanner />

      <div className="geographical-map">
        <h2 className="pages-h2">School and Education Cost Comparison</h2>
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
                <div className="all-indicators">PreSchool Fees</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/pre-school-image.png"
                    fill
                    alt="Image Describing PreSchool Fees"
                  />
                </div>
              </td>

              <td className="preschool-fees-first-entity all-indicator-answers">
                {state1Preschool
                  ? `${formatNumberWithCommas(state1Preschool)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="preschool-fees-second-entity all-indicator-answers">
                {state2Preschool
                  ? `${formatNumberWithCommas(state2Preschool)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Primary School Fees</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/primary-school-fees-image.png"
                    fill
                    alt="Image Describing Primary School Fees"
                  />
                </div>
              </td>

              <td className="primary-school-fees-first-entity all-indicator-answers">
                {state1PrimarySchoolFees
                  ? `${formatNumberWithCommas(state1PrimarySchoolFees)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="primary-school-fees-second-entity all-indicator-answers">
                {state2PrimarySchoolFees
                  ? `${formatNumberWithCommas(state2PrimarySchoolFees)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Secondary School Fees</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/secondary-school-fees-image.png"
                    fill
                    alt="Image Describing Secondary School Fees"
                  />
                </div>
              </td>

              <td className="secondary-school-fees-first-entity all-indicator-answers">
                {state1SecondarySchoolFees
                  ? `${formatNumberWithCommas(state1SecondarySchoolFees)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="secondary-school-fees-second-entity all-indicator-answers">
                {state2SecondarySchoolFees
                  ? `${formatNumberWithCommas(state2SecondarySchoolFees)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Private School Fees</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/private-school-fees-image.png"
                    fill
                    alt="Image Describing Private School Fees"
                  />
                </div>
              </td>

              <td className="private-school-fees-first-entity all-indicator-answers">
                {state1PrivateSchoolFees
                  ? `${formatNumberWithCommas(state1PrivateSchoolFees)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="private-school-fees-second-entity all-indicator-answers">
                {state2PrivateSchoolFees
                  ? `${formatNumberWithCommas(state2PrivateSchoolFees)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">University Tuition Fees</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/university-tuition-fees-image.png"
                    fill
                    alt="Image Describing University Tuition Fees"
                  />
                </div>
              </td>

              <td className="university-tuition-fees-first-entity all-indicator-answers">
                {state1UniversityTuition
                  ? `${formatNumberWithCommas(state1UniversityTuition)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="university-tuition-fees-second-entity all-indicator-answers">
                {state2UniversityTuition
                  ? `${formatNumberWithCommas(state2UniversityTuition)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  University Private Tuition Fees
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/university-private-tuition-fees-image.png"
                    fill
                    alt="Image Describing University Private Tuition Fees"
                  />
                </div>
              </td>

              <td className="university-private-tuition-fees-first-entity all-indicator-answers">
                {state1UniversityTuitionPrivate
                  ? `${formatNumberWithCommas(
                    state1UniversityTuitionPrivate
                  )} USD`
                  : 'Yet to Update'}
              </td>
              <td className="university-private-tuition-fees-second-entity all-indicator-answers">
                {state2UniversityTuitionPrivate
                  ? `${formatNumberWithCommas(
                    state2UniversityTuitionPrivate
                  )} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">After School Activities</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/after-school-activities-image.png"
                    fill
                    alt="Image Describing After School Activities"
                  />
                </div>
              </td>

              <td className="after-school-activities-first-entity all-indicator-answers">
                {state1AfterSchoolActivities
                  ? `${formatNumberWithCommas(state1AfterSchoolActivities)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="after-school-activities-second-entity all-indicator-answers">
                {state2AfterSchoolActivities
                  ? `${formatNumberWithCommas(state2AfterSchoolActivities)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Special Education Services</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/special-education-services-image.png"
                    fill
                    alt="Image Describing Special Education Services"
                  />
                </div>
              </td>

              <td className="special-education-services-first-entity all-indicator-answers">
                {state1SpecialEducationServices
                  ? `${formatNumberWithCommas(
                    state1SpecialEducationServices
                  )} USD`
                  : 'Yet to Update'}
              </td>
              <td className="special-education-services-second-entity all-indicator-answers">
                {state2SpecialEducationServices
                  ? `${formatNumberWithCommas(
                    state2SpecialEducationServices
                  )} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Tutoring</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/tutoring-image.png"
                    fill
                    alt="Image Describing Tutoring"
                  />
                </div>
              </td>

              <td className="tutoring-first-entity all-indicator-answers">
                {state1Tutoring
                  ? `${formatNumberWithCommas(state1Tutoring)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="tutoring-second-entity all-indicator-answers">
                {state2Tutoring
                  ? `${formatNumberWithCommas(state2Tutoring)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Textbooks Cost</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/textbooks-image.png"
                    fill
                    alt="Image Describing Textbooks Cost"
                  />
                </div>
              </td>

              <td className="textbooks-first-entity all-indicator-answers">
                {state1Textbooks
                  ? `${formatNumberWithCommas(state1Textbooks)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="textbooks-second-entity all-indicator-answers">
                {state2Textbooks
                  ? `${formatNumberWithCommas(state2Textbooks)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">School Supplies</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/school-supplies-image.png"
                    fill
                    alt="Image Describing School Supplies"
                  />
                </div>
              </td>

              <td className="school-supplies-first-entity all-indicator-answers">
                {state1SchoolSupplies
                  ? `${formatNumberWithCommas(state1SchoolSupplies)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="school-supplies-second-entity all-indicator-answers">
                {state2SchoolSupplies
                  ? `${formatNumberWithCommas(state2SchoolSupplies)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="paragraph-for-pages-below-table">
        <div className="para-for-pages-single-div">
          <h3>
            Does Schooling cost more in
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
              <span className="schooling-cost-calculation"> {costTimes} </span>{' '}
              times{' '}
            </strong>{' '}
            <span className="schooling-cost-more-or-less-calculation">
              {' '}
              {moreOrLess}{' '}
            </span>
            for school and education.
          </p>
        </div>
      </div>
    </>
  );
}

export default Education;
