import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner'
import { formatNumberWithCommas } from '@/lib/format/format'
import Image from 'next/image'

function SizeComparison({ country1GeneralInfo, country2GeneralInfo, country1URLCase, country2URLCase }) {
  const country1 = country1GeneralInfo.country
  const country1AreaInSqKm = Number(country1GeneralInfo?.areaInSqKm)
  const country1AreaInSqMile = Number(country1GeneralInfo?.areaInSqMile)
  const country1WaterPercentage = country1GeneralInfo.waterPercentage.includes('Negligible') ? country1GeneralInfo.waterPercentage : `${country1GeneralInfo.waterPercentage} %`

  const country1AreaInSqKmStr = formatNumberWithCommas(country1AreaInSqKm)
  const country1AreaInSqMileStr = formatNumberWithCommas(country1AreaInSqMile)

  const country2 = country2GeneralInfo.country
  const country2AreaInSqKm = Number(country2GeneralInfo?.areaInSqKm)
  const country2AreaInSqMile = Number(country2GeneralInfo?.areaInSqMile)
  const country2WaterPercentage = country2GeneralInfo.waterPercentage.includes('Negligible') ? country2GeneralInfo.waterPercentage : `${country2GeneralInfo.waterPercentage} %`

  const country2AreaInSqKmStr = formatNumberWithCommas(country2AreaInSqKm)
  const country2AreaInSqMileStr = formatNumberWithCommas(country2AreaInSqMile)

  const isBigger = country1AreaInSqKm && country2AreaInSqKm && country1AreaInSqKm > country2AreaInSqKm ? 'bigger' : 'smaller'
  const areaDifferenceInKm = formatNumberWithCommas(Math.abs(country1AreaInSqKm - country2AreaInSqKm))
  const areaDifferenceInMile = formatNumberWithCommas(Math.abs(country1AreaInSqMile - country2AreaInSqMile))
  const timesBiggerOrSmaller = country1AreaInSqKm && country2AreaInSqKm && country1AreaInSqKm > country2AreaInSqKm ? (country1AreaInSqKm / country2AreaInSqKm).toFixed(2) : (country2AreaInSqKm / country1AreaInSqKm).toFixed(2)

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
              {country1}{' '}
            </span>
            <strong>
              is{' '}
              <span className="area-in-square-kilometers-first-entity">
                {' '}
                {country1AreaInSqKmStr}{' '}
              </span>{' '}
              sq km
            </strong>
            , and the total area of
            <span className="second-entity-name-pages-paragraph">
              {' '}
              {country2}{' '}
            </span>
            <strong>
              is{' '}
              <span className="area-in-square-kilometers-second-entity">
                {' '}
                {country2AreaInSqKmStr}{' '}
              </span>{' '}
              sq km
            </strong>
            .{' '}
            <span className="first-entity-name-pages-paragraph">
              {' '}
              {country1}{' '}
            </span>{' '}
            is
            <span className="smaller-or-bigger"> {isBigger} </span> than
            <span className="second-entity-name-pages-paragraph">
              {' '}
              {country2}{' '}
            </span>{' '}
            by
            <strong>
              <span className="area-in-km-differences">
                {' '}
                {areaDifferenceInKm}{' '}
              </span>{' '}
              sq km
            </strong>
            .
            <span className="first-entity-name-pages-paragraph">
              {' '}
              {country1}{' '}
            </span>{' '}
            is around
            <strong>
              <span className="country-area-division">
                {' '}
                {timesBiggerOrSmaller}{' '}
              </span>{' '}
            </strong>
            times
            <span className="smaller-or-bigger"> {isBigger} </span> than
            <span className="second-entity-name-pages-paragraph">
              {' '}
              {country2}
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
                      src={`/images/${country1URLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                <div className="all-indicators">Area in Square Kilometers</div>
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
                {country1AreaInSqKmStr
                  ? `${country1AreaInSqKmStr} Sq km`
                  : 'Yet to Update'}
              </td>
              <td className="area-in-square-kilometers-second-entity all-indicator-answers">
                {country2AreaInSqKmStr
                  ? `${country2AreaInSqKmStr} Sq km`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="all-indicators">Difference</td>
              <td colSpan="2">
                {' '}
                <strong>
                  {' '}
                  [<span className="area-in-km-differences"></span>{' '}
                  {areaDifferenceInKm
                    ? `${areaDifferenceInKm} Square Kilometers`
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
                {country1AreaInSqMileStr
                  ? `${country1AreaInSqMileStr} Sq Mile`
                  : 'Yet to Update'}
              </td>
              <td className="area-in-square-mile-second-entity all-indicator-answers">
                {country2AreaInSqMileStr
                  ? `${country2AreaInSqMileStr} Sq Mile`
                  : 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="all-indicators">Difference</td>
              <td colSpan="2">
                {' '}
                <strong>
                  {' '}
                  [<span className="area-in-km-differences"></span>{' '}
                  {areaDifferenceInMile
                    ? `${areaDifferenceInMile} Square Mile`
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
                {country1WaterPercentage ?? 'Yet to Update'}
              </td>
              <td className="water-percentage-area-second-entity all-indicator-answers">
                {country2WaterPercentage ?? 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <AdsHeaderBanner />
    </>
  );
}

export default SizeComparison
