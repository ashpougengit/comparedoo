import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { dollarizedCountries } from '@/lib/array-list/dollarizedCountries';
import {
  formatNumberWithCommas,
  formatUSDWithCommas,
} from '@/lib/format/format';
import Image from 'next/image';

function PersonalCareCost({
  country1CostInfo,
  country2CostInfo,
  country1Currency,
  country2Currency,
  country1UnitValueInUSD,
  country2UnitValueInUSD,
  country1URLCase,
  country2URLCase,
}) {
  const country1 = country1CostInfo.country;
  const country1CosmeticProcedures = country1CostInfo.cosmeticProcedures;
  const country1SpaTreatment = country1CostInfo.spaTreatment;
  const country1ManicurePedicureCost = country1CostInfo.manicurePedicureCost;
  const country1OpticalGlasses = country1CostInfo.opticalGlasses;
  const country1ContactLenses = country1CostInfo.contactLenses;
  const country1Haircuts = country1CostInfo.haircuts;
  const country1HairColoring = country1CostInfo.hairColoring;
  const country1ShampooPrice = country1CostInfo.shampooPrice;
  const country1ToothpastePrice = country1CostInfo.toothpastePrice;
  const country1TotalCost =
    ((country1CosmeticProcedures || 0) +
      (country1SpaTreatment || 0) +
      (country1ManicurePedicureCost || 0) +
      (country1OpticalGlasses || 0) +
      (country1ContactLenses || 0) +
      (country1Haircuts || 0) +
      (country1HairColoring || 0) +
      (country1ShampooPrice || 0) +
      (country1ToothpastePrice || 0)) *
    country1UnitValueInUSD;

  const country2 = country2CostInfo.country;
  const country2CosmeticProcedures = country2CostInfo.cosmeticProcedures;
  const country2SpaTreatment = country2CostInfo.spaTreatment;
  const country2ManicurePedicureCost = country2CostInfo.manicurePedicureCost;
  const country2OpticalGlasses = country2CostInfo.opticalGlasses;
  const country2ContactLenses = country2CostInfo.contactLenses;
  const country2Haircuts = country2CostInfo.haircuts;
  const country2HairColoring = country2CostInfo.hairColoring;
  const country2ShampooPrice = country2CostInfo.shampooPrice;
  const country2ToothpastePrice = country2CostInfo.toothpastePrice;
  const country2TotalCost =
    ((country2CosmeticProcedures || 0) +
      (country2SpaTreatment || 0) +
      (country2ManicurePedicureCost || 0) +
      (country2OpticalGlasses || 0) +
      (country2ContactLenses || 0) +
      (country2Haircuts || 0) +
      (country2HairColoring || 0) +
      (country2ShampooPrice || 0) +
      (country2ToothpastePrice || 0)) *
    country2UnitValueInUSD;

  const costTimes =
    country1TotalCost > country2TotalCost
      ? (country1TotalCost / country2TotalCost).toFixed(2)
      : (country2TotalCost / country1TotalCost).toFixed(2);
  const moreOrLess = country1TotalCost > country2TotalCost ? 'more' : 'less';

  return (
    <>
      <AdsHeaderBanner />

      <div className="geographical-map">
        <h2 className="pages-h2">Personal Care Cost Comparison</h2>
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
                <div className="all-indicators">Cosmetic Procedures</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/cosmetic-procedures-image.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Cosmetic Procedures"
                  />
                </div>
              </td>

              <td className="cosmetic-procedures-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1CosmeticProcedures)} ${country1CosmeticProcedures ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="cosmetic-procedures-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1CosmeticProcedures * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="cosmetic-procedures-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2CosmeticProcedures)} ${country2CosmeticProcedures ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="cosmetic-procedures-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2CosmeticProcedures * country2UnitValueInUSD
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
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Spa Treatment"
                  />
                </div>
              </td>

              <td className="spa-treatment-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1SpaTreatment)} ${country1SpaTreatment ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="spa-treatment-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1SpaTreatment * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="spa-treatment-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2SpaTreatment)} ${country2SpaTreatment ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="spa-treatment-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2SpaTreatment * country2UnitValueInUSD
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
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Manicure Pedicure Cost"
                  />
                </div>
              </td>

              <td className="manicure-pedicure-cost-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1ManicurePedicureCost)} ${country1ManicurePedicureCost ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="manicure-pedicure-cost-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1ManicurePedicureCost * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="manicure-pedicure-cost-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2ManicurePedicureCost)} ${country2ManicurePedicureCost ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="manicure-pedicure-cost-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2ManicurePedicureCost * country2UnitValueInUSD
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
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Optical Glasses Cost"
                  />
                </div>
              </td>

              <td className="optical-glasses-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1OpticalGlasses)} ${country1OpticalGlasses ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="optical-glasses-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1OpticalGlasses * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="optical-glasses-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2OpticalGlasses)} ${country2OpticalGlasses ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="optical-glasses-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2OpticalGlasses * country2UnitValueInUSD
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
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Contact Lenses Cost"
                  />
                </div>
              </td>

              <td className="contact-lenses-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1ContactLenses)} ${country1ContactLenses ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="contact-lenses-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1ContactLenses * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="contact-lenses-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2ContactLenses)} ${country2ContactLenses ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="contact-lenses-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2ContactLenses * country2UnitValueInUSD
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
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Hair Cuts"
                  />
                </div>
              </td>

              <td className="hair-cuts-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1Haircuts)} ${country1Haircuts ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="hair-cuts-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1Haircuts * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="hair-cuts-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2Haircuts)} ${country2Haircuts ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="hair-cuts-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2Haircuts * country2UnitValueInUSD
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
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Hair Coloring"
                  />
                </div>
              </td>

              <td className="hair-coloring-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1HairColoring)} ${country1HairColoring ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="hair-coloring-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1HairColoring * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="hair-coloring-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2HairColoring)} ${country2HairColoring ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="hair-coloring-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2HairColoring * country2UnitValueInUSD
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
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Shampoo Price"
                  />
                </div>
              </td>

              <td className="shampoo-price-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1ShampooPrice)} ${country1ShampooPrice ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="shampoo-price-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1ShampooPrice * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="shampoo-price-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2ShampooPrice)} ${country2ShampooPrice ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="shampoo-price-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2ShampooPrice * country2UnitValueInUSD
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
                    layout="fill"
                    objectFit="contain"
                    alt="Image Describing Toothpaste Price"
                  />
                </div>
              </td>

              <td className="toothpaste-price-first-entity all-indicator-answers">
                {`${formatNumberWithCommas(country1ToothpastePrice)} ${country1ToothpastePrice ? country1Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country1) ? (
                  ''
                ) : (
                  <span className="toothpaste-price-first-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country1ToothpastePrice * country1UnitValueInUSD
                  )})`}</span>
                )}
              </td>
              <td className="toothpaste-price-second-entity all-indicator-answers">
                {`${formatNumberWithCommas(country2ToothpastePrice)} ${country2ToothpastePrice ? country2Currency : ''
                  }`}
                <br />{' '}
                {dollarizedCountries.includes(country2) ? (
                  ''
                ) : (
                  <span className="toothpaste-price-second-entity-amount-in-usd amount-in-dollar">{`(${formatUSDWithCommas(
                    country2ToothpastePrice * country2UnitValueInUSD
                  )})`}</span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="paragraph-for-pages-below-table">
        <div className="para-for-pages-single-div">
          <h3>
            Does Personal Care cost more in
            <span className="first-entity-name-pages-paragraph">
              {' '}
              {country1}{' '}
            </span>{' '}
            than in
            <span className="second-entity-name-pages-paragraph">
              {' '}
              {country2}
            </span>
            ?
          </h3>

          <p>
            If you lived in
            <span className="first-entity-name-pages-paragraph">
              {' '}
              {country1}
            </span>
            , instead of
            <span className="second-entity-name-pages-paragraph">
              {' '}
              {country2}
            </span>
            , you would have to pay
            <strong>
              <span className="personal-care-cost-calculation">
                {' '}
                {costTimes}{' '}
              </span>{' '}
              times{' '}
            </strong>{' '}
            <span className="personal-care-cost-more-or-less-calculation">
              {' '}
              {moreOrLess}{' '}
            </span>
            for Personal Care Items and Treatment.
          </p>
        </div>
      </div>
    </>
  );
}

export default PersonalCareCost;
