import React, { useContext, useState } from "react";
import { OriginLocationContext } from "../context/OriginLocation";
import { View } from "react-native";
import RNPickerSelect from 'react-native-picker-select';

export default function CityDropdown({setCityOriginLocation}) {
  
  const { originLocation, setOriginLocation } = useContext(OriginLocationContext);
  const [selectedValue, setSelectedValue] = useState(null)

  let placeholder = {
    label: 'Select a city',
    value: null,
  }
  
  const cities = [
    {
      _id: "65d278858bd0d5a142920a77",
      latitude: 53.4794892,
      longitude: -2.2451148,
      name: "Manchester",
      display_name: "Manchester, Greater Manchester, England, United Kingdom",
      __v: 0,
    },
    {
      _id: "65d278858bd0d5a142920a7a",
      latitude: 53.4071991,
      longitude: -2.99168,
      name: "Liverpool",
      display_name: "Liverpool, Liverpool City Region, England, United Kingdom",
      __v: 0,
    },
    {
      _id: "65d278858bd0d5a142920a7d",
      latitude: 53.7974185,
      longitude: -1.5437941,
      name: "Leeds",
      display_name: "Leeds, West Yorkshire, England, United Kingdom",
      __v: 0,
    },
    {
      _id: "65d278858bd0d5a142920a80",
      latitude: 52.4081812,
      longitude: -1.510477,
      name: "Coventry",
      display_name:
        "Coventry, West Midlands Combined Authority, England, United Kingdom",
      __v: 0,
    },
    {
      _id: "65d326da4de5fd7cf6200694",
      latitude: 51.4816546,
      longitude: -3.1791934,
      name: "Cardiff",
      display_name: "Cardiff, Cymru / Wales, CF10 2AF, United Kingdom",
      __v: 0,
    },
    {
      _id: "65d326da4de5fd7cf6200697",
      latitude: 51.4538022,
      longitude: -2.5972985,
      name: "Bristol",
      display_name:
        "Bristol, City of Bristol, West of England, England, United Kingdom",
      __v: 0,
    },
    {
      _id: "65d326da4de5fd7cf620069a",
      latitude: 53.3806626,
      longitude: -1.4702278,
      name: "Sheffield",
      display_name: "Sheffield, South Yorkshire, England, United Kingdom",
      __v: 0,
    },
    {
      _id: "65d326da4de5fd7cf620069d",
      latitude: 53.9590555,
      longitude: -1.0815361,
      name: "York",
      display_name: "York, England, YO1 8RS, United Kingdom",
      __v: 0,
    },
    {
      _id: "65d3da3f17519c3b3196bf77",
      latitude: 54.596391,
      longitude: -5.9301829,
      name: "Belfast",
      display_name:
        "Belfast, County Antrim, Northern Ireland / Tuaisceart Éireann, United …",
      __v: 0,
    },
    {
      _id: "65d3da3f17519c3b3196bf7a",
      latitude: 55.9533456,
      longitude: -3.1883749,
      name: "City of Edinburgh",
      display_name: "City of Edinburgh, Alba / Scotland, United Kingdom",
      __v: 0,
    },
  ];
 
  const options = cities.map((city) => {
    return {label: city.name, value: city.name }
  })

  const handleValueChange = (value) => {
    if (value) {
    console.log(value)
    setSelectedValue(value)
    const selectedCityData = cities.filter((city) => city.name === value)
    console.log(selectedCityData)
    setCityOriginLocation(selectedCityData.length ?{latitude:selectedCityData[0].latitude, longitude: selectedCityData[0].longitude} : null)
  
    }
  }
  
  return(
    <View style={{backgroundColor:"white", borderRadius:5, marginEnd:20}}>
      <RNPickerSelect 
        placeholder={placeholder}
        items={options}
        onValueChange={(value) => {
          handleValueChange(value)
        }}
      />
    </View>
  )
}
