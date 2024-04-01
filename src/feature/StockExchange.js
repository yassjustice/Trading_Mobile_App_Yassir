import React, { useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { Colors } from "../tools/Colors";

// components
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import CartList from "../components/CartList";
import { useState } from "react";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";

const StockExchange = ({ navigation, actual }) => {
    const [selectedType, setSelectedType] = useState("All");
    const [fetchTrigger, setFetchTrigger] = useState("");

    const data = [
        { value: 70 },
        { value: 70 },
        { value: 70 },
        { value: 70 },
        { value: 10 },
        { value: 30 },
        { value: 20 },
        { value: 100 },
        { value: 0 },
        { value: 2 },
    ];

    const handlePress = (type) => {
        setSelectedType(type);
    };



    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            console.log("StockExchange screen is focused");
            // Perform actions specific to StockExchange screen when it is focused
            setSelectedType("All");
            setFetchTrigger("StockExchange");
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
            <Header title="Stock Exchange" navigation={navigation} />
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
                type={""}
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

export default StockExchange;
