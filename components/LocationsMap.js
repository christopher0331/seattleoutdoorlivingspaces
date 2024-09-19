import React, { useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import styles from '../styles/LocationsMap.module.css';

const mapContainerStyle = {
    width: '80%',
    height: '400px',
    borderRadius: '12px', // Added rounded corners
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Added subtle shadow
    overflow: 'hidden', // Ensure the map doesn't overflow the rounded corners
};

const center = {
    lat: 47.5985273, // GreenView Solutions latitude
    lng: -122.3351692 // GreenView Solutions longitude
};

const libraries = ["places", "marker"];

const LocationsMap = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        libraries: libraries,
    });

    const [map, setMap] = useState(null);

    const onLoad = useCallback(function callback(map) {
        map.setZoom(12);
        map.setCenter(center);
        setMap(map);
    }, []);

    const onUnmount = useCallback(function callback(map) {
        setMap(null);
    }, []);

    const mapOptions = {
        mapId: process.env.NEXT_PUBLIC_GOOGLE_MAP_ID,
        zoom: 12,
        disableDefaultUI: true,
        zoomControl: true,
    };

    const addMarker = async (map) => {
        if (map && window.google) {
            const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
            new AdvancedMarkerElement({
                position: center,
                map: map,
                title: "GreenView Solutions"
            });
        }
    };

    React.useEffect(() => {
        if (map) {
            addMarker(map);
        }
    }, [map]);

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <div className={styles.mapWrapper}>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                options={mapOptions}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                {/* Child components, such as markers, info windows, etc. */}
            </GoogleMap>
        </div>
    );
};

export default React.memo(LocationsMap);
