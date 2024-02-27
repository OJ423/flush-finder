import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, StatusBar, StyleSheet } from "react-native";

import { Block } from "galio-framework";

import { ToiletResponseContext } from "../context/ToiletResponse";
import { OriginLocationContext } from "../context/OriginLocation";
import { AppReadyContext } from "../context/AppReady";

import FullMapView from "../components/results-screen/FullMapView";
import NoToiletResult from "../components/results-screen/NoToiletResult";
import { fetchCityToilets, fetchData } from "../api";
import ListView from "../components/results-screen/ListView";
import LoadingScreen from "../components/LoadingScreen";


export default function ResultScreen() {
  const [fullMap, setFullMap] = useState(false);
  const [selectedToilet, setSelectedToilet] = useState(null);
  const [initialRegion, setInitialRegion] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [noToilets, setNoToilets] = useState(false);

  const {appIsReady, setAppIsReady } = useContext(AppReadyContext)
  const { setToiletResponse } = useContext(ToiletResponseContext);
  const { originLocation } = useContext(OriginLocationContext);

  async function prepareDataForGeoLocation(){
    console.log('I am rendering geolocation')
    setNoToilets(false);
    setIsLoading(true);
    fetchData(originLocation)
    .then((response) => {
      let nearbyToilets
    try{  if(originLocation.changingTable) {
          nearbyToilets = response.filter((toilet) => {
          if(toilet.distance <= 10 && toilet.changing_table) {
            return toilet
          }
        })
      } else 
        nearbyToilets = response.filter((toilet) => {
        if (toilet.distance <= 10) {
          return toilet;
        }
      });
      if (nearbyToilets.length < 1) {
        setNoToilets(true);
      } else {
        setToiletResponse(nearbyToilets);
        setIsLoading(false);
        setNoToilets(false);
      }
    } catch (err) {
      console.log(err);
    } finally {

    }
  })}

  async function prepareDataForDropDownCities(){
    console.log('I am rendering dropdown')
    try {
      setAppIsReady(false)
      
      fetchCityToilets(originLocation)
          .then((toiletData) => {
            const cleanedData = toiletData.map((toilet) => {
              toilet.id = toilet._id;
              delete toilet._id;
              return toilet;
            });
            if (cleanedData.length < 1) {
              setNoToilets(true);
            } else {
              setToiletResponse(cleanedData);
              setIsLoading(false);
              setNoToilets(false);
            }
          })
    } catch(err){
          console.log(err);
        } finally {
          console.log(appIsReady,'hello')
          setAppIsReady(true)
        }
  }

  useEffect(() => {
    setNoToilets(false);
    setIsLoading(true);
    if (originLocation.city === undefined) {
      !Object.keys(originLocation).length
        ? null
        : prepareDataForGeoLocation()
    } else {
      !Object.keys(originLocation).length
        ? null : prepareDataForDropDownCities()
    }
  }, [originLocation]);

  return (
    <>
      {noToilets ? (
        <>
          <StatusBar />
          <NoToiletResult />
        </>
      ) : (
        <>
          <StatusBar />
          <Block flex style={styles.container}>
            {isLoading ? (
              <Block>
                <ActivityIndicator size="large" color="blue" />
              </Block>
            ) : fullMap ? (
              <FullMapView
                setFullMap={setFullMap}
                initialRegion={initialRegion}
                setInitialRegion={setInitialRegion}
              />
            ) : (
              <ListView
                setFullMap={setFullMap}
                initialRegion={initialRegion}
                setInitialRegion={setInitialRegion}
                setSelectedToilet={setSelectedToilet}
                selectedToilet={selectedToilet}
              />
            )}
          </Block>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  resultsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  mapButtonContainer: {
    flex: 1,
  },
  button: {
    width: 390,
  },
});
