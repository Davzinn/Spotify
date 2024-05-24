import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@/screens/Home/HomeADGL';
import Search from '@/screens/Search/SearchADGL';
import Config from '@/screens/Settings/SettingsADGL';
import ConfigDetails from '@/screens/Settings/SettingsDetailsADGL';
import { Entypo, Feather, FontAwesome } from '@expo/vector-icons';
import Libary from './assets/libary';
import Libaryy from './assets/full';
import Spotify from './assets/icon';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const PremiumStack = createStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen 
                name="HomeScreen" 
                component={Home} 
                options={{ headerShown: false }} 
            />
            <HomeStack.Screen 
                name="Config" 
                component={ConfigStackScreen} 
                options={{ headerShown: false }} 
            />
        </HomeStack.Navigator>
    );
}

function SearchStackScreen() {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen 
                name="SearchScreen" 
                component={Search} 
                options={{ headerShown: false }} 
            />
        </SearchStack.Navigator>
    );
}

function ProfileStackScreen() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen 
                name="ProfileScreen" 
                component={Profile} 
                options={{ headerShown: false }} 
            />
        </ProfileStack.Navigator>
    );
}

function ConfigStackScreen() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen 
                name="ConfigScreen" 
                component={Config} 
                options={{ headerShown: false }} 
            />
            <ProfileStack.Screen 
                name="ConfigDetails" 
                component={ConfigDetails} 
                options={{ headerShown: false }} 
            />
        </ProfileStack.Navigator>
    );
}

function PremiumStackScreen() {
    return (
        <PremiumStack.Navigator>
            <PremiumStack.Screen 
                name="PremiumScreen" 
                component={Profile} 
                options={{ headerShown: false }} 
            />
        </PremiumStack.Navigator>
    );
}

function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: true,
                tabBarStyle: {
                    backgroundColor: "#111111",
                    borderTopColor: 'transparent',
                    paddingBottom: 5,
                    paddingTop: 5,
                    height: 60,
                },
                tabBarActiveTintColor: 'white',
            })}
        >
            <Tab.Screen 
                name="HomeTab" 
                component={HomeStackScreen} 
                options={{
                    tabBarLabel: "Home", 
                    headerShown: false, 
                    tabBarLabelStyle: { color: "white" },
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Entypo name="home" size={24} color="white" />
                        ) : (
                            <Feather name="home" size={24} color="gray" />
                        ),
                }}
            />
            <Tab.Screen 
                name="SearchTab" 
                component={SearchStackScreen} 
                options={{
                    tabBarLabel: "Buscar", 
                    headerShown: false, 
                    tabBarLabelStyle: { color: "white" },
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Feather name="search" size={24} color="white" />
                        ) : (
                            <FontAwesome name="search" size={24} color="gray" />
                        ),
                }}
            />
            <Tab.Screen 
                name="ProfileTab" 
                component={ProfileStackScreen} 
                options={{
                    tabBarLabel: "Sua Biblioteca", 
                    headerShown: false, 
                    tabBarLabelStyle: { color: "white" },
                    tabBarButton: (props) => (
                        <TouchableOpacity {...props} onPress={() => {}} /> // Desabilita a navegação
                    ),
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Libaryy />
                        ) : (
                            <Libary />
                        ),
                }}
            />
            <Tab.Screen 
                name="PremiumTab" 
                component={PremiumStackScreen} 
                options={{
                    tabBarLabel: "Premium", 
                    headerShown: false, 
                    tabBarLabelStyle: { color: "white" },
                    tabBarButton: (props) => (
                        <TouchableOpacity {...props} onPress={() => {}} /> // Desabilita a navegação
                    ),
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Spotify width={35} height={35} />
                        ) : (
                            <Spotify width={35} height={35} />
                        ),
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
                    name="MainTabs" 
                    component={BottomTabs} 
                    options={{ headerShown: false }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
