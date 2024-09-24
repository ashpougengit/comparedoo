import TopDescription from "./top-description/TopDescription"
import ThreeTabs from "@/components/three-tabs/ThreeTabs"
import BasicUtilitiesCost from "./basic-utilities-cost/BasicUtilitiesCost"
import ChildcareCost from "./childcare-cost/ChildcareCost"
import ClothingAndFootwearCost from "./clothing-and-footwear-cost/ClothingAndFootwearCost"
import DiningOutCost from "./dining-out-cost/DiningOutCost"
import DrinksCost from "./drinks-cost/DrinksCost"
import EntertainmentAndRecreationCost from "./entertainment-and-recreation-cost/EntertainmentAndRecreationCost"
import FruitsAndVegetablesCost from "./fruits-and-vegetables-cost/FruitsAndVegetablesCost"
import GroceriesCost from "./groceries-cost/GroceriesCost"
import HealthAndMedicalCost from "./health-and-medical-cost/HealthAndMedicalCost"
import HousingCost from "./housing-cost/HousingCost"
import NetworkAndCommunication from "./network-and-communication/NetworkAndCommunication"
import PersonalCareCost from "./personal-care-cost/PersonalCareCost"
import PrivateClassesAndLessonsCost from "./private-classes-and-lessons-cost/PrivateClassesAndLessonsCost"
import ProfessionalServicesCost from "./professional-services-cost/ProfessionalServicesCost"
import SchoolAndEducationCost from "./school-and-education-cost/SchoolAndEducationCost"
import TransportationCost from "./transportation-cost/TransportationCost"
import VehiclePurchaseAndMaintenanceCost from "./vehicle-purchase-and-maintenance-cost/VehiclePurchaseAndMaintenanceCost"
import WagesAndTaxesCost from "./wages-and-taxes-cost/WagesAndTaxesCost"
import LastParagraph from "./last-paragraph/LastParagraph"
import ComparisonLinks from "@/components/comparison-links/ComparisonLinks"

