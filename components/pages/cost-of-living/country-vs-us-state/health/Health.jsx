import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { formatCost, isDollarized } from '@/lib/format/formatCost';
import Image from 'next/image';

function Health({
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
  const slug1DoctorsVisit = slug1CostInfo.doctorsVisit;
  const slug1SpecialistsVisit = slug1CostInfo.specialistsVisit;
  const slug1DentistsVisit = slug1CostInfo.dentistsVisit;
  const slug1EyeExam = slug1CostInfo.eyeExam;
  const slug1MentalHealthCounseling = slug1CostInfo.mentalHealthCounseling;
  const slug1PreventiveHealthScreenings =
    slug1CostInfo.preventiveHealthScreenings;
  const slug1PhysicalTherapy = slug1CostInfo.physicalTherapy;
  const slug1EmergencyRoomVisit = slug1CostInfo.emergencyRoomVisit;
  const slug1HospitalStayPerNight = slug1CostInfo.hospitalStayPerNight;
  const slug1Vaccinations = slug1CostInfo.vaccinations;
  const slug1PrescriptionMedication = slug1CostInfo.prescriptionMedication;
  const slug1OverTheCounterMedication = slug1CostInfo.overTheCounterMedication;
  const slug1HealthInsurancePremiums = slug1CostInfo.healthInsurancePremiums;
  const slug1HealthInsuranceDeductibles =
    slug1CostInfo.healthInsuranceDeductibles;
  const slug1TotalCost =
    ((slug1DoctorsVisit || 0) +
      (slug1SpecialistsVisit || 0) +
      (slug1DentistsVisit || 0) +
      (slug1EyeExam || 0) +
      (slug1MentalHealthCounseling || 0) +
      (slug1PreventiveHealthScreenings || 0) +
      (slug1PhysicalTherapy || 0) +
      (slug1EmergencyRoomVisit || 0) +
      (slug1HospitalStayPerNight || 0) +
      (slug1Vaccinations || 0) +
      (slug1PrescriptionMedication || 0) +
      (slug1OverTheCounterMedication || 0) +
      (slug1HealthInsurancePremiums || 0) +
      (slug1HealthInsuranceDeductibles || 0)) *
    slug1ExchangeRate;

  const slug2DoctorsVisit = slug2CostInfo.doctorsVisit;
  const slug2SpecialistsVisit = slug2CostInfo.specialistsVisit;
  const slug2DentistsVisit = slug2CostInfo.dentistsVisit;
  const slug2EyeExam = slug2CostInfo.eyeExam;
  const slug2MentalHealthCounseling = slug2CostInfo.mentalHealthCounseling;
  const slug2PreventiveHealthScreenings =
    slug2CostInfo.preventiveHealthScreenings;
  const slug2PhysicalTherapy = slug2CostInfo.physicalTherapy;
  const slug2EmergencyRoomVisit = slug2CostInfo.emergencyRoomVisit;
  const slug2HospitalStayPerNight = slug2CostInfo.hospitalStayPerNight;
  const slug2Vaccinations = slug2CostInfo.vaccinations;
  const slug2PrescriptionMedication = slug2CostInfo.prescriptionMedication;
  const slug2OverTheCounterMedication = slug2CostInfo.overTheCounterMedication;
  const slug2HealthInsurancePremiums = slug2CostInfo.healthInsurancePremiums;
  const slug2HealthInsuranceDeductibles =
    slug2CostInfo.healthInsuranceDeductibles;
  const slug2TotalCost =
    ((slug2DoctorsVisit || 0) +
      (slug2SpecialistsVisit || 0) +
      (slug2DentistsVisit || 0) +
      (slug2EyeExam || 0) +
      (slug2MentalHealthCounseling || 0) +
      (slug2PreventiveHealthScreenings || 0) +
      (slug2PhysicalTherapy || 0) +
      (slug2EmergencyRoomVisit || 0) +
      (slug2HospitalStayPerNight || 0) +
      (slug2Vaccinations || 0) +
      (slug2PrescriptionMedication || 0) +
      (slug2OverTheCounterMedication || 0) +
      (slug2HealthInsurancePremiums || 0) +
      (slug2HealthInsuranceDeductibles || 0)) *
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
                {slug1DoctorsVisit
                  ? formatCost(
                    slug1DoctorsVisit,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="doctors-visit-second-entity all-indicator-answers">
                {slug2DoctorsVisit
                  ? formatCost(
                    slug2DoctorsVisit,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
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
                {slug1SpecialistsVisit
                  ? formatCost(
                    slug1SpecialistsVisit,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="specialists-visit-second-entity all-indicator-answers">
                {slug2SpecialistsVisit
                  ? formatCost(
                    slug2SpecialistsVisit,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
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
                {slug1DentistsVisit
                  ? formatCost(
                    slug1DentistsVisit,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="dentists-visit-second-entity all-indicator-answers">
                {slug2DentistsVisit
                  ? formatCost(
                    slug2DentistsVisit,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
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
                {slug1EyeExam
                  ? formatCost(
                    slug1EyeExam,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="eye-exam-second-entity all-indicator-answers">
                {slug2EyeExam
                  ? formatCost(
                    slug2EyeExam,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
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
                {slug1MentalHealthCounseling
                  ? formatCost(
                    slug1MentalHealthCounseling,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="mental-health-counseling-second-entity all-indicator-answers">
                {slug2MentalHealthCounseling
                  ? formatCost(
                    slug2MentalHealthCounseling,
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
                {slug1PreventiveHealthScreenings
                  ? formatCost(
                    slug1PreventiveHealthScreenings,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="preventive-health-screening-second-entity all-indicator-answers">
                {slug2PreventiveHealthScreenings
                  ? formatCost(
                    slug2PreventiveHealthScreenings,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
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
                {slug1PhysicalTherapy
                  ? formatCost(
                    slug1PhysicalTherapy,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="physical-therapy-second-entity all-indicator-answers">
                {slug2PhysicalTherapy
                  ? formatCost(
                    slug2PhysicalTherapy,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
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
                {slug1EmergencyRoomVisit
                  ? formatCost(
                    slug1EmergencyRoomVisit,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="emergency-room-visit-second-entity all-indicator-answers">
                {slug2EmergencyRoomVisit
                  ? formatCost(
                    slug2EmergencyRoomVisit,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
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
                {slug1HospitalStayPerNight
                  ? formatCost(
                    slug1HospitalStayPerNight,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="hospital-stay-per-night-second-entity all-indicator-answers">
                {slug2HospitalStayPerNight
                  ? formatCost(
                    slug2HospitalStayPerNight,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
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
                {slug1Vaccinations
                  ? formatCost(
                    slug1Vaccinations,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="vaccinations-second-entity all-indicator-answers">
                {slug2Vaccinations
                  ? formatCost(
                    slug2Vaccinations,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
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
                {slug1PrescriptionMedication
                  ? formatCost(
                    slug1PrescriptionMedication,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="prescription-medication-second-entity all-indicator-answers">
                {slug2PrescriptionMedication
                  ? formatCost(
                    slug2PrescriptionMedication,
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
                {slug1OverTheCounterMedication
                  ? formatCost(
                    slug1OverTheCounterMedication,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="over-the-counter-medication-second-entity all-indicator-answers">
                {slug2OverTheCounterMedication
                  ? formatCost(
                    slug2OverTheCounterMedication,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
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
                {slug1HealthInsurancePremiums
                  ? formatCost(
                    slug1HealthInsurancePremiums,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="health-insurance-premiums-second-entity all-indicator-answers">
                {slug2HealthInsurancePremiums
                  ? formatCost(
                    slug2HealthInsurancePremiums,
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
                {slug1HealthInsuranceDeductibles
                  ? formatCost(
                    slug1HealthInsuranceDeductibles,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="health-insurance-deductibles-second-entity all-indicator-answers">
                {slug2HealthInsuranceDeductibles
                  ? formatCost(
                    slug2HealthInsuranceDeductibles,
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
            Does Health and Medical Treatment cost more in
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
              <span className="health-and-medical-cost-calculation">
                {' '}
                {costTimes}{' '}
              </span>
              times{' '}
            </strong>
            <span className="health-and-medical-cost-more-or-less-calculation">
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
