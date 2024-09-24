import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { formatCost, isDollarized } from "@/lib/format/formatCost"
import Image from "next/image"

function PersonalCare({ slug1, slug2, value1, value2, slug1CostInfo, slug2CostInfo, slug1Currency, slug2Currency, slug1ExchangeRate, slug2ExchangeRate, slug1LowerCase, slug2LowerCase }) {
    const slug1CosmeticProcedures = slug1CostInfo.cosmeticProcedures
    const slug1SpaTreatment = slug1CostInfo.spaTreatment
    const slug1ManicurePedicureCost = slug1CostInfo.manicurePedicureCost
    const slug1OpticalGlasses = slug1CostInfo.opticalGlasses
    const slug1ContactLenses = slug1CostInfo.contactLenses
    const slug1Haircuts = slug1CostInfo.haircuts
    const slug1HairColoring = slug1CostInfo.hairColoring
    const slug1ShampooPrice = slug1CostInfo.shampooPrice
    const slug1ToothpastePrice = slug1CostInfo.toothpastePrice
    const slug1TotalCost = ((slug1CosmeticProcedures || 0) + (slug1SpaTreatment || 0) + (slug1ManicurePedicureCost || 0) + (slug1OpticalGlasses || 0) + (slug1ContactLenses || 0) + (slug1Haircuts || 0) + (slug1HairColoring || 0) + (slug1ShampooPrice || 0) + (slug1ToothpastePrice || 0)) * slug1ExchangeRate

    const slug2CosmeticProcedures = slug2CostInfo.cosmeticProcedures
    const slug2SpaTreatment = slug2CostInfo.spaTreatment
    const slug2ManicurePedicureCost = slug2CostInfo.manicurePedicureCost
    const slug2OpticalGlasses = slug2CostInfo.opticalGlasses
    const slug2ContactLenses = slug2CostInfo.contactLenses
    const slug2Haircuts = slug2CostInfo.haircuts
    const slug2HairColoring = slug2CostInfo.hairColoring
    const slug2ShampooPrice = slug2CostInfo.shampooPrice
    const slug2ToothpastePrice = slug2CostInfo.toothpastePrice
    const slug2TotalCost = ((slug2CosmeticProcedures || 0) + (slug2SpaTreatment || 0) + (slug2ManicurePedicureCost || 0) + (slug2OpticalGlasses || 0) + (slug2ContactLenses || 0) + (slug2Haircuts || 0) + (slug2HairColoring || 0) + (slug2ShampooPrice || 0) + (slug2ToothpastePrice || 0)) * slug2ExchangeRate

    const costTimes = slug1TotalCost > slug2TotalCost ? (slug1TotalCost / slug2TotalCost).toFixed(2) : (slug2TotalCost / slug1TotalCost).toFixed(2)
    const moreOrLess = slug1TotalCost > slug2TotalCost ? 'more' : 'less'

    const isDollarizedSlug1 = isDollarized(value1, slug1);
    const isDollarizedSlug2 = isDollarized(value2, slug2);
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
                                        <Image src={`/images/${slug1LowerCase}-map-small.png`} fill alt={`Pictorial representation of map of ${slug1LowerCase}`} />
                                    </div>

                                    <div className="first-entity-name-pages-comparison">{slug1}</div>

                                    <div className="first-entity-flag-pages-comparison">
                                        <Image src={`/images/${slug1LowerCase}-flag-small.png`} fill alt={`Image illustrating the flag of ${slug1LowerCase}`} />
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="second-entity-map-pages-comparison">
                                        <Image src={`/images/${slug2LowerCase}-map-small.png`} fill alt={`Pictorial representation of map of ${slug2LowerCase}`} />
                                    </div>

                                    <div className="second-entity-name-pages-comparison"> {slug2} </div>

                                    <div className="second-entity-flag-pages-comparison">
                                        <Image src={`/images/${slug2LowerCase}-flag-small.png`} fill alt={`Image illustrating the flag of ${slug2LowerCase}`} />
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
                                    <Image
                                        src="/images/cosmetic-procedures-image.png"
                                        fill alt="Image Describing Cosmetic Procedures" />
                                </div>
                            </td>

                            <td className="cosmetic-procedures-first-entity all-indicator-answers">
                                {slug1CosmeticProcedures ? formatCost(slug1CosmeticProcedures, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td className="cosmetic-procedures-second-entity all-indicator-answers">
                                {slug2CosmeticProcedures ? formatCost(slug2CosmeticProcedures, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Spa Treatment</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/spa-treatment-cost-image.png"
                                        fill alt="Image Describing Spa Treatment" />
                                </div>
                            </td>

                            <td className="spa-treatment-first-entity all-indicator-answers">
                                {slug1SpaTreatment ? formatCost(slug1SpaTreatment, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td className="spa-treatment-second-entity all-indicator-answers">
                                {slug2SpaTreatment ? formatCost(slug2SpaTreatment, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Manicure Pedicure Cost</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/manicure-pedicure-cost-image.png"
                                        fill alt="Image Describing Manicure Pedicure Cost" />
                                </div>
                            </td>

                            <td
                                className="manicure-pedicure-cost-first-entity all-indicator-answers">
                                {slug1ManicurePedicureCost ? formatCost(slug1ManicurePedicureCost, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td
                                className="manicure-pedicure-cost-second-entity all-indicator-answers">
                                {slug2ManicurePedicureCost ? formatCost(slug2ManicurePedicureCost, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Optical Glasses Cost</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/optical-glasses-image.png"
                                        fill alt="Image Describing Optical Glasses Cost" />
                                </div>
                            </td>

                            <td className="optical-glasses-first-entity all-indicator-answers">
                                {slug1OpticalGlasses ? formatCost(slug1OpticalGlasses, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td className="optical-glasses-second-entity all-indicator-answers">
                                {slug2OpticalGlasses ? formatCost(slug2OpticalGlasses, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Contact Lenses Cost</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/contact-lenses-image.png"
                                        fill alt="Image Describing Contact Lenses Cost" />
                                </div>
                            </td>

                            <td className="contact-lenses-first-entity all-indicator-answers">
                                {slug1ContactLenses ? formatCost(slug1ContactLenses, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td className="contact-lenses-second-entity all-indicator-answers">
                                {slug2ContactLenses ? formatCost(slug2ContactLenses, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Haircuts</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/haircuts-price-image.png"
                                        fill alt="Image Describing Hair Cuts" />
                                </div>
                            </td>

                            <td className="hair-cuts-first-entity all-indicator-answers">
                                {slug1Haircuts ? formatCost(slug1Haircuts, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td className="hair-cuts-second-entity all-indicator-answers">
                                {slug2Haircuts ? formatCost(slug2Haircuts, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Hair Coloring</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/hair-coloring-price-image.png"
                                        fill alt="Image Describing Hair Coloring" />
                                </div>
                            </td>

                            <td className="hair-coloring-first-entity all-indicator-answers">
                                {slug1HairColoring ? formatCost(slug1HairColoring, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td className="hair-coloring-second-entity all-indicator-answers">
                                {slug2HairColoring ? formatCost(slug2HairColoring, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Shampoo Price</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/shampoo-price-image.png"
                                        fill alt="Image Describing Shampoo Price" />
                                </div>
                            </td>

                            <td className="shampoo-price-first-entity all-indicator-answers">
                                {slug1ShampooPrice ? formatCost(slug1ShampooPrice, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td className="shampoo-price-second-entity all-indicator-answers">
                                {slug2ShampooPrice ? formatCost(slug2ShampooPrice, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Toothpaste Price</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/toothpaste-price-image.png"
                                        fill alt="Image Describing Toothpaste Price" />
                                </div>
                            </td>

                            <td className="toothpaste-price-first-entity all-indicator-answers">
                                {slug1ToothpastePrice ? formatCost(slug1ToothpastePrice, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td className="toothpaste-price-second-entity all-indicator-answers">
                                {slug2ToothpastePrice ? formatCost(slug2ToothpastePrice, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="paragraph-for-pages-below-table">
                <div className="para-for-pages-single-div">
                    <h3>
                        Does Personal Care cost more in
                        <span className="first-entity-name-pages-paragraph"> {slug1} </span>
                        than in
                        <span className="second-entity-name-pages-paragraph"> {slug2}</span>
                        ?
                    </h3>
                    <p>
                        If you lived in
                        <span className="first-entity-name-pages-paragraph"> {slug1}</span>
                        , instead of
                        <span className="second-entity-name-pages-paragraph"> {slug2}</span>
                        , you would have to pay
                        <strong>
                            <span className="personal-care-cost-calculation"> {costTimes}{' '} </span>
                            times{' '}
                        </strong>
                        <span className="personal-care-cost-more-or-less-calculation">
                            {moreOrLess}{' '}
                        </span>
                        for Personal Care Items and Treatment.
                    </p>
                </div>
            </div>
        </>
    )
}

export default PersonalCare