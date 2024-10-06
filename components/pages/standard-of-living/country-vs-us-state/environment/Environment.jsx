import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { lastYear } from "@/lib/date-and-time/dateAndTime"
import { formatNumberWithCommas } from "@/lib/format/format"
import Image from "next/image"

function Environment({ slug1, slug2, slug1StandardInfo, slug2StandardInfo, slug1URLCase, slug2URLCase }) {
    const slug1AccessToInternet = slug1StandardInfo.accessToInternet
    const slug1AccessToElectricity = slug1StandardInfo.accessToElectricity
    const slug1ForestArea = slug1StandardInfo.forestArea
    const slug1AgriculturalLand = slug1StandardInfo.agriculturalLand

    const slug2AccessToInternet = slug2StandardInfo.accessToInternet
    const slug2AccessToElectricity = slug2StandardInfo.accessToElectricity
    const slug2ForestArea = slug2StandardInfo.forestArea
    const slug2AgriculturalLand = slug2StandardInfo.agriculturalLand

    return (
      <>
        <AdsHeaderBanner />

            <div class="economic-factors-comparison">
                <h2 class="pages-h2">Environmental Factors Comparison</h2>
            </div>
            <div class="import-export-factors-comparison-div1">
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
                                    <div class="environmental-factors-text">
                                        Access to Internet
                                        <br />
                                        ({lastYear})
                                    </div>
                                </div>
                                <div class="basic-information-images">
                                    <Image
                                        src="/images/access-to-internet-states-image.png"
                                        fill alt="Image Depicting Access to Internet percentage in any specific country or state" />
                                </div>
                            </td>
                            <td
                                class="environmental-factors-answer-first-entity all-indicator-answers">
                                {slug1AccessToInternet ? `${slug1AccessToInternet} %` : 'Yet to Update'}
                            </td>
                            <td
                                class="environmental-factors-answer-second-entity all-indicator-answers">
                                {slug2AccessToInternet ? `${slug2AccessToInternet} %` : 'Yet to Update'}
                            </td>
                        </tr>
                        <tr>
                            <td class="basic-info">
                                <div class="all-indicators">
                                    <div class="environmental-factors-text">
                                        Access to Electricity
                                        <br />
                                        ({lastYear})
                                    </div>
                                </div>
                                <div class="basic-information-images">
                                    <Image
                                        src="/images/access-to-electricity-states-image.png"
                                        fill alt="Image Depicting Access to Electricity percentage in any specific country or state" />
                                </div>
                            </td>
                            <td
                                class="environmental-factors-answer-first-entity all-indicator-answers">
                                {slug1AccessToElectricity ? `${slug1AccessToElectricity} %` : 'Yet to Update'}
                            </td>
                            <td
                                class="environmental-factors-answer-second-entity all-indicator-answers">
                                {slug2AccessToElectricity ? `${slug2AccessToElectricity} %` : 'Yet to Update'}
                            </td>
                        </tr>
                        <tr>
                            <td class="basic-info">
                                <div class="all-indicators">
                                    <div class="environmental-factors-text">
                                        Total Forest Area
                                        <br />
                                        ({lastYear})
                                    </div>
                                </div>
                                <div class="basic-information-images">
                                    <Image
                                        src="/images/forest-area-states-image.png"
                                        fill alt="Image Depicting Total Forest Area percentage in any specific country or state" />
                                </div>
                            </td>
                            <td
                                class="environmental-factors-answer-first-entity all-indicator-answers">
                                {slug1ForestArea ? `${formatNumberWithCommas(slug1ForestArea)} Square Kilometers` : 'Yet to Update'}
                            </td>
                            <td
                                class="environmental-factors-answer-second-entity all-indicator-answers">
                                {slug2ForestArea ? `${formatNumberWithCommas(slug2ForestArea)} Square Kilometers` : 'Yet to Update'}
                            </td>
                        </tr>
                        <tr>
                            <td class="basic-info">
                                <div class="all-indicators">
                                    <div class="environmental-factors-text">
                                        Agricultural Land
                                        <br />
                                        ({lastYear})
                                    </div>
                                </div>
                                <div class="basic-information-images">
                                    <Image
                                        src="/images/agricultural-land-states-image.png"
                                        fill alt="Image Depicting Agricultural Land percentage in any specific country or state" />
                                </div>
                            </td>
                            <td
                                class="environmental-factors-answer-first-entity all-indicator-answers">
                                {slug1AgriculturalLand ? `${formatNumberWithCommas(slug1AgriculturalLand)} Square Kilometers` : 'Yet to Update'}
                            </td>
                            <td
                                class="environmental-factors-answer-second-entity all-indicator-answers">
                                {slug2AgriculturalLand ? `${formatNumberWithCommas(slug2AgriculturalLand)} Square Kilometers` : 'Yet to Update'}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Environment