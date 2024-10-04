import { titleCased } from "../format/format";
import { randomListCountries } from "./allCountriesList";
import { randomListUSStates } from "./allUSStates";

export function getListForLinks(slug, isSlug1Country, isSlug2Country, pageType) {
  const countriesList = randomListCountries();
  const statesList = randomListUSStates();

  // Choose the appropriate list based on the conditions
  const dividedList = (isSlug2Country || (slug.length === 1 && isSlug1Country)) ? countriesList : statesList;

  // Determine which list to use based on the page type
  let listForLinks = dividedList[pageType === 'general-information' || pageType === 'comparison'
    ? 'list1'
    : pageType === 'cost-of-living'
      ? 'list2'
      : 'list3'];

  const titleCasedSlugs = slug.map(titleCased);

  const specialCases = {
    "Côte d'Ivoire": "Cote d'Ivoire",
    'São Tomé and Príncipe': 'Sao Tome and Principe',
  };
  
  const convertedSlugs = titleCasedSlugs.map(slug =>
    specialCases[slug] ? specialCases[slug] : slug
  );

  const commonValue = listForLinks.filter(value => convertedSlugs.includes(value));

  if (commonValue) {
    listForLinks = listForLinks.filter(value => value !== commonValue);
  }

  return listForLinks.slice(0, 12);
}
