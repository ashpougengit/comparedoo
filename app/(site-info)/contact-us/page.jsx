import SearchBox from "@/components/search-box/SearchBox"
import { getCountryByIP } from "@/lib/array-list/allCountriesList"

async function ContactUs() {
    const userCountry = await getCountryByIP()

    return (
        <>
            <SearchBox userCountry={userCountry} />
        </>
    )
}

export default ContactUs