import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { lastYear } from "@/lib/date-and-time/dateAndTime"
import Image from "next/image"

function Health({ standardInfo, countryURLCase }) {
  const country = standardInfo.country
  const densityOfDoctorsNumber = standardInfo.densityOfDoctorsNumber
  const densityOfNursesNumber = standardInfo.densityOfNursesNumber
  const densityOfPharmacistsNumber = standardInfo.densityOfPharmacistsNumber
  const hospitalBedsPer1000Peoples = standardInfo.hospitalBedsPer1000Peoples
  const pregnantWomenReceivingPrenatalCare = standardInfo.pregnantWomenReceivingPrenatalCare

  return (
    <>
      <AdsHeaderBanner />

      <div className="economic-factors-comparison">
        <h2 className="pages-h2">Health System Facilities Information</h2>
      </div>

      <div className="health-factors-comparison-div3">
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
                <div className="all-indicators">
                  <div className="number-of-doctors-text">
                    Number of Doctors <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/number-of-doctors-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Visual representation of number of Doctors in any specific country"
                  />
                </div>
              </td>
              <td className="density-of-doctors-answer-first-entity all-indicator-answers">
                {densityOfDoctorsNumber ? (
                  <>
                    {densityOfDoctorsNumber}
                    <br />
                    (Per 10,000 People)
                  </>
                ) : (
                  'Yet to Update'
                )}
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
                    layout="fill"
                    objectFit="contain"
                    alt="Visual representation of number of Nurses in any specific country"
                  />
                </div>
              </td>
              <td className="density-of-nurses-answer-first-entity all-indicator-answers">
                {densityOfNursesNumber ? (
                  <>
                    {densityOfNursesNumber}
                    <br />
                    (Per 10,000 People)
                  </>
                ) : (
                  'Yet to Update'
                )}
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
                    layout="fill"
                    objectFit="contain"
                    alt="Visual representation of number of Pharmacists in any specific country"
                  />
                </div>
              </td>
              <td className="density-of-pharmacists-answer-first-entity all-indicator-answers">
                {densityOfPharmacistsNumber ? (
                  <>
                    {densityOfPharmacistsNumber}
                    <br />
                    (Per 10,000 People)
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="available-hospital-beds-text">
                    Available Hospital Beds ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/hospital-beds-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Visual representation of Available Hospital Beds in any specific country"
                  />
                </div>
              </td>
              <td className="available-hospital-beds-answer-first-entity all-indicator-answers">
                {hospitalBedsPer1000Peoples ? (
                  <>
                    {hospitalBedsPer1000Peoples}
                    <br />
                    (Per 10,000 People)
                  </>
                ) : (
                  'Yet to Update'
                )}
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
                    layout="fill"
                    objectFit="contain"
                    alt="Visual representation of Pregnant Women Receiving Prenatal Care in any specific country"
                  />
                </div>
              </td>
              <td className="pregnant-women-receiving-prenatal-care-answer-first-entity all-indicator-answers">
                {pregnantWomenReceivingPrenatalCare
                  ? `${pregnantWomenReceivingPrenatalCare}% of
                  total Population`
                  : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Health