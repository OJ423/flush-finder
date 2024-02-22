import { useState, useContext, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator, Image, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { OriginLocationContext } from "../context/OriginLocation";
import { ToiletResponseContext } from "../context/ToiletResponse";

const locationPin = require("../../assets/locationPin.png")
const toiletPin = require("../../assets/toiletPin.png")


const { height, width } = Dimensions.get("screen")

export default function MapRender({mapStyle}) {
  const [initialRegion, setInitialRegion] = useState({});

  const [isLoading, setIsLoading] = useState(true);


  const { originLocation } = useContext(OriginLocationContext);
  const { toiletResponse } = useContext(ToiletResponseContext);

  useEffect(() => {
    setIsLoading(true);
    if (originLocation) {
      const newInitialRegion = {
        latitude: originLocation.latitude,
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
        <MapView style={mapStyle} customMapStyle={customMapStyle} initialRegion={initialRegion}>
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
                  <Image source={toiletPin} style={{height: 30, width:30}} />
                </Marker>
              ))}
        </MapView>
      )}
    </View>
  );
}

const customMapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ec3b9"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});