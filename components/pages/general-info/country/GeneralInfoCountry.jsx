import ThreeTabs from "@/components/three-tabs/ThreeTabs"
import TopDescription from "./top-description/TopDescription"
import PictorialRepresentation from "./pictorial-representation/PictorialRepresentation"
import SizeInfo from "./size-info/SizeInfo"
import GeographicalFactors from "./geographical-factors/GeographicalFactors"
import NationalSymbols from "./national-symbols/NationalSymbols"
import DateAndTime from "./date-and-time/DateAndTime"
import Population from "./population/Population"
import AgeDistribution from "./age-distribution/AgeDistribution"
import Weather from "./weather/Weather"
import Health from "./health/Health"
import CountryBasicInfo from './country-basic-info/CountryBasicInfo';
import LastParagraph from './last-paragraph/LastParagraph';
import ComparisonLinks from '@/components/comparison-links/ComparisonLinks';
import { toURLFormat } from "@/lib/format/format"

function GeneralInfoCountry({ generalInfo, weatherInfo, listForLinks }) {
  const country = generalInfo.country;
  const countryURLCase = toURLFormat(country);

  const pageType = 'comparison';

  return (
    <>
      <ThreeTabs entity1={country} />

      <TopDescription country={country} weatherInfo={weatherInfo} />

      <PictorialRepresentation
        country={country}
        countryURLCase={countryURLCase}
      />

      <CountryBasicInfo
        generalInfo={generalInfo}
        countryURLCase={countryURLCase}
      />

      <SizeInfo generalInfo={generalInfo} countryURLCase={countryURLCase} />

      <GeographicalFactors
        generalInfo={generalInfo}
        countryURLCase={countryURLCase}
      />

      <NationalSymbols
        generalInfo={generalInfo}
        countryURLCase={countryURLCase}
      />

      <DateAndTime
        generalInfo={generalInfo}
        weatherInfo={weatherInfo}
        countryURLCase={countryURLCase}
      />

      <Population generalInfo={generalInfo} countryURLCase={countryURLCase} />

      <AgeDistribution
        generalInfo={generalInfo}
        countryURLCase={countryURLCase}
      />

      {weatherInfo && (
        <Weather
          weatherInfo={weatherInfo}
          country={country}
          countryURLCase={countryURLCase}
        />
      )}

      <Health generalInfo={generalInfo} countryURLCase={countryURLCase} />

      <LastParagraph country={country} />

      <ComparisonLinks
        entity={country}
        listForLinks={listForLinks}
        pageType={pageType}
      />
    </>
  );
}

export default GeneralInfoCountry