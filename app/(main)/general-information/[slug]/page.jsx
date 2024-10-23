export const dynamic = 'force-dynamic';

import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner";
import GeneralInfoCountry from "@/components/pages/general-info/country/GeneralInfoCountry";
import GeneralInfoUSState from "@/components/pages/general-info/us-state/GeneralInfoUSState";
import { allCountries } from "@/lib/array-list/allCountriesList";
import { USStates } from "@/lib/array-list/allUSStates";
import { toTitleCase } from "@/lib/format/format";
import { convertToISODate, currentYear, datePublished, getFormattedDate } from "@/lib/date-and-time/dateAndTime";
import { checkCountry, decodeAndValidateSlugs, fetchData, getJsonLd } from "@/lib/helper";
import { fetchCountryGeneralInfo, fetchUSStateGeneralInfo } from "@/lib/database/fetch";
import { getListForLinks } from "@/lib/array-list/randomList";
import SearchBox from "@/components/search-box/SearchBox";
import Error404 from "@/components/error/Error404";
import { allEntities } from "@/lib/array-list/allEntitiesList";
import Script from "next/script";

// generateMetadata function
export async function generateMetadata({ params }) {
    const { slug } = params;
    const decodedSlug = toTitleCase(slug)

    try {
        let title, description
        if (allEntities.includes(decodedSlug)) {
            title = `General Information About ${decodedSlug} (Updated: ${currentYear})`;
            description = `In this article, you will get to read about ${decodedSlug}, highlighting general information, cost of living and quality of life.`;
        } else {
            return {
                title: 'Error',
                description: 'Invalid URL. Please check the path and try again.',
            }
        }

        return {
            title,
            description
        }
    } catch (error) {
        return {
            title: 'Error',
            description: error.message,
        };
    }
}

async function GeneralInfoPage({ params }) {
    const { slug } = params;
    const slugArr = [slug]

    let decodedSlug1;

    try {
        [decodedSlug1] = decodeAndValidateSlugs(slugArr);
    } catch (error) {
        return <Error404 />
    }
    const entity1 = toTitleCase(decodedSlug1);

    const isSlug1Country = allCountries.includes(entity1);
    try {
        const [generalInfo] = await Promise.all([
            fetchData(entity1, isSlug1Country ? allCountries : USStates, isSlug1Country ? fetchCountryGeneralInfo : fetchUSStateGeneralInfo),
        ]);

        // Helper function to determine ISO code part
        const getISOInfo = (isoCode) => {
            return isoCode.includes('US-')
                ? { country: 'US', region: isoCode.replace('US-', '') }
                : { country: isoCode, region: '' };
        };

        // Destructure ISO information using the helper function
        const { country, region } = getISOInfo(generalInfo.ISO3166Code);

        const entity1CapitalCity = generalInfo.capitalCity
        const weatherResponse = await fetch(`${process.env.BASE_URL}/api/weather`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-internal-request': process.env.INTERNAL_API_TOKEN,
            },
            cache: 'no-store',
            body: JSON.stringify({ entity1CapitalCity, country, region })
        });
        const { weatherInfo } = await weatherResponse.json();
        const [entity1WeatherInfo] = weatherInfo;

        const dateResponse = await fetch(`${process.env.BASE_URL}/api/date`, {
            headers: {
                'x-internal-request': process.env.INTERNAL_API_TOKEN
            },
            cache: 'no-store'
        });
        const { formattedDate } = await dateResponse.json();
        
        const pageType = 'general-information'
        const listForLinks = getListForLinks(slugArr, isSlug1Country, null, pageType)

        let title, description
        if (allEntities.includes(entity1)) {
            title = `General Information About ${entity1} (Updated: ${currentYear})`;
            description = `In this article, you will get to read about ${entity1}, highlighting general information, cost of living and quality of life.`;
        } else {
            return {
                title: 'Error',
                description: 'Invalid URL. Please check the path and try again.',
            }
        }

        const dateModified = convertToISODate(formattedDate)

        const jsonLd = getJsonLd(title, datePublished, dateModified, description)

        return (
            <>
                <SearchBox slug1={checkCountry(entity1)} slug2='' />
                <AdsHeaderBanner />
                <Script
                    id="json-ld"
                    type="application/ld+json"

                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <PageTitle entity={entity1} />
                <PublishInfo formattedDate={formattedDate} />
                {renderContent(entity1, generalInfo, entity1WeatherInfo, listForLinks)}
            </>
        );
    } catch (error) {
        return <Error404 />
    }
}

const PageTitle = ({ entity }) => (
    <div className="meta-title-primary-heading">
        <h1 className='entry-title' >
            <span className="first-entity-name-individual-country">{entity}{' '}</span>
            (General Information)
        </h1>
    </div>
);

const PublishInfo = ({ formattedDate }) => (
    <>
        <div className="published">
            <p><b>Published: </b> Monday, 21th October 2024</p>
        </div>
        <div className="updated">
            <b>Recently Updated:</b> <span className="updated-timer">{formattedDate}</span>
        </div>
    </>
);

const renderContent = (entity, generalInfo, weatherInfo, listForLinks) => {
    try {
        if (allCountries.includes(entity)) {
            return (
                <GeneralInfoCountry generalInfo={generalInfo} weatherInfo={weatherInfo} listForLinks={listForLinks} />
            )
        }
        else if (USStates.includes(entity)) {
            return (
                <GeneralInfoUSState generalInfo={generalInfo} weatherInfo={weatherInfo} listForLinks={listForLinks} />
            )
        } else {
            return <h1 className='entry-title' >  Unable to fetch data </h1>
        }
    } catch (error) {
        return <Error404 />
    }
};


export default GeneralInfoPage