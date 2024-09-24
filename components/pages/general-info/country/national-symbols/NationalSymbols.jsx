import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import Image from "next/image"

function NationalSymbols({ generalInfo, countryURLCase }) {
  const country = generalInfo.country
  const nationalAnthemNative = generalInfo.nationalAnthemNative
  const nationalAnthemEnglish = generalInfo.nationalAnthemEnglish
  const nationalAnimal = generalInfo.nationalAnimal
  const nationalBird = generalInfo.nationalBird
  const nationalFlower = generalInfo.nationalFlower
  const nationalSport = generalInfo.nationalSport
  const nationalColors = generalInfo.nationalColors

  return (
    <>
      <AdsHeaderBanner />

      <div className="national-symbols-comparison">
        <h2 className="pages-h2">National Symbols Information</h2>
      </div>

      <div className="national-symbols-factors-comparison">

        <table className="indicators-single-country-divs">

          <thead>
            <tr className="first-tr">
              <th>
                <div className="heading-map-name-flag">
                  <div className="right-indicator">
                    <Image src="/images/indicators-right-image.png" fill alt="Image representing an indicator" />
                  </div>

                  <div className="indicator-text">
                    Indicators
                  </div>

                  <div className="left-indicator">
                    <Image src="/images/indicators-left-image.png" fill alt="Image illustrating an indicator" />
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
                <div className="all-indicators-health-factors all-indicators">
                  National Anthem Title (Native)
                </div>
                <div className="basic-information-images">
                  <Image src="/images/national-anthem-native-image.png"
                    fill alt="Visual representation of national anthem of any country in their native language" />
                </div>
              </td>



              <td className="national-anthem-native-answer-first-entity all-indicator-answers">{nationalAnthemNative ?? 'Yet to Update'}</td>

            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators-health-factors all-indicators">
                  National Anthem Title (In English)
                </div>
                <div className="basic-information-images">
                  <Image src="/images/national-anthem-english-image.png"
                    fill alt="Visual representation of national anthem of any country in English language" />
                </div>
              </td>
              <td className="national-anthem-in-english-answer-first-entity all-indicator-answers">{nationalAnthemEnglish ?? 'Yet to Update'}
              </td>


            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators-health-factors all-indicators">
                  National Animal
                </div>
                <div className="basic-information-images">
                  <Image src="/images/national-animal-image.png"
                    fill alt="Visual representation of national animal of any specific country" />
                </div>
              </td>
              <td className="national-animal-answer-first-entity all-indicator-answers">{nationalAnimal ?? 'Yet to Update'}</td>

            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators-health-factors all-indicators">
                  National Bird
                </div>
                <div className="basic-information-images">
                  <Image src="/images/national-bird-image.png"
                    fill alt="Visual representation of national bird of any specific country" />
                </div>
              </td>
              <td className="national-bird-answer-first-entity all-indicator-answers">{nationalBird ?? 'Yet to Update'}</td>

            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators-health-factors all-indicators">
                  National Flower
                </div>
                <div className="basic-information-images">
                  <Image src="/images/national-flower-image.png"
                    fill alt="Visual representation of national flower of any specific country" />
                </div>
              </td>
              <td className="national-flower-answer-first-entity all-indicator-answers">{nationalFlower ?? 'Yet to Update'}</td>

            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators-health-factors all-indicators">
                  National Sport
                </div>
                <div className="basic-information-images">
                  <Image src="/images/national-sport-image.png"
                    fill alt="Visual representation of national sport of any specific country" />
                </div>
              </td>
              <td className="national-sport-answer-first-entity all-indicator-answers">{nationalSport ?? 'Yet to Update'}</td>

            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators-health-factors all-indicators">
                  National Colors
                </div>
                <div className="basic-information-images">
                  <Image src="/images/national-colors-image.png"
                    fill alt="Visual representation of national colors of any specific country" />
                </div>
              </td>
              <td className="national-colors-answer-first-entity all-indicator-answers">{nationalColors ?? 'Yet to Update'}</td>

            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default NationalSymbols