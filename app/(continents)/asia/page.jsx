import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner'
import CountriesListAsia from '@/components/pages/continents/asia/CountriesListAsia'
import MapAndDescriptionAsia from '@/components/pages/continents/asia/MapAndDescriptionAsia'
import SearchBox from '@/components/search-box/SearchBox';
import { getCountryByIP } from '@/lib/array-list/allCountriesList';
import { currentYear, getFormattedDate } from '@/lib/date-and-time/dateAndTime';

// generateMetadata function
export async function generateMetadata() {
    const title = `List of All Countries in Asia (Updated: ${currentYear})`
    const description = 'A complete list of countries in Asia, including basic data on their geography, population, and capitals.'
  
    return {
      title,
      description,
    };
  }

async function Asia() {
    const formattedDate = getFormattedDate()
    const userCountry = await getCountryByIP()
    
    return (
        <>
            <SearchBox userCountry={userCountry} />

            <AdsHeaderBanner />

            <div className="meta-title-primary-heading">
                <h1>
                    List of all countries in [<span className="continent-name">Asia</span>]

                </h1>
            </div>

            <div className="published">
                <p><b>Published: </b> Monday, 8th July 2024</p>
            </div>
            <div className="updated">
                <b>Recently Updated:</b> <span className="updated-timer">{formattedDate}</span>
            </div>

            <MapAndDescriptionAsia />
            <CountriesListAsia />
        </>
    )
}

export default Asia