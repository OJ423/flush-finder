import { useEffect, useState } from "react";
import { fetchQuotes } from "../api";

import {Icon} from "galio-framework"
import { FlatList, Text, View, Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("screen");

export default function QuotesCarousel({setHideButton}) {
  const [quotes, setQuotes] = useState([]);

  function iconHandler(iconName) {
    return <Icon name={iconName} family="MaterialIcons" color={"black"} size={30} paddingBottom={5}/>
  }

  useEffect(() => {
    setHideButton(true)
    fetchQuotes()
      .then((response) => {
      
        const cards = response.map((quote, index) => {
          return (
            <View key={index} style={styles.container}>
              <View style={styles.quoteContainer}>
                <Text style={styles.quoteText}>"{quote.q}"</Text>
                <Text style={styles.authorText}>- {quote.a}</Text>
              </View>
              {index === 0 ? iconHandler("swipe-right") : index === 49 ? iconHandler("swipe-left"): iconHandler("swipe")}
            </View>
          );
        });
        setQuotes(cards);
        setHideButton(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View>
      <FlatList
        data={quotes}
        keyExtractor={(_, index) => index.toString()} // underscore is placeholder for unused parameter
        set
        horizontal
        pagingEnabled
        renderItem={({ item }) => {
          return (
            <View
              style={{ width, justifyContent: "center", alignItems: "center" }}
            >
              <View
                style={{
                  width: width - 100,
                  height: height * 0.45,
                  padding: 10,
                  backgroundColor: "white",
                  borderRadius: 18,
                }}
              >
                {item}
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    alignContent: "center",
    alignText: "center",
    justifyContent: "space-between",
    alignItems: "center",
  },
 quoteContainer: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
    alignContent: "center",
    alignText: "center",
    justifyContent: "center",
  },
  quoteText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginTop: 10,
    paddingBottom: 10,
  },
  authorText: {
    fontSize: 14,
    color: "black",
    textAlign: "center",
    marginTop: 2,
    paddingBottom: 25,
  },
});
