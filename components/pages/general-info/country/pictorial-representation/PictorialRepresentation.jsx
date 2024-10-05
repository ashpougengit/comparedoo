import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import Image from "next/image"

function PictorialRepresentation({ country, countryURLCase }) {
  return (
    <>
      <AdsHeaderBanner />

      <div className="geographical-map-continents-pages">
        <h2 className="pages-h2">Pictorial Representation</h2>
      </div>

      <div className="individual-country-globe-map-flag-emblem">
        <div className="individual-country-four-divs">
          <div className="individual-country-globe">
            <div className="individual-country-globe-text">
              Location in the Globe
            </div>

            <div className="individual-country-globe-image">
              <Image
                src={`/images/${countryURLCase}-in-world-map-big.png`}
                fill
                alt={`Pictorial representation of big size map of ${country} in the world map`}
              />
            </div>
          </div>

          <div className="individual-country-map">
            <div className="individual-country-map-text">Map</div>

            <div className="individual-country-map-image">
              <Image
                src={`/images/${countryURLCase}-map-big.png`}
                fill
                alt={`Pictorial representation of big size map of ${country}`}
              />
            </div>
          </div>

          <div className="individual-country-flag">
            <div className="individual-country-flag-text">Flag</div>

            <div className="individual-country-flag-image">
              <Image
                src={`/images/${countryURLCase}-flag-big.png`}
                fill
                alt={`Image illustrating the big size flag of ${country}`}
              />
            </div>
          </div>

          <div className="individual-country-emblem">
            <div className="individual-country-emblem-text">
              Coat of Arms / Emblem
            </div>

            <div className="individual-country-emblem-image">
              <Image
                src={`/images/${countryURLCase}-coat-of-arms-big.png`}
                fill
                alt={`Image showing the big size coat of arms or embelem of ${country}`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PictorialRepresentation