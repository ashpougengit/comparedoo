import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { USStates } from "@/lib/array-list/allUSStates"
import Image from "next/image"

function Geography({ slug1, slug2, slug1GeneralInfo, slug2GeneralInfo, slug1URLCase, slug2URLCase }) {
  const slug1LargestCity = slug1GeneralInfo.largestCity
  const slug1Demonyms = slug1GeneralInfo.demonyms
  const slug1OfficialLanguages = slug1GeneralInfo.officialLanguages
  const slug1CurrencyName = slug1GeneralInfo.currencyName
  const slug1CurrencySymbol = slug1GeneralInfo.currencySymbol
  const slug1StartOfWeek = slug1GeneralInfo.startOfWeek
  const slug1DrivingSide = slug1GeneralInfo.drivingSide
  const slug1CallingCode = slug1GeneralInfo.callingCode
  const slug1OfficialWebsite = slug1GeneralInfo[USStates.includes(slug1) ? 'officialWebsites' : 'internetTLD']
  const slug1ISO3166 = slug1GeneralInfo.ISO3166Code

  const slug2LargestCity = slug2GeneralInfo.largestCity
  const slug2Demonyms = slug2GeneralInfo.demonyms
  const slug2OfficialLanguages = slug2GeneralInfo.officialLanguages
  const slug2CurrencyName = slug2GeneralInfo.currencyName
  const slug2CurrencySymbol = slug2GeneralInfo.currencySymbol
  const slug2StartOfWeek = slug2GeneralInfo.startOfWeek
  const slug2DrivingSide = slug2GeneralInfo.drivingSide
  const slug2CallingCode = slug2GeneralInfo.callingCode
  const slug2OfficialWebsite = slug2GeneralInfo[USStates.includes(slug2) ? 'officialWebsites' : 'internetTLD']
  const slug2ISO3166 = slug2GeneralInfo.ISO3166Code

  return (
    <>
      <AdsHeaderBanner />

      <div className="geographical-factors">
        <h2 className="pages-h2">Geographical Factors Comparison</h2>
      </div>

      <div className="geographical-factors-comparison-div1">
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
                      src={`/images/${slug1URLCase}-map-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Pictorial representation of map of ${slug1URLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {slug1}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${slug1URLCase}-flag-small.png`}
                      layout="fill"
                      objectFit="contain"
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
                      layout="fill"
                      objectFit="contain"
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
                      layout="fill"
                      objectFit="contain"
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
                <div className="all-indicators">Largest City</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/largest-city-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Visual representation of the Largest City of any country"
                  />
                </div>
              </td>
              <td className="largest-city-answer-first-entity all-indicator-answers">
                {slug1LargestCity ?? 'Yet to Update'}
              </td>
              <td className="largest-city-answer-second-entity all-indicator-answers">
                {slug2LargestCity ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Demonyms</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/demonyms-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image depicting demonyms of any specific country"
                  />
                </div>
              </td>
              <td className="demonyms-answer-first-entity all-indicator-answers">
                {slug1Demonyms ?? 'Yet to Update'}
              </td>
              <td className="demonyms-answer-second-entity all-indicator-answers">
                {slug2Demonyms ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Official Languages</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/official-language-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image depicting the official languages of any specific country"
                  />
                </div>
              </td>
              <td className="official-languages-answer-first-entity all-indicator-answers">
                {slug1OfficialLanguages ?? 'Yet to Update'}
              </td>
              <td className="official-languages-answer-second-entity all-indicator-answers">
                {slug2OfficialLanguages ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Currency Name</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/currency-name-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Visual representation of currency name of any specific country"
                  />
                </div>
              </td>
              <td className="currency-name-answer-first-entity all-indicator-answers">
                {slug1CurrencyName ?? 'Yet to Update'}
              </td>
              <td className="currency-name-answer-second-entity all-indicator-answers">
                {slug2CurrencyName ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Currency Symbol</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/currency-symbol-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Visual representation of currency symbol of any specific country"
                  />
                </div>
              </td>
              <td className="currency-symbol-answer-first-entity all-indicator-answers">
                {slug1CurrencySymbol ?? 'Yet to Update'}
              </td>
              <td className="currency-symbol-answer-second-entity all-indicator-answers">
                {slug2CurrencySymbol ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Start of Week</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/start-of-week-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image showing the first working day of week of any specific country"
                  />
                </div>
              </td>
              <td className="week-start-answer-first-entity all-indicator-answers">
                {slug1StartOfWeek ?? 'Yet to Update'}
              </td>
              <td className="week-start-answer-second-entity all-indicator-answers">
                {slug2StartOfWeek ?? 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {slug1Demonyms && slug2Demonyms &&
        <div className="paragraph-for-pages-below-table">
          <div className="para-for-pages-single-div">
            <p>
              The people of
              <strong>
                <span className="first-entity-name-pages-paragraph">
                  {' '}
                  {slug1}{' '}
                </span>
              </strong>
              are called
              <strong>
                <span className="demonyms-answer-first-entity">
                  {' '}
                  {slug1Demonyms}
                </span>
              </strong>
              , and the people of{' '}
              <strong>
                <span className="second-entity-name-pages-paragraph">
                  {slug2}{' '}
                </span>
              </strong>
              are called
              <strong>
                <span className="demonyms-answer-second-entity">
                  {' '}
                  {slug2Demonyms}
                </span>
              </strong>
              .
            </p>
          </div>
        </div>
      }

      <div className="geographical-factors-comparison-div2">
        <table className="indicators-first-entity-and-second-entity-div2">
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
                      src={`/images/${slug1URLCase}-map-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Pictorial representation of map of ${slug1URLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {slug1}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${slug1URLCase}-flag-small.png`}
                      layout="fill"
                      objectFit="contain"
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
                      layout="fill"
                      objectFit="contain"
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
                      layout="fill"
                      objectFit="contain"
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
                <div className="all-indicators">Driving Side</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/driving-side-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Visual representation of driving side of any specific country"
                  />
                </div>
              </td>
              <td className="driving-side-answer-first-entity all-indicator-answers">
                {slug1DrivingSide ?? 'Yet to Update'}
              </td>
              <td className="driving-side-answer-second-entity all-indicator-answers">
                {slug2DrivingSide ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Calling Code</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/calling-code-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image depicting calling code of any specific country"
                  />
                </div>
              </td>
              <td className="calling-code-answer-first-entity all-indicator-answers">
                {slug1CallingCode ?? 'Yet to Update'}
              </td>
              <td className="calling-code-answer-second-entity all-indicator-answers">
                {slug2CallingCode ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  Internet TLD or Official Website
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/internet-tld-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image depicting Internet Top Level Domain also called tld of any specific country"
                  />
                </div>
              </td>
              <td className="internet-tld-answer-first-entity all-indicator-answers">
                {slug1OfficialWebsite ?? 'Yet to Update'}
              </td>
              <td className="internet-tld-answer-second-entity all-indicator-answers">
                {slug2OfficialWebsite ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">ISO 3166 Code</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/iso-3166-code-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image depicting ISO 3166 Code of any specific country"
                  />
                </div>
              </td>
              <td className="iso-code-answer-first-entity all-indicator-answers">
                {slug1ISO3166 ?? 'Yet to Update'}
              </td>
              <td className="iso-code-answer-second-entity all-indicator-answers">
                {slug2ISO3166 ?? 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Geography