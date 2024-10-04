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

function CostOfLivingUSStates({ state1CostInfo, state2CostInfo, entity1PropertyAndIncomeTaxInfo, entity2PropertyAndIncomeTaxInfo, costTimes, moreOrLess, listForLinks }) {
    const state1 = state1CostInfo.state
    const state2 = state2CostInfo.state
    const state1URLCase = toURLFormat(state1)
    const state2URLCase = toURLFormat(state2)
    const pageType = 'cost-of-living'

    return (
        <>
            <ThreeTabs
                entity1={state1}
                entity2={state2}
            />
            <TopDescription
                state1={state1}
                state2={state2}
                costTimes={costTimes}
                moreOrLess={moreOrLess}
            />
            <Housing
                state1URLCase={state1URLCase}
                state2URLCase={state2URLCase}
                state1CostInfo={state1CostInfo}
                state2CostInfo={state2CostInfo}
                entity1PropertyAndIncomeTaxInfo={entity1PropertyAndIncomeTaxInfo}
                entity2PropertyAndIncomeTaxInfo={entity2PropertyAndIncomeTaxInfo}
            />
            <BasicUtilities
                state1URLCase={state1URLCase}
                state2URLCase={state2URLCase}
                state1CostInfo={state1CostInfo}
                state2CostInfo={state2CostInfo}
            />
            <NetworkAndCommunication
                state1URLCase={state1URLCase}
                state2URLCase={state2URLCase}
                state1CostInfo={state1CostInfo}
                state2CostInfo={state2CostInfo}
            />
            <Groceries
                state1URLCase={state1URLCase}
                state2URLCase={state2URLCase}
                state1CostInfo={state1CostInfo}
                state2CostInfo={state2CostInfo}
            />
            <FruitsAndVegetables
                state1URLCase={state1URLCase}
                state2URLCase={state2URLCase}
                state1CostInfo={state1CostInfo}
                state2CostInfo={state2CostInfo}
            />
            <DiningOut
                state1URLCase={state1URLCase}
                state2URLCase={state2URLCase}
                state1CostInfo={state1CostInfo}
                state2CostInfo={state2CostInfo}
            />
            <Drinks
                state1URLCase={state1URLCase}
                state2URLCase={state2URLCase}
                state1CostInfo={state1CostInfo}
                state2CostInfo={state2CostInfo}
            />
            <Transportation
                state1URLCase={state1URLCase}
                state2URLCase={state2URLCase}
                state1CostInfo={state1CostInfo}
                state2CostInfo={state2CostInfo}
            />
            <Vehicle
                state1URLCase={state1URLCase}
                state2URLCase={state2URLCase}
                state1CostInfo={state1CostInfo}
                state2CostInfo={state2CostInfo}
            />
            <Health
                state1URLCase={state1URLCase}
                state2URLCase={state2URLCase}
                state1CostInfo={state1CostInfo}
                state2CostInfo={state2CostInfo}
            />
            <PersonalCare
                state1URLCase={state1URLCase}
                state2URLCase={state2URLCase}
                state1CostInfo={state1CostInfo}
                state2CostInfo={state2CostInfo}
            />
            <Clothing
                state1URLCase={state1URLCase}
                state2URLCase={state2URLCase}
                state1CostInfo={state1CostInfo}
                state2CostInfo={state2CostInfo}
            />
            <Childcare
                state1URLCase={state1URLCase}
                state2URLCase={state2URLCase}
                state1CostInfo={state1CostInfo}
                state2CostInfo={state2CostInfo}
            />
            <Education
                state1URLCase={state1URLCase}
                state2URLCase={state2URLCase}
                state1CostInfo={state1CostInfo}
                state2CostInfo={state2CostInfo}
            />
            <Entertainment
                state1URLCase={state1URLCase}
                state2URLCase={state2URLCase}
                state1CostInfo={state1CostInfo}
                state2CostInfo={state2CostInfo}
            />
            <PrivateClasses
                state1URLCase={state1URLCase}
                state2URLCase={state2URLCase}
                state1CostInfo={state1CostInfo}
                state2CostInfo={state2CostInfo}
            />
            <WagesAndTaxes
                state1URLCase={state1URLCase}
                state2URLCase={state2URLCase}
                state1CostInfo={state1CostInfo}
                state2CostInfo={state2CostInfo}
                entity1PropertyAndIncomeTaxInfo={entity1PropertyAndIncomeTaxInfo}
                entity2PropertyAndIncomeTaxInfo={entity2PropertyAndIncomeTaxInfo}
            />
            <ProfessionalServices
                state1URLCase={state1URLCase}
                state2URLCase={state2URLCase}
                state1CostInfo={state1CostInfo}
                state2CostInfo={state2CostInfo}
            />
            <LastParagraph
                state1={state1}
                state2={state2}
            />
            <ComparisonLinks
                entity={state1}
                listForLinks={listForLinks}
                pageType={pageType}
            />
        </>
    )
}

export default CostOfLivingUSStates