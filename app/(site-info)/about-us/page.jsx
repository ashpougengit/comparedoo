import AboutUsContent from '@/components/pages/site-info/about-us/AboutUsContent'
import SearchBox from '@/components/search-box/SearchBox'
import { getFormattedDate } from '@/lib/date-and-time/dateAndTime'

// generateMetadata function
export async function generateMetadata() {
    const title = 'About Us (Comparedoo.com)'
    const description = 'Learn more about our mission, history, and commitment to serving our customers on our About Us page.'

    return {
        title,
        description,
    };
}

function AboutUs() {
    const formattedDate = getFormattedDate()

    return (
        <>
            <SearchBox />

            <div className="meta-title-primary-heading">
                <h1>
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