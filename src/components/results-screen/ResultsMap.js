import { StyleSheet } from "react-native";
import { Block, Button } from "galio-framework";

import MapRender from "../MapRender";

export default function ResultsMap ({setFullMap}) {
    return (
        <Block flex center>
            <MapRender mapStyle={styles.resultsMap} />

            <Button
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
      width: 390,
      height: 250,
  },
  button: {
      width: 200,
      marginTop: 20
  },
});