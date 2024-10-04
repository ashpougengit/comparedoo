import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { dollarizedCountries } from '@/lib/array-list/dollarizedCountries';
import {
  formatNumberWithCommas,
  formatUSDWithCommas,
} from '@/lib/format/format';
import Image from 'next/image';

function PrivateClasses({
  costInfo,
  currency,
  unitValueInUSD,
  countryURLCase,
}) {
  const country = costInfo.country;
  const languageClasses = costInfo.languageClasses;
  const parentingClasses = costInfo.parentingClasses;
  const artClasses = costInfo.artClasses;
  const fitnessClass = costInfo.fitnessClass;
  const musicLessons = costInfo.musicLessons;
  const danceLessons = costInfo.danceLessons;
  const readingMaterials = costInfo.readingMaterials;
  const educationalSoftware = costInfo.educationalSoftware;

  return (
    <>
      <AdsHeaderBanner />

      <div className="geographical-map">
        <h2 className="pages-h2">Private Classes and Lessons Cost</h2>
      </div>

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
                      src={`/images/${countryURLCase}-map-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Pictorial representation of map of ${countryURLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {country}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${countryURLCase}-flag-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Image illustrating the flag of ${countryURLCase}`}
                    />
                  </div>
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">Language Classes</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/language-classes-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Language Classes"
                  />
                </div>
              </td>

              <td className="language-classes-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(languageClasses)} ${languageClasses ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="language-classes-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    languageClasses * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Parenting Classes</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/parenting-classes-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Parenting Classes"
                  />
                </div>
              </td>

              <td className="parenting-classes-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(parentingClasses)} ${parentingClasses ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="parenting-classes-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    parentingClasses * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Art Classes</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/art-classes-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Art Classes"
                  />
                </div>
              </td>

              <td className="art-classes-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(artClasses)} ${artClasses ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="art-classes-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    artClasses * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Fitness Classes</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/fitness-class-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Fitness Classes"
                  />
                </div>
              </td>

              <td className="fitness-class-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(fitnessClass)} ${fitnessClass ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="fitness-class-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    fitnessClass * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Music Lessons</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/music-lessons-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Music Lessons"
                  />
                </div>
              </td>

              <td className="music-lessons-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(musicLessons)} ${musicLessons ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="music-lessons-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    musicLessons * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Dance Lessons</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/dance-lessons-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Dance Lessons"
                  />
                </div>
              </td>

              <td className="dance-lessons-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(danceLessons)} ${danceLessons ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="dance-lessons-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    danceLessons * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  Reading Materials for Classes
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/reading-materials-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Reading Materials for Classes"
                  />
                </div>
              </td>

              <td className="reading-materials-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(readingMaterials)} ${readingMaterials ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="reading-materials-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    readingMaterials * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Educational Software</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/educational-software-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Educational Software"
                  />
                </div>
              </td>

              <td className="educational-software-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(educationalSoftware)} ${educationalSoftware ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="educational-software-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    educationalSoftware * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PrivateClasses;
