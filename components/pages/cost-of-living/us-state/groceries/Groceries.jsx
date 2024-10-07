import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { formatNumberWithCommas } from '@/lib/format/format';
import Image from 'next/image';

function Groceries({ costInfo, stateURLCase }) {
  const state = costInfo.state;
  const rice1Kg = costInfo.rice1Kg;
  const milk1Liter = costInfo.milk1Liter;
  const water1Liter = costInfo.water1Liter;
  const bread500g = costInfo.bread500g;
  const eggsDozen = costInfo.eggsDozen;
  const cheese1Kg = costInfo.cheese1Kg;
  const chickenBreasts1Kg = costInfo.chickenBreasts1Kg;

  return (
    <>
      <AdsHeaderBanner />

      <div className="geographical-map">
        <h2 className="pages-h2">Groceries Cost</h2>
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
                      src={`/images/${stateURLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Pictorial representation of map of ${stateURLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {state}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${stateURLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                <div className="all-indicators">Long Grain Rice (1 KG)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/rice-1-kg-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing rice cost per month"
                  />
                </div>
              </td>

              <td className="rice-1-kg-first-entity all-indicator-answers">
                {rice1Kg
                  ? `${formatNumberWithCommas(rice1Kg)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Milk (1 Liter)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/milk-1-liter-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing milk cost per month"
                  />
                </div>
              </td>

              <td className="milk-1-liter-first-entity all-indicator-answers">
                {milk1Liter
                  ? `${formatNumberWithCommas(milk1Liter)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Water (1 Liter)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/water-1-liter-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing water cost per month"
                  />
                </div>
              </td>

              <td className="water-1-liter-first-entity all-indicator-answers">
                {water1Liter
                  ? `${formatNumberWithCommas(water1Liter)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Bread (500 gm)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/bread-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing bread cost per month"
                  />
                </div>
              </td>

              <td className="bread-first-entity all-indicator-answers">
                {bread500g
                  ? `${formatNumberWithCommas(bread500g)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Eggs (1 Dozen)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/eggs-dozen-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing eggs cost per month"
                  />
                </div>
              </td>

              <td className="eggs-first-entity all-indicator-answers">
                {eggsDozen
                  ? `${formatNumberWithCommas(eggsDozen)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Cheese (1 KG)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/cheese-1-kg-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing cheese cost per month"
                  />
                </div>
              </td>

              <td className="cheese-1-kg-first-entity all-indicator-answers">
                {cheese1Kg
                  ? `${formatNumberWithCommas(cheese1Kg)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Chicken Breast (1 KG)</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/chicken-breast-1-kg-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Image Describing chicken cost per month"
                  />
                </div>
              </td>

              <td className="chicken-1-kg-first-entity all-indicator-answers">
                {chickenBreasts1Kg
                  ? `${formatNumberWithCommas(chickenBreasts1Kg)} USD`
                  : 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Groceries;
