import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export const Map = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {/* You can add Markers here to display specific locations */}
      {/* <Marker position={[51.505, -0.09]}>
        <Popup>
          A popup for the marker!
        </Popup>
      </Marker> */}
    </MapContainer>
  );
};
