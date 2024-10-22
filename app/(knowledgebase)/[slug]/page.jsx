import React from 'react';
import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import {
  allIndicators,
  countriesUniqueIndicators,
  indicatorsGeneral,
  indicatorValueType,
  randomIndicatorsList,
  statesUniqueIndicators,
} from '@/lib/array-list/indicators';
import { fetchIndicatorInfo } from '@/lib/database/fetch';
import {
  camelToTitleCase,
  toURLFormat,
  toCamelCase,
  formatNumberWithCommas,
} from '@/lib/format/format';
import {
  convertToISODate,
  currentYear,
  datePublished,
  getFormattedDate,
} from '@/lib/date-and-time/dateAndTime';
import Image from 'next/image';
import Link from 'next/link';
import SearchBox from '@/components/search-box/SearchBox';
import { getCountryByIP } from '@/lib/array-list/allCountriesList';
import Error404 from '@/components/error/Error404';
import Script from 'next/script';
import { getJsonLd } from '@/lib/helper';

// generateMetadata function
export async function generateMetadata({ params }) {
  const { slug } = params;
  const formattedIndicators = allIndicators.map((indicator) =>
    toURLFormat(indicator)
  );

  // Helper function to create error metadata
  function createErrorMetadata(errorDescription) {
    return {
      title: 'Error',
      description: errorDescription,
    };
  }

  //  Regular expression to match valid URLs for /slug page
  const pattern = new RegExp(
    `^(${formattedIndicators.join('|')})-(of-all-countries|of-all-us-states)$`
  );

  // Validate the slug against the pattern
  if (!pattern.test(slug)) {
    return createErrorMetadata(
      'Invalid URL. Please check the path and try again.'
    );
  }

  const isCountry = slug.includes('countries');
  const trimmedSlug = slug.replace(/-of-all-(countries|us-states)/, '');
  const indicator = toCamelCase(trimmedSlug);
  const titleCasedIndicator = camelToTitleCase(indicator, isCountry);

  // Validation for conflicting indicators between countries and US states
  if (
    (countriesUniqueIndicators.includes(indicator) &&
      slug.includes('us-states')) ||
    (statesUniqueIndicators.includes(indicator) && slug.includes('countries'))
  ) {
    return createErrorMetadata(
      'Invalid URL. Please check the path and try again.'
    );
  }

  try {
    const title = `${titleCasedIndicator} of All ${isCountry ? 'Countries' : 'US States'
      } (Updated: ${currentYear})`;
    const description = isCountry
      ? `Discover the ${titleCasedIndicator} worldwide. In this article, you can find a comprehensive list of ${titleCasedIndicator} of all countries in the world.`
      : `In this article, you can find a comprehensive list of ${titleCasedIndicator} of all 50 states in the United States of America.`;

    return {
      title,
      description
    };
  } catch (error) {
    return createErrorMetadata(
      'Invalid URL. Please check the path and try again.'
    );
  }
}

