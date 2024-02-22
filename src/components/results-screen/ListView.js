import { Block, DeckSwiper, theme, Text} from "galio-framework";
import ResultsMap from "./ResultsMap";
import List from "./List";
import { StyleSheet, View } from "react-native";

export default function ListView({ setFullMap }) {
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

