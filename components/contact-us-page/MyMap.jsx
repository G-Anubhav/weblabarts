"use client";
import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";

function MyMap() {
	const position = { lat: 28.755571457951692, lng: 77.19039276308075 };
	return (
		<div className="responsive-map">
			<APIProvider apiKey={""}>
				<Map defaultCenter={position} defaultZoom={10} mapId="DEMO_MAP_ID">
					<AdvancedMarker position={position} />
				</Map>
			</APIProvider>
		</div>
	);
}

export default MyMap;

