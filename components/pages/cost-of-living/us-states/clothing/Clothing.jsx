import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { formatNumberWithCommas } from '@/lib/format/format';
import Image from 'next/image';

function Clothing({
  state1CostInfo,
  state2CostInfo,
  state1URLCase,
  state2URLCase,
}) {
  const state1 = state1CostInfo.state;
  const state1PairOfNikeRunningShoes = state1CostInfo.pairOfNikeRunningShoes;
  const state1MensDressShirt = state1CostInfo.mensDressShirt;
  const state1WomensDress = state1CostInfo.womensDress;
  const state1SummerDress = state1CostInfo.summerDress;
  const state1MensSuit = state1CostInfo.mensSuit;
  const state1MensJeans = state1CostInfo.mensJeans;
  const state1WomensJeans = state1CostInfo.womensJeans;
  const state1MensFormalShoes = state1CostInfo.mensFormalShoes;
  const state1WomensFormalShoes = state1CostInfo.womensFormalShoes;
  const state1MensCasualShoes = state1CostInfo.mensCasualShoes;
  const state1WomensCasualShoes = state1CostInfo.womensCasualShoes;
  const state1UnderwearMen = state1CostInfo.underwearMen;
  const state1UnderwearWomen = state1CostInfo.underwearWomen;
  const state1SocksMen = state1CostInfo.socksMen;
  const state1SocksWomen = state1CostInfo.socksWomen;
  const state1WinterCoatForAdults = state1CostInfo.winterCoatForAdults;
  const state1Sportswear = state1CostInfo.sportsWear;
  const state1TotalCost =
    (state1PairOfNikeRunningShoes || 0) +
    (state1MensDressShirt || 0) +
    (state1WomensDress || 0) +
    (state1SummerDress || 0) +
    (state1MensSuit || 0) +
    (state1MensJeans || 0) +
    (state1WomensJeans || 0) +
    (state1MensFormalShoes || 0) +
    (state1WomensFormalShoes || 0) +
    (state1MensCasualShoes || 0) +
    (state1WomensCasualShoes || 0) +
    (state1UnderwearMen || 0) +
    (state1UnderwearWomen || 0) +
    (state1SocksMen || 0) +
    (state1SocksWomen || 0) +
    (state1WinterCoatForAdults || 0) +
    (state1Sportswear || 0);

  const state2 = state2CostInfo.state;
  const state2PairOfNikeRunningShoes = state2CostInfo.pairOfNikeRunningShoes;
  const state2MensDressShirt = state2CostInfo.mensDressShirt;
  const state2WomensDress = state2CostInfo.womensDress;
  const state2SummerDress = state2CostInfo.summerDress;
  const state2MensSuit = state2CostInfo.mensSuit;
  const state2MensJeans = state2CostInfo.mensJeans;
  const state2WomensJeans = state2CostInfo.womensJeans;
  const state2MensFormalShoes = state2CostInfo.mensFormalShoes;
  const state2WomensFormalShoes = state2CostInfo.womensFormalShoes;
  const state2MensCasualShoes = state2CostInfo.mensCasualShoes;
  const state2WomensCasualShoes = state2CostInfo.womensCasualShoes;
  const state2UnderwearMen = state2CostInfo.underwearMen;
  const state2UnderwearWomen = state2CostInfo.underwearWomen;
  const state2SocksMen = state2CostInfo.socksMen;
  const state2SocksWomen = state2CostInfo.socksWomen;
  const state2WinterCoatForAdults = state2CostInfo.winterCoatForAdults;
  const state2Sportswear = state2CostInfo.sportsWear;
  const state2TotalCost =
    (state2PairOfNikeRunningShoes || 0) +
    (state2MensDressShirt || 0) +
    (state2WomensDress || 0) +
    (state2SummerDress || 0) +
    (state2MensSuit || 0) +
    (state2MensJeans || 0) +
    (state2WomensJeans || 0) +
    (state2MensFormalShoes || 0) +
    (state2WomensFormalShoes || 0) +
    (state2MensCasualShoes || 0) +
    (state2WomensCasualShoes || 0) +
    (state2UnderwearMen || 0) +
    (state2UnderwearWomen || 0) +
    (state2SocksMen || 0) +
    (state2SocksWomen || 0) +
    (state2WinterCoatForAdults || 0) +
    (state2Sportswear || 0);

  const costTimes =
    state1TotalCost > state2TotalCost
      ? (state1TotalCost / state2TotalCost).toFixed(2)
      : (state2TotalCost / state1TotalCost).toFixed(2);
  const moreOrLess = state1TotalCost > state2TotalCost ? 'more' : 'less';

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
                      src={`/images/${state1URLCase}-map-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Pictorial representation of map of ${state1URLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {state1}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${state1URLCase}-flag-small.png`}
                      layout="fill"
                      objectFit="contain"
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
                      layout="fill"
                      objectFit="contain"
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
                      layout="fill"
                      objectFit="contain"
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
                <div className="all-indicators">Pair of Nike Running Shoes</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/pair-of-nike-running-shoes-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Pair of Nike Running Shoes"
                  />
                </div>
              </td>

              <td className="pair-of-nike-running-shoes-first-entity all-indicator-answers">
                {state1PairOfNikeRunningShoes
                  ? `${formatNumberWithCommas(
                    state1PairOfNikeRunningShoes
                  )} USD`
                  : 'Yet to Update'}
              </td>
              <td className="pair-of-nike-running-shoes-second-entity all-indicator-answers">
                {state2PairOfNikeRunningShoes
                  ? `${formatNumberWithCommas(
                    state2PairOfNikeRunningShoes
                  )} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Men&apos;s Shirt</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/mens-dress-shirt-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Men's Shirt"
                  />
                </div>
              </td>

              <td className="mens-dress-shirt-first-entity all-indicator-answers">
                {state1MensDressShirt
                  ? `${formatNumberWithCommas(state1MensDressShirt)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="mens-dress-shirt-second-entity all-indicator-answers">
                {state2MensDressShirt
                  ? `${formatNumberWithCommas(state2MensDressShirt)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Women&apos;s Dress</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/women-dress-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Women's Shirt"
                  />
                </div>
              </td>

              <td className="womens-dress-first-entity all-indicator-answers">
                {state1WomensDress
                  ? `${formatNumberWithCommas(state1WomensDress)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="womens-dress-second-entity all-indicator-answers">
                {state2WomensDress
                  ? `${formatNumberWithCommas(state2WomensDress)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Summer Dress</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/summer-dress-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Summer Dress"
                  />
                </div>
              </td>

              <td className="summer-dress-first-entity all-indicator-answers">
                {state1SummerDress
                  ? `${formatNumberWithCommas(state1SummerDress)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="summer-dress-second-entity all-indicator-answers">
                {state2SummerDress
                  ? `${formatNumberWithCommas(state2SummerDress)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Men&apos;s Suit</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/mens-suit-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Men's Suit"
                  />
                </div>
              </td>

              <td className="mens-dress-shirt-first-entity all-indicator-answers">
                {state1MensSuit
                  ? `${formatNumberWithCommas(state1MensSuit)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="mens-dress-shirt-second-entity all-indicator-answers">
                {state2MensSuit
                  ? `${formatNumberWithCommas(state2MensSuit)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Men&apos;s Jeans</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/mens-jeans-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Men's Jeans"
                  />
                </div>
              </td>

              <td className="mens-jeans-first-entity all-indicator-answers">
                {state1MensJeans
                  ? `${formatNumberWithCommas(state1MensJeans)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="mens-jeans-second-entity all-indicator-answers">
                {state2MensJeans
                  ? `${formatNumberWithCommas(state2MensJeans)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Women&apos;s Jeans</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/women-jeans-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Women's Jeans"
                  />
                </div>
              </td>

              <td className="womens-jeans-first-entity all-indicator-answers">
                {state1WomensJeans
                  ? `${formatNumberWithCommas(state1WomensJeans)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="womens-jeans-second-entity all-indicator-answers">
                {state2WomensJeans
                  ? `${formatNumberWithCommas(state2WomensJeans)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Men&apos;s Formal Shoes</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/mens-formal-shoes-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Men's formal Shoes"
                  />
                </div>
              </td>

              <td className="mens-formal-shoes-first-entity all-indicator-answers">
                {state1MensFormalShoes
                  ? `${formatNumberWithCommas(state1MensFormalShoes)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="mens-formal-shoes-second-entity all-indicator-answers">
                {state2MensFormalShoes
                  ? `${formatNumberWithCommas(state2MensFormalShoes)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Women&apos;s Formal Shoes</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/women-formal-shoes-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Women's formal Shoes"
                  />
                </div>
              </td>

              <td className="women-formal-shoes-first-entity all-indicator-answers">
                {state1WomensFormalShoes
                  ? `${formatNumberWithCommas(state1WomensFormalShoes)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="women-formal-shoes-second-entity all-indicator-answers">
                {state2WomensFormalShoes
                  ? `${formatNumberWithCommas(state2WomensFormalShoes)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Men&apos;s Casual Shoes</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/mens-casual-shoes-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Men's Casual Shoes"
                  />
                </div>
              </td>

              <td className="mens-casual-shoes-first-entity all-indicator-answers">
                {state1MensCasualShoes
                  ? `${formatNumberWithCommas(state1MensCasualShoes)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="mens-casual-shoes-second-entity all-indicator-answers">
                {state2MensCasualShoes
                  ? `${formatNumberWithCommas(state2MensCasualShoes)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Women&apos;s Casual Shoes</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/women-casual-shoes-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Women's Casual Shoes"
                  />
                </div>
              </td>

              <td className="women-casual-shoes-first-entity all-indicator-answers">
                {state1WomensCasualShoes
                  ? `${formatNumberWithCommas(state1WomensCasualShoes)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="women-casual-shoes-second-entity all-indicator-answers">
                {state2WomensCasualShoes
                  ? `${formatNumberWithCommas(state2WomensCasualShoes)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Underwear For Men</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/men-underwear-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Underwear For Men"
                  />
                </div>
              </td>

              <td className="underwear-for-men-first-entity all-indicator-answers">
                {state1UnderwearMen
                  ? `${formatNumberWithCommas(state1UnderwearMen)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="underwear-for-men-second-entity all-indicator-answers">
                {state2UnderwearMen
                  ? `${formatNumberWithCommas(state2UnderwearMen)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Underwear For Women</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/women-underwear-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Underwear For Women"
                  />
                </div>
              </td>

              <td className="underwear-for-women-first-entity all-indicator-answers">
                {state1UnderwearWomen
                  ? `${formatNumberWithCommas(state1UnderwearWomen)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="underwear-for-women-second-entity all-indicator-answers">
                {state2UnderwearWomen
                  ? `${formatNumberWithCommas(state2UnderwearWomen)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Socks For Men</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/men-socks-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing socks For Men"
                  />
                </div>
              </td>

              <td className="socks-for-men-first-entity all-indicator-answers">
                {state1SocksMen
                  ? `${formatNumberWithCommas(state1SocksMen)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="socks-for-men-second-entity all-indicator-answers">
                {state2SocksMen
                  ? `${formatNumberWithCommas(state2SocksMen)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Socks For Women</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/women-socks-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing socks For Women"
                  />
                </div>
              </td>

              <td className="socks-for-women-first-entity all-indicator-answers">
                {state1SocksWomen
                  ? `${formatNumberWithCommas(state1SocksWomen)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="socks-for-women-second-entity all-indicator-answers">
                {state2SocksWomen
                  ? `${formatNumberWithCommas(state2SocksWomen)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Wintercoat for Adults</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/adult-winter-coat-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Wintercoat for Adults"
                  />
                </div>
              </td>

              <td className="wintercoat-for-adults-first-entity all-indicator-answers">
                {state1WinterCoatForAdults
                  ? `${formatNumberWithCommas(state1WinterCoatForAdults)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="wintercoat-for-adults-second-entity all-indicator-answers">
                {state2WinterCoatForAdults
                  ? `${formatNumberWithCommas(state2WinterCoatForAdults)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Sportswear</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/sportswear-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Sportswear"
                  />
                </div>
              </td>

              <td className="sportswear-first-entity all-indicator-answers">
                {state1Sportswear
                  ? `${formatNumberWithCommas(state1Sportswear)} USD`
                  : 'Yet to Update'}
              </td>
              <td className="sportswear-second-entity all-indicator-answers">
                {state2Sportswear
                  ? `${formatNumberWithCommas(state2Sportswear)} USD`
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
              <span className="personal-care-cost-calculation">
                {' '}
                {costTimes}{' '}
              </span>{' '}
              times{' '}
            </strong>{' '}
            <span className="personal-care-cost-more-or-less-calculation">
              {' '}
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
