import React, { useEffect, useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { Colors } from "../tools/Colors";
import useEffectLogic from "../hooks/useEffectLogic";
import { getsymbolbyname } from "../api/stockApi";
import { fetchstockExchangeData } from "../helpers/stockExchangeHelp";
import { fetchWishListData } from "../helpers/wishListHelp";

const CartList = ({ navigation, type, selectedType, fetchTrigger }) => {
    const [data, setData] = useState([]);
    const [requestBodies, setRequestBodies] = useState([]);

    const fetchDataForWishlist = async () => {
      try {
        const wishListData = await fetchWishListData(selectedType);
        // Process and set the WishList data in the state
        setData(wishListData);
      } catch (error) {
        // Handle error if needed
        console.error("Error fetching WishList data in CartList:", error);
      }
    };

    const fetchDataForStock = async () => {
      try {
        const stockExchangeData = await fetchstockExchangeData(selectedType);
        // Process and set the stockExchange data in the state
        setData(stockExchangeData);
      } catch (error) {
        // Handle error if needed
        console.error("Error fetching stockExchange data in CartList:", error);
      }
    };

    const fetchData = async (trigger) => {
        try {
            // Use different API call functions based on the 'type' prop
            if (trigger === "WishList") {
                await fetchDataForWishlist();
            } else if (trigger === "StockExchange") {
                await fetchDataForStock();
            }
            // Add more conditions as needed
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        console.log("CartList received type:", fetchTrigger);
        fetchData(fetchTrigger);
    }, [fetchTrigger, selectedType]);

    // ... (rest of the component remains unchanged)

    // console.log(selectedType);

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const symbolData = {
    //         symbol_name: "BTCUSD",
    //       };
    //       const response = await getsymbolbyname(symbolData);
    //       const jsonData = JSON.parse(response.data.body).json_data;

    //       // Assuming jsonData is an array
    //       const formattedData = jsonData.map((item) => ({
    //         real_name: item.symbol_name,
    //         symbol_name: item.symbol_name,
    //         data: [
    //           {
    //             open: item.open,
    //             close: item.close,
    //             high: item.high,
    //             low: item.low,
    //             // Add other properties as needed
    //           },
    //         ],
    //       }));

    //       // Set the formatted data in the state
    //       setData(formattedData);
    //       console.log(formattedData);
    //     } catch (error) {
    //       console.error("Error fetching data:", error);
    //     }
    //   };

    //   fetchData();
    // }, [selectedType]);

    const getSymbolSign = (open, close) => {
        const result = ((close - open) / open) * 100;
        if (result >= 0) {
            return true;
        } else {
            return false;
        }
    };

    const navigateToWishlist = (newData, real_name, changes, symbol_name) => {
        navigation.navigate("WhishlistProduct", {
            newData,
            real_name,
            changes,
            symbol_name,
        });
    };

    return (
        <ScrollView style={{ marginBottom: 40, height: 800, width: "100%" }}>
            <View
                style={{
                    flexDirection: "column",
                    justifyContent: "space-between",
                    width: "95%",
                    marginTop: 20,
                }}
            >
                {data &&
                    data.map((item, index) => {
                        return (
                            <TouchableOpacity
                                style={styles.cart}
                                onPress={() =>
                                    type === "wishlist"
                                        ? navigateToWishlist(
                                              item.data,
                                              item.real_name,
                                              ((item.data[item.data.length - 1]
                                                  .close -
                                                  item.data[
                                                      item.data.length - 1
                                                  ].open) /
                                                  item.data[
                                                      item.data.length - 1
                                                  ].open) *
                                                  100,
                                              item.symbol_name
                                          )
                                        : navigation.navigate(
                                              "StockExchangeProduct"
                                          )
                                }
                                key={index}
                            >
                                <View style={styles.imagecontainer}>
                                    <Image
                                        source={require("../../assets/image2.png")}
                                        style={{ width: 32, height: 45 }}
                                    />
                                    <Text style={styles.title}>
                                        {item.real_name || item.symbol_name}
                                    </Text>
                                </View>
                                <View style={styles.textcontainer}>
                                    <Text style={styles.title}>
                                        $
                                        {item.data[
                                            item.data.length - 1
                                        ].close.toFixed(2)}
                                    </Text>
                                    {getSymbolSign(
                                        item.data[item.data.length - 1].open,
                                        item.data[item.data.length - 1].close
                                    ) ? (
                                        <Text
                                            style={[
                                                styles.result,
                                                { color: Colors.green },
                                            ]}
                                        >
                                            +
                                            {(
                                                ((item.data[
                                                    item.data.length - 1
                                                ].close -
                                                    item.data[
                                                        item.data.length - 1
                                                    ].open) /
                                                    item.data[
                                                        item.data.length - 1
                                                    ].open) *
                                                100
                                            ).toFixed(2)}
                                            %
                                        </Text>
                                    ) : (
                                        <Text
                                            style={[
                                                styles.result,
                                                { color: Colors.red },
                                            ]}
                                        >
                                            {(
                                                ((item.data[
                                                    item.data.length - 1
                                                ].close -
                                                    item.data[
                                                        item.data.length - 1
                                                    ].open) /
                                                    item.data[
                                                        item.data.length - 1
                                                    ].open) *
                                                100
                                            ).toFixed(2)}
                                            %
                                        </Text>
                                    )}
                                </View>
                            </TouchableOpacity>
                        );
                    })}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        alignContent: "center",
        width: "100%",
    },
    cart: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 20,
        height: 63,
        backgroundColor: Colors.white,
        borderRadius: 15,
        alignItems: "center",
        padding: 10,
    },
    imagecontainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 110,
        alignItems: "center",
    },
    textcontainer: {
        flexDirection: "column",
        justifyContent: "space-between",
        width: "25%",
        alignItems: "center",
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
        color: Colors.TextColor,
        lineHeight: 22,
    },
    result: {
        fontSize: 16,
        fontWeight: "500",
        color: "red",
        lineHeight: 22,
    },
});

export default CartList;

// const apiUrl =
//   "https://v8mnfh1qh1.execute-api.us-east-2.amazonaws.com/dev/getsymbolbyname";
// const apiUrl = "https://v8mnfh1qh1.execute-api.us-east-2.amazonaws.com/dev/trading/getsymbolbyname";

// useEffect(() => {
//   console.log("fetch the data");
//   const fetchData = useEffectLogic(
//     setData,
//     apiUrl,
//     selectedType,
//     requestBodies,
//     setRequestBodies
//   );
//   fetchData();
// }, [apiUrl, selectedType]);

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const symbolData = {
//         symbol_name: "BTCUSD",
//       }
//       const response = await getsymbolbyname(symbolData);
//       const jsonData = JSON.parse(response.data.body).json_data;
//       // console.log(jsonData);
//       // Assuming the response data structure is an array of items
//       // setData(response.data);
//       // console.log("aaaaa",response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   fetchData();
// }, [selectedType]);
