import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import Image from "next/image"

function BasicInfo({ generalInfo, stateURLCase }) {
    const state = generalInfo.state
    const officialName = generalInfo.officialName
    const nicknames = generalInfo.nicknames
    const landlockedStatus = generalInfo.landlockedStatus
    const capitalCity = generalInfo.capitalCity
    const latitude = generalInfo.latitude
    const longitude = generalInfo.longitude
    const mottoLatin = generalInfo.mottoLatin
    const mottoEnglish = generalInfo.mottoEnglish
    const stateAnthemNative = generalInfo.stateAnthemNative
    const largestCity = generalInfo.largestCity
    const demonyms = generalInfo.demonyms
    const officialWebsites = generalInfo.officialWebsites
    const ISO3166Code = generalInfo.ISO3166Code

    return (
      <>
        <AdsHeaderBanner />

        <div className="basic-information-comparison-div1">
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
                  <div className="all-indicators">Official Name</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/country-name-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Visual representation of official name of any country"
                    />
                  </div>
                </td>
                <td className="country-official-name-first-entity all-indicator-answers">
                  {officialName ?? 'Yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">Nicknames</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/continent-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Visual representation of all continents in the world"
                    />
                  </div>
                </td>
                <td className="continent-first-entity all-indicator-answers">
                  {nicknames ?? 'Yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">Landlocked Status</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/landlocked-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting whether the status is landlocked or not."
                    />
                  </div>
                </td>
                <td className="landlocked-answer-first-entity all-indicator-answers">
                  {landlockedStatus ?? 'Yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">Capital City</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/capital-city-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Visual representation of a capital city of any specific country"
                    />
                  </div>
                </td>
                <td className="capital-city-answer-first-entity all-indicator-answers">
                  {capitalCity ?? 'Yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">Latitude</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/latitude-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting Latitide lines in World Map"
                    />
                  </div>
                </td>
                <td className="latitude-answer-first-entity all-indicator-answers">
                  {latitude ?? 'Yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">Longitude</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/longitude-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting Longitude lines in World Map"
                    />
                  </div>
                </td>
                <td className="longitude-answer-first-entity all-indicator-answers">
                  {longitude ?? 'Yet to Update'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <AdsHeaderBanner />

        <div className="basic-information-comparison-div1">
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
                  <div className="all-indicators">Motto (Latin)</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/motto-latin-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Visual representation of official name of any country"
                    />
                  </div>
                </td>
                <td className="motto-latin-first-entity all-indicator-answers">
                  {mottoLatin ?? 'Yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">Motto (English)</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/motto-english-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Visual representation of all continents in the world"
                    />
                  </div>
                </td>
                <td className="motto-english-first-entity all-indicator-answers">
                  {mottoEnglish ?? 'Yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">State Anthem</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/national-anthem-native-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting whether the status is landlocked or not."
                    />
                  </div>
                </td>
                <td className="state-anthem-first-entity all-indicator-answers">
                  {stateAnthemNative ?? 'Yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">Largest City</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/largest-city-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Visual representation of a largest city of any specific state"
                    />
                  </div>
                </td>
                <td className="largest-city-of-state-answer-first-entity all-indicator-answers">
                  {largestCity ?? 'Yet to Update'}
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
                  {demonyms ?? 'Yet to Update'}
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
                  {officialWebsites ?? 'Yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">ISO 3166 Code</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/iso-code-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image depicting ISO 3166 Code of any specific country"
                    />
                  </div>
                </td>
                <td className="iso-code-answer-first-entity all-indicator-answers">
                  {ISO3166Code ?? 'Yet to Update'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
}

export default BasicInfo