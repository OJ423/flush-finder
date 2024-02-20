import { useState, useContext, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { OriginLocationContext } from "../context/OriginLocation";
import { ToiletResponseContext } from "../context/ToiletResponse";

const locationPin = require("../../assets/locationPin.png")
const toiletPin = require("../../assets/toiletPin.png")

export default function MapRender() {
  const [initialRegion, setInitialRegion] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  const { originLocation } = useContext(OriginLocationContext);
  const { toiletResponse } = useContext(ToiletResponseContext);

  useEffect(() => {
    setIsLoading(true);
    if (originLocation) {
      const newInitialRegion = {
        latitude: originLocation.latitude + 0.0075,
        longitude: originLocation.longitude,
        latitudeDelta: 0.03,
        longitudeDelta: 0.03,
      };
      setInitialRegion(newInitialRegion);
      setIsLoading(false);
    }
  }, [originLocation]);

  return isLoading ? (
    <View>
      <ActivityIndicator size="large" color="blue" />
    </View>
  ) : (
    <View style={styles.container}>
      {initialRegion && (
        <MapView style={styles.map} initialRegion={initialRegion}>
          {originLocation && (
            <Marker
              coordinate={{
                latitude: originLocation.latitude,
                longitude: originLocation.longitude,
              }}
              style={{zIndex: 1000}}
              title="Your Location"
            >
                <Image source={locationPin} style={{height: 100, width:100, zIndex: 1000}} />
            </Marker>
          )}
          {!toiletResponse
            ? null
            : toiletResponse.map((toilet) => (
                <Marker
                pinColor={'blue'}
                  key={toilet.id}
                  draggable
                  coordinate={{
                    latitude: toilet.latitude,
                    longitude: toilet.longitude,
                  }}
                  onDragEnd={(event) =>
                    alert(JSON.stringify(event.nativeEvent.coordinate))
                  }
                  title={toilet.name}
                  description={toilet.directions}
                >
                  <Image source={toiletPin} style={{height: 60, width:60}} />
                </Marker>
              ))}
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
    paddingTop: 60,
  },
  map: {
    width: 350,
    height: 400,
  },
});
