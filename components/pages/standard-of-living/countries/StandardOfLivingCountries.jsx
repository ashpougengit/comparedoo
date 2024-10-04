import ThreeTabs from "@/components/three-tabs/ThreeTabs"
import TopDescription from "./top-description/TopDescription"
import BusinessRegistration from "./business-registration/BusinessRegistration"
import EconomicFactors from "./economic-factors/EconomicFactors"
import EnvironmentalFactors from "./environmental-factors/EnvironmentalFactors"
import GovernmentNationalExpenditure from "./government-national-expenditure/GovernmentNationalExpenditure"
import HealthSystemFacilities from "./health-system-facilities/HealthSystemFacilities"
import ImportAndExportFactors from "./import-and-export-factors/ImportAndExportFactors"
import TaxFactors from "./tax-factors/TaxFactors"
import LastParagraph from "./last-paragraph/LastParagraph"
import ComparisonLinks from "@/components/comparison-links/ComparisonLinks"
import { toURLFormat } from "@/lib/format/format"

function StandardOfLivingCountries({ country1StandardInfo, country2StandardInfo, standardTimes, betterOrLesser, listForLinks }) {
  const country1 = country1StandardInfo.country
  const country2 = country2StandardInfo.country
  const country1URLCase = toURLFormat(country1)
  const country2URLCase = toURLFormat(country2)
  const pageType = 'standard-of-living'

  return (
    <>
      <ThreeTabs
        entity1={country1}
        entity2={country2}
      />

      <TopDescription
        country1={country1}
        country2={country2}
        standardTimes={standardTimes}
        betterOrLesser={betterOrLesser}
      />

      <EconomicFactors
        country1URLCase={country1URLCase}
        country2URLCase={country2URLCase}
        country1StandardInfo={country1StandardInfo}
        country2StandardInfo={country2StandardInfo}
      />
      <GovernmentNationalExpenditure
        country1URLCase={country1URLCase}
        country2URLCase={country2URLCase}
        country1StandardInfo={country1StandardInfo}
        country2StandardInfo={country2StandardInfo}
      />
      <HealthSystemFacilities
        country1URLCase={country1URLCase}
        country2URLCase={country2URLCase}
        country1StandardInfo={country1StandardInfo}
        country2StandardInfo={country2StandardInfo}
      />
      <EnvironmentalFactors
        country1URLCase={country1URLCase}
        country2URLCase={country2URLCase}
        country1StandardInfo={country1StandardInfo}
        country2StandardInfo={country2StandardInfo}
      />
      <BusinessRegistration
        country1URLCase={country1URLCase}
        country2URLCase={country2URLCase}
        country1StandardInfo={country1StandardInfo}
        country2StandardInfo={country2StandardInfo}
      />
      <ImportAndExportFactors
        country1URLCase={country1URLCase}
        country2URLCase={country2URLCase}
        country1StandardInfo={country1StandardInfo}
        country2StandardInfo={country2StandardInfo}
      />
      <TaxFactors
        country1URLCase={country1URLCase}
        country2URLCase={country2URLCase}
        country1StandardInfo={country1StandardInfo}
        country2StandardInfo={country2StandardInfo}
      />

      <LastParagraph country1={country1} country2={country2} />

      <ComparisonLinks
        entity={country1}
        listForLinks={listForLinks}
        pageType={pageType}
      />
    </>
  )
}

export default StandardOfLivingCountries