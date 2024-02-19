import { View } from "react-native";
import { OriginLocationContext } from "../context/OriginLocation"; 
import { useContext, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { Block, Button, Icon, Text, theme } from "galio-framework";

import getCurrentLocation from "../utils";

export default function GeoLocationButton() {
    const navigation = useNavigation();
    
    const { setOriginLocation } = useContext(OriginLocationContext)
    const [ initialRegion, setInitialRegion ] = useState(null);

    function handleLocationButtonPress () {
        getCurrentLocation(setOriginLocation, setInitialRegion)
        navigation.navigate('Toilets Near You')
    }

  return (
      <Button onlyIcon icon="direction" iconFamily="Entypo" iconSize={25} iconColor="#fff" style={{ width: 40, height: 40 }} onPress={handleLocationButtonPress}>Use your current location</Button>
    
  );

}