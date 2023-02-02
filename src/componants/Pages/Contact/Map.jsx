import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function map() {
  const containerStyle = {
    width: "90%",
    height: "400px",
  };
  const center = {
    lat: 50.73627906581671, 
    lng: 3.1481157321615734,
  };
  return (
    <div className="positionMap">
      <LoadScript 
      >
    <GoogleMap

    mapContainerStyle={containerStyle}
    center={center}
    zoom={16}>

        <Marker
        position={center}>
        </Marker>
    </GoogleMap>
      </LoadScript>
      <p className="Tel">Téléphone : 03 20 23 84 65 </p>

      <p className="Adresse">Adresse : 297 Chau. Fernand Forest, 59200 Tourcoing</p>
    </div>
    
  );
}
