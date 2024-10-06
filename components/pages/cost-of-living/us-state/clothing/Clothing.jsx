import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { formatNumberWithCommas } from '@/lib/format/format';
import Image from 'next/image';

function Clothing({ costInfo, stateURLCase }) {
  const state = costInfo.state;
  const pairOfNikeRunningShoes = costInfo.pairOfNikeRunningShoes;
  const mensDressShirt = costInfo.mensDressShirt;
  const womensDress = costInfo.womensDress;
  const summerDress = costInfo.summerDress;
  const mensSuit = costInfo.mensSuit;
  const mensJeans = costInfo.mensJeans;
  const womensJeans = costInfo.womensJeans;
  const mensFormalShoes = costInfo.mensFormalShoes;
  const womensFormalShoes = costInfo.womensFormalShoes;
  const mensCasualShoes = costInfo.mensCasualShoes;
  const womensCasualShoes = costInfo.womensCasualShoes;
  const underwearMen = costInfo.underwearMen;
  const underwearWomen = costInfo.underwearWomen;
  const socksMen = costInfo.socksMen;
  const socksWomen = costInfo.socksWomen;
  const winterCoatForAdults = costInfo.winterCoatForAdults;
  const sportswear = costInfo.sportsWear;

  return (
    <>
      <AdsHeaderBanner />

      <div className="geographical-map">
        <h2 className="pages-h2">Clothing and Footwear Cost (Adults)</h2>
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
                <div className="all-indicators">Pair of Nike Running Shoes</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/pair-of-nike-running-shoes-image.png"
                    fill
                    alt="Image Describing Pair of Nike Running Shoes"
                  />
                </div>
              </td>

              <td className="pair-of-nike-running-shoes-first-entity all-indicator-answers">
                {pairOfNikeRunningShoes
                  ? `${formatNumberWithCommas(pairOfNikeRunningShoes)} USD`
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
                    alt="Image Describing Men's Shirt"
                  />
                </div>
              </td>

              <td className="mens-dress-shirt-first-entity all-indicator-answers">
                {mensDressShirt
                  ? `${formatNumberWithCommas(mensDressShirt)} USD`
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
                    alt="Image Describing Women's Shirt"
                  />
                </div>
              </td>

              <td className="womens-dress-first-entity all-indicator-answers">
                {womensDress
                  ? `${formatNumberWithCommas(womensDress)} USD`
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
                    alt="Image Describing Summer Dress"
                  />
                </div>
              </td>

              <td className="summer-dress-first-entity all-indicator-answers">
                {summerDress
                  ? `${formatNumberWithCommas(summerDress)} USD`
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
                    alt="Image Describing Men's Suit"
                  />
                </div>
              </td>

              <td className="mens-dress-shirt-first-entity all-indicator-answers">
                {mensSuit
                  ? `${formatNumberWithCommas(mensSuit)} USD`
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
                    alt="Image Describing Men's Jeans"
                  />
                </div>
              </td>

              <td className="mens-jeans-first-entity all-indicator-answers">
                {mensJeans
                  ? `${formatNumberWithCommas(mensJeans)} USD`
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
                    alt="Image Describing Women's Jeans"
                  />
                </div>
              </td>

              <td className="womens-jeans-first-entity all-indicator-answers">
                {womensJeans
                  ? `${formatNumberWithCommas(womensJeans)} USD`
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
                    alt="Image Describing Men's formal Shoes"
                  />
                </div>
              </td>

              <td className="mens-formal-shoes-first-entity all-indicator-answers">
                {mensFormalShoes
                  ? `${formatNumberWithCommas(mensFormalShoes)} USD`
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
                    alt="Image Describing Women's formal Shoes"
                  />
                </div>
              </td>

              <td className="women-formal-shoes-first-entity all-indicator-answers">
                {womensFormalShoes
                  ? `${formatNumberWithCommas(womensFormalShoes)} USD`
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
                    alt="Image Describing Men's Casual Shoes"
                  />
                </div>
              </td>

              <td className="mens-casual-shoes-first-entity all-indicator-answers">
                {mensCasualShoes
                  ? `${formatNumberWithCommas(mensCasualShoes)} USD`
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
                    alt="Image Describing Women's Casual Shoes"
                  />
                </div>
              </td>

              <td className="women-casual-shoes-first-entity all-indicator-answers">
                {womensCasualShoes
                  ? `${formatNumberWithCommas(womensCasualShoes)} USD`
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
                    alt="Image Describing Underwear For Men"
                  />
                </div>
              </td>

              <td className="underwear-for-men-first-entity all-indicator-answers">
                {underwearMen
                  ? `${formatNumberWithCommas(underwearMen)} USD`
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
                    alt="Image Describing Underwear For Women"
                  />
                </div>
              </td>

              <td className="underwear-for-women-first-entity all-indicator-answers">
                {underwearWomen
                  ? `${formatNumberWithCommas(underwearWomen)} USD`
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
                    alt="Image Describing socks For Men"
                  />
                </div>
              </td>

              <td className="socks-for-men-first-entity all-indicator-answers">
                {socksMen
                  ? `${formatNumberWithCommas(socksMen)} USD`
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
                    alt="Image Describing socks For Women"
                  />
                </div>
              </td>

              <td className="socks-for-women-first-entity all-indicator-answers">
                {socksWomen
                  ? `${formatNumberWithCommas(socksWomen)} USD`
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
                    alt="Image Describing Wintercoat for Adults"
                  />
                </div>
              </td>

              <td className="wintercoat-for-adults-first-entity all-indicator-answers">
                {winterCoatForAdults
                  ? `${formatNumberWithCommas(winterCoatForAdults)} USD`
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
                    alt="Image Describing Sportswear"
                  />
                </div>
              </td>

              <td className="sportswear-first-entity all-indicator-answers">
                {sportswear
                  ? `${formatNumberWithCommas(sportswear)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Clothing;
