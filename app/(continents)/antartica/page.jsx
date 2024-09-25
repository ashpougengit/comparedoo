import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner'
import AllCountriesAntartica from '@/components/pages/continents/antartica/AllCountriesAntartica'
import InterestingFactsAntartica from '@/components/pages/continents/antartica/InterestingFactsAntartica'
import MapAndDescriptionAntartica from '@/components/pages/continents/antartica/MapAndDescriptionAntartica'
import SearchBox from '@/components/search-box/SearchBox';
import { getCountryByIP } from '@/lib/array-list/allCountriesList';
import { getFormattedDate } from '@/lib/date-and-time/dateAndTime';

// generateMetadata function
export async function generateMetadata() {
    const title = `Interesting Facts about Antarctica`
    const description = 'Uncover intriguing facts about Antarctica, from its icy landscapes to the rare species that inhabit it.'

    return {
        title,
        description,
    };
}

async function Antartica() {
    const formattedDate = getFormattedDate()
    const userCountry = await getCountryByIP()
    
    return (
        <>
            <SearchBox userCountry={userCountry} />

            <AdsHeaderBanner />

            <div className="meta-title-primary-heading">
                <h1>
                    Antarctica
                </h1>
            </div>

            <div className="published">
                <p><b>Published: </b> Monday, 8th July 2024</p>
            </div>
            <div className="updated">
                <b>Recently Updated:</b> <span className="updated-timer">{formattedDate}</span>
            </div>

            <MapAndDescriptionAntartica />

            <InterestingFactsAntartica />

            <AllCountriesAntartica />

        </>
    )
}

export default Antartica