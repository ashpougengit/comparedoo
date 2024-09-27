import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { USStates } from "@/lib/array-list/allUSStates"
import { lastYear } from "@/lib/date-and-time/dateAndTime"
import { formatNumberWithCommas } from "@/lib/format/format"
import Image from "next/image"

function Economy({ slug1, slug2, slug1StandardInfo, slug2StandardInfo, slug1URLCase, slug2URLCase }) {
    const slug1GDPNominal = slug1StandardInfo.GDPNominal
    const slug1GDPNominalStr = USStates.includes(slug1) ? `${formatNumberWithCommas(slug1GDPNominal)} million USD` : slug1GDPNominal
    const slug1GDPPerCapita = slug1StandardInfo.GDPPerCapita
    const slug1GINI = slug1StandardInfo.GINI

    const slug2GDPNominal = slug2StandardInfo.GDPNominal
    const slug2GDPNominalStr = USStates.includes(slug2) ? `${formatNumberWithCommas(slug2GDPNominal)} million USD` : slug2GDPNominal
    const slug2GDPPerCapita = slug2StandardInfo.GDPPerCapita
    const slug2GINI = slug2StandardInfo.GINI

    return (
        <>
            <div class="economic-factors-comparison">
                <h2 class="pages-h2">Economic Factors Information</h2>
            </div>

            {/* ......... Economic Factors Comparison first table Here  ......... */}
            <div class="economic-factors-comparison-div1">
                <table class="indicators-first-entity-and-second-entity-div1">
                    <thead>
                        <tr class="first-tr">
                            <th>
                                <div class="heading-map-name-flag">
                                    <div class="right-indicator">
                                        <Image
                                            src="/images/indicators-right-image.png"
                                            fill alt="Image representing an indicator" />
                                    </div>
                                    <div class="indicator-text">Indicators</div>
                                    <div class="left-indicator">
                                        <Image
                                            src="/images/indicators-left-image.png"
                                            fill alt="Image illustrating an indicator" />
                                    </div>
                                </div>
                            </th>

                <th>
                  <div className="heading-map-name-flag">
                    <div className="first-entity-map-pages-comparison">
                      <Image
                        src={`/images/${slug1URLCase}-map-small.png`}
                        layout="fill"
                        objectFit="contain"
                        alt={`Pictorial representation of map of ${slug1URLCase}`}
                      />
                    </div>

                    <div className="first-entity-name-pages-comparison">
                      {slug1}
                    </div>

                    <div className="first-entity-flag-pages-comparison">
                      <Image
                        src={`/images/${slug1URLCase}-flag-small.png`}
                        layout="fill"
                        objectFit="contain"
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
                        layout="fill"
                        objectFit="contain"
                        alt={`Pictorial representation of map of ${slug2URLCase}`}
                      />
                    </div>

                    <div className="second-entity-name-pages-comparison">
                      {' '}
                      {slug2}{' '}
                    </div>

                                    <div className="second-entity-flag-pages-comparison">
                                        <Image src={`/images/${slug2URLCase}-flag-small.png`} fill alt={`Image illustrating the flag of ${slug2URLCase}`} />
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="basic-info">
                                <div class="all-indicators">
                                    <div class="gdp-text">
                                        Gross Domestic Product (GDP)
                                        <br />
                                        ({lastYear})
                                    </div>
                                </div>
                                <div class="basic-information-images">
                                    <Image
                                        src="/images/gdp-image.png"
                                        fill alt="Image representing the total Gross Domestic Product of any specific country or state" />
                                </div>
                            </td>
                            <td class="gdp-answer-first-entity all-indicator-answers">
                                {slug1GDPNominalStr ?? 'Yet to Update'}
                            </td>
                            <td class="gdp-answer-second-entity all-indicator-answers">
                                {slug2GDPNominalStr ?? 'Yet to Update'}
                            </td>
                        </tr>
                        <tr>
                            <td class="basic-info">
                                <div class="all-indicators">
                                    <div class="gdp-per-capita-text">
                                        GDP Per Capita
                                        <br />
                                        ({lastYear})
                                    </div>
                                </div>
                                <div class="basic-information-images">
                                    <Image
                                        src="/images/gdp-per-capita-image.png"
                                        fill alt="Image representing the total Gross Domestic Product Per Capita of any specific country or state" />
                                </div>
                            </td>
                            <td class="gdp-per-capita-answer-first-entity all-indicator-answers">
                                {slug1GDPPerCapita ? `${formatNumberWithCommas(slug1GDPPerCapita)} USD` : 'Yet to Update'}
                            </td>
                            <td class="gdp-per-capita-answer-second-entity all-indicator-answers">
                                {slug2GDPPerCapita ? `${formatNumberWithCommas(slug2GDPPerCapita)} USD` : 'Yet to Update'}
                            </td>
                        </tr>
                        <tr>
                            <td class="basic-info">
                                <div class="all-indicators">
                                    <div class="gini-ratio-text">
                                        GINI Ratio
                                        <br />
                                        ({lastYear})
                                    </div>
                                </div>
                                <div class="basic-information-images">
                                    <Image
                                        src="/images/gini-ratio-image.png"
                                        fill alt="Image representing the total GINI Ratio or GINI Coefficient of any specific country or state" />
                                </div>
                            </td>
                            <td class="gini-ratio-answer-first-entity all-indicator-answers">
                                {slug1GINI ? (slug1GINI > 1 ? (slug1GINI / 100).toFixed(2) : slug1GINI) : 'Yet to Update'}
                            </td>
                            <td class="gini-ratio-answer-second-entity all-indicator-answers">
                                {slug2GINI ? (slug2GINI > 1 ? (slug2GINI / 100).toFixed(2) : slug2GINI) : 'Yet to Update'}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        <AdsHeaderBanner />

            <div class="paragraph-for-pages-below-table">
                <div class="para-for-pages-single-div">
                    <p>
                        <strong>Gross Domestic Product (GDP) </strong>
                        is a measure of the total value of all goods and services produced
                        within a country or a state in a specific time period, usually a year. It is used
                        to gauge the economic performance of a country or a state and indicates how wealthy
                        and productive a nation or a state is. In simple terms, GDP tells us how much a
                        country or a state is producing and how well its economy is doing.
                    </p>
                    <p>
                        On the other hand,
                        <strong> Gross Domestic Product (GDP) Per Capita </strong>
                        is the average economic output per person in a country or a state. Simply put, it
                        shows how much, on average, each person contributes to the economy,
                        giving an idea of the standard of living and economic well-being of the
                        people in that country or state.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Economy