import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner'
import CountriesListOceania from '@/components/pages/continents/oceania/CountriesListOceania'
import MapAndDescriptionOceania from '@/components/pages/continents/oceania/MapAndDescriptionOceania'
import SearchBox from '@/components/search-box/SearchBox';
import { getCountryByIP } from '@/lib/array-list/allCountriesList';
import { convertToISODate, currentYear, datePublished, getFormattedDate } from '@/lib/date-and-time/dateAndTime';
import { getJsonLd } from '@/lib/helper';
import Script from 'next/script';

const title = `List of All Countries in Oceania (Updated: ${currentYear})`
const description = 'A complete list of countries in Oceania, including basic data on their geography, population, and capitals.'

// generateMetadata function
export async function generateMetadata() {
  return {
    title,
    description
  }
}

async function Oceania() {
  const formattedDate = getFormattedDate()
  const userCountry = await getCountryByIP()

  const dateModified = convertToISODate(formattedDate)

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
        <h1 className='entry-title' >
          List of all countries in [<span className="continent-name">Oceania</span>]
        </h1>
      </div>

      <div className="published">
        <p><b>Published: </b> Thursday, 10th October 2024</p>
      </div>
      <div className="updated">
        <b>Recently Updated:</b> <span className="updated-timer">{formattedDate}</span>
      </div>

      <MapAndDescriptionOceania />

      <CountriesListOceania />
    </>
  )
}

export default Oceania