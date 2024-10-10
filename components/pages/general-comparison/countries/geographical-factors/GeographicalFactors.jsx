import React from 'react'
import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner'
import Image from 'next/image'
import { formatNumberWithCommas } from '@/lib/format/format'

function GeographicalFactors({ country1GeneralInfo, country2GeneralInfo, country1URLCase, country2URLCase }) {
    const country1 = country1GeneralInfo.country
    const country1LargestCity = country1GeneralInfo.largestCity
    const country1Demonyms = country1GeneralInfo.demonyms
    const country1OfficialLanguages = country1GeneralInfo.officialLanguages
    const country1GovernmentStatus = country1GeneralInfo.governmentStatus
    const country1MajorReligion = country1GeneralInfo.majorReligion
    const country1MajorReligionPercentage = country1GeneralInfo.majorReligionPercentage

    const country1CurrencyName = country1GeneralInfo.currencyName
    const country1CurrencySymbol = country1GeneralInfo.currencySymbol
    const country1DrivingSide = country1GeneralInfo.drivingSide
    const country1CallingCode = country1GeneralInfo.callingCode
    const country1InternetTLD = country1GeneralInfo.internetTLD
    const country1StartOfWeek = country1GeneralInfo.startOfWeek
    const country1ISO3166Code = country1GeneralInfo.ISO3166Code

    const country2 = country2GeneralInfo.country
    const country2LargestCity = country2GeneralInfo.largestCity
    const country2Demonyms = country2GeneralInfo.demonyms
    const country2OfficialLanguages = country2GeneralInfo.officialLanguages
    const country2GovernmentStatus = country2GeneralInfo.governmentStatus
    const country2MajorReligion = country2GeneralInfo.majorReligion
    const country2MajorReligionPercentage = country2GeneralInfo.majorReligionPercentage

    const country2CurrencyName = country2GeneralInfo.currencyName
    const country2CurrencySymbol = country2GeneralInfo.currencySymbol
    const country2DrivingSide = country2GeneralInfo.drivingSide
    const country2CallingCode = country2GeneralInfo.callingCode
    const country2InternetTLD = country2GeneralInfo.internetTLD
    const country2StartOfWeek = country2GeneralInfo.startOfWeek
    const country2ISO3166Code = country2GeneralInfo.ISO3166Code

    return (
        <>
            <div className="geographical-factors">
                <h2 className="pages-h2">Geographical Factors Comparison</h2>
            </div>
            <div className="geographical-factors-comparison-div1">
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

                                    <div className="indicator-text">
                                        Indicators
                                    </div>

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
                                <div className="all-indicators">
                                    Largest City
                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/largest-city-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Visual representation of the Largest City of any country" />
                                </div>
                            </td>
                            <td className="largest-city-answer-first-entity all-indicator-answers">{country1LargestCity ? formatNumberWithCommas(country1LargestCity) : 'Yet to Update'}</td>
                            <td className="largest-city-answer-second-entity all-indicator-answers">{country2LargestCity ? formatNumberWithCommas(country2LargestCity) : 'Yet to Update'}</td>

                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">
                                    Demonyms
                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/demonyms-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image depicting demonyms of any specific country" />
                                </div>
                            </td>
                            <td className="demonyms-answer-first-entity all-indicator-answers">{country1Demonyms ?? 'Yet to Update'}</td>
                            <td className="demonyms-answer-second-entity all-indicator-answers">{country2Demonyms ?? 'Yet to Update'}</td>

                        </tr>





                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">
                                    Official Languages
                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/official-languages-image.png"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image depicting the official languages of any specific country" />
                                </div>
                            </td>
                            <td className="official-languages-answer-first-entity all-indicator-answers">{country1OfficialLanguages ? formatNumberWithCommas(country1OfficialLanguages) : 'Yet to Update'}</td>
                            <td className="official-languages-answer-second-entity all-indicator-answers">{country2OfficialLanguages ? formatNumberWithCommas(country2OfficialLanguages) : 'Yet to Update'}</td>

                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">
                                    Government Status
                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/government-status-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image indicating the government status of any country" />
                                </div>
                            </td>
                            <td className="government-status-answer-first-entity all-indicator-answers">{country1GovernmentStatus ?? 'Yet to Update'}</td>
                            <td className="government-status-answer-second-entity all-indicator-answers">{country2GovernmentStatus ?? 'Yet to Update'}</td>

                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">
                                    Major Religion
                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/major-religion-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image indicating the major religion of any country" />
                                </div>
                            </td>
                            <td className="major-religion-answer-first-entity all-indicator-answers">{country1MajorReligion ?? 'Yet to Update'}</td>
                            <td className="major-religion-answer-second-entity all-indicator-answers">{country2MajorReligion ?? 'Yet to Update'}</td>

                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">
                                    Major Religion Percentage
                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/major-religion-percentage-image.png"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image indicating the major religion percentage of any country" />
                                </div>
                            </td>
                            <td className="major-religion-percentage-answer-first-entity all-indicator-answers">
                                {country1MajorReligionPercentage ? `${country1MajorReligionPercentage} %` : 'Yet to Update'}
                            </td>
                            <td className="major-religion-percentage-answer-second-entity all-indicator-answers">
                                {country2MajorReligionPercentage ? `${country2MajorReligionPercentage} %` : 'Yet to Update'}
                            </td>

                        </tr>


                    </tbody>

                </table>

            </div>

            {country1Demonyms && country2Demonyms &&
                <div className="paragraph-for-pages-below-table">
                    <div className="para-for-pages-single-div">
                        <p>The people of <strong> <span className="first-entity-name-pages-paragraph">{country1} </span></strong>
                            are called <strong> <span className="demonyms-answer-first-entity">{country1Demonyms}</span></strong>, and the people of
                            <strong>
                                <span className="second-entity-name-pages-paragraph"> {country2}</span></strong> are
                            called
                            <strong> <span className="demonyms-answer-second-entity">{country2Demonyms}</span></strong>.
                        </p>

                    </div>

                </div>
            }

            <div className="geographical-factors-comparison-div2">

                <table className="indicators-first-entity-and-second-entity-div2">

                    <thead>

                        <tr className="first-tr">
                            <th>
                                <div className="heading-map-name-flag">
                                    <div className="right-indicator">
                                        <Image src="/images/indicators-right-image.png" fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            alt="Image representing an indicator" />
                                    </div>

                                    <div className="indicator-text">
                                        Indicators
                                    </div>

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
                                <div className="all-indicators">
                                    Currency Name
                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/currency-name-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Visual representation of currency name of any specific country" />
                                </div>
                            </td>
                            <td className="currency-name-answer-first-entity all-indicator-answers">{country1CurrencyName ?? 'Yet to Update'}</td>
                            <td className="currency-name-answer-second-entity all-indicator-answers">{country2CurrencyName ?? 'Yet to Update'}</td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">
                                    Currency Symbol
                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/currency-symbol-image.png"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Visual representation of currency symbol of any specific country" />
                                </div>
                            </td>
                            <td className="currency-symbol-answer-first-entity all-indicator-answers">{country1CurrencySymbol ?? 'Yet to Update'}</td>
                            <td className="currency-symbol-answer-second-entity all-indicator-answers">{country2CurrencySymbol ?? 'Yet to Update'}</td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">
                                    Driving Side
                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/driving-side-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Visual representation of driving side of any specific country" />
                                </div>
                            </td>
                            <td className="driving-side-answer-first-entity all-indicator-answers">{country1DrivingSide ?? 'Yet to Update'}</td>
                            <td className="driving-side-answer-second-entity all-indicator-answers">{country2DrivingSide ?? 'Yet to Update'}</td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">
                                    Calling Code
                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/calling-code-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image depicting calling code of any specific country" />
                                </div>
                            </td>
                            <td className="calling-code-answer-first-entity all-indicator-answers">{country1CallingCode ?? 'Yet to Update'}</td>
                            <td className="calling-code-answer-second-entity all-indicator-answers">{country2CallingCode ?? 'Yet to Update'}</td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">
                                    Internet TLD
                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/internet-tld-image.png"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image depicting Internet Top Level Domain also called tld of any specific country" />
                                </div>
                            </td>
                            <td className="internet-tld-answer-first-entity all-indicator-answers">{country1InternetTLD ?? 'Yet to Update'}</td>
                            <td className="internet-tld-answer-second-entity all-indicator-answers">{country2InternetTLD ?? 'Yet to Update'}</td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">
                                    Start of Week
                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/start-of-week-image.png"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                                        alt="Image showing the first working day of week of any specific country" />
                                </div>
                            </td>
                            <td className="week-start-answer-first-entity all-indicator-answers">{country1StartOfWeek ?? 'Yet to Update'}</td>
                            <td className="week-start-answer-second-entity all-indicator-answers">{country2StartOfWeek ?? 'Yet to Update'}</td>
                        </tr>

                        <tr>
                            <td className="basic-info">
                                <div className="all-indicators">
                                    ISO 3166 Code
                                </div>
                                <div className="basic-information-images">
                                    <Image src="/images/iso-3166-code-image.png" fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="Image depicting ISO 3166 Code of any specific country" />
                                </div>
                            </td>
                            <td className="iso-code-answer-first-entity all-indicator-answers">{country1ISO3166Code ?? 'Yet to Update'}</td>
                            <td className="iso-code-answer-second-entity all-indicator-answers">{country2ISO3166Code ?? 'Yet to Update'}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <AdsHeaderBanner />
        </>
    )
}

export default GeographicalFactors