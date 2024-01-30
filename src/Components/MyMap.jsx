import React, { useEffect } from 'react'; 
import './my-map.css';
import maplibre from 'maplibre-gl';

function MyMap() {
  let mapContainer;

  useEffect(() => {
    const myAPIKey = '50e84aa977a340c48baa7bbf6fefa3eb'; 
    const mapStyle = 'https://maps.geoapify.com/v1/styles/osm-carto/style.json';
    let marker;

    const initialState = {
      lng: 26.175283,
      lat: 44.425322,
      zoom: 16.7
    };

    const map = new maplibre.Map({
      container: mapContainer,
      style: `${mapStyle}?apiKey=${myAPIKey}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
      interactive: false,
        
      });
      
  }, [mapContainer]);
  
//   const markerIcon = L.icon({
//     iconUrl: `https://api.geoapify.com/v1/icon/?type=material&color=%23b44444&icon=cloud&textSize=small&noWhiteCircle&apiKey=${myAPIKey}`,
//     iconSize: [31, 46], // size of the icon
//     iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
//     popupAnchor: [0, -45] // point from which the popup should open relative to the iconAnchor
//   });
//   const zooMarker = L.marker([48.096980, 11.555466], {
//     icon: markerIcon
//   }).addTo(map);
  

  return (
    <div className="map-container w-full h-full " ref={el => mapContainer = el}>
    </div>
  )
}

export default MyMap;
