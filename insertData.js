const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

// Database file path
const dbPath = path.join(process.cwd(), 'comparedoo.db');
const db = new Database(dbPath, { verbose: console.log });

// Paths to JSON data files
const countryGeneralPath = path.join(
  process.cwd(),
  'country_general_info.json'
);
const countryCostPath = path.join(process.cwd(), 'country_cost_info.json');
const countryStandardPath = path.join(
  process.cwd(),
  'country_standard_info.json'
);

const USStateGeneralPath = path.join(
  process.cwd(),
  'us_state_general_info.json'
);
const USStateCostPath = path.join(process.cwd(), 'us_state_cost_info.json');
const USStateStandardPath = path.join(
  process.cwd(),
  'us_state_standard_info.json'
);

// Read JSON data
const countryGeneralRawData = fs.readFileSync(countryGeneralPath);
const countryCostRawData = fs.readFileSync(countryCostPath);
const countryStandardRawData = fs.readFileSync(countryStandardPath);

const USStateGeneralRawData = fs.readFileSync(USStateGeneralPath);
const USStateCostRawData = fs.readFileSync(USStateCostPath);
const USStateStandardRawData = fs.readFileSync(USStateStandardPath);

// parse JSON data
const countryGeneralData = JSON.parse(countryGeneralRawData);
const countryCostData = JSON.parse(countryCostRawData);
const countryStandardData = JSON.parse(countryStandardRawData);

const USStateGeneralData = JSON.parse(USStateGeneralRawData);
const USStateCostData = JSON.parse(USStateCostRawData);
const USStateStandardData = JSON.parse(USStateStandardRawData);

function manageZerosAfterDecimal(num) {
  const roundedNum = num.toFixed(2);
  const numArr = roundedNum.split('.');
  if (numArr[1] === '00') {
    return Number(numArr[0]);
  } else {
    return Number(roundedNum);
  }
}

