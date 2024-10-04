import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { dollarizedCountries } from '@/lib/array-list/dollarizedCountries';
import {
  formatNumberWithCommas,
  formatUSDWithCommas,
} from '@/lib/format/format';
import Image from 'next/image';

function Clothing({ costInfo, currency, unitValueInUSD, countryURLCase }) {
  const country = costInfo.country;
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
                      src={`/images/${countryURLCase}-map-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Pictorial representation of map of ${countryURLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {country}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${countryURLCase}-flag-small.png`}
                      layout="fill"
                      objectFit="contain"
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
                {`${formatNumberWithCommas(pairOfNikeRunningShoes)} ${pairOfNikeRunningShoes ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="pair-of-nike-running-shoes-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    pairOfNikeRunningShoes * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(mensDressShirt)} ${mensDressShirt ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="mens-dress-shirt-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    mensDressShirt * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(womensDress)} ${womensDress ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="womens-dress-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    womensDress * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(summerDress)} ${summerDress ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="summer-dress-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    summerDress * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(mensSuit)} ${mensSuit ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="mens-dress-shirt-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    mensSuit * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(mensJeans)} ${mensJeans ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="mens-jeans-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    mensJeans * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(womensJeans)} ${womensJeans ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="womens-jeans-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    womensJeans * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(mensFormalShoes)} ${mensFormalShoes ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="mens-formal-shoes-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    mensFormalShoes * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(womensFormalShoes)} ${womensFormalShoes ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="women-formal-shoes-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    womensFormalShoes * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(mensCasualShoes)} ${mensCasualShoes ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="mens-casual-shoes-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    mensCasualShoes * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(womensCasualShoes)} ${womensCasualShoes ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="women-casual-shoes-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    womensCasualShoes * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(underwearMen)} ${underwearMen ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="underwear-for-men-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    underwearMen * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(underwearWomen)} ${underwearWomen ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="underwear-for-women-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    underwearWomen * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(socksMen)} ${socksMen ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="socks-for-men-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    socksMen * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(socksWomen)} ${socksWomen ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="socks-for-women-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    socksWomen * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(winterCoatForAdults)} ${winterCoatForAdults ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="wintercoat-for-adults-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    winterCoatForAdults * unitValueInUSD
                  )})`}</span>
                )}
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
                {`${formatNumberWithCommas(sportswear)} ${sportswear ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="sportswear-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    sportswear * unitValueInUSD
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

export default Clothing;
