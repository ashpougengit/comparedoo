import TopDescription from "./top-description/TopDescription"
import ThreeTabs from "@/components/three-tabs/ThreeTabs"
import Pictorial from "./pictorial-representation/Pictorial"
import BasicInfo from "./basic-info/BasicInfo"
import Size from "./size/Size"
import Symbols from "./symbols/Symbols"
import DateAndTime from "./date-and-time/DateAndTime"
import Population from "./population/Population"
import LastParagraph from "./last-paragraph/LastParagraph"
import Weather from './weather/Weather';
import { convertLatLongToDecimal } from '@/lib/helper';
import ComparisonLinks from '@/components/comparison-links/ComparisonLinks';
import { toURLFormat } from "@/lib/format/format"

function GeneralComparisonUSStates({
  state1GeneralInfo,
  state2GeneralInfo,
  state1WeatherInfo,
  state2WeatherInfo,
  timeDifference,
  aheadOrBehind,
  listForLinks,
}) {
  const state1 = state1GeneralInfo.state;
  const state2 = state2GeneralInfo.state;
  let state1URLCase = toURLFormat(state1);
  state1URLCase = state1URLCase === 'georgia-(usa)' ? 'georgia-usa' : state1URLCase
  let state2URLCase = toURLFormat(state2);
  state2URLCase = state2URLCase === 'georgia-(usa)' ? 'georgia-usa' : state2URLCase

  const capitalCity1 = convertLatLongToDecimal(
    state1GeneralInfo.latitude,
    state1GeneralInfo.longitude
  );
  const capitalCity2 = convertLatLongToDecimal(
    state2GeneralInfo.latitude,
    state2GeneralInfo.longitude
  );
  const pageType = 'comparison';

  return (
    <>
      <TopDescription state1={state1} state2={state2} />

      <ThreeTabs entity1={state1} entity2={state2} />

      <Pictorial
        state1={state1}
        state2={state2}
        state1URLCase={state1URLCase}
        state2URLCase={state2URLCase}
      />

      <BasicInfo
        state1URLCase={state1URLCase}
        state2URLCase={state2URLCase}
        state1GeneralInfo={state1GeneralInfo}
        state2GeneralInfo={state2GeneralInfo}
      />

      <Size
        state1URLCase={state1URLCase}
        state2URLCase={state2URLCase}
        state1GeneralInfo={state1GeneralInfo}
        state2GeneralInfo={state2GeneralInfo}
      />

      <Symbols
        state1URLCase={state1URLCase}
        state2URLCase={state2URLCase}
        state1GeneralInfo={state1GeneralInfo}
        state2GeneralInfo={state2GeneralInfo}
      />

      <DateAndTime
        state1URLCase={state1URLCase}
        state2URLCase={state2URLCase}
        state1WeatherInfo={state1WeatherInfo}
        state2WeatherInfo={state2WeatherInfo}
        state1GeneralInfo={state1GeneralInfo}
        state2GeneralInfo={state2GeneralInfo}
        timeDifference={timeDifference}
        aheadOrBehind={aheadOrBehind}
      />

      <Population
        state1URLCase={state1URLCase}
        state2URLCase={state2URLCase}
        state1GeneralInfo={state1GeneralInfo}
        state2GeneralInfo={state2GeneralInfo}
      />

      <Weather
        state1={state1}
        state2={state2}
        state1URLCase={state1URLCase}
        state2URLCase={state2URLCase}
        state1WeatherInfo={state1WeatherInfo}
        state2WeatherInfo={state2WeatherInfo}
      />

      <LastParagraph state1={state1} state2={state2} />
      <ComparisonLinks
        entity={state1}
        listForLinks={listForLinks}
        pageType={pageType}
      />
    </>
  );
}

export default GeneralComparisonUSStates