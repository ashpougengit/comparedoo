import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import Image from "next/image"

function Pictorial({ state1, state2, state1URLCase, state2URLCase }) {
  return (
    <>
      <AdsHeaderBanner />

      <div clasaName="pictorial-representation">
        <h2 clasaName="pages-h2">Pictorial Representation</h2>
      </div>
      <div clasaName="maps-flags-emblem">
        <div clasaName="first-entity-map-flag-emblem-pictorial-country-state">
          <div clasaName="first-entity-name-pages-comparison first-entity-name-maps-flags-emblem">
            {state1}
          </div>
          <div clasaName="horizontal-line"></div>
          <div clasaName="map-flag-emblem-country-state-first-entity">
            <div clasaName="map-map-text">
              <div clasaName="map-text">Map</div>
              <div clasaName="first-entity-map">
                <Image
                  src={`/images/${state1URLCase}-us-state-map-medium.png`}
                  fill
                  alt={`Pictorial representation of the map of ${state1}`}
                />
              </div>
            </div>
            <div clasaName="flag-flag-text">
              <div clasaName="flag-text">Flag</div>
              <div clasaName="first-entity-flag">
                <Image
                  src={`/images/${state1URLCase}-us-state-flag-medium.png`}
                  fill
                  alt={`Image illustrating the flag of ${state1}`}
                />
              </div>
            </div>
            <div clasaName="coat-arms-coat-arms-text">
              <div clasaName="emblem-text">State Seal</div>
              <div clasaName="first-entity-emblem">
                <Image
                  src={`/images/${state1URLCase}-us-state-seal-medium.png`}
                  fill
                  alt={`Image showing the state seal of ${state1}`}
                />
              </div>
            </div>
          </div>
        </div>
        <div clasaName="second-entity-map-flag-emblem-pictorial-country-state">
          <div clasaName="second-entity-name-pages-comparison second-entity-name-maps-flags-emblem">
            {state2}
          </div>
          <div clasaName="horizontal-line"></div>
          <div clasaName="map-flag-emblem-country-state-second-entity">
            <div clasaName="map-map-text">
              <div clasaName="map-text">Map</div>
              <div clasaName="second-entity-map">
                <Image
                  src={`/images/${state2URLCase}-us-state-map-medium.png`}
                  fill
                  alt={`Pictorial representation of the map of ${state2}`}
                />
              </div>
            </div>
            <div clasaName="flag-flag-text">
              <div clasaName="flag-text">Flag</div>
              <div clasaName="second-entity-flag">
                <Image
                  src={`/images/${state2URLCase}-us-state-flag-medium.png`}
                  fill
                  alt={`Image illustrating the flag of ${state2}`}
                />
              </div>
            </div>
            <div clasaName="coat-arms-coat-arms-text">
              <div clasaName="emblem-text">State Seal</div>
              <div clasaName="second-entity-emblem">
                <Image
                  src={`/images/${state2URLCase}-us-state-seal-medium.png`}
                  fill
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