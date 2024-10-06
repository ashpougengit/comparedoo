import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import Image from "next/image"

function Symbols({ generalInfo, stateURLCase }) {
  const state = generalInfo.state
  const stateBird = generalInfo.stateBird
  const stateFlower = generalInfo.stateFlower
  const stateSport = generalInfo.stateSport
  const stateTree = generalInfo.stateTree
  const stateColors = generalInfo.stateColors

  return (
    <>
      <AdsHeaderBanner />

      <div className="national-symbols-comparison">
        <h2 className="pages-h2">State Symbols Information</h2>
      </div>
      <div className="national-symbols-factors-comparison">
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
                <div className="all-indicators-health-factors all-indicators">
                  State Bird
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/national-bird-image.png"
                    fill
                    alt="Visual representation of national bird of any specific country"
                  />
                </div>
              </td>
              <td className="state-bird-answer-first-entity all-indicator-answers">
                {stateBird ?? 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators-health-factors all-indicators">
                  State Flower
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/national-flower-image.png"
                    fill
                    alt="Visual representation of state flower of any specific country"
                  />
                </div>
              </td>
              <td className="state-flower-answer-first-entity all-indicator-answers">
                {stateFlower ?? 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators-health-factors all-indicators">
                  State Sport
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/national-sport-image.png"
                    fill
                    alt="Visual representation of national sport of any specific country"
                  />
                </div>
              </td>
              <td className="state-sport-answer-first-entity all-indicator-answers">
                {stateSport ?? 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators-health-factors all-indicators">
                  State Tree
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/state-tree-image.png"
                    fill
                    alt="Visual representation of national colors of any specific country"
                  />
                </div>
              </td>
              <td className="state-tree-answer-first-entity all-indicator-answers">
                {stateTree ?? 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators-health-factors all-indicators">
                  State Colors
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/state-colors-image.png"
                    fill
                    alt="Visual representation of state colors of any specific US State"
                  />
                </div>
              </td>
              <td className="state-colors-answer-first-entity all-indicator-answers">
                {stateColors ?? 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Symbols