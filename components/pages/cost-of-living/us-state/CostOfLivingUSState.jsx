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

function CostOfLivingUSState({ costInfo, propertyAndIncomeTaxInfo, listForLinks }) {
    const state = costInfo.state
    const stateLowerCase = state.toLowerCase().split(' ').join('-')
    const pageType = 'cost-of-living'

    return (
        <>
            <ThreeTabs entity1={state} />
            <TopDescription state={state} />
            <Housing costInfo={costInfo} propertyAndIncomeTaxInfo={propertyAndIncomeTaxInfo} stateLowerCase={stateLowerCase} />
            <BasicUtilities costInfo={costInfo} stateLowerCase={stateLowerCase} />
            <NetworkAndCommunication costInfo={costInfo} stateLowerCase={stateLowerCase} />
            <Groceries costInfo={costInfo} stateLowerCase={stateLowerCase} />
            <FruitsAndVegetables costInfo={costInfo} stateLowerCase={stateLowerCase} />
            <DiningOut costInfo={costInfo} stateLowerCase={stateLowerCase} />
            <Drinks costInfo={costInfo} stateLowerCase={stateLowerCase} />
            <Transportation costInfo={costInfo} stateLowerCase={stateLowerCase} />
            <Vehicle costInfo={costInfo} stateLowerCase={stateLowerCase} />
            <Health costInfo={costInfo} stateLowerCase={stateLowerCase} />
            <PersonalCare costInfo={costInfo} stateLowerCase={stateLowerCase} />
            <Clothing costInfo={costInfo} stateLowerCase={stateLowerCase} />
            <Childcare costInfo={costInfo} stateLowerCase={stateLowerCase} />
            <Education costInfo={costInfo} stateLowerCase={stateLowerCase} />
            <Entertainment costInfo={costInfo} stateLowerCase={stateLowerCase} />
            <PrivateClasses costInfo={costInfo} stateLowerCase={stateLowerCase} />
            <WagesAndTaxes costInfo={costInfo} propertyAndIncomeTaxInfo={propertyAndIncomeTaxInfo} stateLowerCase={stateLowerCase} />
            <ProfessionalServices costInfo={costInfo} stateLowerCase={stateLowerCase} />
            <LastParagraph state={state} />
            <ComparisonLinks entity={state} listForLinks={listForLinks} pageType={pageType}
            />
        </>
    )
}

export default CostOfLivingUSState