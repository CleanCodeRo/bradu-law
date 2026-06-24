import {useEffect, useRef} from 'react';
import './my-map.css';

export default function MyMap() {
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);

    useEffect(() => {
        let cancelled = false;
        import('maplibre-gl').then((maplibre) => {
            if (cancelled || !mapContainerRef.current) return;
            const myAPIKey = '50e84aa977a340c48baa7bbf6fefa3eb';
            const mapStyle = 'https://maps.geoapify.com/v1/styles/osm-carto/style.json';

            const initialState = {
                lng: 26.175283,
                lat: 44.425322,
                zoom: 9
            };

            mapRef.current = new maplibre.default.Map({
                container: mapContainerRef.current,
                style: `${mapStyle}?apiKey=${myAPIKey}`,
                center: [initialState.lng, initialState.lat],
                zoom: initialState.zoom,
                interactive: false,
            });
        });

        return () => {
            cancelled = true;
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, []);

    return <div className="map-container w-full h-full " ref={mapContainerRef}/>
};
