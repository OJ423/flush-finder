import { useContext, useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";

import { ToiletResponseContext } from "../context/ToiletResponse";
import { OriginLocationContext } from "../context/OriginLocation";

import MapRender from "../components/MapRender";

import { fetchData } from "../api";

export default function ResultScreen() {
    const { toiletResponse, setToiletResponse } = useContext(ToiletResponseContext)
    const { originLocation } = useContext(OriginLocationContext)
    const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    setToiletResponse(null)
    !originLocation ? null : 
      fetchData(originLocation)
        .then((response) => {
          setToiletResponse(response);
          setIsLoading(false)
        })
        .catch((err) => {
          console.log(err, "Refuge api call");
        });
    
  }, [originLocation]);


  return (
    <View>
      {isLoading? <View><ActivityIndicator size="large" color="blue"/></View> : <MapRender />}
    </View>
  );
}
