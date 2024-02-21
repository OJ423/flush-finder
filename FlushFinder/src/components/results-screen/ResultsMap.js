import { StyleSheet } from "react-native";
import { Block, Button } from "galio-framework";

import MapRender from "../MapRender";

export default function ResultsMap ({setFullMap}) {
    return (
        <Block style={styles.mapButtonContainer}>
            <MapRender mapStyle={styles.resultsMap} />

            <Button
            style={styles.button}
            shadowless
            onPress={() => {
                setFullMap(true);
            }}
            >
            Full Map
            </Button>
        </Block>)
}

const styles = StyleSheet.create({
    mapButtonContainer: {
        flex: 1/2,
      },
    resultsMap: {
      width: 390,
      height: 250,
    },
    button: {
      width: 390,
      justifyItems: "center"
    },
  });