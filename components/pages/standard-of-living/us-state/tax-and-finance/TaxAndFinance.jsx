import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { lastYear } from "@/lib/date-and-time/dateAndTime"
import { formatPercentage } from "@/lib/format/format"
import Image from "next/image"

function TaxAndFinance({ standardInfo, stateURLCase }) {
    const state = standardInfo.state
    const incomeTaxRates = standardInfo.incomeTaxRates
    const salesTaxRates = standardInfo.salesTaxRates
    const propertyTaxRates = standardInfo.propertyTaxRates
    const corporateTaxRates = standardInfo.corporateTaxRates
    const gasAndFuelTaxRatesPerGallon = standardInfo.gasAndFuelTaxRatesPerGallon
    const beerTaxPerGallon = standardInfo.beerTaxPerGallon

    return (
      <>
        <AdsHeaderBanner />

        <div className="economic-factors-comparison">
          <h2 className="pages-h2">Tax and Finance Factors Information</h2>
        </div>
        <div className="tax-factors-comparison-div1">
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
                        src={`/images/${stateURLCase}-map-small.png`}
                        layout="fill"
                        objectFit="contain"
                        alt={`Pictorial representation of map of ${stateURLCase}`}
                      />
                    </div>

                    <div className="first-entity-name-pages-comparison">
                      {state}
                    </div>

                    <div className="first-entity-flag-pages-comparison">
                      <Image
                        src={`/images/${stateURLCase}-flag-small.png`}
                        layout="fill"
                        objectFit="contain"
                        alt={`Image illustrating the flag of ${stateURLCase}`}
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
                    <div className="income-tax-rates-text">
                      Income Tax Rates
                      <br />({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/income-tax-rates-states-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image representing Income Tax Rates of any specific country or state"
                    />
                  </div>
                </td>
                <td className="income-tax-rates-answer-first-entity all-indicator-answers">
                  {formatPercentage(incomeTaxRates)}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    <div className="sales-tax-rates-text">
                      Sales Tax Rates
                      <br />({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/sales-tax-rates-states-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image representing Sales Tax Rates of any specific country or state"
                    />
                  </div>
                </td>
                <td className="sales-tax-rates-answer-first-entity all-indicator-answers">
                  {formatPercentage(salesTaxRates)}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    <div className="property-tax-rates-text">
                      Property Tax Rates
                      <br />({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/property-tax-rates-states-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image representing Property Tax Rates of any specific country or state"
                    />
                  </div>
                </td>
                <td className="property-tax-rates-answer-first-entity all-indicator-answers">
                  {formatPercentage(propertyTaxRates)}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    <div className="corporate-tax-rates-text">
                      Corporate Tax Rates
                      <br />({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/corporate-tax-rates-states-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image representing Corporate Tax Rates of any specific country or state"
                    />
                  </div>
                </td>
                <td className="corporate-tax-rates-answer-first-entity all-indicator-answers">
                  {formatPercentage(corporateTaxRates)}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    <div className="gas-and-fuel-tax-rates-text">
                      Gas and Fuel Tax
                      <br />({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/gas-and-fuel-tax-rates-states-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image representing Gas and Fuel Tax of any specific country or state"
                    />
                  </div>
                </td>
                <td className="gas-and-fuel-tax-rates-answer-first-entity all-indicator-answers">
                  {gasAndFuelTaxRatesPerGallon
                    ? `${gasAndFuelTaxRatesPerGallon} USD Per Gallon`
                    : 'Yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    <div className="beer-tax-rates-text">
                      Beer Tax
                      <br />({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/beer-tax-rates-states-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image representing Beer Tax of any specific country or state"
                    />
                  </div>
                </td>
                <td className="beer-tax-rates-answer-first-entity all-indicator-answers">
                  {beerTaxPerGallon
                    ? `${beerTaxPerGallon} USD Per Gallon`
                    : 'Yet to Update'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
}

export default TaxAndFinance