import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { dollarizedCountries } from '@/lib/array-list/dollarizedCountries';
import {
  formatNumberWithCommas,
  formatUSDWithCommas,
} from '@/lib/format/format';
import Image from 'next/image';

function DiningOut({ costInfo, currency, unitValueInUSD, countryURLCase }) {
  const country = costInfo.country;
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
                      src={`/images/${countryURLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Pictorial representation of map of ${countryURLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {country}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${countryURLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Image illustrating the flag of ${countryURLCase}`}
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
                {`${formatNumberWithCommas(mealAtInexpensiveRestaurant)} ${mealAtInexpensiveRestaurant ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="meal-at-a-resonable-restaurant-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    mealAtInexpensiveRestaurant * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Three-Course Meal for Two</div>
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
                {`${formatNumberWithCommas(threeCourseMealForTwo)} ${threeCourseMealForTwo ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="three-course-meal-for-two-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    threeCourseMealForTwo * unitValueInUSD
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
                {`${formatNumberWithCommas(fastFoodComboMeal)} ${fastFoodComboMeal ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="fast-food-combo-meal-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    fastFoodComboMeal * unitValueInUSD
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
                {`${formatNumberWithCommas(coffee)} ${coffee ? currency : ''}`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="coffee-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    coffee * unitValueInUSD
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
                {`${formatNumberWithCommas(softDrink)} ${softDrink ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="soft-drink-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    softDrink * unitValueInUSD
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
                {`${formatNumberWithCommas(pizza)} ${pizza ? currency : ''}`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="pizza-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    pizza * unitValueInUSD
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
                {`${formatNumberWithCommas(takeoutDeliveryMeal)} ${takeoutDeliveryMeal ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="take-out-delivery-meal-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    takeoutDeliveryMeal * unitValueInUSD
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
                {`${formatNumberWithCommas(cigarettesPackOf20)} ${cigarettesPackOf20 ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="cigarettes-pack-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    cigarettesPackOf20 * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DiningOut;
