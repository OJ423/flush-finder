import { Accordion, Icon, Block, Button, Text } from "galio-framework";
import { useContext } from "react";
import { ToiletResponseContext } from "../../context/ToiletResponse";
import React from "react";
import { StyleSheet,Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen")

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
        <Block flex={4}  width={width-80}row style={styles.accordTitle}>
          <Block flex={2} left row style={styles.titleDivide}>
            <Text style={styles.titleDivide}>{name.substring(0,30)}</Text>
          </Block>
          <Block right flex={1} row middle space="around">
            <Text muted style={{textAlign:"right"}}>{distance.toFixed(2)} miles</Text>
          </Block>
        </Block>
        </>
      );
      obj.content = (
        <>
          <Block style={{padding:20}}>
            <Text muted>{name}</Text>
            <Text>Address: {street}</Text>
            {/* <Text style={{ flexWrap: 'wrap' }}>
              Direction:{" "}
              {(directions === null) | (directions === "") ? "N/A" : directions}
            </Text> */}
            <Text>
              Unisex:{" "}
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
              )}{" "}
            </Text>
            <Text>
              Accessiblity-friendly:{" "} 
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
              )}{" "}
            </Text>
            <Text>
              Has changing table:{" "}
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
            </Text>
          <Button title="See more..." >MORE INFO</Button>
          </Block>
        </>
      );

      return obj;
    }
  );

const customListStyle = {
  borderRadius: 8,
  padding: 10,
};

const customHeaderStyle = {
  width:"100%",
  borderBottomWidth:1,
  borderBottomColor:"lightgrey"
}

const customContentStyle = {
  backgroundColor: '#f3f3f3',
  flexWrap:"wrap",
}

const customAccordionStyle = {
  width:width - 20,
  height:height / 2,
}

  return (
    <Accordion dataArray={data} opened={null} style={customAccordionStyle} listStyle={customListStyle} headerStyle={customHeaderStyle} contentStyle={customContentStyle} />
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
    marginRight:10,
    textAlign:"left",
    width:width,
  },
});
