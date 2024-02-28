import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen'
import ResultScreen from '../screens/ResultScreen'
import About from '../screens/About'
import { OriginLocationContext } from '../context/OriginLocation';
import React, {useContext} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ToiletScreen from '../screens/ToiletScreen';
import Extras from '../screens/Extras';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function NavTabs() {
  const {originLocation} = useContext(OriginLocationContext)
  function BottomTabNav() {
    return <Tab.Navigator values={{originLocation}}
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Search') {
                iconName = 'map-outline';
              } else if (route.name === 'About') {
                iconName = 'people-outline';
              } else if (route.name === 'Number 2?') {
                iconName = "book-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#e83e8c',
            tabBarInactiveTintColor: 'gray',
          })}>
        <Tab.Screen name="Search" component={HomeScreen} />
        <Tab.Screen name="Number 2?" component={Extras} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
  }
  return(
    <NavigationContainer>
          <Stack.Navigator > 
        <Stack.Screen options={{headerShown: false}} name="FlushFinder" component={BottomTabNav} />
        <Stack.Screen options={{headerStyle: {backgroundColor: '#E83E8C'}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold'},}} name="Toilets Near You" component={ResultScreen} />
        <Stack.Screen options={{headerStyle: {backgroundColor: '#E83E8C'}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold'},}} name="ToiletView" component={ToiletScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}