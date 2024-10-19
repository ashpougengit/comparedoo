const mysql = require('mysql2/promise');
const path = require('path');
const fs = require('fs');

// Database connection
const connectDatabase = async () => {
    const db = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Sagar@1231',
        database: 'comparedoo',
    });
    return db;
}

// Paths to JSON data files
const countryGeneralPath = path.join(process.cwd(), 'country_general_info.json');
const countryCostPath = path.join(process.cwd(), 'country_cost_info.json');
const countryStandardPath = path.join(process.cwd(), 'country_standard_info.json');

const USStateGeneralPath = path.join(process.cwd(), 'us_state_general_info.json');
const USStateCostPath = path.join(process.cwd(), 'us_state_cost_info.json');
const USStateStandardPath = path.join(process.cwd(), 'us_state_standard_info.json');

// Read JSON data
const countryGeneralRawData = fs.readFileSync(countryGeneralPath);
const countryCostRawData = fs.readFileSync(countryCostPath);
const countryStandardRawData = fs.readFileSync(countryStandardPath);

const USStateGeneralRawData = fs.readFileSync(USStateGeneralPath);
const USStateCostRawData = fs.readFileSync(USStateCostPath);
const USStateStandardRawData = fs.readFileSync(USStateStandardPath);

// Parse JSON data
const countryGeneralData = JSON.parse(countryGeneralRawData);
const countryCostData = JSON.parse(countryCostRawData);
const countryStandardData = JSON.parse(countryStandardRawData);

const USStateGeneralData = JSON.parse(USStateGeneralRawData);
const USStateCostData = JSON.parse(USStateCostRawData);
const USStateStandardData = JSON.parse(USStateStandardRawData);

// Manage zeros after decimal (kept same as before)
function manageZerosAfterDecimal(num) {
    if (Number.isInteger(num)) {
        return num;
    }

    // If the number is a floating-point number and its integer part is greater than 0
    if (Math.floor(num) > 0) {
        return num.toFixed(2);
    }

    // If the integer part is 0 and it's a floating-point number
    // Check for significant digits after decimal, starting from .toFixed(2) to .toFixed(6)
    for (let i = 2; i <= 6; i++) {
        const fixedValue = num.toFixed(i);

        // If the fixed value has significant digits (i.e., not just zeros after decimal)
        if (!/^0\.0+$/.test(fixedValue)) {
            // Ensure the value doesn't have trailing zeros for small decimals
            if (parseFloat(fixedValue) > 0) {
                return fixedValue;  // Return the valid fixed decimal
            }
        }
    }
    return 0;
}

// Convert to number and handle types
function convertToNumber(value, type, key) {
    if (value === 'N/A' || value === undefined) {
        return null;
    }

    if (type === 'VARCHAR' || type === 'TEXT') {
        return value;
    }

    if ((type === 'INT' || type === 'BIGINT' || type === 'FLOAT' || type === 'DECIMAL' || type === 'DOUBLE') && key !== 'HDI' && key !== 'unitValueInUSD') {
        if (typeof value === 'string') {
            // extracts numeric value from string and converts it to number and manage zeros
            const match = value.match(/[\d,]+(\.\d+)?/);
            if (match) {
                return manageZerosAfterDecimal(Number(match[0].replace(/,/g, '')));
            }
        }
        if (typeof value === 'number') {
            return manageZerosAfterDecimal(value);
        }
    }
    return null;
}

// Table definitions for MySQL
const countryGeneralTable = {
    country: 'VARCHAR',
    capitalCity: 'VARCHAR',
    largestCity: 'VARCHAR',
    populationGrowthAnnual: 'DECIMAL',
    officialName: 'VARCHAR',
    continent: 'VARCHAR',
    landlockedStatus: 'VARCHAR',
    nationalAnthemEnglish: 'TEXT',
    nationalAnthemNative: 'TEXT',
    currencyName: 'VARCHAR',
    currencySymbol: 'VARCHAR',
    nationalBird: 'VARCHAR',
    nationalColors: 'VARCHAR',
    nationalFlower: 'VARCHAR',
    nationalSport: 'VARCHAR',
    nationalAnimal: 'VARCHAR',
    demonyms: 'VARCHAR',
    drivingSide: 'VARCHAR',
    callingCode: 'VARCHAR',
    ISO3166Code: 'VARCHAR',
    internetTLD: 'VARCHAR',
    latitude: 'VARCHAR',
    longitude: 'VARCHAR',
    areaInSqKm: 'DOUBLE',
    areaInSqMile: 'DOUBLE',
    waterPercentage: 'VARCHAR',
    officialLanguages: 'TEXT',
    majorReligion: 'VARCHAR',
    majorReligionPercentage: 'FLOAT',
    governmentStatus: 'VARCHAR',
    totalTimezones: 'TEXT',
    timezoneNormal: 'TEXT',
    timezoneSummer: 'TEXT',
    DST: 'VARCHAR',
    DSTStart: 'VARCHAR',
    DSTEnd: 'VARCHAR',
    DSTDuration: 'VARCHAR',
    population: 'TEXT',
    age0_14: 'FLOAT',
    age15_64: 'FLOAT',
    age65Plus: 'FLOAT',
    fertilityRate: 'DOUBLE',
    mortalityRateFemale: 'DOUBLE',
    mortalityRateMale: 'DOUBLE',
    infantMortalityRate: 'DOUBLE',
    topCauseOfDeath: 'VARCHAR',
    topCauseOfDeathNumber: 'FLOAT',
    lowestCauseOfDeath: 'VARCHAR',
    lowestCauseOfDeathNumber: 'FLOAT',
    roadTrafficDeaths: 'FLOAT',
    suicideDeaths: 'FLOAT',
    numberOfNewHIVInfections: 'FLOAT',
    prevalenceOfHypertensionPercentage: 'FLOAT',
    adultObesityPercentage: 'FLOAT',
    tobaccoConsumptionPercentage: 'FLOAT',
    alcoholConsumptionPercentage: 'FLOAT',
    startOfWeek: 'VARCHAR',
    unitValueInUSD: 'FLOAT'
};