async function KnowledgeBase({ params }) {
  const { slug } = params;

  const formattedIndicators = allIndicators.map((indicator) =>
    toURLFormat(indicator)
  );

  //  Regular expression to match valid URLs for knowledgebase/slug page
  const pattern = new RegExp(
    `^(${formattedIndicators.join('|')})-(of-all-countries|of-all-us-states)$`
  );

  // Validate the slug against the pattern
  if (!pattern.test(slug)) {
    return <Error404 />;
  }

  const isCountry = slug.includes('countries');
  const trimmedSlug = slug.replace(/-of-all-(countries|us-states)/, '');

  let indicator = toCamelCase(trimmedSlug);

  if (
    countriesUniqueIndicators.includes(indicator) &&
    slug.includes('us-states')
  ) {
    return <Error404 />;
  }
  if (
    statesUniqueIndicators.includes(indicator) &&
    slug.includes('countries')
  ) {
    return <Error404 />;
  }

  const titleCasedIndicator = camelToTitleCase(indicator, isCountry);

  const indicatorType = indicatorsGeneral.includes(indicator)
    ? 'general'
    : 'standard';

  const realIndicator = indicator;

  indicator =
    indicator === 'unemploymentPercentageOfTotalLabourForce' ||
      indicator === 'employmentRate'
      ? isCountry
        ? 'unemploymentPercentageOfTotalLabourForce'
        : 'employmentRate'
      : indicator;

  try {
    let indicatorInfo = await fetchIndicatorInfo(
      isCountry ? 'country' : 'state',
      indicator,
      indicatorType
    );

    // majorReligion(percentage)
    let majorReligionPercentage, majorReligionWithPercentage;
    if (indicator === 'majorReligion') {
      majorReligionPercentage = await fetchIndicatorInfo(
        'country',
        'majorReligionPercentage',
        indicatorType
      );
      majorReligionWithPercentage = indicatorInfo.map((religionData) => {
        const percentageData = majorReligionPercentage.find(
          (percentage) => percentage.country === religionData.country
        );

        return {
          country: religionData.country,
          majorReligion: religionData.majorReligion,
          majorReligionPercentage: percentageData
            ? percentageData.majorReligionPercentage
            : null,
        };
      });
    }

    let currencySymbol, currencyDetails;
    if (indicator === 'currencyName' || indicator === 'unitValueInUSD') {
      currencySymbol = await fetchIndicatorInfo(
        'country',
        'currencySymbol',
        indicatorType
      );
      currencyDetails = indicatorInfo.map((currencyData) => {
        const symbolData = currencySymbol.find(
          (symbol) => symbol.country === currencyData.country
        );

        return {
          country: currencyData.country,
          currencyName: indicator === 'currencyName' ? currencyData.currencyName : '',
          unitValueInUSD: indicator === 'unitValueInUSD' ? currencyData.unitValueInUSD : '',
          currencySymbol: symbolData ? symbolData.currencySymbol : null,
        };
      });
    }

    if (
      realIndicator === 'unemploymentPercentageOfTotalLabourForce' &&
      !isCountry
    ) {
      indicatorInfo = indicatorInfo.map((value) => ({
        state: value.state,
        unemploymentPercentageOfTotalLabourForce: Math.abs(
          value.employmentRate - 100
        ),
      }));
    }

    if (realIndicator === 'employmentRate' && isCountry) {
      indicatorInfo = indicatorInfo.map((value) => ({
        country: value.country,
        employmentRate: Math.abs(
          value.unemploymentPercentageOfTotalLabourForce - 100
        ),
      }));
    }

    // Handle the case when indicatorInfo is null or undefined
    if (!indicatorInfo || indicatorInfo.length === 0) {
      // throw new Error('No data available for the selected indicator.');
      <Error404 />;
    }

    // Divide the data into chunks
    const chunkSize = isCountry ? 14 : 10;
    const sourceArray =
      indicator === 'majorReligion'
        ? majorReligionWithPercentage
        : indicator === 'currencyName' || indicator === 'unitValueInUSD'
          ? currencyDetails
          : indicatorInfo;
    const dividedArrays = Array.from(
      { length: Math.ceil(sourceArray?.length / chunkSize) },
      (_, i) => sourceArray?.slice(i * chunkSize, (i + 1) * chunkSize)
    );

    const randomList = randomIndicatorsList(
      indicator,
      indicatorType,
      isCountry
    );

    const formattedDate = getFormattedDate();

    const userCountry = await getCountryByIP();

    const title = `${titleCasedIndicator} of All ${isCountry ? 'Countries' : 'US States'
      } (Updated: ${currentYear})`;
    const description = isCountry
      ? `Discover the ${titleCasedIndicator} worldwide. In this article, you can find a comprehensive list of ${titleCasedIndicator} of all countries in the world.`
      : `In this article, you can find a comprehensive list of ${titleCasedIndicator} of all 50 states in the United States of America.`;

    const dateModified = convertToISODate(formattedDate);

    const jsonLd = getJsonLd(title, datePublished, dateModified, description)

    return (
      <>
        <SearchBox userCountry={userCountry} />

        <AdsHeaderBanner />

        <Script
          id="json-ld"
          type="application/ld+json"

          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="meta-title-primary-heading">
          <h1 className="entry-title">
            List of
            <span className="knowledgebase-indicator">
              {' '}
              {titleCasedIndicator}{' '}
            </span>
            of All {isCountry ? 'Countries' : 'US States'} (Updated:{' '}
            {currentYear})
          </h1>
        </div>

        <div className="published">
          <p>
            <b>Published: </b>
            Monday, 21th October 2024
          </p>
        </div>
        <div className="updated">
          <b>Recently Updated: </b>
          <span className="updated-timer">{formattedDate}</span>
        </div>

        <div className="paragraph-for-pages-below-table">
          <div className="para-for-pages-single-div">
            <p>
              In this page, you will find a list of
              <span className="knowledgebase-indicator">
                {' '}
                {titleCasedIndicator}{' '}
              </span>
              of all {isCountry ? 'countries in the world' : 'US states'}. Most
              species in the list are officially designated and some are in the
              yet to officially recognize status.
            </p>

            <p>
              We always try to give you the latest data, but sometimes mistakes
              might occur. If you believe some content on our site is not up to
              date, please let us know by emailing us at
              <span className="emailAddress"><a href="mailto:info.comparedoo@gmail.com" className="emailAddress">info.comparedoo@gmail.com</a></span>
            </p>
          </div>
        </div>

        <AdsHeaderBanner />

        <div className="economic-factors-comparison">
          <h2 className="pages-h2">
            List of all {isCountry ? 'Countries' : 'US States'}&apos;
            <span className="knowledgebase-indicator">
              {' '}
              {titleCasedIndicator}
            </span>
          </h2>
        </div>

        {dividedArrays.map((arr, index) => {
          return (
            <React.Fragment key={index}>
              <div className="economic-factors-comparison-div1">
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

                          <div className="indicator-text">
                            All {isCountry ? 'Countries' : 'States'}
                          </div>

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
                              src={`/images/${trimmedSlug === 'state-animal' ? 'national-animal' : trimmedSlug === 'state-bird' ? 'national-bird' : trimmedSlug === 'state-flower' ? 'national-flower' : trimmedSlug === 'state-sport' ? 'national-sport' : trimmedSlug === 'state-colors' ? 'national-colors' : trimmedSlug === 'official-websites' ? 'internet-tld' : trimmedSlug === 'state-anthem-native' ? 'national-anthem-native' : trimmedSlug === 'state-anthem-english' ? 'national-anthem-english' : trimmedSlug}-image.png`}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              alt={`Image representing the ${titleCasedIndicator} of all ${isCountry ? 'Countries' : 'US States'
                                }`}
                            />
                          </div>

                          <div className="first-entity-name-pages-comparison">
                            {titleCasedIndicator}
                          </div>

                          <div className="first-entity-flag-pages-comparison">
                            <Image
                              src={`/images/${trimmedSlug === 'state-animal' ? 'national-animal' : trimmedSlug === 'state-bird' ? 'national-bird' : trimmedSlug === 'state-flower' ? 'national-flower' : trimmedSlug === 'state-sport' ? 'national-sport' : trimmedSlug === 'state-colors' ? 'national-colors' : trimmedSlug === 'official-websites' ? 'internet-tld' : trimmedSlug === 'state-anthem-native' ? 'national-anthem-native' : trimmedSlug === 'state-anthem-english' ? 'national-anthem-english' : trimmedSlug}-image.png`}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              alt={`Image representing the ${titleCasedIndicator} of all ${isCountry ? 'Countries' : 'US States'
                                }`}
                            />
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {arr.map((obj, index) => {
                      return (
                        <tr key={index}>
                          <td className="basic-info-knowledgebase">
                            <div className="all-indicators-knowledgebase">
                              <div className="country-name">
                                {obj[isCountry ? 'country' : 'state']}
                              </div>
                            </div>
                            <div className="basic-information-images">
                              <Image
                                src={`/images/${toURLFormat(
                                  obj[isCountry ? 'country' : 'state']
                                )}-flag-small.png`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                alt={`Image illustrating the flag of ${obj[isCountry ? 'country' : 'state']
                                  }`}
                              />
                            </div>
                          </td>
                          <td className="afghanistan-AF-data">
                            {obj[realIndicator] ? (
                              <>
                                {indicator === 'majorReligion'
                                  ? `${formatNumberWithCommas(
                                    obj[realIndicator]
                                  )} ${indicatorValueType(
                                    realIndicator,
                                    isCountry
                                  )} (${obj['majorReligionPercentage']}%)`
                                  : indicator === 'currencyName'
                                    ? `${obj[realIndicator]} (${obj['currencySymbol']})`
                                    : realIndicator === 'HDI'
                                      ? obj[realIndicator]
                                      : realIndicator === 'unitValueInUSD' ? `1 ${obj['currencySymbol']} = ${obj[realIndicator]} USD` : (
                                        <>
                                          {formatNumberWithCommas(obj[realIndicator])}{" "}
                                          {indicatorValueType(realIndicator, isCountry)}
                                        </>
                                      )
                                }
                              </>
                            ) : (
                              'Yet to Update'
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <AdsHeaderBanner />
            </React.Fragment>
          );
        })}

        <div className="last-paragraph-of-the-page">
          <div className="last-para-single-div">
            <p>
              We hope you enjoyed the detailed guide on{' '}
              <strong>
                the List of
                <span className="knowledgebase-indicator">
                  {' '}
                  {titleCasedIndicator}{' '}
                </span>
                of All {isCountry ? 'Countries' : 'US States'}.
              </strong>
            </p>
            <p>
              For more side-by-side comparsion between Countries, States and Cities, you can use the search box above,
              and for knowledgebase content, click the links below.
            </p>
            <p>
              The Comparedoo.com family sincerely appreciates your time with us.
              We look forward to seeing you on our other pages.
            </p>
          </div>
        </div>

        <div className="individual-country-vs-others-list-boxes-grids">
          {randomList.map((value, index) => {
            return (
              <Link
                href={`/${toURLFormat(value)}-of-all-${isCountry ? 'countries' : 'us-states'
                  }`}
                key={index}
              >
                <div className="individual-country-vs-others-map-name-flag">
                  <div className="first-entity-map-pages-comparison">
                    <Image
                      src={`/images/${toURLFormat(value) === 'state-animal' ? 'national-animal' : toURLFormat(value) === 'state-bird' ? 'national-bird' : toURLFormat(value) === 'state-flower' ? 'national-flower' : toURLFormat(value) === 'state-sport' ? 'national-sport' : toURLFormat(value) === 'state-colors' ? 'national-colors' : toURLFormat(value) === 'official-websites' ? 'internet-tld' : toURLFormat(value) === 'state-anthem-native' ? 'national-anthem-native' : toURLFormat(value) === 'state-anthem-english' ? 'national-anthem-english' : toURLFormat(value)}-image.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Image representing the ${camelToTitleCase(
                        value
                      )} of all ${isCountry ? 'Countries' : 'US States'}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {`${camelToTitleCase(value)} of all ${isCountry ? 'Countries' : 'US States'}`}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <AdsHeaderBanner />
      </>
    );
  } catch (error) {
    // Display an error message when there is no data or an error occurs
    return (
      <div>
        {/* <h1 className="entry-title">Error</h1>
        <p>{error.message || 'An error occurred while fetching data.'}</p> */}
        <Error404 />
      </div>
    );
  }
}

export default KnowledgeBase;
