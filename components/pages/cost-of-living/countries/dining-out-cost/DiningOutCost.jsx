import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { dollarizedCountries } from "@/lib/array-list/dollarizedCountries"
import { formatNumberWithCommas, formatUSDWithCommas } from "@/lib/format/format"
import Image from "next/image"

function DiningOutCost({ country1CostInfo, country2CostInfo, country1Currency, country2Currency, country1UnitValueInUSD, country2UnitValueInUSD, country1URLCase, country2URLCase }) {
  const country1 = country1CostInfo.country
  const country1MealAtInexpensiveRestaurant = country1CostInfo.mealAtInexpensiveRestaurant
  const country1ThreeCourseMealForTwo = country1CostInfo.threeCourseMealForTwo
  const country1FastFoodComboMeal = country1CostInfo.fastFoodComboMeal
  const country1Coffee = country1CostInfo.coffee
  const country1SoftDrink = country1CostInfo.softDrink
  const country1Pizza = country1CostInfo.pizza
  const country1TakeoutDeliveryMeal = country1CostInfo.takeoutDeliveryMeal
  const country1CigarettesPackOf20 = country1CostInfo.cigarettesPackOf20
  const country1TotalCost = ((country1MealAtInexpensiveRestaurant || 0) + (country1ThreeCourseMealForTwo || 0) + (country1FastFoodComboMeal || 0) + (country1Coffee || 0) + (country1SoftDrink || 0) + (country1Pizza || 0) + (country1TakeoutDeliveryMeal || 0) + (country1CigarettesPackOf20 || 0)) * country1UnitValueInUSD

  const country2 = country2CostInfo.country
  const country2MealAtInexpensiveRestaurant = country2CostInfo.mealAtInexpensiveRestaurant
  const country2ThreeCourseMealForTwo = country2CostInfo.threeCourseMealForTwo
  const country2FastFoodComboMeal = country2CostInfo.fastFoodComboMeal
  const country2Coffee = country2CostInfo.coffee
  const country2SoftDrink = country2CostInfo.softDrink
  const country2Pizza = country2CostInfo.pizza
  const country2TakeoutDeliveryMeal = country2CostInfo.takeoutDeliveryMeal
  const country2CigarettesPackOf20 = country2CostInfo.cigarettesPackOf20
  const country2TotalCost = ((country2MealAtInexpensiveRestaurant || 0) + (country2ThreeCourseMealForTwo || 0) + (country2FastFoodComboMeal || 0) + (country2Coffee || 0) + (country2SoftDrink || 0) + (country2Pizza || 0) + (country2TakeoutDeliveryMeal || 0) + (country2CigarettesPackOf20 || 0)) * country2UnitValueInUSD

  const percentageDifference = (((Math.abs(country1TotalCost - country2TotalCost)) / country2TotalCost) * 100).toFixed(2)
  const moreOrLessPercentage = country1TotalCost > country2TotalCost ? 'more' : 'less'

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
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt="Image representing an indicator"
                    />
                  </div>

                  <div className="indicator-text">Indicators</div>

                  <div className="left-indicator">
                    <Image
                      src="/images/indicators-left-image.png"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt="Image illustrating an indicator"
                    />
                  </div>
                </div>
              </th>

              <th>
                <div className="heading-map-name-flag">
                  <div className="first-entity-map-pages-comparison">
                    <Image
                      src={`/images/${country1URLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Pictorial representation of map of ${country1URLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {country1}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${country1URLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Image illustrating the flag of ${country1URLCase}`}
                    />
                  </div>
                </div>
              </th>

              <th>
                <div className="heading-map-name-flag">
                  <div className="second-entity-map-pages-comparison">
                    <Image
                      src={`/images/${country2URLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Pictorial representation of map of ${country2URLCase}`}
                    />
                  </div>

                  <div className="second-entity-name-pages-comparison">
                    {' '}
                    {country2}{' '}
                  </div>

                  <div className="second-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${country2URLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Image illustrating the flag of ${country2URLCase}`}
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Meal cost at an inexpensive restaurant"
                  />
                </div>
              </td>

              <td className="meal-at-a-resonable-restaurant-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(
                  country1MealAtInexpensiveRestaurant
                )} ${country1MealAtInexpensiveRestaurant ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="meal-at-a-resonable-restaurant-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1MealAtInexpensiveRestaurant *
                    country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="meal-at-a-resonable-restaurant-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(
                  country2MealAtInexpensiveRestaurant
                )} ${country2MealAtInexpensiveRestaurant ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="meal-at-a-resonable-restaurant-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2MealAtInexpensiveRestaurant *
                    country2UnitValueInUSD
                  )})`}</span>
                )}
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
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Three-Course Meal for Two cost"
                  />
                </div>
              </td>

              <td className="three-course-meal-for-two-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1ThreeCourseMealForTwo)} ${country1ThreeCourseMealForTwo ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="three-course-meal-for-two-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1ThreeCourseMealForTwo * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="three-course-meal-for-two-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2ThreeCourseMealForTwo)} ${country2ThreeCourseMealForTwo ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="three-course-meal-for-two-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2ThreeCourseMealForTwo * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Fast Food Combo Meal</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/fast-food-combo-meal-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing the cost of Fast Food Combo Meal"
                  />
                </div>
              </td>

              <td className="fast-food-combo-meal-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1FastFoodComboMeal)} ${country1FastFoodComboMeal ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="fast-food-combo-meal-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1FastFoodComboMeal * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="fast-food-combo-meal-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2FastFoodComboMeal)} ${country2FastFoodComboMeal ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="fast-food-combo-meal-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2FastFoodComboMeal * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Normal Coffee</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/coffee-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Coffee cost"
                  />
                </div>
              </td>

              <td className="coffee-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1Coffee)} ${country1Coffee ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="coffee-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1Coffee * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="coffee-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2Coffee)} ${country2Coffee ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="coffee-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2Coffee * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Soft Drink</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/soft-drink-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Soft Drink Cost"
                  />
                </div>
              </td>

              <td className="soft-drink-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1SoftDrink)} ${country1SoftDrink ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="soft-drink-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1SoftDrink * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="soft-drink-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2SoftDrink)} ${country2SoftDrink ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="soft-drink-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2SoftDrink * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Pizza for One</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/pizza-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Pizza cost"
                  />
                </div>
              </td>

              <td className="pizza-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1Pizza)} ${country1Pizza ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="pizza-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1Pizza * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="pizza-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2Pizza)} ${country2Pizza ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="pizza-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2Pizza * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Take-Out Delivery Meal</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/take-out-delivery-meal-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Take Out Delivery Meal Cost"
                  />
                </div>
              </td>

              <td className="take-out-delivery-meal-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1TakeoutDeliveryMeal)} ${country1TakeoutDeliveryMeal ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="take-out-delivery-meal-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1TakeoutDeliveryMeal * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="take-out-delivery-meal-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2TakeoutDeliveryMeal)} ${country2TakeoutDeliveryMeal ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="take-out-delivery-meal-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2TakeoutDeliveryMeal * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Cigarette Pack of 20</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/cigarettes-pack-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing lentils cost per month"
                  />
                </div>
              </td>

              <td className="cigarettes-pack-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1CigarettesPackOf20)} ${country1CigarettesPackOf20 ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="cigarettes-pack-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1CigarettesPackOf20 * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="cigarettes-pack-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2CigarettesPackOf20)} ${country2CigarettesPackOf20 ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="cigarettes-pack-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2CigarettesPackOf20 * country2UnitValueInUSD
                  )})`}</span>
                )}
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
              {country1}{' '}
            </span>
            than in
            <span className="second-entity-name-pages-paragraph">
              {' '}
              {country2}
            </span>
            ?
          </h3>

          <p>
            Dining-Out costs
            <strong>
              <span className="dining-out-cost-calculation">
                {' '}
                {percentageDifference}%{' '}
              </span>
            </strong>
            <span className="dining-out-more-less-calculation">
              {' '}
              {moreOrLessPercentage}{' '}
            </span>
            in
            <span className="first-entity-name-pages-paragraph">
              {' '}
              {country1}{' '}
            </span>
            compared to
            <span className="second-entity-name-pages-paragraph">
              {' '}
              {country2}
            </span>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default DiningOutCost