const countryCostTable = {
    country: 'VARCHAR',
    rent1bedroomflatInCityCenter: 'FLOAT',
    rent2bedroomflatInCityCenter: 'FLOAT',
    rent3bedroomflatInCityCenter: 'FLOAT',
    rent1bedroomflatOutsideCityCenter: 'FLOAT',
    rent2bedroomflatOutsideCityCenter: 'FLOAT',
    rent3bedroomflatOutsideCityCenter: 'FLOAT',
    mortgageRatesPerMonth: 'FLOAT',
    realEstateAgentsCommissionFees: 'FLOAT',
    homeFurnishing: 'FLOAT',
    electricityCostPerMonth: 'FLOAT',
    heatingCostPerMonth: 'FLOAT',
    coolingCostPerMonth: 'FLOAT',
    waterCostPerMonth: 'FLOAT',
    wifiCostPerMonth: 'FLOAT',
    mobilePhonePlanCostPerMonth: 'FLOAT',
    cableTVServicePerMonth: 'FLOAT',
    landlinePhoneServicePerMonth: 'FLOAT',
    milk1Liter: 'FLOAT',
    water1Liter: 'FLOAT',
    bread500g: 'FLOAT',
    rice1Kg: 'FLOAT',
    eggsDozen: 'FLOAT',
    cheese1Kg: 'FLOAT',
    chickenBreasts1Kg: 'FLOAT',
    beef1Kg: 'FLOAT',
    apples1Kg: 'FLOAT',
    bananas1Kg: 'FLOAT',
    oranges1Kg: 'FLOAT',
    tomatoes1Kg: 'FLOAT',
    potatoes1Kg: 'FLOAT',
    lemons1Kg: 'FLOAT',
    onions1Kg: 'FLOAT',
    lentils1Kg: 'FLOAT',
    wineMidRangeBottle: 'FLOAT',
    glassOfWine: 'FLOAT',
    domesticBeerHalfLiter: 'FLOAT',
    importedBeerHalfLiter: 'FLOAT',
    domesticAlcohol1Liter: 'FLOAT',
    brandedAlcohol1Liter: 'FLOAT',
    mealAtInexpensiveRestaurant: 'FLOAT',
    threeCourseMealForTwo: 'FLOAT',
    fastFoodComboMeal: 'FLOAT',
    coffee: 'FLOAT',
    softDrink: 'FLOAT',
    pizza: 'FLOAT',
    takeoutDeliveryMeal: 'FLOAT',
    cigarettesPackOf20: 'FLOAT',
    publicTransportPass: 'FLOAT',
    singlePublicTransportTicket: 'FLOAT',
    trainTickets: 'FLOAT',
    airfareDomestic: 'FLOAT',
    taxiStartFare: 'FLOAT',
    taxiRatePerKm: 'FLOAT',
    carRentalPerDay: 'FLOAT',
    parkingFeesCityCenterPerHour: 'FLOAT',
    parkingFeesOutsideCityCenterPerHour: 'FLOAT',
    fuelPerLiter: 'FLOAT',
    fuelPerGallon: 'FLOAT',
    carInsurance: 'FLOAT',
    carMaintenance: 'FLOAT',
    vehicleRegistration: 'FLOAT',
    tollFees: 'FLOAT',
    carLoanInterestRates: 'FLOAT',
    vehiclePurchasePrice: 'FLOAT',
    drivingLicenseFees: 'FLOAT',
    doctorsVisit: 'FLOAT',
    specialistsVisit: 'FLOAT',
    dentistsVisit: 'FLOAT',
    eyeExam: 'FLOAT',
    prescriptionMedication: 'FLOAT',
    overTheCounterMedication: 'FLOAT',
    healthInsurancePremiums: 'FLOAT',
    healthInsuranceDeductibles: 'FLOAT',
    emergencyRoomVisit: 'FLOAT',
    hospitalStayPerNight: 'FLOAT',
    physicalTherapy: 'FLOAT',
    mentalHealthCounseling: 'FLOAT',
    vaccinations: 'FLOAT',
    preventiveHealthScreenings: 'FLOAT',
    cosmeticProcedures: 'FLOAT',
    opticalGlasses: 'FLOAT',
    contactLenses: 'FLOAT',
    shampooPrice: 'FLOAT',
    toothpastePrice: 'FLOAT',
    haircuts: 'FLOAT',
    hairColoring: 'FLOAT',
    manicurePedicureCost: 'FLOAT',
    spaTreatment: 'FLOAT',
    pairOfNikeRunningShoes: 'FLOAT',
    mensDressShirt: 'FLOAT',
    mensSuit: 'FLOAT',
    mensJeans: 'FLOAT',
    mensCasualShoes: 'FLOAT',
    mensFormalShoes: 'FLOAT',
    womensDress: 'FLOAT',
    womensJeans: 'FLOAT',
    womensCasualShoes: 'FLOAT',
    womensFormalShoes: 'FLOAT',
    winterCoatForAdults: 'FLOAT',
    summerDress: 'FLOAT',
    sweater: 'FLOAT',
    underwearMen: 'FLOAT',
    underwearWomen: 'FLOAT',
    socksMen: 'FLOAT',
    socksWomen: 'FLOAT',
    sportsWear: 'FLOAT',
    movieTicket: 'FLOAT',
    theaterTicket: 'FLOAT',
    concertTicket: 'FLOAT',
    sportsEventTicket: 'FLOAT',
    gymMembership: 'FLOAT',
    swimmingPoolAccess: 'FLOAT',
    museumEntry: 'FLOAT',
    zooEntry: 'FLOAT',
    amusementParkEntry: 'FLOAT',
    bowling: 'FLOAT',
    miniGolf: 'FLOAT',
    videoGames: 'FLOAT',
    streamingServices: 'FLOAT',
    outdoorEquipmentRental: 'FLOAT',
    themeParkAnnualPass: 'FLOAT',
    childrensJeans: 'FLOAT',
    childrensSneakers: 'FLOAT',
    childrensWinterCoat: 'FLOAT',
    daycareInfant: 'FLOAT',
    daycareToddler: 'FLOAT',
    childcareForSickDays: 'FLOAT',
    earlyChildhoodEducationPrograms: 'FLOAT',
    extracurricularActivities: 'FLOAT',
    summerCamp: 'FLOAT',
    preSchool: 'FLOAT',
    primarySchoolFees: 'FLOAT',
    secondarySchoolFees: 'FLOAT',
    privateSchoolFees: 'FLOAT',
    universityTuition: 'FLOAT',
    universityTuitionPrivate: 'FLOAT',
    afterSchoolActivities: 'FLOAT',
    specialEducationServices: 'FLOAT',
    tutoring: 'FLOAT',
    textbooks: 'FLOAT',
    schoolSupplies: 'FLOAT',
    languageClasses: 'FLOAT',
    parentingClasses: 'FLOAT',
    fitnessClass: 'FLOAT',
    musicLessons: 'FLOAT',
    danceLessons: 'FLOAT',
    artClasses: 'FLOAT',
    readingMaterials: 'FLOAT',
    educationalSoftware: 'FLOAT',
    averageGrossSalary: 'FLOAT',
    averageNetSalary: 'FLOAT',
    minimumWage: 'FLOAT',
    socialSecurityContributions: 'FLOAT',
    pensionContributions: 'FLOAT',
    costOfLivingIndex: 'FLOAT',
    medianHouseholdIncome: 'FLOAT',
    averageBonus: 'FLOAT',
    legalConsultationPerHourRate: 'FLOAT',
    accountingServicesPerHourRate: 'FLOAT',
    ITSupportServicesPerHourRate: 'FLOAT',
    technicianServicesPerHourRate: 'FLOAT',
};

