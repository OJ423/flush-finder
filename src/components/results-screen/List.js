import { Accordion, Icon, Block, Text } from "galio-framework";
import { useContext } from "react";
import { ToiletResponseContext } from "../../context/ToiletResponse";
import React from "react";
import { StyleSheet,Dimensions } from "react-native";
import VotePanel from "../VotePanel";

const { height, width } = Dimensions.get("screen");

export default function List({ setSelectedToilet, selectedToilet }) {
  const { toiletResponse } = useContext(ToiletResponseContext);

  const data = toiletResponse.map(
    ({
      accessible,
      changing_table,
      city,
      distance,
      name,
      street,
      unisex,
      latitude,
      longitude,
      id,
      votes,
      comment_count,
      comment,
    }) => {
      const obj = {};
      obj.title = (
        <>
          <Block flex={4} width={width - 80} row style={styles.accordTitle}>
            <Block flex={2} left row style={styles.titleDivide}>
              <Text style={styles.titleDivide}>{name.substring(0, 30)}</Text>
            </Block>
            <Block right flex={1} row middle space="around">
              <Text muted style={{ textAlign: "right" }}>
                {distance.toFixed(2)} miles
              </Text>
            </Block>
          </Block>
        </>
      );
      obj.content = (
        <>
          <Block width={width-80} space="between"  >
            <Text muted bold={true}>{name}</Text>
            <Text>Address: {street}</Text>
          <Block center row safe >
              <Block flex={1} center borderRadius={20} backgroundColor={"#f3f3f3"} height={100}  space="around" style={{margin:5}}>
                <Text bold={true}>Unisex?</Text>
                {unisex === true ? (
                  <>
                    <Icon
                      name={"check-circle"}
                      size={15}
                      color="#3CB043"
                      family="Feather"
                    />
                    <Text muted> Yes</Text>
                  </>
                ) : (
                  <>
                    <Icon
                      name={"thumbs-down"}
                      size={15}
                      color="tomato"
                      family="Feather"
                    />
                    <Text muted> No</Text>
                  </>
                )}
              </Block>
              <Block
                flex={1}
                borderRadius={20}
                backgroundColor={"#f3f3f3"}
                height={100}
                center
                space="around"
                style={{ margin: 5 }}
              >
                <Text bold={true}>Accessible?</Text>
                {accessible === true ? (
                  <>
                    <Icon
                      name={"check-circle"}
                      size={15}
                      color="#3CB043"
                      family="Feather"
                    />
                    <Text muted>Yes</Text>
                  </>
                ) : (
                  <>
                    <Icon
                      name={"thumbs-down"}
                      size={15}
                      color="tomato"
                      family="Feather"
                    />
                    <Text muted> No</Text>
                  </>
                )}
              </Block>
              <Block
                flex={1}
                borderRadius={20}
                backgroundColor={"#f3f3f3"}
                height={100}
                center
                space="around"
                style={{ margin: 5 }}
              >
                <Text bold={true} style={{ textAlign: "center" }}>
                  Changing table?
                </Text>
                {changing_table === true ? (
                  <>
                    <Icon
                      name={"check-circle"}
                      size={15}
                      color="#3CB043"
                      family="Feather"
                    />
                    <Text muted> Yes</Text>
                  </>
                ) : (
                  <>
                    <Icon
                      name={"thumbs-down"}
                      size={15}
                      color="tomato"
                      family="Feather"
                    />
                  <Text muted> No</Text>
                </>
              )}
            </Block>
            </Block>
            {toiletResponse[0].comment_count === undefined ? null :
            <Block>
              <VotePanel selectedToilet={selectedToilet}/>
            </Block>
            }
          </Block>
        </>
      );
      obj.singleToiletData = [
        {
          accessible,
          changing_table,
          city,
          distance,
          name,
          street,
          unisex,
          latitude,
          longitude,
          id,
          votes,
          comment_count,
          comment,
        },
      ];

      return obj;
    }
  );

  const customListStyle = {
    borderRadius: 8,
    padding: 10,
  };

  const customHeaderStyle = {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  };

  const customContentStyle = {
    backgroundColor: "#f3f3f3",
    flexWrap: "wrap",
  };

  const customAccordionStyle = {
    width: width - 20,
    height: height / 2,
  };

  function onAccordionOpenHandler(value) {
    setSelectedToilet(value.singleToiletData);
  }
  function onAccordionCloseHandler() {
    setSelectedToilet(null);
  }

  return (
    <Accordion
      onAccordionOpen={onAccordionOpenHandler}
      onAccordionClose={onAccordionCloseHandler}
      dataArray={data}
      opened={null}
      style={customAccordionStyle}
      listStyle={customListStyle}
      headerStyle={customHeaderStyle}
      contentStyle={customContentStyle}
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
  titleDivide: {
    marginRight: 10,
    textAlign: "left",
    width: width,
  },
});
