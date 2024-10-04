import ThreeTabs from '@/components/three-tabs/ThreeTabs';
import TopDescription from './top-description/TopDescription';
import BasicUtilities from './basic-utilities/BasicUtilities';
import Housing from './housing/Housing';
import NetworkAndCommunication from './network-and-communication/NetworkAndCommunication';
import Groceries from './groceries/Groceries';
import FruitsAndVegetables from './fruits-and-vegetables/FruitsAndVegetables';
import DiningOut from './dining-out/DiningOut';
import Drinks from './drinks/Drinks';
import Transportation from './transportation/Transportation';
import Vehicle from './vehicle/Vehicle';
import Health from './health/Health';
import PersonalCare from './personal-care/PersonalCare';
import Clothing from './clothing/Clothing';
import Childcare from './childcare/Childcare';
import Education from './education/Education';
import Entertainment from './entertainment/Entertainment';
import PrivateClasses from './private-classes/PrivateClasses';
import WagesAndTaxes from './wages-and-taxes/WagesAndTaxes';
import ProfessionalServices from './professional-services/ProfessionalServices';
import LastParagraph from './last-paragraph/LastParagraph';
import ComparisonLinks from '@/components/comparison-links/ComparisonLinks';
import { toURLFormat } from '@/lib/format/format';

function CostOfLivingCountry({
  costInfo,
  currencyInfo,
  propertyAndIncomeTaxInfo,
  listForLinks,
}) {
  const country = costInfo.country;
  const countryURLCase = toURLFormat(country);

  const currency = currencyInfo.currencySymbol;
  const unitValueInUSD = currencyInfo.unitValueInUSD;

  const pageType = 'cost-of-living';

  return (
    <>
      <ThreeTabs entity1={country} />

      <TopDescription country={country} />

      <Housing
        countryURLCase={countryURLCase}
        costInfo={costInfo}
        currency={currency}
        propertyAndIncomeTaxInfo={propertyAndIncomeTaxInfo}
        unitValueInUSD={unitValueInUSD}
      />

      <BasicUtilities
        countryURLCase={countryURLCase}
        costInfo={costInfo}
        currency={currency}
        unitValueInUSD={unitValueInUSD}
      />

      <NetworkAndCommunication
        countryURLCase={countryURLCase}
        costInfo={costInfo}
        currency={currency}
        unitValueInUSD={unitValueInUSD}
      />

      <Groceries
        countryURLCase={countryURLCase}
        costInfo={costInfo}
        currency={currency}
        unitValueInUSD={unitValueInUSD}
      />

      <FruitsAndVegetables
        countryURLCase={countryURLCase}
        costInfo={costInfo}
        currency={currency}
        unitValueInUSD={unitValueInUSD}
      />

      <DiningOut
        countryURLCase={countryURLCase}
        costInfo={costInfo}
        currency={currency}
        unitValueInUSD={unitValueInUSD}
      />

      <Drinks
        countryURLCase={countryURLCase}
        costInfo={costInfo}
        currency={currency}
        unitValueInUSD={unitValueInUSD}
      />

      <Transportation
        countryURLCase={countryURLCase}
        costInfo={costInfo}
        currency={currency}
        unitValueInUSD={unitValueInUSD}
      />

      <Vehicle
        countryURLCase={countryURLCase}
        costInfo={costInfo}
        currency={currency}
        unitValueInUSD={unitValueInUSD}
      />

      <Health
        countryURLCase={countryURLCase}
        costInfo={costInfo}
        currency={currency}
        unitValueInUSD={unitValueInUSD}
      />

      <PersonalCare
        countryURLCase={countryURLCase}
        costInfo={costInfo}
        currency={currency}
        unitValueInUSD={unitValueInUSD}
      />

      <Clothing
        countryURLCase={countryURLCase}
        costInfo={costInfo}
        currency={currency}
        unitValueInUSD={unitValueInUSD}
      />

      <Childcare
        countryURLCase={countryURLCase}
        costInfo={costInfo}
        currency={currency}
        unitValueInUSD={unitValueInUSD}
      />

      <Education
        countryURLCase={countryURLCase}
        costInfo={costInfo}
        currency={currency}
        unitValueInUSD={unitValueInUSD}
      />

      <Entertainment
        countryURLCase={countryURLCase}
        costInfo={costInfo}
        currency={currency}
        unitValueInUSD={unitValueInUSD}
      />

      <PrivateClasses
        countryURLCase={countryURLCase}
        costInfo={costInfo}
        currency={currency}
        unitValueInUSD={unitValueInUSD}
      />

      <WagesAndTaxes
        countryURLCase={countryURLCase}
        costInfo={costInfo}
        currency={currency}
        unitValueInUSD={unitValueInUSD}
        propertyAndIncomeTaxInfo={propertyAndIncomeTaxInfo}
      />

      <ProfessionalServices
        countryURLCase={countryURLCase}
        costInfo={costInfo}
        currency={currency}
        unitValueInUSD={unitValueInUSD}
      />

      <LastParagraph country={country} />

      <ComparisonLinks
        entity={country}
        listForLinks={listForLinks}
        pageType={pageType}
      />
    </>
  );
}

export default CostOfLivingCountry;
