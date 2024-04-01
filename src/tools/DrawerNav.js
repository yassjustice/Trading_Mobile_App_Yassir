import * as React from "react";
import {
    Button,
    View,
    Image,
    Touchable,
    TouchableOpacity,
    Text,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Colors } from "./Colors";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

// screens
import BottomNav from "./BottomNav";
import Activity from "../feature/Activity";
import Walet from "../feature/Walet";
import Setings from "../feature/Setings";
import Home from "../feature/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={(props) => (
                <View style={{ flex: 1, backgroundColor: Colors.green }}>
                    <Image
                        source={require("../../assets/Frame.png")}
                        style={{
                            width: 210,
                            height: 75,
                            alignSelf: "center",
                            marginTop: 50,
                        }}
                    />
                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: 50,
                            marginLeft: 20,
                        }}
                    >
                        <Ionicons name="home" size={25} color={Colors.white} />
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate("Home")}
                        >
                            <Text
                                style={{
                                    color: Colors.white,
                                    fontSize: 15,
                                    marginLeft: 15,
                                    marginTop: 5,
                                }}
                            >
                                HOME
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: 30,
                            marginLeft: 20,
                        }}
                    >
                        <Ionicons
                            name="wallet"
                            size={25}
                            color={Colors.white}
                        />
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate("Walet")}
                        >
                            <Text
                                style={{
                                    color: Colors.white,
                                    fontSize: 15,
                                    marginLeft: 15,
                                    marginTop: 5,
                                }}
                            >
                                WALLET
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: 30,
                            marginLeft: 20,
                        }}
                    >
                        <Feather name="activity" size={25} color="white" />
                        <TouchableOpacity
                            onPress={() =>
                                props.navigation.navigate("Activity")
                            }
                        >
                            <Text
                                style={{
                                    color: Colors.white,
                                    fontSize: 15,
                                    marginLeft: 15,
                                    marginTop: 5,
                                }}
                            >
                                ACTIVITY
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: 30,
                            marginLeft: 20,
                        }}
                    >
                        <Ionicons
                            name="settings"
                            size={25}
                            color={Colors.white}
                        />
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate("Setings")}
                        >
                            <Text
                                style={{
                                    color: Colors.white,
                                    fontSize: 15,
                                    marginLeft: 15,
                                    marginTop: 5,
                                }}
                            >
                                SETTINGS
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: 30,
                            marginLeft: 20,
                        }}
                    >
                        <Ionicons
                            name="log-out"
                            size={25}
                            color={Colors.white}
                        />
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate("Setings")}
                        >
                            <Text
                                style={{
                                    color: Colors.white,
                                    fontSize: 15,
                                    marginLeft: 15,
                                    marginTop: 5,
                                }}
                            >
                                LOGOUT
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            screenOptions={{
                headerShown: false,
            }}
            drawerStyle={{
                backgroundColor: Colors.green,
                width: 210,
                borderTopRightRadius: 10,
            }}
        >
            <Drawer.Screen name="Home" component={BottomNav} />
            <Drawer.Screen name="Walet" component={Walet} />
            <Drawer.Screen name="Activity" component={Activity} />
            <Drawer.Screen name="Setings" component={Setings} />
            <Drawer.Screen name="Bot" component={BottomNav} />
        </Drawer.Navigator>
    );
}


