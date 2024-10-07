import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import Image from 'next/image';

function GeographicalFactors({ generalInfo, countryURLCase }) {
  const country = generalInfo.country;
  const largestCity = generalInfo.largestCity;
  const demonyms = generalInfo.demonyms;
  const officialLanguages = generalInfo.officialLanguages;
  const governmentStatus = generalInfo.governmentStatus;
  const majorReligion = generalInfo.majorReligion;
  const majorReligionPercentage = generalInfo.majorReligionPercentage;
  const currencyName = generalInfo.currencyName;
  const currencySymbol = generalInfo.currencySymbol;
  const drivingSide = generalInfo.drivingSide;
  const callingCode = generalInfo.callingCode;
  const internetTLD = generalInfo.internetTLD;
  const ISO3166Code = generalInfo.ISO3166Code;
  const startOfWeek = generalInfo.startOfWeek;

  return (
    <>
      <AdsHeaderBanner />

      <div className="geographical-factors">
        <h2 className="pages-h2">Geographical Factors Information</h2>
      </div>

      <div className="geographical-factors-comparison-div1">
        <table className="indicators-single-country-divs">
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
                      src={`/images/${countryURLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Pictorial representation of map of ${countryURLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {country}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${countryURLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                <div className="all-indicators">Largest City</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/largest-city-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Visual representation of the Largest City of any country"
                  />
                </div>
              </td>
              <td className="largest-city-answer-first-entity all-indicator-answers">
                {largestCity ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Demonyms</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/demonyms-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image depicting demonyms of any specific country"
                  />
                </div>
              </td>
              <td className="demonyms-answer-first-entity all-indicator-answers">
                {demonyms ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Official Languages</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/official-language-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image depicting the official languages of any specific country"
                  />
                </div>
              </td>
              <td className="official-languages-answer-first-entity all-indicator-answers">
                {officialLanguages ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Government Status</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/government-status-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image indicating the government status of any country"
                  />
                </div>
              </td>
              <td className="government-status-answer-first-entity all-indicator-answers">
                {governmentStatus ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Major Religion</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/major-religion-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image indicating the major religion of any country"
                  />
                </div>
              </td>
              <td className="major-religion-answer-first-entity all-indicator-answers">
                {majorReligion ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Major Religion Percentage</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/major-religion-percentage-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image indicating the major religion percentage of any country"
                  />
                </div>
              </td>
              <td className="major-religion-percentage-answer-first-entity all-indicator-answers">
                {majorReligionPercentage
                  ? `${majorReligionPercentage} %`
                  : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="paragraph-for-pages-below-table">
        <div className="para-for-pages-single-div">
          {demonyms && demonyms !== 'Yet to Update' && (
            <p>
              The people of{' '}
              <span className="first-entity-name-pages-paragraph">
                {' '}
                {country}{' '}
              </span>
              are called{' '}
              <strong>
                {' '}
                <span className="demonyms-answer-first-entity">
                  {' '}
                  {demonyms}
                </span>
              </strong>
              .
            </p>
          )}
          {majorReligion && majorReligion !== 'Yet to Update' && (
            <p>
              The major religion of{' '}
              <span className="first-entity-name-pages-paragraph">
                {' '}
                {country}{' '}
              </span>{' '}
              is{' '}
              <strong>
                <span className="major-religion-answer-first-entity">
                  {' '}
                  {majorReligion}
                </span>
              </strong>
              . Around{' '}
              <span className="major-religion-percentage-answer-first-entity">
                {' '}
                {majorReligionPercentage}%{' '}
              </span>{' '}
              of people in{' '}
              <span className="first-entity-name-pages-paragraph">
                {' '}
                {country}{' '}
              </span>{' '}
              follow{' '}
              <span className="major-religion-answer-first-entity">
                {' '}
                {majorReligion}
              </span>
              .
            </p>
          )}
        </div>
      </div>

      <div className="geographical-factors-comparison-div2">
        <table className="indicators-single-country-divs">
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
                      src={`/images/${countryURLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Pictorial representation of map of ${countryURLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {country}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${countryURLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                <div className="all-indicators">Currency Name</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/currency-name-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Visual representation of currency name of any specific country"
                  />
                </div>
              </td>
              <td className="currency-name-answer-first-entity all-indicator-answers">
                {currencyName ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Currency Symbol</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/currency-symbol-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Visual representation of currency symbol of any specific country"
                  />
                </div>
              </td>
              <td className="currency-symbol-answer-first-entity all-indicator-answers">
                {currencySymbol ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Driving Side</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/driving-side-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Visual representation of driving side of any specific country"
                  />
                </div>
              </td>
              <td className="driving-side-answer-first-entity all-indicator-answers">
                {drivingSide ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Calling Code</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/calling-code-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image depicting calling code of any specific country"
                  />
                </div>
              </td>
              <td className="calling-code-answer-first-entity all-indicator-answers">
                {callingCode ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Internet TLD</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/internet-tld-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image depicting Internet Top Level Domain also called tld of any specific country"
                  />
                </div>
              </td>
              <td className="internet-tld-answer-first-entity all-indicator-answers">
                {internetTLD ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Start of Week</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/start-of-week-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image showing the first working day of week of any specific country"
                  />
                </div>
              </td>
              <td className="week-start-answer-first-entity all-indicator-answers">
                {startOfWeek ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">ISO 3166 Code</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/iso-3166-code-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image depicting ISO 3166 Code of any specific country"
                  />
                </div>
              </td>
              <td className="iso-code-answer-first-entity all-indicator-answers">
                {ISO3166Code ?? 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default GeographicalFactors;
