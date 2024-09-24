import ThreeTabs from "@/components/three-tabs/ThreeTabs"
import TopDescription from "./top-description/TopDescription"
import BasicUtilities from "./basic-utilities/BasicUtilities"
import Housing from "./housing/Housing"
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

function CostOfLivingCountry({ costInfo, currencyInfo, propertyAndIncomeTaxInfo, listForLinks }) {
    const country = costInfo.country
    const countryLowerCase = country.toLowerCase().split(' ').join('-')

    const currency = currencyInfo.currencySymbol
    const unitValueInUSD = currencyInfo.unitValueInUSD

    const pageType = 'cost-of-living'

    return (
        <>
            <ThreeTabs entity1={country} />

            <TopDescription country={country} />

            <Housing
                countryLowerCase={countryLowerCase}
                costInfo={costInfo}
                currency={currency}
                propertyAndIncomeTaxInfo={propertyAndIncomeTaxInfo}
                unitValueInUSD={unitValueInUSD}
            />

            <BasicUtilities
                countryLowerCase={countryLowerCase}
                costInfo={costInfo}
                currency={currency}
                unitValueInUSD={unitValueInUSD}
            />

            <NetworkAndCommunication
                countryLowerCase={countryLowerCase}
                costInfo={costInfo}
                currency={currency}
                unitValueInUSD={unitValueInUSD}
            />

            <Groceries
                countryLowerCase={countryLowerCase}
                costInfo={costInfo}
                currency={currency}
                unitValueInUSD={unitValueInUSD}
            />

            <FruitsAndVegetables
                countryLowerCase={countryLowerCase}
                costInfo={costInfo}
                currency={currency}
                unitValueInUSD={unitValueInUSD}
            />

            <DiningOut
                countryLowerCase={countryLowerCase}
                costInfo={costInfo}
                currency={currency}
                unitValueInUSD={unitValueInUSD}
            />

            <Drinks
                countryLowerCase={countryLowerCase}
                costInfo={costInfo}
                currency={currency}
                unitValueInUSD={unitValueInUSD}
            />

            <Transportation
                countryLowerCase={countryLowerCase}
                costInfo={costInfo}
                currency={currency}
                unitValueInUSD={unitValueInUSD}
            />

            <Vehicle
                countryLowerCase={countryLowerCase}
                costInfo={costInfo}
                currency={currency}
                unitValueInUSD={unitValueInUSD}
            />

            <Health
                countryLowerCase={countryLowerCase}
                costInfo={costInfo}
                currency={currency}
                unitValueInUSD={unitValueInUSD}
            />

            <PersonalCare
                countryLowerCase={countryLowerCase}
                costInfo={costInfo}
                currency={currency}
                unitValueInUSD={unitValueInUSD}
            />

            <Clothing
                countryLowerCase={countryLowerCase}
                costInfo={costInfo}
                currency={currency}
                unitValueInUSD={unitValueInUSD}
            />

            <Childcare
                countryLowerCase={countryLowerCase}
                costInfo={costInfo}
                currency={currency}
                unitValueInUSD={unitValueInUSD}
            />

            <Education
                countryLowerCase={countryLowerCase}
                costInfo={costInfo}
                currency={currency}
                unitValueInUSD={unitValueInUSD}
            />

            <Entertainment
                countryLowerCase={countryLowerCase}
                costInfo={costInfo}
                currency={currency}
                unitValueInUSD={unitValueInUSD}
            />

            <PrivateClasses
                countryLowerCase={countryLowerCase}
                costInfo={costInfo}
                currency={currency}
                unitValueInUSD={unitValueInUSD}
            />

            <WagesAndTaxes
                countryLowerCase={countryLowerCase}
                costInfo={costInfo}
                currency={currency}
                unitValueInUSD={unitValueInUSD}
                propertyAndIncomeTaxInfo={propertyAndIncomeTaxInfo}
            />

            <ProfessionalServices
                countryLowerCase={countryLowerCase}
                costInfo={costInfo}
                currency={currency}
                unitValueInUSD={unitValueInUSD}
            />

            <LastParagraph country={country} />

            <ComparisonLinks
                entity={country}
                listForLinks={listForLinks}
                pageType={pageType}
            />
        </>
    )
}

export default CostOfLivingCountry