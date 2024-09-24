import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { formatCost, isDollarized } from "@/lib/format/formatCost"
import Image from "next/image"

function DiningOut({ slug1, slug2, value1, value2, slug1CostInfo, slug2CostInfo, slug1Currency, slug2Currency, slug1ExchangeRate, slug2ExchangeRate, slug1LowerCase, slug2LowerCase }) {
    const slug1MealAtInexpensiveRestaurant = slug1CostInfo.mealAtInexpensiveRestaurant
    const slug1ThreeCourseMealForTwo = slug1CostInfo.threeCourseMealForTwo
    const slug1FastFoodComboMeal = slug1CostInfo.fastFoodComboMeal
    const slug1Coffee = slug1CostInfo.coffee
    const slug1SoftDrink = slug1CostInfo.softDrink
    const slug1Pizza = slug1CostInfo.pizza
    const slug1TakeoutDeliveryMeal = slug1CostInfo.takeoutDeliveryMeal
    const slug1CigarettesPackOf20 = slug1CostInfo.cigarettesPackOf20
    const slug1TotalCost = ((slug1MealAtInexpensiveRestaurant || 0) + (slug1ThreeCourseMealForTwo || 0) + (slug1FastFoodComboMeal || 0) + (slug1Coffee || 0) + (slug1SoftDrink || 0) + (slug1Pizza || 0) + (slug1TakeoutDeliveryMeal || 0) + (slug1CigarettesPackOf20 || 0)) * slug1ExchangeRate

    const slug2MealAtInexpensiveRestaurant = slug2CostInfo.mealAtInexpensiveRestaurant
    const slug2ThreeCourseMealForTwo = slug2CostInfo.threeCourseMealForTwo
    const slug2FastFoodComboMeal = slug2CostInfo.fastFoodComboMeal
    const slug2Coffee = slug2CostInfo.coffee
    const slug2SoftDrink = slug2CostInfo.softDrink
    const slug2Pizza = slug2CostInfo.pizza
    const slug2TakeoutDeliveryMeal = slug2CostInfo.takeoutDeliveryMeal
    const slug2CigarettesPackOf20 = slug2CostInfo.cigarettesPackOf20
    const slug2TotalCost = ((slug2MealAtInexpensiveRestaurant || 0) + (slug2ThreeCourseMealForTwo || 0) + (slug2FastFoodComboMeal || 0) + (slug2Coffee || 0) + (slug2SoftDrink || 0) + (slug2Pizza || 0) + (slug2TakeoutDeliveryMeal || 0) + (slug2CigarettesPackOf20 || 0)) * slug2ExchangeRate

    const percentageDifference = (((Math.abs(slug1TotalCost - slug2TotalCost)) / slug2TotalCost) * 100).toFixed(2)
    const moreOrLess = slug1TotalCost > slug2TotalCost ? 'more' : 'less'

    const isDollarizedSlug1 = isDollarized(value1, slug1);
    const isDollarizedSlug2 = isDollarized(value2, slug2);

    return (
        <>
            <AdsHeaderBanner />

            <div className="geographical-map">
                <h2 className="pages-h2">Dining Out Cost Comparison</h2>
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
                                <div className="all-indicators">Meal at a Resonable Restaurant</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/meal-in-an-inexpensive-restaurant-image.png"
                                        fill alt="Image Describing Meal cost at an inexpensive restaurant" />
                                </div>
                            </td>

                            <td
                                className="meal-at-a-resonable-restaurant-first-entity all-indicator-answers">
                                {slug1MealAtInexpensiveRestaurant ? formatCost(slug1MealAtInexpensiveRestaurant, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td
                                className="meal-at-a-resonable-restaurant-second-entity all-indicator-answers">
                                {slug2MealAtInexpensiveRestaurant ? formatCost(slug2MealAtInexpensiveRestaurant, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Three-Course Meal for Two</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/three-course-meal-for-two-image.png"
                                        fill alt="Image Describing Three-Course Meal for Two cost" />
                                </div>
                            </td>

                            <td
                                className="three-course-meal-for-two-first-entity all-indicator-answers">
                                {slug1ThreeCourseMealForTwo ? formatCost(slug1ThreeCourseMealForTwo, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td
                                className="three-course-meal-for-two-second-entity all-indicator-answers">
                                {slug2ThreeCourseMealForTwo ? formatCost(slug2ThreeCourseMealForTwo, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Fast Food Combo Meal</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/fast-food-combo-meal-image.png"
                                        fill alt="Image Describing the cost of Fast Food Combo Meal" />
                                </div>
                            </td>

                            <td className="fast-food-combo-meal-first-entity all-indicator-answers">
                                {slug1FastFoodComboMeal ? formatCost(slug1FastFoodComboMeal, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td
                                className="fast-food-combo-meal-second-entity all-indicator-answers">
                                {slug2FastFoodComboMeal ? formatCost(slug2FastFoodComboMeal, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Normal Coffee</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/coffee-image.png"
                                        fill alt="Image Describing Coffee cost" />
                                </div>
                            </td>

                            <td className="coffee-first-entity all-indicator-answers">
                                {slug1Coffee ? formatCost(slug1Coffee, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td className="coffee-second-entity all-indicator-answers">
                                {slug2Coffee ? formatCost(slug2Coffee, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Soft Drink</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/soft-drink-image.png"
                                        fill alt="Image Describing Soft Drink Cost" />
                                </div>
                            </td>

                            <td className="soft-drink-first-entity all-indicator-answers">
                                {slug1SoftDrink ? formatCost(slug1SoftDrink, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td className="soft-drink-second-entity all-indicator-answers">
                                {slug2SoftDrink ? formatCost(slug2SoftDrink, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Pizza for One</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/pizza-image.png"
                                        fill alt="Image Describing Pizza cost" />
                                </div>
                            </td>

                            <td className="pizza-first-entity all-indicator-answers">
                                {slug1Pizza ? formatCost(slug1Pizza, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td className="pizza-second-entity all-indicator-answers">
                                {slug2Pizza ? formatCost(slug2Pizza, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Take-Out Delivery Meal</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/take-out-delivery-meal-image.png"
                                        fill alt="Image Describing Take Out Delivery Meal Cost" />
                                </div>
                            </td>

                            <td
                                className="take-out-delivery-meal-first-entity all-indicator-answers">
                                {slug1TakeoutDeliveryMeal ? formatCost(slug1TakeoutDeliveryMeal, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td
                                className="take-out-delivery-meal-second-entity all-indicator-answers">
                                {slug2TakeoutDeliveryMeal ? formatCost(slug2TakeoutDeliveryMeal, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Cigarette Pack of 20</div>
                                <div className="basic-information-images">
                                    <Image
                                        src="/images/cigarettes-pack-image.png"
                                        fill alt="Image Describing lentils cost per month" />
                                </div>
                            </td>

                            <td className="cigarettes-pack-first-entity all-indicator-answers">
                                {slug1CigarettesPackOf20 ? formatCost(slug1CigarettesPackOf20, slug1ExchangeRate, slug1Currency, isDollarizedSlug1) : 'Yet to Update'}
                            </td>
                            <td className="cigarettes-pack-second-entity all-indicator-answers">
                                {slug2CigarettesPackOf20 ? formatCost(slug2CigarettesPackOf20, slug2ExchangeRate, slug2Currency, isDollarizedSlug2) : 'Yet to Update'}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="paragraph-for-pages-below-table">
                <div className="para-for-pages-single-div">
                    <h3>
                        Is Dining-Out more expensive in
                        <span className="first-entity-name-pages-paragraph"> {slug1} </span>
                        than in
                        <span className="second-entity-name-pages-paragraph"> {slug2}</span>
                        ?
                    </h3>

                    <p>
                        Dining-Out costs
                        <strong><span className="dining-out-cost-calculation"> {percentageDifference}% </span></strong>
                        <span className="dining-out-more-less-calculation"> {moreOrLess} </span>
                        in
                        <span className="first-entity-name-pages-paragraph"> {slug1} </span>
                        compared to
                        <span className="second-entity-name-pages-paragraph"> {slug2}</span>
                        .
                    </p>
                </div>
            </div>
        </>
    )
}

export default DiningOut