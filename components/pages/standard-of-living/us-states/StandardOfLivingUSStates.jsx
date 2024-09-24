import ThreeTabs from "@/components/three-tabs/ThreeTabs"
import TopDescription from "./top-description/TopDescription"
import HumanDevelopment from "./human-development/HumanDevelopment"
import EconomicFactors from "./economic-factors/EconomicFactors"
import Health from "./health/Health"
import EnvironmentalFactors from "./environmental-factors/EnvironmentalFactors"
import LastParagraph from "./last-paragraph/LastParagraph"
import TaxAndFinance from "./tax-and-finance/TaxAndFinance"
import PopulationAndOldAge from "./population-and-old-age/PopulationAndOldAge"
import Employment from "./employment/Employment"
import Workers from "./workers/Workers"
import Education from "./education/Education"
import RaceAndEthnicity from "./race-and-ethnicity/RaceAndEthnicity"
import Housing from "./housing/Housing"
import MaritalStatus from "./marital-status/MaritalStatus"
import ComparisonLinks from "@/components/comparison-links/ComparisonLinks"

function StandardOfLivingUSStates({ state1StandardInfo, state2StandardInfo, standardTimes, betterOrLesser, listForLinks }) {
    const state1 = state1StandardInfo.state
    const state2 = state2StandardInfo.state
    const state1URLCase = state1.toLowerCase().split(' ').join('-')
    const state2URLCase = state2.toLowerCase().split(' ').join('-')
    const pageType = 'standard-of-living'

    return (
        <>
            <ThreeTabs
                entity1={state1}
                entity2={state2}
            />
            <TopDescription
                state1={state1}
                state2={state2}
                standardTimes={standardTimes}
                betterOrLesser={betterOrLesser}
            />
            <HumanDevelopment
                state1URLCase={state1URLCase}
                state2URLCase={state2URLCase}
                state1StandardInfo={state1StandardInfo}
                state2StandardInfo={state2StandardInfo}
            />
            <EconomicFactors
                state1URLCase={state1URLCase}
                state2URLCase={state2URLCase}
                state1StandardInfo={state1StandardInfo}
                state2StandardInfo={state2StandardInfo}
            />
            <Health
                state1URLCase={state1URLCase}
                state2URLCase={state2URLCase}
                state1StandardInfo={state1StandardInfo}
                state2StandardInfo={state2StandardInfo}
            />
            <TaxAndFinance
                state1URLCase={state1URLCase}
                state2URLCase={state2URLCase}
                state1StandardInfo={state1StandardInfo}
                state2StandardInfo={state2StandardInfo}
            />
            <PopulationAndOldAge
                state1URLCase={state1URLCase}
                state2URLCase={state2URLCase}
                state1StandardInfo={state1StandardInfo}
                state2StandardInfo={state2StandardInfo}
            />
            <Employment
                state1URLCase={state1URLCase}
                state2URLCase={state2URLCase}
                state1StandardInfo={state1StandardInfo}
                state2StandardInfo={state2StandardInfo}
            />
            <Workers
                state1URLCase={state1URLCase}
                state2URLCase={state2URLCase}
                state1StandardInfo={state1StandardInfo}
                state2StandardInfo={state2StandardInfo}
            />
            <EnvironmentalFactors
                state1URLCase={state1URLCase}
                state2URLCase={state2URLCase}
                state1StandardInfo={state1StandardInfo}
                state2StandardInfo={state2StandardInfo}
            />
            <Education
                state1URLCase={state1URLCase}
                state2URLCase={state2URLCase}
                state1StandardInfo={state1StandardInfo}
                state2StandardInfo={state2StandardInfo}
            />
            <RaceAndEthnicity
                state1URLCase={state1URLCase}
                state2URLCase={state2URLCase}
                state1StandardInfo={state1StandardInfo}
                state2StandardInfo={state2StandardInfo}
            />
            <Housing
                state1URLCase={state1URLCase}
                state2URLCase={state2URLCase}
                state1StandardInfo={state1StandardInfo}
                state2StandardInfo={state2StandardInfo}
            />
            <MaritalStatus
                state1URLCase={state1URLCase}
                state2URLCase={state2URLCase}
                state1StandardInfo={state1StandardInfo}
                state2StandardInfo={state2StandardInfo}
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

export default StandardOfLivingUSStates