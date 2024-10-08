import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner'
import CountriesListNorthAmerica from '@/components/pages/continents/north-america/CountriesListNorthAmerica'
import MapAndDescriptionNorthAmerica from '@/components/pages/continents/north-america/MapAndDescriptionNorthAmerica'
import SearchBox from '@/components/search-box/SearchBox';
import { getCountryByIP } from '@/lib/array-list/allCountriesList';
import { convertToISODate, currentYear, datePublished, getFormattedDate } from '@/lib/date-and-time/dateAndTime';

// generateMetadata function
export async function generateMetadata() {
  const title = `List of All Countries in North America (Updated: ${currentYear})`
  const description = 'A complete list of countries in North America, including basic data on their geography, population, and capitals.'
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

async function NorthAmerica() {
  const formattedDate = getFormattedDate()
  const userCountry = await getCountryByIP()

  return (
    <>
      <SearchBox userCountry={userCountry} />

      <AdsHeaderBanner />

      <div className="meta-title-primary-heading">
        <h1 className='entry-title' >
          List of all countries in [<span className="continent-name">North America</span>]

        </h1>
      </div>

      <div className="published">
        <p><b>Published: </b> Thursday, 10th October 2024</p>
      </div>
      <div className="updated">
        <b>Recently Updated:</b> <span className="updated-timer">{formattedDate}</span>
      </div>

      <MapAndDescriptionNorthAmerica />
      <CountriesListNorthAmerica />
    </>
  )
}

export default NorthAmerica