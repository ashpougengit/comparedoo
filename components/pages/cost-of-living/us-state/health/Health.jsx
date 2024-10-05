import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { formatNumberWithCommas } from '@/lib/format/format';
import Image from 'next/image';

function Health({ costInfo, stateURLCase }) {
  const state = costInfo.state;
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
                      src={`/images/${stateURLCase}-map-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Pictorial representation of map of ${stateURLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {state}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${stateURLCase}-flag-small.png`}
                      layout="fill"
                      objectFit="contain"
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
                {doctorsVisit
                  ? `${formatNumberWithCommas(doctorsVisit)} USD`
                  : 'Yet to Update'}
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
                {specialistsVisit
                  ? `${formatNumberWithCommas(specialistsVisit)} USD`
                  : 'Yet to Update'}
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
                {dentistsVisit
                  ? `${formatNumberWithCommas(dentistsVisit)} USD`
                  : 'Yet to Update'}
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
                {eyeExam
                  ? `${formatNumberWithCommas(eyeExam)} USD`
                  : 'Yet to Update'}
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
                {mentalHealthCounseling
                  ? `${formatNumberWithCommas(mentalHealthCounseling)} USD`
                  : 'Yet to Update'}
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
                {preventiveHealthScreenings
                  ? `${formatNumberWithCommas(preventiveHealthScreenings)} USD`
                  : 'Yet to Update'}
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
                {physicalTherapy
                  ? `${formatNumberWithCommas(physicalTherapy)} USD`
                  : 'Yet to Update'}
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
                {emergencyRoomVisit
                  ? `${formatNumberWithCommas(emergencyRoomVisit)} USD`
                  : 'Yet to Update'}
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
                {hospitalStayPerNight
                  ? `${formatNumberWithCommas(hospitalStayPerNight)} USD`
                  : 'Yet to Update'}
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
                {vaccinations
                  ? `${formatNumberWithCommas(vaccinations)} USD`
                  : 'Yet to Update'}
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
                {prescriptionMedication
                  ? `${formatNumberWithCommas(prescriptionMedication)} USD`
                  : 'Yet to Update'}
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
                {overTheCounterMedication
                  ? `${formatNumberWithCommas(overTheCounterMedication)} USD`
                  : 'Yet to Update'}
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
                {healthInsurancePremiums
                  ? `${formatNumberWithCommas(healthInsurancePremiums)} USD`
                  : 'Yet to Update'}
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
                {healthInsuranceDeductibles
                  ? `${formatNumberWithCommas(healthInsuranceDeductibles)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Health;