const countryStandardTable = {
    country: 'VARCHAR',
    GDPNominal: 'VARCHAR',
    GDPPerCapita: 'FLOAT',
    GINI: 'FLOAT',
    inflationOnConsumerPrices: 'FLOAT',
    centralGovernmentDebt: 'FLOAT',
    HDI: 'FLOAT',
    humanCapitalIndex: 'FLOAT',
    literacyRate: 'FLOAT',
    lifeExpectancyRatio: 'FLOAT',
    healthyLifeExpectancyRatio: 'FLOAT',
    povertyRatio: 'FLOAT',
    unemploymentPercentageOfTotalLabourForce: 'FLOAT',
    grossNationalExpenditure: 'FLOAT',
    currentHealthExpenditurePercentage: 'FLOAT',
    researchAndDevelopmentExpenditure: 'FLOAT',
    governmentExpenditureOnEducation: 'FLOAT',
    internationalTourismExpenditureUSD: 'FLOAT',
    numberOfInternationalTouristsArrival: 'INT',
    militaryExpenditure: 'FLOAT',
    densityOfDoctorsNumber: 'FLOAT',
    densityOfNursesNumber: 'FLOAT',
    densityOfPharmacistsNumber: 'FLOAT',
    hospitalBedsPer1000Peoples: 'FLOAT',
    pregnantWomenReceivingPrenatalCare: 'FLOAT',
    agriculturalLand: 'FLOAT',
    forestArea: 'FLOAT',
    CO2Emission: 'FLOAT',
    accessToElectricity: 'FLOAT',
    accessToInternet: 'FLOAT',
    annualFreshWaterWithdrawls: 'FLOAT',
    timeRequiredToStartABusinessDays: 'FLOAT',
    newBusinessesRegisteredNumber: 'INT',
    newBusinessesRegistrationDensityPer1000People: 'FLOAT',
    costOfBusinessStartUpProcedures: 'FLOAT',
    importsOfGoodsAndServicesPercentageOfGDP: 'FLOAT',
    fuelImportsPercentageOfMerchandiseImports: 'FLOAT',
    costToImportBorderComplianceUSD: 'FLOAT',
    costToImportDocumentryComplianceUSD: 'FLOAT',
    timeToImportBorderComplianceHours: 'FLOAT',
    timeToImportDocumentryComplianceHours: 'FLOAT',
    exportsOfGoodsAndServicesPercentageOfGDP: 'FLOAT',
    fuelExportsPercentageOfMerchandiseExports: 'FLOAT',
    costToExportBorderComplianceUSD: 'FLOAT',
    costToExportDocumentryComplianceUSD: 'FLOAT',
    timeToExportBorderComplianceHours: 'FLOAT',
    timeToExportDocumentryComplianceHours: 'FLOAT',
    grossNationalSavings: 'FLOAT',
    taxRevenue: 'FLOAT',
    taxesOnExportsPercentageOfTaxRevenue: 'FLOAT',
    taxesOnGoodsAndServicesPercentageOfRevenue: 'FLOAT',
    taxesOnInternationalTradePercentageOfRevenue: 'FLOAT',
    timeToPrepareAndPayTaxesHours: 'FLOAT',
    customsAndOtherImportDutiesPercentageOfTaxRevenue: 'FLOAT',
    corporateTaxRates: 'VARCHAR',
    incomeTaxRates: 'VARCHAR',
    salesTaxRates: 'VARCHAR',
    propertyTaxRates: 'VARCHAR',
    currencySymbol: 'VARCHAR',
};

