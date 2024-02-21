import { StyleSheet } from "react-native";
import { Block, Button } from "galio-framework";

import MapRender from "../MapRender";

export default function FullMapView({setFullMap}) {
    return(
        <Block style={styles.container}>
            <MapRender mapStyle={styles.fullMap} />

            <Button
              style={styles.button}
              shadowless
              onPress={() => {
                setFullMap(false);
              }}
            >
              Return To List View
            </Button>
            </Block>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  fullMap: {
    width: 390,
    height: 700,
    marginTop: 20
  },
  button: {
    width: 200,
    marginTop: 20
  },
});