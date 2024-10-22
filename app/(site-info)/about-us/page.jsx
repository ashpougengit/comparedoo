import AboutUsContent from '@/components/pages/site-info/about-us/AboutUsContent'
import SearchBox from '@/components/search-box/SearchBox'
import { getCountryByIP } from '@/lib/array-list/allCountriesList'
import { convertToISODate, datePublished, getFormattedDate } from '@/lib/date-and-time/dateAndTime'
import { getJsonLd } from '@/lib/helper'
import Script from 'next/script'

const title = 'About Us (Comparedoo.com)'
const description = 'Learn more about our mission, history, and commitment to serving our customers on our About Us page.'

// generateMetadata function
export async function generateMetadata() {
    return {
        title,
        description
    }
}

async function AboutUs() {
    const formattedDate = getFormattedDate()
    const userCountry = await getCountryByIP()

    const dateModified = convertToISODate(formattedDate)

    const jsonLd = getJsonLd(title, datePublished, dateModified, description)

    return (
        <>
            <SearchBox userCountry={userCountry} />

            <Script
                id="json-ld"
                type="application/ld+json"

                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="meta-title-primary-heading">
                <h1 className='entry-title' >
                    About Us (Comparedoo.com)
                </h1>
            </div>

            <div className="published">
                <p><b>Published: </b> Tuesday, 22th October 2024</p>
            </div>
            <div className="updated">
                <b>Recently Updated:</b> <span className="updated-timer">{formattedDate}</span>
            </div>

            <AboutUsContent />

        </>
    )
}

export default AboutUs