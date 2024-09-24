import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import Image from "next/image"

function PictorialRepresentation({ slug1, slug2, value1, value2, slug1URLCase, slug2URLCase }) {
    return (
        <>
            <AdsHeaderBanner />

            <div className="pictorial-representation">
                <h2 className="pages-h2">Pictorial Representation</h2>
            </div>

            <div className="maps-flags-emblem">
                <div className="first-entity-map-flag-emblem-pictorial-country-state">
                    <div
                        className="first-entity-name-pages-comparison first-entity-name-maps-flags-emblem">
                        {slug1}
                    </div>

                    <div className="horizontal-line"></div>

                    <div className="map-flag-emblem-country-state-first-entity">
                        <div className="map-map-text">
                            <div className="map-text">Map</div>

                            <div className="first-entity-map">
                                <Image
                                    src={`/images/${slug1URLCase}-map-medium.png`}
                                    fill alt={`Pictorial representation of map of ${slug1}`} />
                            </div>
                        </div>

                        <div className="flag-flag-text">
                            <div className="flag-text">Flag</div>

                            <div className="first-entity-flag">
                                <Image
                                    src={`/images/${slug1URLCase}-flag-medium.png`}
                                    fill alt={`Image illustrating the flag of ${slug1}`} />
                            </div>
                        </div>

                        <div className="coat-arms-coat-arms-text">
                            <div className="emblem-text">{value1 === 'country'? 'Coat of Arms / Emblem':'State Seal'}</div>

                            <div className="first-entity-emblem">
                                <Image
                                    src={`/images/${slug1URLCase}-${value1 === 'country'? 'coat-of-arms':'us-state-seal'}-medium.png`}
                                    fill alt={`Image showing the ${value1 === 'country'? 'Coat of Arms':'State Seal'} of ${slug1}`} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="second-entity-map-flag-emblem-pictorial-country-state">
                    <div
                        className="second-entity-name-pages-comparison second-entity-name-maps-flags-emblem">
                        {slug2}
                    </div>

                    <div className="horizontal-line"></div>

                    <div className="map-flag-emblem-country-state-second-entity">
                        <div className="map-map-text">
                            <div className="map-text">Map</div>

                            <div className="second-entity-map">
                                <Image
                                    src={`/images/${slug2URLCase}-map-medium.png`}
                                    fill alt={`Pictorial representation of map of ${slug2}`} />
                            </div>
                        </div>

                        <div className="flag-flag-text">
                            <div className="flag-text">Flag</div>

                            <div className="second-entity-flag">
                                <Image
                                    src={`/images/${slug2URLCase}-flag-medium.png`}
                                    fill alt={`Image illustrating the flag of ${slug2}`} />
                            </div>
                        </div>

                        <div className="coat-arms-coat-arms-text">
                            <div className="emblem-text">{value2 === 'country'? 'Coat of Arms / Emblem':'State Seal'}</div>

                            <div className="second-entity-emblem">
                                <Image
                                    src={`/images/${slug2URLCase}-${value2 === 'country'? 'coat-of-arms':'us-state-seal'}-medium.png`}
                                    fill alt={`Image showing the ${value2 === 'country'? 'Coat of Arms':'State Seal'} of ${slug2}`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PictorialRepresentation