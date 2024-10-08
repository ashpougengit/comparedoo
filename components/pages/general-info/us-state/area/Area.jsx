import { formatNumberWithCommas } from "@/lib/format/format"
import Image from "next/image"

function Area({ generalInfo, stateURLCase }) {
  const state = generalInfo.state
  const areaInSqKm = formatNumberWithCommas(generalInfo.areaInSqKm)
  const areaInSqMile = formatNumberWithCommas(generalInfo.areaInSqMile)
  const waterPercentage = generalInfo.waterPercentage.includes('Negligible') ? generalInfo.waterPercentage : `${generalInfo.waterPercentage} %`

  return (
    <>
      <div className="size-comparison">
        <h2 className="pages-h2">Area Information</h2>
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
                      src={`/images/${stateURLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

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
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

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
                <div className="all-indicators">Area in Square Mile</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/area-in-sq-mile-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Illustration of area in Square Mile"
                  />
                </div>
              </td>
              <td className="area-in-square-mile-first-entity all-indicator-answers">
                {areaInSqKm ? `${areaInSqKm} Sq Mile` : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  Area in Square Kilometers
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/area-in-sq-km-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Illustration of area in Square Kilometers"
                  />
                </div>
              </td>
              <td className="area-in-square-kilometers-first-entity all-indicator-answers">
                {areaInSqMile ? `${areaInSqMile} Sq km` : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">Water % in Area</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/water-percentage-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Illustration of water percentage area of any country in the world"
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

export default Area