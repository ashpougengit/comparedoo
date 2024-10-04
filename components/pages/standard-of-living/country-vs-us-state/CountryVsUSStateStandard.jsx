import ThreeTabs from "@/components/three-tabs/ThreeTabs"
import TopDescription from "./top-description/TopDescription"
import HumanDevelopment from "./human-development/HumanDevelopment"
import Economy from "./economy/Economy"
import TaxAndFinance from "./tax-and-finance/TaxAndFinance"
import Environment from "./environment/Environment"
import LastParagraph from "./last-paragraph/LastParagraph"
import ComparisonLinks from "@/components/comparison-links/ComparisonLinks"
import { toURLFormat } from "@/lib/format/format"

function CountryVsUSStateStandard({ slug1StandardInfo, slug2StandardInfo, value1, value2, standardTimes, betterOrLesser, listForLinks }) {
    const slug1 = slug1StandardInfo[value1]
    const slug2 = slug2StandardInfo[value2]
    const slug1URLCase = toURLFormat(slug1)
    const slug2URLCase = toURLFormat(slug2)
    const pageType = 'standard-of-living'

    return (
        <>
            <ThreeTabs
                entity1={slug1}
                entity2={slug2}
            />
            <TopDescription
                slug1={slug1}
                slug2={slug2}
                standardTimes={standardTimes}
                betterOrLesser={betterOrLesser}
            />
            <HumanDevelopment
                slug1={slug1}
                slug2={slug2}
                slug1URLCase={slug1URLCase}
                slug2URLCase={slug2URLCase}
                slug1StandardInfo={slug1StandardInfo}
                slug2StandardInfo={slug2StandardInfo}
            />
            <Economy
                slug1={slug1}
                slug2={slug2}
                slug1URLCase={slug1URLCase}
                slug2URLCase={slug2URLCase}
                slug1StandardInfo={slug1StandardInfo}
                slug2StandardInfo={slug2StandardInfo}
            />
            <TaxAndFinance
                slug1={slug1}
                slug2={slug2}
                slug1URLCase={slug1URLCase}
                slug2URLCase={slug2URLCase}
                slug1StandardInfo={slug1StandardInfo}
                slug2StandardInfo={slug2StandardInfo}
            />
            <Environment
                slug1={slug1}
                slug2={slug2}
                slug1URLCase={slug1URLCase}
                slug2URLCase={slug2URLCase}
                slug1StandardInfo={slug1StandardInfo}
                slug2StandardInfo={slug2StandardInfo}
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

export default CountryVsUSStateStandard