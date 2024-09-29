import CookiePolicyContent from '@/components/pages/site-info/cookie-policy/CookiePolicyContent'
import SearchBox from '@/components/search-box/SearchBox'
import { getCountryByIP } from '@/lib/array-list/allCountriesList'
import { getFormattedDate } from '@/lib/date-and-time/dateAndTime'

// generateMetadata function
export async function generateMetadata() {
    const title = 'Cookie Policy (Comparedoo.com)'
    const description = 'Explore our Cookies Policy for details on how we use cookies to analyze and improve our website.'

    return {
        title,
        description,
    };
}

async function CookiePolicy() {
    const formattedDate = getFormattedDate()
    const userCountry = await getCountryByIP()

    return (
        <>
            <SearchBox userCountry={userCountry} />

            <div className="meta-title-primary-heading">
                <h1>
                    Cookie Policy (Comparedoo.com)
                </h1>
            </div>

            <div className="published">
                <p><b>Published: </b> Monday, 8th July 2024</p>
            </div>
            <div className="updated">
                <b>Recently Updated:</b> <span className="updated-timer">{formattedDate}</span>
            </div>

            <CookiePolicyContent />
        </>
    )
}

export default CookiePolicy