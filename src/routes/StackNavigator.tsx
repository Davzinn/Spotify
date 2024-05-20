import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@/screens/Home/HomeADGL";
import Profile from "@/screens/Settings/SettingsADGL";
import Search from "@/screens/Search/SearchADGL";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarLabel:"Home", 
                    headerShown:false, 
                    tabBarLabelStyle:{color: "white"},
                    tabBarIcon:({focused}) =>
                        focused ? (
                            <Entypo name="home" size={24} color="black" />
                        ) : (
                            <Feather name="home" size={24} color="black" />
                        )
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={Profile} 
                options={{
                    tabBarLabel:"Profile", 
                    headerShown:false, 
                    tabBarLabelStyle:{color: "white"},
                    tabBarIcon:({focused}) =>
                        focused ? (
                            <MaterialIcons name="settings" size={24} color="black" />
                        ) : (
                            <Ionicons name="settings-outline" size={24} color="black" />
                        )
                }}
            />
            <Tab.Screen 
                name="Search" 
                component={Search} 
                options={{
                    tabBarLabel:"Search", 
                    headerShown:false, 
                    tabBarLabelStyle:{color: "white"},
                    tabBarIcon:({focused}) =>
                        focused ? (
                            <Feather name="search" size={24} color="black" />
                        ) : (
                            <FontAwesome name="search" size={24} color="black" />
                        )
                }}
            />
        </Tab.Navigator>
    );
}

const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="BottomTabs" 
                    component={BottomTabs} 
                    options={{headerShown:false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
