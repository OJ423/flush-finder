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
import CityDropdown from "../components/CityDropdown";
import { useNavigation } from "@react-navigation/core";
import { OriginLocationContext } from "../context/OriginLocation";

const { height, width } = Dimensions.get("screen");
const backGroungImg = require("../../assets/HomeBackground.jpg");

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  const [isUnisexOnly, setIsUnisexOnly] = useState(false);
  const [isAccessibleOnly, setIsAccessibleOnly] = useState(false);
  const [hasChangingTable, setHasChangingTable] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [cityOriginLocation, setCityOriginLocation] = useState(null)
  const {setOriginLocation} = useContext(OriginLocationContext)

  const navigation = useNavigation();

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
            zIndex: 1,
          }}
          imageStyle= {{
            resizeMode: 'cover',
            position: 'absolute',
            bottom: 0,
          }}
        >
      <Block flex middle  style={styles.padded}>
        <Block flex style={{ zIndex: 2, justifyContent:"flex-end", marginBottom:150 }}>
          <Block>
            <Block>
              <Text color="white" size={50}>
                FlushFinder
              </Text>
            </Block>
            <Text size={16} color="rgba(255,255,255,0.6)">
              Find your nearest loo.
            </Text>
          </Block>
          <Block row>
            <Block style={styles.rowGap} safe flex={5}>
              <CityDropdown setCityOriginLocation={setCityOriginLocation}/>
            </Block>
            <Block style={styles.rowGap} flex={1}>
              <GeoLocationButton ada={isAccessibleOnly} unisex={isUnisexOnly} changing_table={hasChangingTable} />
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
          <Block style={styles.rowGap} center>
            <Button
              shadowless
              style={styles.button}
              onPress={() => {
                if(cityOriginLocation){
                  setOriginLocation({latitude: cityOriginLocation.latitude, longitude: cityOriginLocation.longitude, accessible: isAccessibleOnly, unisex: isUnisexOnly, changingTable: hasChangingTable})
                  navigation.navigate('Toilets Near You', {isAccessibleOnly, isUnisexOnly, hasChangingTable})
                }
              }}
            >
              SUBMIT
            </Button>
          </Block>
        </Block>
        </Block>
        </ImageBackground>
        </Block>
      </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  rowGap: {
    marginTop:20,
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
