import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { dollarizedCountries } from "@/lib/array-list/dollarizedCountries"
import { formatNumberWithCommas, formatUSDWithCommas } from "@/lib/format/format"
import Image from "next/image"

function ClothingAndFootwearCost({ country1CostInfo, country2CostInfo, country1Currency, country2Currency, country1UnitValueInUSD, country2UnitValueInUSD, country1URLCase, country2URLCase }) {
    const country1 = country1CostInfo.country
    const country1PairOfNikeRunningShoes = country1CostInfo.pairOfNikeRunningShoes
    const country1MensDressShirt = country1CostInfo.mensDressShirt
    const country1WomensDress = country1CostInfo.womensDress
    const country1SummerDress = country1CostInfo.summerDress
    const country1MensSuit = country1CostInfo.mensSuit
    const country1MensJeans = country1CostInfo.mensJeans
    const country1WomensJeans = country1CostInfo.womensJeans
    const country1MensFormalShoes = country1CostInfo.mensFormalShoes
    const country1WomensFormalShoes = country1CostInfo.womensFormalShoes
    const country1MensCasualShoes = country1CostInfo.mensCasualShoes
    const country1WomensCasualShoes = country1CostInfo.womensCasualShoes
    const country1UnderwearMen = country1CostInfo.underwearMen
    const country1UnderwearWomen = country1CostInfo.underwearWomen
    const country1SocksMen = country1CostInfo.socksMen
    const country1SocksWomen = country1CostInfo.socksWomen
    const country1WinterCoatForAdults = country1CostInfo.winterCoatForAdults
    const country1Sportswear = country1CostInfo.sportsWear
    const country1TotalCost = ((country1PairOfNikeRunningShoes || 0) + (country1MensDressShirt || 0) + (country1WomensDress || 0) + (country1SummerDress || 0) + (country1MensSuit || 0) + (country1MensJeans || 0) + (country1WomensJeans || 0) + (country1MensFormalShoes || 0) + (country1WomensFormalShoes || 0) + (country1MensCasualShoes || 0) + (country1WomensCasualShoes || 0) + (country1UnderwearMen || 0) + (country1UnderwearWomen || 0) + (country1SocksMen || 0) + (country1SocksWomen || 0) + (country1WinterCoatForAdults || 0) + (country1Sportswear || 0)) * country1UnitValueInUSD

    const country2 = country2CostInfo.country
    const country2PairOfNikeRunningShoes = country2CostInfo.pairOfNikeRunningShoes
    const country2MensDressShirt = country2CostInfo.mensDressShirt
    const country2WomensDress = country2CostInfo.womensDress
    const country2SummerDress = country2CostInfo.summerDress
    const country2MensSuit = country2CostInfo.mensSuit
    const country2MensJeans = country2CostInfo.mensJeans
    const country2WomensJeans = country2CostInfo.womensJeans
    const country2MensFormalShoes = country2CostInfo.mensFormalShoes
    const country2WomensFormalShoes = country2CostInfo.womensFormalShoes
    const country2MensCasualShoes = country2CostInfo.mensCasualShoes
    const country2WomensCasualShoes = country2CostInfo.womensCasualShoes
    const country2UnderwearMen = country2CostInfo.underwearMen
    const country2UnderwearWomen = country2CostInfo.underwearWomen
    const country2SocksMen = country2CostInfo.socksMen
    const country2SocksWomen = country2CostInfo.socksWomen
    const country2WinterCoatForAdults = country2CostInfo.winterCoatForAdults
    const country2Sportswear = country2CostInfo.sportsWear
    const country2TotalCost = ((country2PairOfNikeRunningShoes || 0) + (country2MensDressShirt || 0) + (country2WomensDress || 0) + (country2SummerDress || 0) + (country2MensSuit || 0) + (country2MensJeans || 0) + (country2WomensJeans || 0) + (country2MensFormalShoes || 0) + (country2WomensFormalShoes || 0) + (country2MensCasualShoes || 0) + (country2WomensCasualShoes || 0) + (country2UnderwearMen || 0) + (country2UnderwearWomen || 0) + (country2SocksMen || 0) + (country2SocksWomen || 0) + (country2WinterCoatForAdults || 0) + (country2Sportswear || 0)) * country2UnitValueInUSD

    const costTimes = country1TotalCost > country2TotalCost ? (country1TotalCost / country2TotalCost).toFixed(2) : (country2TotalCost / country1TotalCost).toFixed(2)
    const moreOrLess = country1TotalCost > country2TotalCost ? 'more' : 'less'

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
                                        <Image src="/images/indicators-right-image.png" fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            alt="Image representing an indicator" />
                                    </div>

                                    <div className="indicator-text">Indicators</div>

                                    <div className="left-indicator">
                                        <Image src="/images/indicators-left-image.png" fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            alt="Image illustrating an indicator" />
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="first-entity-map-pages-comparison">
                                        <Image src={`/images/${country1URLCase}-map-small.png`} fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            alt={`Pictorial representation of map of ${country1URLCase}`} />
                                    </div>

                                    <div className="first-entity-name-pages-comparison">{country1}</div>

                                    <div className="first-entity-flag-pages-comparison">
                                        <Image src={`/images/${country1URLCase}-flag-small.png`} fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            alt={`Image illustrating the flag of ${country1URLCase}`} />
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="second-entity-map-pages-comparison">
                                        <Image src={`/images/${country2URLCase}-map-small.png`} fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            alt={`Pictorial representation of map of ${country2URLCase}`} />
                                    </div>

                                    <div className="second-entity-name-pages-comparison"> {country2} </div>

                                    <div className="second-entity-flag-pages-comparison">
                                        <Image src={`/images/${country2URLCase}-flag-small.png`} fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            alt={`Image illustrating the flag of ${country2URLCase}`} />
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
                                    <Image src="/images/pair-of-nike-running-shoes-image.png"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image Describing Pair of Nike Running Shoes" />
                                </div>
                            </td>

                            <td className="pair-of-nike-running-shoes-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1PairOfNikeRunningShoes)} ${country1PairOfNikeRunningShoes ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="pair-of-nike-running-shoes-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country1PairOfNikeRunningShoes * country1UnitValueInUSD)})`}</span>)}
                            </td>
                            <td className="pair-of-nike-running-shoes-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2PairOfNikeRunningShoes)} ${country2PairOfNikeRunningShoes ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="pair-of-nike-running-shoes-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country2PairOfNikeRunningShoes * country2UnitValueInUSD)})`}</span>)}
                            </td>
                        </tr>


                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Men&apos;s Shirt</div>
                                <div className="basic-information-images">
                                    <Image src="/images/mens-dress-shirt-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image Describing Men's Shirt" />
                                </div>
                            </td>

                            <td className="mens-dress-shirt-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1MensDressShirt)} ${country1MensDressShirt ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="mens-dress-shirt-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country1MensDressShirt * country1UnitValueInUSD)})`}</span>)}
                            </td>
                            <td className="mens-dress-shirt-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2MensDressShirt)} ${country2MensDressShirt ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="mens-dress-shirt-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country2MensDressShirt * country2UnitValueInUSD)})`}</span>)}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Women&apos;s Dress</div>
                                <div className="basic-information-images">
                                    <Image src="/images/women-dress-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image Describing Women's Shirt" />
                                </div>
                            </td>

                            <td className="womens-dress-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1WomensDress)} ${country1WomensDress ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="womens-dress-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country1WomensDress * country1UnitValueInUSD)})`}</span>)}
                            </td>
                            <td className="womens-dress-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2WomensDress)} ${country2WomensDress ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="womens-dress-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country2WomensDress * country2UnitValueInUSD)})`}</span>)}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Summer Dress</div>
                                <div className="basic-information-images">
                                    <Image src="/images/summer-dress-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image Describing Summer Dress" />
                                </div>
                            </td>

                            <td className="summer-dress-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1SummerDress)} ${country1SummerDress ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="summer-dress-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country1SummerDress * country1UnitValueInUSD)})`}</span>)}
                            </td>
                            <td className="summer-dress-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2SummerDress)} ${country2SummerDress ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="summer-dress-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country2SummerDress * country2UnitValueInUSD)})`}</span>)}
                            </td>
                        </tr>


                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Men&apos;s Suit</div>
                                <div className="basic-information-images">
                                    <Image src="/images/mens-suit-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image Describing Men's Suit" />
                                </div>
                            </td>

                            <td className="mens-dress-shirt-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1MensSuit)} ${country1MensSuit ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="mens-dress-shirt-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country1MensSuit * country1UnitValueInUSD)})`}</span>)}
                            </td>
                            <td className="mens-dress-shirt-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2MensSuit)} ${country2MensSuit ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="mens-dress-shirt-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country2MensSuit * country2UnitValueInUSD)})`}</span>)}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Men&apos;s Jeans</div>
                                <div className="basic-information-images">
                                    <Image src="/images/mens-jeans-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image Describing Men's Jeans" />
                                </div>
                            </td>

                            <td className="mens-jeans-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1MensJeans)} ${country1MensJeans ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="mens-jeans-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country1MensJeans * country1UnitValueInUSD)})`}</span>)}
                            </td>
                            <td className="mens-jeans-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2MensJeans)} ${country2MensJeans ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="mens-jeans-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country2MensJeans * country2UnitValueInUSD)})`}</span>)}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Women&apos;s Jeans</div>
                                <div className="basic-information-images">
                                    <Image src="/images/women-jeans-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image Describing Women's Jeans" />
                                </div>
                            </td>

                            <td className="womens-jeans-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1WomensJeans)} ${country1WomensJeans ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="womens-jeans-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country1WomensJeans * country1UnitValueInUSD)})`}</span>)}
                            </td>
                            <td className="womens-jeans-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2WomensJeans)} ${country2WomensJeans ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="womens-jeans-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country2WomensJeans * country2UnitValueInUSD)})`}</span>)}
                            </td>
                        </tr>



                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Men&apos;s Formal Shoes</div>
                                <div className="basic-information-images">
                                    <Image src="/images/mens-formal-shoes-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image Describing Men's formal Shoes" />
                                </div>
                            </td>

                            <td className="mens-formal-shoes-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1MensFormalShoes)} ${country1MensFormalShoes ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="mens-formal-shoes-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country1MensFormalShoes * country1UnitValueInUSD)})`}</span>)}
                            </td>
                            <td className="mens-formal-shoes-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2MensFormalShoes)} ${country2MensFormalShoes ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="mens-formal-shoes-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country2MensFormalShoes * country2UnitValueInUSD)})`}</span>)}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Women&apos;s Formal Shoes</div>
                                <div className="basic-information-images">
                                    <Image src="/images/women-formal-shoes-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image Describing Women's formal Shoes" />
                                </div>
                            </td>

                            <td className="women-formal-shoes-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1WomensFormalShoes)} ${country1WomensFormalShoes ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="women-formal-shoes-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country1WomensFormalShoes * country1UnitValueInUSD)})`}</span>)}
                            </td>
                            <td className="women-formal-shoes-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2WomensFormalShoes)} ${country2WomensFormalShoes ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="women-formal-shoes-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country2WomensFormalShoes * country2UnitValueInUSD)})`}</span>)}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Men&apos;s Casual Shoes</div>
                                <div className="basic-information-images">
                                    <Image src="/images/mens-casual-shoes-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image Describing Men's Casual Shoes" />
                                </div>
                            </td>

                            <td className="mens-casual-shoes-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1MensCasualShoes)} ${country1MensCasualShoes ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="mens-casual-shoes-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country1MensCasualShoes * country1UnitValueInUSD)})`}</span>)}
                            </td>
                            <td className="mens-casual-shoes-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2MensCasualShoes)} ${country2MensCasualShoes ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="mens-casual-shoes-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country2MensCasualShoes * country2UnitValueInUSD)})`}</span>)}
                            </td>
                        </tr>


                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Women&apos;s Casual Shoes</div>
                                <div className="basic-information-images">
                                    <Image src="/images/women-casual-shoes-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image Describing Women's Casual Shoes" />
                                </div>
                            </td>

                            <td className="women-casual-shoes-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1WomensCasualShoes)} ${country1WomensCasualShoes ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="women-casual-shoes-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country1WomensCasualShoes * country1UnitValueInUSD)})`}</span>)}
                            </td>
                            <td className="women-casual-shoes-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2WomensCasualShoes)} ${country2WomensCasualShoes ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="women-casual-shoes-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country2WomensCasualShoes * country2UnitValueInUSD)})`}</span>)}
                            </td>
                        </tr>




                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Underwear For Men</div>
                                <div className="basic-information-images">
                                    <Image src="/images/men-underwear-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image Describing Underwear For Men" />
                                </div>
                            </td>

                            <td className="underwear-for-men-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1UnderwearMen)} ${country1UnderwearMen ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="underwear-for-men-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country1UnderwearMen * country1UnitValueInUSD)})`}</span>)}
                            </td>
                            <td className="underwear-for-men-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2UnderwearMen)} ${country2UnderwearMen ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="underwear-for-men-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country2UnderwearMen * country2UnitValueInUSD)})`}</span>)}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Underwear For Women</div>
                                <div className="basic-information-images">
                                    <Image src="/images/women-underwear-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image Describing Underwear For Women" />
                                </div>
                            </td>

                            <td className="underwear-for-women-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1UnderwearWomen)} ${country1UnderwearWomen ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="underwear-for-women-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country1UnderwearWomen * country1UnitValueInUSD)})`}</span>)}
                            </td>
                            <td className="underwear-for-women-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2UnderwearWomen)} ${country2UnderwearWomen ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="underwear-for-women-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country2UnderwearWomen * country2UnitValueInUSD)})`}</span>)}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Socks For Men</div>
                                <div className="basic-information-images">
                                    <Image src="/images/men-socks-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image Describing socks For Men" />
                                </div>
                            </td>

                            <td className="socks-for-men-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1SocksMen)} ${country1SocksMen ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="socks-for-men-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country1SocksMen * country1UnitValueInUSD)})`}</span>)}
                            </td>
                            <td className="socks-for-men-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2SocksMen)} ${country2SocksMen ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="socks-for-men-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country2SocksMen * country2UnitValueInUSD)})`}</span>)}
                            </td>
                        </tr>


                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Socks For Women</div>
                                <div className="basic-information-images">
                                    <Image src="/images/women-socks-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image Describing socks For Women" />
                                </div>
                            </td>

                            <td className="socks-for-women-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1SocksWomen)} ${country1SocksWomen ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="socks-for-women-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country1SocksWomen * country1UnitValueInUSD)})`}</span>)}
                            </td>
                            <td className="socks-for-women-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2SocksWomen)} ${country2SocksWomen ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="socks-for-women-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country2SocksWomen * country2UnitValueInUSD)})`}</span>)}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Wintercoat for Adults</div>
                                <div className="basic-information-images">
                                    <Image src="/images/adult-winter-coat-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image Describing Wintercoat for Adults" />
                                </div>
                            </td>

                            <td className="wintercoat-for-adults-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1WinterCoatForAdults)} ${country1WinterCoatForAdults ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="wintercoat-for-adults-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country1WinterCoatForAdults * country1UnitValueInUSD)})`}</span>)}
                            </td>
                            <td className="wintercoat-for-adults-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2WinterCoatForAdults)} ${country2WinterCoatForAdults ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="wintercoat-for-adults-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country2WinterCoatForAdults * country2UnitValueInUSD)})`}</span>)}
                            </td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">Sportswear</div>
                                <div className="basic-information-images">
                                    <Image src="/images/sportswear-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image Describing Sportswear" />
                                </div>
                            </td>

                            <td className="sportswear-first-entity all-indicator-answers">{`${formatNumberWithCommas(country1Sportswear)} ${country1Sportswear ? country1Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country1) ? '' : (<span className="sportswear-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country1Sportswear * country1UnitValueInUSD)})`}</span>)}
                            </td>
                            <td className="sportswear-second-entity all-indicator-answers">{`${formatNumberWithCommas(country2Sportswear)} ${country2Sportswear ? country2Currency : ''}`}
                                <br /> {dollarizedCountries.includes(country2) ? '' : (<span className="sportswear-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(country2Sportswear * country2UnitValueInUSD)})`}</span>)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="paragraph-for-pages-below-table">
                <div className="para-for-pages-single-div">
                    <h3>
                        Does Clothing and Footwear for adults cost more in
                        <span className="first-entity-name-pages-paragraph"> {' '}{country1}{' '} </span> than in
                        <span className="second-entity-name-pages-paragraph"> {' '}{country2}</span>?
                    </h3>

                    <p>
                        If you lived in
                        <span className="first-entity-name-pages-paragraph">{' '} {country1}</span>, instead of
                        <span className="second-entity-name-pages-paragraph">{' '} {country2}</span>, you would have
                        to pay
                        <strong>
                            <span className="personal-care-cost-calculation"> {' '}{costTimes}{' '} </span> times </strong> <span
                                className="personal-care-cost-more-or-less-calculation"> {' '}{moreOrLess}{' '} </span>
                        for Clothing and Footwear for Adults.
                    </p>
                </div>
            </div>
        </>
    )
}

export default ClothingAndFootwearCost