const USStateGeneralTable = {
    state: 'VARCHAR',
    officialName: 'VARCHAR',
    nicknames: 'VARCHAR',
    landlockedStatus: 'VARCHAR',
    capitalCity: 'VARCHAR',
    latitude: 'VARCHAR',
    longitude: 'VARCHAR',
    mottoLatin: 'VARCHAR',
    mottoEnglish: 'VARCHAR',
    stateAnthemNative: 'VARCHAR',
    stateAnthemEnglish: 'VARCHAR',
    largestCity: 'VARCHAR',
    demonyms: 'VARCHAR',
    officialWebsites: 'VARCHAR',
    ISO3166Code: 'VARCHAR',
    areaInSqMile: 'FLOAT',
    areaInSqKm: 'FLOAT',
    waterPercentage: 'VARCHAR',
    officialLanguages: 'TEXT',
    stateAnimal: 'VARCHAR',
    stateBird: 'VARCHAR',
    stateFlower: 'VARCHAR',
    stateColors: 'VARCHAR',
    stateSport: 'VARCHAR',
    stateTree: 'VARCHAR',
    totalTimezones: 'TEXT',
    timezoneNormal: 'TEXT',
    timezoneSummer: 'TEXT',
    DSTStart: 'VARCHAR',
    DSTEnd: 'VARCHAR',
    DSTDuration: 'VARCHAR',
    population: 'BIGINT',
    veteransPercentage: 'FLOAT',
    veteransPercentageMale: 'FLOAT',
    veteransPercentageFemale: 'FLOAT',
    currencyName: 'VARCHAR',
    currencySymbol: 'VARCHAR',
    startOfWeek: 'VARCHAR',
    drivingSide: 'VARCHAR',
    callingCode: 'VARCHAR',
};

const USStateCostTable = {
    state: 'VARCHAR',
    rent1bedroomflatInCityCenter: 'FLOAT',
    rent2bedroomflatInCityCenter: 'FLOAT',
    rent3bedroomflatInCityCenter: 'FLOAT',
    rent1bedroomflatOutsideCityCenter: 'FLOAT',
    rent2bedroomflatOutsideCityCenter: 'FLOAT',
    rent3bedroomflatOutsideCityCenter: 'FLOAT',
    mortgageRatesPerMonth: 'FLOAT',
    realEstateAgentsCommissionFees: 'FLOAT',
    homeFurnishing: 'FLOAT',
    electricityCostPerMonth: 'FLOAT',
    heatingCostPerMonth: 'FLOAT',
    coolingCostPerMonth: 'FLOAT',
    waterCostPerMonth: 'FLOAT',
    wifiCostPerMonth: 'FLOAT',
    mobilePhonePlanCostPerMonth: 'FLOAT',
    cableTVServicePerMonth: 'FLOAT',
    landlinePhoneServicePerMonth: 'FLOAT',
    milk1Liter: 'FLOAT',
    water1Liter: 'FLOAT',
    bread500g: 'FLOAT',
    rice1Kg: 'FLOAT',
    eggsDozen: 'FLOAT',
    cheese1Kg: 'FLOAT',
    chickenBreasts1Kg: 'FLOAT',
    beef1Kg: 'FLOAT',
    apples1Kg: 'FLOAT',
    bananas1Kg: 'FLOAT',
    oranges1Kg: 'FLOAT',
    tomatoes1Kg: 'FLOAT',
    potatoes1Kg: 'FLOAT',
    lemons1Kg: 'FLOAT',
    onions1Kg: 'FLOAT',
    lentils1Kg: 'FLOAT',
    wineMidRangeBottle: 'FLOAT',
    glassOfWine: 'FLOAT',
    domesticBeerHalfLiter: 'FLOAT',
    importedBeerHalfLiter: 'FLOAT',
    domesticAlcohol1Liter: 'FLOAT',
    brandedAlcohol1Liter: 'FLOAT',
    mealAtInexpensiveRestaurant: 'FLOAT',
    threeCourseMealForTwo: 'FLOAT',
    fastFoodComboMeal: 'FLOAT',
    coffee: 'FLOAT',
    softDrink: 'FLOAT',
    pizza: 'FLOAT',
    takeoutDeliveryMeal: 'FLOAT',
    cigarettesPackOf20: 'FLOAT',
    publicTransportPass: 'FLOAT',
    singlePublicTransportTicket: 'FLOAT',
    trainTickets: 'FLOAT',
    airfareDomestic: 'FLOAT',
    taxiStartFare: 'FLOAT',
    taxiRatePerKm: 'FLOAT',
    carRentalPerDay: 'FLOAT',
    parkingFeesCityCenterPerHour: 'FLOAT',
    parkingFeesOutsideCityCenterPerHour: 'FLOAT',
    fuelPerLiter: 'FLOAT',
    fuelPerGallon: 'FLOAT',
    carInsurance: 'FLOAT',
    carMaintenance: 'FLOAT',
    vehicleRegistration: 'FLOAT',
    tollFees: 'FLOAT',
    carLoanInterestRates: 'FLOAT',
    vehiclePurchasePrice: 'FLOAT',
    drivingLicenseFees: 'FLOAT',
    doctorsVisit: 'FLOAT',
    specialistsVisit: 'FLOAT',
    dentistsVisit: 'FLOAT',
    eyeExam: 'FLOAT',
    prescriptionMedication: 'FLOAT',
    overTheCounterMedication: 'FLOAT',
    healthInsurancePremiums: 'FLOAT',
    healthInsuranceDeductibles: 'FLOAT',
    emergencyRoomVisit: 'FLOAT',
    hospitalStayPerNight: 'FLOAT',
    physicalTherapy: 'FLOAT',
    mentalHealthCounseling: 'FLOAT',
    vaccinations: 'FLOAT',
    preventiveHealthScreenings: 'FLOAT',
    cosmeticProcedures: 'FLOAT',
    opticalGlasses: 'FLOAT',
    contactLenses: 'FLOAT',
    shampooPrice: 'FLOAT',
    toothpastePrice: 'FLOAT',
    haircuts: 'FLOAT',
    hairColoring: 'FLOAT',
    manicurePedicureCost: 'FLOAT',
    spaTreatment: 'FLOAT',
    pairOfNikeRunningShoes: 'FLOAT',
    mensDressShirt: 'FLOAT',
    mensSuit: 'FLOAT',
    mensJeans: 'FLOAT',
    mensCasualShoes: 'FLOAT',
    mensFormalShoes: 'FLOAT',
    womensDress: 'FLOAT',
    womensJeans: 'FLOAT',
    womensCasualShoes: 'FLOAT',
    womensFormalShoes: 'FLOAT',
    winterCoatForAdults: 'FLOAT',
    summerDress: 'FLOAT',
    sweater: 'FLOAT',
    underwearMen: 'FLOAT',
    underwearWomen: 'FLOAT',
    socksMen: 'FLOAT',
    socksWomen: 'FLOAT',
    sportsWear: 'FLOAT',
    movieTicket: 'FLOAT',
    theaterTicket: 'FLOAT',
    concertTicket: 'FLOAT',
    sportsEventTicket: 'FLOAT',
    gymMembership: 'FLOAT',
    swimmingPoolAccess: 'FLOAT',
    museumEntry: 'FLOAT',
    zooEntry: 'FLOAT',
    amusementParkEntry: 'FLOAT',
    bowling: 'FLOAT',
    miniGolf: 'FLOAT',
    videoGames: 'FLOAT',
    streamingServices: 'FLOAT',
    outdoorEquipmentRental: 'FLOAT',
    themeParkAnnualPass: 'FLOAT',
    childrensJeans: 'FLOAT',
    childrensSneakers: 'FLOAT',
    childrensWinterCoat: 'FLOAT',
    daycareInfant: 'FLOAT',
    daycareToddler: 'FLOAT',
    childcareForSickDays: 'FLOAT',
    earlyChildhoodEducationPrograms: 'FLOAT',
    extracurricularActivities: 'FLOAT',
    summerCamp: 'FLOAT',
    preSchool: 'FLOAT',
    primarySchoolFees: 'FLOAT',
    secondarySchoolFees: 'FLOAT',
    privateSchoolFees: 'FLOAT',
    universityTuition: 'FLOAT',
    universityTuitionPrivate: 'FLOAT',
    afterSchoolActivities: 'FLOAT',
    specialEducationServices: 'FLOAT',
    tutoring: 'FLOAT',
    textbooks: 'FLOAT',
    schoolSupplies: 'FLOAT',
    languageClasses: 'FLOAT',
    parentingClasses: 'FLOAT',
    fitnessClass: 'FLOAT',
    musicLessons: 'FLOAT',
    danceLessons: 'FLOAT',
    artClasses: 'FLOAT',
    readingMaterials: 'FLOAT',
    educationalSoftware: 'FLOAT',
    averageGrossSalary: 'FLOAT',
    averageNetSalary: 'FLOAT',
    minimumWage: 'FLOAT',
    socialSecurityContributions: 'FLOAT',
    pensionContributions: 'FLOAT',
    costOfLivingIndex: 'FLOAT',
    medianHouseholdIncome: 'FLOAT',
    averageBonus: 'FLOAT',
    legalConsultationPerHourRate: 'FLOAT',
    accountingServicesPerHourRate: 'FLOAT',
    ITSupportServicesPerHourRate: 'FLOAT',
    technicianServicesPerHourRate: 'FLOAT',
};

