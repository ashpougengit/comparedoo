import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { lastYear } from '@/lib/date-and-time/dateAndTime';
import Image from 'next/image';

function TaxFactors({ country1StandardInfo, country2StandardInfo, country1URLCase, country2URLCase }) {
  const country1 = country1StandardInfo.country;
  const country1GrossNationalSavings = country1StandardInfo.grossNationalSavings;
  const country1TaxRevenue = country1StandardInfo.taxRevenue;
  const country1TaxesOnExportsPercentageOfTaxRevenue = country1StandardInfo.taxesOnExportsPercentageOfTaxRevenue;
  const country1TaxesOnGoodsAndServicesPercentageOfRevenue = country1StandardInfo.taxesOnGoodsAndServicesPercentageOfRevenue;
  const country1TaxesOnInternationalTradePercentageOfRevenue = country1StandardInfo.taxesOnInternationalTradePercentageOfRevenue;
  const country1TimeToPrepareAndPayTaxesHours = country1StandardInfo.timeToPrepareAndPayTaxesHours;
  const country1CustomsAndOtherImportDutiesPercentageOfTaxRevenue = country1StandardInfo.customsAndOtherImportDutiesPercentageOfTaxRevenue;

  const country2 = country2StandardInfo.country;
  const country2GrossNationalSavings = country2StandardInfo.grossNationalSavings;
  const country2TaxRevenue = country2StandardInfo.taxRevenue;
  const country2TaxesOnExportsPercentageOfTaxRevenue = country2StandardInfo.taxesOnExportsPercentageOfTaxRevenue;
  const country2TaxesOnGoodsAndServicesPercentageOfRevenue = country2StandardInfo.taxesOnGoodsAndServicesPercentageOfRevenue;
  const country2TaxesOnInternationalTradePercentageOfRevenue = country2StandardInfo.taxesOnInternationalTradePercentageOfRevenue;
  const country2TimeToPrepareAndPayTaxesHours = country2StandardInfo.timeToPrepareAndPayTaxesHours;
  const country2CustomsAndOtherImportDutiesPercentageOfTaxRevenue = country2StandardInfo.customsAndOtherImportDutiesPercentageOfTaxRevenue;

  const taxTimes =
    country1TaxesOnInternationalTradePercentageOfRevenue >
      country2TaxesOnInternationalTradePercentageOfRevenue
      ? (
        country1TaxesOnInternationalTradePercentageOfRevenue /
        country2TaxesOnInternationalTradePercentageOfRevenue
      ).toFixed(2)
      : (
        country2TaxesOnInternationalTradePercentageOfRevenue /
        country1TaxesOnInternationalTradePercentageOfRevenue
      ).toFixed(2);
  const moreOrLess =
    country1TaxesOnInternationalTradePercentageOfRevenue >
      country2TaxesOnInternationalTradePercentageOfRevenue
      ? 'more'
      : 'less';

  return (
    <>
      <AdsHeaderBanner />

      <div className="economic-factors-comparison">
        <h2 className="pages-h2">Tax Factors Comparison</h2>
      </div>
      <div className="tax-factors-comparison-div1">
        <table className="indicators-first-entity-and-second-entity-div1">
          <thead>
            <tr className="first-tr">
              <th>
                <div className="heading-map-name-flag">
                  <div className="right-indicator">
                    <Image
                      src="/images/indicators-right-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image representing an indicator"
                    />
                  </div>

                  <div className="indicator-text">Indicators</div>

                  <div className="left-indicator">
                    <Image
                      src="/images/indicators-left-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image illustrating an indicator"
                    />
                  </div>
                </div>
              </th>

              <th>
                <div className="heading-map-name-flag">
                  <div className="first-entity-map-pages-comparison">
                    <Image
                      src={`/images/${country1URLCase}-map-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Pictorial representation of map of ${country1URLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {country1}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${country1URLCase}-flag-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Image illustrating the flag of ${country1URLCase}`}
                    />
                  </div>
                </div>
              </th>

              <th>
                <div className="heading-map-name-flag">
                  <div className="second-entity-map-pages-comparison">
                    <Image
                      src={`/images/${country2URLCase}-map-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Pictorial representation of map of ${country2URLCase}`}
                    />
                  </div>

                  <div className="second-entity-name-pages-comparison">
                    {' '}
                    {country2}{' '}
                  </div>

                  <div className="second-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${country2URLCase}-flag-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Image illustrating the flag of ${country2URLCase}`}
                    />
                  </div>
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="gross-national-savings-text">
                    Gross National Savings <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/gross-national-savings-image.png"
                    fill
                    alt="Image representing the total Gross National Savings of any specific country"
                  />
                </div>
              </td>
              <td className="gross-national-savings-answer-first-entity all-indicator-answers">
                {country1GrossNationalSavings ? (
                  <>
                    {country1GrossNationalSavings} <span>% of GDP</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="gross-national-savings-answer-second-entity all-indicator-answers">
                {country2GrossNationalSavings ? (
                  <>
                    {country2GrossNationalSavings} <span>% of GDP</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="tax-revenue-text">
                    Tax Revenue <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/tax-revenue-image.png"
                    fill
                    alt="Image representing the total tax revenue collection of any specific country"
                  />
                </div>
              </td>
              <td className="tax-revenue-answer-first-entity all-indicator-answers">
                {country1TaxRevenue ? (
                  <>
                    {country1TaxRevenue} <span>% of GDP</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="tax-revenue-answer-second-entity all-indicator-answers">
                {country2TaxRevenue ? (
                  <>
                    {country2TaxRevenue} <span>% of GDP</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="taxes-on-exports-text">
                    Taxes on Exports <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/taxes-on-exports-image.png"
                    fill
                    alt="Image representing Taxes on Exports"
                  />
                </div>
              </td>
              <td className="taxes-on-exports-answer-first-entity all-indicator-answers">
                {country1TaxesOnExportsPercentageOfTaxRevenue ? (
                  <>
                    {country1TaxesOnExportsPercentageOfTaxRevenue}{' '}
                    <span>% of Tax Revenue</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="taxes-on-exports-answer-second-entity all-indicator-answers">
                {country2TaxesOnExportsPercentageOfTaxRevenue ? (
                  <>
                    {country2TaxesOnExportsPercentageOfTaxRevenue}{' '}
                    <span>% of Tax Revenue</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="taxes-on-goods-and-services-text">
                    Taxes on Goods and Services <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/taxes-on-goods-and-services-image.png"
                    fill
                    alt="Image representing Taxes on Goods and Services"
                  />
                </div>
              </td>
              <td className="taxes-on-goods-and-services-answer-first-entity all-indicator-answers">
                {country1TaxesOnGoodsAndServicesPercentageOfRevenue ? (
                  <>
                    {country1TaxesOnGoodsAndServicesPercentageOfRevenue}{' '}
                    <span>% of Tax Revenue</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="taxes-on-goods-and-services-answer-second-entity all-indicator-answers">
                {country2TaxesOnGoodsAndServicesPercentageOfRevenue ? (
                  <>
                    {country2TaxesOnGoodsAndServicesPercentageOfRevenue}{' '}
                    <span>% of Tax Revenue</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="taxes-on-international-trade-text">
                    Taxes on International Trade <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/taxes-on-international-trade-image.png"
                    fill
                    alt="Image representing Taxes on International Trade"
                  />
                </div>
              </td>
              <td className="taxes-on-international-trade-answer-first-entity all-indicator-answers">
                {country1TaxesOnInternationalTradePercentageOfRevenue ? (
                  <>
                    {country1TaxesOnInternationalTradePercentageOfRevenue}{' '}
                    <span>% of Revenue</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="taxes-on-international-trade-answer-second-entity all-indicator-answers">
                {country2TaxesOnInternationalTradePercentageOfRevenue ? (
                  <>
                    {country2TaxesOnInternationalTradePercentageOfRevenue}{' '}
                    <span>% of Revenue</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="time-to-prepare-and-pay-taxes-text">
                    Time to Prepare and Pay Taxes ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/time-to-prepare-and-pay-taxes-image.png"
                    fill
                    alt="Image representing Time to Prepare and Pay Taxes"
                  />
                </div>
              </td>
              <td className="time-to-prepare-and-pay-taxes-answer-first-entity all-indicator-answers">
                {country1TimeToPrepareAndPayTaxesHours ? (
                  <>
                    {country1TimeToPrepareAndPayTaxesHours}{' '}
                    <span>
                      {' '}
                      {`${country1TimeToPrepareAndPayTaxesHours > 1
                        ? 'Hours'
                        : 'Hour'
                        }`}
                    </span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="time-to-prepare-and-pay-taxes-answer-second-entity all-indicator-answers">
                {country2TimeToPrepareAndPayTaxesHours ? (
                  <>
                    {country2TimeToPrepareAndPayTaxesHours}{' '}
                    <span>
                      {' '}
                      {`${country2TimeToPrepareAndPayTaxesHours > 1
                        ? 'Hours'
                        : 'Hour'
                        }`}
                    </span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="customs-and-other-import-duties-text">
                    Customs and Other Import Duties ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/customs-and-other-import-duties-image.png"
                    fill
                    alt="Image representing Customs and Other Import Duties"
                  />
                </div>
              </td>
              <td className="customs-and-other-import-duties-answer-first-entity all-indicator-answers">
                {country1CustomsAndOtherImportDutiesPercentageOfTaxRevenue ? (
                  <>
                    {
                      country1CustomsAndOtherImportDutiesPercentageOfTaxRevenue
                    }{' '}
                    <span>% of Tax Revenue</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="customs-and-other-import-duties-answer-second-entity all-indicator-answers">
                {country2CustomsAndOtherImportDutiesPercentageOfTaxRevenue ? (
                  <>
                    {
                      country2CustomsAndOtherImportDutiesPercentageOfTaxRevenue
                    }{' '}
                    <span>% of Tax Revenue</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {country1TaxesOnInternationalTradePercentageOfRevenue && country2TaxesOnInternationalTradePercentageOfRevenue &&
        <div className="paragraph-for-pages-below-table">
          <div className="para-for-pages-single-div">
            <p>
              The taxes charged by{' '}
              <span className="first-entity-name-pages-paragraph">
                {' '}
                {country1}{' '}
              </span>{' '}
              on international trade is
              <strong>
                <span className="taxes-on-international-trade-answer-first-entity">
                  {' '}
                  {country1TaxesOnInternationalTradePercentageOfRevenue}%{' '}
                </span>{' '}
                of the total revenue
              </strong>{' '}
              and the taxes charged by
              <span className="second-entity-name-pages-paragraph">
                {' '}
                {country2}{' '}
              </span>{' '}
              on international trade is
              <strong>
                <span className="taxes-on-international-trade-answer-first-entity">
                  {' '}
                  {country2TaxesOnInternationalTradePercentageOfRevenue}%{' '}
                </span>{' '}
                of the total revenue.
              </strong>
            </p>


            <p>
              The Taxes charged on International Trade by{' '}
              <span className="first-entity-name-pages-paragraph">
                {' '}
                {country1}{' '}
              </span>{' '}
              is
              <strong>
                <span className="taxes-on-international-trade-calculation">
                  {' '}
                  {taxTimes}{' '}
                </span>{' '}
                times{' '}
              </strong>{' '}
              <span className="taxes-on-international-trade-more-less-calculation">
                {' '}
                {moreOrLess}{' '}
              </span>{' '}
              of its total revenue than of
              <span className="second-entity-name-pages-paragraph">
                {' '}
                {country2}
              </span>
              .
            </p>
          </div>
        </div>
      }
    </>
  );
}

export default TaxFactors;
