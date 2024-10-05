import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { dollarizedCountries } from '@/lib/array-list/dollarizedCountries';
import {
  formatNumberWithCommas,
  formatUSDWithCommas,
} from '@/lib/format/format';
import Image from 'next/image';

function Health({ costInfo, currency, unitValueInUSD, countryURLCase }) {
  const country = costInfo.country;
  const doctorsVisit = costInfo.doctorsVisit;
  const specialistsVisit = costInfo.specialistsVisit;
  const dentistsVisit = costInfo.dentistsVisit;
  const eyeExam = costInfo.eyeExam;
  const mentalHealthCounseling = costInfo.mentalHealthCounseling;
  const preventiveHealthScreenings = costInfo.preventiveHealthScreenings;
  const physicalTherapy = costInfo.physicalTherapy;
  const emergencyRoomVisit = costInfo.emergencyRoomVisit;
  const hospitalStayPerNight = costInfo.hospitalStayPerNight;
  const vaccinations = costInfo.vaccinations;
  const prescriptionMedication = costInfo.prescriptionMedication;
  const overTheCounterMedication = costInfo.overTheCounterMedication;
  const healthInsurancePremiums = costInfo.healthInsurancePremiums;
  const healthInsuranceDeductibles = costInfo.healthInsuranceDeductibles;

  return (
    <>
      <AdsHeaderBanner />

      <div className="geographical-map">
        <h2 className="pages-h2">Health and Medical Cost</h2>
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
                <div className="all-indicators">Doctor Visit</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/doctors-visit-image.png"
                    fill
                    alt="Image Describing Doctors Visit"
                  />
                </div>
              </td>

              <td className="doctors-visit-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(doctorsVisit)} ${doctorsVisit ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="doctors-visit-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    doctorsVisit * unitValueInUSD
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
                    fill
                    alt="Image Describing Specialists Visit"
                  />
                </div>
              </td>

              <td className="specialists-visit-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(specialistsVisit)} ${specialistsVisit ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="specialists-visit-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    specialistsVisit * unitValueInUSD
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
                    fill
                    alt="Image Describing Dentist Visit"
                  />
                </div>
              </td>

              <td className="dentists-visit-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(dentistsVisit)} ${dentistsVisit ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="dentists-visit-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    dentistsVisit * unitValueInUSD
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
                    fill
                    alt="Image Describing Eye Exam"
                  />
                </div>
              </td>

              <td className="eye-exam-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(eyeExam)} ${eyeExam ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="eye-exam-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    eyeExam * unitValueInUSD
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
                    fill
                    alt="Image Describing Mental Health Counseling"
                  />
                </div>
              </td>

              <td className="mental-health-counseling-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(mentalHealthCounseling)} ${mentalHealthCounseling ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="mental-health-counseling-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    mentalHealthCounseling * unitValueInUSD
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
                    fill
                    alt="Image Describing Preventive Health Screening"
                  />
                </div>
              </td>

              <td className="preventive-health-screening-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(preventiveHealthScreenings)} ${preventiveHealthScreenings ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="preventive-health-screening-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    preventiveHealthScreenings * unitValueInUSD
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
                    fill
                    alt="Image Describing Physical Therapy"
                  />
                </div>
              </td>

              <td className="physical-therapy-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(physicalTherapy)} ${physicalTherapy ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="physical-therapy-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    physicalTherapy * unitValueInUSD
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
                    fill
                    alt="Image Describing Emergency Room Visit"
                  />
                </div>
              </td>

              <td className="emergency-room-visit-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(emergencyRoomVisit)} ${emergencyRoomVisit ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="emergency-room-visit-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    emergencyRoomVisit * unitValueInUSD
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
                    fill
                    alt="Image Describing Hospital Stay Per Night"
                  />
                </div>
              </td>

              <td className="hospital-stay-per-night-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(hospitalStayPerNight)} ${hospitalStayPerNight ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="hospital-stay-per-night-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    hospitalStayPerNight * unitValueInUSD
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
                    fill
                    alt="Image Describing Vaccinations"
                  />
                </div>
              </td>

              <td className="vaccinations-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(vaccinations)} ${vaccinations ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="vaccinations-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    vaccinations * unitValueInUSD
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
                    fill
                    alt="Image Describing Prescription Medication"
                  />
                </div>
              </td>

              <td className="prescription-medication-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(prescriptionMedication)} ${prescriptionMedication ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="prescription-medication-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    prescriptionMedication * unitValueInUSD
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
                    fill
                    alt="Image Describing Over the Counter Medication"
                  />
                </div>
              </td>

              <td className="over-the-counter-medication-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(overTheCounterMedication)} ${overTheCounterMedication ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="over-the-counter-medication-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    overTheCounterMedication * unitValueInUSD
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
                    fill
                    alt="Image Describing Health Insurance Premiums"
                  />
                </div>
              </td>

              <td className="health-insurance-premiums-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(healthInsurancePremiums)} ${healthInsurancePremiums ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="health-insurance-premiums-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    healthInsurancePremiums * unitValueInUSD
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
                    fill
                    alt="Image Describing Health Insurance Deductibles"
                  />
                </div>
              </td>

              <td className="health-insurance-deductibles-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(healthInsuranceDeductibles)} ${healthInsuranceDeductibles ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="health-insurance-deductibles-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    healthInsuranceDeductibles * unitValueInUSD
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

export default Health;
