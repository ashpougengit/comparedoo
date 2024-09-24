export const indicatorsGeneral = ["capitalCity", "largestCity", "officialName", "landlockedStatus", "currencyName", "currencySymbol", "nationalBird", "nationalColors", "nationalFlower", "nationalSport", "nationalAnimal", "demonyms", "drivingSide", "callingCode", "ISO3166Code", "internetTLD", "latitude", "longitude", "areaInSqKm", "areaInSqMile", "officialLanguages", "majorReligion",  "governmentStatus", "totalTimezones", "timezoneSummer", "DST", "DSTStart", "DSTEnd", "DSTDuration", "startOfWeek", "unitValueInUSD", "nationalAnthemNative", "nationalAnthemEnglish",

    "nicknames", "mottoLatin", "mottoEnglish", "stateAnthemNative", "stateAnthemEnglish", "officialWebsites", "stateTree", "stateBird", "stateColors", "stateFlower", "stateSport", "stateAnimal"
]
export const indicatorsStandard = ["GDPNominal", "GDPPerCapita", "centralGovernmentDebt", "HDI", "humanCapitalIndex", "literacyRate", "lifeExpectancyRatio", "healthyLifeExpectancyRatio", "povertyRatio", "unemploymentPercentageOfTotalLabourForce", "CO2Emission", "numberOfInternationalTouristsArrival", "accessToElectricity", "accessToInternet",

    "population", "employmentRate", "averageFamilySize"
]

export const indicatorValueType = (value, isCountry) => {
    const specialCases = {
        areaInSqKm: 'Square Kilometer',
        areaInSqMile: 'Square Mile',
        GDPNominal: isCountry ? '' : 'Million USD',
        GDPPerCapita: 'USD',
        centralGovernmentDebt: '%',
        literacyRate: '%',
        lifeExpectancyRatio: 'years',
        healthyLifeExpectancyRatio: 'years',
        povertyRatio: '%',
        unemploymentPercentageOfTotalLabourForce: '%',
        CO2Emission: 'kg per PPP $ of GDP',
        accessToElectricity: '%',
        accessToInternet: '%',
        employmentRate: '%'
    }
    return specialCases[value] || ''
};

const countriesUniqueIndicators = ["nationalBird", "nationalColors", "nationalFlower", "nationalSport", "nationalAnimal", "internetTLD", "majorReligion", "governmentStatus", "unitValueInUSD","nationalAnthemNative", "nationalAnthemEnglish","healthyLifeExpectancyRatio","centralGovernmentDebt","numberOfInternationalTouristsArrival"]

const statesUniqueIndicators = ["nicknames", "mottoLatin", "mottoEnglish", "stateTree", "stateBird", "stateColors", "stateFlower", "stateSport", "stateAnimal", "population", "employmentRate", "averageFamilySize","stateAnthemNative", "stateAnthemEnglish"]

export const randomIndicatorsList = (currentIndicator, indicatorType, isCountry) => {
    const indicators = indicatorType === 'general' ? indicatorsGeneral : indicatorsStandard;
    const indicatorsToExclude = [...(isCountry ? statesUniqueIndicators : countriesUniqueIndicators), currentIndicator]

    return indicators
        .filter(indicator => !indicatorsToExclude.includes(indicator))
        .sort(() => Math.random() - 0.5)
        .slice(0, 12);
};