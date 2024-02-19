import { View, Button } from "react-native";
import { OriginLocationContext } from "../context/OriginLocation"; 
import { useContext, useState } from "react";

import getCurrentLocation from "../utils";



export default function HomeScreen() {
    const {originLocation, setOriginLocation} = useContext(OriginLocationContext)
    const [initialRegion, setInitialRegion] = useState(null);
  return (
    <View>
      <Button title="Use Location" onPress={() => getCurrentLocation(setOriginLocation, setInitialRegion)} />
    </View>
    
  );

}
