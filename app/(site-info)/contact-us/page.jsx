import SearchBox from "@/components/search-box/SearchBox"
import { getCountryByIP } from "@/lib/array-list/allCountriesList"
import { convertToISODate, datePublished, getFormattedDate } from "@/lib/date-and-time/dateAndTime"

// generateMetadata function
export async function generateMetadata() {
    const title = 'Contact Us (Comparedoo.com)'
    const description = "We're here to help! Contact us with any inquiries or support requests via our Contact Us page."
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

async function ContactUs() {
    const userCountry = await getCountryByIP()

    return (
        <>
            <SearchBox userCountry={userCountry} />
            <div className="last-paragraph-of-the-page">
                <div className="last-para-single-div">
                    <p>If you have any questions, feedback, or inquiries, feel free to reach out to us at <a href="mailto:info.comparedoo@gmail.com" className="email-link">info.comparedoo@gmail.com</a>. We’re here to help and would love to hear from you! Simply drop us an email, and we’ll get back to you as soon as possible. Your communication matters to us.</p>
                </div>
            </div >
        </>
    )
}

export default ContactUs