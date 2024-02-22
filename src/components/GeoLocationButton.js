import { View } from "react-native";
import { OriginLocationContext } from "../context/OriginLocation"; 
import { useContext } from "react";
import { useNavigation } from '@react-navigation/native';
import { Block, Button, Icon, Text, theme } from "galio-framework";
import getCurrentLocation from "../utils";

export default function GeoLocationButton(props) {
    const navigation = useNavigation();
    const { setOriginLocation } = useContext(OriginLocationContext)
    const {ada, changing_table, unisex} = props
    function handleLocationButtonPress () {
        setOriginLocation({})
        getCurrentLocation(setOriginLocation, props)

        navigation.navigate('Toilets Near You')
    }

  return (
      <Button accessibilityLabel="Use current location button" onlyIcon icon="direction" iconFamily="Entypo" iconSize={25} iconColor="#fff" style={{ width: 40, height: 40 }} onPress={handleLocationButtonPress}>Use your current location</Button>
  );

}