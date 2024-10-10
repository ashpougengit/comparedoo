import TermsAndConditionsContent from '@/components/pages/site-info/terms-and-conditions/TermsAndConditionsContent'
import SearchBox from '@/components/search-box/SearchBox'
import { getCountryByIP } from '@/lib/array-list/allCountriesList'
import { convertToISODate, datePublished, getFormattedDate } from '@/lib/date-and-time/dateAndTime'

// generateMetadata function
export async function generateMetadata() {
    const title = 'Terms and Conditions (Comparedoo.com)'
    const description = 'Understand the terms under which you can use our website by reviewing our Terms and Conditions.'
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

async function TermsAndConditions() {
    const formattedDate = getFormattedDate()
    const userCountry = await getCountryByIP()

    return (
        <>
            <SearchBox userCountry={userCountry} />

            <div className="meta-title-primary-heading">
                <h1 className='entry-title' >
                    Terms and Conditions (Comparedoo.com)
                </h1>
            </div>
            <div className="published">
                <p><b>Published: </b> Thursday, 10th October 2024</p>
            </div>
            <div className="updated">
                <b>Recently Updated:</b> <span className="updated-timer">{formattedDate}</span>
            </div>

            <TermsAndConditionsContent />
        </>
    )
}

export default TermsAndConditions