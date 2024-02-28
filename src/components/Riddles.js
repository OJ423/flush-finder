import { useEffect, useState } from "react";
import { fetchRiddle } from "../api";
import { Button, Text } from "galio-framework";

import { View, Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("screen");

export default function Riddles() {
  const [riddle, setRiddle] = useState([]);
  const [revealAnswer, setRevealAnswer] = useState(false);
  const [nextRiddle, setNextRiddle] = useState(false);

  useEffect(() => {
    fetchRiddle()
      .then((response) => {
      setRiddle(response)
      setRevealAnswer(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [nextRiddle]);

  return (
    <View  style={{ width, justifyContent: "center", alignItems: "center", alignContent: "center" }}>
      <View style={styles.riddleContainer}>
        <Text style={styles.riddleText}>{riddle.riddle}</Text>
        {revealAnswer ? (
          <Text style={styles.answerText}>Answer: {riddle.answer}</Text>
        ) : null}
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <Button
            style={styles.button}
            onPress={() => {
              setRevealAnswer(!revealAnswer)
            }}
          >
            Answer
          </Button>
          <Button
            style={styles.button}
            color="warning"
            onPress={() => {
              setNextRiddle(!nextRiddle);
            }}
          >
            Next
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },

  riddleContainer: {
    display:"flex",
    alignItems: "center",
    justifyContent:"center",
    width: width - 100,
    minHeight: height * 0.45,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 18,

  },
  riddleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginTop: 10,
    paddingBottom: 10,
  },
  answerText: {
    fontSize: 14,
    color: "black",
    textAlign: "center",
    marginTop: 2,
    paddingBottom: 25,
  },
  button: {
    flex: 1,
    width: "auto",
    height: 35,
  },
});
