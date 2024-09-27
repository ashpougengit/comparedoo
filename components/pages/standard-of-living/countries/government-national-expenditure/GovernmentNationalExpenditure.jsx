import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner'
import { lastYear } from '@/lib/date-and-time/dateAndTime'
import { formatNumberWithCommas } from '@/lib/format/format'
import Image from 'next/image'

function GovernmentNationalExpenditure({ country1StandardInfo, country2StandardInfo, country1URLCase, country2URLCase }) {
    const country1 = country1StandardInfo.country
    const country1GrossNationalExpenditure = country1StandardInfo.grossNationalExpenditure
    const country1CurrentHealthExpenditurePercentage = country1StandardInfo.currentHealthExpenditurePercentage
    const country1ResearchAndDevelopmentExpenditure = country1StandardInfo.researchAndDevelopmentExpenditure
    const country1GovernmentExpenditureOnEducation = country1StandardInfo.governmentExpenditureOnEducation
    const country1InternationalTourismExpenditureUSD = country1StandardInfo.internationalTourismExpenditureUSD
    const country1InternationalTourists = country1StandardInfo.numberOfInternationalTouristsArrival
    const country1MilitaryExpenditure = country1StandardInfo.militaryExpenditure

    const country2 = country2StandardInfo.country
    const country2GrossNationalExpenditure = country2StandardInfo.grossNationalExpenditure
    const country2CurrentHealthExpenditurePercentage = country2StandardInfo.currentHealthExpenditurePercentage
    const country2ResearchAndDevelopmentExpenditure = country2StandardInfo.researchAndDevelopmentExpenditure
    const country2GovernmentExpenditureOnEducation = country2StandardInfo.governmentExpenditureOnEducation
    const country2InternationalTourismExpenditureUSD = country2StandardInfo.internationalTourismExpenditureUSD
    const country2InternationalTourists = country2StandardInfo.numberOfInternationalTouristsArrival
    const country2MilitaryExpenditure = country2StandardInfo.militaryExpenditure

    const expenditureTimes = country1GrossNationalExpenditure > country2GrossNationalExpenditure ? (country1GrossNationalExpenditure / country2GrossNationalExpenditure).toFixed(2) : (country2GrossNationalExpenditure / country1GrossNationalExpenditure).toFixed(2)
    const moreOrLess = country1GrossNationalExpenditure > country2GrossNationalExpenditure ? 'more' : 'less'

    return (
      <>
        <AdsHeaderBanner />

        <div className="economic-factors-comparison">
          <h2 className="pages-h2">
            Government National Expenditure Comparison
          </h2>
        </div>

        <div className="government-expenditure-factors-comparison-div1">
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
                        src={`/images/${country1URLCase}-map-small.png`}
                        layout="fill"
                        objectFit="contain"
                        alt={`Pictorial representation of map of ${country1URLCase}`}
                      />
                    </div>

                    <div className="first-entity-name-pages-comparison">
                      {country1}
                    </div>

                    <div className="first-entity-flag-pages-comparison">
                      <Image
                        src={`/images/${country1URLCase}-flag-small.png`}
                        layout="fill"
                        objectFit="contain"
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
                        layout="fill"
                        objectFit="contain"
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
                        layout="fill"
                        objectFit="contain"
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
                    <div className="gross-national-expenditure-text">
                      Gross National Expenditure <br /> ({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/gross-national-expenditure-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image representing the total Gross National Expenditure of any specific country"
                    />
                  </div>
                </td>
                <td className="gross-national-expenditure-answer-first-entity all-indicator-answers">
                  {country1GrossNationalExpenditure ? (
                    <>
                      {country1GrossNationalExpenditure} <span>% of GDP</span>
                    </>
                  ) : (
                    'Yet to Update'
                  )}
                </td>
                <td className="gross-national-expenditure-answer-second-entity all-indicator-answers">
                  {country2GrossNationalExpenditure ? (
                    <>
                      {country2GrossNationalExpenditure} <span>% of GDP</span>
                    </>
                  ) : (
                    'Yet to Update'
                  )}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    <div className="total-health-exenditure-text">
                      Total Health Expenditure <br /> ({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/health-expenditure-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image representation of total Health Expenditure of any given country"
                    />
                  </div>
                </td>
                <td className="health-expenditure-rate-answer-first-entity all-indicator-answers">
                  {country1CurrentHealthExpenditurePercentage ? (
                    <>
                      {country1CurrentHealthExpenditurePercentage}{' '}
                      <span>% of GDP</span>
                    </>
                  ) : (
                    'Yet to Update'
                  )}
                </td>
                <td className="health-expenditure-rate-answer-second-entity all-indicator-answers">
                  {country2CurrentHealthExpenditurePercentage ? (
                    <>
                      {country2CurrentHealthExpenditurePercentage}{' '}
                      <span>% of GDP</span>
                    </>
                  ) : (
                    'Yet to Update'
                  )}
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
                      layout="fill"
                      objectFit="contain"
                      alt="Image representing the Government Expenditure of any specific country"
                    />
                  </div>
                </td>
                <td className="research-and-development-expenditure-answer-first-entity all-indicator-answers">
                  {country1ResearchAndDevelopmentExpenditure ? (
                    <>
                      {country1ResearchAndDevelopmentExpenditure}{' '}
                      <span>% of GDP</span>
                    </>
                  ) : (
                    'Yet to Update'
                  )}
                </td>
                <td className="research-and-development-expenditure-answer-second-entity all-indicator-answers">
                  {country2ResearchAndDevelopmentExpenditure ? (
                    <>
                      {country2ResearchAndDevelopmentExpenditure}{' '}
                      <span>% of GDP</span>
                    </>
                  ) : (
                    'Yet to Update'
                  )}
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
                      layout="fill"
                      objectFit="contain"
                      alt="Image representing the Government Expenditure of any specific country"
                    />
                  </div>
                </td>
                <td className="government-expenditure-on-education-answer-first-entity all-indicator-answers">
                  {country1GovernmentExpenditureOnEducation ? (
                    <>
                      {country1GovernmentExpenditureOnEducation}{' '}
                      <span>% of GDP</span>
                    </>
                  ) : (
                    'Yet to Update'
                  )}
                </td>
                <td className="government-expenditure-on-education-answer-second-entity all-indicator-answers">
                  {country2GovernmentExpenditureOnEducation ? (
                    <>
                      {country2GovernmentExpenditureOnEducation}{' '}
                      <span>% of GDP</span>
                    </>
                  ) : (
                    'Yet to Update'
                  )}
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
                      layout="fill"
                      objectFit="contain"
                      alt="Image representing the International Tourism Expenditure of any specific country"
                    />
                  </div>
                </td>
                <td className="international-tourism-expenditure-answer-first-entity all-indicator-answers">
                  {formatNumberWithCommas(
                    country1InternationalTourismExpenditureUSD
                  )}
                  <span>
                    {country1InternationalTourismExpenditureUSD ? ' USD' : ''}
                  </span>
                </td>
                <td className="international-tourism-expenditure-answer-second-entity all-indicator-answers">
                  {formatNumberWithCommas(
                    country2InternationalTourismExpenditureUSD
                  )}
                  <span>
                    {country2InternationalTourismExpenditureUSD ? ' USD' : ''}
                  </span>
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
                      layout="fill"
                      objectFit="contain"
                      alt="Image representing the Number of International Tourists Arrival in any specific country"
                    />
                  </div>
                </td>
                <td className="number-of-international-tourists-arrival-answer-first-entity all-indicator-answers">
                  {formatNumberWithCommas(country1InternationalTourists)}
                </td>
                <td className="number-of-international-tourists-arrival-answer-second-entity all-indicator-answers">
                  {formatNumberWithCommas(country2InternationalTourists)}
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
                      layout="fill"
                      objectFit="contain"
                      alt="Image representing the Military Expenditure of any specific country"
                    />
                  </div>
                </td>
                <td className="military-expenditure-answer-first-entity all-indicator-answers">
                  {country1MilitaryExpenditure ? (
                    <>
                      {country1MilitaryExpenditure} <span>% of GDP</span>
                    </>
                  ) : (
                    'Yet to Update'
                  )}
                </td>
                <td className="military-expenditure-answer-second-entity all-indicator-answers">
                  {country2MilitaryExpenditure ? (
                    <>
                      {country2MilitaryExpenditure} <span>(% of GDP)</span>
                    </>
                  ) : (
                    'Yet to Update'
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="paragraph-for-pages-below-table">
          <div className="para-for-pages-single-div">
            <p>
              The total Gross National Expenditure of{' '}
              <span className="first-entity-name-pages-paragraph">
                {' '}
                {country1}{' '}
              </span>{' '}
              is
              <strong>
                <span className="gross-national-expenditure-answer-first-entity">
                  {' '}
                  {country1GrossNationalExpenditure}%{' '}
                </span>{' '}
                of its GDP{' '}
              </strong>
              and the total Gross National Expenditure of
              <span className="second-entity-name-pages-paragraph">
                {' '}
                {country2}{' '}
              </span>{' '}
              is{' '}
              <strong>
                <span className="gross-national-expenditure-answer-second-entity">
                  {country2GrossNationalExpenditure}%{' '}
                </span>{' '}
                of its GDP.{' '}
              </strong>
            </p>

            <p>
              From the above data, we can say that{' '}
              <span className="first-entity-name-pages-paragraph">
                {' '}
                {country1}{' '}
              </span>{' '}
              spends
              <strong>
                <span className="gross-national-expenditure-calculation">
                  {' '}
                  {expenditureTimes}{' '}
                </span>{' '}
                times{' '}
              </strong>{' '}
              <span className="gross-national-expenditure-more-less-calculation">
                {' '}
                {moreOrLess}{' '}
              </span>{' '}
              of its GDP on Gross National Expenditure compared to
              <span className="second-entity-name-pages-paragraph">
                {' '}
                {country2}
              </span>
              .
            </p>
          </div>
        </div>
      </>
    );
}

export default GovernmentNationalExpenditure