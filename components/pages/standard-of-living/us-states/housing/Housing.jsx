import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { lastYear } from "@/lib/date-and-time/dateAndTime"
import { formatNumberWithCommas } from "@/lib/format/format"
import Image from "next/image"

function Housing({ state1StandardInfo, state2StandardInfo, state1URLCase, state2URLCase }) {
  const state1 = state1StandardInfo.state
  const state1TotalHousingUnits = state1StandardInfo.totalHousingUnits
  const state1MedianGrossRent = state1StandardInfo.medianGrossRent
  const state1HomeOwnershipRate = state1StandardInfo.homeOwnershipRate
  const state1AverageFamilySize = state1StandardInfo.averageFamilySize
  const state1MarriedCoupleHouseholdPercentage = state1StandardInfo.marriedCoupleHouseholdPercentage
  const state1MaleHouseholderPercentage = state1StandardInfo.maleHouseholderPercentage
  const state1FemaleHouseholderPercentage = state1StandardInfo.femaleHouseholderPercentage

  const state2 = state2StandardInfo.state
  const state2TotalHousingUnits = state2StandardInfo.totalHousingUnits
  const state2MedianGrossRent = state2StandardInfo.medianGrossRent
  const state2HomeOwnershipRate = state2StandardInfo.homeOwnershipRate
  const state2AverageFamilySize = state2StandardInfo.averageFamilySize
  const state2MarriedCoupleHouseholdPercentage = state2StandardInfo.marriedCoupleHouseholdPercentage
  const state2MaleHouseholderPercentage = state2StandardInfo.maleHouseholderPercentage
  const state2FemaleHouseholderPercentage = state2StandardInfo.femaleHouseholderPercentage

  return (
    <>
      <AdsHeaderBanner />

      <div className="economic-factors-comparison">
        <h2 className="pages-h2">Housing and Ownership Comparison</h2>
      </div>
      <div className="tax-factors-comparison-div1">
        <table className="indicators-first-entity-and-second-entity-div1">
          <thead>
            <tr className="first-tr">
              <th>
                <div className="heading-map-name-flag">
                  <div className="right-indicator">
                    <Image
                      src="/images/indicators-right-image.png"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                      alt="Image representing an indicator"
                    />
                  </div>
                  <div className="indicator-text">Indicators</div>
                  <div className="left-indicator">
                    <Image
                      src="/images/indicators-left-image.png"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

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
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                      alt={`Pictorial representation of map of ${state1URLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {state1}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${state1URLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

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
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

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
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

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
                <div className="all-indicators">
                  <div className="employment-rate-states-text">
                    Total Housing Units
                    <br />({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/total-housing-units-states-images.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Depicting Total Housing Units percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {state1TotalHousingUnits
                  ? `${formatNumberWithCommas(state1TotalHousingUnits)}`
                  : 'Yet to Update'}
              </td>
              <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                {state2TotalHousingUnits
                  ? `${formatNumberWithCommas(state2TotalHousingUnits)}`
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
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Depicting Median Gross Rent percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {state1MedianGrossRent
                  ? `${formatNumberWithCommas(state1MedianGrossRent)} USD per month`
                  : 'Yet to Update'}
              </td>
              <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                {state2MedianGrossRent
                  ? `${formatNumberWithCommas(state2MedianGrossRent)} USD per month`
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
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Depicting Homeownership Rate percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {state1HomeOwnershipRate
                  ? `${state1HomeOwnershipRate} %`
                  : 'yet to Update'}
              </td>
              <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                {state2HomeOwnershipRate
                  ? `${state2HomeOwnershipRate} %`
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
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Depicting Average Family Size in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {state1AverageFamilySize ?? 'Yet to Update'}
              </td>
              <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                {state2AverageFamilySize ?? 'Yet to Update'}
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
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Depicting Married Couple Household percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {state1MarriedCoupleHouseholdPercentage
                  ? `${state1MarriedCoupleHouseholdPercentage} %`
                  : 'yet to Update'}
              </td>
              <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                {state2MarriedCoupleHouseholdPercentage
                  ? `${state2MarriedCoupleHouseholdPercentage} %`
                  : 'yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="employment-rate-states-text">
                    Male Householder (No Spouse) ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/male-householder-states-images.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Depicting Male Householder (No Spouse) percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {state1MaleHouseholderPercentage
                  ? `${state1MaleHouseholderPercentage} %`
                  : 'yet to Update'}
              </td>
              <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                {state2MaleHouseholderPercentage
                  ? `${state2MaleHouseholderPercentage} %`
                  : 'yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="employment-rate-states-text">
                    Female Householder (No Spouse) ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/female-householder-states-images.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Depicting Female Householder (No Spouse) percentage in any specific country or state"
                  />
                </div>
              </td>
              <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                {state1FemaleHouseholderPercentage
                  ? `${state1FemaleHouseholderPercentage} %`
                  : 'yet to Update'}
              </td>
              <td className="employment-rate-states-answer-second-entity all-indicator-answers">
                {state2FemaleHouseholderPercentage
                  ? `${state2FemaleHouseholderPercentage} %`
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