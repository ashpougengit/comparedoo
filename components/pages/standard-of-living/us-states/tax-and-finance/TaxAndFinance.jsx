import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { lastYear } from "@/lib/date-and-time/dateAndTime"
import { formatPercentage } from "@/lib/format/format"
import Image from "next/image"

function TaxAndFinance({ state1StandardInfo, state2StandardInfo, state1URLCase, state2URLCase }) {
  const state1 = state1StandardInfo.state
  const state1IncomeTaxRates = state1StandardInfo.incomeTaxRates
  const state1SalesTaxRates = state1StandardInfo.salesTaxRates
  const state1PropertyTaxRates = state1StandardInfo.propertyTaxRates
  const state1CorporateTaxRates = state1StandardInfo.corporateTaxRates
  const state1GasAndFuelTaxRatesPerGallon = state1StandardInfo.gasAndFuelTaxRatesPerGallon
  const state1BeerTaxPerGallon = state1StandardInfo.beerTaxPerGallon

  const state2 = state2StandardInfo.state
  const state2IncomeTaxRates = state2StandardInfo.incomeTaxRates
  const state2SalesTaxRates = state2StandardInfo.salesTaxRates
  const state2PropertyTaxRates = state2StandardInfo.propertyTaxRates
  const state2CorporateTaxRates = state2StandardInfo.corporateTaxRates
  const state2GasAndFuelTaxRatesPerGallon = state2StandardInfo.gasAndFuelTaxRatesPerGallon
  const state2BeerTaxPerGallon = state2StandardInfo.beerTaxPerGallon

  return (
    <>
      <AdsHeaderBanner />

      <div className="economic-factors-comparison">
        <h2 className="pages-h2">Tax and Finance Factors Comparison</h2>
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
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                      alt="Image representing an indicator"
                    />
                  </div>
                  <div className="indicator-text">Indicators</div>
                  <div className="left-indicator">
                    <Image
                      src="/images/indicators-left-image.png"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                      alt="Image illustrating an indicator"
                    />
                  </div>
                </div>
              </th>

              <th>
                <div className="heading-map-name-flag">
                  <div className="first-entity-map-pages-comparison">
                    <Image
                      src={`/images/${state1URLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                      alt={`Pictorial representation of map of ${state1URLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {state1}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${state1URLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                      alt={`Image illustrating the flag of ${state1URLCase}`}
                    />
                  </div>
                </div>
              </th>

              <th>
                <div className="heading-map-name-flag">
                  <div className="second-entity-map-pages-comparison">
                    <Image
                      src={`/images/${state2URLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                      alt={`Pictorial representation of map of ${state2URLCase}`}
                    />
                  </div>

                  <div className="second-entity-name-pages-comparison">
                    {' '}
                    {state2}{' '}
                  </div>

                  <div className="second-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${state2URLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                      alt={`Image illustrating the flag of ${state2URLCase}`}
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
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image representing Income Tax Rates of any specific country or state"
                  />
                </div>
              </td>
              <td className="income-tax-rates-answer-first-entity all-indicator-answers">
                {formatPercentage(state1IncomeTaxRates)}
              </td>
              <td className="income-tax-rates-answer-second-entity all-indicator-answers">
                {formatPercentage(state2IncomeTaxRates)}
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
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image representing Sales Tax Rates of any specific country or state"
                  />
                </div>
              </td>
              <td className="sales-tax-rates-answer-first-entity all-indicator-answers">
                {formatPercentage(state1SalesTaxRates)}
              </td>
              <td className="sales-tax-rates-answer-second-entity all-indicator-answers">
                {formatPercentage(state2SalesTaxRates)}
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
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image representing Property Tax Rates of any specific country or state"
                  />
                </div>
              </td>
              <td className="property-tax-rates-answer-first-entity all-indicator-answers">
                {formatPercentage(state1PropertyTaxRates)}
              </td>
              <td className="property-tax-rates-answer-second-entity all-indicator-answers">
                {formatPercentage(state2PropertyTaxRates)}
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
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image representing Corporate Tax Rates of any specific country or state"
                  />
                </div>
              </td>
              <td className="corporate-tax-rates-answer-first-entity all-indicator-answers">
                {formatPercentage(state1CorporateTaxRates)}
              </td>
              <td className="corporate-tax-rates-answer-second-entity all-indicator-answers">
                {formatPercentage(state2CorporateTaxRates)}
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
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image representing Gas and Fuel Tax of any specific country or state"
                  />
                </div>
              </td>
              <td className="gas-and-fuel-tax-rates-answer-first-entity all-indicator-answers">
                {state1GasAndFuelTaxRatesPerGallon
                  ? `${state1GasAndFuelTaxRatesPerGallon} USD Per Gallon`
                  : 'Yet to Update'}
              </td>
              <td className="gas-and-fuel-tax-rates-answer-second-entity all-indicator-answers">
                {state2GasAndFuelTaxRatesPerGallon
                  ? `${state2GasAndFuelTaxRatesPerGallon} USD Per Gallon`
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
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image representing Beer Tax of any specific country or state"
                  />
                </div>
              </td>
              <td className="beer-tax-rates-answer-first-entity all-indicator-answers">
                {state1BeerTaxPerGallon
                  ? `${state1BeerTaxPerGallon} USD Per Gallon`
                  : 'Yet to Update'}
              </td>
              <td className="beer-tax-rates-answer-second-entity all-indicator-answers">
                {state2BeerTaxPerGallon
                  ? `${state2BeerTaxPerGallon} USD Per Gallon`
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