import DropDownPicker from "react-native-dropdown-picker";
import GeoLocationButton from "../components/GeoLocationButton";
import React, { useCallback, useEffect, useContext, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";
import { Block, Button, Icon, Text, theme, Switch } from "galio-framework";
import FilterForm from "../components/FilterForm";
import * as SplashScreen from "expo-splash-screen";

const { height, width } = Dimensions.get("screen");
const backGroungImg = require("../../assets/HomeBackground.jpg");

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  const [isUnisexOnly, setIsUnisexOnly] = useState(false);
  const [isAccessibleOnly, setIsAccessibleOnly] = useState(false);
  const [hasChangingTable, setHasChangingTable] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function prepare() {
      try {
        // Makes the city api call here, put 'await '
        // just a promise to check if the splashscreen work cab renove when we have api calls 
        await new Promise((resolve) => setTimeout(resolve, 500));
      } catch (e) {
      } finally {
        setIsLoading(false);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isLoading === false) {
      await SplashScreen.hideAsync();
    }
  }, [isLoading]);

  if (isLoading) {
    return null;
  }

  return (
    <Block flex style={styles.container} onLayout={onLayoutRootView}>
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
              <GeoLocationButton />
            </Block>
          </Block>
          <FilterForm
            isAccessibleOnly={isAccessibleOnly}
            setIsAccessibleOnly={setIsAccessibleOnly}
            hasChangingTable={hasChangingTable}
            setHasChangingTable={setHasChangingTable}
            isUnisexOnly={isUnisexOnly}
            setIsUnisexOnly={setIsUnisexOnly}
          />
          <Block center>
            <Button
              shadowless
              style={styles.button}
              onPress={() => {
                console.log(isAccessibleOnly, isUnisexOnly, hasChangingTable);
              }}
            >
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
