import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Colors } from "../tools/Colors";
import { Ionicons } from "@expo/vector-icons";
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";

// components
import StockList from "../components/StockList";

const Product = ({ navigation, route }) => {
  // const [timeSet, setTimeSet] = useState("24h");
  const [data, setData] = useState([]);
  const { newData, real_name, changes, symbol_name } = route.params;

  console.log(changes);

  useEffect(() => {
    const values = newData.slice(-10).map((item) => item.close);

    let minValue = Math.min(...values);
    let maxValue = Math.max(...values);

    const lastData = newData.slice(-10).map((item) => ({
      value: ((item.close - minValue) / (maxValue - minValue)) * 200,
    }));

    console.log(lastData);
    setData(lastData);
  }, []);

  // useEffect(() => {
  //   const lastItem = newData[newData.length - 1];

  //   const currentDate = new Date(lastItem?.time || new Date());

  //   const filtered = newData.filter((item) => {
  //     const itemDate = new Date(item.time);

  //     switch (timeSet) {
  //       case "1h":
  //         return itemDate > new Date(currentDate - 1 * 60 * 60 * 1000);

  //       case "6h":
  //         return itemDate > new Date(currentDate - 6 * 60 * 60 * 1000);

  //       case "24h":
  //         return itemDate > new Date(currentDate - 24 * 60 * 60 * 1000);

  //       case "1w":
  //         return itemDate > new Date(currentDate - 7 * 24 * 60 * 60 * 1000);

  //       case "1m":
  //         return itemDate > new Date(currentDate - 30 * 24 * 60 * 60 * 1000);

  //       case "1y":
  //         return itemDate > new Date(currentDate - 365 * 24 * 60 * 60 * 1000);

  //       default:
  //         return true;
  //     }
  //   });

  //   setData(filtered);
  // }, [timeSet, newData]);

  const { width, height } = Dimensions.get("window");
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "95%",
          marginBottom: 40,
          marginTop: 50,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "45%",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back-outline"
              size={28}
              color={Colors.TextColor}
            />
          </TouchableOpacity>
          <Image
            source={require("../../assets/image2.png")}
            style={{ width: 32, height: 45 }}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: Colors.TextColor,
              lineHeight: 22,
            }}
          >
            {real_name || symbol_name}
          </Text>
        </View>
        {changes < 0 ? (
          <View
            style={{
              justifyContent: "center",
              width: 86,
              height: 38,
              borderRadius: 15,
              backgroundColor: Colors.red,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                color: Colors.white,
                lineHeight: 22,
              }}
            >
              {changes.toFixed(2)}%{" "}
              <Ionicons
                name="chevron-down-outline"
                size={16}
                color={Colors.white}
              />
            </Text>
          </View>
        ) : (
          <View
            style={{
              justifyContent: "center",
              width: 86,
              height: 38,
              borderRadius: 15,
              backgroundColor: Colors.green,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                color: Colors.white,
                lineHeight: 22,
              }}
            >
              +{changes.toFixed(2)}%{" "}
              <Ionicons
                name="chevron-up-outline"
                size={16}
                color={Colors.white}
              />
            </Text>
          </View>
        )}
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "95%",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            width: "28%",
            alignItems: "center",
            backgroundColor: Colors.white,
            borderRadius: 15,
            padding: 10,
          }}
        >
          <Text
            style={{
              fontSize: 13,
              fontWeight: "500",
              color: "#969B9C",
              lineHeight: 22,
            }}
          >
            High
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              color: Colors.TextColor,
              lineHeight: 22,
            }}
          >
            ${newData[newData.length - 1].high.toFixed(2)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            width: "28%",
            alignItems: "center",
            backgroundColor: Colors.white,
            borderRadius: 15,
            padding: 10,
          }}
        >
          <Text
            style={{
              fontSize: 13,
              fontWeight: "300",
              color: "#969B9C",
              lineHeight: 22,
            }}
          >
            Low
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              color: Colors.TextColor,
              lineHeight: 22,
            }}
          >
            ${newData[newData.length - 1].low.toFixed(2)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            width: "28%",
            alignItems: "center",
            backgroundColor: Colors.white,
            borderRadius: 15,
            padding: 10,
          }}
        >
          <Text
            style={{
              fontSize: 13,
              fontWeight: "500",
              color: "#969B9C",
              lineHeight: 22,
            }}
          >
            Average
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              color: Colors.TextColor,
              lineHeight: 22,
            }}
          >
            ${newData[newData.length - 1].close.toFixed(2)}
          </Text>
        </View>
      </View>

      <View
        style={{
          width: "80%",
          marginTop: 40,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: "12%",
            height: 25,
            borderRadius: 5,
            backgroundColor: Colors.white,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: Colors.black,
              lineHeight: 22,
            }}
          >
            1h
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "12%",
            height: 25,
            borderRadius: 5,
            backgroundColor: Colors.white,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: Colors.black,
              lineHeight: 22,
            }}
          >
            6h
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "12%",
            height: 25,
            borderRadius: 5,
            backgroundColor: Colors.black,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: Colors.white,
              lineHeight: 22,
            }}
          >
            24h
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "12%",
            height: 25,
            borderRadius: 5,
            backgroundColor: Colors.white,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: Colors.black,
              lineHeight: 22,
            }}
          >
            1w
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "12%",
            height: 25,
            borderRadius: 5,
            backgroundColor: Colors.white,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: Colors.black,
              lineHeight: 22,
            }}
          >
            1m
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "12%",
            height: 25,
            borderRadius: 5,
            backgroundColor: Colors.white,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: Colors.black,
              lineHeight: 22,
            }}
          >
            1y
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "100%",
          marginVertical: 10,
          height: 300,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 20,
        }}
      >
        <LineChart
          data={data}
          width={width - width * 0.15}
          height={205}
          backgroundColor="transparent"
          curved
          color="green"
          areaChart
          hideDataPoints
          startFillColor="#bfdcc7"
          maxValue={200}
          minValue={0}
          noOfSections={5}
          adjustToWidth
          showYAxisIndices
          showXAxisIndices
          yAxisLabelTexts={["192", "194", "196", "198", "200"]}
          xAxisLabelTexts={["6:00", "10:00", "14:00", "18:00", "22:00", "2:00"]}
        />
      </View>
      <TouchableOpacity
        style={{
          width: 169,
          height: 50,
          borderRadius: 15,
          backgroundColor: Colors.green,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: Colors.white,
            lineHeight: 22,
          }}
        >
          Auto Trade
        </Text>
      </TouchableOpacity>
      <StockList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.background,
  },
});

export default Product;
