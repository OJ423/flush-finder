import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

import { Block, Button } from "galio-framework";

import { ToiletResponseContext } from "../context/ToiletResponse";
import { OriginLocationContext } from "../context/OriginLocation";

import MapRender from "../components/MapRender";
import FullMapView from "../components/results-screen/FullMapView";
import ResultsMap from "../components/results-screen/ResultsMap";
import NoToiletResult from "../components/results-screen/NoToiletResult";

import { fetchData } from "../api";
import List from "../components/results-screen/List";
import ListView from "../components/results-screen/ListView";

export default function ResultScreen() {
  const [fullMap, setFullMap] = useState(false);

  const { toiletResponse, setToiletResponse } = useContext(
    ToiletResponseContext
  );
  const { originLocation } = useContext(OriginLocationContext);
  const [isLoading, setIsLoading] = useState(true);
  const [noToilets, setNoToilets] = useState(false);

  useEffect(() => {
    setNoToilets(false);
    setIsLoading(true);
    setToiletResponse(null);
    !Object.keys(originLocation).length
      ? null
      : fetchData(originLocation)
          .then((response) => {
            const nearbyToilets = response.map((toilet) => {
              if(toilet.distance <= 10) {
                return toilet
              }
            })
            if (nearbyToilets.length < 1) {
              setNoToilets(true);
            } else {
              setToiletResponse(nearbyToilets);
              setIsLoading(false);
              setNoToilets(false);
            }
          })
          .catch((err) => {
            console.log(err);
          });
  }, [originLocation]);

  return (
    <>
      {noToilets ? (
        <NoToiletResult />
      ) : (
        <Block flex style={styles.container}>
          {isLoading ? (
            <Block>
              <ActivityIndicator size="large" color="blue" />
            </Block>
          ) : fullMap ? (
            <FullMapView setFullMap={setFullMap} />
          ) : (
            <ListView setFullMap={setFullMap} />
          )}
        </Block>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  resultsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mapButtonContainer: {
    flex: 1,
  },

  button: {
    width: 390,
  },
});
