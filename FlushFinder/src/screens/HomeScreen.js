
// import DropDownPicker from "react-native-dropdown-picker";
import GeoLocationButton from "../components/GeoLocationButton";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";
import { Block, Button, Icon, Text, theme } from "galio-framework";
import { Ionicons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("screen");
const backGroungImg = require("../../assets/HomeBackground.jpg");

export default class Onboarding extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Block flex center>
          <ImageBackground
            source={backGroungImg}
            style={{
              height: height,
              width: width,
              marginTop: "-55%",
              zIndex: 1,
            }}
          />
        </Block>
        <Block flex space="between" style={styles.padded}>
          <Block flex space="around" style={{ zIndex: 2 }}>
            <Block>
              <Block>
                <Text color="white" size={60}>
                  FlushFinder
                </Text>
              </Block>
              <Text size={16} color="rgba(255,255,255,0.6)">
                Find your nearest loo.
              </Text>
            </Block>
            <Block row>
              <Block flex={5}>
                {/* <DropDownPicker /> */}
              </Block>
              <Block flex={1}>
                <Button onlyIcon icon="direction" iconFamily="Entypo" iconSize={25} iconColor="#fff" style={{ width: 40, height: 40 }}>Use your current location</Button>
              </Block>
            </Block>
            <Block center>
               <GeoLocationButton/>
              <Button shadowless style={styles.button} onPress={() => {}}>
                SUBMIT
              </Button>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
});
