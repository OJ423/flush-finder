
import DropDownPicker from "react-native-dropdown-picker";
import GeoLocationButton from "../components/GeoLocationButton";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";
import { Block, Button, Icon, Text, theme,Switch } from "galio-framework";
import FilterForm from "../components/FilterForm";
import { useContext, useState } from "react";




const { height, width } = Dimensions.get("screen");
const backGroungImg = require("../../assets/HomeBackground.jpg");

export default function HomeScreen() {
  const [isUnisexOnly, setIsUnisexOnly] = useState(false);
  const [isAccessibleOnly, setIsAccessibleOnly] = useState(true);
  const [hasChangingTable, setHasChangingTable] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
              <Button>Placeholder for dropdown picker</Button>
            </Block>
            <Block flex={1}>
             <GeoLocationButton/>
            </Block>
          </Block>
          <FilterForm/>
          <Block center>
            <Button shadowless style={styles.button} onPress={() => {console.log('clicked')}}>
              SUBMIT
            </Button>
          </Block>
        </Block>
      </Block>
    </Block>
  );
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
