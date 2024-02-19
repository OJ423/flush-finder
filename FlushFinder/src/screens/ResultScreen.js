import { useContext, useEffect } from "react";
import { Text, View } from "react-native";

import { OriginLocationContext } from "../context/OriginLocation";
import { fetchData } from "../api";

export default function ResultScreen() {
    const { toiletResponse, setToiletResponse } = useContext(OriginLocationContext)
    const { originLocation } = useContext(OriginLocationContext)

  useEffect(() => {
    if (originLocation) {
      fetchData(originLocation)
        .then((response) => {
          setToiletResponse(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [originLocation]);
  return (
    <View>
      <Text>kshefjsjfskjhfksd</Text>
    </View>
  );
}
