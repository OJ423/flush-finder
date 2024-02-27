import { Block, Icon, Text } from "galio-framework";
import { View, Image, StyleSheet, Animated} from "react-native";

export default function LoadingScreen() {
  const loadingScreen = require("../../assets/toilet-logo.png");
  return (
    <>
      <Block center>
        <Text>Loading...</Text>
        <Image source={loadingScreen} resizeMode="contain"/>
      </Block>
    </>
  );
}

