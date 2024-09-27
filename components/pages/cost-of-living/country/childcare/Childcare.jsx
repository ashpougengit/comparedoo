import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { dollarizedCountries } from "@/lib/array-list/dollarizedCountries"
import { formatNumberWithCommas, formatUSDWithCommas } from "@/lib/format/format"
import Image from "next/image"

function Childcare({ costInfo, currency, unitValueInUSD, countryLowerCase }) {
    const country = costInfo.country
    const childrensJeans = costInfo.childrensJeans
    const childrensSneakers = costInfo.childrensSneakers
    const childrensWinterCoat = costInfo.childrensWinterCoat
    const daycareInfant = costInfo.daycareInfant
    const daycareToddler = costInfo.daycareToddler
    const childcareForSickDays = costInfo.childcareForSickDays
    const earlyChildhoodEducationPrograms = costInfo.earlyChildhoodEducationPrograms
    const extracurricularActivities = costInfo.extracurricularActivities
    const summerCamp = costInfo.summerCamp

    return (
      <>
        <AdsHeaderBanner />

        <div className="geographical-map">
          <h2 className="pages-h2">Childcare Cost</h2>
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
                        src={`/images/${countryLowerCase}-map-small.png`}
                        layout="fill"
                        objectFit="contain"
                        alt={`Pictorial representation of map of ${countryLowerCase}`}
                      />
                    </div>

                    <div className="first-entity-name-pages-comparison">
                      {country}
                    </div>

                    <div className="first-entity-flag-pages-comparison">
                      <Image
                        src={`/images/${countryLowerCase}-flag-small.png`}
                        layout="fill"
                        objectFit="contain"
                        alt={`Image illustrating the flag of ${countryLowerCase}`}
                      />
                    </div>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">Children&apos;s Jeans</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/children-jeans-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing Children Jeans"
                    />
                  </div>
                </td>

                <td className="children-jeans-first-entity all-indicator-answers">
                  {`${formatNumberWithCommas(childrensJeans)} ${
                    childrensJeans ? currency : ''
                  }`}
                  <br />{' '}
                  {dollarizedCountries.includes(country) ? (
                    ''
                  ) : (
                    <span className="children-jeans-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(
                      childrensJeans * unitValueInUSD
                    )}`}</span>
                  )}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    Children&apos;s Normal Sneakers
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/children-sneakers-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing Children Normal Sneakers"
                    />
                  </div>
                </td>

                <td className="children-sneakers-first-entity all-indicator-answers">
                  {`${formatNumberWithCommas(childrensSneakers)} ${
                    childrensSneakers ? currency : ''
                  }`}
                  <br />{' '}
                  {dollarizedCountries.includes(country) ? (
                    ''
                  ) : (
                    <span className="children-sneakers-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(
                      childrensSneakers * unitValueInUSD
                    )}`}</span>
                  )}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    Children&apos;s Winter Coat
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/children-winter-coat-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing Children's Winter Coat"
                    />
                  </div>
                </td>

                <td className="children-winter-coat-first-entity all-indicator-answers">
                  {`${formatNumberWithCommas(childrensWinterCoat)} ${
                    childrensWinterCoat ? currency : ''
                  }`}
                  <br />{' '}
                  {dollarizedCountries.includes(country) ? (
                    ''
                  ) : (
                    <span className="children-winter-coat-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(
                      childrensWinterCoat * unitValueInUSD
                    )}`}</span>
                  )}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">Daycare for Infant</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/day-care-infant-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing Daycare for Infant"
                    />
                  </div>
                </td>

                <td className="daycare-infant-first-entity all-indicator-answers">
                  {`${formatNumberWithCommas(daycareInfant)} ${
                    daycareInfant ? currency : ''
                  }`}
                  <br />{' '}
                  {dollarizedCountries.includes(country) ? (
                    ''
                  ) : (
                    <span className="daycare-infant-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(
                      daycareInfant * unitValueInUSD
                    )}`}</span>
                  )}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">Daycare for Toddler</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/day-care-toddler-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing Daycare for Toddler"
                    />
                  </div>
                </td>

                <td className="daycare-toddler-first-entity all-indicator-answers">
                  {`${formatNumberWithCommas(daycareToddler)} ${
                    daycareToddler ? currency : ''
                  }`}
                  <br />{' '}
                  {dollarizedCountries.includes(country) ? (
                    ''
                  ) : (
                    <span className="daycare-toddler-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(
                      daycareToddler * unitValueInUSD
                    )}`}</span>
                  )}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">Childcare for Sick Days</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/children-care-for-sick-days-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing Childcare for Sick Days"
                    />
                  </div>
                </td>

                <td className="childcare-for-sick-days-first-entity all-indicator-answers">
                  {`${formatNumberWithCommas(childcareForSickDays)} ${
                    childcareForSickDays ? currency : ''
                  }`}
                  <br />{' '}
                  {dollarizedCountries.includes(country) ? (
                    ''
                  ) : (
                    <span className="childcare-for-sick-days-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(
                      childcareForSickDays * unitValueInUSD
                    )}`}</span>
                  )}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    Early Childhood Education Programs
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/early-childhood-education-programs-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing Early Childhood Education Programs"
                    />
                  </div>
                </td>

                <td className="early-childhood-education-program-first-entity all-indicator-answers">
                  {`${formatNumberWithCommas(
                    earlyChildhoodEducationPrograms
                  )} ${earlyChildhoodEducationPrograms ? currency : ''}`}
                  <br />{' '}
                  {dollarizedCountries.includes(country) ? (
                    ''
                  ) : (
                    <span className="early-childhood-education-program-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(
                      earlyChildhoodEducationPrograms * unitValueInUSD
                    )}`}</span>
                  )}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    Extra Curricular Activities
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/extra-curricular-activities-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing Extra Curricular Activities"
                    />
                  </div>
                </td>

                <td className="extra-curricular-activities-first-entity all-indicator-answers">
                  {`${formatNumberWithCommas(extracurricularActivities)} ${
                    extracurricularActivities ? currency : ''
                  }`}
                  <br />{' '}
                  {dollarizedCountries.includes(country) ? (
                    ''
                  ) : (
                    <span className="extra-curricular-activities-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(
                      extracurricularActivities * unitValueInUSD
                    )}`}</span>
                  )}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">Summer Camp for Kids</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/summer-camp-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing Summer Camp"
                    />
                  </div>
                </td>

                <td className="summer-camp-first-entity all-indicator-answers">
                  {`${formatNumberWithCommas(summerCamp)} ${
                    summerCamp ? currency : ''
                  }`}
                  <br />{' '}
                  {dollarizedCountries.includes(country) ? (
                    ''
                  ) : (
                    <span className="summer-camp-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(
                      summerCamp * unitValueInUSD
                    )}`}</span>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
}

export default Childcare