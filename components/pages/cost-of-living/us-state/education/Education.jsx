import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { formatNumberWithCommas } from '@/lib/format/format';
import Image from 'next/image';

function Education({ costInfo, stateURLCase }) {
  const state = costInfo.state;
  const preschool = costInfo.preSchool;
  const primarySchoolFees = costInfo.primarySchoolFees;
  const secondarySchoolFees = costInfo.secondarySchoolFees;
  const privateSchoolFees = costInfo.privateSchoolFees;
  const universityTuition = costInfo.universityTuition;
  const universityTuitionPrivate = costInfo.universityTuitionPrivate;
  const afterSchoolActivities = costInfo.afterSchoolActivities;
  const specialEducationServices = costInfo.specialEducationServices;
  const tutoring = costInfo.tutoring;
  const textbooks = costInfo.textbooks;
  const schoolSupplies = costInfo.schoolSupplies;

  return (
    <>
      <AdsHeaderBanner />

      <div className="geographical-map">
        <h2 className="pages-h2">School and Education Cost</h2>
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
                      src={`/images/${stateURLCase}-map-small.png`}
                      fill
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
                {preschool
                  ? `${formatNumberWithCommas(preschool)} USD`
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
                {primarySchoolFees
                  ? `${formatNumberWithCommas(primarySchoolFees)} USD`
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
                {secondarySchoolFees
                  ? `${formatNumberWithCommas(secondarySchoolFees)} USD`
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
                {privateSchoolFees
                  ? `${formatNumberWithCommas(privateSchoolFees)} USD`
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
                {universityTuition
                  ? `${formatNumberWithCommas(universityTuition)} USD`
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
                {universityTuitionPrivate
                  ? `${formatNumberWithCommas(universityTuitionPrivate)} USD`
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
                {afterSchoolActivities
                  ? `${formatNumberWithCommas(afterSchoolActivities)} USD`
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
                {specialEducationServices
                  ? `${formatNumberWithCommas(specialEducationServices)} USD`
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
                {tutoring
                  ? `${formatNumberWithCommas(tutoring)} USD`
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
                {textbooks
                  ? `${formatNumberWithCommas(textbooks)} USD`
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
                {schoolSupplies
                  ? `${formatNumberWithCommas(schoolSupplies)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Education;
