
import PictorialRepresentation from './pictorial-representation/PictorialRepresentation';
import SizeComparison from './size-comparison/SizeComparison';
import PopulationComparison from './population-comparison/PopulationComparison';
import WeatherComparison from "./weather-comparison/WeatherComparison";
import NationalSymbols from "./national-symbols/NationalSymbols";
import TimeDifference from "./time-difference/TimeDifference";
import AgeDistribution from "./age-distribution/AgeDistribution";
import HealthFactors from "./health-factors/HealthFactors";
import TopDescription from "./top-description/TopDescription";
import ThreeTabs from '@/components/three-tabs/ThreeTabs';
import CountriesBasicInfoTable from './countries-basic-info-table/CountriesBasicInfoTable';
import GeographicalFactors from './geographical-factors/GeographicalFactors';
import LastParagraph from './last-paragraph/LastParagraph';
// import { convertLatLongToDecimal } from '@/lib/helper';
import ComparisonLinks from '@/components/comparison-links/ComparisonLinks';
import { toURLFormat } from '@/lib/format/format';

function GeneralComparisonCountries({
  country1GeneralInfo,
  country2GeneralInfo,
  country1WeatherInfo,
  country2WeatherInfo,
  timeDifference,
  aheadOrBehind,
  country1CurrentHealthExpenditurePercentage,
  country2CurrentHealthExpenditurePercentage,
  listForLinks,
}) {
  const country1 = country1GeneralInfo?.country;
  const country2 = country2GeneralInfo?.country;
  const country1URLCase = toURLFormat(country1);
  const country2URLCase = toURLFormat(country2);

  const pageType = 'comparison';

  return (
    <>
      <TopDescription country1={country1} country2={country2} />

      <ThreeTabs entity1={country1} entity2={country2} />

      <PictorialRepresentation
        country1={country1}
        country2={country2}
        country1URLCase={country1URLCase}
        country2URLCase={country2URLCase}
      />

      <CountriesBasicInfoTable
        country1URLCase={country1URLCase}
        country2URLCase={country2URLCase}
        country1GeneralInfo={country1GeneralInfo}
        country2GeneralInfo={country2GeneralInfo}
      />

      <SizeComparison
        country1URLCase={country1URLCase}
        country2URLCase={country2URLCase}
        country1GeneralInfo={country1GeneralInfo}
        country2GeneralInfo={country2GeneralInfo}
      />

      <GeographicalFactors
        country1URLCase={country1URLCase}
        country2URLCase={country2URLCase}
        country1GeneralInfo={country1GeneralInfo}
        country2GeneralInfo={country2GeneralInfo}
      />

      <NationalSymbols
        country1URLCase={country1URLCase}
        country2URLCase={country2URLCase}
        country1GeneralInfo={country1GeneralInfo}
        country2GeneralInfo={country2GeneralInfo}
      />

      <TimeDifference
        country1URLCase={country1URLCase}
        country2URLCase={country2URLCase}
        country1GeneralInfo={country1GeneralInfo}
        country2GeneralInfo={country2GeneralInfo}
        country1WeatherInfo={country1WeatherInfo}
        country2WeatherInfo={country2WeatherInfo}
        timeDifference={timeDifference}
        aheadOrBehind={aheadOrBehind}
      />

      <PopulationComparison
        country1URLCase={country1URLCase}
        country2URLCase={country2URLCase}
        country1={country1}
        country2={country2}
        country1GeneralInfo={country1GeneralInfo}
        country2GeneralInfo={country2GeneralInfo}
      />

      <AgeDistribution
        country1URLCase={country1URLCase}
        country2URLCase={country2URLCase}
        country1GeneralInfo={country1GeneralInfo}
        country2GeneralInfo={country2GeneralInfo}
      />

      <WeatherComparison
        country1URLCase={country1URLCase}
        country2URLCase={country2URLCase}
        country1={country1}
        country2={country2}
        country1WeatherInfo={country1WeatherInfo}
        country2WeatherInfo={country2WeatherInfo}
      />
      <HealthFactors
        country1URLCase={country1URLCase}
        country2URLCase={country2URLCase}
        country1GeneralInfo={country1GeneralInfo}
        country2GeneralInfo={country2GeneralInfo}
        country1CurrentHealthExpenditurePercentage={
          country1CurrentHealthExpenditurePercentage
        }
        country2CurrentHealthExpenditurePercentage={
          country2CurrentHealthExpenditurePercentage
        }
      />

      <LastParagraph country1={country1} country2={country2} />

      <ComparisonLinks
        entity={country1}
        listForLinks={listForLinks}
        pageType={pageType}
      />
    </>
  );
}

export default GeneralComparisonCountries;
