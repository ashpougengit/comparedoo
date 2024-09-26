import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { dollarizedCountries } from "@/lib/array-list/dollarizedCountries"
import { formatNumberWithCommas, formatUSDWithCommas } from "@/lib/format/format"
import Image from "next/image"

function DrinksCost({ country1CostInfo, country2CostInfo, country1Currency, country2Currency, country1UnitValueInUSD, country2UnitValueInUSD, country1LowerCase, country2LowerCase }) {
    const country1 = country1CostInfo.country
    const country1WineMidRangeBottle = country1CostInfo.wineMidRangeBottle
    const country1GlassOfWine = country1CostInfo.glassOfWine
    const country1DomesticBeerHalfLiter = country1CostInfo.domesticBeerHalfLiter
    const country1ImportedBeerHalfLiter = country1CostInfo.importedBeerHalfLiter
    const country1DomesticAlcohol1Liter = country1CostInfo.domesticAlcohol1Liter
    const country1BrandedAlcohol1Liter = country1CostInfo.brandedAlcohol1Liter
    const country1TotalCost = ((country1WineMidRangeBottle || 0 ) + (country1GlassOfWine || 0 ) + (country1DomesticBeerHalfLiter || 0 ) + (country1ImportedBeerHalfLiter || 0 ) + (country1DomesticAlcohol1Liter || 0 ) + (country1BrandedAlcohol1Liter || 0)) * country1UnitValueInUSD

    const country2 = country2CostInfo.country
    const country2WineMidRangeBottle = country2CostInfo.wineMidRangeBottle
    const country2GlassOfWine = country2CostInfo.glassOfWine
    const country2DomesticBeerHalfLiter = country2CostInfo.domesticBeerHalfLiter
    const country2ImportedBeerHalfLiter = country2CostInfo.importedBeerHalfLiter
    const country2DomesticAlcohol1Liter = country2CostInfo.domesticAlcohol1Liter
    const country2BrandedAlcohol1Liter = country2CostInfo.brandedAlcohol1Liter
    const country2TotalCost = ((country2WineMidRangeBottle || 0 ) + (country2GlassOfWine || 0 ) + (country2DomesticBeerHalfLiter || 0 ) + (country2ImportedBeerHalfLiter || 0 ) + (country2DomesticAlcohol1Liter || 0 ) + (country2BrandedAlcohol1Liter || 0)) * country2UnitValueInUSD

    const costTimes = country1TotalCost > country2TotalCost ? (country1TotalCost / country2TotalCost).toFixed(2) : (country2TotalCost / country1TotalCost).toFixed(2)
    const moreOrLess = country1TotalCost > country2TotalCost ? 'more' : 'less'

    return (
      <>
        <AdsHeaderBanner />
        <div className="geographical-map">
          <h2 className="pages-h2">Drinks Cost Comparison</h2>
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
                        src={`/images/${country1LowerCase}-map-small.png`}
                        layout="fill"
                        objectFit="contain"
                        alt={`Pictorial representation of map of ${country1LowerCase}`}
                      />
                    </div>

                    <div className="first-entity-name-pages-comparison">
                      {country1}
                    </div>

                    <div className="first-entity-flag-pages-comparison">
                      <Image
                        src={`/images/${country1LowerCase}-flag-small.png`}
                        layout="fill"
                        objectFit="contain"
                        alt={`Image illustrating the flag of ${country1LowerCase}`}
                      />
                    </div>
                  </div>
                </th>

                <th>
                  <div className="heading-map-name-flag">
                    <div className="second-entity-map-pages-comparison">
                      <Image
                        src={`/images/${country2LowerCase}-map-small.png`}
                        layout="fill"
                        objectFit="contain"
                        alt={`Pictorial representation of map of ${country2LowerCase}`}
                      />
                    </div>

                    <div className="second-entity-name-pages-comparison">
                      {' '}
                      {country2}{' '}
                    </div>

                    <div className="second-entity-flag-pages-comparison">
                      <Image
                        src={`/images/${country2LowerCase}-flag-small.png`}
                        layout="fill"
                        objectFit="contain"
                        alt={`Image illustrating the flag of ${country2LowerCase}`}
                      />
                    </div>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">Wine Mid-Range Bottle</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/wine-bottle-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing Wine Mid Range Bottle"
                    />
                  </div>
                </td>

                <td className="wine-mid-range-bottle-first-entity all-indicator-answers">
                  {`${formatNumberWithCommas(country1WineMidRangeBottle)} ${
                    country1WineMidRangeBottle ? country1Currency : ''
                  }`}
                  <br />{' '}
                  {dollarizedCountries.includes(country1) ? (
                    ''
                  ) : (
                    <span className="wine-mid-range-bottle-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(
                      country1WineMidRangeBottle * country1UnitValueInUSD
                    )}`}</span>
                  )}
                </td>
                <td className="wine-mid-range-bottle-second-entity all-indicator-answers">
                  {`${formatNumberWithCommas(country2WineMidRangeBottle)} ${
                    country2WineMidRangeBottle ? country2Currency : ''
                  }`}
                  <br />{' '}
                  {dollarizedCountries.includes(country2) ? (
                    ''
                  ) : (
                    <span className="wine-mid-range-bottle-second-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(
                      country2WineMidRangeBottle * country2UnitValueInUSD
                    )}`}</span>
                  )}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">Glass of Wine</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/glass-of-wine.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing cost of Glass of Wine"
                    />
                  </div>
                </td>

                <td className="three-course-meal-for-two-first-entity all-indicator-answers">
                  {`${formatNumberWithCommas(country1GlassOfWine)} ${
                    country1GlassOfWine ? country1Currency : ''
                  }`}
                  <br />{' '}
                  {dollarizedCountries.includes(country1) ? (
                    ''
                  ) : (
                    <span className="three-course-meal-for-two-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(
                      country1GlassOfWine * country1UnitValueInUSD
                    )}`}</span>
                  )}
                </td>
                <td className="three-course-meal-for-two-second-entity all-indicator-answers">
                  {`${formatNumberWithCommas(country2GlassOfWine)} ${
                    country2GlassOfWine ? country2Currency : ''
                  }`}
                  <br />{' '}
                  {dollarizedCountries.includes(country2) ? (
                    ''
                  ) : (
                    <span className="three-course-meal-for-two-second-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(
                      country2GlassOfWine * country2UnitValueInUSD
                    )}`}</span>
                  )}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">Domestic Beer Half Liter</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/beer-bottle-domestic-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing the cost of a domestic beer of half liter"
                    />
                  </div>
                </td>

                <td className="domestic-beer-half-liter-first-entity all-indicator-answers">
                  {`${formatNumberWithCommas(country1DomesticBeerHalfLiter)} ${
                    country1DomesticBeerHalfLiter ? country1Currency : ''
                  }`}
                  <br />{' '}
                  {dollarizedCountries.includes(country1) ? (
                    ''
                  ) : (
                    <span className="domestic-beer-half-liter-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(
                      country1DomesticBeerHalfLiter * country1UnitValueInUSD
                    )}`}</span>
                  )}
                </td>
                <td className="domestic-beer-half-liter-second-entity all-indicator-answers">
                  {`${formatNumberWithCommas(country2DomesticBeerHalfLiter)} ${
                    country2DomesticBeerHalfLiter ? country2Currency : ''
                  }`}
                  <br />{' '}
                  {dollarizedCountries.includes(country2) ? (
                    ''
                  ) : (
                    <span className="domestic-beer-half-liter-second-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(
                      country2DomesticBeerHalfLiter * country2UnitValueInUSD
                    )}`}</span>
                  )}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">Imported Beer Half Liter</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/beer-bottle-branded-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing the cost of a branded beer of half liter"
                    />
                  </div>
                </td>

                <td className="imported-beer-half-liter-first-entity all-indicator-answers">
                  {`${formatNumberWithCommas(country1ImportedBeerHalfLiter)} ${
                    country1ImportedBeerHalfLiter ? country1Currency : ''
                  }`}
                  <br />{' '}
                  {dollarizedCountries.includes(country1) ? (
                    ''
                  ) : (
                    <span className="imported-beer-half-liter-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(
                      country1ImportedBeerHalfLiter * country1UnitValueInUSD
                    )}`}</span>
                  )}
                </td>
                <td className="imported-beer-half-liter-second-entity all-indicator-answers">
                  {`${formatNumberWithCommas(country2ImportedBeerHalfLiter)} ${
                    country2ImportedBeerHalfLiter ? country2Currency : ''
                  }`}
                  <br />{' '}
                  {dollarizedCountries.includes(country2) ? (
                    ''
                  ) : (
                    <span className="imported-beer-half-liter-second-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(
                      country2ImportedBeerHalfLiter * country2UnitValueInUSD
                    )}`}</span>
                  )}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">Domestic Alcohol 1 Liter</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/alcohol-bottle-domestic-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing the cost of a Domestic Alcohol 1 liter"
                    />
                  </div>
                </td>

                <td className="domestic-alcohol-1-liter-first-entity all-indicator-answers">
                  {`${formatNumberWithCommas(country1DomesticAlcohol1Liter)} ${
                    country1DomesticAlcohol1Liter ? country1Currency : ''
                  }`}
                  <br />{' '}
                  {dollarizedCountries.includes(country1) ? (
                    ''
                  ) : (
                    <span className="domestic-alcohol-1-liter-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(
                      country1DomesticAlcohol1Liter * country1UnitValueInUSD
                    )}`}</span>
                  )}
                </td>
                <td className="domestic-alcohol-1-liter-second-entity all-indicator-answers">
                  {`${formatNumberWithCommas(country2DomesticAlcohol1Liter)} ${
                    country2DomesticAlcohol1Liter ? country2Currency : ''
                  }`}
                  <br />{' '}
                  {dollarizedCountries.includes(country2) ? (
                    ''
                  ) : (
                    <span className="domestic-alcohol-1-liter-second-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(
                      country2DomesticAlcohol1Liter * country2UnitValueInUSD
                    )}`}</span>
                  )}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">Branded Alcohol 1 Liter</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/alcohol-bottle-branded-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing the cost of a Branded Alcohol 1 liter"
                    />
                  </div>
                </td>

                <td className="branded-alcohol-1-liter-first-entity all-indicator-answers">
                  {`${formatNumberWithCommas(country1BrandedAlcohol1Liter)} ${
                    country1BrandedAlcohol1Liter ? country1Currency : ''
                  }`}
                  <br />{' '}
                  {dollarizedCountries.includes(country1) ? (
                    ''
                  ) : (
                    <span className="branded-alcohol-1-liter-first-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(
                      country1BrandedAlcohol1Liter * country1UnitValueInUSD
                    )}`}</span>
                  )}
                </td>
                <td className="branded-alcohol-1-liter-second-entity all-indicator-answers">
                  {`${formatNumberWithCommas(country2BrandedAlcohol1Liter)} ${
                    country2BrandedAlcohol1Liter ? country2Currency : ''
                  }`}
                  <br />{' '}
                  {dollarizedCountries.includes(country2) ? (
                    ''
                  ) : (
                    <span className="branded-alcohol-1-liter-second-entity-amount-in-usd amount-in-dollar">{`${formatUSDWithCommas(
                      country2BrandedAlcohol1Liter * country2UnitValueInUSD
                    )}`}</span>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="paragraph-for-pages-below-table">
          <div className="para-for-pages-single-div">
            <h3>
              Are Drinks more expensive in
              <span className="first-entity-name-pages-paragraph">
                {' '}
                {country1}{' '}
              </span>{' '}
              than in
              <span className="second-entity-name-pages-paragraph">
                {' '}
                {country2}
              </span>
              ?
            </h3>

            <p>
              If you lived in
              <span className="first-entity-name-pages-paragraph">
                {' '}
                {country1}
              </span>
              , instead of
              <span className="second-entity-name-pages-paragraph">
                {' '}
                {country2}
              </span>
              , you would have to pay
              <strong>
                <span className="drinks-cost-calculation"> {costTimes} </span>{' '}
                times{' '}
              </strong>{' '}
              <span className="drinks-cost-more-or-less-calculation">
                {' '}
                {moreOrLess}{' '}
              </span>
              for usual hard drinks.
            </p>
          </div>
        </div>
      </>
    );
}

export default DrinksCost