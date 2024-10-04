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
import { toURLFormat } from "@/lib/format/format"

function CostOfLivingUSState({ costInfo, propertyAndIncomeTaxInfo, listForLinks }) {
    const state = costInfo.state
    const stateURLCase = toURLFormat(state)
    const pageType = 'cost-of-living'

    return (
        <>
            <ThreeTabs entity1={state} />
            <TopDescription state={state} />
            <Housing costInfo={costInfo} propertyAndIncomeTaxInfo={propertyAndIncomeTaxInfo} stateURLCase={stateURLCase} />
            <BasicUtilities costInfo={costInfo} stateURLCase={stateURLCase} />
            <NetworkAndCommunication costInfo={costInfo} stateURLCase={stateURLCase} />
            <Groceries costInfo={costInfo} stateURLCase={stateURLCase} />
            <FruitsAndVegetables costInfo={costInfo} stateURLCase={stateURLCase} />
            <DiningOut costInfo={costInfo} stateURLCase={stateURLCase} />
            <Drinks costInfo={costInfo} stateURLCase={stateURLCase} />
            <Transportation costInfo={costInfo} stateURLCase={stateURLCase} />
            <Vehicle costInfo={costInfo} stateURLCase={stateURLCase} />
            <Health costInfo={costInfo} stateURLCase={stateURLCase} />
            <PersonalCare costInfo={costInfo} stateURLCase={stateURLCase} />
            <Clothing costInfo={costInfo} stateURLCase={stateURLCase} />
            <Childcare costInfo={costInfo} stateURLCase={stateURLCase} />
            <Education costInfo={costInfo} stateURLCase={stateURLCase} />
            <Entertainment costInfo={costInfo} stateURLCase={stateURLCase} />
            <PrivateClasses costInfo={costInfo} stateURLCase={stateURLCase} />
            <WagesAndTaxes costInfo={costInfo} propertyAndIncomeTaxInfo={propertyAndIncomeTaxInfo} stateURLCase={stateURLCase} />
            <ProfessionalServices costInfo={costInfo} stateURLCase={stateURLCase} />
            <LastParagraph state={state} />
            <ComparisonLinks entity={state} listForLinks={listForLinks} pageType={pageType}
            />
        </>
    )
}

export default CostOfLivingUSState