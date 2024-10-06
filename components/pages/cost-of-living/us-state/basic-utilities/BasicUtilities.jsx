import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { formatNumberWithCommas } from '@/lib/format/format';
import Image from 'next/image';

function BasicUtilities({ costInfo, stateURLCase }) {
  const state = costInfo.state;
  const homeFurnishing = costInfo.homeFurnishing;
  const electricityCostPerMonth = costInfo.electricityCostPerMonth;
  const heatingCostPerMonth = costInfo.heatingCostPerMonth;
  const coolingCostPerMonth = costInfo.coolingCostPerMonth;
  const waterCostPerMonth = costInfo.waterCostPerMonth;

  return (
    <>
      <AdsHeaderBanner />

      <div className="geographical-map">
        <h2 className="pages-h2">Basic Utilities Cost</h2>
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
                      src={`/images/${stateURLCase}-map-small.png`}
                      fill
                      alt={`Pictorial representation of map of ${stateURLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {state}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${stateURLCase}-flag-small.png`}
                      fill
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
                <div className="all-indicators">Basic Home Furnishing</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/home-furnishing-image.png"
                    fill
                    alt="Image Describing Home Furnishing Cost"
                  />
                </div>
              </td>

              <td className="home-furnishing-answer-first-entity all-indicator-answers">
                {homeFurnishing
                  ? `${formatNumberWithCommas(homeFurnishing)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Electricity Cost Per Month</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/electricity-cost-per-month-image.png"
                    fill
                    alt="Image Describing Electricity Cost per month"
                  />
                </div>
              </td>

              <td className="electricity-cost-per-month-answer-first-entity all-indicator-answers">
                {electricityCostPerMonth
                  ? `${formatNumberWithCommas(electricityCostPerMonth)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Heating Cost Per Month</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/heating-cost-per-month-image.png"
                    fill
                    alt="Image Describing Heating Cost per month"
                  />
                </div>
              </td>

              <td className="heating-cost-per-month-answer-first-entity all-indicator-answers">
                {heatingCostPerMonth
                  ? `${formatNumberWithCommas(heatingCostPerMonth)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Cooling Cost Per Month</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/cooling-cost-per-month-image.png"
                    fill
                    alt="Image Describing Cooling Cost per month"
                  />
                </div>
              </td>

              <td className="cooling-cost-per-month-answer-first-entity all-indicator-answers">
                {coolingCostPerMonth
                  ? `${formatNumberWithCommas(coolingCostPerMonth)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  Water Supply Cost Per Month
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/water-cost-per-month-image.png"
                    fill
                    alt="Image Describing water cost per month"
                  />
                </div>
              </td>

              <td className="water-cost-per-month-answer-first-entity all-indicator-answers">
                {waterCostPerMonth
                  ? `${formatNumberWithCommas(waterCostPerMonth)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BasicUtilities;
