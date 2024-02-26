import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { fetchCities } from "../api";

export default function CityDropdown({setCityOriginLocation}) {
  
  const [selectedValue, setSelectedValue] = useState(null)
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  let options

  if(cities.length > 0) {
    options = cities.map((city) => {
      return {label: city.name, value: city.name }
    })
  }

  const handleValueChange = (item) => {
    const {value} = item
    setValue(value)
    if (value) {
      setSelectedValue(value)
      setIsFocus(false)
      const selectedCityData = cities.filter((city) => city.name === value)
      setCityOriginLocation(selectedCityData.length ?{city: selectedCityData[0].name, latitude:+selectedCityData[0].latitude, longitude: +selectedCityData[0].longitude} : null)
    }
  }
  

  useEffect(() => {
    fetchCities()
    .then((citiesResponse) => {
      setCities(citiesResponse)
      setIsLoading(false)
    })
  },[])
  
  return(
    <View style={{backgroundColor:"white", borderRadius:5, marginEnd:20}}>
      {isLoading ? null :
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={options}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select a city' : "..."}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          handleValueChange(item);
        }}
        visibleSelectedItem={false}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? 'blue' : 'black'}
            name="Safety"
            size={20}
          />
        )}
      />
        }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
