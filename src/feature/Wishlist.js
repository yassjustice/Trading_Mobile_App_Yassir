import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";
import { Colors } from "../tools/Colors";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

// components
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import CartList from "../components/CartList";
import { useIsFocused } from "@react-navigation/native";

const Wishlist = ({ navigation, actual }) => {
    const [selectedType, setSelectedType] = useState("All");
    const [fetchTrigger, setFetchTrigger] = useState("");

    const fakeData = [
        {
            id: 1,
            name: "Company A",
            type: "Indices",
            // image: require("./assets/btc.png"),
        },
        {
            id: 2,
            name: "Currency X",
            type: "Forex",
            // image: require("./assets/btc.png"),
        },
        {
            id: 3,
            name: "Bitcoin",
            type: "Crypto",
            // image: require("./assets/btc.png"),
        },
        {
            id: 4,
            name: "Tech Inc.",
            type: "Stock",
            // image: require("./assets/btc.png"),
        },
        // Add more items as needed
    ];

    const handlePress = (type) => {
        setSelectedType(type);
    };

    // useEffect(() => {
    //     if (actual === "Whishlist") {
    //         console.log("Current tab: ", actual);
    //     }
    //     console.log("Triggering type change for Wishlist");
    //     setSelectedType("All");
    // }, [actual]);

    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            console.log("WishList screen is focused");
            // Perform actions specific to StockExchange screen when it is focused
            setSelectedType("All");
            setFetchTrigger("WishList");
        }
    }, [isFocused]);

    const getButtonStyle = (type) => {
        return {
            justifyContent: "center",
            alignItems: "center",
            width: 67,
            height: 38,
            borderRadius: 15,
            backgroundColor:
                selectedType === type ? Colors.green : "transparent",
        };
    };

    const getTextStyle = (type) => {
        return {
            borderRadius: 15,
            color: Colors.TextColor,
            fontSize: 16,
            fontWeight: "500",
            lineHeight: 22,
            color: selectedType === type ? Colors.white : Colors.black,
        };
    };

    return (
        <View style={styles.container}>
            <Header title="Wishlist" navigation={navigation} />
            <SearchBar />
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "95%",
                    marginTop: 20,
                }}
            >
                <TouchableOpacity
                    style={getButtonStyle("All")}
                    onPress={() => handlePress("All")}
                >
                    <Text style={getTextStyle("All")}>All</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={getButtonStyle("Indices")}
                    onPress={() => handlePress("Indices")}
                >
                    <Text style={getTextStyle("Indices")}>Indices</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={getButtonStyle("Forex")}
                    onPress={() => handlePress("Forex")}
                >
                    <Text style={getTextStyle("Forex")}>Forex</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={getButtonStyle("Crypto")}
                    onPress={() => handlePress("Crypto")}
                >
                    <Text style={getTextStyle("Crypto")}>Crypto</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={getButtonStyle("Stock")}
                    onPress={() => handlePress("Stock")}
                >
                    <Text style={getTextStyle("Stock")}>Stock</Text>
                </TouchableOpacity>
            </View>

            <CartList
                navigation={navigation}
                type={''}
                fetchTrigger={fetchTrigger}
                selectedType={selectedType}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    chart: {
        marginVertical: 16,
    },
    listItems: {
        borderRadius: 15,
        color: Colors.TextColor,
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 22,
    },
});

export default Wishlist;
