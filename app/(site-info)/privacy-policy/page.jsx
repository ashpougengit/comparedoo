import PrivacyPolicyContent from '@/components/pages/site-info/privacy-policy/PrivacyPolicyContent'
import SearchBox from '@/components/search-box/SearchBox'
import { getCountryByIP } from '@/lib/array-list/allCountriesList'
import { convertToISODate, datePublished, getFormattedDate } from '@/lib/date-and-time/dateAndTime'
import { getJsonLd } from '@/lib/helper'
import Script from 'next/script'

const title = 'Privacy Policy (Comparedoo.com)'
const description = 'Review our Privacy Policy to understand how we collect, use, and protect your information.'

// generateMetadata function
export async function generateMetadata() {
    return {
        title,
        description
    }
}

async function PrivacyPolicy() {
    const dateResponse = await fetch(`${process.env.BASE_URL}/api/date`, {
        headers: {
            'x-internal-request': process.env.INTERNAL_API_TOKEN
        },
        cache: 'no-store'
    });
    const { formattedDate } = await dateResponse.json();
    const dateModified = convertToISODate(formattedDate)
    const jsonLd = getJsonLd(title, datePublished, dateModified, description)

    const userCountry = await getCountryByIP()

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
                    Privacy Policy (Comparedoo.com)
                </h1>
            </div>

            <div className="published">
                <p><b>Published: </b> Monday, 21th October 2024</p>
            </div>
            <div className="updated">
                <b>Recently Updated:</b> <span className="updated-timer">{formattedDate}</span>
            </div>

            <PrivacyPolicyContent />
        </>
    )
}

export default PrivacyPolicy