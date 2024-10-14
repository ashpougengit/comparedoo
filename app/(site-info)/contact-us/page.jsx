import SearchBox from "@/components/search-box/SearchBox"
import { getCountryByIP } from "@/lib/array-list/allCountriesList"
import { convertToISODate, datePublished, getFormattedDate } from "@/lib/date-and-time/dateAndTime"
import { getJsonLd } from "@/lib/helper"
import Script from "next/script"

const title = 'Contact Us (Comparedoo.com)'
const description = "We're here to help! Contact us with any inquiries or support requests via our Contact Us page."

// generateMetadata function
export async function generateMetadata() {
    return {
        title,
        description
    }
}

async function ContactUs() {
    const userCountry = await getCountryByIP()

    const formattedDate = getFormattedDate()
    const dateModified = convertToISODate(formattedDate)

    const jsonLd = getJsonLd(title, datePublished, dateModified, description)

    return (
        <>
            <SearchBox userCountry={userCountry} />

            <Script
                id="json-ld"
                type="application/ld+json"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="last-paragraph-of-the-page">
                <div className="last-para-single-div">
                    <p>If you have any questions, feedback, or inquiries, feel free to reach out to us at <a href="mailto:info.comparedoo@gmail.com" className="emailAddress">info.comparedoo@gmail.com</a>. We’re here to help and would love to hear from you! Simply drop us an email, and we’ll get back to you as soon as possible. Your communication matters to us.</p>
                </div>
            </div >
        </>
    )
}

export default ContactUs