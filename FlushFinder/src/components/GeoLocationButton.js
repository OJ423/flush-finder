import { View, Button } from "react-native";
import { OriginLocationContext } from "../context/OriginLocation"; 
import { useContext } from "react";
import { useNavigation } from '@react-navigation/native';

import getCurrentLocation from "../utils";

export default function GeoLocationButton() {
    const navigation = useNavigation();
    
    const { setOriginLocation } = useContext(OriginLocationContext)

    function handleLocationButtonPress () {
        setOriginLocation({})
        getCurrentLocation(setOriginLocation)

        navigation.navigate('Toilets Near You')
    }

  return (
    <View>
      <Button title="Use Location" onPress={handleLocationButtonPress}/>
    </View>
    
  );

}