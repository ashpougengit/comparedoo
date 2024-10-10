export const indicatorsGeneral = [
  'capitalCity',
  'largestCity',
  'officialName',
  'landlockedStatus',
  'currencyName',
  'nationalBird',
  'nationalColors',
  'nationalFlower',
  'nationalSport',
  'nationalAnimal',
  'demonyms',
  'drivingSide',
  'callingCode',
  'ISO3166Code',
  'internetTLD',
  'latitude',
  'longitude',
  'areaInSqKm',
  'areaInSqMile',
  'officialLanguages',
  'majorReligion',
  'governmentStatus',
  'totalTimezones',
  'timezoneSummer',
  'DST',
  'DSTStart',
  'DSTEnd',
  'DSTDuration',
  'startOfWeek',
  'unitValueInUSD',
  'nationalAnthemNative',
  'nationalAnthemEnglish',
  'population',

  'nicknames',
  'mottoLatin',
  'mottoEnglish',
  'stateAnthemNative',
  'stateAnthemEnglish',
  'officialWebsites',
  'stateTree',
  'stateBird',
  'stateColors',
  'stateFlower',
  'stateSport',
  'stateAnimal',
];
export const indicatorsStandard = [
  'GDPNominal',
  'GDPPerCapita',
  'centralGovernmentDebt',
  'HDI',
  'humanCapitalIndex',
  'literacyRate',
  'lifeExpectancyRatio',
  'healthyLifeExpectancyRatio',
  'povertyRatio',
  'unemploymentPercentageOfTotalLabourForce',
  'CO2Emission',
  'numberOfInternationalTouristsArrival',
  'accessToElectricity',
  'accessToInternet',

  'employmentRate',
  'unemploymentPercentageOfTotalLabourForce',
  'averageFamilySize',
];

export const indicatorValueType = (value, isCountry) => {
  const specialCases = {
    areaInSqKm: 'Square Kilometer',
    areaInSqMile: 'Square Mile',
    GDPNominal: isCountry ? '' : 'Million USD',
    GDPPerCapita: 'USD',
    centralGovernmentDebt: '% of GDP',
    literacyRate: '%',
    lifeExpectancyRatio: 'years',
    healthyLifeExpectancyRatio: 'years',
    povertyRatio: '%',
    unemploymentPercentageOfTotalLabourForce: '%',
    CO2Emission: 'kg per PPP $ of GDP',
    accessToElectricity: '%',
    accessToInternet: '%',
    employmentRate: '%'
  };
  return specialCases[value] || '';
};

export const countriesUniqueIndicators = [
  'nationalBird',
  'nationalColors',
  'nationalFlower',
  'nationalSport',
  'nationalAnimal',
  'internetTLD',
  'majorReligion',
  'governmentStatus',
  'unitValueInUSD',
  'nationalAnthemNative',
  'nationalAnthemEnglish',
  'healthyLifeExpectancyRatio',
  'centralGovernmentDebt',
  'numberOfInternationalTouristsArrival',
  'currencyName',
  'drivingSide',
  'callingCode',
  'officialLanguages',
  'humanCapitalIndex',
  'CO2Emission',
  'startOfWeek',
  'callingCode'
];

export const statesUniqueIndicators = [
  'nicknames',
  'mottoLatin',
  'mottoEnglish',
  'stateTree',
  'stateBird',
  'stateColors',
  'stateFlower',
  'stateSport',
  'stateAnimal',
  'averageFamilySize',
  'stateAnthemNative',
  'stateAnthemEnglish',
  'officialWebsites'
];

export const commonIndicators = [
  'capitalCity',
  'largestCity',
  'officialName',
  'landlockedStatus',
  'demonyms',
  'ISO3166Code',
  'latitude',
  'longitude',
  'areaInSqKm',
  'areaInSqMile',
  'totalTimezones',
  'timezoneSummer',
  'DST',
  'DSTStart',
  'DSTEnd',
  'DSTDuration',
  'GDPNominal',
  'GDPPerCapita',
  'HDI',
  'literacyRate',
  'lifeExpectancyRatio',
  'povertyRatio',
  'accessToElectricity',
  'accessToInternet',
  'population',
  'unemploymentPercentageOfTotalLabourForce',
  'employmentRate'
];

export const randomIndicatorsList = (
  currentIndicator,
  indicatorType,
  isCountry
) => {
  const indicators =
    indicatorType === 'general' ? indicatorsGeneral : indicatorsStandard;
  const indicatorsToExclude = [
    ...(isCountry ? statesUniqueIndicators : countriesUniqueIndicators),
    currentIndicator,
  ];

  return indicators
    .filter((indicator) => !indicatorsToExclude.includes(indicator))
    .sort(() => Math.random() - 0.5)
    .slice(0, 12);
};

export const allIndicators = [...countriesUniqueIndicators, ...statesUniqueIndicators, ...commonIndicators];
