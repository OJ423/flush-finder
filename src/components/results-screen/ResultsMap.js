import { StyleSheet, Dimensions } from "react-native";
import { Block, Button } from "galio-framework";

import MapRender from "../MapRender";
const { height, width } = Dimensions.get("screen")
export default function ResultsMap ({setFullMap, initialRegion, setInitialRegion, selectedToilet}) {
    return (
        <Block flex center>
            <MapRender mapStyle={styles.resultsMap} selectedToilet= {selectedToilet}/>
            <Button accessibilityLabel="full screen map view button" onlyIcon icon="arrowsalt" iconFamily="antdesign" iconSize={30} iconColor="#fff"
            style={styles.button}
            onPress={() => {
                setFullMap(true);
            }}
            >
            Full Map
            </Button>
        </Block>)
}

const styles = StyleSheet.create({
  resultsMap: {
      width: width,
      height: height / 1.5,
  },
  button: {
    width: 40,
    height: 40,
    position: "absolute",
    top: 20,
    left:20,
  },
});