function convertToNumber(value, type, key) {
  if (value === 'N/A' || value === undefined) {
    return null;
  }

  if (type === 'TEXT') {
    return value;
  }

  if (type === 'REAL' && (key === 'HDI' || key === 'unitValueInUSD')) {
    if (typeof value === 'string') {
      return parseFloat(value);
    }

    if (typeof value === 'number') {
      return parseFloat(value);
    }
  }

  if ((type === 'INTEGER' || type === 'REAL') && key !== 'HDI') {
    // Ensure the value is a string before applying the match method
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

// Table definitions to identify data types

const countryGeneralTable = {
  country: 'TEXT',
  capitalCity: 'TEXT',
  largestCity: 'TEXT',
  populationGrowthAnnual: 'REAL',
  officialName: 'TEXT',
  continent: 'TEXT',
  landlockedStatus: 'TEXT',
  nationalAnthemEnglish: 'TEXT',
  nationalAnthemNative: 'TEXT',
  currencyName: 'TEXT',
  currencySymbol: 'TEXT',
  nationalBird: 'TEXT',
  nationalColors: 'TEXT',
  nationalFlower: 'TEXT',
  nationalSport: 'TEXT',
  nationalAnimal: 'TEXT',
  demonyms: 'TEXT',
  drivingSide: 'TEXT',
  callingCode: 'TEXT',
  ISO3166Code: 'TEXT',
  internetTLD: 'TEXT',
  latitude: 'TEXT',
  longitude: 'TEXT',
  areaInSqKm: 'REAL',
  areaInSqMile: 'REAL',
  waterPercentage: 'TEXT',
  officialLanguages: 'TEXT',
  majorReligion: 'TEXT',
  majorReligionPercentage: 'REAL',
  governmentStatus: 'TEXT',
  totalTimezones: 'TEXT',
  timezoneNormal: 'TEXT',
  timezoneSummer: 'TEXT',
  DST: 'TEXT',
  DSTStart: 'TEXT',
  DSTEnd: 'TEXT',
  DSTDuration: 'TEXT',
  population: 'TEXT',
  age0_14: 'REAL',
  age15_64: 'REAL',
  age65Plus: 'REAL',
  fertilityRate: 'REAL',
  mortalityRateFemale: 'REAL',
  mortalityRateMale: 'REAL',
  infantMortalityRate: 'REAL',
  topCauseOfDeath: 'TEXT',
  topCauseOfDeathNumber: 'REAL',
  lowestCauseOfDeath: 'TEXT',
  lowestCauseOfDeathNumber: 'REAL',
  roadTrafficDeaths: 'REAL',
  suicideDeaths: 'REAL',
  numberOfNewHIVInfections: 'REAL',
  prevalenceOfHypertensionPercentage: 'REAL',
  adultObesityPercentage: 'REAL',
  tobaccoConsumptionPercentage: 'REAL',
  alcoholConsumptionPercentage: 'REAL',
  startOfWeek: 'TEXT',
  unitValueInUSD: 'REAL',
};

const countryCostTable = {
  country: 'TEXT',
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
  country: 'TEXT',
  GDPNominal: 'TEXT',
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
  numberOfInternationalTouristsArrival: 'INTEGER',
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
  newBusinessesRegisteredNumber: 'INTEGER',
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
  corporateTaxRates: 'TEXT',
  incomeTaxRates: 'TEXT',
  salesTaxRates: 'TEXT',
  propertyTaxRates: 'TEXT',
  currencySymbol: 'TEXT',
};

const USStateGeneralTable = {
  state: 'TEXT',
  officialName: 'TEXT',
  nicknames: 'TEXT',
  landlockedStatus: 'TEXT',
  capitalCity: 'TEXT',
  latitude: 'TEXT',
  longitude: 'TEXT',
  mottoLatin: 'TEXT',
  mottoEnglish: 'TEXT',
  stateAnthemNative: 'TEXT',
  stateAnthemEnglish: 'TEXT',
  largestCity: 'TEXT',
  demonyms: 'TEXT',
  officialWebsites: 'TEXT',
  ISO3166Code: 'TEXT',
  areaInSqMile: 'REAL',
  areaInSqKm: 'REAL',
  waterPercentage: 'TEXT',
  officialLanguages: 'TEXT',
  stateAnimal: 'TEXT',
  stateBird: 'TEXT',
  stateFlower: 'TEXT',
  stateColors: 'TEXT',
  stateSport: 'TEXT',
  stateTree: 'TEXT',
  totalTimezones: 'TEXT',
  timezoneNormal: 'TEXT',
  timezoneSummer: 'TEXT',
  DSTStart: 'TEXT',
  DSTEnd: 'TEXT',
  DSTDuration: 'TEXT',
  population: 'INTEGER',
  veteransPercentage: 'REAL',
  veteransPercentageMale: 'REAL',
  veteransPercentageFemale: 'REAL',
  currencyName: 'TEXT',
  currencySymbol: 'TEXT',
  startOfWeek: 'TEXT',
  drivingSide: 'TEXT',
  callingCode: 'TEXT',
};

const USStateCostTable = {
  state: 'TEXT',
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
  state: 'TEXT',
  population: 'INTEGER',
  HDI: 'REAL',
  literacyRate: 'REAL',
  lifeExpectancyRatio: 'REAL',
  povertyRatio: 'REAL',
  employmentRate: 'REAL',
  GDPNominal: 'REAL',
  GDPPerCapita: 'REAL',
  GINI: 'REAL',
  totalRegisteredPhysicians: 'INTEGER',
  totalRegisteredNurses: 'INTEGER',
  availableHospitalBeds: 'INTEGER',
  disabilityPercentage: 'REAL',
  populationWithoutHealthInsuranceCoverage: 'REAL',
  salesTaxRates: 'TEXT',
  propertyTaxRates: 'TEXT',
  gasAndFuelTaxRatesPerGallon: 'REAL',
  beerTaxPerGallon: 'REAL',
  incomeTaxRates: 'TEXT',
  corporateTaxRates: 'TEXT',
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
  whiteRace: 'INTEGER',
  blackOrAfricanAmericanRace: 'INTEGER',
  americanIndianAndAlaskaNativeRace: 'INTEGER',
  asianRace: 'INTEGER',
  hawaiianAndPacificIslanderRace: 'INTEGER',
  twoOrMoreRaces: 'INTEGER',
  hispanicOrLatino: 'INTEGER',
  marriedCoupleHouseholdPercentage: 'REAL',
  maleHouseholderPercentage: 'REAL',
  femaleHouseholderPercentage: 'REAL',
  averageFamilySize: 'REAL',
  homeOwnershipRate: 'REAL',
  medianGrossRent: 'REAL',
  totalHousingUnits: 'INTEGER',
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

// Prepared statements for inserting data

const insertCountryGeneralInfo = db.prepare(`
  INSERT INTO country_general_info (
  country, capitalCity, largestCity, populationGrowthAnnual, officialName, continent, landlockedStatus, nationalAnthemEnglish, nationalAnthemNative, currencyName, currencySymbol, nationalBird, nationalColors, nationalFlower, nationalSport, nationalAnimal, demonyms, drivingSide, callingCode, ISO3166Code, internetTLD, latitude, longitude, areaInSqKm, areaInSqMile, waterPercentage, officialLanguages, majorReligion, majorReligionPercentage, governmentStatus, totalTimezones, timezoneNormal, timezoneSummer, DST, DSTStart, DSTEnd, DSTDuration, population, age0_14, age15_64, age65Plus, fertilityRate, mortalityRateFemale, mortalityRateMale, infantMortalityRate, topCauseOfDeath, topCauseOfDeathNumber, lowestCauseOfDeath, lowestCauseOfDeathNumber, roadTrafficDeaths, suicideDeaths, numberOfNewHIVInfections, prevalenceOfHypertensionPercentage, adultObesityPercentage, tobaccoConsumptionPercentage, alcoholConsumptionPercentage, startOfWeek, unitValueInUSD) 
  VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

const insertCountryCostInfo = db.prepare(`
  INSERT INTO country_cost_info (
    country, rent1bedroomflatInCityCenter, rent2bedroomflatInCityCenter, rent3bedroomflatInCityCenter, rent1bedroomflatOutsideCityCenter, rent2bedroomflatOutsideCityCenter, rent3bedroomflatOutsideCityCenter, mortgageRatesPerMonth, realEstateAgentsCommissionFees, homeFurnishing, electricityCostPerMonth, heatingCostPerMonth, coolingCostPerMonth, waterCostPerMonth, wifiCostPerMonth, mobilePhonePlanCostPerMonth, cableTVServicePerMonth, landlinePhoneServicePerMonth, milk1Liter, water1Liter, bread500g, rice1Kg, eggsDozen, cheese1Kg, chickenBreasts1Kg, beef1Kg, apples1Kg, bananas1Kg, oranges1Kg, tomatoes1Kg, potatoes1Kg, lemons1Kg, onions1Kg, lentils1Kg, wineMidRangeBottle, glassOfWine, domesticBeerHalfLiter, importedBeerHalfLiter, domesticAlcohol1Liter, brandedAlcohol1Liter, mealAtInexpensiveRestaurant, threeCourseMealForTwo, fastFoodComboMeal, coffee, softDrink, pizza, takeoutDeliveryMeal, cigarettesPackOf20, publicTransportPass, singlePublicTransportTicket, trainTickets, airfareDomestic, taxiStartFare, taxiRatePerKm, carRentalPerDay, parkingFeesCityCenterPerHour, parkingFeesOutsideCityCenterPerHour, fuelPerLiter, fuelPerGallon, carInsurance, carMaintenance, vehicleRegistration, tollFees, carLoanInterestRates, vehiclePurchasePrice, drivingLicenseFees, doctorsVisit, specialistsVisit, dentistsVisit, eyeExam, prescriptionMedication, overTheCounterMedication, healthInsurancePremiums, healthInsuranceDeductibles, emergencyRoomVisit, hospitalStayPerNight, physicalTherapy, mentalHealthCounseling, vaccinations, preventiveHealthScreenings, cosmeticProcedures, opticalGlasses, contactLenses, shampooPrice, toothpastePrice, haircuts, hairColoring, manicurePedicureCost, spaTreatment, pairOfNikeRunningShoes, mensDressShirt, mensSuit, mensJeans, mensCasualShoes, mensFormalShoes, womensDress, womensJeans, womensCasualShoes, womensFormalShoes, winterCoatForAdults, summerDress, sweater, underwearMen, underwearWomen, socksMen, socksWomen, sportsWear, movieTicket, theaterTicket, concertTicket, sportsEventTicket, gymMembership, swimmingPoolAccess, museumEntry, zooEntry, amusementParkEntry, bowling, miniGolf, videoGames, streamingServices, outdoorEquipmentRental, themeParkAnnualPass, childrensJeans, childrensSneakers, childrensWinterCoat, daycareInfant, daycareToddler, childcareForSickDays, earlyChildhoodEducationPrograms, extracurricularActivities, summerCamp, preSchool, primarySchoolFees, secondarySchoolFees, privateSchoolFees, universityTuition, universityTuitionPrivate, afterSchoolActivities, specialEducationServices, tutoring, textbooks, schoolSupplies, languageClasses, parentingClasses, fitnessClass, musicLessons, danceLessons, artClasses, readingMaterials, educationalSoftware, averageGrossSalary, averageNetSalary, minimumWage, socialSecurityContributions, pensionContributions, costOfLivingIndex, medianHouseholdIncome, averageBonus, legalConsultationPerHourRate, accountingServicesPerHourRate, ITSupportServicesPerHourRate, technicianServicesPerHourRate
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )
`);

const insertCountryStandardInfo =
  db.prepare(`INSERT INTO country_standard_info (country, GDPNominal, GDPPerCapita, GINI, inflationOnConsumerPrices, centralGovernmentDebt, HDI, humanCapitalIndex, literacyRate, lifeExpectancyRatio, healthyLifeExpectancyRatio, povertyRatio, unemploymentPercentageOfTotalLabourForce, grossNationalExpenditure, currentHealthExpenditurePercentage, researchAndDevelopmentExpenditure, governmentExpenditureOnEducation, internationalTourismExpenditureUSD, numberOfInternationalTouristsArrival, militaryExpenditure, densityOfDoctorsNumber, densityOfNursesNumber, densityOfPharmacistsNumber, hospitalBedsPer1000Peoples, pregnantWomenReceivingPrenatalCare, agriculturalLand, forestArea, CO2Emission, accessToElectricity, accessToInternet, annualFreshWaterWithdrawls, timeRequiredToStartABusinessDays, newBusinessesRegisteredNumber, newBusinessesRegistrationDensityPer1000People, costOfBusinessStartUpProcedures,importsOfGoodsAndServicesPercentageOfGDP, fuelImportsPercentageOfMerchandiseImports, costToImportBorderComplianceUSD, costToImportDocumentryComplianceUSD, timeToImportBorderComplianceHours, timeToImportDocumentryComplianceHours, exportsOfGoodsAndServicesPercentageOfGDP, fuelExportsPercentageOfMerchandiseExports, costToExportBorderComplianceUSD, costToExportDocumentryComplianceUSD, timeToExportBorderComplianceHours, timeToExportDocumentryComplianceHours, grossNationalSavings, taxRevenue, taxesOnExportsPercentageOfTaxRevenue, taxesOnGoodsAndServicesPercentageOfRevenue, taxesOnInternationalTradePercentageOfRevenue, timeToPrepareAndPayTaxesHours, customsAndOtherImportDutiesPercentageOfTaxRevenue, corporateTaxRates, incomeTaxRates, salesTaxRates, propertyTaxRates, currencySymbol) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

const insertUSStateGeneralInfo = db.prepare(`
  INSERT INTO us_state_general_info (
    state, officialName, nicknames, landlockedStatus, capitalCity, latitude, longitude,
    mottoLatin, mottoEnglish, stateAnthemNative, stateAnthemEnglish, largestCity, demonyms,
    officialWebsites, ISO3166Code, areaInSqMile, areaInSqKm, waterPercentage, officialLanguages,
    stateAnimal, stateBird, stateFlower, stateColors, stateSport, stateTree, totalTimezones, timezoneNormal,
    timezoneSummer, DSTStart, DSTEnd, DSTDuration, population, veteransPercentage,
    veteransPercentageMale, veteransPercentageFemale, currencyName, currencySymbol, startOfWeek,
    drivingSide, callingCode
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

const insertUSStateCostInfo = db.prepare(`
  INSERT INTO us_state_cost_info (
    state, rent1bedroomflatInCityCenter, rent2bedroomflatInCityCenter, rent3bedroomflatInCityCenter, rent1bedroomflatOutsideCityCenter, rent2bedroomflatOutsideCityCenter, rent3bedroomflatOutsideCityCenter, mortgageRatesPerMonth, realEstateAgentsCommissionFees, homeFurnishing, electricityCostPerMonth, heatingCostPerMonth, coolingCostPerMonth, waterCostPerMonth, wifiCostPerMonth, mobilePhonePlanCostPerMonth, cableTVServicePerMonth, landlinePhoneServicePerMonth, milk1Liter, water1Liter, bread500g, rice1Kg, eggsDozen, cheese1Kg, chickenBreasts1Kg, beef1Kg, apples1Kg, bananas1Kg, oranges1Kg, tomatoes1Kg, potatoes1Kg, lemons1Kg, onions1Kg, lentils1Kg, wineMidRangeBottle, glassOfWine, domesticBeerHalfLiter, importedBeerHalfLiter, domesticAlcohol1Liter, brandedAlcohol1Liter, mealAtInexpensiveRestaurant, threeCourseMealForTwo, fastFoodComboMeal, coffee, softDrink, pizza, takeoutDeliveryMeal, cigarettesPackOf20, publicTransportPass, singlePublicTransportTicket, trainTickets, airfareDomestic, taxiStartFare, taxiRatePerKm, carRentalPerDay, parkingFeesCityCenterPerHour, parkingFeesOutsideCityCenterPerHour, fuelPerLiter, fuelPerGallon, carInsurance, carMaintenance, vehicleRegistration, tollFees, carLoanInterestRates, vehiclePurchasePrice, drivingLicenseFees, doctorsVisit, specialistsVisit, dentistsVisit, eyeExam, prescriptionMedication, overTheCounterMedication, healthInsurancePremiums, healthInsuranceDeductibles, emergencyRoomVisit, hospitalStayPerNight, physicalTherapy, mentalHealthCounseling, vaccinations, preventiveHealthScreenings, cosmeticProcedures, opticalGlasses, contactLenses, shampooPrice, toothpastePrice, haircuts, hairColoring, manicurePedicureCost, spaTreatment, pairOfNikeRunningShoes, mensDressShirt, mensSuit, mensJeans, mensCasualShoes, mensFormalShoes, womensDress, womensJeans, womensCasualShoes, womensFormalShoes, winterCoatForAdults, summerDress, sweater, underwearMen, underwearWomen, socksMen, socksWomen, sportsWear, movieTicket, theaterTicket, concertTicket, sportsEventTicket, gymMembership, swimmingPoolAccess, museumEntry, zooEntry, amusementParkEntry, bowling, miniGolf, videoGames, streamingServices, outdoorEquipmentRental, themeParkAnnualPass, childrensJeans, childrensSneakers, childrensWinterCoat, daycareInfant, daycareToddler, childcareForSickDays, earlyChildhoodEducationPrograms, extracurricularActivities, summerCamp, preSchool, primarySchoolFees, secondarySchoolFees, privateSchoolFees, universityTuition, universityTuitionPrivate, afterSchoolActivities, specialEducationServices, tutoring, textbooks, schoolSupplies, languageClasses, parentingClasses, fitnessClass, musicLessons, danceLessons, artClasses, readingMaterials, educationalSoftware, averageGrossSalary, averageNetSalary, minimumWage, socialSecurityContributions, pensionContributions, costOfLivingIndex, medianHouseholdIncome, averageBonus, legalConsultationPerHourRate, accountingServicesPerHourRate, ITSupportServicesPerHourRate, technicianServicesPerHourRate
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )
`);

const insertUSStateStandardInfo = db.prepare(`
  INSERT INTO us_state_standard_info (
    state, population, HDI, literacyRate, lifeExpectancyRatio, povertyRatio, employmentRate, GDPNominal, GDPPerCapita, GINI, totalRegisteredPhysicians, totalRegisteredNurses, availableHospitalBeds, disabilityPercentage, populationWithoutHealthInsuranceCoverage, salesTaxRates, propertyTaxRates, gasAndFuelTaxRatesPerGallon, beerTaxPerGallon, incomeTaxRates, corporateTaxRates, medianAge, sexRatioMalesPer100Females, age60to64, age65to74, age75to84, age85AndOver, medianIncomeDollars, agricultureForestryFishing, construction, manufacturing, wholesaleTrade, retailTrade, transportationAndWarehousing, ITAndInformation, financeAndRealEstate, educationAndHealthCare, artsEntertainmentRecreation, publicAdministration, workFromHome, meanTravelTimeToWorkMinutes, privateWageandSalaryWorkers, governmentWorkers, selfEmployedInNotOwnIncorporatedBusiness, accessToInternet, accessToElectricity, forestArea, agriculturalLand, highSchoolGraduate, associateDegreePercentage, bachelorsDegreePercentage, graduateDegreePercentage, onlyEnglishSpeakingPercentage, whiteRace, blackOrAfricanAmericanRace, americanIndianAndAlaskaNativeRace, asianRace, hawaiianAndPacificIslanderRace, twoOrMoreRaces, hispanicOrLatino, marriedCoupleHouseholdPercentage, maleHouseholderPercentage, femaleHouseholderPercentage, averageFamilySize, homeOwnershipRate, medianGrossRent, totalHousingUnits, marriedNotSeparatedPopulationPercentageMale, marriedNotSeparatedPopulationPercentageFemale, neverMarriedPopulationPercentageMale, neverMarriedPopulationPercentageFemale, separatedPopulationPercentageMale, separatedPopulationPercentageFemale, divorcedPopulationPercentageMale, divorcedPopulationPercentageFemale, widowedPopulationPercentageMale, widowedPopulationPercentageFemale
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

const insertMany = (stmt, data, tableDefinition) => {
  const insertTransaction = db.transaction((rows) => {
    for (const row of rows) {
      try {
        const values = Object.entries(row).map(([key, value]) => {
          if (key === 'HDI' || key === 'unitValueInUSD') {
            return value; // Return the value without modification
          }
          // Check if the key is 'population' and stringify it if it's an array
          if (key === 'population' && Array.isArray(value)) {
            value = JSON.stringify(value);
          }
          return convertToNumber(value, tableDefinition[key] || 'TEXT', key);
        });
        stmt.run(...values);
      } catch (error) {
        console.error(
          `Failed to insert row: ${JSON.stringify(row)} with error: ${
            error.message
          }`
        );
      }
    }
  });

  insertTransaction(data);
};

try {
  // Insert data into country tables
  insertMany(insertCountryGeneralInfo, countryGeneralData, countryGeneralTable);
  insertMany(insertCountryCostInfo, countryCostData, countryCostTable);
  insertMany(
    insertCountryStandardInfo,
    countryStandardData,
    countryStandardTable
  );

  // Insert data into us-state tables
  insertMany(insertUSStateGeneralInfo, USStateGeneralData, USStateGeneralTable);
  insertMany(insertUSStateCostInfo, USStateCostData, USStateCostTable);
  insertMany(
    insertUSStateStandardInfo,
    USStateStandardData,
    USStateStandardTable
  );

  console.log('Data inserted successfully');
} catch (error) {
  console.error('Failed to insert data:', error);
} finally {
  db.close();
}
