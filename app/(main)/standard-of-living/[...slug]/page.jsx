import { allCountries } from "@/lib/array-list/allCountriesList";
import { USStates } from "@/lib/array-list/allUSStates";
import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner";
import StandardOfLivingCountries from "@/components/pages/standard-of-living/countries/StandardOfLivingCountries";
import StandardOfLivingUSStates from "@/components/pages/standard-of-living/us-states/StandardOfLivingUSStates";
import CountryVsUSStateStandard from "@/components/pages/standard-of-living/country-vs-us-state/CountryVsUSStateStandard";
import StandardOfLivingCountry from "@/components/pages/standard-of-living/country/StandardOfLivingCountry";
import StandardOfLivingUSState from "@/components/pages/standard-of-living/us-state/StandardOfLivingUSState";
import { decodeAndValidateSlugs, fetchData } from "@/lib/helper";
import { titleCased } from "@/lib/format/format";
import { fetchCountryStandardInfo, fetchUSStateStandardInfo } from "@/lib/database/fetch";
import { convertToISODate, currentYear, datePublished, getFormattedDate } from "@/lib/date-and-time/dateAndTime";
import { getListForLinks } from "@/lib/array-list/randomList";
import SearchBox from "@/components/search-box/SearchBox";

// generateMetadata function
export async function generateMetadata({ params }) {
    const { slug } = params;

    try {
        const [decodedSlug1, decodedSlug2] = decodeAndValidateSlugs(slug);
        const title = decodedSlug1 && decodedSlug2 ? `${titleCased(decodedSlug1)} vs ${titleCased(decodedSlug2)} (Standard of Living)` : `Standard of Living in ${titleCased(decodedSlug1)} (Updated: ${currentYear})`;
        const description = decodedSlug1 && decodedSlug2 ? `Find out how the standard of living differs between ${titleCased(decodedSlug1)} and ${titleCased(decodedSlug2)}, focusing on income, healthcare, education, and quality of life.` : `Explore the standard of living in ${titleCased(decodedSlug1)} highlighting income, healthcare, education, and quality of life.
`;
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

async function StandardComparison({ params }) {
    const { slug } = params;

    let decodedSlug1, decodedSlug2;

    try {
        [decodedSlug1, decodedSlug2] = decodeAndValidateSlugs(slug);
    } catch (error) {
        return <p>Error: {error.message}</p>;
    }

    const [entity1, entity2] = [titleCased(decodedSlug1), titleCased(decodedSlug2)]

    if ([entity1, entity2].includes('United States') && USStates.includes(entity1 === 'United States' ? entity2 : entity1)) {
        return <p>Error: Cannot compare a U.S. state with the United States itself.</p>;
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

        const sumSelectedValues = (data, keys) => {
            return keys.reduce((total, key) => total + (data[key] || 0), 0);
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

        // const populationInfo = await fetchPopulationInfo(allCountries.includes(entity1) ? entity1 : entity2)
        // const parsedPopulation = JSON.parse(populationInfo.population).at(0)

        const formattedDate = getFormattedDate();

        const pageType = 'standard-of-living'
        const listForLinks = getListForLinks(slug, isSlug1Country, isSlug2Country, pageType)

        return (
            <>
                <SearchBox slug1={entity1} slug2={entity2} />
                <AdsHeaderBanner />
                <PageTitle entity1={entity1} entity2={entity2} />
                <PublishInfo formattedDate={formattedDate} />
                {renderContent({ slug, entity1, entity2, entity1StandardInfo, entity2StandardInfo, value1, value2, standardTimes, betterOrLesser, listForLinks })}
            </>
        );
    } catch (error) {
        return <p>Error: Unable to fetch data.</p>;
    }
}

const PageTitle = ({ entity1, entity2 }) => (
    <div className="meta-title-primary-heading">
        {entity1 && entity2 ? (
            <h1 className='entry-title' >
                <span className='first-entity-name-pages-paragraph'>{entity1}</span> vs <span className='second-entity-name-pages-paragraph'>{entity2}</span> (Standard of Living)
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
            <p><b>Published: </b> Monday, 8th July 2024</p>
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

    return <p>Error: Unable to fetch all data.</p>;
};

export default StandardComparison;
