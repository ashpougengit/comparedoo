import { allCountries } from "@/lib/array-list/allCountriesList";
import { USStates } from "@/lib/array-list/allUSStates";
import { commonIndicators, countriesUniqueIndicators, statesUniqueIndicators } from "@/lib/array-list/indicators";
import { camelToTitleCase, toURLFormat } from "@/lib/format/format";

export const dynamic = 'force-static'; // Ensure it's statically generated

const allUSStates = USStates.map(state => state === 'Georgia (USA)' ? 'Georgia USA' : state);
const filteredCountries = allCountries.filter(country => country !== "Côte d'Ivoire" && country !== "São Tomé and Príncipe")

// Function to generate comparison URLs
function generateComparisons(entities, baseUrl, pageType) {
  const comparisons = [];

  for (let i = 0; i < entities.length; i++) {
    for (let j = i + 1; j < entities.length; j++) {
      const entity1 = entities[i] === 'Georgia (USA)' ? 'Georgia USA' : entities[i];
      const entity2 = entities[j] === 'Georgia (USA)' ? 'Georgia USA' : entities[j];

      comparisons.push(
        {
          url: `${baseUrl}/${pageType}/${toURLFormat(entity1)}/${toURLFormat(entity2)}`
        },
        {
          url: `${baseUrl}/${pageType}/${toURLFormat(entity2)}/${toURLFormat(entity1)}`
        }
      );
    }
  }

  return comparisons;
}

// Reusable function to generate country vs state comparisons
function generateCountryStateComparisons(countries, states, baseUrl, pageType) {
  const comparisons = [];

  countries.forEach((country) => {
    if (country === 'United States') return;

    states.forEach((value) => {
      const state = value === 'Georgia (USA)' ? 'Georgia USA' : value;
      comparisons.push(
        {
          url: `${baseUrl}/${pageType}/${toURLFormat(country)}/${toURLFormat(state)}`
        },
        {
          url: `${baseUrl}/${pageType}/${toURLFormat(state)}/${toURLFormat(country)}`
        }
      );
    });
  });

  return comparisons;
}

// Function to generate single entity URLs
function generateSingleEntityUrls(entities, baseUrl, pageType) {
  const singleEntityUrls = [];

  for (let i = 0; i < entities.length; i++) {
    const entity = entities[i] === 'Georgia (USA)' ? 'Georgia USA' : entities[i];

    singleEntityUrls.push(
      {
        url: `${baseUrl}/${pageType}/${toURLFormat(entity)}`
      }
    );
  }
  return singleEntityUrls;
}

// Function to generate indicators URLs
function generateIndicatorUrls(indicators, baseUrl, indicatorType) {
  const indicatorUrls = [];

  for (let i = 0; i < indicators.length; i++) {
    const indicator = camelToTitleCase(indicators[i]);

    indicatorUrls.push(
      {
        url: `${baseUrl}/${toURLFormat(indicator)}-of-all-${indicatorType}`
      }
    );
  }
  return indicatorUrls;
}

// Function to chunk an array into smaller arrays of a given size
export function chunkArray(array, size) {
  const chunked = [];
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
}
///////////////////////////////////////
// Base URL
const baseUrl = 'http://localhost:3000'; // change base url along with http

// Static routes to include in the sitemap
const continents = ['africa', 'antartica', 'asia', 'europe', 'north-america', 'oceania', 'south-america'];
const siteInfo = ['about-us', 'contact-us', 'cookie-policy', 'privacy-policy', 'terms-and-conditions'];
const staticPages = [...continents, ...siteInfo, 'knowledgebase', 'menu-bar'];

// Generate sitemap URLs for each static route
const staticRoutes = staticPages.map((route) => ({
  url: `${baseUrl}/${route}`
}));

const countriesGeneral = generateComparisons(filteredCountries, baseUrl, 'comparison');
const countriesCost = generateComparisons(filteredCountries, baseUrl, 'cost-of-living');
const countriesStandard = generateComparisons(filteredCountries, baseUrl, 'standard-of-living');

