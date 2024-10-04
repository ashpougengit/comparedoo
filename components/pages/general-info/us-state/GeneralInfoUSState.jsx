import ThreeTabs from "@/components/three-tabs/ThreeTabs"
import TopDescription from "./top-description/TopDescription"
import PictorialRepresentation from "./pictorial-representation/PictorialRepresentation"
import BasicInfo from "./basic-info/BasicInfo"
import Area from "./area/Area"
import Symbols from "./symbols/Symbols"
import DateAndTime from "./date-and-time/DateAndTime"
import Population from "./population/Population"
import Weather from './weather/Weather';
import LastParagraph from './last-paragraph/LastParagraph';
import ComparisonLinks from '@/components/comparison-links/ComparisonLinks';
import { toURLFormat } from "@/lib/format/format"

function GeneralInfoUSState({ generalInfo, weatherInfo, listForLinks }) {
  const state = generalInfo.state;
  let stateURLCase = toURLFormat(state);
  stateURLCase = stateURLCase === 'georgia-(usa)' ? 'georgia-usa' : stateURLCase

  const pageType = 'comparison';

  return (
    <>
      <TopDescription state={state} />
      <ThreeTabs entity1={state} />
      <PictorialRepresentation state={state} stateURLCase={stateURLCase} />
      <BasicInfo generalInfo={generalInfo} stateURLCase={stateURLCase} />
      <Area generalInfo={generalInfo} stateURLCase={stateURLCase} />
      <Symbols generalInfo={generalInfo} stateURLCase={stateURLCase} />
      <DateAndTime
        generalInfo={generalInfo}
        weatherInfo={weatherInfo}
        stateURLCase={stateURLCase}
      />
      <Population generalInfo={generalInfo} stateURLCase={stateURLCase} />
      {weatherInfo && (
        <Weather
          state={state}
          weatherInfo={weatherInfo}
          stateURLCase={stateURLCase}
        />
      )}
      <LastParagraph state={state} />
      <ComparisonLinks
        entity={state}
        listForLinks={listForLinks}
        pageType={pageType}
      />
    </>
  );
}

export default GeneralInfoUSState