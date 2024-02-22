import {useNavigation} from "@react-navigation/core"
import { Block, Button, Icon, Text, theme, StatusBar } from "galio-framework";
import { useContext } from "react";
import { Dimensions, StyleSheet, View, ImageBackground } from "react-native";
import { ToiletResponseContext } from "../../context/ToiletResponse";

const { height, width } = Dimensions.get("screen");
const bkgImg = require('../../../assets/no-toilet-bkg.jpg');

export default function NoToiletResult ({setNoToilets}) {
  const navigation = useNavigation();

  return (
    <Block style={styles.container}>
      <ImageBackground
            source={bkgImg}
            style={{
              height: height,
              width: width,
              zIndex: 1,
              flex: 1,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
        <Text h1 style={styles.paddedP}>Oh no!</Text>
        <Text p style={styles.paddedP}>No toilets found near you</Text> 
        <Text p style={styles.paddedP}>Try our city selector and see if it displays a toilet near you.</Text>   
        <Button
          shadowless
          style={styles.button}
          onPress={() => {
            navigation.navigate('Search')
          }}
        >
          Search Cities
        </Button>
      </ ImageBackground>   
    </Block>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
  },
  button: {
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  paddedP: {
    padding: 10,
    color: "white",
    textAlign: "center",
  }
});
