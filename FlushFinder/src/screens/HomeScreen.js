import { View, Button } from "react-native";

import getCurrentLocation from "../utils";

export default function HomeScreen() {
    
  return (
    <View>
      <Button title="Use Location" onPress={getCurrentLocation} />
    </View>
  );
}
