import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import SearchBox from '@/components/search-box/SearchBox';
import { getCountryByIP } from '@/lib/array-list/allCountriesList';
import {
  commonIndicators,
  countriesUniqueIndicators,
  statesUniqueIndicators,
} from '@/lib/array-list/indicators';
import { convertToISODate, datePublished, getFormattedDate } from '@/lib/date-and-time/dateAndTime';
import { camelToTitleCase, toTitleCase, toURLFormat } from '@/lib/format/format';
import { getJsonLd } from '@/lib/helper';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

const title = 'Knowledgebase Articles'
const description = 'In this section of the website, you will get to read various knowledgeable articles explained in the listicle form.'

// generateMetadata function
export async function generateMetadata() {
  return {
    title,
    description
  }
}

async function KnowledgebaseHome() {
  const formattedDate = getFormattedDate();
  const userCountry = await getCountryByIP();

  const dateModified = convertToISODate(formattedDate)

  const jsonLd = getJsonLd(title, datePublished, dateModified, description)

  return (
    <>
      <AdsHeaderBanner />

      <SearchBox userCountry={userCountry} />

      <Script
        id="json-ld"
        type="application/ld+json"

        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="meta-title-primary-heading">
        <h1 className='entry-title' >Knowledgebase Articles</h1>
      </div>

      <div className="published">
        <p>
          <b>Published: </b>
          Thursday, 10th October 2024
        </p>
      </div>
      <div className="updated">
        <b>Recently Updated: </b>
        <span className="updated-timer">{formattedDate}</span>
      </div>

      <div className="knowledgebase-container">
        {countriesUniqueIndicators.map((indicator, index) => (
          <div className="knowledgebase-div" key={index}>
            <div className="knowledgebase-thumbnail-image">
              <Image
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={`/images/${toURLFormat(indicator)}-country-thumbnail.png`}
                alt={`${toTitleCase(indicator)} Country Thumbnail Image`}
              />
            </div>

            <div className="knowledgebase-link">
              <h2>
                List of all Countries&apos;{' '}
                <span className="knowledgebase-indicator">
                  {camelToTitleCase(indicator)}
                </span>
              </h2>
            </div>

            <Link
              href={`/${toURLFormat(indicator)}-of-all-countries`}
              className="read-here-link"
            >
              Read Here...
            </Link>
          </div>
        ))}
        {commonIndicators.map((indicator, index) => (
          <div className="knowledgebase-div" key={index}>
            <div className="knowledgebase-thumbnail-image">
              <Image
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={`/images/${toURLFormat(indicator)}-country-thumbnail.png`}
                alt={`${toTitleCase(indicator)} Country Thumbnail Image`}
              />
            </div>

            <div className="knowledgebase-link">
              <h2>
                List of all Countries&apos;{' '}
                <span className="knowledgebase-indicator">
                  {camelToTitleCase(indicator) === 'Unemployment Percentage of Total Labour Force' ? 'Unemployment Percentage' : camelToTitleCase(indicator)}
                </span>
              </h2>
            </div>

            <Link
              href={`/${toURLFormat(indicator)}-of-all-countries`}
              className="read-here-link"
            >
              Read Here...
            </Link>
          </div>
        ))}
        {commonIndicators.map((indicator, index) => (
          <div className="knowledgebase-div" key={index}>
            <div className="knowledgebase-thumbnail-image">
              <Image
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={`/images/${toURLFormat(indicator)}-state-thumbnail.png`}
                alt={`${toTitleCase(indicator)} US State Thumbnail Image`}
              />
            </div>

            <div className="knowledgebase-link">
              <h2>
                List of all US States&apos;{' '}
                <span className="knowledgebase-indicator">
                  {camelToTitleCase(indicator) === 'Unemployment Percentage of Total Labour Force' ? 'Unemployment Percentage' : camelToTitleCase(indicator)}
                </span>
              </h2>
            </div>

            <Link
              href={`/${toURLFormat(indicator)}-of-all-us-states`}
              className="read-here-link"
            >
              Read Here...
            </Link>
          </div>
        ))}
        {statesUniqueIndicators.map((indicator, index) => (
          <div className="knowledgebase-div" key={index}>
            <div className="knowledgebase-thumbnail-image">
              <Image
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={`/images/${toURLFormat(indicator)}-state-thumbnail.png`}
                alt={`${toTitleCase(indicator)} US State Thumbnail Image`}
              />
            </div>

            <div className="knowledgebase-link">
              <h2>
                List of all US States&apos;{' '}
                <span className="knowledgebase-indicator">
                  {camelToTitleCase(indicator)}
                </span>
              </h2>
            </div>

            <Link
              href={`/${toURLFormat(indicator)}-of-all-us-states`}
              className="read-here-link"
            >
              Read Here...
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default KnowledgebaseHome;