const USStateStandardTable = {
    state: 'VARCHAR',
    population: 'INT',
    HDI: 'FLOAT',
    literacyRate: 'FLOAT',
    lifeExpectancyRatio: 'FLOAT',
    povertyRatio: 'FLOAT',
    employmentRate: 'FLOAT',
    GDPNominal: 'FLOAT',
    GDPPerCapita: 'FLOAT',
    GINI: 'FLOAT',
    totalRegisteredPhysicians: 'INT',
    totalRegisteredNurses: 'INT',
    availableHospitalBeds: 'INT',
    disabilityPercentage: 'FLOAT',
    populationWithoutHealthInsuranceCoverage: 'FLOAT',
    salesTaxRates: 'VARCHAR',
    propertyTaxRates: 'VARCHAR',
    gasAndFuelTaxRatesPerGallon: 'FLOAT',
    beerTaxPerGallon: 'FLOAT',
    incomeTaxRates: 'VARCHAR',
    corporateTaxRates: 'VARCHAR',
    medianAge: 'FLOAT',
    sexRatioMalesPer100Females: 'FLOAT',
    age60to64: 'FLOAT',
    age65to74: 'FLOAT',
    age75to84: 'FLOAT',
    age85AndOver: 'FLOAT',
    medianIncomeDollars: 'FLOAT',
    agricultureForestryFishing: 'FLOAT',
    construction: 'FLOAT',
    manufacturing: 'FLOAT',
    wholesaleTrade: 'FLOAT',
    retailTrade: 'FLOAT',
    transportationAndWarehousing: 'FLOAT',
    ITAndInformation: 'FLOAT',
    financeAndRealEstate: 'FLOAT',
    educationAndHealthCare: 'FLOAT',
    artsEntertainmentRecreation: 'FLOAT',
    publicAdministration: 'FLOAT',
    workFromHome: 'FLOAT',
    meanTravelTimeToWorkMinutes: 'FLOAT',
    privateWageandSalaryWorkers: 'FLOAT',
    governmentWorkers: 'FLOAT',
    selfEmployedInNotOwnIncorporatedBusiness: 'FLOAT',
    accessToInternet: 'FLOAT',
    accessToElectricity: 'FLOAT',
    forestArea: 'FLOAT',
    agriculturalLand: 'FLOAT',
    highSchoolGraduate: 'FLOAT',
    associateDegreePercentage: 'FLOAT',
    bachelorsDegreePercentage: 'FLOAT',
    graduateDegreePercentage: 'FLOAT',
    onlyEnglishSpeakingPercentage: 'FLOAT',
    whiteRace: 'INT',
    blackOrAfricanAmericanRace: 'INT',
    americanIndianAndAlaskaNativeRace: 'INT',
    asianRace: 'INT',
    hawaiianAndPacificIslanderRace: 'INT',
    twoOrMoreRaces: 'INT',
    hispanicOrLatino: 'INT',
    marriedCoupleHouseholdPercentage: 'FLOAT',
    maleHouseholderPercentage: 'FLOAT',
    femaleHouseholderPercentage: 'FLOAT',
    averageFamilySize: 'FLOAT',
    homeOwnershipRate: 'FLOAT',
    medianGrossRent: 'FLOAT',
    totalHousingUnits: 'INT',
    marriedNotSeparatedPopulationPercentageMale: 'FLOAT',
    marriedNotSeparatedPopulationPercentageFemale: 'FLOAT',
    neverMarriedPopulationPercentageMale: 'FLOAT',
    neverMarriedPopulationPercentageFemale: 'FLOAT',
    separatedPopulationPercentageMale: 'FLOAT',
    separatedPopulationPercentageFemale: 'FLOAT',
    divorcedPopulationPercentageMale: 'FLOAT',
    divorcedPopulationPercentageFemale: 'FLOAT',
    widowedPopulationPercentageMale: 'FLOAT',
    widowedPopulationPercentageFemale: 'FLOAT',
};

