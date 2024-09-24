import { formatNumberWithCommas } from "@/lib/format/format";
import Image from "next/image";

function SizeInfo({ generalInfo, countryURLCase }) {
  const country = generalInfo.country
  const areaInSqKm = formatNumberWithCommas(generalInfo.areaInSqKm)
  const areaInSqMile = formatNumberWithCommas(generalInfo.areaInSqMile)
  const waterPercentage = generalInfo.waterPercentage.includes('Negligible') ? generalInfo.waterPercentage : `${generalInfo.waterPercentage} %`

  return (
    <>
      <div className="size-comparison">
        <h2 className="pages-h2">Size Information</h2>
      </div>

      <div className="size-factors-comparison-div1">
        <table className="indicators-single-country-divs">
          <thead>
            <tr className="first-tr">
              <th>
                <div className="heading-map-name-flag">
                  <div className="right-indicator">
                    <Image
                      src="/images/indicators-right-image.png"
                      fill alt="Image representing an indicator"
                    />
                  </div>

                  <div className="indicator-text">Indicators</div>

                  <div className="left-indicator">
                    <Image
                      src="/images/indicators-left-image.png"
                      fill alt="Image illustrating an indicator"
                    />
                  </div>
                </div>
              </th>

              <th>
                <div className="heading-map-name-flag">
                  <div className="first-entity-map-pages-comparison">
                    <Image src={`/images/${countryURLCase}-map-small.png`} fill alt={`Pictorial representation of map of ${countryURLCase}`} />
                  </div>

                  <div className="first-entity-name-pages-comparison">{country}</div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image src={`/images/${countryURLCase}-flag-small.png`} fill alt={`Image illustrating the flag of ${countryURLCase}`} />
                  </div>
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">Area in Square Kilometers</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/square-km-image.png"
                    fill alt="Illustration of area in Square Kilometers"
                  />
                </div>
              </td>
              <td className="area-in-square-kilometers-first-entity all-indicator-answers">
                {areaInSqKm ? (
                  <>
                    {areaInSqKm} <span>Sq km</span>
                  </>
                ) : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td colSpan="2" className="narrow-table-row"></td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Area in Square Mile</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/square-mile-image.png"
                    fill alt="Illustration of area in Square Mile"
                  />
                </div>
              </td>
              <td className="area-in-square-mile-first-entity all-indicator-answers">
                {areaInSqMile ? (
                  <>
                    {areaInSqMile} <span>Sq Mile</span>
                  </>
                ) : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td colSpan="2" className="narrow-table-row"></td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Water % in Area</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/water-percentage-image.png"
                    fill alt="Illustration of water percentage area of any country in the world"
                  />
                </div>
              </td>
              <td className="water-percentage-area-first-entity all-indicator-answers">
                {waterPercentage ?? 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SizeInfo;
