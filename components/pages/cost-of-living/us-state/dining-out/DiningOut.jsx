import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { formatNumberWithCommas } from '@/lib/format/format';
import Image from 'next/image';

function DiningOut({ costInfo, stateURLCase }) {
  const state = costInfo.state;
  const mealAtInexpensiveRestaurant = costInfo.mealAtInexpensiveRestaurant;
  const threeCourseMealForTwo = costInfo.threeCourseMealForTwo;
  const fastFoodComboMeal = costInfo.fastFoodComboMeal;
  const coffee = costInfo.coffee;
  const softDrink = costInfo.softDrink;
  const pizza = costInfo.pizza;
  const takeoutDeliveryMeal = costInfo.takeoutDeliveryMeal;
  const cigarettesPackOf20 = costInfo.cigarettesPackOf20;

  return (
    <>
      <AdsHeaderBanner />

      <div className="geographical-map">
        <h2 className="pages-h2">Dining Out Cost</h2>
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
                      fill
                      alt="Image representing an indicator"
                    />
                  </div>

                  <div className="indicator-text">Indicators</div>

                  <div className="left-indicator">
                    <Image
                      src="/images/indicators-left-image.png"
                      fill
                      alt="Image illustrating an indicator"
                    />
                  </div>
                </div>
              </th>

              <th>
                <div className="heading-map-name-flag">
                  <div className="first-entity-map-pages-comparison">
                    <Image
                      src={`/images/${stateURLCase}-map-small.png`}
                      fill
                      alt={`Pictorial representation of map of ${stateURLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {state}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${stateURLCase}-flag-small.png`}
                      fill
                      alt={`Image illustrating the flag of ${stateURLCase}`}
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
                    fill
                    alt="Image Describing Meal cost at an inexpensive restaurant"
                  />
                </div>
              </td>

              <td className="meal-at-a-resonable-restaurant-first-entity all-indicator-answers">
                {mealAtInexpensiveRestaurant
                  ? `${formatNumberWithCommas(mealAtInexpensiveRestaurant)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Three-Course Meal for Two</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/three-course-meal-for-two-image.png"
                    fill
                    alt="Image Describing Three-Course Meal for Two cost"
                  />
                </div>
              </td>

              <td className="three-course-meal-for-two-first-entity all-indicator-answers">
                {threeCourseMealForTwo
                  ? `${formatNumberWithCommas(threeCourseMealForTwo)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Fast Food Combo Meal</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/fast-food-combo-meal-image.png"
                    fill
                    alt="Image Describing the cost of Fast Food Combo Meal"
                  />
                </div>
              </td>

              <td className="fast-food-combo-meal-first-entity all-indicator-answers">
                {fastFoodComboMeal
                  ? `${formatNumberWithCommas(fastFoodComboMeal)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Normal Coffee</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/coffee-image.png"
                    fill
                    alt="Image Describing Coffee cost"
                  />
                </div>
              </td>

              <td className="coffee-first-entity all-indicator-answers">
                {coffee
                  ? `${formatNumberWithCommas(coffee)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Soft Drink</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/soft-drink-image.png"
                    fill
                    alt="Image Describing Soft Drink Cost"
                  />
                </div>
              </td>

              <td className="soft-drink-first-entity all-indicator-answers">
                {softDrink
                  ? `${formatNumberWithCommas(softDrink)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Pizza for One</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/pizza-image.png"
                    fill
                    alt="Image Describing Pizza cost"
                  />
                </div>
              </td>

              <td className="pizza-first-entity all-indicator-answers">
                {pizza
                  ? `${formatNumberWithCommas(pizza)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Take-Out Delivery Meal</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/take-out-delivery-meal-image.png"
                    fill
                    alt="Image Describing Take Out Delivery Meal Cost"
                  />
                </div>
              </td>

              <td className="take-out-delivery-meal-first-entity all-indicator-answers">
                {takeoutDeliveryMeal
                  ? `${formatNumberWithCommas(takeoutDeliveryMeal)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Cigarette Pack of 20</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/cigarettes-pack-image.png"
                    fill
                    alt="Image Describing lentils cost per month"
                  />
                </div>
              </td>

              <td className="cigarettes-pack-first-entity all-indicator-answers">
                {cigarettesPackOf20
                  ? `${formatNumberWithCommas(cigarettesPackOf20)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DiningOut;
