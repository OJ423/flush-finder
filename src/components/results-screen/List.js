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
          <Block flex >
            <Block flex={2} space="around" card >
              <Text>{name}</Text>
            </Block>
          </Block>
          <Block right flex={1} card middle space="around" style>
            <Text>{distance.toFixed(2)} miles</Text>
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

  // function renderHeader(section, _, isActive) {
  //   return (
  //     <Block card style={_ === 0 ? styles.accordZero : styles.accordHeader}>
  //       <Text style={styles.accordTitle}>{section.title}</Text>
  //       <Icon
  //         name={isActive ? "up" : "down"}
  //         size={20}
  //         color="#bbb"
  //         family="AntDesign"
  //       />
  //     </Block>
  //   );
  // }

  // function renderContent(section, _, isActive) {
  //   return <View style={styles.accordBody}>{section.content}</View>;
  // }

  // function handleOnToggle() {
  //   LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  // }

  // console.log(data)
  return (
    // <AccordionList
    //   list={data}
    //   header={renderHeader}
    //   body={renderContent}
    //   onToggle={handleOnToggle}
    // />
    <Accordion dataArray={data} />
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
