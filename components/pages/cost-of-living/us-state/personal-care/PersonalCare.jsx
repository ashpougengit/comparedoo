import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { formatNumberWithCommas } from '@/lib/format/format';
import Image from 'next/image';

function PersonalCare({ costInfo, stateURLCase }) {
  const state = costInfo.state;
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
                {cosmeticProcedures
                  ? `${formatNumberWithCommas(cosmeticProcedures)} USD`
                  : 'Yet to Update'}
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
                {spaTreatment
                  ? `${formatNumberWithCommas(spaTreatment)} USD`
                  : 'Yet to Update'}
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
                {manicurePedicureCost
                  ? `${formatNumberWithCommas(manicurePedicureCost)} USD`
                  : 'Yet to Update'}
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
                {opticalGlasses
                  ? `${formatNumberWithCommas(opticalGlasses)} USD`
                  : 'Yet to Update'}
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
                {contactLenses
                  ? `${formatNumberWithCommas(contactLenses)} USD`
                  : 'Yet to Update'}
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
                {haircuts
                  ? `${formatNumberWithCommas(haircuts)} USD`
                  : 'Yet to Update'}
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
                {hairColoring
                  ? `${formatNumberWithCommas(hairColoring)} USD`
                  : 'Yet to Update'}
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
                {shampooPrice
                  ? `${formatNumberWithCommas(shampooPrice)} USD`
                  : 'Yet to Update'}
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
                {toothpastePrice
                  ? `${formatNumberWithCommas(toothpastePrice)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PersonalCare;
