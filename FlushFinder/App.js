import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./src/screens/HomeScreen";
import ResultScreen from "./src/screens/ResultScreen";
import About from "./src/screens/About";

import { OriginLocationProvider } from "./src/context/OriginLocation";
import { ToiletResponseProvider } from "./src/context/ToiletResponse";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ToiletResponseProvider>
      <OriginLocationProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === "Flush Finder") {
                  iconName = focused ? "home-outline" : "home-outline";
                } else if (route.name === "Toilets Near You") {
                  iconName = focused ? "map-outline" : "map-outline";
                } else if (route.name === "About") {
                  iconName = focused ? "people-outline" : "people-outline";
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tab.Screen name="Flush Finder" component={HomeScreen} />
            <Tab.Screen name="Toilets Near You" component={ResultScreen} />
            <Tab.Screen name="About" component={About} />
          </Tab.Navigator>
        </NavigationContainer>
      </OriginLocationProvider>
    </ToiletResponseProvider>
  );
}
