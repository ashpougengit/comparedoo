import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import Image from "next/image"

function Symbols({ state1GeneralInfo, state2GeneralInfo, state1URLCase, state2URLCase }) {
  const state1 = state1GeneralInfo.state
  const state1Bird = state1GeneralInfo.stateBird
  const state1Flower = state1GeneralInfo.stateFlower
  const state1Sports = state1GeneralInfo.stateSport
  const state1Tree = state1GeneralInfo.stateTree
  const state1Colors = state1GeneralInfo.stateColors

  const state2 = state2GeneralInfo.state
  const state2Bird = state2GeneralInfo.stateBird
  const state2Flower = state2GeneralInfo.stateFlower
  const state2Sports = state2GeneralInfo.stateSport
  const state2Tree = state2GeneralInfo.stateTree
  const state2Colors = state2GeneralInfo.stateColors

  return (
    <>
      <AdsHeaderBanner />

      <div className="national-symbols-comparison">
        <h2 className="pages-h2">State Symbols Comparison</h2>
      </div>

      <div className="national-symbols-factors-comparison">
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
                <div className="all-indicators-health-factors all-indicators">
                  State Bird
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/national-bird-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Visual representation of national bird of any specific country"
                  />
                </div>
              </td>
              <td className="state-bird-answer-first-entity all-indicator-answers">
                {state1Bird ?? 'Yet to Update'}
              </td>
              <td className="state-bird-answer-second-entity all-indicator-answers">
                {state2Bird ?? 'Yet to Update'}
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Visual representation of state flower of any specific country"
                  />
                </div>
              </td>
              <td className="state-flower-answer-first-entity all-indicator-answers">
                {state1Flower ?? 'Yet to Update'}
              </td>
              <td className="state-flower-answer-second-entity all-indicator-answers">
                {state2Flower ?? 'Yet to Update'}
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Visual representation of national sport of any specific country"
                  />
                </div>
              </td>
              <td className="state-sport-answer-first-entity all-indicator-answers">
                {state1Sports ?? 'Yet to Update'}
              </td>
              <td className="state-sport-answer-second-entity all-indicator-answers">
                {state2Sports ?? 'Yet to Update'}
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Visual representation of national colors of any specific country"
                  />
                </div>
              </td>
              <td className="state-tree-answer-first-entity all-indicator-answers">
                {state1Tree ?? 'Yet to Update'}
              </td>
              <td className="state-tree-answer-second-entity all-indicator-answers">
                {state2Tree ?? 'Yet to Update'}
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Visual representation of state colors of any specific US State"
                  />
                </div>
              </td>
              <td className="state-colors-answer-first-entity all-indicator-answers">
                {state1Colors ?? 'Yet to Update'}
              </td>
              <td className="state-colors-answer-second-entity all-indicator-answers">
                {state2Colors ?? 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Symbols