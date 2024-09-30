import AboutUsContent from '@/components/pages/site-info/about-us/AboutUsContent'
import SearchBox from '@/components/search-box/SearchBox'
import { getCountryByIP } from '@/lib/array-list/allCountriesList'
import { convertToISODate, datePublished, getFormattedDate } from '@/lib/date-and-time/dateAndTime'

// generateMetadata function
export async function generateMetadata() {
    const title = 'About Us (Comparedoo.com)'
    const description = 'Learn more about our mission, history, and commitment to serving our customers on our About Us page.'
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

async function AboutUs() {
    const formattedDate = getFormattedDate()
    const userCountry = await getCountryByIP()

    return (
        <>
            <SearchBox userCountry={userCountry} />

            <div className="meta-title-primary-heading">
                <h1 className='entry-title' >
                    About Us (Comparedoo.com)
                </h1>
            </div>

            <div className="published">
                <p><b>Published: </b> Monday, 8th July 2024</p>
            </div>
            <div className="updated">
                <b>Recently Updated:</b> <span className="updated-timer">{formattedDate}</span>
            </div>

            <AboutUsContent />

        </>
    )
}

export default AboutUs