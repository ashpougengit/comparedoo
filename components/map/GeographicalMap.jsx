import React from 'react'
import dynamic from 'next/dynamic';
// import classes from './geographycal-map.module.css'
import AdsHeaderBanner from '../ads/AdsHeaderBanner';

const LeafletMap = dynamic(() => import('@/components/map/LeafletMap'), { ssr: false });

function GeographicalMap({ entity1, entity2, city1, city2 }) {
    return (
        <>
            <div className="geographical-map">
                <h2 className="pages-h2">Geographical Map</h2>
            </div>
            <div className="content-first-section">
                <div className="map-section">
                    <LeafletMap
                        entity1={entity1}
                        entity2={entity2}
                        city1={city1}
                        city2={city2}
                    />
                </div>
            </div>
            <AdsHeaderBanner />
        </>
    )
}

export default GeographicalMap