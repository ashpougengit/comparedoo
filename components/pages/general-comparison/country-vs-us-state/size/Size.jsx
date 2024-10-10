import { formatNumberWithCommas } from "@/lib/format/format"
import Image from "next/image"

function Size({ slug1, slug2, slug1GeneralInfo, slug2GeneralInfo, slug1URLCase, slug2URLCase }) {
  const slug1AreaInSqMile = slug1GeneralInfo.areaInSqMile
  const slug1AreaInSqMileStr = formatNumberWithCommas(slug1AreaInSqMile)
  const slug1AreaInSqKm = slug1GeneralInfo.areaInSqKm
  const slug1TotalAreasqkmStr = formatNumberWithCommas(slug1AreaInSqKm)
  const slug1WaterPercentage = slug1GeneralInfo.waterPercentage.includes('Negligible') ? slug1GeneralInfo.waterPercentage : `${slug1GeneralInfo.waterPercentage} %`

  const slug2AreaInSqMile = slug2GeneralInfo.areaInSqMile
  const slug2AreaInSqMileStr = formatNumberWithCommas(slug2AreaInSqMile)
  const slug2AreaInSqKm = slug2GeneralInfo.areaInSqKm
  const slug2TotalAreasqkmStr = formatNumberWithCommas(slug2AreaInSqKm)
  const slug2WaterPercentage = slug2GeneralInfo.waterPercentage.includes('Negligible') ? slug2GeneralInfo.waterPercentage : `${slug2GeneralInfo.waterPercentage} %`

  const differenceSqMi = formatNumberWithCommas(Math.abs(slug1AreaInSqMile - slug2AreaInSqMile))
  const differenceSqKm = formatNumberWithCommas(Math.abs(slug1AreaInSqKm - slug2AreaInSqKm))
  const biggerTimes = slug1AreaInSqMile > slug2AreaInSqMile ? (slug1AreaInSqMile / slug2AreaInSqMile).toFixed(2) : (slug2AreaInSqMile / slug1AreaInSqMile).toFixed(2)
  const biggerOrSmaller = slug1AreaInSqMile > slug2AreaInSqMile ? 'bigger' : 'smaller'

  return (
    <>
      <div className="size-comparison">
        <h2 className="pages-h2">Size Comparison</h2>
      </div>

      <div className="paragraph-for-pages-below-table">
        <div className="para-for-pages-single-div">
          <p>
            The total area of
            <span className="first-entity-name-pages-paragraph">
              {' '}
              {slug1}{' '}
            </span>
            <strong>
              is
              <span className="area-in-square-kilometers-first-entity">
                {' '}
                {slug1TotalAreasqkmStr}{' '}
              </span>
              sq km
            </strong>
            , and the total area of
            <span className="second-entity-name-pages-paragraph">
              {' '}
              {slug2}{' '}
            </span>
            <strong>
              is
              <span className="area-in-square-kilometers-second-entity">
                {' '}
                {slug2TotalAreasqkmStr}{' '}
              </span>
              sq km
            </strong>
            .
            <span className="first-entity-name-pages-paragraph">
              {' '}
              {slug1}{' '}
            </span>
            is
            <span className="smaller-or-bigger"> {biggerOrSmaller} </span>
            than
            <span className="second-entity-name-pages-paragraph">
              {' '}
              {slug2}{' '}
            </span>
            by
            <strong>
              <span className="area-in-km-differences">
                {' '}
                {differenceSqKm}{' '}
              </span>
              sq km
            </strong>
            .
            <span className="first-entity-name-pages-paragraph">
              {' '}
              {slug1}{' '}
            </span>
            is around
            <strong>
              <span className="country-area-division"> {biggerTimes} </span>
            </strong>
            times
            <span className="smaller-or-bigger"> {biggerOrSmaller} </span>
            than
            <span className="second-entity-name-pages-paragraph">
              {' '}
              {slug2}
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
                      src={`/images/${slug1URLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                      alt={`Pictorial representation of map of ${slug1URLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {slug1}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${slug1URLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                      alt={`Image illustrating the flag of ${slug1URLCase}`}
                    />
                  </div>
                </div>
              </th>

              <th>
                <div className="heading-map-name-flag">
                  <div className="second-entity-map-pages-comparison">
                    <Image
                      src={`/images/${slug2URLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                      alt={`Pictorial representation of map of ${slug2URLCase}`}
                    />
                  </div>

                  <div className="second-entity-name-pages-comparison">
                    {' '}
                    {slug2}{' '}
                  </div>

                  <div className="second-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${slug2URLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                      alt={`Image illustrating the flag of ${slug2URLCase}`}
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
                {slug1TotalAreasqkmStr
                  ? `${slug1TotalAreasqkmStr} Sq km`
                  : 'Yet to Update'}
              </td>
              <td className="area-in-square-kilometers-second-entity all-indicator-answers">
                {slug2TotalAreasqkmStr
                  ? `${slug2TotalAreasqkmStr} Sq km`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="all-indicators">Difference</td>
              <td colSpan="2">
                <strong>
                  [<span className="area-in-km-differences"></span>
                  {differenceSqKm
                    ? `${differenceSqKm} Square Kilometers`
                    : 'Yet to Update'}
                  ]
                </strong>
              </td>
            </tr>

            <tr>
              <td colSpan="3" className="narrow-table-row"></td>
            </tr>

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
                {slug1AreaInSqMileStr
                  ? `${slug1AreaInSqMileStr} Sq mi`
                  : 'Yet to Update'}
              </td>
              <td className="area-in-square-mile-second-entity all-indicator-answers">
                {slug2AreaInSqMileStr
                  ? `${slug2AreaInSqMileStr} Sq mi`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="all-indicators">Difference</td>
              <td colSpan="2">
                <strong>
                  [<span className="area-in-km-differences"></span>
                  {differenceSqMi
                    ? `${differenceSqMi} Square Mile`
                    : 'Yet to Update'}
                  ]
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Illustration of water percentage area of any country in the world"
                  />
                </div>
              </td>
              <td className="water-percentage-area-first-entity all-indicator-answers">
                {slug1WaterPercentage ?? 'Yet to Update'}
              </td>
              <td className="water-percentage-area-second-entity all-indicator-answers">
                {slug2WaterPercentage ?? 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Size