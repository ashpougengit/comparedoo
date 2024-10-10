import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import SearchBox from '@/components/search-box/SearchBox';
import { getCountryByIP } from '@/lib/array-list/allCountriesList';
import {
  commonIndicators,
  countriesUniqueIndicators,
  statesUniqueIndicators,
} from '@/lib/array-list/indicators';
import { convertToISODate, datePublished, getFormattedDate } from '@/lib/date-and-time/dateAndTime';
import { camelToTitleCase, titleCased, toURLFormat } from '@/lib/format/format';
import Image from 'next/image';
import Link from 'next/link';

// generateMetadata function
export async function generateMetadata() {
  const title = 'Knowledgebase Articles'
  const description = 'In this section of the website, you will get to read various knowledgeable articles explained in the listicle form.'
  const formattedDate = getFormattedDate()
  const dateModified = convertToISODate(formattedDate)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${title}`,
    "publisher": {
      "@type": "Organization",
      "name": "Comparedoo.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.comparedoo.com/comparedoo-logo"
      }
    },
    "datePublished": `${datePublished}`,
    "dateModified": `${dateModified}`,
    "description": `${description}`
  }

  return {
    title,
    description,
    // Inject the JSON-LD script in metadata
    additionalMetaTags: [
      {
        tagName: 'script',
        innerHTML: JSON.stringify(jsonLd),
        type: 'application/ld+json',
        key: 'jsonld',
      },
    ],
  }
}

async function KnowledgebaseHome() {
  const formattedDate = getFormattedDate();
  const userCountry = await getCountryByIP();

  return (
    <>
      <AdsHeaderBanner />

      <SearchBox userCountry={userCountry} />

      <div className="meta-title-primary-heading">
        <h1 className='entry-title' >Knowledgebase Articles</h1>
      </div>

      <div className="published">
        <p>
          <b>Published: </b>
          Monday, 8th July 2024
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
                alt={`${titleCased(indicator)} Country Thumbnail Image`}
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
                alt={`${titleCased(indicator)} Country Thumbnail Image`}
              />
            </div>

            <div className="knowledgebase-link">
              <h2>
                List of all Countries&apos;{' '}
                <span className="knowledgebase-indicator">
                  {camelToTitleCase(indicator) === 'Unemployment Percentage Of Total Labour Force' ? 'Unemployment Percentage' : camelToTitleCase(indicator)}
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
                alt={`${titleCased(indicator)} US State Thumbnail Image`}
              />
            </div>

            <div className="knowledgebase-link">
              <h2>
                List of all US States&apos;{' '}
                <span className="knowledgebase-indicator">
                  {camelToTitleCase(indicator) === 'Unemployment Percentage Of Total Labour Force' ? 'Unemployment Percentage' : camelToTitleCase(indicator)}
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
                alt={`${titleCased(indicator)} US State Thumbnail Image`}
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
