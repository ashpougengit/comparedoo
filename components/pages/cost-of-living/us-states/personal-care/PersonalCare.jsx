import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { formatNumberWithCommas } from "@/lib/format/format"
import Image from "next/image"

function PersonalCare({ state1CostInfo, state2CostInfo, state1LowerCase, state2LowerCase }) {
    const state1 = state1CostInfo.state
    const state1CosmeticProcedures = state1CostInfo.cosmeticProcedures
    const state1SpaTreatment = state1CostInfo.spaTreatment
    const state1ManicurePedicureCost = state1CostInfo.manicurePedicureCost
    const state1OpticalGlasses = state1CostInfo.opticalGlasses
    const state1ContactLenses = state1CostInfo.contactLenses
    const state1Haircuts = state1CostInfo.haircuts
    const state1HairColoring = state1CostInfo.hairColoring
    const state1ShampooPrice = state1CostInfo.shampooPrice
    const state1ToothpastePrice = state1CostInfo.toothpastePrice
    const state1TotalCost = (state1CosmeticProcedures || 0) + (state1SpaTreatment || 0) + (state1ManicurePedicureCost || 0) + (state1OpticalGlasses || 0) + (state1ContactLenses || 0) + (state1Haircuts || 0) + (state1HairColoring || 0) + (state1ShampooPrice || 0) + (state1ToothpastePrice || 0)

    const state2 = state2CostInfo.state
    const state2CosmeticProcedures = state2CostInfo.cosmeticProcedures
    const state2SpaTreatment = state2CostInfo.spaTreatment
    const state2ManicurePedicureCost = state2CostInfo.manicurePedicureCost
    const state2OpticalGlasses = state2CostInfo.opticalGlasses
    const state2ContactLenses = state2CostInfo.contactLenses
    const state2Haircuts = state2CostInfo.haircuts
    const state2HairColoring = state2CostInfo.hairColoring
    const state2ShampooPrice = state2CostInfo.shampooPrice
    const state2ToothpastePrice = state2CostInfo.toothpastePrice
    const state2TotalCost = (state2CosmeticProcedures || 0) + (state2SpaTreatment || 0) + (state2ManicurePedicureCost || 0) + (state2OpticalGlasses || 0) + (state2ContactLenses || 0) + (state2Haircuts || 0) + (state2HairColoring || 0) + (state2ShampooPrice || 0) + (state2ToothpastePrice || 0)

    const costTimes = state1TotalCost > state2TotalCost ? (state1TotalCost / state2TotalCost).toFixed(2) : (state2TotalCost / state1TotalCost).toFixed(2)
    const moreOrLess = state1TotalCost > state2TotalCost ? 'more' : 'less'

    return (
        <>
            <AdsHeaderBanner />

            <div className="geographical-map">
                <h2 className="pages-h2">Personal Care Cost Comparison</h2>
            </div>

            <div className="basic-information-comparison-div1">
                <table className="indicators-first-entity-and-second-entity-div1">
                    <thead>
                        <tr className="first-tr">
                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="right-indicator">
                                        <Image src="/images/indicators-right-image.png"layout="fill"
objectFit="contain"alt="Image representing an indicator" />
                                    </div>

                                    <div className="indicator-text">Indicators</div>

                                    <div className="left-indicator">
                                        <Image src="/images/indicators-left-image.png"layout="fill"
objectFit="contain"alt="Image illustrating an indicator" />
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="first-entity-map-pages-comparison">
                                        <Image src={`/images/${state1LowerCase}-map-small.png`}layout="fill"
objectFit="contain"alt={`Pictorial representation of map of ${state1LowerCase}`} />
                                    </div>

                                    <div className="first-entity-name-pages-comparison">{state1}</div>

                                    <div className="first-entity-flag-pages-comparison">
                                        <Image src={`/images/${state1LowerCase}-flag-small.png`}layout="fill"
objectFit="contain"alt={`Image illustrating the flag of ${state1LowerCase}`} />
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="second-entity-map-pages-comparison">
                                        <Image src={`/images/${state2LowerCase}-map-small.png`}layout="fill"
objectFit="contain"alt={`Pictorial representation of map of ${state2LowerCase}`} />
                                    </div>

                                    <div className="second-entity-name-pages-comparison"> {state2} </div>

                                    <div className="second-entity-flag-pages-comparison">
                                        <Image src={`/images/${state2LowerCase}-flag-small.png`}layout="fill"
objectFit="contain"alt={`Image illustrating the flag of ${state2LowerCase}`} />
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Cosmetic Procedures</div>
                                <div className="basic-information-images">
                                    <Image src="/images/cosmetic-procedures-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing Cosmetic Procedures" />
                                </div>
                            </td>

                            <td className="cosmetic-procedures-first-entity all-indicator-answers">
                                {state1CosmeticProcedures ? `${formatNumberWithCommas(state1CosmeticProcedures)} USD` : 'Yet to Update'}
                            </td>
                            <td className="cosmetic-procedures-second-entity all-indicator-answers">
                                {state2CosmeticProcedures ? `${formatNumberWithCommas(state2CosmeticProcedures)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Spa Treatment</div>
                                <div className="basic-information-images">
                                    <Image src="/images/spa-treatment-cost-image.png"layout="fill"
objectFit="contain"alt="Image Describing Spa Treatment" />
                                </div>
                            </td>

                            <td className="spa-treatment-first-entity all-indicator-answers">
                                {state1SpaTreatment ? `${formatNumberWithCommas(state1SpaTreatment)} USD` : 'Yet to Update'}
                            </td>
                            <td className="spa-treatment-second-entity all-indicator-answers">
                                {state2SpaTreatment ? `${formatNumberWithCommas(state2SpaTreatment)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Manicure Pedicure Cost</div>
                                <div className="basic-information-images">
                                    <Image src="/images/manicure-pedicure-cost-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing Manicure Pedicure Cost" />
                                </div>
                            </td>

                            <td className="manicure-pedicure-cost-first-entity all-indicator-answers">
                                {state1ManicurePedicureCost ? `${formatNumberWithCommas(state1ManicurePedicureCost)} USD` : 'Yet to Update'}
                            </td>
                            <td className="manicure-pedicure-cost-second-entity all-indicator-answers">
                                {state2ManicurePedicureCost ? `${formatNumberWithCommas(state2ManicurePedicureCost)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Optical Glasses Cost</div>
                                <div className="basic-information-images">
                                    <Image src="/images/optical-glasses-image.png"layout="fill"
objectFit="contain"alt="Image Describing Optical Glasses Cost" />
                                </div>
                            </td>

                            <td className="optical-glasses-first-entity all-indicator-answers">
                                {state1OpticalGlasses ? `${formatNumberWithCommas(state1OpticalGlasses)} USD` : 'Yet to Update'}
                            </td>
                            <td className="optical-glasses-second-entity all-indicator-answers">
                                {state2OpticalGlasses ? `${formatNumberWithCommas(state2OpticalGlasses)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Contact Lenses Cost</div>
                                <div className="basic-information-images">
                                    <Image src="/images/contact-lenses-image.png"layout="fill"
objectFit="contain"alt="Image Describing Contact Lenses Cost" />
                                </div>
                            </td>

                            <td className="contact-lenses-first-entity all-indicator-answers">
                                {state1ContactLenses ? `${formatNumberWithCommas(state1ContactLenses)} USD` : 'Yet to Update'}
                            </td>
                            <td className="contact-lenses-second-entity all-indicator-answers">
                                {state2ContactLenses ? `${formatNumberWithCommas(state2ContactLenses)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Haircuts</div>
                                <div className="basic-information-images">
                                    <Image src="/images/haircuts-price-image.png"layout="fill"
objectFit="contain"alt="Image Describing Hair Cuts" />
                                </div>
                            </td>

                            <td className="hair-cuts-first-entity all-indicator-answers">
                                {state1Haircuts ? `${formatNumberWithCommas(state1Haircuts)} USD` : 'Yet to Update'}
                            </td>
                            <td className="hair-cuts-second-entity all-indicator-answers">
                                {state2Haircuts ? `${formatNumberWithCommas(state2Haircuts)} USD` : 'Yet to Update'}
                            </td>
                        </tr>


                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Hair Coloring</div>
                                <div className="basic-information-images">
                                    <Image src="/images/hair-coloring-price-image.png"layout="fill"
objectFit="contain"alt="Image Describing Hair Coloring" />
                                </div>
                            </td>

                            <td className="hair-coloring-first-entity all-indicator-answers">
                                {state1HairColoring ? `${formatNumberWithCommas(state1HairColoring)} USD` : 'Yet to Update'}
                            </td>
                            <td className="hair-coloring-second-entity all-indicator-answers">
                                {state2HairColoring ? `${formatNumberWithCommas(state2HairColoring)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Shampoo Price</div>
                                <div className="basic-information-images">
                                    <Image src="/images/shampoo-price-image.png"layout="fill"
objectFit="contain"alt="Image Describing Shampoo Price" />
                                </div>
                            </td>

                            <td className="shampoo-price-first-entity all-indicator-answers">
                                {state1ShampooPrice ? `${formatNumberWithCommas(state1ShampooPrice)} USD` : 'Yet to Update'}
                            </td>
                            <td className="shampoo-price-second-entity all-indicator-answers">
                                {state2ShampooPrice ? `${formatNumberWithCommas(state2ShampooPrice)} USD` : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Toothpaste Price</div>
                                <div className="basic-information-images">
                                    <Image src="/images/toothpaste-price-image.png"layout="fill"
objectFit="contain"alt="Image Describing Toothpaste Price" />
                                </div>
                            </td>

                            <td className="toothpaste-price-first-entity all-indicator-answers">
                                {state1ToothpastePrice ? `${formatNumberWithCommas(state1ToothpastePrice)} USD` : 'Yet to Update'}
                            </td>
                            <td className="toothpaste-price-second-entity all-indicator-answers">
                                {state2ToothpastePrice ? `${formatNumberWithCommas(state2ToothpastePrice)} USD` : 'Yet to Update'}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="paragraph-for-pages-below-table">
                <div className="para-for-pages-single-div">
                    <h3>
                        Does Personal Care cost more in
                        <span className="first-entity-name-pages-paragraph"> {state1} </span> than in
                        <span className="second-entity-name-pages-paragraph"> {state2}</span>?
                    </h3>
                    <p>
                        If you lived in
                        <span className="first-entity-name-pages-paragraph"> {state1}</span>, instead of
                        <span className="second-entity-name-pages-paragraph"> {state2}</span>, you would have
                        to pay
                        <strong>
                            <span className="personal-care-cost-calculation"> {costTimes} </span> times </strong> <span
                                className="personal-care-cost-more-or-less-calculation"> {moreOrLess} </span>
                        for Personal Care Items and Treatment.
                    </p>
                </div>
            </div>
        </>
    )
}

export default PersonalCare