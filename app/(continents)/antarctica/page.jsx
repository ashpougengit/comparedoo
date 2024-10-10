import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner'
import AllCountriesAntarctica from '@/components/pages/continents/antarctica/AllCountriesAntarctica'
import InterestingFactsAntarctica from '@/components/pages/continents/antarctica/InterestingFactsAntarctica'
import MapAndDescriptionAntarctica from '@/components/pages/continents/antarctica/MapAndDescriptionAntarctica'
import SearchBox from '@/components/search-box/SearchBox';
import { getCountryByIP } from '@/lib/array-list/allCountriesList';
import { convertToISODate, datePublished, getFormattedDate } from '@/lib/date-and-time/dateAndTime';

// generateMetadata function
export async function generateMetadata() {
    const title = `Interesting Facts about Antarctica`
    const description = 'Uncover intriguing facts about Antarctica, from its icy landscapes to the rare species that inhabit it.'
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

async function Antarctica() {
    const formattedDate = getFormattedDate()
    const userCountry = await getCountryByIP()

    return (
        <>
            <SearchBox userCountry={userCountry} />

            <AdsHeaderBanner />

            <div className="meta-title-primary-heading">
                <h1 className='entry-title' >
                    Antarctica
                </h1>
            </div>

            <div className="published">
                <p><b>Published: </b> Thursday, 10th October 2024</p>
            </div>
            <div className="updated">
                <b>Recently Updated:</b> <span className="updated-timer">{formattedDate}</span>
            </div>

            <MapAndDescriptionAntarctica />

            <InterestingFactsAntarctica />

            <AllCountriesAntarctica />

        </>
    )
}

export default Antarctica