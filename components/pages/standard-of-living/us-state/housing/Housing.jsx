import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { lastYear } from "@/lib/date-and-time/dateAndTime"
import { formatNumberWithCommas } from "@/lib/format/format"
import Image from "next/image"

function Housing({ standardInfo, stateURLCase }) {
    const state = standardInfo.state
    const totalHousingUnits = standardInfo.totalHousingUnits
    const medianGrossRent = standardInfo.medianGrossRent
    const homeOwnershipRate = standardInfo.homeOwnershipRate
    const averageFamilySize = standardInfo.averageFamilySize
    const marriedCoupleHouseholdPercentage = standardInfo.marriedCoupleHouseholdPercentage
    const maleHouseholderPercentage = standardInfo.maleHouseholderPercentage
    const femaleHouseholderPercentage = standardInfo.femaleHouseholderPercentage

    return (
      <>
        <AdsHeaderBanner />

        <div className="economic-factors-comparison">
          <h2 className="pages-h2">Housing and Ownership Information</h2>
        </div>
        <div className="tax-factors-comparison-div1">
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
                  <div className="all-indicators">
                    <div className="employment-rate-states-text">
                      Total Housing Units
                      <br />({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/total-housing-units-states-images.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting Total Housing Units percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {totalHousingUnits
                    ? `${formatNumberWithCommas(totalHousingUnits)}`
                    : 'Yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    <div className="employment-rate-states-text">
                      Median Gross Rent
                      <br />({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/median-gross-rent-states-images.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting Median Gross Rent percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {medianGrossRent
                    ? `${formatNumberWithCommas(medianGrossRent)} USD per month`
                    : 'Yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    <div className="employment-rate-states-text">
                      Homeownership Rate
                      <br />({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/homeownership-rate-states-images.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting Homeownership Rate percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {homeOwnershipRate
                    ? `${homeOwnershipRate} %`
                    : 'yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    <div className="employment-rate-states-text">
                      Average Family Size
                      <br />({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/average-family-size-states-images.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting Average Family Size in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {averageFamilySize ?? 'Yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    <div className="employment-rate-states-text">
                      Married Couple Household
                      <br />({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/married-couple-household-states-images.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting Married Couple Household percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {marriedCoupleHouseholdPercentage
                    ? `${marriedCoupleHouseholdPercentage} %`
                    : 'yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    <div className="employment-rate-states-text">
                      Male Householder (No Spouse)
                      <br />({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/male-householder-states-images.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting Male Householder (No Spouse) percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {maleHouseholderPercentage
                    ? `${maleHouseholderPercentage} %`
                    : 'yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    <div className="employment-rate-states-text">
                      Female Householder (No Spouse)
                      <br />({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/female-householder-states-images.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting Female Householder (No Spouse) percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {femaleHouseholderPercentage
                    ? `${femaleHouseholderPercentage} %`
                    : 'yet to Update'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
}

export default Housing