import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { lastYear } from "@/lib/date-and-time/dateAndTime"
import { formatNumberWithCommas } from "@/lib/format/format"
import Image from "next/image"

function NationalExpenditure({ standardInfo, countryURLCase }) {
  const country = standardInfo.country
  const grossNationalExpenditure = standardInfo.grossNationalExpenditure
  const currentHealthExpenditurePercentage = standardInfo.currentHealthExpenditurePercentage
  const researchAndDevelopmentExpenditure = standardInfo.researchAndDevelopmentExpenditure
  const governmentExpenditureOnEducation = standardInfo.governmentExpenditureOnEducation
  // const internationalTourismExpenditureUSD = standardInfo.internationalTourismExpenditureUSD

  const internationalTourismExpenditureRaw = standardInfo.internationalTourismExpenditureUSD
  const internationalTourismExpenditureMillion = internationalTourismExpenditureRaw ? `${formatNumberWithCommas(internationalTourismExpenditureRaw / 1e6)} million USD` : null

  const internationalTourists = standardInfo.numberOfInternationalTouristsArrival
  const militaryExpenditure = standardInfo.militaryExpenditure

  return (
    <>
      <AdsHeaderBanner />

      <div className="economic-factors-comparison">
        <h2 className="pages-h2">
          Government National Expenditure Information
        </h2>
      </div>

      <div className="government-expenditure-factors-comparison-div1">
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
                  <div className="gross-national-expenditure-text">
                    Gross National Expenditure ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/gross-national-expenditure-image.png"
                    fill
                    alt="Image representing the total Gross National Expenditure of any specific country"
                  />
                </div>
              </td>
              <td className="gross-national-expenditure-answer-first-entity all-indicator-answers">
                {grossNationalExpenditure
                  ? `${grossNationalExpenditure}% of
                                GDP`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="total-health-exenditure-text">
                    Total Health Expenditure ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/health-expenditure-image.png"
                    fill
                    alt="Image representation of total Health Expenditure of any given country"
                  />
                </div>
              </td>
              <td className="health-expenditure-rate-answer-first-entity all-indicator-answers">
                {currentHealthExpenditurePercentage
                  ? `${currentHealthExpenditurePercentage}% of
                                GDP`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="research-and-development-expenditure-text">
                    Research and Development Expenditure ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/research-and-development-expenditure-image.png"
                    fill
                    alt="Image representing the Government Expenditure of any specific country"
                  />
                </div>
              </td>
              <td className="research-and-development-expenditure-answer-first-entity all-indicator-answers">
                {researchAndDevelopmentExpenditure
                  ? `${researchAndDevelopmentExpenditure}% of
                                GDP`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="government-expenditure-on-education-text">
                    Government Expenditure on Education ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/government-expenditure-on-education-image.png"
                    fill
                    alt="Image representing the Government Expenditure of any specific country"
                  />
                </div>
              </td>
              <td className="government-expenditure-on-education-answer-first-entity all-indicator-answers">
                {governmentExpenditureOnEducation
                  ? `${governmentExpenditureOnEducation}% of
                                GDP`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="international-tourism-expenditure-text">
                    International Tourism Expenditure ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/international-tourism-image.png"
                    fill
                    alt="Image representing the International Tourism Expenditure of any specific country"
                  />
                </div>
              </td>
              <td className="international-tourism-expenditure-answer-first-entity all-indicator-answers">
                {internationalTourismExpenditureMillion ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="number-of-international-tourists-arrival-text">
                    Number of International Tourists Arrivals ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/number-of-international-tourists-arrival.png"
                    fill
                    alt="Image representing the Number of International Tourists Arrival in any specific country"
                  />
                </div>
              </td>
              <td className="number-of-international-tourists-arrival-answer-first-entity all-indicator-answers">
                {formatNumberWithCommas(internationalTourists)}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="military-expenditure-text">
                    Military Expenditure <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/military-expenditure-image.png"
                    fill
                    alt="Image representing the Military Expenditure of any specific country"
                  />
                </div>
              </td>
              <td className="military-expenditure-answer-first-entity all-indicator-answers">
                {militaryExpenditure
                  ? `${militaryExpenditure}% of GDP`
                  : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default NationalExpenditure