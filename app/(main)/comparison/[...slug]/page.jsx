import { allCountries } from "@/lib/array-list/allCountriesList";
import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner";
import GeneralComparisonCountries from "@/components/pages/genaral-comparison/countries/GeneralComparisonCountries";
import { USStates } from "@/lib/array-list/allUSStates";
import GeneralComparisonUSStates from "@/components/pages/genaral-comparison/us-states/GeneralComparisonUSStates";
import CountryVsUSStateGeneral from "@/components/pages/genaral-comparison/country-vs-us-state/CountryVsUSStateGeneral";
import { fetchWeatherInfoSequentially } from "@/lib/weather/weather";
import { checkCountry, decodeAndValidateSlugs, fetchData } from "@/lib/helper";
import { titleCased } from "@/lib/format/format";
import { fetchCountryGeneralInfo, fetchHealthExpenditurePercentage, fetchUSStateGeneralInfo } from "@/lib/database/fetch";
import { calculateTimeDifference, convertToISODate, datePublished, getFormattedDate } from "@/lib/date-and-time/dateAndTime";
import { getListForLinks } from "@/lib/array-list/randomList";
import SearchBox from "@/components/search-box/SearchBox";
import { allEntities } from "@/lib/array-list/allEntitiesList";
import Error404 from "@/components/error/Error404";

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
        const title = allEntities.includes(titleCased(decodedSlug2)) ? `${titleCased(decodedSlug1)} vs ${titleCased(decodedSlug2)} (Statistical Comparison)` : 'Error'
        const description = allEntities.includes(titleCased(decodedSlug2)) ? `Discover the comparsion between ${titleCased(decodedSlug1)} and ${titleCased(decodedSlug2)} in this article, highlighting general comparison, cost of living and quality of life.` : 'Enter two places to compare'
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

async function GeneralComparison({ params }) {
    const { slug } = params

    if (slug.length > 2) {
        return <Error404 />
    }

    let [decodedSlug1, decodedSlug2] = []

    try {
        [decodedSlug1, decodedSlug2] = decodeAndValidateSlugs(slug);

    } catch (error) {
        // return <p>Error: {error.message}</p>;
        return <Error404 />
    }

    const [entity1, entity2] = [titleCased(decodedSlug1), titleCased(decodedSlug2)]

    if (!allEntities.includes(titleCased(decodedSlug2))) {
        // return <p>Error: Enter two places to compare</p>
        return <Error404 />
    }

    if ([entity1, entity2].includes('United States') && USStates.includes(entity1 === 'United States' ? entity2 : entity1)) {
        // return <p>Error: Cannot compare a U.S. state with the United States itself.</p>;
        return <Error404 />
    }

    const isSlug1Country = allCountries.includes(entity1);
    const isSlug2Country = slug.length === 2 && allCountries.includes(entity2);
    const value1 = isSlug1Country ? 'country' : 'state'
    const value2 = isSlug2Country ? 'country' : 'state'


    try {
        const [entity1GeneralInfo, entity2GeneralInfo] = await Promise.all([
            fetchData(entity1, isSlug1Country ? allCountries : USStates, isSlug1Country ? fetchCountryGeneralInfo : fetchUSStateGeneralInfo),
            fetchData(entity2, isSlug2Country ? allCountries : USStates, isSlug2Country ? fetchCountryGeneralInfo : fetchUSStateGeneralInfo)
        ]).catch(() => [null, null])

        let entity1CurrentHealthExpenditurePercentage, entity2CurrentHealthExpenditurePercentage
        if (isSlug1Country && isSlug2Country) {
            [entity1CurrentHealthExpenditurePercentage, entity2CurrentHealthExpenditurePercentage] = await Promise.all([
                fetchHealthExpenditurePercentage(entity1), fetchHealthExpenditurePercentage(entity2)
            ])
            entity1CurrentHealthExpenditurePercentage = entity1CurrentHealthExpenditurePercentage.currentHealthExpenditurePercentage
            entity2CurrentHealthExpenditurePercentage = entity2CurrentHealthExpenditurePercentage.currentHealthExpenditurePercentage
        }

        // Helper function to determine ISO code parts
        const getISOInfo = (isoCode) => {
            return isoCode.includes('US-')
                ? { country: 'US', region: isoCode.replace('US-', '') }
                : { country: isoCode, region: '' };
        };

        // Extract the ISO codes
        const entity1ISO = entity1GeneralInfo.ISO3166Code;
        const entity2ISO = entity2GeneralInfo.ISO3166Code;

        // Destructure ISO information using the helper function
        const { country: entity1Country, region: entity1Region } = getISOInfo(entity1ISO);
        const { country: entity2Country, region: entity2Region } = getISOInfo(entity2ISO);

        // Fetch weather information sequentially
        const [entity1WeatherInfo, entity2WeatherInfo] = await fetchWeatherInfoSequentially(
            entity1GeneralInfo.capitalCity, entity1Country, entity1Region,
            entity2GeneralInfo.capitalCity, entity2Country, entity2Region
        );

        const { timeDifference, aheadOrBehind } = calculateTimeDifference(entity1WeatherInfo, entity2WeatherInfo);

        const formattedDate = getFormattedDate()

        const pageType = 'comparison'
        const listForLinks = getListForLinks(slug, isSlug1Country, isSlug2Country, pageType)

        return (
            <>
                <SearchBox slug1={checkCountry(entity1)} slug2={checkCountry(entity2)} />
                <AdsHeaderBanner />
                <PageTitle entity1={entity1} entity2={entity2} />
                <PublishInfo formattedDate={formattedDate} />
                {renderContent({ slug, entity1, entity2, entity1GeneralInfo, entity2GeneralInfo, entity1WeatherInfo, entity2WeatherInfo, timeDifference, aheadOrBehind, entity1CurrentHealthExpenditurePercentage, entity2CurrentHealthExpenditurePercentage, value1, value2, listForLinks })}
            </>
        )

    } catch (error) {
        return (
            <>
                <Error404 />
            </>
        );
    }
}

