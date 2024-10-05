import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { dollarizedCountries } from '@/lib/array-list/dollarizedCountries';
import {
  formatNumberWithCommas,
  formatUSDWithCommas,
} from '@/lib/format/format';
import Image from 'next/image';

function Education({ costInfo, currency, unitValueInUSD, countryURLCase }) {
  const country = costInfo.country;
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
                      src={`/images/${countryURLCase}-map-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Pictorial representation of map of ${countryURLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {country}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${countryURLCase}-flag-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Image illustrating the flag of ${countryURLCase}`}
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
                {`${formatNumberWithCommas(preschool)} ${preschool ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="preschool-fees-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    preschool * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(primarySchoolFees)} ${primarySchoolFees ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="primary-school-fees-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    primarySchoolFees * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(secondarySchoolFees)} ${secondarySchoolFees ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="secondary-school-fees-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    secondarySchoolFees * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(privateSchoolFees)} ${privateSchoolFees ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="private-school-fees-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    privateSchoolFees * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(universityTuition)} ${universityTuition ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="university-tuition-fees-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    universityTuition * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(universityTuitionPrivate)} ${universityTuitionPrivate ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="university-private-tuition-fees-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    universityTuitionPrivate * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(afterSchoolActivities)} ${afterSchoolActivities ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="after-school-activities-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    afterSchoolActivities * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(specialEducationServices)} ${specialEducationServices ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="special-education-services-first-entity-amount-in-usd-first-entity amount-in-dollar">{`(${formatUSDWithCommas(
                    specialEducationServices * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(tutoring)} ${tutoring ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="tutoring-first-entity-amount-in-usd-first-entity amount-in-dollar">{`(${formatUSDWithCommas(
                    tutoring * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(textbooks)} ${textbooks ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="textbooks-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    textbooks * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(schoolSupplies)} ${schoolSupplies ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="school-supplies-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    schoolSupplies * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Education;
