import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { dollarizedCountries } from '@/lib/array-list/dollarizedCountries';
import {
  formatNumberWithCommas,
  formatUSDWithCommas,
} from '@/lib/format/format';
import Image from 'next/image';

function PersonalCare({
  costInfo,
  currency,
  unitValueInUSD,
  countryURLCase,
}) {
  const country = costInfo.country;
  const cosmeticProcedures = costInfo.cosmeticProcedures;
  const spaTreatment = costInfo.spaTreatment;
  const manicurePedicureCost = costInfo.manicurePedicureCost;
  const opticalGlasses = costInfo.opticalGlasses;
  const contactLenses = costInfo.contactLenses;
  const haircuts = costInfo.haircuts;
  const hairColoring = costInfo.hairColoring;
  const shampooPrice = costInfo.shampooPrice;
  const toothpastePrice = costInfo.toothpastePrice;

  return (
    <>
      <AdsHeaderBanner />

      <div className="geographical-map">
        <h2 className="pages-h2">Personal Care Cost</h2>
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
                      fill
                      alt="Image representing an indicator"
                    />
                  </div>

                  <div className="indicator-text">Indicators</div>

                  <div className="left-indicator">
                    <Image
                      src="/images/indicators-left-image.png"
                      fill
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
                      fill
                      alt={`Pictorial representation of map of ${countryURLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {country}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${countryURLCase}-flag-small.png`}
                      fill
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
                <div className="all-indicators">Cosmetic Procedures</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/cosmetic-procedures-image.png"
                    fill
                    alt="Image Describing Cosmetic Procedures"
                  />
                </div>
              </td>

              <td className="cosmetic-procedures-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(cosmeticProcedures)} ${cosmeticProcedures ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="cosmetic-procedures-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    cosmeticProcedures * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Spa Treatment</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/spa-treatment-cost-image.png"
                    fill
                    alt="Image Describing Spa Treatment"
                  />
                </div>
              </td>

              <td className="spa-treatment-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(spaTreatment)} ${spaTreatment ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="spa-treatment-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    spaTreatment * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Manicure Pedicure Cost</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/manicure-pedicure-cost-image.png"
                    fill
                    alt="Image Describing Manicure Pedicure Cost"
                  />
                </div>
              </td>

              <td className="manicure-pedicure-cost-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(manicurePedicureCost)} ${manicurePedicureCost ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="manicure-pedicure-cost-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    manicurePedicureCost * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Optical Glasses Cost</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/optical-glasses-image.png"
                    fill
                    alt="Image Describing Optical Glasses Cost"
                  />
                </div>
              </td>

              <td className="optical-glasses-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(opticalGlasses)} ${opticalGlasses ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="optical-glasses-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    opticalGlasses * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Contact Lenses Cost</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/contact-lenses-image.png"
                    fill
                    alt="Image Describing Contact Lenses Cost"
                  />
                </div>
              </td>

              <td className="contact-lenses-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(contactLenses)} ${contactLenses ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="contact-lenses-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    contactLenses * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Haircuts</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/haircuts-price-image.png"
                    fill
                    alt="Image Describing Hair Cuts"
                  />
                </div>
              </td>

              <td className="hair-cuts-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(haircuts)} ${haircuts ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="hair-cuts-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    haircuts * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Hair Coloring</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/hair-coloring-price-image.png"
                    fill
                    alt="Image Describing Hair Coloring"
                  />
                </div>
              </td>

              <td className="hair-coloring-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(hairColoring)} ${hairColoring ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="hair-coloring-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    hairColoring * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Shampoo Price</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/shampoo-price-image.png"
                    fill
                    alt="Image Describing Shampoo Price"
                  />
                </div>
              </td>

              <td className="shampoo-price-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(shampooPrice)} ${shampooPrice ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="shampoo-price-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    shampooPrice * unitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Toothpaste Price</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/toothpaste-price-image.png"
                    fill
                    alt="Image Describing Toothpaste Price"
                  />
                </div>
              </td>

              <td className="toothpaste-price-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(toothpastePrice)} ${toothpastePrice ? currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country) ? (
                  ''
                ) : (
                  <span className="toothpaste-price-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    toothpastePrice * unitValueInUSD
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

export default PersonalCare;
