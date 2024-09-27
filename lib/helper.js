import { allEntities } from "./array-list/allEntitiesList";
import { titleCased } from "./format/format";

export const revalidate = 2592000; // whole page
export const dynamic = 'force-dynamic'; // whole page

export async function fetchData(slug, allItems, getData) {
  if (allItems.includes(slug)) {
    return getData(slug);
  }
  return null;
}

export function decodeAndValidateSlugs(slug) {
  if (!slug?.length) {
    throw new Error('Empty slug provided!');
  }

  const decodedSlug1 = slug[0]?.toLowerCase().replace(/-/g, ' ');
  const decodedSlug2 = slug[1]?.toLowerCase().replace(/-/g, ' ');

  if (decodedSlug1 === decodedSlug2) {
    throw new Error('Two slugs cannot be the same!');
  }

  if (!allEntities.includes(titleCased(decodedSlug1)) || (decodedSlug2 && !allEntities.includes(titleCased(decodedSlug2)))) {
    throw new Error('Not Found: Unfortunately, we could not find the requested page or resource!');
  }


  return [decodedSlug1, decodedSlug2 || ''];
}

// Converts a single DMS(degrees, minutes, seconds) string to a decimal number
function dmsToDecimal(dms) {
  const regex = /(\d+)[°\s]+(\d+)?[′\s]*([\d.]*)[″\s]*([NSEW])/i;
  const matches = dms.match(regex);

  if (!matches) {
    throw new Error('Invalid DMS format: ' + dms);
  }

  const degrees = parseFloat(matches[1]);
  const minutes = parseFloat(matches[2] || '0');
  const seconds = parseFloat(matches[3] || '0');
  const direction = matches[4].toUpperCase();

  let decimal = degrees + minutes / 60 + seconds / 3600;

  // Adjust for South and West directions
  if (direction === 'S' || direction === 'W') {
    decimal *= -1;
  }

  return decimal;
}

// Converts both latitude and longitude values from DMS format to decimal format
export function convertLatLongToDecimal(latitudeDms, longitudeDms) {
  return [dmsToDecimal(latitudeDms), dmsToDecimal(longitudeDms)];
}

// Calculate average growth rate
export const calcPopGrowthRate = (pop) => {
  let totalGrowthRate = 0;

  for (let i = 1; i < pop.length; i++) {
    const growthRate = ((pop[i] - pop[i - 1]) / pop[i - 1]) * 100;
    totalGrowthRate += growthRate;
  }

  const averageGrowthRate = (totalGrowthRate / (pop.length - 1)).toFixed(2);
  return averageGrowthRate;
}

