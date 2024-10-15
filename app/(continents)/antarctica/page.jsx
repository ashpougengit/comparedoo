import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner'
import AllCountriesAntarctica from '@/components/pages/continents/antarctica/AllCountriesAntarctica'
import AllUSStates from '@/components/pages/continents/antarctica/AllUSStates';
import InterestingFactsAntarctica from '@/components/pages/continents/antarctica/InterestingFactsAntarctica'
import MapAndDescriptionAntarctica from '@/components/pages/continents/antarctica/MapAndDescriptionAntarctica'
import SearchBox from '@/components/search-box/SearchBox';
import { getCountryByIP } from '@/lib/array-list/allCountriesList';
import { convertToISODate, datePublished, getFormattedDate } from '@/lib/date-and-time/dateAndTime';
import { getJsonLd } from '@/lib/helper';
import Script from 'next/script';

const title = `Interesting Facts about Antarctica`
const description = 'Uncover intriguing facts about Antarctica, from its icy landscapes to the rare species that inhabit it.'

// generateMetadata function
export async function generateMetadata() {
    return {
        title,
        description
    }
}

async function Antarctica() {
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
                    Antarctica
                </h1>
            </div>

            <div className="published">
                <p><b>Published: </b> Tuesday, 15th October 2024</p>
            </div>
            <div className="updated">
                <b>Recently Updated:</b> <span className="updated-timer">{formattedDate}</span>
            </div>

            <MapAndDescriptionAntarctica />

            <InterestingFactsAntarctica />

            <AllCountriesAntarctica />

            <AllUSStates />

        </>
    )
}

export default Antarctica