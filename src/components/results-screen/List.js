import { Icon, Block, Card, Text } from "galio-framework";
import { useContext } from "react";
import { ToiletResponseContext } from "../../context/ToiletResponse";
import { AccordionList } from "accordion-collapse-react-native";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Button,
  Platform,
  UIManager,
  LayoutAnimation,
} from "react-native";

export default function List() {
  const { toiletResponse } = useContext(ToiletResponseContext);
  const data = toiletResponse.map(
    ({
      accessible,
      changing_table,
      city,
      directions,
      distance,
      name,
      street,
      unisex,
      state,
    }) => {
      const obj = {};
      obj.title = `${name}`;
      obj.content = (
        <>
          <Text>Address: {street}</Text>
          <Text>Direction: {directions}</Text>
        </>
      );

      return obj;
    }
  );

  function renderHeader(section, _, isActive) {
    return (
      <Block card style={_ === 0 ? styles.accordZero : styles.accordHeader}>
        <Text style={styles.accordTitle}>{section.title}</Text>
        <Icon
          name={isActive ? "up" : "down"}
          size={20}
          color="#bbb"
          family="AntDesign"
        />
      </Block>
    );
  }

  function renderContent(section, _, isActive) {
    return <View style={styles.accordBody}>{section.content}</View>;
  }

  function handleOnToggle() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }

  // console.log(data)
  return (
    <AccordionList
      list={data}
      header={renderHeader}
      body={renderContent}
      onToggle={handleOnToggle}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  accordZero: {
    padding: 10,
    backgroundColor: "#eee",
    color: "#eee",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    // marginBottom: 4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  accordHeader: {
    padding: 10,
    backgroundColor: "#eee",
    color: "#eee",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  accordTitle: {
    fontSize: 20,
  },
  accordBody: {
    padding: 12,
  },
  textSmall: {
    fontSize: 16,
  },
  seperator: {
    height: 12,
  },
});
