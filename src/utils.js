import * as Location from "expo-location";

export default function getCurrentLocation(setOriginLocation, props){

    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setOriginLocation({latitude:location.coords.latitude, longitude: location.coords.longitude, ada: props.ada, unisex: props.unisex, changingTable:props.changing_table});
    };
  
    getLocation();
  }

  