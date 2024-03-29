import { Button } from "galio-framework";
import QuotesCarousel from "../components/QuotesCarousel";
import Riddles from "../components/Riddles";
import { useState } from "react";
import { ImageBackground, View, Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("screen");
const bkgImg = require('../../assets/on-the-loo-bkg.jpg');


export default function Extras() {
  const [seeQuotes, setSeeQuotes] = useState(true);
  const [hideButton, setHideButton] = useState(false);

  return (
    <View style={styles.screenContainer}>
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
      <View style={styles.container}>
        <View style={styles.carouselContainer}>
          {seeQuotes ? (
            <QuotesCarousel setHideButton={setHideButton} />
          ) : (
            <Riddles setHideButton={setHideButton}/>
          )}
        </View>
        {hideButton ? null : (
        <View style={styles.buttonContainer}>         
            <Button
              style={styles.button}
              onPress={() => setSeeQuotes(!seeQuotes)}
            >
              {seeQuotes ? "See riddles" : "See Quotes"}
            </Button> 
        </View>
        )}
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: "black",
    flex: 1,
  },
  container: {
    position: "absolute",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    top: 170,
  },
  carouselContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 15,
  },

  buttonContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },

  button: {
    height: 35,
  },
});
