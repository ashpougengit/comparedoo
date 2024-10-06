import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { lastYear } from "@/lib/date-and-time/dateAndTime";
import { formatNumberWithCommas } from "@/lib/format/format";
import Image from "next/image";

function ImportsAndExports({ standardInfo, countryURLCase }) {
  const country = standardInfo.country;
  const importsOfGoodsAndServicesPercentageOfGDP = standardInfo.importsOfGoodsAndServicesPercentageOfGDP;
  const fuelImportsPercentageOfMerchandiseImports = standardInfo.fuelImportsPercentageOfMerchandiseImports;
  const costToImportBorderComplianceUSD = standardInfo.costToImportBorderComplianceUSD;
  const timeToImportBorderComplianceHours = standardInfo.timeToImportBorderComplianceHours;
  const costToImportDocumentryComplianceUSD = standardInfo.costToImportDocumentryComplianceUSD;
  const timeToImportDocumentryComplianceHours = standardInfo.timeToImportDocumentryComplianceHours;
  const exportsOfGoodsAndServicesPercentageOfGDP = standardInfo.exportsOfGoodsAndServicesPercentageOfGDP;
  const fuelExportsPercentageOfMerchandiseExports = standardInfo.fuelExportsPercentageOfMerchandiseExports;
  const costToExportBorderComplianceUSD = standardInfo.costToExportBorderComplianceUSD;
  const timeToExportBorderComplianceHours = standardInfo.timeToExportBorderComplianceHours;
  const costToExportDocumentryComplianceUSD = standardInfo.costToExportDocumentryComplianceUSD;
  const timeToExportDocumentryComplianceHours = standardInfo.timeToExportDocumentryComplianceHours;

  return (
    <>
      <AdsHeaderBanner />

      <div className="economic-factors-comparison">
        <h2 className="pages-h2">Import & Export Factors Information</h2>
      </div>
      <div className="import-export-factors-comparison-div1">
        <table className="indicators-single-country-divs">
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
                      src={`/images/${countryURLCase}-map-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Pictorial representation of map of ${countryURLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {country}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${countryURLCase}-flag-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Image illustrating the flag of ${countryURLCase}`}
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
                {importsOfGoodsAndServicesPercentageOfGDP
                  ? `${importsOfGoodsAndServicesPercentageOfGDP}% of
                                GDP`
                  : 'Yet to Update'}
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
                {fuelImportsPercentageOfMerchandiseImports
                  ? `${fuelImportsPercentageOfMerchandiseImports}% of Merchandise
                                Imports`
                  : 'Yet to Update'}
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
                {costToImportBorderComplianceUSD
                  ? `${formatNumberWithCommas(
                    costToImportBorderComplianceUSD
                  )} USD`
                  : 'Yet to Update'}
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
                {timeToImportBorderComplianceHours
                  ? `${timeToImportBorderComplianceHours} ${timeToImportBorderComplianceHours > 1 ? 'Hours' : 'Hour'
                  }`
                  : 'Yet to Update'}
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
                {costToImportDocumentryComplianceUSD
                  ? `${formatNumberWithCommas(
                    costToImportDocumentryComplianceUSD
                  )} USD`
                  : 'Yet to Update'}
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
                {timeToImportDocumentryComplianceHours
                  ? `${timeToImportDocumentryComplianceHours} ${timeToImportDocumentryComplianceHours > 1
                    ? 'Hours'
                    : 'Hour'
                  }`
                  : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="import-export-factors-comparison-div2">
        <table className="indicators-single-country-divs">
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
                      src={`/images/${countryURLCase}-map-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Pictorial representation of map of ${countryURLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {country}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${countryURLCase}-flag-small.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={`Image illustrating the flag of ${countryURLCase}`}
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
                {exportsOfGoodsAndServicesPercentageOfGDP
                  ? `${exportsOfGoodsAndServicesPercentageOfGDP}% of
                                GDP`
                  : 'Yet to Update'}
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
                {fuelExportsPercentageOfMerchandiseExports
                  ? `${fuelExportsPercentageOfMerchandiseExports}% of Merchandise
                                Exports`
                  : 'Yet to Update'}
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
                {costToExportBorderComplianceUSD
                  ? `${formatNumberWithCommas(
                    costToExportBorderComplianceUSD
                  )} USD`
                  : 'Yet to Update'}
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
                {timeToExportBorderComplianceHours
                  ? `${timeToExportBorderComplianceHours} ${timeToExportBorderComplianceHours > 1 ? 'Hours' : 'Hour'
                  }`
                  : 'Yet to Update'}
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
                {costToExportDocumentryComplianceUSD
                  ? `${formatNumberWithCommas(
                    costToExportDocumentryComplianceUSD
                  )} USD`
                  : 'Yet to Update'}
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
                {timeToExportDocumentryComplianceHours
                  ? `${timeToExportDocumentryComplianceHours} ${timeToExportDocumentryComplianceHours > 1
                    ? 'Hours'
                    : 'Hour'
                  }`
                  : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ImportsAndExports