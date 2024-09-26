import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner'
import Image from 'next/image'

function PictorialRepresentation({ country1, country2, country1URLCase, country2URLCase }) {
    return (
      <>
        <AdsHeaderBanner />

        <div className="pictorial-representation">
          <h2 className="pages-h2">Pictorial Representation</h2>
        </div>

        <div className="maps-flags-emblem">
          <div className="first-entity-map-flag-emblem-pictorial">
            <div className="first-entity-name-pages-comparison first-entity-name-maps-flags-emblem">
              {country1}
            </div>

            <div className="horizontal-line"></div>

            <div className="globe-map-flag-emblem-first-entity">
              <div className="globe-globe-text">
                <div className="globe-text">Map in Globe</div>

                <div className="first-entity-globe">
                  <Image
                    src={`/images/${country1URLCase}-in-world-map-medium.png`}
                    layout="fill"
                    objectFit="contain"
                    alt={`Pictorial representation of the map of ${country1} in the world map`}
                  />
                </div>
              </div>

              <div className="map-map-text">
                <div className="map-text">Map</div>

                <div className="first-entity-map">
                  <Image
                    src={`/images/${country1URLCase}-map-medium.png`}
                    layout="fill"
                    objectFit="contain"
                    alt={`Pictorial representation of map of ${country1}`}
                  />
                </div>
              </div>

              <div className="flag-flag-text">
                <div className="flag-text">Flag</div>

                <div className="first-entity-flag">
                  <Image
                    src={`/images/${country1URLCase}-flag-medium.png`}
                    layout="fill"
                    objectFit="contain"
                    alt={`Image illustrating the flag of ${country1}`}
                  />
                </div>
              </div>

              <div className="coat-arms-coat-arms-text">
                <div className="emblem-text">Coat of Arms</div>

                <div className="first-entity-emblem">
                  <Image
                    src={`/images/${country1URLCase}-coat-of-arms-medium.png`}
                    layout="fill"
                    objectFit="contain"
                    alt={`Image showing the coat of arms of ${country1}`}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="second-entity-map-flag-emblem-pictorial">
            <div className="second-entity-name-pages-comparison second-entity-name-maps-flags-emblem">
              {country2}
            </div>

            <div className="horizontal-line"></div>

            <div className="globe-map-flag-emblem-second-entity">
              <div className="globe-globe-text">
                <div className="globe-text">Map in Globe</div>

                <div className="second-entity-globe">
                  <Image
                    src={`/images/${country2URLCase}-in-world-map-medium.png`}
                    layout="fill"
                    objectFit="contain"
                    alt={`Pictorial representation of the map of ${country2} in the world map`}
                  />
                </div>
              </div>

              <div className="map-map-text">
                <div className="map-text">Map</div>

                <div className="second-entity-map">
                  <Image
                    src={`/images/${country2URLCase}-map-medium.png`}
                    layout="fill"
                    objectFit="contain"
                    alt={`Pictorial representation of map of ${country2}`}
                  />
                </div>
              </div>

              <div className="flag-flag-text">
                <div className="flag-text">Flag</div>

                <div className="second-entity-flag">
                  <Image
                    src={`/images/${country2URLCase}-flag-medium.png`}
                    layout="fill"
                    objectFit="contain"
                    alt={`Image illustrating the flag of ${country2}`}
                  />
                </div>
              </div>

              <div className="coat-arms-coat-arms-text">
                <div className="emblem-text">Coat of Arms</div>

                <div className="second-entity-emblem">
                  <Image
                    src={`/images/${country2URLCase}-coat-of-arms-medium.png`}
                    layout="fill"
                    objectFit="contain"
                    alt={`Image showing the coat of arms of ${country2}`}
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