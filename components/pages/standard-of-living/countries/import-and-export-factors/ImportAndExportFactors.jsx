import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { lastYear } from '@/lib/date-and-time/dateAndTime';
import { numberWithCommas } from '@/lib/format/format';
import Image from 'next/image';

function ImportAndExportFactors({ country1StandardInfo, country2StandardInfo, country1URLCase, country2URLCase
}) {
  const country1 = country1StandardInfo.country;
  const country1ImportsOfGoodsAndServicesPercentageOfGDP =
    country1StandardInfo.importsOfGoodsAndServicesPercentageOfGDP;
  const country1FuelImportsPercentageOfMerchandiseImports =
    country1StandardInfo.fuelImportsPercentageOfMerchandiseImports;
  const country1CostToImportBorderComplianceUSD =
    country1StandardInfo.costToImportBorderComplianceUSD;
  const country1TimeToImportBorderComplianceHours =
    country1StandardInfo.timeToImportBorderComplianceHours;
  const country1CostToImportDocumentryComplianceUSD =
    country1StandardInfo.costToImportDocumentryComplianceUSD;
  const country1TimeToImportDocumentryComplianceHours =
    country1StandardInfo.timeToImportDocumentryComplianceHours;
  const country1ExportsOfGoodsAndServicesPercentageOfGDP =
    country1StandardInfo.exportsOfGoodsAndServicesPercentageOfGDP;
  const country1FuelexportsPercentageOfMerchandiseImports =
    country1StandardInfo.fuelExportsPercentageOfMerchandiseExports;
  const country1CostToExportBorderComplianceUSD =
    country1StandardInfo.costToExportBorderComplianceUSD;
  const country1TimeToExportBorderComplianceHours =
    country1StandardInfo.timeToExportBorderComplianceHours;
  const country1CostToExportDocumentryComplianceUSD =
    country1StandardInfo.costToExportDocumentryComplianceUSD;
  const country1TimeToExportDocumentryComplianceHours =
    country1StandardInfo.timeToExportDocumentryComplianceHours;

  const country2 = country2StandardInfo.country;
  const country2ImportsOfGoodsAndServicesPercentageOfGDP =
    country2StandardInfo.importsOfGoodsAndServicesPercentageOfGDP;
  const country2FuelImportsPercentageOfMerchandiseImports =
    country2StandardInfo.fuelImportsPercentageOfMerchandiseImports;
  const country2CostToImportBorderComplianceUSD =
    country2StandardInfo.costToImportBorderComplianceUSD;
  const country2TimeToImportBorderComplianceHours =
    country2StandardInfo.timeToImportBorderComplianceHours;
  const country2CostToImportDocumentryComplianceUSD =
    country2StandardInfo.costToImportDocumentryComplianceUSD;
  const country2TimeToImportDocumentryComplianceHours =
    country2StandardInfo.timeToImportDocumentryComplianceHours;
  const country2ExportsOfGoodsAndServicesPercentageOfGDP =
    country2StandardInfo.exportsOfGoodsAndServicesPercentageOfGDP;
  const country2FuelexportsPercentageOfMerchandiseImports =
    country2StandardInfo.fuelExportsPercentageOfMerchandiseExports;
  const country2CostToExportBorderComplianceUSD =
    country2StandardInfo.costToExportBorderComplianceUSD;
  const country2TimeToExportBorderComplianceHours =
    country2StandardInfo.timeToExportBorderComplianceHours;
  const country2CostToExportDocumentryComplianceUSD =
    country2StandardInfo.costToExportDocumentryComplianceUSD;
  const country2TimeToExportDocumentryComplianceHours =
    country2StandardInfo.timeToExportDocumentryComplianceHours;

  return (
    <>
      <AdsHeaderBanner />

      <div className="economic-factors-comparison">
        <h2 className="pages-h2">Import & Export Factors Comparison</h2>
      </div>
      <div className="import-export-factors-comparison-div1">
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
                  <div className="imports-of-goods-and-services-text">
                    Imports of Goods and Services ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/imports-of-goods-and-services-image.png"
                    fill
                    alt="Image representing Imports of Goods and Services"
                  />
                </div>
              </td>
              <td className="imports-of-goods-and-services-answer-first-entity all-indicator-answers">
                {country1ImportsOfGoodsAndServicesPercentageOfGDP ? (
                  <>
                    {country1ImportsOfGoodsAndServicesPercentageOfGDP}{' '}
                    <span>% of GDP</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="imports-of-goods-and-services-answer-second-entity all-indicator-answers">
                {country2ImportsOfGoodsAndServicesPercentageOfGDP ? (
                  <>
                    {country2ImportsOfGoodsAndServicesPercentageOfGDP}{' '}
                    <span>% of GDP</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="fuel-imports-text">
                    Total Fuel Imports <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/fuel-imports-image.png"
                    fill
                    alt="Image representing Total Fuel Imports"
                  />
                </div>
              </td>
              <td className="fuel-imports-answer-first-entity all-indicator-answers">
                {country1FuelImportsPercentageOfMerchandiseImports ? (
                  <>
                    {country1FuelImportsPercentageOfMerchandiseImports}{' '}
                    <span>% of Merchandise Imports</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="fuel-imports-answer-second-entity all-indicator-answers">
                {country2FuelImportsPercentageOfMerchandiseImports ? (
                  <>
                    {country2FuelImportsPercentageOfMerchandiseImports}{' '}
                    <span>% of Merchandise Imports</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="cost-to-import-border-compliance-text">
                    Cost to Import Border Compliance ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/cost-to-import-border-compliance-image.png"
                    fill
                    alt="Image representing Cost to Import Border Compliance"
                  />
                </div>
              </td>
              <td className="cost-to-import-border-compliance-answer-first-entity all-indicator-answers">
                {country1CostToImportBorderComplianceUSD ? (
                  <>
                    {numberWithCommas(country1CostToImportBorderComplianceUSD)}{' '}
                    <span> USD </span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="cost-to-import-border-compliance-answer-second-entity all-indicator-answers">
                {country2CostToImportBorderComplianceUSD ? (
                  <>
                    {numberWithCommas(country2CostToImportBorderComplianceUSD)}{' '}
                    <span> USD </span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="time-to-import-border-compliance-text">
                    Time to Import Border Compliance ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/time-to-import-border-compliance-image.png"
                    fill
                    alt="Image representing Time to Import Border Compliance"
                  />
                </div>
              </td>
              <td className="time-to-import-border-compliance-answer-first-entity all-indicator-answers">
                {country1TimeToImportBorderComplianceHours ? (
                  <>
                    {country1TimeToImportBorderComplianceHours}{' '}
                    <span>
                      {' '}
                      {`${country1TimeToImportBorderComplianceHours > 1
                          ? 'Hours'
                          : 'Hour'
                        }`}
                    </span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="time-to-import-border-compliance-answer-second-entity all-indicator-answers">
                {country2TimeToImportBorderComplianceHours ? (
                  <>
                    {country2TimeToImportBorderComplianceHours}{' '}
                    <span>
                      {' '}
                      {`${country2TimeToImportBorderComplianceHours > 1
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
                  <div className="cost-to-import-documentary-compliance-text">
                    Cost to Import Documentary Compliance ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/cost-to-import-documentary-compliance-image.png"
                    fill
                    alt="Image representing Cost to Import documentary Compliance"
                  />
                </div>
              </td>
              <td className="cost-to-import-documentary-compliance-answer-first-entity all-indicator-answers">
                {country1CostToImportDocumentryComplianceUSD ? (
                  <>
                    {numberWithCommas(
                      country1CostToImportDocumentryComplianceUSD
                    )}{' '}
                    <span> USD </span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="cost-to-import-documentary-compliance-answer-second-entity all-indicator-answers">
                {country2CostToImportDocumentryComplianceUSD ? (
                  <>
                    {numberWithCommas(
                      country2CostToImportDocumentryComplianceUSD
                    )}{' '}
                    <span> USD </span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="time-to-import-documentary-compliance-text">
                    Time to Import Documentary Compliance ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/time-to-import-documentary-compliance-image.png"
                    fill
                    alt="Image representing Time to Import Documentary Compliance"
                  />
                </div>
              </td>
              <td className="time-to-import-documentary-compliance-answer-first-entity all-indicator-answers">
                {country1TimeToImportDocumentryComplianceHours ? (
                  <>
                    {country1TimeToImportDocumentryComplianceHours}{' '}
                    <span>
                      {' '}
                      {`${country1TimeToImportDocumentryComplianceHours > 1
                          ? 'Hours'
                          : 'Hour'
                        }`}
                    </span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="time-to-import-documentary-compliance-answer-second-entity all-indicator-answers">
                {country2TimeToImportDocumentryComplianceHours ? (
                  <>
                    {country2TimeToImportDocumentryComplianceHours}{' '}
                    <span>
                      {' '}
                      {`${country2TimeToImportDocumentryComplianceHours > 1
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
          </tbody>
        </table>
      </div>

      <div className="import-export-factors-comparison-div2">
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
                  <div className="exports-of-goods-and-services-text">
                    Exports of Goods and Services ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/exports-of-goods-and-services-image.png"
                    fill
                    alt="Image representing Exports of Goods and Services"
                  />
                </div>
              </td>
              <td className="exports-of-goods-and-services-answer-first-entity all-indicator-answers">
                {country1ExportsOfGoodsAndServicesPercentageOfGDP ? (
                  <>
                    {country1ExportsOfGoodsAndServicesPercentageOfGDP}{' '}
                    <span>% of GDP</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="exports-of-goods-and-services-answer-second-entity all-indicator-answers">
                {country2ExportsOfGoodsAndServicesPercentageOfGDP ? (
                  <>
                    {country2ExportsOfGoodsAndServicesPercentageOfGDP}{' '}
                    <span>% of GDP</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="fuel-exports-text">
                    Total Fuel Exports <br /> ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/fuel-exports-image.png"
                    fill
                    alt="Image representing Total Fuel Exports"
                  />
                </div>
              </td>
              <td className="fuel-exports-answer-first-entity all-indicator-answers">
                {country1FuelexportsPercentageOfMerchandiseImports ? (
                  <>
                    {country1FuelexportsPercentageOfMerchandiseImports}{' '}
                    <span>% of Merchandise Exports</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="fuel-exports-answer-second-entity all-indicator-answers">
                {country2FuelexportsPercentageOfMerchandiseImports ? (
                  <>
                    {country2FuelexportsPercentageOfMerchandiseImports}{' '}
                    <span>% of Merchandise Exports</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="cost-to-export-border-compliance-text">
                    Cost to Export Border Compliance ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/cost-to-export-border-compliance-image.png"
                    fill
                    alt="Image representing Cost to Export Border Compliance"
                  />
                </div>
              </td>
              <td className="cost-to-export-border-compliance-answer-first-entity all-indicator-answers">
                {country1CostToExportBorderComplianceUSD ? (
                  <>
                    {numberWithCommas(country1CostToExportBorderComplianceUSD)}{' '}
                    <span> USD</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="cost-to-export-border-compliance-answer-second-entity all-indicator-answers">
                {country2CostToExportBorderComplianceUSD ? (
                  <>
                    {numberWithCommas(country2CostToExportBorderComplianceUSD)}{' '}
                    <span> USD</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="time-to-export-border-compliance-text">
                    Time to Export Border Compliance ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/time-to-export-border-compliance-image.png"
                    fill
                    alt="Image representing Time to Export Border Compliance"
                  />
                </div>
              </td>
              <td className="time-to-export-border-compliance-answer-first-entity all-indicator-answers">
                {country1TimeToExportBorderComplianceHours ? (
                  <>
                    {country1TimeToExportBorderComplianceHours}{' '}
                    <span>
                      {' '}
                      {`${country1TimeToExportBorderComplianceHours > 1
                          ? 'Hours'
                          : 'Hour'
                        }`}
                    </span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="time-to-export-border-compliance-answer-second-entity all-indicator-answers">
                {country2TimeToExportBorderComplianceHours ? (
                  <>
                    {country2TimeToExportBorderComplianceHours}{' '}
                    <span>
                      {' '}
                      {`${country2TimeToExportBorderComplianceHours > 1
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
                  <div className="cost-to-export-documentary-compliance-text">
                    Cost to Export Documentary Compliance ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/cost-to-export-documentary-compliance-image.png"
                    fill
                    alt="Image representing Cost to Export documentary Compliance"
                  />
                </div>
              </td>
              <td className="cost-to-export-documentary-compliance-answer-first-entity all-indicator-answers">
                {country1CostToExportDocumentryComplianceUSD ? (
                  <>
                    {numberWithCommas(
                      country1CostToExportDocumentryComplianceUSD
                    )}{' '}
                    <span> USD</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="cost-to-export-documentary-compliance-answer-second-entity all-indicator-answers">
                {country2CostToExportDocumentryComplianceUSD ? (
                  <>
                    {numberWithCommas(
                      country2CostToExportDocumentryComplianceUSD
                    )}{' '}
                    <span> USD</span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  <div className="time-to-export-documentary-compliance-text">
                    Time to Export Documentary Compliance ({lastYear})
                  </div>
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/time-to-export-documentary-compliance-image.png"
                    fill
                    alt="Image representing Time to Export Documentary Compliance"
                  />
                </div>
              </td>
              <td className="time-to-export-documentary-compliance-answer-first-entity all-indicator-answers">
                {country1TimeToExportDocumentryComplianceHours ? (
                  <>
                    {country1TimeToExportDocumentryComplianceHours}{' '}
                    <span>
                      {' '}
                      {`${country1TimeToExportDocumentryComplianceHours > 1
                          ? 'Hours'
                          : 'Hour'
                        }`}
                    </span>
                  </>
                ) : (
                  'Yet to Update'
                )}
              </td>
              <td className="time-to-export-documentary-compliance-answer-second-entity all-indicator-answers">
                {country2TimeToExportDocumentryComplianceHours ? (
                  <>
                    {country2TimeToExportDocumentryComplianceHours}{' '}
                    <span>
                      {' '}
                      {`${country2TimeToExportDocumentryComplianceHours > 1
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
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ImportAndExportFactors;
