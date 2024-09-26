import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import SearchBox from '@/components/search-box/SearchBox';
import { getCountryByIP } from '@/lib/array-list/allCountriesList';
import {
  commonIndicators,
  countriesUniqueIndicators,
  KnowledgebaseIndicators,
  statesUniqueIndicators,
} from '@/lib/array-list/indicators';
import { getFormattedDate } from '@/lib/date-and-time/dateAndTime';
import { camelToTitleCase, toURLFormat } from '@/lib/format/format';
import Image from 'next/image';
import Link from 'next/link';

async function KnowledgebaseHome() {
  const formattedDate = getFormattedDate();
  const userCountry = await getCountryByIP();

  return (
    <>
      <AdsHeaderBanner />

      <SearchBox userCountry={userCountry} />

      <div className="meta-title-primary-heading">
        <h1>Knowledgebase Articles</h1>
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
                layout="fill"
                objectFit="contain"
                src={`/images/${toURLFormat(indicator)}-country-thumbnail.png`}
                alt={`${toURLFormat(indicator)} Country Thumbnail Image`}
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
      </div>

      <div className="knowledgebase-container">
        {commonIndicators.map((indicator, index) => (
          <div className="knowledgebase-div" key={index}>
            <div className="knowledgebase-thumbnail-image">
              <Image
                layout="fill"
                objectFit="contain"
                src={`/images/${toURLFormat(indicator)}-country-thumbnail.png`}
                alt={`${toURLFormat(indicator)} Country Thumbnail Image`}
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
      </div>

      <div className="knowledgebase-container">
        {commonIndicators.map((indicator, index) => (
          <div className="knowledgebase-div" key={index}>
            <div className="knowledgebase-thumbnail-image">
              <Image
                layout="fill"
                objectFit="contain"
                src={`/images/${toURLFormat(indicator)}-state-thumbnail.png`}
                alt={`${toURLFormat(indicator)} US State Thumbnail Image`}
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

      <div className="knowledgebase-container">
        {statesUniqueIndicators.map((indicator, index) => (
          <div className="knowledgebase-div" key={index}>
            <div className="knowledgebase-thumbnail-image">
              <Image
                layout="fill"
                objectFit="contain"
                src={`/images/${toURLFormat(indicator)}-state-thumbnail.png`}
                alt={`${toURLFormat(indicator)} US State Thumbnail Image`}
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
              href={`/${toURLFormat(indicator)}/of-all-us-states`}
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
