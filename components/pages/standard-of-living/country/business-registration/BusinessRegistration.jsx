import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { lastYear } from "@/lib/date-and-time/dateAndTime"
import { formatNumberWithCommas } from "@/lib/format/format"
import Image from "next/image"

function BusinessRegistration({ standardInfo, countryURLCase }) {
  const country = standardInfo.country
  const timeRequiredToStartABusinessDays = standardInfo.timeRequiredToStartABusinessDays
  const newBusinessesRegisteredNumber = standardInfo.newBusinessesRegisteredNumber
  const newBusinessesRegistrationDensityPer1000People = standardInfo.newBusinessesRegistrationDensityPer1000People
  const costOfBusinessStartUpProcedures = standardInfo.costOfBusinessStartUpProcedures


  return (
    <>
      <AdsHeaderBanner />

      <div className="economic-factors-comparison">
        <h2 className="pages-h2">Business Registration Information</h2>
      </div>
      <div className="business-registration-comparison-div1">
        <table className="indicators-single-country-divs">
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
                      src={`/images/${countryURLCase}-map-small.png`}
                      fill
                      alt={`Pictorial representation of map of ${countryURLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {country}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${countryURLCase}-flag-small.png`}
                      fill
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
                  <div className="time-required-to-start-a-business-text">
                    Time Required to Start a Business <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/time-required-to-start-a-business-image.png"
                    fill
                    alt="Image representing Time Required to Start a Business"
                  />
                </div>
              </td>
              <td className="time-required-to-start-a-business-answer-first-entity all-indicator-answers">
                {timeRequiredToStartABusinessDays
                  ? `${timeRequiredToStartABusinessDays} Days`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="new-businesses-registered-number-text">
                    New Businesses Registered <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/new-businesses-registered-number-image.png"
                    fill
                    alt="Image representing New Businesses Registered"
                  />
                </div>
              </td>
              <td className="new-businesses-registered-number-answer-first-entity all-indicator-answers">
                {newBusinessesRegisteredNumber
                  ? `${formatNumberWithCommas(
                    newBusinessesRegisteredNumber
                  )} (New Businesses)`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="new-businesses-registration-density-text">
                    New Businesses Registration Density ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/new-businesses-registration-density-image.png"
                    fill
                    alt="Image representing New Businesses Registration Density"
                  />
                </div>
              </td>
              <td className="new-businesses-registration-density-answer-first-entity all-indicator-answers">
                {newBusinessesRegistrationDensityPer1000People
                  ? `${newBusinessesRegistrationDensityPer1000People} (Per 1000 People)`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="cost-of-business-start-up-procedures-text">
                    Cost of Business Start-Up Procedures ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/cost-of-business-start-up-procedures-image.png"
                    fill
                    alt="Image representing Cost of Business Start-Up Procedures"
                  />
                </div>
              </td>
              <td className="cost-of-business-start-up-procedures-answer-first-entity all-indicator-answers">
                {costOfBusinessStartUpProcedures
                  ? `${costOfBusinessStartUpProcedures}% of GNI Per Capita`
                  : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {(newBusinessesRegisteredNumber || timeRequiredToStartABusinessDays) &&
        <div className="paragraph-for-pages-below-table">
          <div className="para-for-pages-single-div">
            {newBusinessesRegisteredNumber &&
              <p>
                In the year {lastYear},{' '}
                <strong>
                  {' '}
                  <span className="new-businesses-registered-number-answer-first-entity">
                    {' '}
                    {formatNumberWithCommas(newBusinessesRegisteredNumber)}{' '}
                  </span>
                  new businesses{' '}
                </strong>{' '}
                got registered in{' '}
                <span className="first-entity-name-pages-paragraph">
                  {' '}
                  {country}
                </span>
                .
              </p>
            }

            {timeRequiredToStartABusinessDays &&
              <p>
                It usually takes{' '}
                <strong>
                  {' '}
                  <span className="time-required-to-start-a-business-answer-first-entity">
                    {' '}
                    {timeRequiredToStartABusinessDays}{' '}
                  </span>
                  days{' '}
                </strong>{' '}
                in{' '}
                <span className="first-entity-name-pages-paragraph">
                  {' '}
                  {country}{' '}
                </span>{' '}
                to register a new business legally and systematically.
              </p>
            }
          </div>
        </div>
      }

    </>
  );
}

export default BusinessRegistration