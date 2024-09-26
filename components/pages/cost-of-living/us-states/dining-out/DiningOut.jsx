import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { formatNumberWithCommas } from "@/lib/format/format"
import Image from "next/image"

function DiningOut({ state1CostInfo, state2CostInfo, state1LowerCase, state2LowerCase }) {
    const state1 = state1CostInfo.state
    const state1MealAtInexpensiveRestaurant = state1CostInfo.mealAtInexpensiveRestaurant
    const state1ThreeCourseMealForTwo = state1CostInfo.threeCourseMealForTwo
    const state1FastFoodComboMeal = state1CostInfo.fastFoodComboMeal
    const state1Coffee = state1CostInfo.coffee
    const state1SoftDrink = state1CostInfo.softDrink
    const state1Pizza = state1CostInfo.pizza
    const state1TakeoutDeliveryMeal = state1CostInfo.takeoutDeliveryMeal
    const state1CigarettesPackOf20 = state1CostInfo.cigarettesPackOf20
    const state1TotalCost = (state1MealAtInexpensiveRestaurant || 0) + (state1ThreeCourseMealForTwo || 0) + (state1FastFoodComboMeal || 0) + (state1Coffee || 0) + (state1SoftDrink || 0) + (state1Pizza || 0) + (state1TakeoutDeliveryMeal || 0) + (state1CigarettesPackOf20 || 0)

    const state2 = state2CostInfo.state
    const state2MealAtInexpensiveRestaurant = state2CostInfo.mealAtInexpensiveRestaurant
    const state2ThreeCourseMealForTwo = state2CostInfo.threeCourseMealForTwo
    const state2FastFoodComboMeal = state2CostInfo.fastFoodComboMeal
    const state2Coffee = state2CostInfo.coffee
    const state2SoftDrink = state2CostInfo.softDrink
    const state2Pizza = state2CostInfo.pizza
    const state2TakeoutDeliveryMeal = state2CostInfo.takeoutDeliveryMeal
    const state2CigarettesPackOf20 = state2CostInfo.cigarettesPackOf20
    const state2TotalCost = (state2MealAtInexpensiveRestaurant || 0) + (state2ThreeCourseMealForTwo || 0) + (state2FastFoodComboMeal || 0) + (state2Coffee || 0) + (state2SoftDrink || 0) + (state2Pizza || 0) + (state2TakeoutDeliveryMeal || 0) + (state2CigarettesPackOf20 || 0)

    const percentageDifference = (((Math.abs(state1TotalCost - state2TotalCost)) / state2TotalCost) * 100).toFixed(2)
    const moreOrLess = state1TotalCost > state2TotalCost ? 'more' : 'less'

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
                        src={`/images/${state1LowerCase}-map-small.png`}
                        layout="fill"
                        objectFit="contain"
                        alt={`Pictorial representation of map of ${state1LowerCase}`}
                      />
                    </div>

                    <div className="first-entity-name-pages-comparison">
                      {state1}
                    </div>

                    <div className="first-entity-flag-pages-comparison">
                      <Image
                        src={`/images/${state1LowerCase}-flag-small.png`}
                        layout="fill"
                        objectFit="contain"
                        alt={`Image illustrating the flag of ${state1LowerCase}`}
                      />
                    </div>
                  </div>
                </th>

                <th>
                  <div className="heading-map-name-flag">
                    <div className="second-entity-map-pages-comparison">
                      <Image
                        src={`/images/${state2LowerCase}-map-small.png`}
                        layout="fill"
                        objectFit="contain"
                        alt={`Pictorial representation of map of ${state2LowerCase}`}
                      />
                    </div>

                    <div className="second-entity-name-pages-comparison">
                      {' '}
                      {state2}{' '}
                    </div>

                    <div className="second-entity-flag-pages-comparison">
                      <Image
                        src={`/images/${state2LowerCase}-flag-small.png`}
                        layout="fill"
                        objectFit="contain"
                        alt={`Image illustrating the flag of ${state2LowerCase}`}
                      />
                    </div>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    Meal at a Resonable Restaurant
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/meal-in-an-inexpensive-restaurant-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing Meal cost at an inexpensive restaurant"
                    />
                  </div>
                </td>

                <td className="meal-at-a-resonable-restaurant-first-entity all-indicator-answers">
                  {state1MealAtInexpensiveRestaurant
                    ? `${formatNumberWithCommas(
                        state1MealAtInexpensiveRestaurant
                      )} USD`
                    : 'Yet to Update'}
                </td>
                <td className="meal-at-a-resonable-restaurant-second-entity all-indicator-answers">
                  {state2MealAtInexpensiveRestaurant
                    ? `${formatNumberWithCommas(
                        state2MealAtInexpensiveRestaurant
                      )} USD`
                    : 'Yet to Update'}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    Three-Course Meal for Two
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/three-course-meal-for-two-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing Three-Course Meal for Two cost"
                    />
                  </div>
                </td>

                <td className="three-course-meal-for-two-first-entity all-indicator-answers">
                  {state1ThreeCourseMealForTwo
                    ? `${formatNumberWithCommas(
                        state1ThreeCourseMealForTwo
                      )} USD`
                    : 'Yet to Update'}
                </td>
                <td className="three-course-meal-for-two-second-entity all-indicator-answers">
                  {state2ThreeCourseMealForTwo
                    ? `${formatNumberWithCommas(
                        state2ThreeCourseMealForTwo
                      )} USD`
                    : 'Yet to Update'}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">Fast Food Combo Meal</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/fast-food-combo-meal-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing the cost of Fast Food Combo Meal"
                    />
                  </div>
                </td>

                <td className="fast-food-combo-meal-first-entity all-indicator-answers">
                  {state1FastFoodComboMeal
                    ? `${formatNumberWithCommas(state1FastFoodComboMeal)} USD`
                    : 'Yet to Update'}
                </td>
                <td className="fast-food-combo-meal-second-entity all-indicator-answers">
                  {state2FastFoodComboMeal
                    ? `${formatNumberWithCommas(state2FastFoodComboMeal)} USD`
                    : 'Yet to Update'}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">Normal Coffee</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/coffee-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing Coffee cost"
                    />
                  </div>
                </td>

                <td className="coffee-first-entity all-indicator-answers">
                  {state1Coffee
                    ? `${formatNumberWithCommas(state1Coffee)} USD`
                    : 'Yet to Update'}
                </td>
                <td className="coffee-second-entity all-indicator-answers">
                  {state2Coffee
                    ? `${formatNumberWithCommas(state2Coffee)} USD`
                    : 'Yet to Update'}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">Soft Drink</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/soft-drink-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing Soft Drink Cost"
                    />
                  </div>
                </td>

                <td className="soft-drink-first-entity all-indicator-answers">
                  {state1SoftDrink
                    ? `${formatNumberWithCommas(state1SoftDrink)} USD`
                    : 'Yet to Update'}
                </td>
                <td className="soft-drink-second-entity all-indicator-answers">
                  {state2SoftDrink
                    ? `${formatNumberWithCommas(state2SoftDrink)} USD`
                    : 'Yet to Update'}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">Pizza for One</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/pizza-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing Pizza cost"
                    />
                  </div>
                </td>

                <td className="pizza-first-entity all-indicator-answers">
                  {state1Pizza
                    ? `${formatNumberWithCommas(state1Pizza)} USD`
                    : 'Yet to Update'}
                </td>
                <td className="pizza-second-entity all-indicator-answers">
                  {state2Pizza
                    ? `${formatNumberWithCommas(state2Pizza)} USD`
                    : 'Yet to Update'}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">Take-Out Delivery Meal</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/take-out-delivery-meal-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing Take Out Delivery Meal Cost"
                    />
                  </div>
                </td>

                <td className="take-out-delivery-meal-first-entity all-indicator-answers">
                  {state1TakeoutDeliveryMeal
                    ? `${formatNumberWithCommas(state1TakeoutDeliveryMeal)} USD`
                    : 'Yet to Update'}
                </td>
                <td className="take-out-delivery-meal-second-entity all-indicator-answers">
                  {state2TakeoutDeliveryMeal
                    ? `${formatNumberWithCommas(state2TakeoutDeliveryMeal)} USD`
                    : 'Yet to Update'}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">Cigarette Pack of 20</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/cigarettes-pack-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing lentils cost per month"
                    />
                  </div>
                </td>

                <td className="cigarettes-pack-first-entity all-indicator-answers">
                  {state1CigarettesPackOf20
                    ? `${formatNumberWithCommas(state1CigarettesPackOf20)} USD`
                    : 'Yet to Update'}
                </td>
                <td className="cigarettes-pack-second-entity all-indicator-answers">
                  {state2CigarettesPackOf20
                    ? `${formatNumberWithCommas(state2CigarettesPackOf20)} USD`
                    : 'Yet to Update'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="paragraph-for-pages-below-table">
          <div className="para-for-pages-single-div">
            <h3>
              Is Dining-Out more expensive in
              <span className="first-entity-name-pages-paragraph">
                {' '}
                {state1}{' '}
              </span>{' '}
              than in
              <span className="second-entity-name-pages-paragraph">
                {' '}
                {state2}
              </span>
              ?
            </h3>

            <p>
              Dining-Out costs{' '}
              <strong>
                {' '}
                <span className="dining-out-cost-calculation">
                  {' '}
                  {percentageDifference}%{' '}
                </span>
              </strong>
              <span className="dining-out-more-less-calculation">
                {' '}
                {moreOrLess}{' '}
              </span>{' '}
              in
              <span className="first-entity-name-pages-paragraph">
                {' '}
                {state1}{' '}
              </span>{' '}
              compared to
              <span className="second-entity-name-pages-paragraph">
                {' '}
                {state2}
              </span>
              .
            </p>
          </div>
        </div>
      </>
    );
}

export default DiningOut