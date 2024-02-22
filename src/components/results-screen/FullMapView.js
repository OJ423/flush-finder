import { StyleSheet, Dimensions } from "react-native";
import { Block, Button } from "galio-framework";

import MapRender from "../MapRender";

const { height, width } = Dimensions.get("screen")

export default function FullMapView({setFullMap}) {
    return(
        <Block style={styles.container}>
            <MapRender mapStyle={styles.fullMap}/>

            <Button accessibilityLabel="List View button" onlyIcon icon="shrink" iconFamily="antdesign" iconSize={30} iconColor="#fff"
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
    width: width,
    height: height,
  },
  button: {
    width: 40,
    height: 40,
    position: "absolute",
    top: 20,
    left:20,
  },
});