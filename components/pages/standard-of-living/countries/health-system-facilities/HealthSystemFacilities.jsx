import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { lastYear } from "@/lib/date-and-time/dateAndTime"
import Image from "next/image"

function HealthSystemFacilities({ country1StandardInfo, country2StandardInfo, country1URLCase, country2URLCase }) {
  const country1 = country1StandardInfo.country
  const country1DensityOfDoctorsNumber = country1StandardInfo.densityOfDoctorsNumber
  const country1DensityOfNursesNumber = country1StandardInfo.densityOfNursesNumber
  const country1DensityOfPharmacistsNumber = country1StandardInfo.densityOfPharmacistsNumber
  const country1HospitalBedsPer1000Peoples = country1StandardInfo.hospitalBedsPer1000Peoples
  const country1PregnantWomenReceivingPrenatalCare = country1StandardInfo.pregnantWomenReceivingPrenatalCare

  const country2 = country2StandardInfo.country
  const country2DensityOfDoctorsNumber = country2StandardInfo.densityOfDoctorsNumber
  const country2DensityOfNursesNumber = country2StandardInfo.densityOfNursesNumber
  const country2DensityOfPharmacistsNumber = country2StandardInfo.densityOfPharmacistsNumber
  const country2HospitalBedsPer1000Peoples = country2StandardInfo.hospitalBedsPer1000Peoples
  const country2PregnantWomenReceivingPrenatalCare = country2StandardInfo.pregnantWomenReceivingPrenatalCare

  const doctorsTimes = country1DensityOfDoctorsNumber > country2DensityOfDoctorsNumber ? (country1DensityOfDoctorsNumber / country2DensityOfDoctorsNumber).toFixed(2) : (country2DensityOfDoctorsNumber / country1DensityOfDoctorsNumber).toFixed(2)
  const nursesTimes = country1DensityOfNursesNumber > country2DensityOfNursesNumber ? (country1DensityOfNursesNumber / country2DensityOfNursesNumber).toFixed(2) : (country2DensityOfNursesNumber / country1DensityOfNursesNumber).toFixed(2)
  const moreOrLessDoctors = country1DensityOfDoctorsNumber > country2DensityOfDoctorsNumber ? 'more' : 'less'
  const moreOrLessNurses = country1DensityOfNursesNumber > country2DensityOfNursesNumber ? 'more' : 'less'

  return (
    <>
      <AdsHeaderBanner />

      <div className="economic-factors-comparison">
        <h2 className="pages-h2">Health System Facilities Comparison</h2>
      </div>

      <div className="health-factors-comparison-div3">
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
                      src={`/images/${country1URLCase}-map-small.png`}
                      fill
                      alt={`Pictorial representation of map of ${country1URLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {country1}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${country1URLCase}-flag-small.png`}
                      fill
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
                      fill
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
                      fill
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
                <div className="all-indicators">
                  <div className="number-of-doctors-text">
                    Number of Doctors <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/number-of-doctors-image.png"
                    fill
                    alt="Visual representation of number of Doctors in any specific country"
                  />
                </div>
              </td>
              <td className="density-of-doctors-answer-first-entity all-indicator-answers">
                {country1DensityOfDoctorsNumber ? (
                  <>
                    {country1DensityOfDoctorsNumber}
                    <br />
                    (Per 10,000 People)
                  </>
                ) : (
                  'Yet to Update'
                )}{' '}
              </td>
              <td className="density-of-doctors-answer-second-entity all-indicator-answers">
                {country2DensityOfDoctorsNumber ? (
                  <>
                    {country2DensityOfDoctorsNumber}
                    <br />
                    (Per 10,000 People)
                  </>
                ) : (
                  'Yet to Update'
                )}{' '}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="number-of-nurses-text">
                    Number of Nurses <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/number-of-nurses-image.png"
                    fill
                    alt="Visual representation of number of Nurses in any specific country"
                  />
                </div>
              </td>
              <td className="density-of-nurses-answer-first-entity all-indicator-answers">
                {country1DensityOfNursesNumber ? (
                  <>
                    {country1DensityOfNursesNumber}
                    <br />
                    (Per 10,000 People)
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="density-of-nurses-answer-second-entity all-indicator-answers">
                {country2DensityOfNursesNumber ? (
                  <>
                    {country2DensityOfNursesNumber}
                    <br />
                    (Per 10,000 People)
                  </>
                ) : (
                  'Yet to Update'
                )}{' '}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="number-of-pharmacists-text">
                    Number of Pharmacists <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/number-of-pharmacists-image.png"
                    fill
                    alt="Visual representation of number of Pharmacists in any specific country"
                  />
                </div>
              </td>
              <td className="density-of-pharmacists-answer-first-entity all-indicator-answers">
                {country1DensityOfPharmacistsNumber ? (
                  <>
                    {country1DensityOfPharmacistsNumber}
                    <br />
                    (Per 10,000 People)
                  </>
                ) : (
                  'Yet to Update'
                )}{' '}
              </td>
              <td className="density-of-pharmacists-answer-second-entity all-indicator-answers">
                {country2DensityOfPharmacistsNumber ? (
                  <>
                    {country2DensityOfPharmacistsNumber}
                    <br />
                    (Per 10,000 People)
                  </>
                ) : (
                  'Yet to Update'
                )}{' '}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="available-hospital-beds-text">
                    Available Hospital Beds <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/hospital-beds-image.png"
                    fill
                    alt="Visual representation of Available Hospital Beds in any specific country"
                  />
                </div>
              </td>
              <td className="available-hospital-beds-answer-first-entity all-indicator-answers">
                {country1HospitalBedsPer1000Peoples ? (
                  <>
                    {country1HospitalBedsPer1000Peoples}
                    <br />
                    (Per 1000 People)
                  </>
                ) : (
                  'Yet to Update'
                )}{' '}
              </td>
              <td className="available-hospital-beds-answer-second-entity all-indicator-answers">
                {country2HospitalBedsPer1000Peoples ? (
                  <>
                    {country2HospitalBedsPer1000Peoples}
                    <br />
                    (Per 1000 People)
                  </>
                ) : (
                  'Yet to Update'
                )}{' '}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="pregnant-women-receiving-prenatal-care-text">
                    Pregnant Women Receiving Prenatal Care ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/pregnant-women-receiving-prenatal-care-image.png"
                    fill
                    alt="Visual representation of Pregnant Women Receiving Prenatal Care in any specific country"
                  />
                </div>
              </td>
              <td className="pregnant-women-receiving-prenatal-care-answer-first-entity all-indicator-answers">
                {country1PregnantWomenReceivingPrenatalCare ? (
                  <>
                    {country1PregnantWomenReceivingPrenatalCare}{' '}
                    <span>% of total Population</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="pregnant-women-receiving-prenatal-care-answer-second-entity all-indicator-answers">
                {country2PregnantWomenReceivingPrenatalCare ? (
                  <>
                    {country2PregnantWomenReceivingPrenatalCare}{' '}
                    <span>% of total Population</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {((country1DensityOfDoctorsNumber && country2DensityOfDoctorsNumber) || (country1DensityOfNursesNumber && country2DensityOfNursesNumber)) &&
        <div className="paragraph-for-pages-below-table">
          <div className="para-for-pages-single-div">
            {country1DensityOfDoctorsNumber && country2DensityOfDoctorsNumber &&
              <p>
                <strong>
                  <span className="first-entity-name-pages-paragraph">
                    {' '}
                    {country1}{' '}
                  </span>
                </strong>{' '}
                has{' '}
                <strong>
                  <span className="doctors-times-calculation">
                    {' '}
                    {doctorsTimes}{' '}
                  </span>{' '}
                  times{' '}
                </strong>{' '}
                <span className="more-or-less-doctors-calculation-text">
                  {' '}
                  {moreOrLessDoctors}{' '}
                </span>{' '}
                Doctors compared to{' '}
                <strong>
                  <span className="second-entity-name-pages-paragraph">
                    {' '}
                    {country2}
                  </span>
                </strong>{' '}
                (Per 10,000 People).
              </p>
            }

            {country1DensityOfNursesNumber && country2DensityOfNursesNumber &&
              <p>
                <strong>
                  <span className="first-entity-name-pages-paragraph">
                    {' '}
                    {country1}{' '}
                  </span>
                </strong>{' '}
                has{' '}
                <strong>
                  <span className="nurses-times-calculation">
                    {' '}
                    {nursesTimes}{' '}
                  </span>{' '}
                  times{' '}
                </strong>{' '}
                <span className="more-or-less-nurses-calculation-text">
                  {' '}
                  {moreOrLessNurses}{' '}
                </span>{' '}
                Nurses compared to{' '}
                <strong>
                  <span className="second-entity-name-pages-paragraph">
                    {' '}
                    {country2}
                  </span>
                </strong>{' '}
                (Per 10,000 People).
              </p>
            }

          </div>
        </div>
      }

    </>
  );
}

export default HealthSystemFacilities