function CostOfLivingCountries({ country1CostInfo, country2CostInfo, country1CurrencyInfo, country2CurrencyInfo, entity1PropertyAndIncomeTaxInfo, entity2PropertyAndIncomeTaxInfo, costTimes, moreOrLess, listForLinks }) {
    const country1 = country1CostInfo.country
    const country2 = country2CostInfo.country

    const country1LowerCase = country1.toLowerCase().split(' ').join('-')
    const country2LowerCase = country2.toLowerCase().split(' ').join('-')

    const country1Currency = country1CurrencyInfo.currencySymbol
    const country2Currency = country2CurrencyInfo.currencySymbol
    const country1UnitValueInUSD = country1CurrencyInfo.unitValueInUSD
    const country2UnitValueInUSD = country2CurrencyInfo.unitValueInUSD

    const pageType = 'cost-of-living'

    return (
        <>
            <ThreeTabs
                entity1={country1}
                entity2={country2}
            />

            <TopDescription
                country1={country1}
                country2={country2}
                costTimes={costTimes}
                moreOrLess={moreOrLess}
            />

            <HousingCost
                country1LowerCase={country1LowerCase}
                country2LowerCase={country2LowerCase}
                country1CostInfo={country1CostInfo}
                country2CostInfo={country2CostInfo}
                country1Currency={country1Currency}
                country2Currency={country2Currency}
                entity1PropertyAndIncomeTaxInfo={entity1PropertyAndIncomeTaxInfo}
                entity2PropertyAndIncomeTaxInfo={entity2PropertyAndIncomeTaxInfo}
                country1UnitValueInUSD={country1UnitValueInUSD}
                country2UnitValueInUSD={country2UnitValueInUSD}
            />
            <BasicUtilitiesCost
                country1LowerCase={country1LowerCase}
                country2LowerCase={country2LowerCase}
                country1CostInfo={country1CostInfo}
                country2CostInfo={country2CostInfo}
                country1Currency={country1Currency}
                country2Currency={country2Currency}
                country1UnitValueInUSD={country1UnitValueInUSD}
                country2UnitValueInUSD={country2UnitValueInUSD}
            />
            <NetworkAndCommunication
                country1LowerCase={country1LowerCase}
                country2LowerCase={country2LowerCase}
                country1CostInfo={country1CostInfo}
                country2CostInfo={country2CostInfo}
                country1Currency={country1Currency}
                country2Currency={country2Currency}
                country1UnitValueInUSD={country1UnitValueInUSD}
                country2UnitValueInUSD={country2UnitValueInUSD}
            />
            <GroceriesCost
                country1LowerCase={country1LowerCase}
                country2LowerCase={country2LowerCase}
                country1CostInfo={country1CostInfo}
                country2CostInfo={country2CostInfo}
                country1Currency={country1Currency}
                country2Currency={country2Currency}
                country1UnitValueInUSD={country1UnitValueInUSD}
                country2UnitValueInUSD={country2UnitValueInUSD}
            />
            <FruitsAndVegetablesCost
                country1LowerCase={country1LowerCase}
                country2LowerCase={country2LowerCase}
                country1CostInfo={country1CostInfo}
                country2CostInfo={country2CostInfo}
                country1Currency={country1Currency}
                country2Currency={country2Currency}
                country1UnitValueInUSD={country1UnitValueInUSD}
                country2UnitValueInUSD={country2UnitValueInUSD}
            />
            <DiningOutCost
                country1LowerCase={country1LowerCase}
                country2LowerCase={country2LowerCase}
                country1CostInfo={country1CostInfo}
                country2CostInfo={country2CostInfo}
                country1Currency={country1Currency}
                country2Currency={country2Currency}
                country1UnitValueInUSD={country1UnitValueInUSD}
                country2UnitValueInUSD={country2UnitValueInUSD}
            />
            <DrinksCost
                country1LowerCase={country1LowerCase}
                country2LowerCase={country2LowerCase}
                country1CostInfo={country1CostInfo}
                country2CostInfo={country2CostInfo}
                country1Currency={country1Currency}
                country2Currency={country2Currency}
                country1UnitValueInUSD={country1UnitValueInUSD}
                country2UnitValueInUSD={country2UnitValueInUSD}
            />
            <TransportationCost
                country1LowerCase={country1LowerCase}
                country2LowerCase={country2LowerCase}
                country1CostInfo={country1CostInfo}
                country2CostInfo={country2CostInfo}
                country1Currency={country1Currency}
                country2Currency={country2Currency}
                country1UnitValueInUSD={country1UnitValueInUSD}
                country2UnitValueInUSD={country2UnitValueInUSD}
            />
            <VehiclePurchaseAndMaintenanceCost
                country1LowerCase={country1LowerCase}
                country2LowerCase={country2LowerCase}
                country1CostInfo={country1CostInfo}
                country2CostInfo={country2CostInfo}
                country1Currency={country1Currency}
                country2Currency={country2Currency}
                country1UnitValueInUSD={country1UnitValueInUSD}
                country2UnitValueInUSD={country2UnitValueInUSD}
            />
            <HealthAndMedicalCost
                country1LowerCase={country1LowerCase}
                country2LowerCase={country2LowerCase}
                country1CostInfo={country1CostInfo}
                country2CostInfo={country2CostInfo}
                country1Currency={country1Currency}
                country2Currency={country2Currency}
                country1UnitValueInUSD={country1UnitValueInUSD}
                country2UnitValueInUSD={country2UnitValueInUSD}
            />
            <PersonalCareCost
                country1LowerCase={country1LowerCase}
                country2LowerCase={country2LowerCase}
                country1CostInfo={country1CostInfo}
                country2CostInfo={country2CostInfo}
                country1Currency={country1Currency}
                country2Currency={country2Currency}
                country1UnitValueInUSD={country1UnitValueInUSD}
                country2UnitValueInUSD={country2UnitValueInUSD}
            />
            <ClothingAndFootwearCost
                country1LowerCase={country1LowerCase}
                country2LowerCase={country2LowerCase}
                country1CostInfo={country1CostInfo}
                country2CostInfo={country2CostInfo}
                country1Currency={country1Currency}
                country2Currency={country2Currency}
                country1UnitValueInUSD={country1UnitValueInUSD}
                country2UnitValueInUSD={country2UnitValueInUSD}
            />
            <ChildcareCost
                country1LowerCase={country1LowerCase}
                country2LowerCase={country2LowerCase}
                country1CostInfo={country1CostInfo}
                country2CostInfo={country2CostInfo}
                country1Currency={country1Currency}
                country2Currency={country2Currency}
                country1UnitValueInUSD={country1UnitValueInUSD}
                country2UnitValueInUSD={country2UnitValueInUSD}
            />
            <SchoolAndEducationCost
                country1LowerCase={country1LowerCase}
                country2LowerCase={country2LowerCase}
                country1CostInfo={country1CostInfo}
                country2CostInfo={country2CostInfo}
                country1Currency={country1Currency}
                country2Currency={country2Currency}
                country1UnitValueInUSD={country1UnitValueInUSD}
                country2UnitValueInUSD={country2UnitValueInUSD}
            />
            <EntertainmentAndRecreationCost
                country1LowerCase={country1LowerCase}
                country2LowerCase={country2LowerCase}
                country1CostInfo={country1CostInfo}
                country2CostInfo={country2CostInfo}
                country1Currency={country1Currency}
                country2Currency={country2Currency}
                country1UnitValueInUSD={country1UnitValueInUSD}
                country2UnitValueInUSD={country2UnitValueInUSD}
            />
            <PrivateClassesAndLessonsCost
                country1LowerCase={country1LowerCase}
                country2LowerCase={country2LowerCase}
                country1CostInfo={country1CostInfo}
                country2CostInfo={country2CostInfo}
                country1Currency={country1Currency}
                country2Currency={country2Currency}
                country1UnitValueInUSD={country1UnitValueInUSD}
                country2UnitValueInUSD={country2UnitValueInUSD}
            />
            <WagesAndTaxesCost
                country1LowerCase={country1LowerCase}
                country2LowerCase={country2LowerCase}
                country1CostInfo={country1CostInfo}
                country2CostInfo={country2CostInfo}
                country1Currency={country1Currency}
                country2Currency={country2Currency}
                entity1PropertyAndIncomeTaxInfo={entity1PropertyAndIncomeTaxInfo}
                entity2PropertyAndIncomeTaxInfo={entity2PropertyAndIncomeTaxInfo}
                country1UnitValueInUSD={country1UnitValueInUSD}
                country2UnitValueInUSD={country2UnitValueInUSD}
            />
            <ProfessionalServicesCost
                country1LowerCase={country1LowerCase}
                country2LowerCase={country2LowerCase}
                country1CostInfo={country1CostInfo}
                country2CostInfo={country2CostInfo}
                country1Currency={country1Currency}
                country2Currency={country2Currency}
                country1UnitValueInUSD={country1UnitValueInUSD}
                country2UnitValueInUSD={country2UnitValueInUSD}
            />

            <LastParagraph
                country1={country1}
                country2={country2}
            />

            <ComparisonLinks
                entity={country1}
                listForLinks={listForLinks}
                pageType={pageType}
            />
        </>
    )
}

export default CostOfLivingCountries

