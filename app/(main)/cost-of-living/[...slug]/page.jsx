import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner";
import Error404 from "@/components/error/Error404";
import CostOfLivingCountries from "@/components/pages/cost-of-living/countries/CostOfLivingCountries";
import CountryVsUSStateCost from "@/components/pages/cost-of-living/country-vs-us-state/CountryVsUSStateCost";
import CostOfLivingCountry from "@/components/pages/cost-of-living/country/CostOfLivingCountry";
import CostOfLivingUSState from "@/components/pages/cost-of-living/us-state/CostOfLivingUSState";
import CostOfLivingUSStates from "@/components/pages/cost-of-living/us-states/CostOfLivingUSStates";
import SearchBox from "@/components/search-box/SearchBox";
import { allCountries } from "@/lib/array-list/allCountriesList";
import { USStates } from "@/lib/array-list/allUSStates";
import { getListForLinks } from "@/lib/array-list/randomList";
import { fetchCountryCostInfo, fetchCurrencyInfo, fetchPropertyAndIncomeTaxInfo, fetchUSStateCostInfo } from "@/lib/database/fetch";
import { convertToISODate, currentYear, datePublished, getFormattedDate } from "@/lib/date-and-time/dateAndTime";
import { titleCased } from "@/lib/format/format";
import { checkCountry, decodeAndValidateSlugs, fetchData } from "@/lib/helper";


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
    const title = decodedSlug1 && decodedSlug2 ? `${titleCased(decodedSlug1)} vs ${titleCased(decodedSlug2)} (Cost of Living)` : `Cost of Living in ${titleCased(decodedSlug1)} (Updated: ${currentYear})`
      ;
    const description = decodedSlug1 && decodedSlug2 ? `Explore the cost of living comparison between ${titleCased(decodedSlug1)} and ${titleCased(decodedSlug2)}, highlighting key differences in housing, food, transportation and lifestyle expenses.` : `Get insights into the cost of living in ${titleCased(decodedSlug1)}, covering expenses like housing, fooding, transportation and health factors. 
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

async function CostComparison({ params }) {
  const { slug } = params;

  if (slug.length > 2) {
    return <Error404 />
  }

  let decodedSlug1, decodedSlug2;

  try {
    [decodedSlug1, decodedSlug2] = decodeAndValidateSlugs(slug);
  } catch (error) {
    console.error(error.message);
    // return <p>Error message: {error.message}</p>;
    return <Error404 />
  }

  const [entity1, entity2] = [titleCased(decodedSlug1), titleCased(decodedSlug2)]

  if ([entity1, entity2].includes('United States') && USStates.includes(entity1 === 'United States' ? entity2 : entity1)) {
    // return <p>Error: Cannot compare a U.S. state with the United States itself.</p>;
    return <Error404 />
  }

  const isSlug1Country = allCountries.includes(entity1);
  const isSlug2Country = slug.length === 2 && allCountries.includes(entity2);
  const value1 = isSlug1Country ? 'country' : 'state'
  const value2 = isSlug2Country ? 'country' : 'state'
  const location1Type = isSlug1Country ? 'country' : 'state'
  const location2Type = isSlug2Country ? 'country' : 'state'

  try {
    const [entity1CostInfo, entity2CostInfo, entity1CurrencyInfo, entity2CurrencyInfo] = await Promise.all([
      fetchData(entity1, isSlug1Country ? allCountries : USStates, isSlug1Country ? fetchCountryCostInfo : fetchUSStateCostInfo),
      fetchData(entity2, isSlug2Country ? allCountries : USStates, isSlug2Country ? fetchCountryCostInfo : fetchUSStateCostInfo),
      isSlug1Country ? fetchData(entity1, allCountries, fetchCurrencyInfo) : Promise.resolve(null),
      isSlug2Country ? fetchData(entity2, allCountries, fetchCurrencyInfo) : Promise.resolve(null)
    ])

    const totalCost = obj => Object.values(obj)
      .slice(2)
      .reduce((acc, value) => acc + (typeof value === 'number' ? value : 0), 0);

    let entity1Total, entity2Total, costTimes, moreOrLess
    if (slug.length === 2) {
      entity1Total = totalCost(entity1CostInfo) * (isSlug1Country ? entity1CurrencyInfo.unitValueInUSD : 1)
      entity2Total = totalCost(entity2CostInfo) * (isSlug2Country ? entity2CurrencyInfo.unitValueInUSD : 1)
      costTimes = entity1Total > entity2Total ? (entity1Total / entity2Total).toFixed(2) : (entity2Total / entity1Total).toFixed(2)
      moreOrLess = entity1Total > entity2Total ? 'more' : 'less'
    }

    const [entity1PropertyAndIncomeTaxInfo, entity2PropertyAndIncomeTaxInfo] = await Promise.all([
      fetchPropertyAndIncomeTaxInfo(location1Type, entity1),
      fetchPropertyAndIncomeTaxInfo(location2Type, entity2)
    ])

    const formattedDate = getFormattedDate();

    const pageType = 'cost-of-living'
    const listForLinks = getListForLinks(slug, isSlug1Country, isSlug2Country, pageType)

    return (
      <>
        <SearchBox slug1={checkCountry(entity1)} slug2={checkCountry(entity2)} />
        <AdsHeaderBanner />
        <PageTitle entity1={entity1} entity2={entity2} />
        <PublishInfo formattedDate={formattedDate} />
        {renderContent({ slug, entity1, entity2, entity1CostInfo, entity2CostInfo, entity1CurrencyInfo, entity2CurrencyInfo, entity1PropertyAndIncomeTaxInfo, entity2PropertyAndIncomeTaxInfo, costTimes, moreOrLess, value1, value2, listForLinks })}
      </>
    );
  } catch (error) {
    console.log(error);
    // return <p>Error: Unable to fetch data.</p>;
    return <Error404 />
  }
}

const PageTitle = ({ entity1, entity2 }) => (
  <div className="meta-title-primary-heading">
    {entity1 && entity2 ? (
      <h1 className='entry-title' >
        <span className='first-entity-name-pages-paragraph'>{entity1}</span> vs <span className='second-entity-name-pages-paragraph'>{entity2}</span> (Cost of Living)
      </h1>
    ) : (
      <h1 className='entry-title' >
        Cost of Living in
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

const renderContent = ({ slug, entity1, entity2, entity1CostInfo, entity2CostInfo, entity1CurrencyInfo, entity2CurrencyInfo, entity1PropertyAndIncomeTaxInfo, entity2PropertyAndIncomeTaxInfo, costTimes, moreOrLess, value1, value2, listForLinks }) => {
  const isCountry1 = allCountries.includes(entity1);
  const isCountry2 = allCountries.includes(entity2);
  const isState1 = USStates.includes(entity1);
  const isState2 = USStates.includes(entity2);

  if (slug.length === 1) {
    return isCountry1 ? (
      <CostOfLivingCountry costInfo={entity1CostInfo} currencyInfo={entity1CurrencyInfo} propertyAndIncomeTaxInfo={entity1PropertyAndIncomeTaxInfo} listForLinks={listForLinks} />
    ) : isState1 ? (
      <CostOfLivingUSState costInfo={entity1CostInfo} propertyAndIncomeTaxInfo={entity1PropertyAndIncomeTaxInfo} listForLinks={listForLinks} />
    ) : null;
  }

  if (slug.length === 2 && entity1 !== entity2) {
    if (isCountry1 && isCountry2) {
      return <CostOfLivingCountries country1CostInfo={entity1CostInfo} country2CostInfo={entity2CostInfo} country1CurrencyInfo={entity1CurrencyInfo} country2CurrencyInfo={entity2CurrencyInfo} entity1PropertyAndIncomeTaxInfo={entity1PropertyAndIncomeTaxInfo} entity2PropertyAndIncomeTaxInfo={entity2PropertyAndIncomeTaxInfo} costTimes={costTimes} moreOrLess={moreOrLess} listForLinks={listForLinks} />;
    } else if (isState1 && isState2) {
      return <CostOfLivingUSStates state1CostInfo={entity1CostInfo} state2CostInfo={entity2CostInfo} entity1PropertyAndIncomeTaxInfo={entity1PropertyAndIncomeTaxInfo} entity2PropertyAndIncomeTaxInfo={entity2PropertyAndIncomeTaxInfo} costTimes={costTimes} moreOrLess={moreOrLess} listForLinks={listForLinks} />;
    } else if (isCountry1 && isState2 || isState1 && isCountry2) {
      return <CountryVsUSStateCost slug1CostInfo={entity1CostInfo} slug2CostInfo={entity2CostInfo} currencyInfo={isCountry1 ? entity1CurrencyInfo : entity2CurrencyInfo} entity1PropertyAndIncomeTaxInfo={entity1PropertyAndIncomeTaxInfo} entity2PropertyAndIncomeTaxInfo={entity2PropertyAndIncomeTaxInfo} costTimes={costTimes} moreOrLess={moreOrLess} value1={value1} value2={value2} listForLinks={listForLinks} />;
    }
  }

  // return <p>Error: Unable to fetch all data.</p>;
  return <Error404 />
}

export default CostComparison
