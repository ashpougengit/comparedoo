import ThreeTabs from "@/components/three-tabs/ThreeTabs"
import TopDescription from "./top-description/TopDescription"
import HumanDevelopment from "./human-development/HumanDevelopment"
import EconomicFactors from "./economic-factors/EconomicFactors"
import Health from "./health/Health"
import TaxAndFinance from "./tax-and-finance/TaxAndFinance"
import PopulationAndOldAge from "./population-and-old-age/PopulationAndOldAge"
import Employment from "./employment/Employment"
import Workers from "./workers/Workers"
import Environment from "./environment/Environment"
import Education from "./education/Education"
import RaceAndEthnicity from "./race-and-ethnicity/RaceAndEthnicity"
import Housing from "./housing/Housing"
import MaritalStatus from "./marital-status/MaritalStatus"
import LastParagraph from "./last-paragraph/LastParagraph"
import ComparisonLinks from "@/components/comparison-links/ComparisonLinks"

function StandardOfLivingUSState({ standardInfo, listForLinks }) {
    const state = standardInfo.state
    const stateURLCase = state.toLowerCase().split(' ').join('-')
    const pageType = 'standard-of-living'

    return (
        <>
            <ThreeTabs entity1={state} />
            <TopDescription state={state} />
            <HumanDevelopment standardInfo={standardInfo} stateURLCase={stateURLCase} />
            <EconomicFactors standardInfo={standardInfo} stateURLCase={stateURLCase} />
            <Health standardInfo={standardInfo} stateURLCase={stateURLCase} />
            <TaxAndFinance standardInfo={standardInfo} stateURLCase={stateURLCase} />
            <PopulationAndOldAge standardInfo={standardInfo} stateURLCase={stateURLCase} />
            <Employment standardInfo={standardInfo} stateURLCase={stateURLCase} />
            <Workers standardInfo={standardInfo} stateURLCase={stateURLCase} />
            <Environment standardInfo={standardInfo} stateURLCase={stateURLCase} />
            <Education standardInfo={standardInfo} stateURLCase={stateURLCase} />
            <RaceAndEthnicity standardInfo={standardInfo} stateURLCase={stateURLCase} />
            <Housing standardInfo={standardInfo} stateURLCase={stateURLCase} />
            <MaritalStatus standardInfo={standardInfo} stateURLCase={stateURLCase} />
            <LastParagraph state={state} />
            <ComparisonLinks
                entity={state}
                listForLinks={listForLinks}
                pageType={pageType}
            />
        </>
    )
}

export default StandardOfLivingUSState