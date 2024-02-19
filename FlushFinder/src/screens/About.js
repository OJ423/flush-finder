import React from "react";
import { View, Text, ScrollView, StyleSheet, Image, SectionList } from "react-native";


export default function About() {
  return( 
  <ScrollView>
    <View style={styles.hero}>
      <Text style={styles.title}>About Flush Finder</Text>
      <Text style={styles.heroText}>Five members of North Coders November '23 cohort teamed up to build this convenient app.</Text>
    </View>
    <View style={styles.container}>
      <Text style={styles.textTitle}>Help When It's Needed</Text>
      <Text style={styles.text}>The app is built to help people find a safe, clean, and convenient toilet when they need it most. With help from Refuge and the Safe2Pee database, the application aims to provide a quick and easy solution to find a toilet near you.</Text>
    </View>
    <Image source={require('../../assets/empty-toiletroll.jpg')} alt="An empty toilet roll with don't panic written on the cardboard tube."></Image>
    <View style={styles.container}>
      <Text style={styles.textTitle}>How To Use Flush Finder</Text>
      <View style={styles.item}>
        <Text style={styles.listTitle}>Use your location...</Text>
        <Text style={styles.text}>Go to the home screen and select the 'use location' button</Text>
        <Text style={styles.text}>A map and list showing toilets near you will appear</Text>
        <Text style={styles.text}>Click on a toilet on the map or in the list for more info about it.</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.listTitle}>Choose a city...</Text>
        <Text style={styles.text}>Go to the home screen and choose a city to view its toilet locations</Text>
        <Text style={styles.text}>A map and list showing toilets in that city will load</Text>
        <Text style={styles.text}>Click on a toilet on the map or in the list for more info about it.</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.listTitle}>Fine tune your needs...</Text>
        <Text style={styles.text}>Go to the home screen and choose a toilet matching your needs</Text>
        <Text style={styles.text}>Filter by accessibility, gender and changing table facilities</Text>
        <Text style={styles.text}>View your results in list and map format to find your temple of convenience.</Text>
      </View>
    </View>
  </ScrollView>)
}

const styles = StyleSheet.create ({
  hero: {
    flex: 1,
    padding: 24,
    backgroundColor: "tomato",
    color: "white",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 100,
    paddingBottom: 100,
  },
  title: {
    fontSize: 35,
    color:"white",
    paddingBottom:30
  },
  heroText: {
    fontSize: 24,
    textAlign:"center",
    color: "white"
  },
  container: {
    padding: 24,
    paddingTop: 100,
    paddingBottom: 100,
  },
  text: {
    fontSize: 20,
    textAlign:"center",
    marginTop:15,
  },
  textTitle: {
    fontSize: 30,
    textAlign: "center"
  },
  item: {
    borderBottomColor:"gray",
    borderBottomWidth: 1,
    padding: 20,
    marginVertical: 8,
    borderRadius:5,
  },
  listTitle: {
    fontSize: 24,
    paddingTop: 20,
    textAlign:"center",
    color:"tomato",
  }
})