const { Client } = require('pg');
const path = require('path');
const fs = require('fs');

// Database connection
const connectDatabase = async () => {
    const db = new Client({
        host: 'localhost',
        user: 'postgres',
        password: 'Sagar@1231',
        database: 'comparedoo',
    });
    await db.connect();
    return db;
};

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

// Manage zeros after Decimal 
function manageZerosAfterDecimal(num) {
    if (Number.isInteger(num)) {
        return num;
    }
    if (Math.floor(num) > 0) {
        return num.toFixed(2);
    }
    for (let i = 2; i <= 6; i++) {
        const fixedValue = num.toFixed(i);
        if (!/^0\.0+$/.test(fixedValue)) {
            if (parseFloat(fixedValue) > 0) {
                return fixedValue;
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

    if ((type === 'INT' || type === 'BIGINT' || type === 'REAL' || type === 'NUMERIC' || type === 'DOUBLE PRECISION') && key !== 'HDI' && key !== 'unitValueInUSD') {
        if (typeof value === 'string') {
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

// Table definitions for PostgreSQL
const countryGeneralTable = {
    country: 'VARCHAR',
    capitalCity: 'VARCHAR',
    largestCity: 'VARCHAR',
    populationGrowthAnnual: 'NUMERIC',
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
    areaInSqKm: 'DOUBLE PRECISION',
    areaInSqMile: 'DOUBLE PRECISION',
    waterPercentage: 'VARCHAR',
    officialLanguages: 'TEXT',
    majorReligion: 'VARCHAR',
    majorReligionPercentage: 'REAL',
    governmentStatus: 'VARCHAR',
    totalTimezones: 'TEXT',
    timezoneNormal: 'TEXT',
    timezoneSummer: 'TEXT',
    DST: 'VARCHAR',
    DSTStart: 'VARCHAR',
    DSTEnd: 'VARCHAR',
    DSTDuration: 'VARCHAR',
    population: 'TEXT',
    age0_14: 'REAL',
    age15_64: 'REAL',
    age65Plus: 'REAL',
    fertilityRate: 'DOUBLE PRECISION',
    mortalityRateFemale: 'DOUBLE PRECISION',
    mortalityRateMale: 'DOUBLE PRECISION',
    infantMortalityRate: 'DOUBLE PRECISION',
    topCauseOfDeath: 'VARCHAR',
    topCauseOfDeathNumber: 'REAL',
    lowestCauseOfDeath: 'VARCHAR',
    lowestCauseOfDeathNumber: 'REAL',
    roadTrafficDeaths: 'REAL',
    suicideDeaths: 'REAL',
    numberOfNewHIVInfections: 'REAL',
    prevalenceOfHypertensionPercentage: 'REAL',
    adultObesityPercentage: 'REAL',
    tobaccoConsumptionPercentage: 'REAL',
    alcoholConsumptionPercentage: 'REAL',
    startOfWeek: 'VARCHAR',
    unitValueInUSD: 'REAL'
};

const countryCostTable = {
    country: 'VARCHAR',
    rent1bedroomflatInCityCenter: 'REAL',
    rent2bedroomflatInCityCenter: 'REAL',
    rent3bedroomflatInCityCenter: 'REAL',
    rent1bedroomflatOutsideCityCenter: 'REAL',
    rent2bedroomflatOutsideCityCenter: 'REAL',
    rent3bedroomflatOutsideCityCenter: 'REAL',
    mortgageRatesPerMonth: 'REAL',
    realEstateAgentsCommissionFees: 'REAL',
    homeFurnishing: 'REAL',
    electricityCostPerMonth: 'REAL',
    heatingCostPerMonth: 'REAL',
    coolingCostPerMonth: 'REAL',
    waterCostPerMonth: 'REAL',
    wifiCostPerMonth: 'REAL',
    mobilePhonePlanCostPerMonth: 'REAL',
    cableTVServicePerMonth: 'REAL',
    landlinePhoneServicePerMonth: 'REAL',
    milk1Liter: 'REAL',
    water1Liter: 'REAL',
    bread500g: 'REAL',
    rice1Kg: 'REAL',
    eggsDozen: 'REAL',
    cheese1Kg: 'REAL',
    chickenBreasts1Kg: 'REAL',
    beef1Kg: 'REAL',
    apples1Kg: 'REAL',
    bananas1Kg: 'REAL',
    oranges1Kg: 'REAL',
    tomatoes1Kg: 'REAL',
    potatoes1Kg: 'REAL',
    lemons1Kg: 'REAL',
    onions1Kg: 'REAL',
    lentils1Kg: 'REAL',
    wineMidRangeBottle: 'REAL',
    glassOfWine: 'REAL',
    domesticBeerHalfLiter: 'REAL',
    importedBeerHalfLiter: 'REAL',
    domesticAlcohol1Liter: 'REAL',
    brandedAlcohol1Liter: 'REAL',
    mealAtInexpensiveRestaurant: 'REAL',
    threeCourseMealForTwo: 'REAL',
    fastFoodComboMeal: 'REAL',
    coffee: 'REAL',
    softDrink: 'REAL',
    pizza: 'REAL',
    takeoutDeliveryMeal: 'REAL',
    cigarettesPackOf20: 'REAL',
    publicTransportPass: 'REAL',
    singlePublicTransportTicket: 'REAL',
    trainTickets: 'REAL',
    airfareDomestic: 'REAL',
    taxiStartFare: 'REAL',
    taxiRatePerKm: 'REAL',
    carRentalPerDay: 'REAL',
    parkingFeesCityCenterPerHour: 'REAL',
    parkingFeesOutsideCityCenterPerHour: 'REAL',
    fuelPerLiter: 'REAL',
    fuelPerGallon: 'REAL',
    carInsurance: 'REAL',
    carMaintenance: 'REAL',
    vehicleRegistration: 'REAL',
    tollFees: 'REAL',
    carLoanInterestRates: 'REAL',
    vehiclePurchasePrice: 'REAL',
    drivingLicenseFees: 'REAL',
    doctorsVisit: 'REAL',
    specialistsVisit: 'REAL',
    dentistsVisit: 'REAL',
    eyeExam: 'REAL',
    prescriptionMedication: 'REAL',
    overTheCounterMedication: 'REAL',
    healthInsurancePremiums: 'REAL',
    healthInsuranceDeductibles: 'REAL',
    emergencyRoomVisit: 'REAL',
    hospitalStayPerNight: 'REAL',
    physicalTherapy: 'REAL',
    mentalHealthCounseling: 'REAL',
    vaccinations: 'REAL',
    preventiveHealthScreenings: 'REAL',
    cosmeticProcedures: 'REAL',
    opticalGlasses: 'REAL',
    contactLenses: 'REAL',
    shampooPrice: 'REAL',
    toothpastePrice: 'REAL',
    haircuts: 'REAL',
    hairColoring: 'REAL',
    manicurePedicureCost: 'REAL',
    spaTreatment: 'REAL',
    pairOfNikeRunningShoes: 'REAL',
    mensDressShirt: 'REAL',
    mensSuit: 'REAL',
    mensJeans: 'REAL',
    mensCasualShoes: 'REAL',
    mensFormalShoes: 'REAL',
    womensDress: 'REAL',
    womensJeans: 'REAL',
    womensCasualShoes: 'REAL',
    womensFormalShoes: 'REAL',
    winterCoatForAdults: 'REAL',
    summerDress: 'REAL',
    sweater: 'REAL',
    underwearMen: 'REAL',
    underwearWomen: 'REAL',
    socksMen: 'REAL',
    socksWomen: 'REAL',
    sportsWear: 'REAL',
    movieTicket: 'REAL',
    theaterTicket: 'REAL',
    concertTicket: 'REAL',
    sportsEventTicket: 'REAL',
    gymMembership: 'REAL',
    swimmingPoolAccess: 'REAL',
    museumEntry: 'REAL',
    zooEntry: 'REAL',
    amusementParkEntry: 'REAL',
    bowling: 'REAL',
    miniGolf: 'REAL',
    videoGames: 'REAL',
    streamingServices: 'REAL',
    outdoorEquipmentRental: 'REAL',
    themeParkAnnualPass: 'REAL',
    childrensJeans: 'REAL',
    childrensSneakers: 'REAL',
    childrensWinterCoat: 'REAL',
    daycareInfant: 'REAL',
    daycareToddler: 'REAL',
    childcareForSickDays: 'REAL',
    earlyChildhoodEducationPrograms: 'REAL',
    extracurricularActivities: 'REAL',
    summerCamp: 'REAL',
    preSchool: 'REAL',
    primarySchoolFees: 'REAL',
    secondarySchoolFees: 'REAL',
    privateSchoolFees: 'REAL',
    universityTuition: 'REAL',
    universityTuitionPrivate: 'REAL',
    afterSchoolActivities: 'REAL',
    specialEducationServices: 'REAL',
    tutoring: 'REAL',
    textbooks: 'REAL',
    schoolSupplies: 'REAL',
    languageClasses: 'REAL',
    parentingClasses: 'REAL',
    fitnessClass: 'REAL',
    musicLessons: 'REAL',
    danceLessons: 'REAL',
    artClasses: 'REAL',
    readingMaterials: 'REAL',
    educationalSoftware: 'REAL',
    averageGrossSalary: 'REAL',
    averageNetSalary: 'REAL',
    minimumWage: 'REAL',
    socialSecurityContributions: 'REAL',
    pensionContributions: 'REAL',
    costOfLivingIndex: 'REAL',
    medianHouseholdIncome: 'REAL',
    averageBonus: 'REAL',
    legalConsultationPerHourRate: 'REAL',
    accountingServicesPerHourRate: 'REAL',
    ITSupportServicesPerHourRate: 'REAL',
    technicianServicesPerHourRate: 'REAL',
};

const countryStandardTable = {
    country: 'VARCHAR',
    GDPNominal: 'VARCHAR',
    GDPPerCapita: 'REAL',
    GINI: 'REAL',
    inflationOnConsumerPrices: 'REAL',
    centralGovernmentDebt: 'REAL',
    HDI: 'REAL',
    humanCapitalIndex: 'REAL',
    literacyRate: 'REAL',
    lifeExpectancyRatio: 'REAL',
    healthyLifeExpectancyRatio: 'REAL',
    povertyRatio: 'REAL',
    unemploymentPercentageOfTotalLabourForce: 'REAL',
    grossNationalExpenditure: 'REAL',
    currentHealthExpenditurePercentage: 'REAL',
    researchAndDevelopmentExpenditure: 'REAL',
    governmentExpenditureOnEducation: 'REAL',
    internationalTourismExpenditureUSD: 'REAL',
    numberOfInternationalTouristsArrival: 'INT',
    militaryExpenditure: 'REAL',
    densityOfDoctorsNumber: 'REAL',
    densityOfNursesNumber: 'REAL',
    densityOfPharmacistsNumber: 'REAL',
    hospitalBedsPer1000Peoples: 'REAL',
    pregnantWomenReceivingPrenatalCare: 'REAL',
    agriculturalLand: 'REAL',
    forestArea: 'REAL',
    CO2Emission: 'REAL',
    accessToElectricity: 'REAL',
    accessToInternet: 'REAL',
    annualFreshWaterWithdrawls: 'REAL',
    timeRequiredToStartABusinessDays: 'REAL',
    newBusinessesRegisteredNumber: 'INT',
    newBusinessesRegistrationDensityPer1000People: 'REAL',
    costOfBusinessStartUpProcedures: 'REAL',
    importsOfGoodsAndServicesPercentageOfGDP: 'REAL',
    fuelImportsPercentageOfMerchandiseImports: 'REAL',
    costToImportBorderComplianceUSD: 'REAL',
    costToImportDocumentryComplianceUSD: 'REAL',
    timeToImportBorderComplianceHours: 'REAL',
    timeToImportDocumentryComplianceHours: 'REAL',
    exportsOfGoodsAndServicesPercentageOfGDP: 'REAL',
    fuelExportsPercentageOfMerchandiseExports: 'REAL',
    costToExportBorderComplianceUSD: 'REAL',
    costToExportDocumentryComplianceUSD: 'REAL',
    timeToExportBorderComplianceHours: 'REAL',
    timeToExportDocumentryComplianceHours: 'REAL',
    grossNationalSavings: 'REAL',
    taxRevenue: 'REAL',
    taxesOnExportsPercentageOfTaxRevenue: 'REAL',
    taxesOnGoodsAndServicesPercentageOfRevenue: 'REAL',
    taxesOnInternationalTradePercentageOfRevenue: 'REAL',
    timeToPrepareAndPayTaxesHours: 'REAL',
    customsAndOtherImportDutiesPercentageOfTaxRevenue: 'REAL',
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
    areaInSqMile: 'REAL',
    areaInSqKm: 'REAL',
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
    veteransPercentage: 'REAL',
    veteransPercentageMale: 'REAL',
    veteransPercentageFemale: 'REAL',
    currencyName: 'VARCHAR',
    currencySymbol: 'VARCHAR',
    startOfWeek: 'VARCHAR',
    drivingSide: 'VARCHAR',
    callingCode: 'VARCHAR',
};

const USStateCostTable = {
    state: 'VARCHAR',
    rent1bedroomflatInCityCenter: 'REAL',
    rent2bedroomflatInCityCenter: 'REAL',
    rent3bedroomflatInCityCenter: 'REAL',
    rent1bedroomflatOutsideCityCenter: 'REAL',
    rent2bedroomflatOutsideCityCenter: 'REAL',
    rent3bedroomflatOutsideCityCenter: 'REAL',
    mortgageRatesPerMonth: 'REAL',
    realEstateAgentsCommissionFees: 'REAL',
    homeFurnishing: 'REAL',
    electricityCostPerMonth: 'REAL',
    heatingCostPerMonth: 'REAL',
    coolingCostPerMonth: 'REAL',
    waterCostPerMonth: 'REAL',
    wifiCostPerMonth: 'REAL',
    mobilePhonePlanCostPerMonth: 'REAL',
    cableTVServicePerMonth: 'REAL',
    landlinePhoneServicePerMonth: 'REAL',
    milk1Liter: 'REAL',
    water1Liter: 'REAL',
    bread500g: 'REAL',
    rice1Kg: 'REAL',
    eggsDozen: 'REAL',
    cheese1Kg: 'REAL',
    chickenBreasts1Kg: 'REAL',
    beef1Kg: 'REAL',
    apples1Kg: 'REAL',
    bananas1Kg: 'REAL',
    oranges1Kg: 'REAL',
    tomatoes1Kg: 'REAL',
    potatoes1Kg: 'REAL',
    lemons1Kg: 'REAL',
    onions1Kg: 'REAL',
    lentils1Kg: 'REAL',
    wineMidRangeBottle: 'REAL',
    glassOfWine: 'REAL',
    domesticBeerHalfLiter: 'REAL',
    importedBeerHalfLiter: 'REAL',
    domesticAlcohol1Liter: 'REAL',
    brandedAlcohol1Liter: 'REAL',
    mealAtInexpensiveRestaurant: 'REAL',
    threeCourseMealForTwo: 'REAL',
    fastFoodComboMeal: 'REAL',
    coffee: 'REAL',
    softDrink: 'REAL',
    pizza: 'REAL',
    takeoutDeliveryMeal: 'REAL',
    cigarettesPackOf20: 'REAL',
    publicTransportPass: 'REAL',
    singlePublicTransportTicket: 'REAL',
    trainTickets: 'REAL',
    airfareDomestic: 'REAL',
    taxiStartFare: 'REAL',
    taxiRatePerKm: 'REAL',
    carRentalPerDay: 'REAL',
    parkingFeesCityCenterPerHour: 'REAL',
    parkingFeesOutsideCityCenterPerHour: 'REAL',
    fuelPerLiter: 'REAL',
    fuelPerGallon: 'REAL',
    carInsurance: 'REAL',
    carMaintenance: 'REAL',
    vehicleRegistration: 'REAL',
    tollFees: 'REAL',
    carLoanInterestRates: 'REAL',
    vehiclePurchasePrice: 'REAL',
    drivingLicenseFees: 'REAL',
    doctorsVisit: 'REAL',
    specialistsVisit: 'REAL',
    dentistsVisit: 'REAL',
    eyeExam: 'REAL',
    prescriptionMedication: 'REAL',
    overTheCounterMedication: 'REAL',
    healthInsurancePremiums: 'REAL',
    healthInsuranceDeductibles: 'REAL',
    emergencyRoomVisit: 'REAL',
    hospitalStayPerNight: 'REAL',
    physicalTherapy: 'REAL',
    mentalHealthCounseling: 'REAL',
    vaccinations: 'REAL',
    preventiveHealthScreenings: 'REAL',
    cosmeticProcedures: 'REAL',
    opticalGlasses: 'REAL',
    contactLenses: 'REAL',
    shampooPrice: 'REAL',
    toothpastePrice: 'REAL',
    haircuts: 'REAL',
    hairColoring: 'REAL',
    manicurePedicureCost: 'REAL',
    spaTreatment: 'REAL',
    pairOfNikeRunningShoes: 'REAL',
    mensDressShirt: 'REAL',
    mensSuit: 'REAL',
    mensJeans: 'REAL',
    mensCasualShoes: 'REAL',
    mensFormalShoes: 'REAL',
    womensDress: 'REAL',
    womensJeans: 'REAL',
    womensCasualShoes: 'REAL',
    womensFormalShoes: 'REAL',
    winterCoatForAdults: 'REAL',
    summerDress: 'REAL',
    sweater: 'REAL',
    underwearMen: 'REAL',
    underwearWomen: 'REAL',
    socksMen: 'REAL',
    socksWomen: 'REAL',
    sportsWear: 'REAL',
    movieTicket: 'REAL',
    theaterTicket: 'REAL',
    concertTicket: 'REAL',
    sportsEventTicket: 'REAL',
    gymMembership: 'REAL',
    swimmingPoolAccess: 'REAL',
    museumEntry: 'REAL',
    zooEntry: 'REAL',
    amusementParkEntry: 'REAL',
    bowling: 'REAL',
    miniGolf: 'REAL',
    videoGames: 'REAL',
    streamingServices: 'REAL',
    outdoorEquipmentRental: 'REAL',
    themeParkAnnualPass: 'REAL',
    childrensJeans: 'REAL',
    childrensSneakers: 'REAL',
    childrensWinterCoat: 'REAL',
    daycareInfant: 'REAL',
    daycareToddler: 'REAL',
    childcareForSickDays: 'REAL',
    earlyChildhoodEducationPrograms: 'REAL',
    extracurricularActivities: 'REAL',
    summerCamp: 'REAL',
    preSchool: 'REAL',
    primarySchoolFees: 'REAL',
    secondarySchoolFees: 'REAL',
    privateSchoolFees: 'REAL',
    universityTuition: 'REAL',
    universityTuitionPrivate: 'REAL',
    afterSchoolActivities: 'REAL',
    specialEducationServices: 'REAL',
    tutoring: 'REAL',
    textbooks: 'REAL',
    schoolSupplies: 'REAL',
    languageClasses: 'REAL',
    parentingClasses: 'REAL',
    fitnessClass: 'REAL',
    musicLessons: 'REAL',
    danceLessons: 'REAL',
    artClasses: 'REAL',
    readingMaterials: 'REAL',
    educationalSoftware: 'REAL',
    averageGrossSalary: 'REAL',
    averageNetSalary: 'REAL',
    minimumWage: 'REAL',
    socialSecurityContributions: 'REAL',
    pensionContributions: 'REAL',
    costOfLivingIndex: 'REAL',
    medianHouseholdIncome: 'REAL',
    averageBonus: 'REAL',
    legalConsultationPerHourRate: 'REAL',
    accountingServicesPerHourRate: 'REAL',
    ITSupportServicesPerHourRate: 'REAL',
    technicianServicesPerHourRate: 'REAL',
};

const USStateStandardTable = {
    state: 'VARCHAR',
    population: 'INT',
    HDI: 'REAL',
    literacyRate: 'REAL',
    lifeExpectancyRatio: 'REAL',
    povertyRatio: 'REAL',
    employmentRate: 'REAL',
    GDPNominal: 'REAL',
    GDPPerCapita: 'REAL',
    GINI: 'REAL',
    totalRegisteredPhysicians: 'INT',
    totalRegisteredNurses: 'INT',
    availableHospitalBeds: 'INT',
    disabilityPercentage: 'REAL',
    populationWithoutHealthInsuranceCoverage: 'REAL',
    salesTaxRates: 'VARCHAR',
    propertyTaxRates: 'VARCHAR',
    gasAndFuelTaxRatesPerGallon: 'REAL',
    beerTaxPerGallon: 'REAL',
    incomeTaxRates: 'VARCHAR',
    corporateTaxRates: 'VARCHAR',
    medianAge: 'REAL',
    sexRatioMalesPer100Females: 'REAL',
    age60to64: 'REAL',
    age65to74: 'REAL',
    age75to84: 'REAL',
    age85AndOver: 'REAL',
    medianIncomeDollars: 'REAL',
    agricultureForestryFishing: 'REAL',
    construction: 'REAL',
    manufacturing: 'REAL',
    wholesaleTrade: 'REAL',
    retailTrade: 'REAL',
    transportationAndWarehousing: 'REAL',
    ITAndInformation: 'REAL',
    financeAndRealEstate: 'REAL',
    educationAndHealthCare: 'REAL',
    artsEntertainmentRecreation: 'REAL',
    publicAdministration: 'REAL',
    workFromHome: 'REAL',
    meanTravelTimeToWorkMinutes: 'REAL',
    privateWageandSalaryWorkers: 'REAL',
    governmentWorkers: 'REAL',
    selfEmployedInNotOwnIncorporatedBusiness: 'REAL',
    accessToInternet: 'REAL',
    accessToElectricity: 'REAL',
    forestArea: 'REAL',
    agriculturalLand: 'REAL',
    highSchoolGraduate: 'REAL',
    associateDegreePercentage: 'REAL',
    bachelorsDegreePercentage: 'REAL',
    graduateDegreePercentage: 'REAL',
    onlyEnglishSpeakingPercentage: 'REAL',
    whiteRace: 'INT',
    blackOrAfricanAmericanRace: 'INT',
    americanIndianAndAlaskaNativeRace: 'INT',
    asianRace: 'INT',
    hawaiianAndPacificIslanderRace: 'INT',
    twoOrMoreRaces: 'INT',
    hispanicOrLatino: 'INT',
    marriedCoupleHouseholdPercentage: 'REAL',
    maleHouseholderPercentage: 'REAL',
    femaleHouseholderPercentage: 'REAL',
    averageFamilySize: 'REAL',
    homeOwnershipRate: 'REAL',
    medianGrossRent: 'REAL',
    totalHousingUnits: 'INT',
    marriedNotSeparatedPopulationPercentageMale: 'REAL',
    marriedNotSeparatedPopulationPercentageFemale: 'REAL',
    neverMarriedPopulationPercentageMale: 'REAL',
    neverMarriedPopulationPercentageFemale: 'REAL',
    separatedPopulationPercentageMale: 'REAL',
    separatedPopulationPercentageFemale: 'REAL',
    divorcedPopulationPercentageMale: 'REAL',
    divorcedPopulationPercentageFemale: 'REAL',
    widowedPopulationPercentageMale: 'REAL',
    widowedPopulationPercentageFemale: 'REAL',
};

// Insert many function for PostgreSQL
const insertMany = async (stmt, data, tableDefinition, db) => {
    try {
        await db.query('BEGIN');  // Begin the transaction

        for (const row of data) {"************"
            const values = Object.entries(row).map(([key, value]) => {
                if (key === 'HDI' || key === 'unitValueInUSD') {
                    return parseFloat(value) || null;
                }
                if (key === 'population' && Array.isArray(value)) {
                    value = JSON.stringify(value);  // Convert array to JSON string
                }
                return convertToNumber(value, tableDefinition[key] || 'VARCHAR', key);
            });

            await db.query(stmt, values);  // Use PostgreSQL's `query` method for prepared statements
        }

        await db.query('COMMIT');  // Commit the transaction
        console.log('Transaction committed successfully');
    } catch (error) {
        await db.query('ROLLBACK');  // Rollback the transaction in case of error
        console.error(`Transaction rolled back due to error: ${error.message}`);
    }
};

const insertCountryGeneralInfo = `
  INSERT INTO country_general_info (
  country, capitalCity, largestCity, populationGrowthAnnual, officialName, continent, landlockedStatus, nationalAnthemEnglish, nationalAnthemNative, currencyName, currencySymbol, nationalBird, nationalColors, nationalFlower, nationalSport, nationalAnimal, demonyms, drivingSide, callingCode, ISO3166Code, internetTLD, latitude, longitude, areaInSqKm, areaInSqMile, waterPercentage, officialLanguages, majorReligion, majorReligionPercentage, governmentStatus, totalTimezones, timezoneNormal, timezoneSummer, DST, DSTStart, DSTEnd, DSTDuration, population, age0_14, age15_64, age65Plus, fertilityRate, mortalityRateFemale, mortalityRateMale, infantMortalityRate, topCauseOfDeath, topCauseOfDeathNumber, lowestCauseOfDeath, lowestCauseOfDeathNumber, roadTrafficDeaths, suicideDeaths, numberOfNewHIVInfections, prevalenceOfHypertensionPercentage, adultObesityPercentage, tobaccoConsumptionPercentage, alcoholConsumptionPercentage, startOfWeek, unitValueInUSD) 
  VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44, $45, $46, $47, $48, $49, $50, $51, $52, $53, $54, $55, $56, $57, $58)
`;

const insertCountryCostInfo = `
    INSERT INTO country_cost_info (
        country, rent1bedroomflatInCityCenter, rent2bedroomflatInCityCenter, rent3bedroomflatInCityCenter, rent1bedroomflatOutsideCityCenter, rent2bedroomflatOutsideCityCenter, rent3bedroomflatOutsideCityCenter, mortgageRatesPerMonth, realEstateAgentsCommissionFees, homeFurnishing, electricityCostPerMonth, heatingCostPerMonth, coolingCostPerMonth, waterCostPerMonth, wifiCostPerMonth, mobilePhonePlanCostPerMonth, cableTVServicePerMonth, landlinePhoneServicePerMonth, milk1Liter, water1Liter, bread500g, rice1Kg, eggsDozen, cheese1Kg, chickenBreasts1Kg, beef1Kg, apples1Kg, bananas1Kg, oranges1Kg, tomatoes1Kg, potatoes1Kg, lemons1Kg, onions1Kg, lentils1Kg, wineMidRangeBottle, glassOfWine, domesticBeerHalfLiter, importedBeerHalfLiter, domesticAlcohol1Liter, brandedAlcohol1Liter, mealAtInexpensiveRestaurant, threeCourseMealForTwo, fastFoodComboMeal, coffee, softDrink, pizza, takeoutDeliveryMeal, cigarettesPackOf20, publicTransportPass, singlePublicTransportTicket, trainTickets, airfareDomestic, taxiStartFare, taxiRatePerKm, carRentalPerDay, parkingFeesCityCenterPerHour, parkingFeesOutsideCityCenterPerHour, fuelPerLiter, fuelPerGallon, carInsurance, carMaintenance, vehicleRegistration, tollFees, carLoanInterestRates, vehiclePurchasePrice, drivingLicenseFees, doctorsVisit, specialistsVisit, dentistsVisit, eyeExam, prescriptionMedication, overTheCounterMedication, healthInsurancePremiums, healthInsuranceDeductibles, emergencyRoomVisit, hospitalStayPerNight, physicalTherapy, mentalHealthCounseling, vaccinations, preventiveHealthScreenings, cosmeticProcedures, opticalGlasses, contactLenses, shampooPrice, toothpastePrice, haircuts, hairColoring, manicurePedicureCost, spaTreatment, pairOfNikeRunningShoes, mensDressShirt, mensSuit, mensJeans, mensCasualShoes, mensFormalShoes, womensDress, womensJeans, womensCasualShoes, womensFormalShoes, winterCoatForAdults, summerDress, sweater, underwearMen, underwearWomen, socksMen, socksWomen, sportsWear, movieTicket, theaterTicket, concertTicket, sportsEventTicket, gymMembership, swimmingPoolAccess, museumEntry, zooEntry, amusementParkEntry, bowling, miniGolf, videoGames, streamingServices, outdoorEquipmentRental, themeParkAnnualPass, childrensJeans, childrensSneakers, childrensWinterCoat, daycareInfant, daycareToddler, childcareForSickDays, earlyChildhoodEducationPrograms, extracurricularActivities, summerCamp, preSchool, primarySchoolFees, secondarySchoolFees, privateSchoolFees, universityTuition, universityTuitionPrivate, afterSchoolActivities, specialEducationServices, tutoring, textbooks, schoolSupplies, languageClasses, parentingClasses, fitnessClass, musicLessons, danceLessons, artClasses, readingMaterials, educationalSoftware, averageGrossSalary, averageNetSalary, minimumWage, socialSecurityContributions, pensionContributions, costOfLivingIndex, medianHouseholdIncome, averageBonus, legalConsultationPerHourRate, accountingServicesPerHourRate, ITSupportServicesPerHourRate, technicianServicesPerHourRate
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44, $45, $46, $47, $48, $49, $50, $51, $52, $53, $54, $55, $56, $57, $58, $59, $60, $61, $62, $63, $64, $65, $66, $67, $68, $69, $70, $71, $72, $73, $74, $75, $76, $77, $78, $79, $80, $81, $82, $83, $84, $85, $86, $87, $88, $89, $90, $91, $92, $93, $94, $95, $96, $97, $98, $99, $100, $101, $102, $103, $104, $105, $106, $107, $108, $109, $110, $111, $112, $113, $114, $115, $116, $117, $118, $119, $120, $121, $122, $123, $124, $125, $126, $127, $128, $129, $130, $131, $132, $133, $134, $135, $136, $137, $138, $139, $140, $141, $142, $143, $144, $145, $146, $147, $148, $149, $150, $151, $152, $153, $154, $155, $156, $157, $158, $159, $160, $161, $162 )
`;

const insertCountryStandardInfo = `
    INSERT INTO country_standard_info (country, GDPNominal, GDPPerCapita, GINI, inflationOnConsumerPrices, centralGovernmentDebt, HDI, humanCapitalIndex, literacyRate, lifeExpectancyRatio, healthyLifeExpectancyRatio, povertyRatio, unemploymentPercentageOfTotalLabourForce, grossNationalExpenditure, currentHealthExpenditurePercentage, researchAndDevelopmentExpenditure, governmentExpenditureOnEducation, internationalTourismExpenditureUSD, numberOfInternationalTouristsArrival, militaryExpenditure, densityOfDoctorsNumber, densityOfNursesNumber, densityOfPharmacistsNumber, hospitalBedsPer1000Peoples, pregnantWomenReceivingPrenatalCare, agriculturalLand, forestArea, CO2Emission, accessToElectricity, accessToInternet, annualFreshWaterWithdrawls, timeRequiredToStartABusinessDays, newBusinessesRegisteredNumber, newBusinessesRegistrationDensityPer1000People, costOfBusinessStartUpProcedures,importsOfGoodsAndServicesPercentageOfGDP, fuelImportsPercentageOfMerchandiseImports, costToImportBorderComplianceUSD, costToImportDocumentryComplianceUSD, timeToImportBorderComplianceHours, timeToImportDocumentryComplianceHours, exportsOfGoodsAndServicesPercentageOfGDP, fuelExportsPercentageOfMerchandiseExports, costToExportBorderComplianceUSD, costToExportDocumentryComplianceUSD, timeToExportBorderComplianceHours, timeToExportDocumentryComplianceHours, grossNationalSavings, taxRevenue, taxesOnExportsPercentageOfTaxRevenue, taxesOnGoodsAndServicesPercentageOfRevenue, taxesOnInternationalTradePercentageOfRevenue, timeToPrepareAndPayTaxesHours, customsAndOtherImportDutiesPercentageOfTaxRevenue, corporateTaxRates, incomeTaxRates, salesTaxRates, propertyTaxRates, currencySymbol)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44, $45, $46, $47, $48, $49, $50, $51, $52, $53, $54, $55, $56, $57, $58, $59)
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
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40)
`;

const insertUSStateCostInfo = `
    INSERT INTO us_state_cost_info (
        state, rent1bedroomflatInCityCenter, rent2bedroomflatInCityCenter, rent3bedroomflatInCityCenter, rent1bedroomflatOutsideCityCenter, rent2bedroomflatOutsideCityCenter, rent3bedroomflatOutsideCityCenter, mortgageRatesPerMonth, realEstateAgentsCommissionFees, homeFurnishing, electricityCostPerMonth, heatingCostPerMonth, coolingCostPerMonth, waterCostPerMonth, wifiCostPerMonth, mobilePhonePlanCostPerMonth, cableTVServicePerMonth, landlinePhoneServicePerMonth, milk1Liter, water1Liter, bread500g, rice1Kg, eggsDozen, cheese1Kg, chickenBreasts1Kg, beef1Kg, apples1Kg, bananas1Kg, oranges1Kg, tomatoes1Kg, potatoes1Kg, lemons1Kg, onions1Kg, lentils1Kg, wineMidRangeBottle, glassOfWine, domesticBeerHalfLiter, importedBeerHalfLiter, domesticAlcohol1Liter, brandedAlcohol1Liter, mealAtInexpensiveRestaurant, threeCourseMealForTwo, fastFoodComboMeal, coffee, softDrink, pizza, takeoutDeliveryMeal, cigarettesPackOf20, publicTransportPass, singlePublicTransportTicket, trainTickets, airfareDomestic, taxiStartFare, taxiRatePerKm, carRentalPerDay, parkingFeesCityCenterPerHour, parkingFeesOutsideCityCenterPerHour, fuelPerLiter, fuelPerGallon, carInsurance, carMaintenance, vehicleRegistration, tollFees, carLoanInterestRates, vehiclePurchasePrice, drivingLicenseFees, doctorsVisit, specialistsVisit, dentistsVisit, eyeExam, prescriptionMedication, overTheCounterMedication, healthInsurancePremiums, healthInsuranceDeductibles, emergencyRoomVisit, hospitalStayPerNight, physicalTherapy, mentalHealthCounseling, vaccinations, preventiveHealthScreenings, cosmeticProcedures, opticalGlasses, contactLenses, shampooPrice, toothpastePrice, haircuts, hairColoring, manicurePedicureCost, spaTreatment, pairOfNikeRunningShoes, mensDressShirt, mensSuit, mensJeans, mensCasualShoes, mensFormalShoes, womensDress, womensJeans, womensCasualShoes, womensFormalShoes, winterCoatForAdults, summerDress, sweater, underwearMen, underwearWomen, socksMen, socksWomen, sportsWear, movieTicket, theaterTicket, concertTicket, sportsEventTicket, gymMembership, swimmingPoolAccess, museumEntry, zooEntry, amusementParkEntry, bowling, miniGolf, videoGames, streamingServices, outdoorEquipmentRental, themeParkAnnualPass, childrensJeans, childrensSneakers, childrensWinterCoat, daycareInfant, daycareToddler, childcareForSickDays, earlyChildhoodEducationPrograms, extracurricularActivities, summerCamp, preSchool, primarySchoolFees, secondarySchoolFees, privateSchoolFees, universityTuition, universityTuitionPrivate, afterSchoolActivities, specialEducationServices, tutoring, textbooks, schoolSupplies, languageClasses, parentingClasses, fitnessClass, musicLessons, danceLessons, artClasses, readingMaterials, educationalSoftware, averageGrossSalary, averageNetSalary, minimumWage, socialSecurityContributions, pensionContributions, costOfLivingIndex, medianHouseholdIncome, averageBonus, legalConsultationPerHourRate, accountingServicesPerHourRate, ITSupportServicesPerHourRate, technicianServicesPerHourRate
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44, $45, $46, $47, $48, $49, $50, $51, $52, $53, $54, $55, $56, $57, $58, $59, $60, $61, $62, $63, $64, $65, $66, $67, $68, $69, $70, $71, $72, $73, $74, $75, $76, $77, $78, $79, $80, $81, $82, $83, $84, $85, $86, $87, $88, $89, $90, $91, $92, $93, $94, $95, $96, $97, $98, $99, $100, $101, $102, $103, $104, $105, $106, $107, $108, $109, $110, $111, $112, $113, $114, $115, $116, $117, $118, $119, $120, $121, $122, $123, $124, $125, $126, $127, $128, $129, $130, $131, $132, $133, $134, $135, $136, $137, $138, $139, $140, $141, $142, $143, $144, $145, $146, $147, $148, $149, $150, $151, $152, $153, $154, $155, $156, $157, $158, $159, $160, $161, $162 )
`;

const insertUSStateStandardInfo = `
    INSERT INTO us_state_standard_info (
        state, population, HDI, literacyRate, lifeExpectancyRatio, povertyRatio, employmentRate, GDPNominal, GDPPerCapita, GINI, totalRegisteredPhysicians, totalRegisteredNurses, availableHospitalBeds, disabilityPercentage, populationWithoutHealthInsuranceCoverage, salesTaxRates, propertyTaxRates, gasAndFuelTaxRatesPerGallon, beerTaxPerGallon, incomeTaxRates, corporateTaxRates, medianAge, sexRatioMalesPer100Females, age60to64, age65to74, age75to84, age85AndOver, medianIncomeDollars, agricultureForestryFishing, construction, manufacturing, wholesaleTrade, retailTrade, transportationAndWarehousing, ITAndInformation, financeAndRealEstate, educationAndHealthCare, artsEntertainmentRecreation, publicAdministration, workFromHome, meanTravelTimeToWorkMinutes, privateWageandSalaryWorkers, governmentWorkers, selfEmployedInNotOwnIncorporatedBusiness, accessToInternet, accessToElectricity, forestArea, agriculturalLand, highSchoolGraduate, associateDegreePercentage, bachelorsDegreePercentage, graduateDegreePercentage, onlyEnglishSpeakingPercentage, whiteRace, blackOrAfricanAmericanRace, americanIndianAndAlaskaNativeRace, asianRace, hawaiianAndPacificIslanderRace, twoOrMoreRaces, hispanicOrLatino, marriedCoupleHouseholdPercentage, maleHouseholderPercentage, femaleHouseholderPercentage, averageFamilySize, homeOwnershipRate, medianGrossRent, totalHousingUnits, marriedNotSeparatedPopulationPercentageMale, marriedNotSeparatedPopulationPercentageFemale, neverMarriedPopulationPercentageMale, neverMarriedPopulationPercentageFemale, separatedPopulationPercentageMale, separatedPopulationPercentageFemale, divorcedPopulationPercentageMale, divorcedPopulationPercentageFemale, widowedPopulationPercentageMale, widowedPopulationPercentageFemale
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44, $45, $46, $47, $48, $49, $50, $51, $52, $53, $54, $55, $56, $57, $58, $59, $60, $61, $62, $63, $64, $65, $66, $67, $68, $69, $70, $71, $72, $73, $74, $75, $76, $77)
`;

// Insert the data
const runInserts = async () => {
    const db = await connectDatabase();  // Get the database connection
    try {
        await insertMany(insertCountryGeneralInfo, countryGeneralData, countryGeneralTable, db);
        await insertMany(insertCountryCostInfo, countryCostData, countryCostTable, db);
        await insertMany(insertCountryStandardInfo, countryStandardData, countryStandardTable, db);
        await insertMany(insertUSStateGeneralInfo, USStateGeneralData, USStateGeneralTable, db);
        await insertMany(insertUSStateCostInfo, USStateCostData, USStateCostTable, db);
        await insertMany(insertUSStateStandardInfo, USStateStandardData, USStateStandardTable, db);
    } catch (error) {
        console.error('Failed to insert data:', error);
    } finally {
        await db.end();  // End the database connection
    }
};

// Call the async function
runInserts();
