import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner'
import { lastYear } from '@/lib/date-and-time/dateAndTime'
import { numberWithCommas } from '@/lib/format/format'
import Image from 'next/image'

function EnvironmentalFactors({ country1StandardInfo, country2StandardInfo, country1URLCase, country2URLCase }) {
  const country1 = country1StandardInfo.country
  const country1AgriculturalLand = country1StandardInfo.agriculturalLand
  const country1ForestArea = country1StandardInfo.forestArea
  const country1CO2Emission = country1StandardInfo.CO2Emission
  const country1AccessToElectricity = country1StandardInfo.accessToElectricity
  const country1AccessToInternet = country1StandardInfo.accessToInternet
  const country1AnnualFreshWaterWithdrawls = country1StandardInfo.annualFreshWaterWithdrawls

  const country2 = country2StandardInfo.country
  const country2AgriculturalLand = country2StandardInfo.agriculturalLand
  const country2ForestArea = country2StandardInfo.forestArea
  const country2CO2Emission = country2StandardInfo.CO2Emission
  const country2AccessToElectricity = country2StandardInfo.accessToElectricity
  const country2AccessToInternet = country2StandardInfo.accessToInternet
  const country2AnnualFreshWaterWithdrawls = country2StandardInfo.annualFreshWaterWithdrawls

  return (
    <>
      <AdsHeaderBanner />

      <div className="environmental-factors-comparison">
        <h2 className="pages-h2">Environmental Factors Comparison</h2>
      </div>

      <div className="environment-factors-comparison">
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
                  <div className="agricultural-land-text">
                    Agricultural Land <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/agricultural-land-image.png"
                    fill
                    alt="Image Depicting the total Agricultural Land available in any specific country"
                  />
                </div>
              </td>
              <td className="agricultural-land-answer-first-entity all-indicator-answers">
                {country1AgriculturalLand ? (
                  <>
                    {numberWithCommas(country1AgriculturalLand)}{' '}
                    <span>Sq Km</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="agricultural-land-answer-second-entity all-indicator-answers">
                {country2AgriculturalLand ? (
                  <>
                    {numberWithCommas(country2AgriculturalLand)}{' '}
                    <span>Sq Km</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
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
                    fill
                    alt="Image Depicting the total Forest Area available in any specific country"
                  />
                </div>
              </td>
              <td className="forest-area-answer-first-entity all-indicator-answers">
                {country1ForestArea ? (
                  <>
                    {numberWithCommas(country1ForestArea)} <span>Sq Km</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="forest-area-answer-second-entity all-indicator-answers">
                {country2ForestArea ? (
                  <>
                    {numberWithCommas(country2ForestArea)} <span>Sq Km</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
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
                    fill
                    alt="Image Depicting the total CO2 Emissions from any specific country"
                  />
                </div>
              </td>

              <td className="co2-emissions-answer-first-entity all-indicator-answers">
                {country1CO2Emission ? (
                  <>
                    {country1CO2Emission} <span>kg per PPP $ of GDP</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="co2-emissions-answer-second-entity all-indicator-answers">
                {country2CO2Emission ? (
                  <>
                    {country2CO2Emission} <span>kg per PPP $ of GDP</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
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
                    fill
                    alt="Image Depicting the access of electricity in any specific country"
                  />
                </div>
              </td>

              <td className="access-to-electricity-answer-first-entity all-indicator-answers">
                {country1AccessToElectricity ? (
                  <>
                    {country1AccessToElectricity}{' '}
                    <span>% of total Population</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="access-to-electricity-answer-second-entity all-indicator-answers">
                {country2AccessToElectricity ? (
                  <>
                    {country2AccessToElectricity}{' '}
                    <span>% of total Population</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
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
                    fill
                    alt="Image Depicting the access of internet in any specific country"
                  />
                </div>
              </td>

              <td className="access-to-internet-answer-first-entity all-indicator-answers">
                {country1AccessToInternet ? (
                  <>
                    {country1AccessToInternet}{' '}
                    <span>% of total Population</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="access-to-internet-answer-second-entity all-indicator-answers">
                {country2AccessToInternet ? (
                  <>
                    {country2AccessToInternet}{' '}
                    <span>% of total Population</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
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
                    fill
                    alt="Image Depicting the annual freshwater withdrawals from any specific country"
                  />
                </div>
              </td>

              <td className="annual-freshwater-widhdrawals-answer-first-entity all-indicator-answers">
                {country1AnnualFreshWaterWithdrawls ? (
                  <>
                    {country1AnnualFreshWaterWithdrawls}{' '}
                    <span>Billion cubic meters</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="annual-freshwater-widhdrawals-answer-second-entity all-indicator-answers">
                {country2AnnualFreshWaterWithdrawls ? (
                  <>
                    {country2AnnualFreshWaterWithdrawls}{' '}
                    <span>Billion cubic meters</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {country1AccessToElectricity && country2AccessToElectricity &&
        <div className="paragraph-for-pages-below-table">
          <div className="para-for-pages-single-div">
            <p>
              {' '}
              <strong>
                {' '}
                <span className="access-to-electricity-answer-first-entity">
                  {country1AccessToElectricity}
                </span>
                %{' '}
              </strong>{' '}
              of the total Population of{' '}
              <span className="first-entity-name-pages-paragraph">
                {' '}
                {country1}{' '}
              </span>{' '}
              has access to the electricity in their homes, whereas, in case of{' '}
              <span className="second-entity-name-pages-paragraph">
                {' '}
                {country2}
              </span>
              ,{' '}
              <strong>
                <span className="access-to-electricity-answer-second-entity">
                  {' '}
                  {country2AccessToElectricity}
                </span>
                %
              </strong>{' '}
              of the total Population has access to electricity.
            </p>
          </div>
        </div>
      }

    </>
  );
}

export default EnvironmentalFactors