const PageTitle = ({ entity1, entity2 }) => (
    <div className="meta-title-primary-heading">
        <h1 className='entry-title' >
            <span className='first-entity-name-pages-paragraph'>{entity1}</span> vs <span className='second-entity-name-pages-paragraph'>{entity2}</span> (Statistical Comparison)
        </h1>
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

const renderContent = ({ slug, entity1, entity2, entity1GeneralInfo, entity2GeneralInfo, entity1WeatherInfo, entity2WeatherInfo, timeDifference, aheadOrBehind, entity1CurrentHealthExpenditurePercentage, entity2CurrentHealthExpenditurePercentage, value1, value2, listForLinks }) => {
    const [isCountry1, isCountry2] = [allCountries.includes(entity1), allCountries.includes(entity2)];
    const [isState1, isState2] = [USStates.includes(entity1), USStates.includes(entity2)];

    if (slug.length === 2 && entity1 !== entity2) {
        if (isCountry1 && isCountry2) return <GeneralComparisonCountries country1GeneralInfo={entity1GeneralInfo} country2GeneralInfo={entity2GeneralInfo} country1WeatherInfo={entity1WeatherInfo} country2WeatherInfo={entity2WeatherInfo} timeDifference={timeDifference} aheadOrBehind={aheadOrBehind} country1CurrentHealthExpenditurePercentage={entity1CurrentHealthExpenditurePercentage} country2CurrentHealthExpenditurePercentage={entity2CurrentHealthExpenditurePercentage} listForLinks={listForLinks} />;
        if (isState1 && isState2) return <GeneralComparisonUSStates state1GeneralInfo={entity1GeneralInfo} state2GeneralInfo={entity2GeneralInfo} state1WeatherInfo={entity1WeatherInfo} state2WeatherInfo={entity2WeatherInfo} timeDifference={timeDifference} aheadOrBehind={aheadOrBehind} listForLinks={listForLinks} />;
        if (isCountry1 && isState2 || isState1 && isCountry2) return <CountryVsUSStateGeneral slug1GeneralInfo={entity1GeneralInfo} slug2GeneralInfo={entity2GeneralInfo} slug1WeatherInfo={entity1WeatherInfo} slug2WeatherInfo={entity2WeatherInfo} timeDifference={timeDifference} aheadOrBehind={aheadOrBehind} value1={value1} value2={value2} listForLinks={listForLinks} />;
    }

    return (
        <>
            <Error404 />
        </>
    );
};

export default GeneralComparison;