import { StyleSheet } from "react-native";
import { Block, Button } from "galio-framework";

import MapRender from "../MapRender";

export default function FullMapView({setFullMap}) {
    return(
        <Block style={styles.container}>
          <Block style={styles.mapContainer} >
            <MapRender mapStyle={styles.fullMap} />
          </Block>
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
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    mapContainer: {
      width: "100%",
      height: "70%",
    },
    fullMap: {
      flex: 1,
    },
    button: {
      position: "absolute",
      bottom: 20,
      width: 200,
      alignSelf: "center",
    },
  });