// Insert many function for MySQL
const insertMany = async (stmt, data, tableDefinition, db) => {
    try {
        // Begin the transaction
        await db.beginTransaction();

        for (const row of data) {
            const values = Object.entries(row).map(([key, value]) => {
                if (key === 'HDI' || key === 'unitValueInUSD') {
                    return parseFloat(value) || null
                }
                if (key === 'population' && Array.isArray(value)) {
                    value = JSON.stringify(value);  // Convert array to JSON string
                }
                return convertToNumber(value, tableDefinition[key] || 'VARCHAR', key);
            });

            // Execute the prepared statement with the extracted values
            await db.execute(stmt, values);
        }

        // Commit the transaction after all rows have been processed
        await db.commit();
        console.log('Transaction committed successfully');
    } catch (error) {
        // Rollback the transaction in case of error
        await db.rollback();
        console.error(`Transaction rolled back due to error: ${error.message}`);
    }
};

// Insert statements for MySQL
const insertCountryGeneralInfo = `
    INSERT INTO country_general_info (
  country, capitalCity, largestCity, populationGrowthAnnual, officialName, continent, landlockedStatus, nationalAnthemEnglish, nationalAnthemNative, currencyName, currencySymbol, nationalBird, nationalColors, nationalFlower, nationalSport, nationalAnimal, demonyms, drivingSide, callingCode, ISO3166Code, internetTLD, latitude, longitude, areaInSqKm, areaInSqMile, waterPercentage, officialLanguages, majorReligion, majorReligionPercentage, governmentStatus, totalTimezones, timezoneNormal, timezoneSummer, DST, DSTStart, DSTEnd, DSTDuration, population, age0_14, age15_64, age65Plus, fertilityRate, mortalityRateFemale, mortalityRateMale, infantMortalityRate, topCauseOfDeath, topCauseOfDeathNumber, lowestCauseOfDeath, lowestCauseOfDeathNumber, roadTrafficDeaths, suicideDeaths, numberOfNewHIVInfections, prevalenceOfHypertensionPercentage, adultObesityPercentage, tobaccoConsumptionPercentage, alcoholConsumptionPercentage, startOfWeek, unitValueInUSD) 
  VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`;

