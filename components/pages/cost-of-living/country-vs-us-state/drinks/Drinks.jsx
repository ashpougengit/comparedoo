import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { formatCost, isDollarized } from '@/lib/format/formatCost';
import Image from 'next/image';

function Drinks({
  slug1,
  slug2,
  value1,
  value2,
  slug1CostInfo,
  slug2CostInfo,
  slug1Currency,
  slug2Currency,
  slug1ExchangeRate,
  slug2ExchangeRate,
  slug1URLCase,
  slug2URLCase,
}) {
  const slug1WineMidRangeBottle = slug1CostInfo.wineMidRangeBottle;
  const slug1GlassOfWine = slug1CostInfo.glassOfWine;
  const slug1DomesticBeerHalfLiter = slug1CostInfo.domesticBeerHalfLiter;
  const slug1ImportedBeerHalfLiter = slug1CostInfo.importedBeerHalfLiter;
  const slug1DomesticAlcohol1Liter = slug1CostInfo.domesticAlcohol1Liter;
  const slug1BrandedAlcohol1Liter = slug1CostInfo.brandedAlcohol1Liter;
  const slug1TotalCost =
    ((slug1WineMidRangeBottle || 0) +
      (slug1GlassOfWine || 0) +
      (slug1DomesticBeerHalfLiter || 0) +
      (slug1ImportedBeerHalfLiter || 0) +
      (slug1DomesticAlcohol1Liter || 0) +
      (slug1BrandedAlcohol1Liter || 0)) *
    slug1ExchangeRate;

  const slug2WineMidRangeBottle = slug2CostInfo.wineMidRangeBottle;
  const slug2GlassOfWine = slug2CostInfo.glassOfWine;
  const slug2DomesticBeerHalfLiter = slug2CostInfo.domesticBeerHalfLiter;
  const slug2ImportedBeerHalfLiter = slug2CostInfo.importedBeerHalfLiter;
  const slug2DomesticAlcohol1Liter = slug2CostInfo.domesticAlcohol1Liter;
  const slug2BrandedAlcohol1Liter = slug2CostInfo.brandedAlcohol1Liter;
  const slug2TotalCost =
    ((slug2WineMidRangeBottle || 0) +
      (slug2GlassOfWine || 0) +
      (slug2DomesticBeerHalfLiter || 0) +
      (slug2ImportedBeerHalfLiter || 0) +
      (slug2DomesticAlcohol1Liter || 0) +
      (slug2BrandedAlcohol1Liter || 0)) *
    slug2ExchangeRate;

  const costTimes =
    slug1TotalCost > slug2TotalCost
      ? (slug1TotalCost / slug2TotalCost).toFixed(2)
      : (slug2TotalCost / slug1TotalCost).toFixed(2);
  const moreOrLess = slug1TotalCost > slug2TotalCost ? 'more' : 'less';

  const isDollarizedSlug1 = isDollarized(value1, slug1);
  const isDollarizedSlug2 = isDollarized(value2, slug2);

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
                      src={`/images/${slug1URLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Pictorial representation of map of ${slug1URLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {slug1}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${slug1URLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Image illustrating the flag of ${slug1URLCase}`}
                    />
                  </div>
                </div>
              </th>

              <th>
                <div className="heading-map-name-flag">
                  <div className="second-entity-map-pages-comparison">
                    <Image
                      src={`/images/${slug2URLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Pictorial representation of map of ${slug2URLCase}`}
                    />
                  </div>

                  <div className="second-entity-name-pages-comparison">
                    {' '}
                    {slug2}{' '}
                  </div>

                  <div className="second-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${slug2URLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Image illustrating the flag of ${slug2URLCase}`}
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Wine Mid Range Bottle"
                  />
                </div>
              </td>

              <td className="wine-mid-range-bottle-first-entity all-indicator-answers">
                {slug1WineMidRangeBottle
                  ? formatCost(
                    slug1WineMidRangeBottle,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="wine-mid-range-bottle-second-entity all-indicator-answers">
                {slug2WineMidRangeBottle
                  ? formatCost(
                    slug2WineMidRangeBottle,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing cost of Glass of Wine"
                  />
                </div>
              </td>

              <td className="three-course-meal-for-two-first-entity all-indicator-answers">
                {slug1GlassOfWine
                  ? formatCost(
                    slug1GlassOfWine,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="three-course-meal-for-two-second-entity all-indicator-answers">
                {slug2GlassOfWine
                  ? formatCost(
                    slug2GlassOfWine,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing the cost of a domestic beer of half liter"
                  />
                </div>
              </td>

              <td className="domestic-beer-half-liter-first-entity all-indicator-answers">
                {slug1DomesticBeerHalfLiter
                  ? formatCost(
                    slug1DomesticBeerHalfLiter,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="domestic-beer-half-liter-second-entity all-indicator-answers">
                {slug2DomesticBeerHalfLiter
                  ? formatCost(
                    slug2DomesticBeerHalfLiter,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing the cost of a branded beer of half liter"
                  />
                </div>
              </td>

              <td className="imported-beer-half-liter-first-entity all-indicator-answers">
                {slug1ImportedBeerHalfLiter
                  ? formatCost(
                    slug1ImportedBeerHalfLiter,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="imported-beer-half-liter-second-entity all-indicator-answers">
                {slug2ImportedBeerHalfLiter
                  ? formatCost(
                    slug2ImportedBeerHalfLiter,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing the cost of a Domestic Alcohol 1 liter"
                  />
                </div>
              </td>

              <td className="domestic-alcohol-1-liter-first-entity all-indicator-answers">
                {slug1DomesticAlcohol1Liter
                  ? formatCost(
                    slug1DomesticAlcohol1Liter,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="domestic-alcohol-1-liter-second-entity all-indicator-answers">
                {slug2DomesticAlcohol1Liter
                  ? formatCost(
                    slug2DomesticAlcohol1Liter,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing the cost of a Branded Alcohol 1 liter"
                  />
                </div>
              </td>

              <td className="branded-alcohol-1-liter-first-entity all-indicator-answers">
                {slug1BrandedAlcohol1Liter
                  ? formatCost(
                    slug1BrandedAlcohol1Liter,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="branded-alcohol-1-liter-second-entity all-indicator-answers">
                {slug2BrandedAlcohol1Liter
                  ? formatCost(
                    slug2BrandedAlcohol1Liter,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
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
            <span className="first-entity-name-pages-paragraph"> {slug1} </span>
            than in
            <span className="second-entity-name-pages-paragraph"> {slug2}</span>
            ?
          </h3>
          <p>
            If you lived in
            <span className="first-entity-name-pages-paragraph"> {slug1}</span>,
            instead of
            <span className="second-entity-name-pages-paragraph"> {slug2}</span>
            , you would have to pay
            <strong>
              <span className="drinks-cost-calculation"> {costTimes} </span>
              times
            </strong>
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
