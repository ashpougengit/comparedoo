import ThreeTabs from "@/components/three-tabs/ThreeTabs"
import TopDescription from "./top-description/TopDescription"
import Housing from "./housing/Housing"
import BasicUtilities from "./basic-utilities/BasicUtilities"
import NetworkAndCommunication from "./network-and-communication/NetworkAndCommunication"
import Groceries from "./groceries/Groceries"
import FruitsAndVegetables from "./fruits-and-vegetables/FruitsAndVegetables"
import DiningOut from "./dining-out/DiningOut"
import Drinks from "./drinks/Drinks"
import Transportation from "./transportation/Transportation"
import Vehicle from "./vehicle/Vehicle"
import Health from "./health/Health"
import PersonalCare from "./personal-care/PersonalCare"
import Clothing from "./clothing/Clothing"
import Childcare from "./childcare/Childcare"
import Education from "./education/Education"
import Entertainment from "./entertainment/Entertainment"
import PrivateClasses from "./private-classes/PrivateClasses"
import WagesAndTaxes from "./wages-and-taxes/WagesAndTaxes"
import ProfessionalServices from "./professional-services/ProfessionalServices"
import LastParagraph from "./last-paragraph/LastParagraph"
import ComparisonLinks from "@/components/comparison-links/ComparisonLinks"

