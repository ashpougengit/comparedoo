import TopDescription from "./top-description/TopDescription"
import ThreeTabs from "@/components/three-tabs/ThreeTabs"
import PictorialRepresentation from "./pictorial-representation/PictorialRepresentation"
import BasicInfo from "./basic-info/BasicInfo"
import Size from "./size/Size"
import Geography from "./geography/Geography"
import Symbols from "./symbols/Symbols"
import Time from "./time/Time"
import Population from "./population/Population"
import Weather from "./weather/Weather"
import LastParagraph from "./last-paragraph/LastParagraph"
import GeographicalMap from "@/components/map/GeographicalMap"
import { convertLatLongToDecimal } from "@/lib/helper"
import ComparisonLinks from "@/components/comparison-links/ComparisonLinks"

function CountryVsUSStateGeneral({ slug1GeneralInfo, slug2GeneralInfo, slug1WeatherInfo, slug2WeatherInfo, timeDifference, aheadOrBehind, value1, value2, listForLinks }) {
    const slug1 = slug1GeneralInfo[value1]
    const slug2 = slug2GeneralInfo[value2]
    const slug1URLCase = slug1.toLowerCase().split(' ').join('-')
    const slug2URLCase = slug2.toLowerCase().split(' ').join('-')
    const capitalCity1 = convertLatLongToDecimal(slug1GeneralInfo.latitude, slug1GeneralInfo.longitude)
    const capitalCity2 = convertLatLongToDecimal(slug2GeneralInfo.latitude, slug2GeneralInfo.longitude)
    const pageType = 'comparison'

    return (
        <>
            <TopDescription
                slug1={slug1}
                slug2={slug2}
            />
            <ThreeTabs
                entity1={slug1}
                entity2={slug2}
            />

            <GeographicalMap
                entity1={slug1}
                entity2={slug2}
                city1={capitalCity1}
                city2={capitalCity2}
            />

            <PictorialRepresentation
                slug1={slug1}
                slug2={slug2}
                value1={value1}
                value2={value2}
                slug1URLCase={slug1URLCase}
                slug2URLCase={slug2URLCase}
            />
            <BasicInfo
                slug1={slug1}
                slug2={slug2}
                slug1URLCase={slug1URLCase}
                slug2URLCase={slug2URLCase}
                slug1GeneralInfo={slug1GeneralInfo}
                slug2GeneralInfo={slug2GeneralInfo}
            />
            <Size
                slug1={slug1}
                slug2={slug2}
                slug1URLCase={slug1URLCase}
                slug2URLCase={slug2URLCase}
                slug1GeneralInfo={slug1GeneralInfo}
                slug2GeneralInfo={slug2GeneralInfo}
            />
            <Geography
                slug1={slug1}
                slug2={slug2}
                slug1URLCase={slug1URLCase}
                slug2URLCase={slug2URLCase}
                slug1GeneralInfo={slug1GeneralInfo}
                slug2GeneralInfo={slug2GeneralInfo}
            />
            <Symbols
                slug1={slug1}
                slug2={slug2}
                slug1URLCase={slug1URLCase}
                slug2URLCase={slug2URLCase}
                slug1GeneralInfo={slug1GeneralInfo}
                slug2GeneralInfo={slug2GeneralInfo}
            />
            <Time
                slug1={slug1}
                slug2={slug2}
                slug1URLCase={slug1URLCase}
                slug2URLCase={slug2URLCase}
                slug1GeneralInfo={slug1GeneralInfo}
                slug2GeneralInfo={slug2GeneralInfo}
                slug1WeatherInfo={slug1WeatherInfo}
                slug2WeatherInfo={slug2WeatherInfo}
                timeDifference={timeDifference}
                aheadOrBehind={aheadOrBehind}
            />
            <Population
                slug1={slug1}
                slug2={slug2}
                slug1GeneralInfo={slug1GeneralInfo}
                slug2GeneralInfo={slug2GeneralInfo}
            />
            <Weather
                slug1={slug1}
                slug2={slug2}
                slug1URLCase={slug1URLCase}
                slug2URLCase={slug2URLCase}
                slug1WeatherInfo={slug1WeatherInfo}
                slug2WeatherInfo={slug2WeatherInfo}
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

export default CountryVsUSStateGeneral