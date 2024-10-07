import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { formatCost, isDollarized } from '@/lib/format/formatCost';
import Image from 'next/image';

function FruitsAndVegetables({
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
  const slug1Apples1Kg = slug1CostInfo.apples1Kg;
  const slug1Bananas1Kg = slug1CostInfo.bananas1Kg;
  const slug1Oranges1Kg = slug1CostInfo.oranges1Kg;
  const slug1Tomatoes1Kg = slug1CostInfo.tomatoes1Kg;
  const slug1Potatoes1Kg = slug1CostInfo.potatoes1Kg;
  const slug1Lemons1Kg = slug1CostInfo.lemons1Kg;
  const slug1Onions1Kg = slug1CostInfo.onions1Kg;
  const slug1Lentils1Kg = slug1CostInfo.lentils1Kg;
  const slug1TotalCost =
    ((slug1Apples1Kg || 0) +
      (slug1Bananas1Kg || 0) +
      (slug1Oranges1Kg || 0) +
      (slug1Tomatoes1Kg || 0) +
      (slug1Potatoes1Kg || 0) +
      (slug1Lemons1Kg || 0) +
      (slug1Onions1Kg || 0) +
      (slug1Lentils1Kg || 0)) *
    slug1ExchangeRate;

  const slug2Apples1Kg = slug2CostInfo.apples1Kg;
  const slug2Bananas1Kg = slug2CostInfo.bananas1Kg;
  const slug2Oranges1Kg = slug2CostInfo.oranges1Kg;
  const slug2Tomatoes1Kg = slug2CostInfo.tomatoes1Kg;
  const slug2Potatoes1Kg = slug2CostInfo.potatoes1Kg;
  const slug2Lemons1Kg = slug2CostInfo.lemons1Kg;
  const slug2Onions1Kg = slug2CostInfo.onions1Kg;
  const slug2Lentils1Kg = slug2CostInfo.lentils1Kg;
  const slug2TotalCost =
    ((slug2Apples1Kg || 0) +
      (slug2Bananas1Kg || 0) +
      (slug2Oranges1Kg || 0) +
      (slug2Tomatoes1Kg || 0) +
      (slug2Potatoes1Kg || 0) +
      (slug2Lemons1Kg || 0) +
      (slug2Onions1Kg || 0) +
      (slug2Lentils1Kg || 0)) *
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
        <h2 className="pages-h2">Fruits and Vegetables Cost Comparison</h2>
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
                <div className="all-indicators">Apples (1 KG)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/apples-1-kg-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing apples cost per month"
                  />
                </div>
              </td>

              <td className="apples-1-kg-first-entity all-indicator-answers">
                {slug1Apples1Kg
                  ? formatCost(
                    slug1Apples1Kg,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="apples-1-kg-second-entity all-indicator-answers">
                {slug2Apples1Kg
                  ? formatCost(
                    slug2Apples1Kg,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Bananas (1 KG)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/bananas-1-kg-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing bananas cost per month"
                  />
                </div>
              </td>

              <td className="bananas-1-kg-first-entity all-indicator-answers">
                {slug1Bananas1Kg
                  ? formatCost(
                    slug1Bananas1Kg,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="bananas-1-kg-second-entity all-indicator-answers">
                {slug2Bananas1Kg
                  ? formatCost(
                    slug2Bananas1Kg,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Oranges (1 KG)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/oranges-1-kg-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing oranges cost per month"
                  />
                </div>
              </td>

              <td className="oranges-1-kg-first-entity all-indicator-answers">
                {slug1Oranges1Kg
                  ? formatCost(
                    slug1Oranges1Kg,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="oranges-1-kg-second-entity all-indicator-answers">
                {slug2Oranges1Kg
                  ? formatCost(
                    slug2Oranges1Kg,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Tomatoes (1 KG)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/tomatoes-1-kg-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing tomatoes cost per month"
                  />
                </div>
              </td>

              <td className="tomatoes-1-kg-first-entity all-indicator-answers">
                {slug1Tomatoes1Kg
                  ? formatCost(
                    slug1Tomatoes1Kg,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="tomatoes-1-kg-second-entity all-indicator-answers">
                {slug2Tomatoes1Kg
                  ? formatCost(
                    slug2Tomatoes1Kg,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Potatoes (1 KG)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/potatoes-1-kg-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing potatoes cost per month"
                  />
                </div>
              </td>

              <td className="potatoes-1-kg-first-entity all-indicator-answers">
                {slug1Potatoes1Kg
                  ? formatCost(
                    slug1Potatoes1Kg,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="potatoes-1-kg-second-entity all-indicator-answers">
                {slug2Potatoes1Kg
                  ? formatCost(
                    slug2Potatoes1Kg,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Lemons (1 KG)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/lemons-1-kg-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing lemons cost per month"
                  />
                </div>
              </td>

              <td className="lemons-1-kg-first-entity all-indicator-answers">
                {slug1Lemons1Kg
                  ? formatCost(
                    slug1Lemons1Kg,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="lemons-1-kg-second-entity all-indicator-answers">
                {slug2Lemons1Kg
                  ? formatCost(
                    slug2Lemons1Kg,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Onions (1 KG)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/onions-1-kg-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing onions cost per month"
                  />
                </div>
              </td>

              <td className="onions-1-kg-first-entity all-indicator-answers">
                {slug1Onions1Kg
                  ? formatCost(
                    slug1Onions1Kg,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="onions-1-kg-second-entity all-indicator-answers">
                {slug2Onions1Kg
                  ? formatCost(
                    slug2Onions1Kg,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Lentils (1 KG)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/lentils-1-kg-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing lentils cost per month"
                  />
                </div>
              </td>

              <td className="lentils-1-kg-first-entity all-indicator-answers">
                {slug1Lentils1Kg
                  ? formatCost(
                    slug1Lentils1Kg,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="lentils-1-kg-second-entity all-indicator-answers">
                {slug2Lentils1Kg
                  ? formatCost(
                    slug2Lentils1Kg,
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
          <p>
            If you lived in
            <span className="first-entity-name-pages-paragraph"> {slug1}</span>,
            instead of
            <span className="second-entity-name-pages-paragraph"> {slug2}</span>
            , you would have to pay
            <strong>
              <span className="fruits-and-vegetables-calculation">
                {' '}
                {costTimes}{' '}
              </span>
              times{' '}
            </strong>
            <span className="fruits-and-vegetables-more-or-less-calculation">
              {moreOrLess}{' '}
            </span>
            for Fruits and Vegetables.
          </p>
        </div>
      </div>
    </>
  );
}

export default FruitsAndVegetables;
