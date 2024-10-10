import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import Image from "next/image"

function Pictorial({ state1, state2, state1URLCase, state2URLCase }) {
  return (
    <>
      <AdsHeaderBanner />

      <div className="pictorial-representation">
        <h2 className="pages-h2">Pictorial Representation</h2>
      </div>
      <div className="maps-flags-emblem">
        <div className="first-entity-map-flag-emblem-pictorial-country-state">
          <div className="first-entity-name-pages-comparison first-entity-name-maps-flags-emblem">
            {state1}
          </div>
          <div className="horizontal-line"></div>
          <div className="map-flag-emblem-country-state-first-entity">
            <div className="map-map-text">
              <div className="map-text">Map</div>
              <div className="first-entity-map">
                <Image
                  src={`/images/${state1URLCase}-us-state-map-medium.png`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={`Pictorial representation of the map of ${state1}`}
                />
              </div>
            </div>
            <div className="flag-flag-text">
              <div className="flag-text">Flag</div>
              <div className="first-entity-flag">
                <Image
                  src={`/images/${state1URLCase}-us-state-flag-medium.png`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={`Image illustrating the flag of ${state1}`}
                />
              </div>
            </div>
            <div className="coat-arms-coat-arms-text">
              <div className="emblem-text">State Seal</div>
              <div className="first-entity-emblem">
                <Image
                  src={`/images/${state1URLCase}-us-state-seal-medium.png`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={`Image showing the state seal of ${state1}`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="second-entity-map-flag-emblem-pictorial-country-state">
          <div className="second-entity-name-pages-comparison second-entity-name-maps-flags-emblem">
            {state2}
          </div>
          <div className="horizontal-line"></div>
          <div className="map-flag-emblem-country-state-second-entity">
            <div className="map-map-text">
              <div className="map-text">Map</div>
              <div className="second-entity-map">
                <Image
                  src={`/images/${state2URLCase}-us-state-map-medium.png`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={`Pictorial representation of the map of ${state2}`}
                />
              </div>
            </div>
            <div className="flag-flag-text">
              <div className="flag-text">Flag</div>
              <div className="second-entity-flag">
                <Image
                  src={`/images/${state2URLCase}-us-state-flag-medium.png`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={`Image illustrating the flag of ${state2}`}
                />
              </div>
            </div>
            <div className="coat-arms-coat-arms-text">
              <div className="emblem-text">State Seal</div>
              <div className="second-entity-emblem">
                <Image
                  src={`/images/${state2URLCase}-us-state-seal-medium.png`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={`Image showing the state seal of ${state2}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pictorial