import { View, Button } from "react-native";
import { OriginLocationContext } from "../context/OriginLocation"; 
import { useContext, useState } from "react";
import { useNavigation } from '@react-navigation/native';

import getCurrentLocation from "../utils";

export default function GeoLocationButton() {
    const navigation = useNavigation();
    
    const {originLocation, setOriginLocation} = useContext(OriginLocationContext)
    const [initialRegion, setInitialRegion] = useState(null);

    function handleLocationButtonPress () {
        getCurrentLocation(setOriginLocation, setInitialRegion)
        navigation.navigate('Toilets Near You')
    }

  return (
    <View>
      <Button title="Use Location" onPress={handleLocationButtonPress}/>
    </View>
    
  );

}