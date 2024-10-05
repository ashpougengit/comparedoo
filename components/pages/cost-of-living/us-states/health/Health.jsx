import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { formatNumberWithCommas } from '@/lib/format/format';
import Image from 'next/image';

function Health({
  state1CostInfo,
  state2CostInfo,
  state1URLCase,
  state2URLCase,
}) {
  const state1 = state1CostInfo.state;
  const state1DoctorsVisit = state1CostInfo.doctorsVisit;
  const state1SpecialistsVisit = state1CostInfo.specialistsVisit;
  const state1DentistsVisit = state1CostInfo.dentistsVisit;
  const state1EyeExam = state1CostInfo.eyeExam;
  const state1MentalHealthCounseling = state1CostInfo.mentalHealthCounseling;
  const state1PreventiveHealthScreenings =
    state1CostInfo.preventiveHealthScreenings;
  const state1PhysicalTherapy = state1CostInfo.physicalTherapy;
  const state1EmergencyRoomVisit = state1CostInfo.emergencyRoomVisit;
  const state1HospitalStayPerNight = state1CostInfo.hospitalStayPerNight;
  const state1Vaccinations = state1CostInfo.vaccinations;
  const state1PrescriptionMedication = state1CostInfo.prescriptionMedication;
  const state1OverTheCounterMedication =
    state1CostInfo.overTheCounterMedication;
  const state1HealthInsurancePremiums = state1CostInfo.healthInsurancePremiums;
  const state1HealthInsuranceDeductibles =
    state1CostInfo.healthInsuranceDeductibles;
  const state1TotalCost =
    (state1DoctorsVisit || 0) +
    (state1SpecialistsVisit || 0) +
    (state1DentistsVisit || 0) +
    (state1EyeExam || 0) +
    (state1MentalHealthCounseling || 0) +
    (state1PreventiveHealthScreenings || 0) +
    (state1PhysicalTherapy || 0) +
    (state1EmergencyRoomVisit || 0) +
    (state1HospitalStayPerNight || 0) +
    (state1Vaccinations || 0) +
    (state1PrescriptionMedication || 0) +
    (state1OverTheCounterMedication || 0) +
    (state1HealthInsurancePremiums || 0) +
    (state1HealthInsuranceDeductibles || 0);

  const state2 = state2CostInfo.state;
  const state2DoctorsVisit = state2CostInfo.doctorsVisit;
  const state2SpecialistsVisit = state2CostInfo.specialistsVisit;
  const state2DentistsVisit = state2CostInfo.dentistsVisit;
  const state2EyeExam = state2CostInfo.eyeExam;
  const state2MentalHealthCounseling = state2CostInfo.mentalHealthCounseling;
  const state2PreventiveHealthScreenings =
    state2CostInfo.preventiveHealthScreenings;
  const state2PhysicalTherapy = state2CostInfo.physicalTherapy;
  const state2EmergencyRoomVisit = state2CostInfo.emergencyRoomVisit;
  const state2HospitalStayPerNight = state2CostInfo.hospitalStayPerNight;
  const state2Vaccinations = state2CostInfo.vaccinations;
  const state2PrescriptionMedication = state2CostInfo.prescriptionMedication;
  const state2OverTheCounterMedication =
    state2CostInfo.overTheCounterMedication;
  const state2HealthInsurancePremiums = state2CostInfo.healthInsurancePremiums;
  const state2HealthInsuranceDeductibles =
    state2CostInfo.healthInsuranceDeductibles;
  const state2TotalCost =
    (state2DoctorsVisit || 0) +
    (state2SpecialistsVisit || 0) +
    (state2DentistsVisit || 0) +
    (state2EyeExam || 0) +
    (state2MentalHealthCounseling || 0) +
    (state2PreventiveHealthScreenings || 0) +
    (state2PhysicalTherapy || 0) +
    (state2EmergencyRoomVisit || 0) +
    (state2HospitalStayPerNight || 0) +
    (state2Vaccinations || 0) +
    (state2PrescriptionMedication || 0) +
    (state2OverTheCounterMedication || 0) +
    (state2HealthInsurancePremiums || 0) +
    (state2HealthInsuranceDeductibles || 0);

  const costTimes =
    state1TotalCost > state2TotalCost
      ? (state1TotalCost / state2TotalCost).toFixed(2)
      : (state2TotalCost / state1TotalCost).toFixed(2);
  const moreOrLess = state1TotalCost > state2TotalCost ? 'more' : 'less';

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
                      src={`/images/${state1URLCase}-map-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Pictorial representation of map of ${state1URLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {state1}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${state1URLCase}-flag-small.png`}
                      layout="fill"
                      objectFit="contain"
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
                      layout="fill"
                      objectFit="contain"
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
                      layout="fill"
                      objectFit="contain"
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
                {state1DoctorsVisit
                  ? `${formatNumberWithCommas(state1DoctorsVisit)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="doctors-visit-second-entity all-indicator-answers">
                {state2DoctorsVisit
                  ? `${formatNumberWithCommas(state2DoctorsVisit)} USD`
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
                {state1SpecialistsVisit
                  ? `${formatNumberWithCommas(state1SpecialistsVisit)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="specialists-visit-second-entity all-indicator-answers">
                {state2SpecialistsVisit
                  ? `${formatNumberWithCommas(state2SpecialistsVisit)} USD`
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
                {state1DentistsVisit
                  ? `${formatNumberWithCommas(state1DentistsVisit)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="dentists-visit-second-entity all-indicator-answers">
                {state2DentistsVisit
                  ? `${formatNumberWithCommas(state2DentistsVisit)} USD`
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
                {state1EyeExam
                  ? `${formatNumberWithCommas(state1EyeExam)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="eye-exam-second-entity all-indicator-answers">
                {state2EyeExam
                  ? `${formatNumberWithCommas(state2EyeExam)} USD`
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
                {state1MentalHealthCounseling
                  ? `${formatNumberWithCommas(
                    state1MentalHealthCounseling
                  )} USD`
                  : 'Yet to Update'}
              </td>
              <td className="mental-health-counseling-second-entity all-indicator-answers">
                {state2MentalHealthCounseling
                  ? `${formatNumberWithCommas(
                    state2MentalHealthCounseling
                  )} USD`
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
                {state1PreventiveHealthScreenings
                  ? `${formatNumberWithCommas(
                    state1PreventiveHealthScreenings
                  )} USD`
                  : 'Yet to Update'}
              </td>
              <td className="preventive-health-screening-second-entity all-indicator-answers">
                {state2PreventiveHealthScreenings
                  ? `${formatNumberWithCommas(
                    state2PreventiveHealthScreenings
                  )} USD`
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
                {state1PhysicalTherapy
                  ? `${formatNumberWithCommas(state1PhysicalTherapy)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="physical-therapy-second-entity all-indicator-answers">
                {state2PhysicalTherapy
                  ? `${formatNumberWithCommas(state2PhysicalTherapy)} USD`
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
                {state1EmergencyRoomVisit
                  ? `${formatNumberWithCommas(state1EmergencyRoomVisit)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="emergency-room-visit-second-entity all-indicator-answers">
                {state2EmergencyRoomVisit
                  ? `${formatNumberWithCommas(state2EmergencyRoomVisit)} USD`
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
                {state1HospitalStayPerNight
                  ? `${formatNumberWithCommas(state1HospitalStayPerNight)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="hospital-stay-per-night-second-entity all-indicator-answers">
                {state2HospitalStayPerNight
                  ? `${formatNumberWithCommas(state2HospitalStayPerNight)} USD`
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
                {state1Vaccinations
                  ? `${formatNumberWithCommas(state1Vaccinations)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="vaccinations-second-entity all-indicator-answers">
                {state2Vaccinations
                  ? `${formatNumberWithCommas(state2Vaccinations)} USD`
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
                {state1PrescriptionMedication
                  ? `${formatNumberWithCommas(
                    state1PrescriptionMedication
                  )} USD`
                  : 'Yet to Update'}
              </td>
              <td className="prescription-medication-second-entity all-indicator-answers">
                {state2PrescriptionMedication
                  ? `${formatNumberWithCommas(
                    state2PrescriptionMedication
                  )} USD`
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
                {state1OverTheCounterMedication
                  ? `${formatNumberWithCommas(
                    state1OverTheCounterMedication
                  )} USD`
                  : 'Yet to Update'}
              </td>
              <td className="over-the-counter-medication-second-entity all-indicator-answers">
                {state2OverTheCounterMedication
                  ? `${formatNumberWithCommas(
                    state2OverTheCounterMedication
                  )} USD`
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
                {state1HealthInsurancePremiums
                  ? `${formatNumberWithCommas(
                    state1HealthInsurancePremiums
                  )} USD`
                  : 'Yet to Update'}
              </td>
              <td className="health-insurance-premiums-second-entity all-indicator-answers">
                {state2HealthInsurancePremiums
                  ? `${formatNumberWithCommas(
                    state2HealthInsurancePremiums
                  )} USD`
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
                {state1HealthInsuranceDeductibles
                  ? `${formatNumberWithCommas(
                    state1HealthInsuranceDeductibles
                  )} USD`
                  : 'Yet to Update'}
              </td>
              <td className="health-insurance-deductibles-second-entity all-indicator-answers">
                {state2HealthInsuranceDeductibles
                  ? `${formatNumberWithCommas(
                    state2HealthInsuranceDeductibles
                  )} USD`
                  : 'Yet to Update'}
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

export default Health;
