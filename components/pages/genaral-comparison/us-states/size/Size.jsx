import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { formatNumberWithCommas } from "@/lib/format/format"
import Image from "next/image"

function Size({ state1GeneralInfo, state2GeneralInfo, state1URLCase, state2URLCase }) {
  const state1 = state1GeneralInfo.state
  const state1AreaInSqMile = state1GeneralInfo.areaInSqMile
  const state1AreaInSqMileStr = formatNumberWithCommas(state1AreaInSqMile)
  const state1AreaInSqKm = state1GeneralInfo.areaInSqKm
  const state1AreaInSqKmStr = formatNumberWithCommas(state1AreaInSqKm)
  const state1WaterPercentage = state1GeneralInfo.waterPercentage.includes('Negligible') ? state1GeneralInfo.waterPercentage : `${state1GeneralInfo.waterPercentage} %`

  const state2 = state2GeneralInfo.state
  const state2AreaInSqMile = state2GeneralInfo.areaInSqMile
  const state2AreaInSqMileStr = formatNumberWithCommas(state2AreaInSqMile)
  const state2AreaInSqKm = state2GeneralInfo.areaInSqKm
  const state2AreaInSqKmStr = formatNumberWithCommas(state2AreaInSqKm)
  const state2WaterPercentage = state2GeneralInfo.waterPercentage.includes('Negligible') ? state2GeneralInfo.waterPercentage : `${state2GeneralInfo.waterPercentage} %`

  const differenceSqMi = formatNumberWithCommas(Math.abs(state1AreaInSqMile - state2AreaInSqMile))
  const differenceSqKm = formatNumberWithCommas(Math.abs(state1AreaInSqKm - state2AreaInSqKm))
  const biggerTimes = state1AreaInSqMile > state2AreaInSqMile ? (state1AreaInSqMile / state2AreaInSqMile).toFixed(2) : (state2AreaInSqMile / state1AreaInSqMile).toFixed(2)
  const biggerOrSmaller = state1AreaInSqMile > state2AreaInSqMile ? 'bigger' : 'smaller'

  return (
    <>
      <div className="size-comparison">
        <h2 className="pages-h2">Size Comparison</h2>
      </div>

      <div className="paragraph-for-pages-below-table">
        <div className="para-for-pages-single-div">
          <p>
            The total area of{' '}
            <span className="first-entity-name-pages-paragraph">
              {' '}
              {state1}{' '}
            </span>
            <strong>
              is{' '}
              <span className="area-in-square-mile-first-entity">
                {' '}
                {state1AreaInSqMileStr}{' '}
              </span>{' '}
              Square Mile
            </strong>
            , and the total area of
            <span className="second-entity-name-pages-paragraph">
              {' '}
              {state2}{' '}
            </span>
            <strong>
              is{' '}
              <span className="area-in-square-mile-second-entity">
                {' '}
                {state2AreaInSqMileStr}{' '}
              </span>{' '}
              Square Mile
            </strong>
            .{' '}
            <span className="first-entity-name-pages-paragraph">
              {' '}
              {state1}{' '}
            </span>{' '}
            is
            <span className="smaller-or-bigger">
              {' '}
              {biggerOrSmaller}{' '}
            </span>{' '}
            than
            <span className="second-entity-name-pages-paragraph">
              {' '}
              {state2}{' '}
            </span>{' '}
            by
            <strong>
              <span className="area-in-sq-mile-differences">
                {' '}
                {differenceSqMi}{' '}
              </span>{' '}
              sq mile
            </strong>
            .
            <span className="first-entity-name-pages-paragraph">
              {' '}
              {state1}{' '}
            </span>{' '}
            is around
            <strong>
              <span className="state-area-division"> {biggerTimes} </span>{' '}
            </strong>
            times
            <span className="smaller-or-bigger">
              {' '}
              {biggerOrSmaller}{' '}
            </span>{' '}
            than
            <span className="second-entity-name-pages-paragraph">
              {' '}
              {state2}
            </span>
            .
          </p>
        </div>
      </div>

      <div className="size-factors-comparison-div1">
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
                      src={`/images/${state1URLCase}-map-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Pictorial representation of map of ${state1URLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {state1}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${state1URLCase}-flag-small.png`}
                      layout="fill"
                      objectFit="contain"
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
                      layout="fill"
                      objectFit="contain"
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
                      layout="fill"
                      objectFit="contain"
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
                <div className="all-indicators">Area in Square Mile</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/square-mile-image.png"
                    fill
                    alt="Illustration of area in Square Mile"
                  />
                </div>
              </td>
              <td className="area-in-square-mile-first-entity all-indicator-answers">
                {state1AreaInSqMileStr} <span>Sq Mile</span>{' '}
              </td>
              <td className="area-in-square-mile-second-entity all-indicator-answers">
                {state2AreaInSqMileStr} <span>Sq Mile</span>
              </td>
            </tr>
            <tr>
              <td className="all-indicators">Difference</td>
              <td colSpan="2">
                {' '}
                <strong>
                  {' '}
                  [<span className="area-in-km-differences"></span>{' '}
                  {differenceSqMi} <span>Square Mile</span>]
                </strong>
              </td>
            </tr>

            <tr>
              <td colSpan="3" className="narrow-table-row"></td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  Area in Square Kilometers
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/square-km-image.png"
                    fill
                    alt="Illustration of area in Square Kilometers"
                  />
                </div>
              </td>
              <td className="area-in-square-kilometers-first-entity all-indicator-answers">
                {state1AreaInSqKmStr} <span>Sq km</span>
              </td>
              <td className="area-in-square-kilometers-second-entity all-indicator-answers">
                {state2AreaInSqKmStr} <span>Sq km</span>
              </td>
            </tr>
            <tr>
              <td className="all-indicators">Difference</td>
              <td colSpan="2">
                {' '}
                <strong>
                  {' '}
                  [<span className="area-in-km-differences"></span>{' '}
                  {differenceSqKm} <span>Square Kilometers</span>]
                </strong>
              </td>
            </tr>

            <tr>
              <td colSpan="3" className="narrow-table-row"></td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Water % in Area</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/water-percentage-image.png"
                    fill
                    alt="Illustration of water percentage area of any country in the world"
                  />
                </div>
              </td>
              <td className="water-percentage-area-first-entity all-indicator-answers">
                {state1WaterPercentage ?? 'Yet to Update'}
              </td>
              <td className="water-percentage-area-second-entity all-indicator-answers">
                {state2WaterPercentage ?? 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Size