function CountryVsUSStateCost({ slug1CostInfo, slug2CostInfo, value1, value2, currencyInfo, entity1PropertyAndIncomeTaxInfo, entity2PropertyAndIncomeTaxInfo, costTimes, moreOrLess, listForLinks }) {
    const slug1 = slug1CostInfo[value1]
    const slug2 = slug2CostInfo[value2]
    const slug1LowerCase = slug1.toLowerCase().split(' ').join('-')
    const slug2LowerCase = slug2.toLowerCase().split(' ').join('-')

    const slug1Currency = value1 === 'country' ? currencyInfo.currencySymbol : ''
    const slug2Currency = value2 === 'country' ? currencyInfo.currencySymbol : ''
    const slug1ExchangeRate = value1 != 'state' ? currencyInfo.unitValueInUSD : 1
    const slug2ExchangeRate = value2 != 'state' ? currencyInfo.unitValueInUSD : 1

    const pageType = 'cost-of-living'

    return (
        <>
            <ThreeTabs
                entity1={slug1}
                entity2={slug2}
            />
            <TopDescription
                slug1={slug1}
                slug2={slug2}
                costTimes={costTimes}
                moreOrLess={moreOrLess}
            />
            <Housing
                slug1={slug1}
                slug2={slug2}
                slug1LowerCase={slug1LowerCase}
                slug2LowerCase={slug2LowerCase}
                value1={value1}
                value2={value2}
                slug1CostInfo={slug1CostInfo}
                slug2CostInfo={slug2CostInfo}
                slug1Currency={slug1Currency}
                slug2Currency={slug2Currency}
                entity1PropertyAndIncomeTaxInfo={entity1PropertyAndIncomeTaxInfo}
                entity2PropertyAndIncomeTaxInfo={entity2PropertyAndIncomeTaxInfo}
                slug1ExchangeRate={slug1ExchangeRate}
                slug2ExchangeRate={slug2ExchangeRate}
            />
            <BasicUtilities
                slug1={slug1}
                slug2={slug2}
                slug1LowerCase={slug1LowerCase}
                slug2LowerCase={slug2LowerCase}
                value1={value1}
                value2={value2}
                slug1CostInfo={slug1CostInfo}
                slug2CostInfo={slug2CostInfo}
                slug1Currency={slug1Currency}
                slug2Currency={slug2Currency}
                slug1ExchangeRate={slug1ExchangeRate}
                slug2ExchangeRate={slug2ExchangeRate}
            />
            <NetworkAndCommunication
                slug1={slug1}
                slug2={slug2}
                slug1LowerCase={slug1LowerCase}
                slug2LowerCase={slug2LowerCase}
                value1={value1}
                value2={value2}
                slug1CostInfo={slug1CostInfo}
                slug2CostInfo={slug2CostInfo}
                slug1Currency={slug1Currency}
                slug2Currency={slug2Currency}
                slug1ExchangeRate={slug1ExchangeRate}
                slug2ExchangeRate={slug2ExchangeRate}
            />
            <Groceries
                slug1={slug1}
                slug2={slug2}
                slug1LowerCase={slug1LowerCase}
                slug2LowerCase={slug2LowerCase}
                value1={value1}
                value2={value2}
                slug1CostInfo={slug1CostInfo}
                slug2CostInfo={slug2CostInfo}
                slug1Currency={slug1Currency}
                slug2Currency={slug2Currency}
                slug1ExchangeRate={slug1ExchangeRate}
                slug2ExchangeRate={slug2ExchangeRate}
            />

            {/* with formatCost function */}

            <FruitsAndVegetables
                slug1={slug1}
                slug2={slug2}
                slug1LowerCase={slug1LowerCase}
                slug2LowerCase={slug2LowerCase}
                value1={value1}
                value2={value2}
                slug1CostInfo={slug1CostInfo}
                slug2CostInfo={slug2CostInfo}
                slug1Currency={slug1Currency}
                slug2Currency={slug2Currency}
                slug1ExchangeRate={slug1ExchangeRate}
                slug2ExchangeRate={slug2ExchangeRate}
            />
            <DiningOut
                slug1={slug1}
                slug2={slug2}
                slug1LowerCase={slug1LowerCase}
                slug2LowerCase={slug2LowerCase}
                value1={value1}
                value2={value2}
                slug1CostInfo={slug1CostInfo}
                slug2CostInfo={slug2CostInfo}
                slug1Currency={slug1Currency}
                slug2Currency={slug2Currency}
                slug1ExchangeRate={slug1ExchangeRate}
                slug2ExchangeRate={slug2ExchangeRate}
            />
            <Drinks
                slug1={slug1}
                slug2={slug2}
                slug1LowerCase={slug1LowerCase}
                slug2LowerCase={slug2LowerCase}
                value1={value1}
                value2={value2}
                slug1CostInfo={slug1CostInfo}
                slug2CostInfo={slug2CostInfo}
                slug1Currency={slug1Currency}
                slug2Currency={slug2Currency}
                slug1ExchangeRate={slug1ExchangeRate}
                slug2ExchangeRate={slug2ExchangeRate}
            />
            <Transportation
                slug1={slug1}
                slug2={slug2}
                slug1LowerCase={slug1LowerCase}
                slug2LowerCase={slug2LowerCase}
                value1={value1}
                value2={value2}
                slug1CostInfo={slug1CostInfo}
                slug2CostInfo={slug2CostInfo}
                slug1Currency={slug1Currency}
                slug2Currency={slug2Currency}
                slug1ExchangeRate={slug1ExchangeRate}
                slug2ExchangeRate={slug2ExchangeRate}
            />
            <Vehicle
                slug1={slug1}
                slug2={slug2}
                slug1LowerCase={slug1LowerCase}
                slug2LowerCase={slug2LowerCase}
                value1={value1}
                value2={value2}
                slug1CostInfo={slug1CostInfo}
                slug2CostInfo={slug2CostInfo}
                slug1Currency={slug1Currency}
                slug2Currency={slug2Currency}
                slug1ExchangeRate={slug1ExchangeRate}
                slug2ExchangeRate={slug2ExchangeRate}
            />
            <Health
                slug1={slug1}
                slug2={slug2}
                slug1LowerCase={slug1LowerCase}
                slug2LowerCase={slug2LowerCase}
                value1={value1}
                value2={value2}
                slug1CostInfo={slug1CostInfo}
                slug2CostInfo={slug2CostInfo}
                slug1Currency={slug1Currency}
                slug2Currency={slug2Currency}
                slug1ExchangeRate={slug1ExchangeRate}
                slug2ExchangeRate={slug2ExchangeRate}
            />
            <PersonalCare
                slug1={slug1}
                slug2={slug2}
                slug1LowerCase={slug1LowerCase}
                slug2LowerCase={slug2LowerCase}
                value1={value1}
                value2={value2}
                slug1CostInfo={slug1CostInfo}
                slug2CostInfo={slug2CostInfo}
                slug1Currency={slug1Currency}
                slug2Currency={slug2Currency}
                slug1ExchangeRate={slug1ExchangeRate}
                slug2ExchangeRate={slug2ExchangeRate}
            />
            <Clothing
                slug1={slug1}
                slug2={slug2}
                slug1LowerCase={slug1LowerCase}
                slug2LowerCase={slug2LowerCase}
                value1={value1}
                value2={value2}
                slug1CostInfo={slug1CostInfo}
                slug2CostInfo={slug2CostInfo}
                slug1Currency={slug1Currency}
                slug2Currency={slug2Currency}
                slug1ExchangeRate={slug1ExchangeRate}
                slug2ExchangeRate={slug2ExchangeRate}
            />
            <Childcare
                slug1={slug1}
                slug2={slug2}
                slug1LowerCase={slug1LowerCase}
                slug2LowerCase={slug2LowerCase}
                value1={value1}
                value2={value2}
                slug1CostInfo={slug1CostInfo}
                slug2CostInfo={slug2CostInfo}
                slug1Currency={slug1Currency}
                slug2Currency={slug2Currency}
                slug1ExchangeRate={slug1ExchangeRate}
                slug2ExchangeRate={slug2ExchangeRate}
            />
            <Education
                slug1={slug1}
                slug2={slug2}
                slug1LowerCase={slug1LowerCase}
                slug2LowerCase={slug2LowerCase}
                value1={value1}
                value2={value2}
                slug1CostInfo={slug1CostInfo}
                slug2CostInfo={slug2CostInfo}
                slug1Currency={slug1Currency}
                slug2Currency={slug2Currency}
                slug1ExchangeRate={slug1ExchangeRate}
                slug2ExchangeRate={slug2ExchangeRate}
            />
            <Entertainment
                slug1={slug1}
                slug2={slug2}
                slug1LowerCase={slug1LowerCase}
                slug2LowerCase={slug2LowerCase}
                value1={value1}
                value2={value2}
                slug1CostInfo={slug1CostInfo}
                slug2CostInfo={slug2CostInfo}
                slug1Currency={slug1Currency}
                slug2Currency={slug2Currency}
                slug1ExchangeRate={slug1ExchangeRate}
                slug2ExchangeRate={slug2ExchangeRate}
            />

            <PrivateClasses
                slug1={slug1}
                slug2={slug2}
                slug1LowerCase={slug1LowerCase}
                slug2LowerCase={slug2LowerCase}
                value1={value1}
                value2={value2}
                slug1CostInfo={slug1CostInfo}
                slug2CostInfo={slug2CostInfo}
                slug1Currency={slug1Currency}
                slug2Currency={slug2Currency}
                slug1ExchangeRate={slug1ExchangeRate}
                slug2ExchangeRate={slug2ExchangeRate}
            />
            <WagesAndTaxes
                slug1={slug1}
                slug2={slug2}
                slug1LowerCase={slug1LowerCase}
                slug2LowerCase={slug2LowerCase}
                value1={value1}
                value2={value2}
                slug1CostInfo={slug1CostInfo}
                slug2CostInfo={slug2CostInfo}
                slug1Currency={slug1Currency}
                slug2Currency={slug2Currency}
                entity1PropertyAndIncomeTaxInfo={entity1PropertyAndIncomeTaxInfo}
                entity2PropertyAndIncomeTaxInfo={entity2PropertyAndIncomeTaxInfo}
                slug1ExchangeRate={slug1ExchangeRate}
                slug2ExchangeRate={slug2ExchangeRate}
            />
            <ProfessionalServices
                slug1={slug1}
                slug2={slug2}
                slug1LowerCase={slug1LowerCase}
                slug2LowerCase={slug2LowerCase}
                value1={value1}
                value2={value2}
                slug1CostInfo={slug1CostInfo}
                slug2CostInfo={slug2CostInfo}
                slug1Currency={slug1Currency}
                slug2Currency={slug2Currency}
                slug1ExchangeRate={slug1ExchangeRate}
                slug2ExchangeRate={slug2ExchangeRate}
            />
            <LastParagraph
                slug1={slug1}
                slug2={slug2}
            />
            <ComparisonLinks
                entity={slug1}
                listForLinks={listForLinks}
                pageType={pageType}
            />
        </>
    )
}

export default CountryVsUSStateCost