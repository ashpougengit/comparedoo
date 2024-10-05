import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { dollarizedCountries } from '@/lib/array-list/dollarizedCountries';
import {
  formatNumberWithCommas,
  formatUSDWithCommas,
} from '@/lib/format/format';
import Image from 'next/image';

function SchoolAndEducationCost({
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
  const country1Preschool = country1CostInfo.preSchool;
  const country1PrimarySchoolFees = country1CostInfo.primarySchoolFees;
  const country1SecondarySchoolFees = country1CostInfo.secondarySchoolFees;
  const country1PrivateSchoolFees = country1CostInfo.privateSchoolFees;
  const country1UniversityTuition = country1CostInfo.universityTuition;
  const country1UniversityTuitionPrivate =
    country1CostInfo.universityTuitionPrivate;
  const country1AfterSchoolActivities = country1CostInfo.afterSchoolActivities;
  const country1SpecialEducationServices =
    country1CostInfo.specialEducationServices;
  const country1Tutoring = country1CostInfo.tutoring;
  const country1Textbooks = country1CostInfo.textbooks;
  const country1SchoolSupplies = country1CostInfo.schoolSupplies;
  const country1TotalCost =
    ((country1Preschool || 0) +
      (country1PrimarySchoolFees || 0) +
      (country1SecondarySchoolFees || 0) +
      (country1PrivateSchoolFees || 0) +
      (country1UniversityTuition || 0) +
      (country1UniversityTuitionPrivate || 0) +
      (country1AfterSchoolActivities || 0) +
      (country1SpecialEducationServices || 0) +
      (country1Tutoring || 0) +
      (country1Textbooks || 0) +
      (country1SchoolSupplies || 0)) *
    country1UnitValueInUSD;

  const country2 = country2CostInfo.country;
  const country2Preschool = country2CostInfo.preSchool;
  const country2PrimarySchoolFees = country2CostInfo.primarySchoolFees;
  const country2SecondarySchoolFees = country2CostInfo.secondarySchoolFees;
  const country2PrivateSchoolFees = country2CostInfo.privateSchoolFees;
  const country2UniversityTuition = country2CostInfo.universityTuition;
  const country2UniversityTuitionPrivate =
    country2CostInfo.universityTuitionPrivate;
  const country2AfterSchoolActivities = country2CostInfo.afterSchoolActivities;
  const country2SpecialEducationServices =
    country2CostInfo.specialEducationServices;
  const country2Tutoring = country2CostInfo.tutoring;
  const country2Textbooks = country2CostInfo.textbooks;
  const country2SchoolSupplies = country2CostInfo.schoolSupplies;
  const country2TotalCost =
    ((country2Preschool || 0) +
      (country2PrimarySchoolFees || 0) +
      (country2SecondarySchoolFees || 0) +
      (country2PrivateSchoolFees || 0) +
      (country2UniversityTuition || 0) +
      (country2UniversityTuitionPrivate || 0) +
      (country2AfterSchoolActivities || 0) +
      (country2SpecialEducationServices || 0) +
      (country2Tutoring || 0) +
      (country2Textbooks || 0) +
      (country2SchoolSupplies || 0)) *
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
                      src={`/images/${country1URLCase}-map-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Pictorial representation of map of ${country1URLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {country1}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${country1URLCase}-flag-small.png`}
                      layout="fill"
                      objectFit="contain"
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
                      layout="fill"
                      objectFit="contain"
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
                      layout="fill"
                      objectFit="contain"
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
                {`${formatNumberWithCommas(country1Preschool)} ${country1Preschool ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="preschool-fees-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1Preschool * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="preschool-fees-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2Preschool)} ${country2Preschool ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="preschool-fees-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2Preschool * country2UnitValueInUSD
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
                {`${formatNumberWithCommas(country1PrimarySchoolFees)} ${country1PrimarySchoolFees ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="primary-school-fees-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1PrimarySchoolFees * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="primary-school-fees-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2PrimarySchoolFees)} ${country2PrimarySchoolFees ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="primary-school-fees-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2PrimarySchoolFees * country2UnitValueInUSD
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
                {`${formatNumberWithCommas(country1SecondarySchoolFees)} ${country1SecondarySchoolFees ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="secondary-school-fees-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1SecondarySchoolFees * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="secondary-school-fees-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2SecondarySchoolFees)} ${country2SecondarySchoolFees ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="secondary-school-fees-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2SecondarySchoolFees * country2UnitValueInUSD
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
                {`${formatNumberWithCommas(country1PrivateSchoolFees)} ${country1PrivateSchoolFees ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="private-school-fees-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1PrivateSchoolFees * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="private-school-fees-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2PrivateSchoolFees)} ${country2PrivateSchoolFees ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="private-school-fees-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2PrivateSchoolFees * country2UnitValueInUSD
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
                {`${formatNumberWithCommas(country1UniversityTuition)} ${country1UniversityTuition ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="university-tuition-fees-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1UniversityTuition * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="university-tuition-fees-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2UniversityTuition)} ${country2UniversityTuition ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="university-tuition-fees-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2UniversityTuition * country2UnitValueInUSD
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
                {`${formatNumberWithCommas(country1UniversityTuitionPrivate)} ${country1UniversityTuitionPrivate ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="university-private-tuition-fees-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1UniversityTuitionPrivate * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="university-private-tuition-fees-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2UniversityTuitionPrivate)} ${country2UniversityTuitionPrivate ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="university-private-tuition-fees-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2UniversityTuitionPrivate * country2UnitValueInUSD
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
                {`${formatNumberWithCommas(country1AfterSchoolActivities)} ${country1AfterSchoolActivities ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="after-school-activities-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1AfterSchoolActivities * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="after-school-activities-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2AfterSchoolActivities)} ${country2AfterSchoolActivities ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="after-school-activities-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2AfterSchoolActivities * country2UnitValueInUSD
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
                {`${formatNumberWithCommas(country1SpecialEducationServices)} ${country1SpecialEducationServices ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="special-education-services-first-entity-amount-in-usd-first-entity amount-in-dollar">{`(${formatUSDWithCommas(
                    country1SpecialEducationServices * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="special-education-services-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2SpecialEducationServices)} ${country2SpecialEducationServices ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="special-education-services-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2SpecialEducationServices * country2UnitValueInUSD
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
                {`${formatNumberWithCommas(country1Tutoring)} ${country1Tutoring ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="tutoring-first-entity-amount-in-usd-first-entity amount-in-dollar">{`(${formatUSDWithCommas(
                    country1Tutoring * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="tutoring-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2Tutoring)} ${country2Tutoring ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="tutoring-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2Tutoring * country2UnitValueInUSD
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
                {`${formatNumberWithCommas(country1Textbooks)} ${country1Textbooks ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="textbooks-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1Textbooks * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="textbooks-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2Textbooks)} ${country2Textbooks ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="textbooks-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2Textbooks * country2UnitValueInUSD
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
                {`${formatNumberWithCommas(country1SchoolSupplies)} ${country1SchoolSupplies ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="school-supplies-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1SchoolSupplies * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="school-supplies-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2SchoolSupplies)} ${country2SchoolSupplies ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="school-supplies-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2SchoolSupplies * country2UnitValueInUSD
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
            Does Schooling cost more in
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

export default SchoolAndEducationCost;
