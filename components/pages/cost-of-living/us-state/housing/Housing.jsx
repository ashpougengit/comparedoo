import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { formatNumberWithCommas } from "@/lib/format/format"
import Image from "next/image"

function Housing({ costInfo, propertyAndIncomeTaxInfo, stateLowerCase }) {
    const state = costInfo.state
    const rent1bedroomflatInCityCenter = costInfo.rent1bedroomflatInCityCenter
    const rent2bedroomflatInCityCenter = costInfo.rent2bedroomflatInCityCenter
    const rent3bedroomflatInCityCenter = costInfo.rent3bedroomflatInCityCenter
    const rent1bedroomflatOutsideCityCenter = costInfo.rent1bedroomflatOutsideCityCenter
    const rent2bedroomflatOutsideCityCenter = costInfo.rent2bedroomflatOutsideCityCenter
    const rent3bedroomflatOutsideCityCenter = costInfo.rent3bedroomflatOutsideCityCenter
    const mortgageRatesPerMonth = costInfo.mortgageRatesPerMonth
    const realEstateAgentsCommissionFees = costInfo.realEstateAgentsCommissionFees
    const propertyTaxRates = propertyAndIncomeTaxInfo.propertyTaxRates

    return (
      <>
        <AdsHeaderBanner />

        <div className="geographical-map">
          <h2 className="pages-h2">Housing Cost</h2>
        </div>

        <div className="basic-information-comparison-div1">
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
                        src={`/images/${stateLowerCase}-map-small.png`}
                        layout="fill"
                        objectFit="contain"
                        alt={`Pictorial representation of map of ${stateLowerCase}`}
                      />
                    </div>

                    <div className="first-entity-name-pages-comparison">
                      {state}
                    </div>

                    <div className="first-entity-flag-pages-comparison">
                      <Image
                        src={`/images/${stateLowerCase}-flag-small.png`}
                        layout="fill"
                        objectFit="contain"
                        alt={`Image illustrating the flag of ${stateLowerCase}`}
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
                    1 BHK Apartment in City Center
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/rent-1-bedroom-flat-in-city-center-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing 1 bedroom apartment in City Center"
                    />
                  </div>
                </td>

                <td className="rent-1-bedroom-flat-in-city-center-answer-first-entity all-indicator-answers">
                  {rent1bedroomflatInCityCenter
                    ? `${formatNumberWithCommas(
                        rent1bedroomflatInCityCenter
                      )} USD`
                    : 'Yet to Update'}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    2 BHK Apartment in City Center
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/rent-2-bedroom-flat-in-city-center-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing 2 bedroom apartment in City Center"
                    />
                  </div>
                </td>

                <td className="rent-2-bedroom-flat-in-city-center-answer-first-entity all-indicator-answers">
                  {rent2bedroomflatInCityCenter
                    ? `${formatNumberWithCommas(
                        rent2bedroomflatInCityCenter
                      )} USD`
                    : 'Yet to Update'}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    3 BHK Apartment in City Center
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/rent-3-bedroom-flat-in-city-center-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing 3 bedroom apartment in City Center"
                    />
                  </div>
                </td>

                <td className="rent-3-bedroom-flat-in-city-center-answer-first-entity all-indicator-answers">
                  {rent3bedroomflatInCityCenter
                    ? `${formatNumberWithCommas(
                        rent3bedroomflatInCityCenter
                      )} USD`
                    : 'Yet to Update'}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    1 BHK Apartment outside City Center
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/rent-1-bedroom-flat-outside-city-center-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing 1 bedroom apartment outside City Center"
                    />
                  </div>
                </td>

                <td className="rent-1-bedroom-flat-outside-city-center-answer-first-entity all-indicator-answers">
                  {rent1bedroomflatOutsideCityCenter
                    ? `${formatNumberWithCommas(
                        rent1bedroomflatOutsideCityCenter
                      )} USD`
                    : 'Yet to Update'}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    2 BHK Apartment outside City Center
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/rent-2-bedroom-flat-outside-city-center-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing 2 bedroom apartment outside City Center"
                    />
                  </div>
                </td>

                <td className="rent-2-bedroom-flat-outside-city-center-answer-first-entity all-indicator-answers">
                  {rent2bedroomflatOutsideCityCenter
                    ? `${formatNumberWithCommas(
                        rent2bedroomflatOutsideCityCenter
                      )} USD`
                    : 'Yet to Update'}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    3 BHK Apartment outside City Center
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/rent-3-bedroom-flat-outside-city-center-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing 3 bedroom apartment outside City Center"
                    />
                  </div>
                </td>

                <td className="rent-3-bedroom-flat-outside-city-center-answer-first-entity all-indicator-answers">
                  {rent3bedroomflatOutsideCityCenter
                    ? `${formatNumberWithCommas(
                        rent3bedroomflatOutsideCityCenter
                      )} USD`
                    : 'Yet to Update'}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">Mortgage Rates Per Month</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/mortgage-rates-per-month-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing Mortgage Rates Per Month"
                    />
                  </div>
                </td>

                <td className="mortgage-rates-per-month-index-answer-first-entity all-indicator-answers">
                  {mortgageRatesPerMonth
                    ? `${mortgageRatesPerMonth} %`
                    : 'Yet to Update'}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">Realtor Commission</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/real-estate-agents-comission-fees-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing Real Estate Agents Comission Fees"
                    />
                  </div>
                </td>

                <td className="real-estate-agents-commission-fees-answer-first-entity all-indicator-answers">
                  {realEstateAgentsCommissionFees
                    ? `${realEstateAgentsCommissionFees} %`
                    : 'Yet to Update'}
                </td>
              </tr>

              <tr>
                <td className="basic-info">
                  <div className="all-indicators">Property Taxes</div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/property-taxes-image.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Describing Property Taxes in any given country"
                    />
                  </div>
                </td>

                <td className="property-taxes-answer-first-entity all-indicator-answers">
                  {propertyTaxRates ? `${propertyTaxRates} %` : 'Yet to Update'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
}

export default Housing