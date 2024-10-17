import { fetchCountryGeneralInfo } from "@/lib/database/fetch";

async function page() {
    const nepalInfo = await fetchCountryGeneralInfo('Nepal')
    console.log('nepalInfo: ', nepalInfo);
    return (
        <>
            <p>Official name: {nepalInfo.officialName}</p>
            <p>Continent: {nepalInfo.continent}</p>
            <p>Landlocked status: {nepalInfo.landlockedStatus}</p>
            <p>Capital city: {nepalInfo.capitalCity}</p>
        </>
    )
}

export default page