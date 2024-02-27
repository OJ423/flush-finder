import { useState, useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Image,
  Dimensions,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker} from "react-native-maps";

import { OriginLocationContext } from "../context/OriginLocation";
import { ToiletResponseContext } from "../context/ToiletResponse";
import { Block } from "galio-framework";

const locationPin = require("../../assets/locationPin.png");
const toiletPin = require("../../assets/toiletPin.png");

const { height, width } = Dimensions.get("screen");

export default function MapRender({ mapStyle, selectedToilet }) {
  
  const [initialRegion, setInitialRegion] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { originLocation } = useContext(OriginLocationContext);
  const { toiletResponse, setToiletResponse } = useContext(ToiletResponseContext);

  useEffect(() => {
    setIsLoading(true);
    if (originLocation && !selectedToilet) {
      const newInitialRegion = {
        latitude: originLocation.latitude,
        longitude: originLocation.longitude,
        latitudeDelta: 0.03,
        longitudeDelta: 0.03,
      };
      setInitialRegion(newInitialRegion);
      setIsLoading(false);
    } else {
      const newInitialRegion = {
        latitude: selectedToilet[0].latitude,
        longitude: selectedToilet[0].longitude,
        latitudeDelta: 0.0015,
        longitudeDelta: 0.0015,
      };
      setInitialRegion(newInitialRegion);
      setIsLoading(false);
    }

  }, [originLocation, selectedToilet]);

  return isLoading ? (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  ) : (
    <View style={styles.container}>
      {initialRegion && (
        <MapView
          style={mapStyle}
          customMapStyle={customMapStyle}
          initialRegion={initialRegion}
          key={initialRegion.latitude}
          provider={PROVIDER_GOOGLE}
        >
          {originLocation && (
            <Marker
              coordinate={{
                latitude: originLocation.latitude,
                longitude: originLocation.longitude,
              }}
              style={{ zIndex: 1000 }}
              title="Your Location"
            >
              <Image
                source={locationPin}
                style={{ height: 100, width: 100, zIndex: 1000 }}
              />
            </Marker>
          )}
          {!toiletResponse
            ? null
            : toiletResponse.map((toilet) => (
                <Marker
                  pinColor={"blue"}
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
                  description={toilet.comment}
                >
                  <Image source={toiletPin} style={{ height: 30, width: 30 }} />
                </Marker>
              ))}
        </MapView>
      )}
    </View>
  );
}

const customMapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#242f3e",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#746855",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#242f3e",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#263c3f",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#6b9a76",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#38414e",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#212a37",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9ca5b3",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#746855",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#1f2835",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#f3d19c",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        color: "#2f3948",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#17263c",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#515c6d",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#17263c",
      },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