const USStatesGeneral = generateComparisons(allUSStates, baseUrl, 'comparison');
const USStatesCost = generateComparisons(allUSStates, baseUrl, 'cost-of-living');
const USStatesStandard = generateComparisons(allUSStates, baseUrl, 'standard-of-living');

const countryVsUSStateGeneral = generateCountryStateComparisons(filteredCountries, allUSStates, baseUrl, 'comparison');
const countryVsUSStateCost = generateCountryStateComparisons(filteredCountries, allUSStates, baseUrl, 'cost-of-living');
const countryVsUSStateStandard = generateCountryStateComparisons(filteredCountries, allUSStates, baseUrl, 'standard-of-living');

const countryGeneral = generateSingleEntityUrls(filteredCountries, baseUrl, 'general-information');
const countryCost = generateSingleEntityUrls(filteredCountries, baseUrl, 'cost-of-living');
const countryStandard = generateSingleEntityUrls(filteredCountries, baseUrl, 'standard-of-living');

const USStateGeneral = generateSingleEntityUrls(allUSStates, baseUrl, 'general-information');
const USStateCost = generateSingleEntityUrls(allUSStates, baseUrl, 'cost-of-living');
const USStateStandard = generateSingleEntityUrls(allUSStates, baseUrl, 'standard-of-living');

const countriesIndicatorsUnique = generateIndicatorUrls(countriesUniqueIndicators, baseUrl, 'countries');
const countriesIndicatorsCommon = generateIndicatorUrls(commonIndicators, baseUrl, 'countries');
const USStatesIndicatorsUnique = generateIndicatorUrls(statesUniqueIndicators, baseUrl, 'us-states');
const USStatesIndicatorsCommon = generateIndicatorUrls(commonIndicators, baseUrl, 'us-states');

// Combine static and dynamic routes
export const allRoutes = [
  ...staticRoutes,
  ...countriesGeneral, ...countriesCost, ...countriesStandard,
  ...USStatesGeneral, ...USStatesCost, ...USStatesStandard,
  ...countryVsUSStateGeneral, ...countryVsUSStateCost, ...countryVsUSStateStandard,
  ...countryGeneral, ...countryCost, ...countryStandard,
  ...USStateGeneral, ...USStateCost, ...USStateStandard,
  ...countriesIndicatorsUnique, ...countriesIndicatorsCommon,
  ...USStatesIndicatorsUnique, ...USStatesIndicatorsCommon
];

// Split allRoutes into 5 chunks, each with approximately 40,000 URLs
const chunkedRoutes = chunkArray(allRoutes, 40000);
///////////////////////////////////////
export async function GET(request) {

  // Sitemap index builder
  const sitemapIndex = chunkedRoutes.map((_, index) => (
    `<sitemap>
      <loc>${baseUrl}/sitemap-${index + 1}.xml</loc>
    </sitemap>`
  )).join('');

  // Handle sitemap index request
  if (request.url.endsWith('/sitemap.xml')) {
    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?>
       <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
         ${sitemapIndex}
       </sitemapindex>`,
      {
        headers: {
          'Content-Type': 'application/xml',
        },
      }
    );
  }

  // Handle individual sitemap requests
  const match = request.url.match(/sitemap-(\d+)\.xml/);
  if (match) {
    const sitemapNumber = parseInt(match[1]) - 1;
    const selectedRoutes = chunkedRoutes[sitemapNumber];

    // If the sitemap number exists, return the corresponding URLs
    if (selectedRoutes) {
      return new Response(
        `<?xml version="1.0" encoding="UTF-8"?>
         <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
           ${selectedRoutes
          .map(
            (route) => `
             <url>
               <loc>${route.url}</loc>
             </url>`
          )
          .join('')}
         </urlset>`,
        {
          headers: {
            'Content-Type': 'application/xml',
          },
        }
      );
    } else {
      // If the sitemap number is out of range, return 404
      return new Response('Sitemap not found', { status: 404 });
    }
  }

  // Return 404 if none of the conditions match
  return new Response('Not Found', { status: 404 });
}
