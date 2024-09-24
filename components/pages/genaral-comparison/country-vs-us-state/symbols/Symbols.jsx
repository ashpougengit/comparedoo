import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { USStates } from "@/lib/array-list/allUSStates"
import Image from "next/image"

function Symbols({ slug1, slug2, slug1GeneralInfo, slug2GeneralInfo, slug1URLCase, slug2URLCase }) {
    const isSlug1State = USStates.includes(slug1)
    const slug1AnthemNative = slug1GeneralInfo[isSlug1State ? 'stateAnthemNative' : 'nationalAnthemNative']
    const slug1AnthemEnglish = slug1GeneralInfo[isSlug1State ? 'stateAnthemEnglish' : 'nationalAnthemEnglish']
    const slug1NationalAnimal = slug1GeneralInfo[isSlug1State ? 'stateAnimal' : 'nationalAnimal']
    const slug1NationalBird = slug1GeneralInfo[isSlug1State ? 'stateBird' : 'nationalBird']
    const slug1NationalFlower = slug1GeneralInfo[isSlug1State ? 'stateFlower' : 'nationalFlower']
    const slug1NationalSport = slug1GeneralInfo[isSlug1State ? 'stateSport' : 'nationalSport']
    const slug1NationalColors = slug1GeneralInfo[isSlug1State ? 'stateColors' : 'nationalColors']

    const slug2AnthemNative = slug2GeneralInfo[isSlug1State ? 'nationalAnthemNative' : 'stateAnthemNative']
    const slug2AnthemEnglish = slug2GeneralInfo[isSlug1State ? 'nationalAnthemEnglish' : 'stateAnthemEnglish']
    const slug2NationalAnimal = slug2GeneralInfo[isSlug1State ? 'nationalAnimal' : 'stateAnimal']
    const slug2NationalBird = slug2GeneralInfo[isSlug1State ? 'nationalBird' : 'stateBird']
    const slug2NationalFlower = slug2GeneralInfo[isSlug1State ? 'nationalFlower' : 'stateFlower']
    const slug2NationalSport = slug2GeneralInfo[isSlug1State ? 'nationalSport' : 'stateSport']
    const slug2NationalColors = slug2GeneralInfo[isSlug1State ? 'nationalColors' : 'stateColors']

    return (
        <>
            <AdsHeaderBanner />

            <div className="national-symbols-comparison">
                <h2 className="pages-h2">{isSlug1State ? 'State/National' : 'National/State'} Symbols Comparison</h2>
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
                                            fill alt="Image representing an indicator" />
                                    </div>

                                    <div className="indicator-text">Indicators</div>

                                    <div className="left-indicator">
                                        <Image
                                            src="/images/indicators-left-image.png"
                                            fill alt="Image illustrating an indicator" />
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="first-entity-map-pages-comparison">
                                        <Image src={`/images/${slug1URLCase}-map-small.png`} fill alt={`Pictorial representation of map of ${slug1URLCase}`} />
                                    </div>

                                    <div className="first-entity-name-pages-comparison">{slug1}</div>

                                    <div className="first-entity-flag-pages-comparison">
                                        <Image src={`/images/${slug1URLCase}-flag-small.png`} fill alt={`Image illustrating the flag of ${slug1URLCase}`} />
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="second-entity-map-pages-comparison">
                                        <Image src={`/images/${slug2URLCase}-map-small.png`} fill alt={`Pictorial representation of map of ${slug2URLCase}`} />
                                    </div>

                                    <div className="second-entity-name-pages-comparison"> {slug2} </div>

                                    <div className="second-entity-flag-pages-comparison">
                                        <Image src={`/images/${slug2URLCase}-flag-small.png`} fill alt={`Image illustrating the flag of ${slug2URLCase}`} />
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators-health-factors all-indicators">
                                    {isSlug1State ? 'State/National' : 'National/State'} Anthem Title (Native)
                                </div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/national-anthem-native-image.png"
                                        fill alt="Visual representation of national anthem of any country in their native language" />
                                </div>
                            </td>

                            <td
                                className="national-anthem-native-answer-first-entity all-indicator-answers">
                                {slug1AnthemNative ?? 'Yet to Update'}
                            </td>
                            <td
                                className="national-anthem-native-answer-second-entity all-indicator-answers">
                                {slug2AnthemNative ?? 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators-health-factors all-indicators">
                                    {isSlug1State ? 'State/National' : 'National/State'} Anthem Title (In English)
                                </div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/national-anthem-english-image.png"
                                        fill alt="Visual representation of national anthem of any country in English language" />
                                </div>
                            </td>
                            <td
                                className="national-anthem-in-english-answer-first-entity all-indicator-answers">
                                {slug1AnthemEnglish ?? 'Yet to Update'}
                            </td>
                            <td
                                className="national-anthem-in-english-answer-second-entity all-indicator-answers">
                                {slug2AnthemEnglish ?? 'Yet to Update'}
                            </td>
                        </tr>
                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators-health-factors all-indicators">
                                    {isSlug1State ? 'State/National' : 'National/State'} Animal
                                </div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/national-animal-image.png"
                                        fill alt="Visual representation of national animal of any specific country" />
                                </div>
                            </td>
                            <td
                                className="national-animal-answer-first-entity all-indicator-answers">
                                {slug1NationalAnimal ?? 'Yet to Update'}
                            </td>
                            <td
                                className="national-animal-answer-second-entity all-indicator-answers">
                                {slug2NationalAnimal ?? 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators-health-factors all-indicators">
                                    {isSlug1State ? 'State/National' : 'National/State'} Bird
                                </div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/national-bird-image.png"
                                        fill alt="Visual representation of national bird of any specific country" />
                                </div>
                            </td>
                            <td className="national-bird-answer-first-entity all-indicator-answers">
                                {slug1NationalBird ?? 'Yet to Update'}
                            </td>
                            <td
                                className="national-bird-answer-second-entity all-indicator-answers">
                                {slug2NationalBird ?? 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators-health-factors all-indicators">
                                    {isSlug1State ? 'State/National' : 'National/State'} Flower
                                </div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/national-flower-image.png"
                                        fill alt="Visual representation of national flower of any specific country" />
                                </div>
                            </td>
                            <td
                                className="national-flower-answer-first-entity all-indicator-answers">
                                {slug1NationalFlower ?? 'Yet to Update'}
                            </td>
                            <td
                                className="national-flower-answer-second-entity all-indicator-answers">
                                {slug2NationalFlower ?? 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators-health-factors all-indicators">
                                    {isSlug1State ? 'State/National' : 'National/State'} Sport
                                </div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/national-sport-image.png"
                                        fill alt="Visual representation of national sport of any specific country" />
                                </div>
                            </td>
                            <td
                                className="national-sport-answer-first-entity all-indicator-answers">
                                {slug1NationalSport ?? 'Yet to Update'}
                            </td>
                            <td
                                className="national-sport-answer-second-entity all-indicator-answers">
                                {slug2NationalSport ?? 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators-health-factors all-indicators">
                                    {isSlug1State ? 'State/National' : 'National/State'} Colors
                                </div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/national-colors-image.png"
                                        fill alt="Visual representation of national colors of any specific country" />
                                </div>
                            </td>
                            <td
                                className="national-colors-answer-first-entity all-indicator-answers">
                                {slug1NationalColors ?? 'Yet to Update'}
                            </td>
                            <td
                                className="national-colors-answer-second-entity all-indicator-answers">
                                {slug2NationalColors ?? 'Yet to Update'}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Symbols