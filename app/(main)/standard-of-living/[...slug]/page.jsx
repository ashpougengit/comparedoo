import { allCountries } from "@/lib/array-list/allCountriesList";
import { USStates } from "@/lib/array-list/allUSStates";
import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner";
import StandardOfLivingCountries from "@/components/pages/standard-of-living/countries/StandardOfLivingCountries";
import StandardOfLivingUSStates from "@/components/pages/standard-of-living/us-states/StandardOfLivingUSStates";
import CountryVsUSStateStandard from "@/components/pages/standard-of-living/country-vs-us-state/CountryVsUSStateStandard";
import StandardOfLivingCountry from "@/components/pages/standard-of-living/country/StandardOfLivingCountry";
import StandardOfLivingUSState from "@/components/pages/standard-of-living/us-state/StandardOfLivingUSState";
import { checkCountry, decodeAndValidateSlugs, fetchData, getJsonLd } from "@/lib/helper";
import { toTitleCase } from "@/lib/format/format";
import { fetchCountryStandardInfo, fetchUSStateStandardInfo } from "@/lib/database/fetch";
import { convertToISODate, currentYear, datePublished, getFormattedDate } from "@/lib/date-and-time/dateAndTime";
import { getListForLinks } from "@/lib/array-list/randomList";
import SearchBox from "@/components/search-box/SearchBox";
import Error404 from "@/components/error/Error404";
import Script from "next/script";

