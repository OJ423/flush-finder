import { Block, DeckSwiper, theme, Text} from "galio-framework";
import ResultsMap from "./ResultsMap";
import List from "./List";
import { StyleSheet, View } from "react-native";

export default function ListView({ setFullMap }) {
    const elements = [
        <View style={{ backgroundColor: '#B23AFC', height: 250, width: 250 }}>
          <Text>You wanna see a cool component?</Text>
          <Text>Galio has this cool Deck Swiper</Text>
        </View>,
        <View style={{ backgroundColor: '#FE2472', height: 250, width: 250 }}>
          <Text>What did you expect?</Text>
          <Text>This React Native component works perfectly</Text>
        </View>,
        <View style={{ backgroundColor: '#FF9C09', height: 250, width: 250 }}>
          <Text>Maybe you want to build the next Tinder</Text>
        </View>,
        <View style={{ backgroundColor: '#45DF31', height: 250, width: 250 }}>
          <Text>or maybe you just want a nice deck swiper component</Text>
          <Text>Galio has everything sorted out for you</Text>
        </View>
      ];
  return (
    <>
      <Block style={styles.container} safe top>
        <Block  flex center>
          <ResultsMap setFullMap={setFullMap} />
        </Block>
        <Block shadow flex center>
          <List />
        </Block>
      </Block>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
    //   backgroundColor: "black",
    }})

