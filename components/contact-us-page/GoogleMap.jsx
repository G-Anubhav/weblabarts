"use client";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useState } from "react";

const containerStyle = {
	width: "100%",
	height: "100%",
};

const center = {
	lat: 28.755571457951692,
	lng: 77.19039276308075,
};

function MyGoogleMap() {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "",
	});

	const [map, setMap] = useState(null);

	const onLoad = useCallback(function callback(map) {
		const bounds = new window.google.maps.LatLngBounds(center);
		map.fitBounds(bounds);

		setMap(map);
	}, []);

	const onUnmount = useCallback(function callback(map) {
		setMap(null);
	}, []);
	return (
		<div className="responsive-map">
			{isLoaded ? (
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={center}
					zoom={50}
					onLoad={onLoad}
					onUnmount={onUnmount}
				>
					<Marker position={{ lat: center.lat, lng: center.lng }} />
				</GoogleMap>
			) : (
				<>
					<h1>Google Map</h1>
				</>
			)}
		</div>
	);
}

export default MyGoogleMap;