const insertCountryCostInfo = `
    INSERT INTO country_cost_info (
        country, rent1bedroomflatInCityCenter, rent2bedroomflatInCityCenter, rent3bedroomflatInCityCenter, rent1bedroomflatOutsideCityCenter, rent2bedroomflatOutsideCityCenter, rent3bedroomflatOutsideCityCenter, mortgageRatesPerMonth, realEstateAgentsCommissionFees, homeFurnishing, electricityCostPerMonth, heatingCostPerMonth, coolingCostPerMonth, waterCostPerMonth, wifiCostPerMonth, mobilePhonePlanCostPerMonth, cableTVServicePerMonth, landlinePhoneServicePerMonth, milk1Liter, water1Liter, bread500g, rice1Kg, eggsDozen, cheese1Kg, chickenBreasts1Kg, beef1Kg, apples1Kg, bananas1Kg, oranges1Kg, tomatoes1Kg, potatoes1Kg, lemons1Kg, onions1Kg, lentils1Kg, wineMidRangeBottle, glassOfWine, domesticBeerHalfLiter, importedBeerHalfLiter, domesticAlcohol1Liter, brandedAlcohol1Liter, mealAtInexpensiveRestaurant, threeCourseMealForTwo, fastFoodComboMeal, coffee, softDrink, pizza, takeoutDeliveryMeal, cigarettesPackOf20, publicTransportPass, singlePublicTransportTicket, trainTickets, airfareDomestic, taxiStartFare, taxiRatePerKm, carRentalPerDay, parkingFeesCityCenterPerHour, parkingFeesOutsideCityCenterPerHour, fuelPerLiter, fuelPerGallon, carInsurance, carMaintenance, vehicleRegistration, tollFees, carLoanInterestRates, vehiclePurchasePrice, drivingLicenseFees, doctorsVisit, specialistsVisit, dentistsVisit, eyeExam, prescriptionMedication, overTheCounterMedication, healthInsurancePremiums, healthInsuranceDeductibles, emergencyRoomVisit, hospitalStayPerNight, physicalTherapy, mentalHealthCounseling, vaccinations, preventiveHealthScreenings, cosmeticProcedures, opticalGlasses, contactLenses, shampooPrice, toothpastePrice, haircuts, hairColoring, manicurePedicureCost, spaTreatment, pairOfNikeRunningShoes, mensDressShirt, mensSuit, mensJeans, mensCasualShoes, mensFormalShoes, womensDress, womensJeans, womensCasualShoes, womensFormalShoes, winterCoatForAdults, summerDress, sweater, underwearMen, underwearWomen, socksMen, socksWomen, sportsWear, movieTicket, theaterTicket, concertTicket, sportsEventTicket, gymMembership, swimmingPoolAccess, museumEntry, zooEntry, amusementParkEntry, bowling, miniGolf, videoGames, streamingServices, outdoorEquipmentRental, themeParkAnnualPass, childrensJeans, childrensSneakers, childrensWinterCoat, daycareInfant, daycareToddler, childcareForSickDays, earlyChildhoodEducationPrograms, extracurricularActivities, summerCamp, preSchool, primarySchoolFees, secondarySchoolFees, privateSchoolFees, universityTuition, universityTuitionPrivate, afterSchoolActivities, specialEducationServices, tutoring, textbooks, schoolSupplies, languageClasses, parentingClasses, fitnessClass, musicLessons, danceLessons, artClasses, readingMaterials, educationalSoftware, averageGrossSalary, averageNetSalary, minimumWage, socialSecurityContributions, pensionContributions, costOfLivingIndex, medianHouseholdIncome, averageBonus, legalConsultationPerHourRate, accountingServicesPerHourRate, ITSupportServicesPerHourRate, technicianServicesPerHourRate
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )
`;

const insertCountryStandardInfo = `
    INSERT INTO country_standard_info (country, GDPNominal, GDPPerCapita, GINI, inflationOnConsumerPrices, centralGovernmentDebt, HDI, humanCapitalIndex, literacyRate, lifeExpectancyRatio, healthyLifeExpectancyRatio, povertyRatio, unemploymentPercentageOfTotalLabourForce, grossNationalExpenditure, currentHealthExpenditurePercentage, researchAndDevelopmentExpenditure, governmentExpenditureOnEducation, internationalTourismExpenditureUSD, numberOfInternationalTouristsArrival, militaryExpenditure, densityOfDoctorsNumber, densityOfNursesNumber, densityOfPharmacistsNumber, hospitalBedsPer1000Peoples, pregnantWomenReceivingPrenatalCare, agriculturalLand, forestArea, CO2Emission, accessToElectricity, accessToInternet, annualFreshWaterWithdrawls, timeRequiredToStartABusinessDays, newBusinessesRegisteredNumber, newBusinessesRegistrationDensityPer1000People, costOfBusinessStartUpProcedures,importsOfGoodsAndServicesPercentageOfGDP, fuelImportsPercentageOfMerchandiseImports, costToImportBorderComplianceUSD, costToImportDocumentryComplianceUSD, timeToImportBorderComplianceHours, timeToImportDocumentryComplianceHours, exportsOfGoodsAndServicesPercentageOfGDP, fuelExportsPercentageOfMerchandiseExports, costToExportBorderComplianceUSD, costToExportDocumentryComplianceUSD, timeToExportBorderComplianceHours, timeToExportDocumentryComplianceHours, grossNationalSavings, taxRevenue, taxesOnExportsPercentageOfTaxRevenue, taxesOnGoodsAndServicesPercentageOfRevenue, taxesOnInternationalTradePercentageOfRevenue, timeToPrepareAndPayTaxesHours, customsAndOtherImportDutiesPercentageOfTaxRevenue, corporateTaxRates, incomeTaxRates, salesTaxRates, propertyTaxRates, currencySymbol) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`;

const insertUSStateGeneralInfo = `
    INSERT INTO us_state_general_info (
        state, officialName, nicknames, landlockedStatus, capitalCity, latitude, longitude,
        mottoLatin, mottoEnglish, stateAnthemNative, stateAnthemEnglish, largestCity, demonyms,
        officialWebsites, ISO3166Code, areaInSqMile, areaInSqKm, waterPercentage, officialLanguages,
        stateAnimal, stateBird, stateFlower, stateColors, stateSport, stateTree, totalTimezones, timezoneNormal,
        timezoneSummer, DSTStart, DSTEnd, DSTDuration, population, veteransPercentage,
        veteransPercentageMale, veteransPercentageFemale, currencyName, currencySymbol, startOfWeek,
        drivingSide, callingCode
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`;

