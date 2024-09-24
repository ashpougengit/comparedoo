import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner'
import Image from 'next/image'
import React from 'react'

function NationalSymbols({ country1GeneralInfo, country2GeneralInfo, country1URLCase, country2URLCase }) {
    const country1 = country1GeneralInfo.country
    const country1NationalAnthemNative = country1GeneralInfo.nationalAnthemNative
    const country1NationalAnthemEnglish = country1GeneralInfo.nationalAnthemEnglish
    const country1NationalAnimal = country1GeneralInfo.nationalAnimal
    const country1NationalBird = country1GeneralInfo.nationalBird
    const country1NationalFlower = country1GeneralInfo.nationalFlower
    const country1NationalSport = country1GeneralInfo.nationalSport
    const country1NationalColors = country1GeneralInfo.nationalColors

    const country2 = country2GeneralInfo.country
    const country2NationalAnthemNative = country2GeneralInfo.nationalAnthemNative
    const country2NationalAnthemEnglish = country2GeneralInfo.nationalAnthemEnglish
    const country2NationalAnimal = country2GeneralInfo.nationalAnimal
    const country2NationalBird = country2GeneralInfo.nationalBird
    const country2NationalFlower = country2GeneralInfo.nationalFlower
    const country2NationalSport = country2GeneralInfo.nationalSport
    const country2NationalColors = country2GeneralInfo.nationalColors

    return (
        <>
            <div className="national-symbols-comparison">
                <h2 className="pages-h2">National Symbols Comparison</h2>
            </div>

            <div className="national-symbols-factors-comparison">

                <table className="indicators-first-entity-and-second-entity-div1">

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
                                        <Image src={`/images/${country1URLCase}-map-small.png`} fill alt={`Pictorial representation of map of ${country1URLCase}`} />
                                    </div>

                                    <div className="first-entity-name-pages-comparison">{country1}</div>

                                    <div className="first-entity-flag-pages-comparison">
                                        <Image src={`/images/${country1URLCase}-flag-small.png`} fill alt={`Image illustrating the flag of ${country1URLCase}`} />
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="second-entity-map-pages-comparison">
                                        <Image src={`/images/${country2URLCase}-map-small.png`} fill alt={`Pictorial representation of map of ${country2URLCase}`} />
                                    </div>

                                    <div className="second-entity-name-pages-comparison"> {country2} </div>

                                    <div className="second-entity-flag-pages-comparison">
                                        <Image src={`/images/${country2URLCase}-flag-small.png`} fill alt={`Image illustrating the flag of ${country2URLCase}`} />
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



                            <td className="national-anthem-native-answer-first-entity all-indicator-answers">{country1NationalAnthemNative ?? 'Yet to Update'}</td>
                            <td className="national-anthem-native-answer-second-entity all-indicator-answers">{country2NationalAnthemNative ?? 'Yet to Update'}</td>

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
                            <td className="national-anthem-in-english-answer-first-entity all-indicator-answers">{country1NationalAnthemEnglish ?? 'Yet to Update'}
                            </td>
                            <td className="national-anthem-in-english-answer-second-entity all-indicator-answers">{country2NationalAnthemEnglish ?? 'Yet to Update'}
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
                            <td className="national-animal-answer-first-entity all-indicator-answers">{country1NationalAnimal ?? 'Yet to Update'}</td>
                            <td className="national-animal-answer-second-entity all-indicator-answers">{country2NationalAnimal ?? 'Yet to Update'}</td>

                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators-health-factors all-indicators">
                                    National Bird
                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/national-bird-image.png" fill alt="Visual representation of national bird of any specific country" />
                                </div>
                            </td>
                            <td className="national-bird-answer-first-entity all-indicator-answers">{country1NationalBird ?? 'Yet to Update'}</td>
                            <td className="national-bird-answer-second-entity all-indicator-answers">{country2NationalBird ?? 'Yet to Update'}</td>

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
                            <td className="national-flower-answer-first-entity all-indicator-answers">{country1NationalFlower ?? 'Yet to Update'}</td>
                            <td className="national-flower-answer-second-entity all-indicator-answers">{country2NationalFlower ?? 'Yet to Update'}</td>

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
                            <td className="national-sport-answer-first-entity all-indicator-answers">{country1NationalSport ?? 'Yet to Update'}</td>
                            <td className="national-sport-answer-second-entity all-indicator-answers">{country2NationalSport ?? 'Yet to Update'}</td>

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
                            <td className="national-colors-answer-first-entity all-indicator-answers">{country1NationalColors ?? 'Yet to Update'}</td>
                            <td className="national-colors-answer-second-entity all-indicator-answers">{country2NationalColors ?? 'Yet to Update'}</td>

                        </tr>
                    </tbody>
                </table>
            </div>

            <AdsHeaderBanner />
        </>
    )
}

export default NationalSymbols