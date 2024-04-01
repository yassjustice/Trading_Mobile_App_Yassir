import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors } from "./Colors";

// import screens
import StockExchange from "../feature/StockExchange";
import Profile from "../feature/Profile";
import Whishlist from "../feature/Wishlist";
import Home from "../feature/Home";

const Tab = createBottomTabNavigator();

export default function BottomNav() {
    const [actual, setActual] = useState("Home1"); // Initialize with the default tab name

    const handleTabPress = (route) => {
        console.log(route.name);
        setActual(route.name);
    };
    useEffect(() => {
        console.log("Actual tab changed:", actual);
    }, [actual]); // Dependency array with `actual`

    return (
        <Tab.Navigator
            initialRouteName="Home1"
            screenOptions={{
                tabBarActiveTintColor: Colors.green,
                tabBarInactiveTintColor: Colors.green,
                headerShown: false,
                tabBarStyle: [
                    {
                        height: 80,
                        width: "100%",
                        backgroundColor: Colors.green,
                        display: "flex",
                    },
                ],
            }}
        >
            <Tab.Screen
                // Home, Home > Home This can cause confusing behavior during navigation. Consider using unique names for each screen instead. So I fixed this with a "1"
                name="Home1"
                component={Home}
                options={{
                    headerShown: false,
                    navigation: Tab.navigation,
                    title: "Home1",
                    tabBarVisible: "false",
                    tabBarIcon: ({ size, focused, color }) => {
                        if (focused)
                            return (
                                <Ionicons
                                    name="home-outline"
                                    size={size}
                                    color={Colors.yellow}
                                />
                            );
                        return (
                            <Ionicons
                                name="home-outline"
                                size={size}
                                color={Colors.white}
                            />
                        );
                    },
                    // actual: actual === "Home1" ? true: false,
                    actual: actual,
                }}
                listeners={({ navigation, route }) => ({
                    tabPress: () => handleTabPress(route),
                })}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    navigation: Tab.navigation,
                    title: "Profile",
                    tabBarVisible: "false",
                    tabBarIcon: ({ size, focused, color }) => {
                        if (focused)
                            return (
                                <Ionicons
                                    name="person-outline"
                                    size={size}
                                    color={Colors.yellow}
                                />
                            );
                        return (
                            <Ionicons
                                name="person-outline"
                                size={size}
                                color={Colors.white}
                            />
                        );
                    },
                    // actual: actual === "Profile" ? true: false,
                    actual: actual,
                }}
                listeners={({ navigation, route }) => ({
                    tabPress: () => handleTabPress(route),
                })}
            />

            <Tab.Screen
                name="Whishlist"
                component={Whishlist}
                options={{
                    headerShown: false,
                    navigation: Tab.navigation,
                    title: "Whishlist",
                    tabBarVisible: "false",
                    tabBarIcon: ({ size, focused, color }) => {
                        if (focused)
                            return (
                                <Ionicons
                                    name="analytics-outline"
                                    size={size}
                                    color={Colors.yellow}
                                />
                            );
                        return (
                            <Ionicons
                                name="analytics-outline"
                                size={size}
                                color={Colors.white}
                            />
                        );
                    },
                    // actual: actual === "Whishlist" ? true: false,
                    actual: actual,
                }}
                listeners={({ navigation, route }) => ({
                    tabPress: () => handleTabPress(route),
                })}
            />

            <Tab.Screen
                name="StockExchange"
                component={StockExchange}
                options={{
                    headerShown: false,
                    navigation: Tab.navigation,
                    title: "StockExchange",
                    tabBarVisible: "false",
                    tabBarIcon: ({ size, focused, color }) => {
                        if (focused)
                            return (
                                <Ionicons
                                    name="swap-horizontal-outline"
                                    size={size}
                                    color={Colors.yellow}
                                />
                            );
                        return (
                            <Ionicons
                                name="swap-horizontal-outline"
                                size={size}
                                color={Colors.white}
                            />
                        );
                    },
                    // actual: actual === "StockExchange" ? true: false,
                    actual: actual,
                }}
                listeners={({ navigation, route }) => ({
                    tabPress: () => handleTabPress(route),
                })}
            />
        </Tab.Navigator>
    );
}
