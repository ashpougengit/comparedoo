import PrivacyPolicyContent from '@/components/pages/site-info/privacy-policy/PrivacyPolicyContent'
import SearchBox from '@/components/search-box/SearchBox'
import { getFormattedDate } from '@/lib/date-and-time/dateAndTime'

// generateMetadata function
export async function generateMetadata() {
    const title = 'Privacy Policy (Comparedoo.com)'
    const description = 'Review our Privacy Policy to understand how we collect, use, and protect your information.'

    return {
        title,
        description,
    };
}

function PrivacyPolicy() {
    const formattedDate = getFormattedDate()

    return (
        <>
            <SearchBox />

            <div className="meta-title-primary-heading">
                <h1>
                    Privacy Policy (Comparedoo.com)
                </h1>
            </div>

            <div className="published">
                <p><b>Published: </b> Monday, 8th July 2024</p>
            </div>
            <div className="updated">
                <b>Recently Updated:</b> <span className="updated-timer">{formattedDate}</span>
            </div>

            <PrivacyPolicyContent />
        </>
    )
}

export default PrivacyPolicy