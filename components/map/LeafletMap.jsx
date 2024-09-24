'use client'

import { Suspense, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import classes from '@/components/loading.module.css';

const LeafletMap = ({ entity1, entity2, city1, city2 }) => {

    useEffect(() => {
        const mapContainer = L.DomUtil.get('map');

        if (mapContainer && mapContainer._leaflet_id) {
            mapContainer._leaflet_id = null;
        }

        const validCity1 = city1 && city1.length === 2;
        const validCity2 = city2 && city2.length === 2;
        
        const centerLat = validCity1 && validCity2 ? (city1[0] + city2[0]) / 2 : (validCity1 ? city1[0] : 20);
        const centerLng = validCity1 && validCity2 ? (city1[1] + city2[1]) / 2 : (validCity1 ? city1[1] : 0);

        // const map = L.map('map').setView([centerLat, centerLng], 1);
        const map = L.map('map', {
            center: [centerLat, centerLng],
            zoom: validCity1 && validCity2 ? 3 : 4,
            zoomControl: false,
            dragging: false,
            scrollWheelZoom: false,
            doubleClickZoom: false,
            boxZoom: false,
            keyboard: false,
            tap: false,
        }).setView([centerLat, centerLng], 1);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        // L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
        //     attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
        // }).addTo(map);

        const circleMarkerOptions = {
            radius: 8,
            fillColor: "#ff7800",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        };

        if (validCity1) {
            const marker1 = L.circleMarker(city1, circleMarkerOptions).addTo(map);
            marker1.bindPopup(`${entity1}`);
        }

        if (validCity2) {
            const marker2 = L.circleMarker(city2, circleMarkerOptions).addTo(map);
            marker2.bindPopup(`${entity2}`);
        }

        return () => {
            if (map) {
                map.remove();
            }
        };
    }, [entity1, entity2, city1, city2]);

    return (
        <Suspense fallback={<p className={classes.loading}>Loading data...</p>}>
            <div id="map" style={{ height: '50rem', width: '90rem' }}></div>
        </Suspense>

    )
};

export default LeafletMap;
