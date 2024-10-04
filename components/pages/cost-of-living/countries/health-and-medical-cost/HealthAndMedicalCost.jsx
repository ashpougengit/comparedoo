import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { dollarizedCountries } from '@/lib/array-list/dollarizedCountries';
import {
  formatNumberWithCommas,
  formatUSDWithCommas,
} from '@/lib/format/format';
import Image from 'next/image';

function HealthAndMedicalCost({
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
  const country1DoctorsVisit = country1CostInfo.doctorsVisit;
  const country1SpecialistsVisit = country1CostInfo.specialistsVisit;
  const country1DentistsVisit = country1CostInfo.dentistsVisit;
  const country1EyeExam = country1CostInfo.eyeExam;
  const country1MentalHealthCounseling =
    country1CostInfo.mentalHealthCounseling;
  const country1PreventiveHealthScreenings =
    country1CostInfo.preventiveHealthScreenings;
  const country1PhysicalTherapy = country1CostInfo.physicalTherapy;
  const country1EmergencyRoomVisit = country1CostInfo.emergencyRoomVisit;
  const country1HospitalStayPerNight = country1CostInfo.hospitalStayPerNight;
  const country1Vaccinations = country1CostInfo.vaccinations;
  const country1PrescriptionMedication =
    country1CostInfo.prescriptionMedication;
  const country1OverTheCounterMedication =
    country1CostInfo.overTheCounterMedication;
  const country1HealthInsurancePremiums =
    country1CostInfo.healthInsurancePremiums;
  const country1HealthInsuranceDeductibles =
    country1CostInfo.healthInsuranceDeductibles;
  const country1TotalCost =
    ((country1DoctorsVisit || 0) +
      (country1SpecialistsVisit || 0) +
      (country1DentistsVisit || 0) +
      (country1EyeExam || 0) +
      (country1MentalHealthCounseling || 0) +
      (country1PreventiveHealthScreenings || 0) +
      (country1PhysicalTherapy || 0) +
      (country1EmergencyRoomVisit || 0) +
      (country1HospitalStayPerNight || 0) +
      (country1Vaccinations || 0) +
      (country1PrescriptionMedication || 0) +
      (country1OverTheCounterMedication || 0) +
      (country1HealthInsurancePremiums || 0) +
      (country1HealthInsuranceDeductibles || 0)) *
    country1UnitValueInUSD;

  const country2 = country2CostInfo.country;
  const country2DoctorsVisit = country2CostInfo.doctorsVisit;
  const country2SpecialistsVisit = country2CostInfo.specialistsVisit;
  const country2DentistsVisit = country2CostInfo.dentistsVisit;
  const country2EyeExam = country2CostInfo.eyeExam;
  const country2MentalHealthCounseling =
    country2CostInfo.mentalHealthCounseling;
  const country2PreventiveHealthScreenings =
    country2CostInfo.preventiveHealthScreenings;
  const country2PhysicalTherapy = country2CostInfo.physicalTherapy;
  const country2EmergencyRoomVisit = country2CostInfo.emergencyRoomVisit;
  const country2HospitalStayPerNight = country2CostInfo.hospitalStayPerNight;
  const country2Vaccinations = country2CostInfo.vaccinations;
  const country2PrescriptionMedication =
    country2CostInfo.prescriptionMedication;
  const country2OverTheCounterMedication =
    country2CostInfo.overTheCounterMedication;
  const country2HealthInsurancePremiums =
    country2CostInfo.healthInsurancePremiums;
  const country2HealthInsuranceDeductibles =
    country2CostInfo.healthInsuranceDeductibles;
  const country2TotalCost =
    ((country2DoctorsVisit || 0) +
      (country2SpecialistsVisit || 0) +
      (country2DentistsVisit || 0) +
      (country2EyeExam || 0) +
      (country2MentalHealthCounseling || 0) +
      (country2PreventiveHealthScreenings || 0) +
      (country2PhysicalTherapy || 0) +
      (country2EmergencyRoomVisit || 0) +
      (country2HospitalStayPerNight || 0) +
      (country2Vaccinations || 0) +
      (country2PrescriptionMedication || 0) +
      (country2OverTheCounterMedication || 0) +
      (country2HealthInsurancePremiums || 0) +
      (country2HealthInsuranceDeductibles || 0)) *
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
        <h2 className="pages-h2">Health and Medical Cost Comparison</h2>
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
                <div className="all-indicators">Doctor Visit</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/doctors-visit-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Doctors Visit"
                  />
                </div>
              </td>

              <td className="doctors-visit-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1DoctorsVisit)} ${country1DoctorsVisit ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="doctors-visit-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1DoctorsVisit * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="doctors-visit-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2DoctorsVisit)} ${country2DoctorsVisit ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="doctors-visit-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2DoctorsVisit * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Specialist Visit</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/specialist-visit-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Specialists Visit"
                  />
                </div>
              </td>

              <td className="specialists-visit-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1SpecialistsVisit)} ${country1SpecialistsVisit ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="specialists-visit-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1SpecialistsVisit * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="specialists-visit-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2SpecialistsVisit)} ${country2SpecialistsVisit ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="specialists-visit-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2SpecialistsVisit * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Dentist Visit</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/dentist-visit-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Dentist Visit"
                  />
                </div>
              </td>

              <td className="dentists-visit-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1DentistsVisit)} ${country1DentistsVisit ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="dentists-visit-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1DentistsVisit * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="dentists-visit-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2DentistsVisit)} ${country2DentistsVisit ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="dentists-visit-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2DentistsVisit * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Eye Exam</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/eye-exam-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Eye Exam"
                  />
                </div>
              </td>

              <td className="eye-exam-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1EyeExam)} ${country1EyeExam ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="eye-exam-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1EyeExam * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="eye-exam-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2EyeExam)} ${country2EyeExam ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="eye-exam-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2EyeExam * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Mental Health Counseling</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/mental-health-counseling.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Mental Health Counseling"
                  />
                </div>
              </td>

              <td className="mental-health-counseling-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1MentalHealthCounseling)} ${country1MentalHealthCounseling ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="mental-health-counseling-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1MentalHealthCounseling * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="mental-health-counseling-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2MentalHealthCounseling)} ${country2MentalHealthCounseling ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="mental-health-counseling-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2MentalHealthCounseling * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  Preventive Health Screening
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/preventive-health-screening.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Preventive Health Screening"
                  />
                </div>
              </td>

              <td className="preventive-health-screening-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(
                  country1PreventiveHealthScreenings
                )} ${country1PreventiveHealthScreenings ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="preventive-health-screening-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1PreventiveHealthScreenings * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="preventive-health-screening-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(
                  country2PreventiveHealthScreenings
                )} ${country2PreventiveHealthScreenings ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="preventive-health-screening-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2PreventiveHealthScreenings * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Physical Therapy</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/physical-therapy-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Physical Therapy"
                  />
                </div>
              </td>

              <td className="physical-therapy-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1PhysicalTherapy)} ${country1PhysicalTherapy ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="physical-therapy-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1PhysicalTherapy * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="physical-therapy-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2PhysicalTherapy)} ${country2PhysicalTherapy ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="physical-therapy-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2PhysicalTherapy * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Emergency Room Visit</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/emergency-room-visit-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Emergency Room Visit"
                  />
                </div>
              </td>

              <td className="emergency-room-visit-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1EmergencyRoomVisit)} ${country1EmergencyRoomVisit ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="emergency-room-visit-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1EmergencyRoomVisit * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="emergency-room-visit-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2EmergencyRoomVisit)} ${country2EmergencyRoomVisit ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="emergency-room-visit-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2EmergencyRoomVisit * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Hospital Stay Per Night</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/hospital-stay-per-night-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Hospital Stay Per Night"
                  />
                </div>
              </td>

              <td className="hospital-stay-per-night-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1HospitalStayPerNight)} ${country1HospitalStayPerNight ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="hospital-stay-per-night-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1HospitalStayPerNight * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="hospital-stay-per-night-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2HospitalStayPerNight)} ${country2HospitalStayPerNight ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="hospital-stay-per-night-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2HospitalStayPerNight * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Vaccinations</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/vaccinations-charge-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Vaccinations"
                  />
                </div>
              </td>

              <td className="vaccinations-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1Vaccinations)} ${country1Vaccinations ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="vaccinations-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1Vaccinations * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="vaccinations-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2Vaccinations)} ${country2Vaccinations ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="vaccinations-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2Vaccinations * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Prescription Medication</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/prescription-medication-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Prescription Medication"
                  />
                </div>
              </td>

              <td className="prescription-medication-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1PrescriptionMedication)} ${country1PrescriptionMedication ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="prescription-medication-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1PrescriptionMedication * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="prescription-medication-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2PrescriptionMedication)} ${country2PrescriptionMedication ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="prescription-medication-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2PrescriptionMedication * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  Over the Counter Medication
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/over-the-counter-medication-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Over the Counter Medication"
                  />
                </div>
              </td>

              <td className="over-the-counter-medication-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1OverTheCounterMedication)} ${country1OverTheCounterMedication ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="over-the-counter-medication-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1OverTheCounterMedication * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="over-the-counter-medication-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2OverTheCounterMedication)} ${country2OverTheCounterMedication ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="over-the-counter-medication-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2OverTheCounterMedication * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Health Insurance Premiums</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/health-insurance-premiums-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Health Insurance Premiums"
                  />
                </div>
              </td>

              <td className="health-insurance-premiums-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1HealthInsurancePremiums)} ${country1HealthInsurancePremiums ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="health-insurance-premiums-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1HealthInsurancePremiums * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="health-insurance-premiums-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2HealthInsurancePremiums)} ${country2HealthInsurancePremiums ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="health-insurance-premiums-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2HealthInsurancePremiums * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  Health Insurance Deductibles
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/health-insurance-deductibles-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Health Insurance Deductibles"
                  />
                </div>
              </td>

              <td className="health-insurance-deductibles-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(
                  country1HealthInsuranceDeductibles
                )} ${country1HealthInsuranceDeductibles ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="health-insurance-deductibles-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1HealthInsuranceDeductibles * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="health-insurance-deductibles-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(
                  country2HealthInsuranceDeductibles
                )} ${country2HealthInsuranceDeductibles ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="health-insurance-deductibles-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2HealthInsuranceDeductibles * country2UnitValueInUSD
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
            Does Health and Medical Treatment cost more in
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
              <span className="health-and-medical-cost-calculation">
                {' '}
                {costTimes}{' '}
              </span>{' '}
              times{' '}
            </strong>{' '}
            <span className="health-and-medical-cost-more-or-less-calculation">
              {' '}
              {moreOrLess}{' '}
            </span>
            for Health and Medical Treatment.
          </p>
        </div>
      </div>
    </>
  );
}

export default HealthAndMedicalCost;
