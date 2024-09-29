import TermsAndConditionsContent from '@/components/pages/site-info/terms-and-conditions/TermsAndConditionsContent'
import SearchBox from '@/components/search-box/SearchBox'
import { getCountryByIP } from '@/lib/array-list/allCountriesList'
import { getFormattedDate } from '@/lib/date-and-time/dateAndTime'

// generateMetadata function
export async function generateMetadata() {
    const title = 'Terms and Conditions (Comparedoo.com)'
    const description = 'Understand the terms under which you can use our website by reviewing our Terms and Conditions.'

    return {
        title,
        description,
    };
}

async function TermsAndConditions() {
    const formattedDate = getFormattedDate()
    const userCountry = await getCountryByIP()

    return (
        <>
            <SearchBox userCountry={userCountry} />

            <div className="meta-title-primary-heading">
                <h1>
                    Terms and Conditions (Comparedoo.com)
                </h1>
            </div>
            <div className="published">
                <p><b>Published: </b> Monday, 8th July 2024</p>
            </div>
            <div className="updated">
                <b>Recently Updated:</b> <span className="updated-timer">{formattedDate}</span>
            </div>

            <TermsAndConditionsContent />
        </>
    )
}

export default TermsAndConditions