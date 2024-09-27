import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { formatCost, isDollarized } from "@/lib/format/formatCost"
import Image from "next/image"

function Education({ slug1, slug2, value1, value2, slug1CostInfo, slug2CostInfo, slug1Currency, slug2Currency, slug1ExchangeRate, slug2ExchangeRate, slug1LowerCase, slug2LowerCase }) {
    const slug1Preschool = slug1CostInfo.preschool
    const slug1PrimarySchoolFees = slug1CostInfo.primarySchoolFees
    const slug1SecondarySchoolFees = slug1CostInfo.secondarySchoolFees
    const slug1PrivateSchoolFees = slug1CostInfo.privateSchoolFees
    const slug1UniversityTuition = slug1CostInfo.universityTuition
    const slug1UniversityTuitionPrivate = slug1CostInfo.universityTuitionPrivate
    const slug1AfterSchoolActivities = slug1CostInfo.afterSchoolActivities
    const slug1SpecialEducationServices = slug1CostInfo.specialEducationServices
    const slug1Tutoring = slug1CostInfo.tutoring
    const slug1Textbooks = slug1CostInfo.textbooks
    const slug1SchoolSupplies = slug1CostInfo.schoolSupplies
    const slug1TotalCost = ((slug1Preschool || 0) + (slug1PrimarySchoolFees || 0) + (slug1SecondarySchoolFees || 0) + (slug1PrivateSchoolFees || 0) + (slug1UniversityTuition || 0) + (slug1UniversityTuitionPrivate || 0) + (slug1AfterSchoolActivities || 0) + (slug1SpecialEducationServices || 0) + (slug1Tutoring || 0) + (slug1Textbooks || 0) + (slug1SchoolSupplies || 0)) * slug1ExchangeRate

    const slug2Preschool = slug2CostInfo.preschool
    const slug2PrimarySchoolFees = slug2CostInfo.primarySchoolFees
    const slug2SecondarySchoolFees = slug2CostInfo.secondarySchoolFees
    const slug2PrivateSchoolFees = slug2CostInfo.privateSchoolFees
    const slug2UniversityTuition = slug2CostInfo.universityTuition
    const slug2UniversityTuitionPrivate = slug2CostInfo.universityTuitionPrivate
    const slug2AfterSchoolActivities = slug2CostInfo.afterSchoolActivities
    const slug2SpecialEducationServices = slug2CostInfo.specialEducationServices
    const slug2Tutoring = slug2CostInfo.tutoring
    const slug2Textbooks = slug2CostInfo.textbooks
    const slug2SchoolSupplies = slug2CostInfo.schoolSupplies
    const slug2TotalCost = ((slug2Preschool || 0) + (slug2PrimarySchoolFees || 0) + (slug2SecondarySchoolFees || 0) + (slug2PrivateSchoolFees || 0) + (slug2UniversityTuition || 0) + (slug2UniversityTuitionPrivate || 0) + (slug2AfterSchoolActivities || 0) + (slug2SpecialEducationServices || 0) + (slug2Tutoring || 0) + (slug2Textbooks || 0) + (slug2SchoolSupplies || 0)) * slug2ExchangeRate

    const costTimes = slug1TotalCost > slug2TotalCost ? (slug1TotalCost / slug2TotalCost).toFixed(2) : (slug2TotalCost / slug1TotalCost).toFixed(2)
    const moreOrLess = slug1TotalCost > slug2TotalCost ? 'more' : 'less'

    const isDollarizedSlug1 = isDollarized(value1, slug1);
    const isDollarizedSlug2 = isDollarized(value2, slug2);

    return (
        <>
            <AdsHeaderBanner />

            <div className="geographical-map">
                <h2 className="pages-h2">School and Education Cost Comparison</h2>
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
                                           layout="fill"
objectFit="contain"alt="Image representing an indicator" />
                                    </div>

                                    <div className="indicator-text">Indicators</div>

                                    <div className="left-indicator">
                                        <Image
                                            src="/images/indicators-left-image.png"
                                           layout="fill"
objectFit="contain"alt="Image illustrating an indicator" />
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="first-entity-map-pages-comparison">
                                        <Image src={`/images/${slug1LowerCase}-map-small.png`}layout="fill"
objectFit="contain"alt={`Pictorial representation of map of ${slug1LowerCase}`} />
                                    </div>

                                    <div className="first-entity-name-pages-comparison">{slug1}</div>

                                    <div className="first-entity-flag-pages-comparison">
                                        <Image src={`/images/${slug1LowerCase}-flag-small.png`}layout="fill"
objectFit="contain"alt={`Image illustrating the flag of ${slug1LowerCase}`} />
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="second-entity-map-pages-comparison">
                                        <Image src={`/images/${slug2LowerCase}-map-small.png`}layout="fill"
objectFit="contain"alt={`Pictorial representation of map of ${slug2LowerCase}`} />
                                    </div>

                                    <div className="second-entity-name-pages-comparison"> {slug2} </div>

                                    <div className="second-entity-flag-pages-comparison">
                                        <Image src={`/images/${slug2LowerCase}-flag-small.png`}layout="fill"
objectFit="contain"alt={`Image illustrating the flag of ${slug2LowerCase}`} />
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">PreSchool Fees</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/pre-school-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing PreSchool Fees" />
                                </div>
                            </td>

                            <td className="preschool-fees-first-entity all-indicator-answers">
                                {slug1Preschool ? formatCost(slug1Preschool, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td className="preschool-fees-second-entity all-indicator-answers">
                                {slug2Preschool ? formatCost(slug2Preschool, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Primary School Fees</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/primary-school-fees-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing Primary School Fees" />
                                </div>
                            </td>

                            <td className="primary-school-fees-first-entity all-indicator-answers">
                                {slug1PrimarySchoolFees ? formatCost(slug1PrimarySchoolFees, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td className="primary-school-fees-second-entity all-indicator-answers">
                                {slug2PrimarySchoolFees ? formatCost(slug2PrimarySchoolFees, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Secondary School Fees</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/secondary-school-fees-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing Secondary School Fees" />
                                </div>
                            </td>

                            <td
                                className="secondary-school-fees-first-entity all-indicator-answers">
                                {slug1SecondarySchoolFees ? formatCost(slug1SecondarySchoolFees, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td
                                className="secondary-school-fees-second-entity all-indicator-answers">
                                {slug2SecondarySchoolFees ? formatCost(slug2SecondarySchoolFees, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Private School Fees</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/private-school-fees-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing Private School Fees" />
                                </div>
                            </td>

                            <td className="private-school-fees-first-entity all-indicator-answers">
                                {slug1PrivateSchoolFees ? formatCost(slug1PrivateSchoolFees, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td className="private-school-fees-second-entity all-indicator-answers">
                                {slug2PrivateSchoolFees ? formatCost(slug2PrivateSchoolFees, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">University Tuition Fees</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/university-tuition-fees-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing University Tuition Fees" />
                                </div>
                            </td>

                            <td
                                className="university-tuition-fees-first-entity all-indicator-answers">
                                {slug1UniversityTuition ? formatCost(slug1UniversityTuition, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td
                                className="university-tuition-fees-second-entity all-indicator-answers">
                                {slug2UniversityTuition ? formatCost(slug2UniversityTuition, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">University Private Tuition Fees</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/university-private-tuition-fees-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing University Private Tuition Fees" />
                                </div>
                            </td>

                            <td
                                className="university-private-tuition-fees-first-entity all-indicator-answers">
                                {slug1UniversityTuitionPrivate ? formatCost(slug1UniversityTuitionPrivate, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td
                                className="university-private-tuition-fees-second-entity all-indicator-answers">
                                {slug2UniversityTuitionPrivate ? formatCost(slug2UniversityTuitionPrivate, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">After School Activities</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/after-school-activities-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing After School Activities" />
                                </div>
                            </td>

                            <td
                                className="after-school-activities-first-entity all-indicator-answers">
                                {slug1AfterSchoolActivities ? formatCost(slug1AfterSchoolActivities, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td
                                className="after-school-activities-second-entity all-indicator-answers">
                                {slug2AfterSchoolActivities ? formatCost(slug2AfterSchoolActivities, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Special Education Services</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/special-education-services-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing Special Education Services" />
                                </div>
                            </td>

                            <td
                                className="special-education-services-first-entity all-indicator-answers">
                                {slug1SpecialEducationServices ? formatCost(slug1SpecialEducationServices, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td
                                className="special-education-services-second-entity all-indicator-answers">
                                {slug2SpecialEducationServices ? formatCost(slug2SpecialEducationServices, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Tutoring</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/tutoring-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing Tutoring" />
                                </div>
                            </td>

                            <td className="tutoring-first-entity all-indicator-answers">
                                {slug1Tutoring ? formatCost(slug1Tutoring, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td className="tutoring-second-entity all-indicator-answers">
                                {slug2Tutoring ? formatCost(slug2Tutoring, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Textbooks Cost</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/textbooks-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing Textbooks Cost" />
                                </div>
                            </td>

                            <td className="textbooks-first-entity all-indicator-answers">
                                {slug1Textbooks ? formatCost(slug1Textbooks, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td className="textbooks-second-entity all-indicator-answers">
                                {slug2Textbooks ? formatCost(slug2Textbooks, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">School Supplies</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/school-supplies-image.png"
                                       layout="fill"
objectFit="contain"alt="Image Describing School Supplies" />
                                </div>
                            </td>

                            <td className="school-supplies-first-entity all-indicator-answers">
                                {slug1SchoolSupplies ? formatCost(slug1SchoolSupplies, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td className="school-supplies-second-entity all-indicator-answers">
                                {slug2SchoolSupplies ? formatCost(slug2SchoolSupplies, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="paragraph-for-pages-below-table">
                <div className="para-for-pages-single-div">
                    <h3>
                        Does Schooling cost more in
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
                            <span className="schooling-cost-calculation"> {costTimes} </span>
                            times{' '}
                        </strong>
                        <span className="schooling-cost-more-or-less-calculation">
                            {moreOrLess}{' '}
                        </span>
                        for school and education.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Education