const insertUSStateCostInfo = `
    INSERT INTO us_state_cost_info (
        state, rent1bedroomflatInCityCenter, rent2bedroomflatInCityCenter, rent3bedroomflatInCityCenter, rent1bedroomflatOutsideCityCenter, rent2bedroomflatOutsideCityCenter, rent3bedroomflatOutsideCityCenter, mortgageRatesPerMonth, realEstateAgentsCommissionFees, homeFurnishing, electricityCostPerMonth, heatingCostPerMonth, coolingCostPerMonth, waterCostPerMonth, wifiCostPerMonth, mobilePhonePlanCostPerMonth, cableTVServicePerMonth, landlinePhoneServicePerMonth, milk1Liter, water1Liter, bread500g, rice1Kg, eggsDozen, cheese1Kg, chickenBreasts1Kg, beef1Kg, apples1Kg, bananas1Kg, oranges1Kg, tomatoes1Kg, potatoes1Kg, lemons1Kg, onions1Kg, lentils1Kg, wineMidRangeBottle, glassOfWine, domesticBeerHalfLiter, importedBeerHalfLiter, domesticAlcohol1Liter, brandedAlcohol1Liter, mealAtInexpensiveRestaurant, threeCourseMealForTwo, fastFoodComboMeal, coffee, softDrink, pizza, takeoutDeliveryMeal, cigarettesPackOf20, publicTransportPass, singlePublicTransportTicket, trainTickets, airfareDomestic, taxiStartFare, taxiRatePerKm, carRentalPerDay, parkingFeesCityCenterPerHour, parkingFeesOutsideCityCenterPerHour, fuelPerLiter, fuelPerGallon, carInsurance, carMaintenance, vehicleRegistration, tollFees, carLoanInterestRates, vehiclePurchasePrice, drivingLicenseFees, doctorsVisit, specialistsVisit, dentistsVisit, eyeExam, prescriptionMedication, overTheCounterMedication, healthInsurancePremiums, healthInsuranceDeductibles, emergencyRoomVisit, hospitalStayPerNight, physicalTherapy, mentalHealthCounseling, vaccinations, preventiveHealthScreenings, cosmeticProcedures, opticalGlasses, contactLenses, shampooPrice, toothpastePrice, haircuts, hairColoring, manicurePedicureCost, spaTreatment, pairOfNikeRunningShoes, mensDressShirt, mensSuit, mensJeans, mensCasualShoes, mensFormalShoes, womensDress, womensJeans, womensCasualShoes, womensFormalShoes, winterCoatForAdults, summerDress, sweater, underwearMen, underwearWomen, socksMen, socksWomen, sportsWear, movieTicket, theaterTicket, concertTicket, sportsEventTicket, gymMembership, swimmingPoolAccess, museumEntry, zooEntry, amusementParkEntry, bowling, miniGolf, videoGames, streamingServices, outdoorEquipmentRental, themeParkAnnualPass, childrensJeans, childrensSneakers, childrensWinterCoat, daycareInfant, daycareToddler, childcareForSickDays, earlyChildhoodEducationPrograms, extracurricularActivities, summerCamp, preSchool, primarySchoolFees, secondarySchoolFees, privateSchoolFees, universityTuition, universityTuitionPrivate, afterSchoolActivities, specialEducationServices, tutoring, textbooks, schoolSupplies, languageClasses, parentingClasses, fitnessClass, musicLessons, danceLessons, artClasses, readingMaterials, educationalSoftware, averageGrossSalary, averageNetSalary, minimumWage, socialSecurityContributions, pensionContributions, costOfLivingIndex, medianHouseholdIncome, averageBonus, legalConsultationPerHourRate, accountingServicesPerHourRate, ITSupportServicesPerHourRate, technicianServicesPerHourRate
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )
`;

const insertUSStateStandardInfo = `
    INSERT INTO us_state_standard_info (
        state, population, HDI, literacyRate, lifeExpectancyRatio, povertyRatio, employmentRate, GDPNominal, GDPPerCapita, GINI, totalRegisteredPhysicians, totalRegisteredNurses, availableHospitalBeds, disabilityPercentage, populationWithoutHealthInsuranceCoverage, salesTaxRates, propertyTaxRates, gasAndFuelTaxRatesPerGallon, beerTaxPerGallon, incomeTaxRates, corporateTaxRates, medianAge, sexRatioMalesPer100Females, age60to64, age65to74, age75to84, age85AndOver, medianIncomeDollars, agricultureForestryFishing, construction, manufacturing, wholesaleTrade, retailTrade, transportationAndWarehousing, ITAndInformation, financeAndRealEstate, educationAndHealthCare, artsEntertainmentRecreation, publicAdministration, workFromHome, meanTravelTimeToWorkMinutes, privateWageandSalaryWorkers, governmentWorkers, selfEmployedInNotOwnIncorporatedBusiness, accessToInternet, accessToElectricity, forestArea, agriculturalLand, highSchoolGraduate, associateDegreePercentage, bachelorsDegreePercentage, graduateDegreePercentage, onlyEnglishSpeakingPercentage, whiteRace, blackOrAfricanAmericanRace, americanIndianAndAlaskaNativeRace, asianRace, hawaiianAndPacificIslanderRace, twoOrMoreRaces, hispanicOrLatino, marriedCoupleHouseholdPercentage, maleHouseholderPercentage, femaleHouseholderPercentage, averageFamilySize, homeOwnershipRate, medianGrossRent, totalHousingUnits, marriedNotSeparatedPopulationPercentageMale, marriedNotSeparatedPopulationPercentageFemale, neverMarriedPopulationPercentageMale, neverMarriedPopulationPercentageFemale, separatedPopulationPercentageMale, separatedPopulationPercentageFemale, divorcedPopulationPercentageMale, divorcedPopulationPercentageFemale, widowedPopulationPercentageMale, widowedPopulationPercentageFemale
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`;

// Insert the data
const runInserts = async () => {
    const db = await connectDatabase(); // Get the database connection
    try {
        await insertMany(insertCountryGeneralInfo, countryGeneralData, countryGeneralTable, db);
        await insertMany(insertCountryCostInfo, countryCostData, countryCostTable, db);
        await insertMany(insertCountryStandardInfo, countryStandardData, countryStandardTable, db);

        await insertMany(insertUSStateGeneralInfo, USStateGeneralData, USStateGeneralTable, db);
        await insertMany(insertUSStateCostInfo, USStateCostData, USStateCostTable, db);
        await insertMany(insertUSStateStandardInfo, USStateStandardData, USStateStandardTable, db);

        console.log('Data inserted successfully');
    } catch (error) {
        console.error('Failed to insert data:', error);
    } finally {
        await db.end(); // End the database connection
    }
};

// Call the async function
runInserts();

