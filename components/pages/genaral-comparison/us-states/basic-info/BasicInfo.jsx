import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import Image from "next/image"

function BasicInfo({ state1GeneralInfo, state2GeneralInfo, state1URLCase, state2URLCase }) {
  const state1 = state1GeneralInfo.state
  const state1OfficialName = state1GeneralInfo.officialName
  const state1Nicknames = state1GeneralInfo.nicknames
  const state1LandlockedStatus = state1GeneralInfo.landlockedStatus
  const state1CapitalCity = state1GeneralInfo.capitalCity
  const state1Latitude = state1GeneralInfo.latitude
  const state1Longitude = state1GeneralInfo.longitude
  const state1MottoLatin = state1GeneralInfo.mottoLatin
  const state1MottoEnglish = state1GeneralInfo.mottoEnglish
  const state1NativeAnthem = state1GeneralInfo.stateAnthemNative
  const state1LargestCity = state1GeneralInfo.largestCity
  const state1Demonyms = state1GeneralInfo.demonyms
  const state1OfficialWebsites = state1GeneralInfo.officialWebsites
  const state1ISO3166Code = state1GeneralInfo.ISO3166Code

  const state2 = state2GeneralInfo.state
  const state2OfficialName = state2GeneralInfo.officialName
  const state2Nicknames = state2GeneralInfo.nicknames
  const state2LandlockedStatus = state2GeneralInfo.landlockedStatus
  const state2CapitalCity = state2GeneralInfo.capitalCity
  const state2Latitude = state2GeneralInfo.latitude
  const state2Longitude = state2GeneralInfo.longitude
  const state2MottoLatin = state2GeneralInfo.mottoLatin
  const state2MottoEnglish = state2GeneralInfo.mottoEnglish
  const state2NativeAnthem = state2GeneralInfo.stateAnthemNative
  const state2LargestCity = state2GeneralInfo.largestCity
  const state2Demonyms = state2GeneralInfo.demonyms
  const state2OfficialWebsites = state2GeneralInfo.officialWebsites
  const state2ISO3166Code = state2GeneralInfo.ISO3166Code

  return (
    <>
      <AdsHeaderBanner />

      <div className="basic-information-comparison-div1">
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
                <div className="all-indicators">Official Name</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/country-name-image.png"
                    fill
                    alt="Visual representation of official name of any country"
                  />
                </div>
              </td>

              <td className="country-official-name-first-entity all-indicator-answers">
                {state1OfficialName ?? 'Yet to Update'}
              </td>
              <td className="country-official-name-second-entity all-indicator-answers">
                {state2OfficialName ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Nicknames</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/continent-image.png"
                    fill
                    alt="Visual representation of all continents in the world"
                  />
                </div>
              </td>
              <td className="continent-first-entity all-indicator-answers">
                {state1Nicknames ?? 'Yet to Update'}{' '}
              </td>
              <td className="continent-second-entity all-indicator-answers">
                {state2Nicknames ?? 'Yet to Update'}{' '}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Landlocked Status</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/landlocked-image.png"
                    fill
                    alt="Image Depicting whether the status is landlocked or not."
                  />
                </div>
              </td>
              <td className="landlocked-answer-first-entity all-indicator-answers">
                {state1LandlockedStatus ?? 'Yet to Update'}
              </td>
              <td className="landlocked-answer-second-entity all-indicator-answers">
                {state2LandlockedStatus ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Capital City</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/capital-city-image.png"
                    fill
                    alt="Visual representation of a capital city of any specific country"
                  />
                </div>
              </td>
              <td className="capital-city-answer-first-entity all-indicator-answers">
                {state1CapitalCity ?? 'Yet to Update'}
              </td>
              <td className="capital-city-answer-second-entity all-indicator-answers">
                {state2CapitalCity ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Latitude</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/latitude-image.png"
                    fill
                    alt="Image Depicting Latitide lines in World Map"
                  />
                </div>
              </td>
              <td className="latitude-answer-first-entity all-indicator-answers">
                {state1Latitude ?? 'Yet to Update'}
              </td>
              <td className="latitude-answer-second-entity all-indicator-answers">
                {state2Latitude ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Longitude</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/longitude-image.png"
                    fill
                    alt="Image Depicting Longitude lines in World Map"
                  />
                </div>
              </td>
              <td className="longitude-answer-first-entity all-indicator-answers">
                {state1Longitude ?? 'Yet to Update'}
              </td>
              <td className="longitude-answer-second-entity all-indicator-answers">
                {state2Longitude ?? 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <AdsHeaderBanner />

      <div className="basic-information-comparison-div1">
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
                <div className="all-indicators">Motto (Latin)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/motto-latin-image.png"
                    fill
                    alt="Visual representation of official name of any country"
                  />
                </div>
              </td>

              <td className="motto-latin-first-entity all-indicator-answers">
                {state1MottoLatin ?? 'Yet to Update'}{' '}
              </td>
              <td className="motto-latin-second-entity all-indicator-answers">
                {state2MottoLatin ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Motto (English)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/motto-english-image.png"
                    fill
                    alt="Visual representation of all continents in the world"
                  />
                </div>
              </td>
              <td className="motto-english-first-entity all-indicator-answers">
                {state1MottoEnglish ?? 'Yet to Update'}{' '}
              </td>
              <td className="motto-english-second-entity all-indicator-answers">
                {state2MottoEnglish ?? 'Yet to Update'}{' '}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">State Anthem</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/national-anthem-native-image.png"
                    fill
                    alt="Image Depicting whether the status is landlocked or not."
                  />
                </div>
              </td>
              <td className="state-anthem-first-entity all-indicator-answers">
                {state1NativeAnthem ?? 'Yet to Update'}
              </td>
              <td className="state-anthem-second-entity all-indicator-answers">
                {state2NativeAnthem ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Largest City</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/largest-city-image.png"
                    fill
                    alt="Visual representation of a largest city of any specific state"
                  />
                </div>
              </td>
              <td className="largest-city-of-state-answer-first-entity all-indicator-answers">
                {state1LargestCity ?? 'Yet to Update'}
              </td>
              <td className="largest-city-of-state-answer-second-entity all-indicator-answers">
                {state2LargestCity ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Demonyms</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/demonyms-image.png"
                    fill
                    alt="Image depicting demonyms of any specific country"
                  />
                </div>
              </td>
              <td className="demonyms-answer-first-entity all-indicator-answers">
                {state1Demonyms ?? 'Yet to Update'}
              </td>
              <td className="demonyms-answer-second-entity all-indicator-answers">
                {state2Demonyms ?? 'Yet to Update'}
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
                    fill
                    alt="Image depicting Internet Top Level Domain also called tld of any specific country"
                  />
                </div>
              </td>
              <td className="internet-tld-answer-first-entity all-indicator-answers">
                {state1OfficialWebsites ?? 'Yet to Update'}
              </td>
              <td className="internet-tld-answer-second-entity all-indicator-answers">
                {state2OfficialWebsites ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">ISO 3166 Code</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/iso-3166-code-image.png"
                    fill
                    alt="Image depicting ISO 3166 Code of any specific country"
                  />
                </div>
              </td>
              <td className="iso-code-answer-first-entity all-indicator-answers">
                {state1ISO3166Code ?? 'Yet to Update'}
              </td>
              <td className="iso-code-answer-second-entity all-indicator-answers">
                {state2ISO3166Code ?? 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {state1Demonyms && state2Demonyms &&
        <div className="paragraph-for-pages-below-table">
          <div className="para-for-pages-single-div">
            <p>
              The people of{' '}
              <strong>
                {' '}
                <span className="first-entity-name-pages-paragraph">
                  {' '}
                  {state1}{' '}
                </span>
              </strong>
              are called{' '}
              <strong>
                {' '}
                <span className="demonyms-answer-first-entity">
                  {' '}
                  {state1Demonyms}
                </span>
              </strong>
              , and the people of
              <strong>
                <span className="second-entity-name-pages-paragraph">
                  {' '}
                  {state2}{' '}
                </span>
              </strong>
              are called
              <strong>
                {' '}
                <span className="demonyms-answer-second-entity">
                  {' '}
                  {state2Demonyms}
                </span>
              </strong>
              .
            </p>
          </div>
        </div>
      }
    </>
  );
}

export default BasicInfo