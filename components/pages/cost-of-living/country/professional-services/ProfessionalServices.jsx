import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { dollarizedCountries } from '@/lib/array-list/dollarizedCountries';
import {
  formatNumberWithCommas,
  formatUSDWithCommas,
} from '@/lib/format/format';
import Image from 'next/image';

function ProfessionalServices({
  costInfo,
  currency,
  unitValueInUSD,
  countryURLCase,
}) {
  const country = costInfo.country;
  const legalConsultationPerHourRate = costInfo.legalConsultationPerHourRate;
  const accountingServicesPerHourRate = costInfo.accountingServicesPerHourRate;
  const ITSupportServicesPerHourRate = parseFloat(
    costInfo.ITSupportServicesPerHourRate
  );
  const technicianServicesPerHourRate = costInfo.technicianServicesPerHourRate;

  return (
    <>
      <AdsHeaderBanner />

      <div className="geographical-map">
        <h2 className="pages-h2">Professional Services Cost</h2>
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
                  Legal Consultation Per Hour Rate
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/legal-consultation-per-hour-rate-image.png"
                    fill
                    alt="Image Describing Legal Consultation Per Hour Rate"
                  />
                </div>
              </td>

              <td className="legal-consultation-per-hour-rate-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(legalConsultationPerHourRate)} ${legalConsultationPerHourRate ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="legal-consultation-per-hour-rate-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    legalConsultationPerHourRate * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  Accounting Services Per Hour Rate
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/accounting-services-per-hour-rate-image.png"
                    fill
                    alt="Image Describing Accounting Services Per Hour Rate"
                  />
                </div>
              </td>

              <td className="accounting-services-per-hour-rate-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(accountingServicesPerHourRate)} ${accountingServicesPerHourRate ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="accounting-services-per-hour-rate-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    accountingServicesPerHourRate * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  IT Support Services Per Hour Rate
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/IT-support-services-per-hour-rate-image.png"
                    fill
                    alt="Image Describing IT Support Services Per Hour Rate"
                  />
                </div>
              </td>

              <td className="IT-support-services-per-hour-rate-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(ITSupportServicesPerHourRate)} ${ITSupportServicesPerHourRate ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="IT-support-services-per-hour-rate-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    ITSupportServicesPerHourRate * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  Technician Services Per Hour Rate
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/technician-services-per-hour-rate-image.png"
                    fill
                    alt="Image Describing Technician Services Per Hour Rate"
                  />
                </div>
              </td>

              <td className="technical-services-per-hour-rate-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(technicianServicesPerHourRate)} ${technicianServicesPerHourRate ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="technical-services-per-hour-rate-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    technicianServicesPerHourRate * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ProfessionalServices;
