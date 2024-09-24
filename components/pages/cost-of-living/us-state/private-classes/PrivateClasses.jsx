import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { formatNumberWithCommas } from "@/lib/format/format"
import Image from "next/image"

function PrivateClasses({ costInfo, stateLowerCase }) {
    const state = costInfo.state
    const languageClasses = costInfo.languageClasses
    const parentingClasses = costInfo.parentingClasses
    const artClasses = costInfo.artClasses
    const fitnessClass = costInfo.fitnessClass
    const musicLessons = costInfo.musicLessons
    const danceLessons = costInfo.danceLessons
    const readingMaterials = costInfo.readingMaterials
    const educationalSoftware = costInfo.educationalSoftware

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
                                        <Image src={`/images/${stateLowerCase}-map-small.png`} fill alt={`Pictorial representation of map of ${stateLowerCase}`} />
                                    </div>

                                    <div className="first-entity-name-pages-comparison">{state}</div>

                                    <div className="first-entity-flag-pages-comparison">
                                        <Image src={`/images/${stateLowerCase}-flag-small.png`} fill alt={`Image illustrating the flag of ${stateLowerCase}`} />
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
                                        fill alt="Image Describing Language Classes" />
                                </div>
                            </td>

                            <td className="language-classes-first-entity all-indicator-answers">
                                {languageClasses ? `${formatNumberWithCommas(languageClasses)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Parenting Classes</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/parenting-classes-image.png"
                                        fill alt="Image Describing Parenting Classes" />
                                </div>
                            </td>

                            <td className="parenting-classes-first-entity all-indicator-answers">
                                {parentingClasses ? `${formatNumberWithCommas(parentingClasses)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Art Classes</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/art-classes-image.png"
                                        fill alt="Image Describing Art Classes" />
                                </div>
                            </td>

                            <td className="art-classes-first-entity all-indicator-answers">
                                {artClasses ? `${formatNumberWithCommas(artClasses)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Fitness Classes</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/fitness-class-image.png"
                                        fill alt="Image Describing Fitness Classes" />
                                </div>
                            </td>

                            <td className="fitness-class-first-entity all-indicator-answers">
                                {fitnessClass ? `${formatNumberWithCommas(fitnessClass)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Music Lessons</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/music-lessons-image.png"
                                        fill alt="Image Describing Music Lessons" />
                                </div>
                            </td>

                            <td className="music-lessons-first-entity all-indicator-answers">
                                {musicLessons ? `${formatNumberWithCommas(musicLessons)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Dance Lessons</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/dance-lessons-image.png"
                                        fill alt="Image Describing Dance Lessons" />
                                </div>
                            </td>

                            <td className="dance-lessons-first-entity all-indicator-answers">
                                {danceLessons ? `${formatNumberWithCommas(danceLessons)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Reading Materials for Classes</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/reading-materials-image.png"
                                        fill alt="Image Describing Reading Materials for Classes" />
                                </div>
                            </td>

                            <td className="reading-materials-first-entity all-indicator-answers">
                                {readingMaterials ? `${formatNumberWithCommas(readingMaterials)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Educational Software</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/educational-software-image.png"
                                        fill alt="Image Describing Educational Software" />
                                </div>
                            </td>

                            <td className="educational-software-first-entity all-indicator-answers">
                                {educationalSoftware ? `${formatNumberWithCommas(educationalSoftware)} USD` : 'Yet to Update'}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default PrivateClasses