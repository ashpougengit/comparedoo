import ThreeTabs from "@/components/three-tabs/ThreeTabs"
import TopDescription from "./top-description/TopDescription"
import EconomicFactors from "./economic-factors/EconomicFactors"
import NationalExpenditure from "./national-expenditure/NationalExpenditure"
import Health from "./health/Health"
import EnvironmentalFactors from "./environmental-factors/EnvironmentalFactors"
import BusinessRegistration from "./business-registration/BusinessRegistration"
import ImportsAndExports from "./imports-and-exports/ImportsAndExports"
import TaxFactors from "./tax-factors/TaxFactors"
import LastParagraph from "./last-paragraph/LastParagraph"
import ComparisonLinks from "@/components/comparison-links/ComparisonLinks"

function StandardOfLivingCountry({ standardInfo, listForLinks }) {
  const country = standardInfo.country
  const countryURLCase = country.toLowerCase().split(' ').join('-')
  const pageType = 'standard-of-living'

  return (
    <>
      <ThreeTabs entity1={country} />

      <TopDescription country={country} />

      <EconomicFactors
        countryURLCase={countryURLCase}
        standardInfo={standardInfo}
      />

      <NationalExpenditure
        countryURLCase={countryURLCase}
        standardInfo={standardInfo}
      />

      <Health
        countryURLCase={countryURLCase}
        standardInfo={standardInfo}
      />

      <EnvironmentalFactors
        countryURLCase={countryURLCase}
        standardInfo={standardInfo}
      />

      <BusinessRegistration
        countryURLCase={countryURLCase}
        standardInfo={standardInfo}
      />

      <ImportsAndExports
        countryURLCase={countryURLCase}
        standardInfo={standardInfo}
      />

      <TaxFactors
        countryURLCase={countryURLCase}
        standardInfo={standardInfo}
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

export default StandardOfLivingCountry