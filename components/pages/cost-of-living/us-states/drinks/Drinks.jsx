import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { formatNumberWithCommas } from '@/lib/format/format';
import Image from 'next/image';

function Drinks({
  state1CostInfo,
  state2CostInfo,
  state1URLCase,
  state2URLCase,
}) {
  const state1 = state1CostInfo.state;
  const state1WineMidRangeBottle = state1CostInfo.wineMidRangeBottle;
  const state1GlassOfWine = state1CostInfo.glassOfWine;
  const state1DomesticBeerHalfLiter = state1CostInfo.domesticBeerHalfLiter;
  const state1ImportedBeerHalfLiter = state1CostInfo.importedBeerHalfLiter;
  const state1DomesticAlcohol1Liter = state1CostInfo.domesticAlcohol1Liter;
  const state1BrandedAlcohol1Liter = state1CostInfo.brandedAlcohol1Liter;
  const state1TotalCost =
    (state1WineMidRangeBottle || 0) +
    (state1GlassOfWine || 0) +
    (state1DomesticBeerHalfLiter || 0) +
    (state1ImportedBeerHalfLiter || 0) +
    (state1DomesticAlcohol1Liter || 0) +
    (state1BrandedAlcohol1Liter || 0);

  const state2 = state2CostInfo.state;
  const state2WineMidRangeBottle = state2CostInfo.wineMidRangeBottle;
  const state2GlassOfWine = state2CostInfo.glassOfWine;
  const state2DomesticBeerHalfLiter = state2CostInfo.domesticBeerHalfLiter;
  const state2ImportedBeerHalfLiter = state2CostInfo.importedBeerHalfLiter;
  const state2DomesticAlcohol1Liter = state2CostInfo.domesticAlcohol1Liter;
  const state2BrandedAlcohol1Liter = state2CostInfo.brandedAlcohol1Liter;
  const state2TotalCost =
    (state2WineMidRangeBottle || 0) +
    (state2GlassOfWine || 0) +
    (state2DomesticBeerHalfLiter || 0) +
    (state2ImportedBeerHalfLiter || 0) +
    (state2DomesticAlcohol1Liter || 0) +
    (state2BrandedAlcohol1Liter || 0);

  const costTimes =
    state1TotalCost > state2TotalCost
      ? (state1TotalCost / state2TotalCost).toFixed(2)
      : (state2TotalCost / state1TotalCost).toFixed(2);
  const moreOrLess = state1TotalCost > state2TotalCost ? 'more' : 'less';

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
                      src={`/images/${state1URLCase}-map-small.png`}
                      fill
                      alt={`Pictorial representation of map of ${state1URLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {state1}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${state1URLCase}-flag-small.png`}
                      fill
                      alt={`Image illustrating the flag of ${state1URLCase}`}
                    />
                  </div>
                </div>
              </th>

              <th>
                <div className="heading-map-name-flag">
                  <div className="second-entity-map-pages-comparison">
                    <Image
                      src={`/images/${state2URLCase}-map-small.png`}
                      fill
                      alt={`Pictorial representation of map of ${state2URLCase}`}
                    />
                  </div>

                  <div className="second-entity-name-pages-comparison">
                    {' '}
                    {state2}{' '}
                  </div>

                  <div className="second-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${state2URLCase}-flag-small.png`}
                      fill
                      alt={`Image illustrating the flag of ${state2URLCase}`}
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
                    fill
                    alt="Image Describing Wine Mid Range Bottle"
                  />
                </div>
              </td>

              <td className="wine-mid-range-bottle-first-entity all-indicator-answers">
                {state1WineMidRangeBottle
                  ? `${formatNumberWithCommas(state1WineMidRangeBottle)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="wine-mid-range-bottle-second-entity all-indicator-answers">
                {state2WineMidRangeBottle
                  ? `${formatNumberWithCommas(state2WineMidRangeBottle)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Glass of Wine</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/glass-of-wine.png"
                    fill
                    alt="Image Describing cost of Glass of Wine"
                  />
                </div>
              </td>

              <td className="three-course-meal-for-two-first-entity all-indicator-answers">
                {state1GlassOfWine
                  ? `${formatNumberWithCommas(state1GlassOfWine)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="three-course-meal-for-two-second-entity all-indicator-answers">
                {state2GlassOfWine
                  ? `${formatNumberWithCommas(state2GlassOfWine)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Domestic Beer Half Liter</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/beer-bottle-domestic-image.png"
                    fill
                    alt="Image Describing the cost of a domestic beer of half liter"
                  />
                </div>
              </td>

              <td className="domestic-beer-half-liter-first-entity all-indicator-answers">
                {state1DomesticBeerHalfLiter
                  ? `${formatNumberWithCommas(state1DomesticBeerHalfLiter)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="domestic-beer-half-liter-second-entity all-indicator-answers">
                {state2DomesticBeerHalfLiter
                  ? `${formatNumberWithCommas(state2DomesticBeerHalfLiter)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Imported Beer Half Liter</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/beer-bottle-branded-image.png"
                    fill
                    alt="Image Describing the cost of a branded beer of half liter"
                  />
                </div>
              </td>

              <td className="imported-beer-half-liter-first-entity all-indicator-answers">
                {state1ImportedBeerHalfLiter
                  ? `${formatNumberWithCommas(state1ImportedBeerHalfLiter)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="imported-beer-half-liter-second-entity all-indicator-answers">
                {state2ImportedBeerHalfLiter
                  ? `${formatNumberWithCommas(state2ImportedBeerHalfLiter)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Domestic Alcohol 1 Liter</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/alcohol-bottle-domestic-image.png"
                    fill
                    alt="Image Describing the cost of a Domestic Alcohol 1 liter"
                  />
                </div>
              </td>

              <td className="domestic-alcohol-1-liter-first-entity all-indicator-answers">
                {state1DomesticAlcohol1Liter
                  ? `${formatNumberWithCommas(state1DomesticAlcohol1Liter)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="domestic-alcohol-1-liter-second-entity all-indicator-answers">
                {state2DomesticAlcohol1Liter
                  ? `${formatNumberWithCommas(state2DomesticAlcohol1Liter)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Branded Alcohol 1 Liter</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/alcohol-bottle-branded-image.png"
                    fill
                    alt="Image Describing the cost of a Branded Alcohol 1 liter"
                  />
                </div>
              </td>

              <td className="branded-alcohol-1-liter-first-entity all-indicator-answers">
                {state1BrandedAlcohol1Liter
                  ? `${formatNumberWithCommas(state1BrandedAlcohol1Liter)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="branded-alcohol-1-liter-second-entity all-indicator-answers">
                {state2BrandedAlcohol1Liter
                  ? `${formatNumberWithCommas(state2BrandedAlcohol1Liter)} USD`
                  : 'Yet to Update'}
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
            If you lived in
            <span className="first-entity-name-pages-paragraph"> {state1}</span>
            , instead of
            <span className="second-entity-name-pages-paragraph">
              {' '}
              {state2}
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

export default Drinks;