// generateMetadata function
export async function generateMetadata({ params }) {
    const { slug } = params;

    if (slug.length > 2) {
        return {
            title: 'Error',
            description: 'Invalid URL. Please check the path and try again.',
        }
    }

    try {
        const [decodedSlug1, decodedSlug2] = decodeAndValidateSlugs(slug);
        const title = decodedSlug1 && decodedSlug2 ? `${toTitleCase(decodedSlug1)} vs ${toTitleCase(decodedSlug2)} (Standard of Living)` : `Standard of Living in ${toTitleCase(decodedSlug1)} (Updated: ${currentYear})`;
        const description = decodedSlug1 && decodedSlug2 ? `Find out how the standard of living differs between ${toTitleCase(decodedSlug1)} and ${toTitleCase(decodedSlug2)}, focusing on income, healthcare, education, and quality of life.` : `Explore the standard of living in ${toTitleCase(decodedSlug1)} highlighting income, healthcare, education, and quality of life.
`;

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

async function StandardComparison({ params }) {
    const { slug } = params;

    if (slug.length > 2) {
        return <Error404 />
    }

    let decodedSlug1, decodedSlug2;

    try {
        [decodedSlug1, decodedSlug2] = decodeAndValidateSlugs(slug);
    } catch (error) {
        return <Error404 />
    }

    const [entity1, entity2] = [toTitleCase(decodedSlug1), toTitleCase(decodedSlug2)]

    if ([entity1, entity2].includes('United States') && USStates.includes(entity1 === 'United States' ? entity2 : entity1)) {
        return <Error404 />
    }

    const isSlug1Country = allCountries.includes(entity1);
    const isSlug2Country = slug.length === 2 && allCountries.includes(entity2);
    const value1 = isSlug1Country ? 'country' : 'state'
    const value2 = isSlug2Country ? 'country' : 'state'

    try {
        const [entity1StandardInfo, entity2StandardInfo] = await Promise.all([
            fetchData(entity1, isSlug1Country ? allCountries : USStates, isSlug1Country ? fetchCountryStandardInfo : fetchUSStateStandardInfo),
            fetchData(entity2, isSlug2Country ? allCountries : USStates, isSlug2Country ? fetchCountryStandardInfo : fetchUSStateStandardInfo)
        ]);

        // const sumSelectedValues = (data, keys) => {
        //     return keys.reduce((total, key) => total + (data[key] || 0), 0);
        // };
        const sumSelectedValues = (data, keys) => {
            return keys.reduce((total, key) => {
                let value = data[key] || 0;

                // Convert HDI to percentage
                if (key === 'HDI') {
                    value *= 100; // Multiply HDI by 100
                }

                // Convert GDPPerCapita to percentage using the global average
                if (key === 'GDPPerCapita') {
                    value = (value / 13138.33) * 100; // Divide by global average and multiply by 100
                }

                return total + value;
            }, 0);
        };
        // List of keys to sum up
        const keysToSum = ['HDI', 'literacyRate', 'lifeExpectancyRatio', 'GDPPerCapita', 'accessToInternet', 'accessToElectricity'];

        let entity1Total, entity2Total, standardTimes, betterOrLesser;
        if (slug.length === 2) {
            entity1Total = sumSelectedValues(entity1StandardInfo, keysToSum)
            entity2Total = sumSelectedValues(entity2StandardInfo, keysToSum)
            standardTimes = entity1Total > entity2Total ? (entity1Total / entity2Total).toFixed(2) : (entity2Total / entity1Total).toFixed(2)
            betterOrLesser = entity1Total > entity2Total ? 'better' : 'lesser'
        }

        const formattedDate = getFormattedDate();

        const pageType = 'standard-of-living'
        const listForLinks = getListForLinks(slug, isSlug1Country, isSlug2Country, pageType)

        const title = decodedSlug1 && decodedSlug2 ? `${toTitleCase(decodedSlug1)} vs ${toTitleCase(decodedSlug2)} (Standard of Living)` : `Standard of Living in ${toTitleCase(decodedSlug1)} (Updated: ${currentYear})`;
        const description = decodedSlug1 && decodedSlug2 ? `Find out how the standard of living differs between ${toTitleCase(decodedSlug1)} and ${toTitleCase(decodedSlug2)}, focusing on income, healthcare, education, and quality of life.` : `Explore the standard of living in ${toTitleCase(decodedSlug1)} highlighting income, healthcare, education, and quality of life.
`;
        const dateModified = convertToISODate(formattedDate)

        const jsonLd = getJsonLd(title, datePublished, dateModified, description)

        return (
            <>
                <SearchBox slug1={checkCountry(entity1)} slug2={checkCountry(entity2)} />
                <AdsHeaderBanner />
                <Script
                    id="json-ld"
                    type="application/ld+json"

                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <PageTitle entity1={entity1} entity2={entity2} />
                <PublishInfo formattedDate={formattedDate} />
                {renderContent({ slug, entity1, entity2, entity1StandardInfo, entity2StandardInfo, value1, value2, standardTimes, betterOrLesser, listForLinks })}
            </>
        );
    } catch (error) {
        return <Error404 />
    }
}

const PageTitle = ({ entity1, entity2 }) => (
    <div className="meta-title-primary-heading">
        {entity1 && entity2 ? (
            <h1 className='entry-title' >
                <span className='first-entity-name-pages-paragraph'>{entity1}</span> vs <span className='second-entity-name-pages-paragraph'>{entity2}{' '}</span> (Standard of Living)
            </h1>
        ) : (
            <h1 className='entry-title' >
                Standard of Living in
                <span className="first-entity-name-individual-state"> {entity1} </span>
                (2024 Statistics)
            </h1>
        )}
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

const renderContent = ({ slug, entity1, entity2, entity1StandardInfo, entity2StandardInfo, value1, value2, standardTimes, betterOrLesser, listForLinks }) => {
    const isCountry1 = allCountries.includes(entity1);
    const isCountry2 = allCountries.includes(entity2);
    const isState1 = USStates.includes(entity1);
    const isState2 = USStates.includes(entity2);

    if (slug.length === 1) {
        return isCountry1 ? (
            <StandardOfLivingCountry standardInfo={entity1StandardInfo} listForLinks={listForLinks} />
        ) : isState1 ? (
            <StandardOfLivingUSState standardInfo={entity1StandardInfo} listForLinks={listForLinks} />
        ) : null;
    }

    if (slug.length === 2 && entity1 !== entity2) {
        if (isCountry1 && isCountry2) {
            return <StandardOfLivingCountries country1StandardInfo={entity1StandardInfo} country2StandardInfo={entity2StandardInfo} standardTimes={standardTimes} betterOrLesser={betterOrLesser} listForLinks={listForLinks} />;
        } else if (isState1 && isState2) {
            return <StandardOfLivingUSStates state1StandardInfo={entity1StandardInfo} state2StandardInfo={entity2StandardInfo} standardTimes={standardTimes} betterOrLesser={betterOrLesser} listForLinks={listForLinks} />;
        } else if (isCountry1 && isState2 || isState1 && isCountry2) {
            return <CountryVsUSStateStandard slug1StandardInfo={entity1StandardInfo} slug2StandardInfo={entity2StandardInfo} value1={value1} value2={value2} standardTimes={standardTimes} betterOrLesser={betterOrLesser} listForLinks={listForLinks} />;
        }
    }

    return <Error404 />
};

export default StandardComparison;
