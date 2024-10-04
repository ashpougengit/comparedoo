
// Title case (ready)***************************************************
export const titleCased = function (str) {
  const specialCases = {
    "cote d'Ivoire": "Côte d'Ivoire",
    "cote d'ivoire": "Côte d'Ivoire",
    "cote-d'ivoire": "Côte d'Ivoire",
    "côte d'ivoire": "Côte d'Ivoire",
    "côte d'Ivoire": "Côte d'Ivoire",
    "Côte d'Ivoire": "Côte d'Ivoire",
    "Cote d'Ivoire":"Côte d'Ivoire",
    "c%C3%B4te-d'ivoire": "Côte d'Ivoire",
    "c%c3%b4te d'ivoire": "Côte d'Ivoire",
    'guinea bissau': 'Guinea-Bissau',
    'são tomé and príncipe': 'São Tomé and Príncipe',
    'sao tome and principe': 'São Tomé and Príncipe',
    'sao-tome-and-principe': 'São Tomé and Príncipe',
    'georgia-usa': 'Georgia (USA)',
    'georgia usa': 'Georgia (USA)',
    'timor-leste': 'Timor-Leste',
    'timor leste': 'Timor-Leste',
    'Timor-Leste': 'Timor-Leste',
    'Timor Leste': 'Timor-Leste',
    'east timor': 'Timor-Leste',
    'cape verde': 'Cabo Verde',
    'cape-verde': 'Cabo Verde',
    'brunei': 'Brunei Darussalam'
  };

  if (specialCases[str]) return specialCases[str];

  const decodedStr = decodeURIComponent(str);

  const exceptions = ['a', 'and', 'the', 'an', 'of', 'on', 'in', 'is'];
  return decodedStr
    .toLowerCase()
    // .split(' ')
    .split(/[\s-]+/)  // Split on spaces or hyphens
    .map((word, i) =>
      exceptions.includes(word) && i !== 0
        ? word
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(' ');
};

// to convert url slug to camelCased
export const toCamelCase = (str) => {
  const trimmedStr = str.replace(/-of-all-(countries|us-states)/, '');
  const specialCases = {
    'internet-tld': 'internetTLD',
    'iso-3166-code': 'ISO3166Code',
    dst: 'DST',
    'dst-start': 'DSTStart',
    'dst-end': 'DSTEnd',
    'dst-duration': 'DSTDuration',
    'unit-value-in-usd': 'unitValueInUSD',
    hdi: 'HDI',
    'gdp-nominal': 'GDPNominal',
    'gdp-per-capita': 'GDPPerCapita',
    'co2-emission': 'CO2Emission',
  };

  // Check if the string is in the special cases
  if (specialCases[trimmedStr]) {
    return specialCases[trimmedStr];
  }

  // Standard camelCase conversion for other strings
  return trimmedStr
    .toLowerCase()
    .split('-')
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join('');
};

export const camelToTitleCase = (word, isCountry = null) => {
  // Special cases mapping
  const specialCases = {
    internetTLD: 'Internet TLD',
    internettld: 'Internet TLD',
    iso3166code: 'ISO 3166 Code',
    ISO3166Code: 'ISO 3166 Code',
    DST: 'Daylight Saving Time',
    DSTStart: 'Daylight Saving Time Start Date',
    DSTEnd: 'Daylight Saving Time End Date',
    DSTDuration: 'Daylight Saving Time Duration',
    unitValueInUSD: 'Unit Value In USD',
    HDI: 'HDI',
    GDPNominal: 'GDP Nominal',
    GDPPerCapita: 'GDP Per Capita',
    CO2Emission: 'CO2 Emission',
    mottoLatin: 'Motto (Latin)',
    mottoEnglish: 'Motto (English)',
    nationalAnthemNative: 'National Anthem (Native)',
    nationalAnthemEnglish: 'National Anthem (English)',
    stateAnthemNative: 'State Anthem (Native)',
    stateAnthemEnglish: 'State Anthem (English)',
    timezoneSummer: 'Timezone (Summer)',
  };

  // Check if it's a special case and whether it's a function
  if (specialCases[word]) {
    const value = specialCases[word];
    return typeof value === 'function' ? value() : value;
  }

  // General camelCase to title case conversion
  return word
    .replace(/([a-z])([A-Z])/g, '$1 $2') // Insert space before capital letters
    .replace(/^./, (str) => str.toUpperCase()); // Capitalize first letter
};

export const toURLFormat = (word) => {
  const specialCases = {
    internetTLD: 'internet-tld',
    ISO3166Code: 'iso-3166-code',
    DST: 'dst',
    DSTStart: 'dst-start',
    DSTEnd: 'dst-end',
    DSTDuration: 'dst-duration',
    unitValueInUSD: 'unit-value-in-usd',
    HDI: 'hdi',
    GDPNominal: 'gdp-nominal',
    GDPPerCapita: 'gdp-per-capita',
    CO2Emission: 'co2-emission',
    'Daylight Saving Time': 'dst',
    'Daylight Saving Time Start Date': 'dst-start',
    'Daylight Saving Time End Date': 'dst-end',
    'Daylight Saving Time Duration': 'dst-duration',
    'Motto (Latin)': 'motto-latin',
    'Motto (English)': 'motto-english',
    'National Anthem (Native)': 'national-anthem-native',
    'National Anthem (English)': 'national-anthem-english',
    'State Anthem (Native)': 'state-anthem-native',
    'State Anthem (English)': 'state-anthem-english',
    'Timezone (Summer)': 'timezone-summer',
    'Georgia (USA)': 'georgia-usa',
    "Côte d'Ivoire":"cote-d'ivoire",
    'São Tomé and Príncipe':'sao-tome-and-principe'
  };

  if (specialCases[word]) {
    return specialCases[word];
  }

  return word
    .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space before capital letters in camelCase
    .toLowerCase()
    .split(' ')
    .join('-');
};

// to make first letter capital
export const Capitalize = (str) => {
  const strArray = str.split(' ');
  const titleCaseArray = strArray.map(
    (word) => word[0].toUpperCase() + word.slice(1).toLowerCase()
  );
  const finalName = titleCaseArray.join(' ');
  return finalName;
};

// to add commas
export function numberWithCommas(num) {
  return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function removeZerosAfterDecimal(num) {
  let numberString = Number(num).toFixed(2);
  const [integerPart, decimalPart] = numberString.split('.');

  if (decimalPart === '00') {
    return numberWithCommas(integerPart);
  } else {
    return numberWithCommas(numberString);
  }
}

// to remove .00 from numberString
export function formatNumberWithCommas(value) {
  if (typeof value === 'string') {
    return value
  }

  if (value === null || value === undefined || isNaN(value)) {
    return 'Yet to Update';
  }
  return removeZerosAfterDecimal(value)
}

export function formatUSDWithCommas(number) {
  if (number === null || number === undefined || isNaN(number) || number === 0) {
    return '';
  }

  let numberString = Number(number).toFixed(2);
  const [integerPart, decimalPart] = numberString.split('.');

  if (decimalPart === '00') {
    return `${numberWithCommas(integerPart)} USD`;
  } else {
    return `${numberWithCommas(numberString)} USD`;
  }
}

export function formatPercentage(value) {
  if (!value || ['yet to update', 'n/a'].includes(value.toLowerCase()))
    return 'Yet to Update';

  return value.includes(' to ')
    ? value
      .split(' to ')
      .map((rate) => `${rate}%`)
      .join(' to ')
    : `${value} %`;
}
