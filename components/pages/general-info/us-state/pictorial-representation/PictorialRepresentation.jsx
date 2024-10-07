import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import Image from "next/image"

function PictorialRepresentation({ state, stateURLCase }) {
  return (
    <>
      <AdsHeaderBanner />

      <div className="pictorial-representation">
        <h2 className="pages-h2">Pictorial Representation</h2>
      </div>
      <div className="maps-flags-emblem">
        <div className="first-entity-map-flag-emblem-pictorial-country-state">
          <div className="first-entity-name-pages-comparison first-entity-name-maps-flags-emblem">
            {state}
          </div>
          <div className="horizontal-line"></div>
          <div className="map-flag-emblem-country-state-first-entity">
            <div className="map-map-text">
              <div className="map-text">Map</div>
              <div className="first-entity-map">
                <Image
                  src={`/images/${stateURLCase}-us-state-map-medium.png`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={`Pictorial representation of map of ${state}`}
                />
              </div>
            </div>
            <div className="flag-flag-text">
              <div className="flag-text">Flag</div>
              <div className="first-entity-flag">
                <Image
                  src={`/images/${stateURLCase}-us-state-flag-medium.png`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={`Image illustrating the flag of ${state}`}
                />
              </div>
            </div>
            <div className="coat-arms-coat-arms-text">
              <div className="emblem-text">State Seal</div>
              <div className="first-entity-emblem">
                <Image
                  src={`/images/${stateURLCase}-us-state-seal-big.png`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={`Image showing the state seal of ${state}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PictorialRepresentation