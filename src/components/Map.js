// //
import ReactMapGL, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import Pin from "./Pin";
import { useState } from "react";
import classes from "./Map.module.css";

const Map = ({ tour }) => {
  console.log(tour);

  // const [viewport, setViewPort] = useState({
  //   latitude: 3.351, //tour?.startLocation.coordinantes[0],
  //   longitude: 6.5441, //tour?.startLocation.coordinantes[1],
  //   width: "100vw",
  //   height: "100vh",
  //   zoom: 10,
  // });

  const [popupInfo, setPopupInfo] = useState(null);

  // const pins = (

  // );

  return (
    <div className={classes.ma}>
      <ReactMapGL
        // {...viewport}
        initialViewState={{
          longitude: tour.startLocation.coordinates[1],
          latitude: tour.startLocation.coordinates[0],
        }}
        mapboxAccessToken={process.env.REACT_APP_NATOURS_MAPBOX_KEY}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        // style={{ width: "500px", height: "500px" }}
        // style={{ border: "2px solid red" }}
      >
        <GeolocateControl />
        <FullscreenControl />
        <NavigationControl />
        <ScaleControl />

        <Marker
          key={`marker-${tour.id}`}
          longitude={tour.startLocation.coordinates[1]}
          latitude={tour.startLocation.coordinates[0]}
          anchor="bottom"
          onClick={(e) => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(tour);
          }}
        >
          <Pin />
        </Marker>

        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.startLocation.coordinates[1])}
            latitude={Number(popupInfo.startLocation.coordinates[0])}
            onClose={() => setPopupInfo(null)}
          >
            <div>
              {popupInfo.startLocation.address} |{" "}
              <a
                target="_new"
                href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${popupInfo.startLocation.address}`}
              >
                Wikipedia
                {popupInfo.startLocation.coordinates[1]}
              </a>
            </div>
            <img width="100%" src={popupInfo.imageCover} alt="n" />
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
};

export default Map;

// const Map = () => {
//   let [viewPort, setViewPort] = useState({
//     latitude: 37.7577,
//     longitude: -122.4376,
//     zoom: 8,
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });

//   return (
//     <>
//       <ReactMapGL
//         mapboxApiAccessToken={process.env.REACT_APP_NATOURS_MAPBOX_KEY}
//         {...viewPort}
//         onViewPortChange={(newView) => setViewPort(newView)}
//       ></ReactMapGL>
//     </>
//   );
// };

// export default Map;
