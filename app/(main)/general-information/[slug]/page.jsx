export const dynamic = 'force-dynamic';

import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner";
import GeneralInfoCountry from "@/components/pages/general-info/country/GeneralInfoCountry";
import GeneralInfoUSState from "@/components/pages/general-info/us-state/GeneralInfoUSState";
import { allCountries } from "@/lib/array-list/allCountriesList";
import { USStates } from "@/lib/array-list/allUSStates";
import { fetchWeatherInfo } from "@/lib/weather/weather";
import { titleCased } from "@/lib/format/format";
import { convertToISODate, currentYear, datePublished, getFormattedDate } from "@/lib/date-and-time/dateAndTime";
import { checkCountry, decodeAndValidateSlugs, fetchData } from "@/lib/helper";
import { fetchCountryGeneralInfo, fetchUSStateGeneralInfo } from "@/lib/database/fetch";
import { getListForLinks } from "@/lib/array-list/randomList";
import SearchBox from "@/components/search-box/SearchBox";
import Error404 from "@/components/error/Error404";
import { allEntities } from "@/lib/array-list/allEntitiesList";

// generateMetadata function
export async function generateMetadata({ params }) {
    const { slug } = params;
    const decodedSlug = titleCased(slug)

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
    const entity1 = titleCased(decodedSlug1);

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

        // Fetch weather information sequentially
        const weatherInfo = await fetchWeatherInfo(generalInfo.capitalCity, country, region);

        const formattedDate = getFormattedDate();
        const pageType = 'general-information'
        const listForLinks = getListForLinks(slugArr, isSlug1Country, null, pageType)

        return (
            <>
                <SearchBox slug1={checkCountry(entity1)} slug2='' />
                <AdsHeaderBanner />
                <PageTitle entity={entity1} />
                <PublishInfo formattedDate={formattedDate} />
                {renderContent(entity1, generalInfo, weatherInfo, listForLinks)}
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
            <p><b>Published: </b> Thursday, 10th October 2024</p>
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