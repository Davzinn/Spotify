import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@/screens/Home/HomeScreenADGL"
import SearchScreenADGL from "@/screens/Search/SearchScreenADGL";
import Home from "./assets/home.svg"
import Search from "@/routes/assets/search.svg"


const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#000",
          borderTopColor: 'transparent',
          paddingBottom: 5,
          paddingTop: 5,
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
          height: 60,
          position : "relative"
        },
        tabBarActiveTintColor: "#FFF",
      })}
    >
      <Tab.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: undefined,
          tabBarIcon: ({ size, color, focused }) => {
            if (focused) {
              return <Home style={{ shadowColor: 'black', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.5, shadowRadius: 2 }} />;
            }
            return <Home width={40} />;
          }
        }}
      />

      <Tab.Screen
        name="SearchScreenADGL"
        component={SearchScreenADGL}
        options={{
          headerShown: false,
          tabBarLabel: undefined,
          tabBarIcon: ({ size, color, focused }) => {
            if (focused) {
              return <Search style={{ shadowColor: 'black', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.5, shadowRadius: 2 }} />;
            }
            return <Search width={40} />;
          }
        }}
      />
    </Tab.Navigator>
  );
}