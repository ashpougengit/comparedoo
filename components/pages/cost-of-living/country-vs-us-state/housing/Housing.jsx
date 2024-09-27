import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { dollarizedCountries } from "@/lib/array-list/dollarizedCountries";
import { formatNumberWithCommas } from '@/lib/format/format';
import Image from "next/image";

function Housing({ slug1, slug2, value1, value2, slug1CostInfo, slug2CostInfo, slug1Currency, slug2Currency, entity1PropertyAndIncomeTaxInfo, entity2PropertyAndIncomeTaxInfo, slug1ExchangeRate, slug2ExchangeRate, slug1LowerCase, slug2LowerCase }) {
    const slug1Rent1bedroomflatInCityCenter = slug1CostInfo.rent1bedroomflatInCityCenter
    const slug1Rent2bedroomflatInCityCenter = slug1CostInfo.rent2bedroomflatInCityCenter
    const slug1Rent3bedroomflatInCityCenter = slug1CostInfo.rent3bedroomflatInCityCenter
    const slug1Rent1bedroomflatOutsideCityCenter = slug1CostInfo.rent1bedroomflatOutsideCityCenter
    const slug1Rent2bedroomflatOutsideCityCenter = slug1CostInfo.rent2bedroomflatOutsideCityCenter
    const slug1Rent3bedroomflatOutsideCityCenter = slug1CostInfo.rent3bedroomflatOutsideCityCenter
    const slug1MortgageRatesPerMonth = slug1CostInfo.mortgageRatesPerMonth
    const slug1RealEstateAgentsCommissionFees = slug1CostInfo.realEstateAgentsCommissionFees
    const slug1PropertyTaxRates = entity1PropertyAndIncomeTaxInfo.propertyTaxRates
    const slug1AverageCost = (((slug1Rent1bedroomflatInCityCenter || 0) + (slug1Rent2bedroomflatInCityCenter || 0) + (slug1Rent3bedroomflatInCityCenter || 0) + (slug1Rent1bedroomflatOutsideCityCenter || 0) + (slug1Rent2bedroomflatOutsideCityCenter || 0) + (slug1Rent3bedroomflatOutsideCityCenter || 0)) / 6) * slug1ExchangeRate

    const slug2Rent1bedroomflatInCityCenter = slug2CostInfo.rent1bedroomflatInCityCenter
    const slug2Rent2bedroomflatInCityCenter = slug2CostInfo.rent2bedroomflatInCityCenter
    const slug2Rent3bedroomflatInCityCenter = slug2CostInfo.rent3bedroomflatInCityCenter
    const slug2Rent1bedroomflatOutsideCityCenter = slug2CostInfo.rent1bedroomflatOutsideCityCenter
    const slug2Rent2bedroomflatOutsideCityCenter = slug2CostInfo.rent2bedroomflatOutsideCityCenter
    const slug2Rent3bedroomflatOutsideCityCenter = slug2CostInfo.rent3bedroomflatOutsideCityCenter
    const slug2MortgageRatesPerMonth = slug2CostInfo.mortgageRatesPerMonth
    const slug2RealEstateAgentsCommissionFees = slug2CostInfo.realEstateAgentsCommissionFees
    const slug2PropertyTaxRates = entity2PropertyAndIncomeTaxInfo.propertyTaxRates
    const slug2AverageCost = (((slug2Rent1bedroomflatInCityCenter || 0) + (slug2Rent2bedroomflatInCityCenter || 0) + (slug2Rent3bedroomflatInCityCenter || 0) + (slug2Rent1bedroomflatOutsideCityCenter || 0) + (slug2Rent2bedroomflatOutsideCityCenter || 0) + (slug2Rent3bedroomflatOutsideCityCenter || 0)) / 6) * slug2ExchangeRate
    
    const costTimes = slug1AverageCost > slug2AverageCost ? (slug1AverageCost / slug2AverageCost).toFixed(2) : (slug2AverageCost / slug1AverageCost).toFixed(2)
    const moreOrLess = slug1AverageCost > slug2AverageCost ? 'more' : 'less'

    return (
      <>
        <AdsHeaderBanner />

        <div className="geographical-map">
          <h2 className="pages-h2">Housing Cost Comparison</h2>
        </div>

        <div className="basic-information-comparison-div1">
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
                        src={`/images/${slug1LowerCase}-map-small.png`}
                        layout="fill"
                        objectFit="contain"
                        alt={`Pictorial representation of map of ${slug1LowerCase}`}
                      />
                    </div>

                    <div className="first-entity-name-pages-comparison">
                      {slug1}
                    </div>

                    <div className="first-entity-flag-pages-comparison">
                      <Image
                        src={`/images/${slug1LowerCase}-flag-small.png`}
                        layout="fill"
                        objectFit="contain"
                        alt={`Image illustrating the flag of ${slug1LowerCase}`}
                      />
                    </div>
                  </div>
                </th>

                <th>
                  <div className="heading-map-name-flag">
                    <div className="second-entity-map-pages-comparison">
                      <Image
                        src={`/images/${slug2LowerCase}-map-small.png`}
                        layout="fill"
                        objectFit="contain"
                        alt={`Pictorial representation of map of ${slug2LowerCase}`}
                      />
                    </div>

                    <div className="second-entity-name-pages-comparison">
                      {' '}
                      {slug2}{' '}
                    </div>

                    <div className="second-entity-flag-pages-comparison">
                      <Image
                        src={`/images/${slug2LowerCase}-flag-small.png`}
                        layout="fill"
                        objectFit="contain"
                        alt={`Image illustrating the flag of ${slug2LowerCase}`}
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
                  {slug1Rent1bedroomflatInCityCenter ? (
                    value1 === 'state' ||
                    dollarizedCountries.includes(slug1) ? (
                      `${formatNumberWithCommas(
                        slug1Rent1bedroomflatInCityCenter
                      )} USD`
                    ) : (
                      <>
                        {`${formatNumberWithCommas(
                          slug1Rent1bedroomflatInCityCenter
                        )} ${slug1Currency}`}{' '}
                        <br />
                        {`(${formatNumberWithCommas(
                          slug1Rent1bedroomflatInCityCenter * slug1ExchangeRate
                        )} USD)`}
                      </>
                    )
                  ) : (
                    'Yet to Update'
                  )}
                </td>
                <td className="rent-1-bedroom-flat-in-city-center-answer-second-entity all-indicator-answers">
                  {slug2Rent1bedroomflatInCityCenter ? (
                    value2 === 'state' ||
                    dollarizedCountries.includes(slug2) ? (
                      `${formatNumberWithCommas(
                        slug2Rent1bedroomflatInCityCenter
                      )} USD`
                    ) : (
                      <>
                        {`${formatNumberWithCommas(
                          slug2Rent1bedroomflatInCityCenter
                        )} ${slug2Currency}`}{' '}
                        <br />
                        {`(${formatNumberWithCommas(
                          slug2Rent1bedroomflatInCityCenter * slug2ExchangeRate
                        )} USD)`}
                      </>
                    )
                  ) : (
                    'Yet to Update'
                  )}
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
                  {slug1Rent2bedroomflatInCityCenter ? (
                    value1 === 'state' ||
                    dollarizedCountries.includes(slug1) ? (
                      `${formatNumberWithCommas(
                        slug1Rent2bedroomflatInCityCenter
                      )} USD`
                    ) : (
                      <>
                        {`${formatNumberWithCommas(
                          slug1Rent2bedroomflatInCityCenter
                        )} ${slug1Currency}`}{' '}
                        <br />
                        {`(${formatNumberWithCommas(
                          slug1Rent2bedroomflatInCityCenter * slug1ExchangeRate
                        )} USD)`}
                      </>
                    )
                  ) : (
                    'Yet to Update'
                  )}
                </td>
                <td className="rent-2-bedroom-flat-in-city-center-answer-second-entity all-indicator-answers">
                  {slug2Rent2bedroomflatInCityCenter ? (
                    value2 === 'state' ||
                    dollarizedCountries.includes(slug2) ? (
                      `${formatNumberWithCommas(
                        slug2Rent2bedroomflatInCityCenter
                      )} USD`
                    ) : (
                      <>
                        {`${formatNumberWithCommas(
                          slug2Rent2bedroomflatInCityCenter
                        )} ${slug2Currency}`}{' '}
                        <br />
                        {`(${formatNumberWithCommas(
                          slug2Rent2bedroomflatInCityCenter * slug2ExchangeRate
                        )} USD)`}
                      </>
                    )
                  ) : (
                    'Yet to Update'
                  )}
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
                  {slug1Rent3bedroomflatInCityCenter ? (
                    value1 === 'state' ||
                    dollarizedCountries.includes(slug1) ? (
                      `${formatNumberWithCommas(
                        slug1Rent3bedroomflatInCityCenter
                      )} USD`
                    ) : (
                      <>
                        {`${formatNumberWithCommas(
                          slug1Rent3bedroomflatInCityCenter
                        )} ${slug1Currency}`}{' '}
                        <br />
                        {`(${formatNumberWithCommas(
                          slug1Rent3bedroomflatInCityCenter * slug1ExchangeRate
                        )} USD)`}
                      </>
                    )
                  ) : (
                    'Yet to Update'
                  )}
                </td>
                <td className="rent-3-bedroom-flat-in-city-center-answer-second-entity all-indicator-answers">
                  {slug2Rent3bedroomflatInCityCenter ? (
                    value2 === 'state' ||
                    dollarizedCountries.includes(slug2) ? (
                      `${formatNumberWithCommas(
                        slug2Rent3bedroomflatInCityCenter
                      )} USD`
                    ) : (
                      <>
                        {`${formatNumberWithCommas(
                          slug2Rent3bedroomflatInCityCenter
                        )} ${slug2Currency}`}{' '}
                        <br />
                        {`(${formatNumberWithCommas(
                          slug2Rent3bedroomflatInCityCenter * slug2ExchangeRate
                        )} USD)`}
                      </>
                    )
                  ) : (
                    'Yet to Update'
                  )}
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
                  {slug1Rent1bedroomflatOutsideCityCenter ? (
                    value1 === 'state' ||
                    dollarizedCountries.includes(slug1) ? (
                      `${formatNumberWithCommas(
                        slug1Rent1bedroomflatOutsideCityCenter
                      )} USD`
                    ) : (
                      <>
                        {`${formatNumberWithCommas(
                          slug1Rent1bedroomflatOutsideCityCenter
                        )} ${slug1Currency}`}{' '}
                        <br />
                        {`(${formatNumberWithCommas(
                          slug1Rent1bedroomflatOutsideCityCenter *
                            slug1ExchangeRate
                        )} USD)`}
                      </>
                    )
                  ) : (
                    'Yet to Update'
                  )}
                </td>
                <td className="rent-1-bedroom-flat-outside-city-center-answer-second-entity all-indicator-answers">
                  {slug2Rent1bedroomflatOutsideCityCenter ? (
                    value2 === 'state' ||
                    dollarizedCountries.includes(slug2) ? (
                      `${formatNumberWithCommas(
                        slug2Rent1bedroomflatOutsideCityCenter
                      )} USD`
                    ) : (
                      <>
                        {`${formatNumberWithCommas(
                          slug2Rent1bedroomflatOutsideCityCenter
                        )} ${slug2Currency}`}{' '}
                        <br />
                        {`(${formatNumberWithCommas(
                          slug2Rent1bedroomflatOutsideCityCenter *
                            slug2ExchangeRate
                        )} USD)`}
                      </>
                    )
                  ) : (
                    'Yet to Update'
                  )}
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
                  {slug1Rent2bedroomflatOutsideCityCenter ? (
                    value1 === 'state' ||
                    dollarizedCountries.includes(slug1) ? (
                      `${formatNumberWithCommas(
                        slug1Rent2bedroomflatOutsideCityCenter
                      )} USD`
                    ) : (
                      <>
                        {`${formatNumberWithCommas(
                          slug1Rent2bedroomflatOutsideCityCenter
                        )} ${slug1Currency}`}{' '}
                        <br />
                        {`(${formatNumberWithCommas(
                          slug1Rent2bedroomflatOutsideCityCenter *
                            slug1ExchangeRate
                        )} USD)`}
                      </>
                    )
                  ) : (
                    'Yet to Update'
                  )}
                </td>
                <td className="rent-2-bedroom-flat-outside-city-center-answer-second-entity all-indicator-answers">
                  {slug2Rent2bedroomflatOutsideCityCenter ? (
                    value2 === 'state' ||
                    dollarizedCountries.includes(slug2) ? (
                      `${formatNumberWithCommas(
                        slug2Rent2bedroomflatOutsideCityCenter
                      )} USD`
                    ) : (
                      <>
                        {`${formatNumberWithCommas(
                          slug2Rent2bedroomflatOutsideCityCenter
                        )} ${slug2Currency}`}{' '}
                        <br />
                        {`(${formatNumberWithCommas(
                          slug2Rent2bedroomflatOutsideCityCenter *
                            slug2ExchangeRate
                        )} USD)`}
                      </>
                    )
                  ) : (
                    'Yet to Update'
                  )}
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
                  {slug1Rent3bedroomflatOutsideCityCenter ? (
                    value1 === 'state' ||
                    dollarizedCountries.includes(slug1) ? (
                      `${formatNumberWithCommas(
                        slug1Rent3bedroomflatOutsideCityCenter
                      )} USD`
                    ) : (
                      <>
                        {`${formatNumberWithCommas(
                          slug1Rent3bedroomflatOutsideCityCenter
                        )} ${slug1Currency}`}{' '}
                        <br />
                        {`(${formatNumberWithCommas(
                          slug1Rent3bedroomflatOutsideCityCenter *
                            slug1ExchangeRate
                        )} USD)`}
                      </>
                    )
                  ) : (
                    'Yet to Update'
                  )}
                </td>
                <td className="rent-3-bedroom-flat-outside-city-center-answer-second-entity all-indicator-answers">
                  {slug2Rent3bedroomflatOutsideCityCenter ? (
                    value2 === 'state' ||
                    dollarizedCountries.includes(slug2) ? (
                      `${formatNumberWithCommas(
                        slug2Rent3bedroomflatOutsideCityCenter
                      )} USD`
                    ) : (
                      <>
                        {`${formatNumberWithCommas(
                          slug2Rent3bedroomflatOutsideCityCenter
                        )} ${slug2Currency}`}{' '}
                        <br />
                        {`(${formatNumberWithCommas(
                          slug2Rent3bedroomflatOutsideCityCenter *
                            slug2ExchangeRate
                        )} USD)`}
                      </>
                    )
                  ) : (
                    'Yet to Update'
                  )}
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
                  {slug1MortgageRatesPerMonth
                    ? `${slug1MortgageRatesPerMonth} %`
                    : 'Yet to Update'}
                </td>
                <td className="mortgage-rates-per-month-index-answer-second-entity all-indicator-answers">
                  {slug2MortgageRatesPerMonth
                    ? `${slug2MortgageRatesPerMonth} %`
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
                  {slug1RealEstateAgentsCommissionFees
                    ? `${slug1RealEstateAgentsCommissionFees} %`
                    : 'Yet to Update'}
                </td>
                <td className="real-estate-agents-commission-fees-answer-second-entity all-indicator-answers">
                  {slug2RealEstateAgentsCommissionFees
                    ? `${slug2RealEstateAgentsCommissionFees} %`
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
                  {slug1PropertyTaxRates
                    ? `${slug1PropertyTaxRates} %`
                    : 'Yet to Update'}
                </td>
                <td className="property-taxes-answer-second-entity all-indicator-answers">
                  {slug2PropertyTaxRates
                    ? `${slug2PropertyTaxRates} %`
                    : 'Yet to Update'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="paragraph-for-pages-below-table">
          <div className="para-for-pages-single-div">
            <h3>
              Is housing more expensive in
              <span className="first-entity-name-pages-paragraph">
                {' '}
                {slug1}{' '}
              </span>
              than in
              <span className="second-entity-name-pages-paragraph">
                {' '}
                {slug2}
              </span>
              ?
            </h3>

            <p>
              The average housing cost in
              <span className="first-entity-name-pages-paragraph">
                {' '}
                {slug1}{' '}
              </span>
              <strong>
                is
                <span className="housing-cost-calculation"> {costTimes} </span>
                times{' '}
              </strong>
              <span className="housing-cost-less-or-more-expensive-calculation">
                {moreOrLess}{' '}
              </span>
              expensive than
              <span className="second-entity-name-pages-paragraph">
                {' '}
                {slug2}
              </span>
              .
            </p>
          </div>
        </div>
      </>
    );
}

export default Housing