import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { formatCost, isDollarized } from '@/lib/format/formatCost';
import Image from 'next/image';

function Clothing({
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
  const slug1PairOfNikeRunningShoes = slug1CostInfo.pairOfNikeRunningShoes;
  const slug1MensDressShirt = slug1CostInfo.mensDressShirt;
  const slug1WomensDress = slug1CostInfo.womensDress;
  const slug1SummerDress = slug1CostInfo.summerDress;
  const slug1MensSuit = slug1CostInfo.mensSuit;
  const slug1MensJeans = slug1CostInfo.mensJeans;
  const slug1WomensJeans = slug1CostInfo.womensJeans;
  const slug1MensFormalShoes = slug1CostInfo.mensFormalShoes;
  const slug1WomensFormalShoes = slug1CostInfo.womensFormalShoes;
  const slug1MensCasualShoes = slug1CostInfo.mensCasualShoes;
  const slug1WomensCasualShoes = slug1CostInfo.womensCasualShoes;
  const slug1UnderwearMen = slug1CostInfo.underwearMen;
  const slug1UnderwearWomen = slug1CostInfo.underwearWomen;
  const slug1SocksMen = slug1CostInfo.socksMen;
  const slug1SocksWomen = slug1CostInfo.socksWomen;
  const slug1WinterCoatForAdults = slug1CostInfo.winterCoatForAdults;
  const slug1Sportswear = slug1CostInfo.sportsWear;
  const slug1TotalCost =
    ((slug1PairOfNikeRunningShoes || 0) +
      (slug1MensDressShirt || 0) +
      (slug1WomensDress || 0) +
      (slug1SummerDress || 0) +
      (slug1MensSuit || 0) +
      (slug1MensJeans || 0) +
      (slug1WomensJeans || 0) +
      (slug1MensFormalShoes || 0) +
      (slug1WomensFormalShoes || 0) +
      (slug1MensCasualShoes || 0) +
      (slug1WomensCasualShoes || 0) +
      (slug1UnderwearMen || 0) +
      (slug1UnderwearWomen || 0) +
      (slug1SocksMen || 0) +
      (slug1SocksWomen || 0) +
      (slug1WinterCoatForAdults || 0) +
      (slug1Sportswear || 0)) *
    slug1ExchangeRate;

  const slug2PairOfNikeRunningShoes = slug2CostInfo.pairOfNikeRunningShoes;
  const slug2MensDressShirt = slug2CostInfo.mensDressShirt;
  const slug2WomensDress = slug2CostInfo.womensDress;
  const slug2SummerDress = slug2CostInfo.summerDress;
  const slug2MensSuit = slug2CostInfo.mensSuit;
  const slug2MensJeans = slug2CostInfo.mensJeans;
  const slug2WomensJeans = slug2CostInfo.womensJeans;
  const slug2MensFormalShoes = slug2CostInfo.mensFormalShoes;
  const slug2WomensFormalShoes = slug2CostInfo.womensFormalShoes;
  const slug2MensCasualShoes = slug2CostInfo.mensCasualShoes;
  const slug2WomensCasualShoes = slug2CostInfo.womensCasualShoes;
  const slug2UnderwearMen = slug2CostInfo.underwearMen;
  const slug2UnderwearWomen = slug2CostInfo.underwearWomen;
  const slug2SocksMen = slug2CostInfo.socksMen;
  const slug2SocksWomen = slug2CostInfo.socksWomen;
  const slug2WinterCoatForAdults = slug2CostInfo.winterCoatForAdults;
  const slug2Sportswear = slug2CostInfo.sportsWear;
  const slug2TotalCost =
    ((slug2PairOfNikeRunningShoes || 0) +
      (slug2MensDressShirt || 0) +
      (slug2WomensDress || 0) +
      (slug2SummerDress || 0) +
      (slug2MensSuit || 0) +
      (slug2MensJeans || 0) +
      (slug2WomensJeans || 0) +
      (slug2MensFormalShoes || 0) +
      (slug2WomensFormalShoes || 0) +
      (slug2MensCasualShoes || 0) +
      (slug2WomensCasualShoes || 0) +
      (slug2UnderwearMen || 0) +
      (slug2UnderwearWomen || 0) +
      (slug2SocksMen || 0) +
      (slug2SocksWomen || 0) +
      (slug2WinterCoatForAdults || 0) +
      (slug2Sportswear || 0)) *
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
        <h2 className="pages-h2">Clothing and Footwear Cost (Adults)</h2>
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
                <div className="all-indicators">Pair of Nike Running Shoes</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/pair-of-nike-running-shoes-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Pair of Nike Running Shoes"
                  />
                </div>
              </td>

              <td className="pair-of-nike-running-shoes-first-entity all-indicator-answers">
                {slug1PairOfNikeRunningShoes
                  ? formatCost(
                    slug1PairOfNikeRunningShoes,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="pair-of-nike-running-shoes-second-entity all-indicator-answers">
                {slug2PairOfNikeRunningShoes
                  ? formatCost(
                    slug2PairOfNikeRunningShoes,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Men&apos;s Shirt</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/mens-dress-shirt-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Men's Shirt"
                  />
                </div>
              </td>

              <td className="mens-dress-shirt-first-entity all-indicator-answers">
                {slug1MensDressShirt
                  ? formatCost(
                    slug1MensDressShirt,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="mens-dress-shirt-second-entity all-indicator-answers">
                {slug2MensDressShirt
                  ? formatCost(
                    slug2MensDressShirt,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Women&apos;s Dress</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/women-dress-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Women's Shirt"
                  />
                </div>
              </td>

              <td className="womens-dress-first-entity all-indicator-answers">
                {slug1WomensDress
                  ? formatCost(
                    slug1WomensDress,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="womens-dress-second-entity all-indicator-answers">
                {slug2WomensDress
                  ? formatCost(
                    slug2WomensDress,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Summer Dress</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/summer-dress-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Summer Dress"
                  />
                </div>
              </td>

              <td className="summer-dress-first-entity all-indicator-answers">
                {slug1SummerDress
                  ? formatCost(
                    slug1SummerDress,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="summer-dress-second-entity all-indicator-answers">
                {slug2SummerDress
                  ? formatCost(
                    slug2SummerDress,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Men&apos;s Suit</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/mens-suit-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Men's Suit"
                  />
                </div>
              </td>

              <td className="mens-dress-shirt-first-entity all-indicator-answers">
                {slug1MensSuit
                  ? formatCost(
                    slug1MensSuit,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="mens-dress-shirt-second-entity all-indicator-answers">
                {slug2MensSuit
                  ? formatCost(
                    slug2MensSuit,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Men&apos;s Jeans</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/mens-jeans-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Men's Jeans"
                  />
                </div>
              </td>

              <td className="mens-jeans-first-entity all-indicator-answers">
                {slug1MensJeans
                  ? formatCost(
                    slug1MensJeans,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="mens-jeans-second-entity all-indicator-answers">
                {slug2MensJeans
                  ? formatCost(
                    slug2MensJeans,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Women&apos;s Jeans</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/women-jeans-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Women's Jeans"
                  />
                </div>
              </td>

              <td className="womens-jeans-first-entity all-indicator-answers">
                {slug1WomensJeans
                  ? formatCost(
                    slug1WomensJeans,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="womens-jeans-second-entity all-indicator-answers">
                {slug2WomensJeans
                  ? formatCost(
                    slug2WomensJeans,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Men&apos;s Formal Shoes</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/mens-formal-shoes-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Men's formal Shoes"
                  />
                </div>
              </td>

              <td className="mens-formal-shoes-first-entity all-indicator-answers">
                {slug1MensFormalShoes
                  ? formatCost(
                    slug1MensFormalShoes,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="mens-formal-shoes-second-entity all-indicator-answers">
                {slug2MensFormalShoes
                  ? formatCost(
                    slug2MensFormalShoes,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Women&apos;s Formal Shoes</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/women-formal-shoes-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Women's formal Shoes"
                  />
                </div>
              </td>

              <td className="women-formal-shoes-first-entity all-indicator-answers">
                {slug1WomensFormalShoes
                  ? formatCost(
                    slug1WomensFormalShoes,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="women-formal-shoes-second-entity all-indicator-answers">
                {slug2WomensFormalShoes
                  ? formatCost(
                    slug2WomensFormalShoes,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Men&apos;s Casual Shoes</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/mens-casual-shoes-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Men's Casual Shoes"
                  />
                </div>
              </td>

              <td className="mens-casual-shoes-first-entity all-indicator-answers">
                {slug1MensCasualShoes
                  ? formatCost(
                    slug1MensCasualShoes,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="mens-casual-shoes-second-entity all-indicator-answers">
                {slug2MensCasualShoes
                  ? formatCost(
                    slug2MensCasualShoes,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Women&apos;s Casual Shoes</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/women-casual-shoes-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Women's Casual Shoes"
                  />
                </div>
              </td>

              <td className="women-casual-shoes-first-entity all-indicator-answers">
                {slug1WomensCasualShoes
                  ? formatCost(
                    slug1WomensCasualShoes,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="women-casual-shoes-second-entity all-indicator-answers">
                {slug2WomensCasualShoes
                  ? formatCost(
                    slug2WomensCasualShoes,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Underwear For Men</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/men-underwear-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Underwear For Men"
                  />
                </div>
              </td>

              <td className="underwear-for-men-first-entity all-indicator-answers">
                {slug1UnderwearMen
                  ? formatCost(
                    slug1UnderwearMen,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="underwear-for-men-second-entity all-indicator-answers">
                {slug2UnderwearMen
                  ? formatCost(
                    slug2UnderwearMen,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Underwear For Women</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/women-underwear-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Underwear For Women"
                  />
                </div>
              </td>

              <td className="underwear-for-women-first-entity all-indicator-answers">
                {slug1UnderwearWomen
                  ? formatCost(
                    slug1UnderwearWomen,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="underwear-for-women-second-entity all-indicator-answers">
                {slug2UnderwearWomen
                  ? formatCost(
                    slug2UnderwearWomen,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Socks For Men</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/men-socks-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing socks For Men"
                  />
                </div>
              </td>

              <td className="socks-for-men-first-entity all-indicator-answers">
                {slug1SocksMen
                  ? formatCost(
                    slug1SocksMen,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="socks-for-men-second-entity all-indicator-answers">
                {slug2SocksMen
                  ? formatCost(
                    slug2SocksMen,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Socks For Women</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/women-socks-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing socks For Women"
                  />
                </div>
              </td>

              <td className="socks-for-women-first-entity all-indicator-answers">
                {slug1SocksWomen
                  ? formatCost(
                    slug1SocksWomen,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="socks-for-women-second-entity all-indicator-answers">
                {slug2SocksWomen
                  ? formatCost(
                    slug2SocksWomen,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Wintercoat for Adults</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/adult-winter-coat-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Wintercoat for Adults"
                  />
                </div>
              </td>

              <td className="wintercoat-for-adults-first-entity all-indicator-answers">
                {slug1WinterCoatForAdults
                  ? formatCost(
                    slug1WinterCoatForAdults,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="wintercoat-for-adults-second-entity all-indicator-answers">
                {slug2WinterCoatForAdults
                  ? formatCost(
                    slug2WinterCoatForAdults,
                    slug2ExchangeRate,
                    slug2Currency,
                    isDollarizedSlug2
                  )
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Sportswear</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/sportswear-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing Sportswear"
                  />
                </div>
              </td>

              <td className="sportswear-first-entity all-indicator-answers">
                {slug1Sportswear
                  ? formatCost(
                    slug1Sportswear,
                    slug1ExchangeRate,
                    slug1Currency,
                    isDollarizedSlug1
                  )
                  : 'Yet to Update'}
              </td>
              <td className="sportswear-second-entity all-indicator-answers">
                {slug2Sportswear
                  ? formatCost(
                    slug2Sportswear,
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
            Does Clothing and Footwear for adults cost more in
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
              <span className="personal-care-cost-calculation">
                {' '}
                {costTimes}{' '}
              </span>
              times{' '}
            </strong>
            <span className="personal-care-cost-more-or-less-calculation">
              {moreOrLess}{' '}
            </span>
            for Clothing and Footwear for Adults.
          </p>
        </div>
      </div>
    </>
  );
}

export default Clothing;
