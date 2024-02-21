import * as Location from "expo-location";

export default function getCurrentLocation(setOriginLocation, setInitialRegion){

    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setOriginLocation(location.coords);
    };
  
    getLocation();
  }

  