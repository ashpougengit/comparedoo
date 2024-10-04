import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { lastYear } from "@/lib/date-and-time/dateAndTime"
import { formatNumberWithCommas } from "@/lib/format/format"
import Image from "next/image"

function EnvironmentalFactors({ standardInfo, countryURLCase }) {
  const country = standardInfo.country
  const agriculturalLand = standardInfo.agriculturalLand
  const forestArea = standardInfo.forestArea
  const CO2Emission = standardInfo.CO2Emission
  const accessToElectricity = standardInfo.accessToElectricity
  const accessToInternet = standardInfo.accessToInternet
  const annualFreshWaterWithdrawls = standardInfo.annualFreshWaterWithdrawls

  return (
    <>
      <AdsHeaderBanner />

      <div className="environmental-factors-comparison">
        <h2 className="pages-h2">Environmental Factors Information</h2>
      </div>

      <div className="environment-factors-comparison">
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
                  <div className="agricultural-land-text">
                    Agricultural Land <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/agricultural-land-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Depicting the total Agricultural Land available in any specific country"
                  />
                </div>
              </td>
              <td className="agricultural-land-answer-first-entity all-indicator-answers">
                {agriculturalLand
                  ? `${formatNumberWithCommas(agriculturalLand)} sq km`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="forest-area-text">
                    Forest Area <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/forest-area-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Depicting the total Forest Area available in any specific country"
                  />
                </div>
              </td>
              <td className="forest-area-answer-first-entity all-indicator-answers">
                {forestArea
                  ? `${formatNumberWithCommas(forestArea)} sq km`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="co2-emissions-text">
                    CO2 Emissions <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/co2-emissions-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Depicting the total CO2 Emissions from any specific country"
                  />
                </div>
              </td>

              <td className="co2-emissions-answer-first-entity all-indicator-answers">
                {CO2Emission
                  ? `${CO2Emission} kg per PPP $ of GDP`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="access-to-electricity-text">
                    Access to Electricity <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/access-to-electricity-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Depicting the access of electricity in any specific country"
                  />
                </div>
              </td>

              <td className="access-to-electricity-answer-first-entity all-indicator-answers">
                {accessToElectricity
                  ? `${accessToElectricity}% of total
                                Population`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="access-to-internet-text">
                    Access to Internet <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/access-to-internet-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Depicting the access of internet in any specific country"
                  />
                </div>
              </td>

              <td className="access-to-internet-answer-first-entity all-indicator-answers">
                {accessToInternet
                  ? `${accessToInternet}% of total
                                Population`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="annual-freshwater-withdrawals-text">
                    Annual Fresh Water Withdrawals ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/fresh-water-withdrawals-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Depicting the annual freshwater withdrawals from any specific country"
                  />
                </div>
              </td>

              <td className="annual-freshwater-widhdrawals-answer-first-entity all-indicator-answers">
                {annualFreshWaterWithdrawls
                  ? `${annualFreshWaterWithdrawls} Billion cubic meters`
                  : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {(accessToElectricity || accessToInternet) &&
        <div className="paragraph-for-pages-below-table">
          <div className="para-for-pages-single-div">
            {accessToElectricity &&
              <p>
                {' '}
                <strong>
                  {' '}
                  <span className="access-to-electricity-answer-first-entity">
                    {accessToElectricity}
                  </span>
                  %{' '}
                </strong>{' '}
                of the total Population of{' '}
                <span className="first-entity-name-pages-paragraph">
                  {' '}
                  {country}{' '}
                </span>{' '}
                has access to the electricity in their homes.
              </p>
            }

            {accessToInternet &&
              <p>
                {' '}
                <strong>
                  {' '}
                  <span className="access-to-internet-answer-first-entity">
                    {' '}
                    {accessToInternet}
                  </span>
                  %{' '}
                </strong>{' '}
                of the total Population of{' '}
                <span className="first-entity-name-pages-paragraph">
                  {' '}
                  {country}{' '}
                </span>{' '}
                has access to the Internet.
              </p>
            }

          </div>
        </div>
      }

    </>
  );
}

export default EnvironmentalFactors