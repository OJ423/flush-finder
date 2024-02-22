import { Accordion, Icon, Block, Card, Text } from "galio-framework";
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
      obj.title = (
        <>
        <Block flex row style={styles.accordTitle}>
          <Block left row style={styles.titleDivide}>
            <Text style={styles.titleDivide}>{name.substring(0,25)}</Text>
          </Block>
          <Block right flex={1} row middle space="around">
            <Text muted>{distance.toFixed(2)} miles</Text>
          </Block>
        </Block>
        </>
      );
      obj.content = (
        <>
          <Block>
            <Text>Address: {street}</Text>
            <Text>
              Direction:{" "}
              {(directions === null) | (directions === "") ? "N/A" : directions}
            </Text>
            <Text>
              Unisex:{" "}
              {unisex === true ? (
                <>
                  <Text>Yes</Text>
                  <Icon
                    name={"check-circle"}
                    size={15}
                    color="#3CB043"
                    family="Feather"
                  />
                </>
              ) : (
                <>
                  <Text>No</Text>
                  <Icon
                    name={"circle"}
                    size={15}
                    color="#bbb"
                    family="Feather"
                  />
                </>
              )}{" "}
            </Text>
            <Text>
              Accessiblity-friendly:
              {accessible === true ? (
                <>
                  <Text>Yes</Text>
                  <Icon
                    name={"check-circle"}
                    size={15}
                    color="#3CB043"
                    family="Feather"
                  />
                </>
              ) : (
                <>
                  <Text>No</Text>
                  <Icon
                    name={"circle"}
                    size={15}
                    color="#bbb"
                    family="Feather"
                  />
                </>
              )}{" "}
            </Text>
            <Text>
              Has changing table:
              {changing_table === true ? (
                <>
                  <Text>Yes</Text>
                  <Icon
                    name={"check-circle"}
                    size={15}
                    color="#3CB043"
                    family="Feather"
                  />
                </>
              ) : (
                <>
                  <Text>No</Text>
                  <Icon
                    name={"circle"}
                    size={15}
                    color="#bbb"
                    family="Feather"
                  />
                </>
              )}{" "}
            </Text>
          </Block>
          <Button title="See more..." />
        </>
      );

      return obj;
    }
  );

  return (
    <Accordion dataArray={data} opened={null} />
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
    borderBottomWidth:1,
    paddingBottom:10,
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
  titleDivide: {
    marginRight:10,
    textAlign:"left"
  },
});
