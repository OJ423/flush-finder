import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { Text, Block } from 'galio-framework';


export default function About() {
  return( 
  <ScrollView>
    <View style={styles.hero}>
      <Text h1 style={{color:"white"}}>About Flush Finder</Text>
      <Text h4 style={styles.h4}>Five members of North Coders November '23 cohort teamed up to build this convenient app.</Text>
    </View>
    <View style={styles.container}>
      <Text h2>Help When It's Needed</Text>
      <Text p>The app is built to help people find a safe, clean, and convenient toilet when they need it most. With help from Refuge and the Safe2Pee database, the application aims to provide a quick and easy solution to find a toilet near you.</Text>
    </View>
    <Image source={require('../../assets/empty-toiletroll.jpg')} style={{width:"100%"}} alt="An empty toilet roll with don't panic written on the cardboard tube."></Image>
    <View style={styles.container}>
      <Text style={styles.textTitle}>How To Use Flush Finder</Text>
      <Block card space="around" style={{padding:20, marginTop:20, backgroundColor:"#ffffff"}}>
        <Text h5 style={styles.h5}>Use your location...</Text>
        <Text muted style={{marginTop:15}}>Go to the home screen and select the 'use location' button</Text>
        <Text muted style={{marginTop:15}}>A map and list showing toilets near you will appear</Text>
        <Text muted style={{marginTop:15}}>Click on a toilet on the map or in the list for more info about it.</Text>
      </Block>
      <Block card space="around" style={{padding:20, marginTop:20, backgroundColor:"#ffffff"}}>
        <Text h5 style={styles.h5}>Choose a city...</Text>
        <Text muted style={{marginTop:15}}>Go to the home screen and choose a city to view its toilet locations</Text>
        <Text muted style={{marginTop:15}}>A map and list showing toilets in that city will load</Text>
        <Text muted style={{marginTop:15}}>Click on a toilet on the map or in the list for more info about it.</Text>
      </Block>
      <Block card space="around" style={{padding:20, marginTop:20, backgroundColor:"#ffffff"}}>
        <Text h5 style={styles.h5}>Fine tune your needs...</Text>
        <Text muted style={{marginTop:15}}>Go to the home screen and choose a toilet matching your needs</Text>
        <Text muted style={{marginTop:15}}>Filter by accessibility, gender and changing table facilities</Text>
        <Text muted style={{marginTop:15}}>View your results in list and map format to find your temple of convenience.</Text>
      </Block>
    </View>
  </ScrollView>)
}

const styles = StyleSheet.create ({
  hero: {
    flex: 1,
    padding: 24,
    backgroundColor: "#e83e8c",
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
    padding: 24,
    marginVertical: 8,
    borderRadius:5,
  },
  listTitle: {
    fontSize: 24,
    paddingTop: 20,
    textAlign:"center",
    color:"#e83e8c",
  },
  h5: {
    color:"#e83e8c",
  },
  h4: {
    padding:24,
    color:"white"
  }
})