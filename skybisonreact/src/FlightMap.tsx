import React from 'react';
import { MapContainer, TileLayer, Polyline, Marker } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Plane from './Graphics/airplane-png-10.png';
import Cross from './Graphics/red-cross.png';

interface FlightMapProps {
  status: 'On time' | 'Delayed' | 'Canceled';
  flightPath: LatLngExpression[];
}


const FlightMap: React.FC<FlightMapProps> = ({ status, flightPath }) => {
  let pathOptions = {
    color: 'green',
    dashArray: ''
  };
  let markerPosition: LatLngExpression = flightPath[Math.floor(flightPath.length / 2)]; // Midpoint for the 'X'
  let markerIcon = planeIcon;

  if (status === 'Delayed') {
    pathOptions.color = 'yellow';
    pathOptions.dashArray = '10, 10'; // Creates dashed line effect
  } else if (status === 'Canceled') {
    pathOptions.color = 'red';
    markerIcon = canceledIcon; // Assuming you have a 'canceledIcon' for this status
  }

  return (
    <MapContainer center={markerPosition} zoom={5} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={flightPath[0]} icon={planeIcon} />
      {status !== 'Canceled' && <Polyline pathOptions={pathOptions} positions={flightPath} />}
      {status === 'Canceled' && <Marker position={markerPosition} icon={markerIcon} />} {/* Show 'X' marker for canceled flights */}
    </MapContainer>
  );
};

export default FlightMap;

// Define your planeIcon and canceledIcon here
const planeIcon = L.icon({
    iconUrl: Plane,
    iconSize: [38, 38], // Size of the icon in pixels
    iconAnchor: [19, 19], // Point of the icon which will correspond to marker's location
    popupAnchor: [0, -19], // Point from which the popup should open relative to the iconAnchor
  });
  //... define the icon properties

const canceledIcon = L.icon({
    iconUrl: Cross,
    iconSize: [38, 38], // Size of the icon in pixels
    iconAnchor: [19, 19], // Point of the icon which will correspond to marker's location
    popupAnchor: [0, -19], // Point from which the popup should open relative to the iconAnchor
  });
