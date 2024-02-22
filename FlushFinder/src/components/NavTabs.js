import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen'
import ResultScreen from '../screens/ResultScreen'
import About from '../screens/About'
import FullMapView from './results-screen/FullMapView';
import { OriginLocationContext } from '../context/OriginLocation';
import React, {useContext} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function NavTabs() {
  const {originLocation} = useContext(OriginLocationContext)
  function BottomTabNav() {
    return <Tab.Navigator values={{originLocation}}
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Search') {
                iconName = focused
                  ? 'map-outline'
                  : 'map-outline';
              } else if (route.name === 'About') {
                iconName = focused ? 'people-outline' : 'people-outline';
              } 
              
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#e83e8c',
            tabBarInactiveTintColor: 'gray',
          })}>
        <Tab.Screen name="Search" component={HomeScreen} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
  }
  return(
    <NavigationContainer>
          <Stack.Navigator > 
        <Stack.Screen options={{headerShown: false}} name="FlushFinder" component={BottomTabNav} />
        <Stack.Screen options={{headerStyle: {backgroundColor: '#E83E8C'}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold'},}} name="Toilets Near You" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}