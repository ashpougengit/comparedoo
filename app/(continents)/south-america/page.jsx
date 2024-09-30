import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner'
import CountriesListSouthAmerica from '@/components/pages/continents/south-america/CountriesListSouthAmerica'
import MapAndDescriptionSouthAmerica from '@/components/pages/continents/south-america/MapAndDescriptionSouthAmerica'
import SearchBox from '@/components/search-box/SearchBox';
import { getCountryByIP } from '@/lib/array-list/allCountriesList';
import { convertToISODate, currentYear, datePublished, getFormattedDate } from '@/lib/date-and-time/dateAndTime';

// generateMetadata function
export async function generateMetadata() {
  const title = `List of All Countries in South America (Updated: ${currentYear})`
  const description = 'A complete list of countries in South America, including basic data on their geography, population, and capitals.'
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

async function SouthAmerica() {
  const formattedDate = getFormattedDate()
  const userCountry = await getCountryByIP()

  return (
    <>
      <SearchBox userCountry={userCountry} />

      <AdsHeaderBanner />

      <div className="meta-title-primary-heading">
        <h1 className='entry-title' >
          List of all countries in [<span className="continent-name">South America</span>]
        </h1>
      </div>

      <div className="published">
        <p><b>Published: </b> Monday, 8th July 2024</p>
      </div>
      <div className="updated">
        <b>Recently Updated:</b> <span className="updated-timer">{formattedDate}</span>
      </div>

      <MapAndDescriptionSouthAmerica />
      <CountriesListSouthAmerica />
    </>
  )
}

export default SouthAmerica