import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, Dimensions } from 'react-native';
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";
import { Colors } from '../tools/Colors';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryLine } from "victory-native";


// components
import CircularProgressBar from '../components/cicleActivity';
import Header from '../components/Header';

const Activity = ({navigation}) => {
    const { width } = Dimensions.get('window');
    const data = [
        { x: 1, y: 3 },
        { x: 2, y: 3.3 },
        { x: 3, y: 2.9 },
        { x: 4, y: 4.2 },
        { x: 5, y: 3.5 },
        { x: 6, y: 4.5 },
        { x: 7, y: 3.9 },
        { x: 8, y: 3.8 },
        { x: 9, y: 4.1 },
        { x: 10, y: 3.6 },
        { x: 11, y: 3.8 },
        { x: 12, y: 3.4 },
        { x: 13, y: 3.7 },
        { x: 14, y: 3.5 },
        { x: 15, y: 3.8 },
        { x: 16, y: 3.6 },
        { x: 17, y: 3.9 },
        { x: 18, y: 3.7 },
        { x: 19, y: 3.8 },
        { x: 20, y: 3.6 },
        { x: 21, y: 3.9 },
        { x: 22, y: 3.7 },
        { x: 23, y: 3.8 },
        { x: 24, y: 4.6 },
      ];

  return (
    <View style={styles.container}>
    <Header title="Activity" navigation={navigation} />

    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '95%'}}>
        <View style={{ flexDirection: 'column', justifyContent: 'center'}}>
            <View style={{ flexDirection: 'colum', justifyContent: 'center', width: 158, marginBottom: 20, backgroundColor: Colors.green, borderRadius: 43, padding: 10, height: 85}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '50%', alignItems: 'center', marginLeft: 20}}>
                    <Image source={require('../../assets/Transaction.png')} style={{width: 45, height: 45}} />
                    <Text style={{ fontSize: 21, fontWeight: '700', color: Colors.white, lineHeight: 22}}>17</Text>
                </View>
                <Text style={{ fontSize: 12, fontWeight: '500', color: Colors.white, lineHeight: 15, marginLeft: 20}}>Total transactions</Text>
                <Text style={{ fontSize: 12, fontWeight: '500', color: Colors.white, lineHeight: 15, marginLeft: 20}}>This week</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: 158, marginBottom: 20, backgroundColor: "#17223B", borderRadius: 43, alignItems: 'center', padding: 10, height: 85}}>
                <Text style={{ fontSize: 21, fontWeight: '500', color: "#9FA2B2", lineHeight: 22}}>Send</Text>
                <Feather name="send" size={24} color="white" />
            </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
        <CircularProgressBar percentage={70} />
        </View>
    </View>


    <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '95%', marginTop: 20}}>
      <View style={{width: '80%', marginVertical: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: 20}}>
          <TouchableOpacity style={{width: '12%', height: 25, borderRadius: 5, backgroundColor: Colors.green, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{ fontSize: 15, fontWeight: '500', color: Colors.white, lineHeight: 22}}>1h</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width: '12%', height: 25, borderRadius: 5, backgroundColor: Colors.green, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{ fontSize: 15, fontWeight: '500', color: Colors.white, lineHeight: 22}}>6h</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width: '12%', height: 25, borderRadius: 5, backgroundColor: Colors.black, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{ fontSize: 15, fontWeight: '500', color: Colors.white, lineHeight: 22}}>24h</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width: '12%', height: 25, borderRadius: 5, backgroundColor: Colors.green, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{ fontSize: 15, fontWeight: '500', color: Colors.white, lineHeight: 22}}>1w</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width: '12%', height: 25, borderRadius: 5, backgroundColor: Colors.green, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{ fontSize: 15, fontWeight: '500', color: Colors.white, lineHeight: 22}}>1m</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width: '12%', height: 25, borderRadius: 5, backgroundColor: Colors.green, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{ fontSize: 15, fontWeight: '500', color: Colors.white, lineHeight: 22}}>1y</Text>
          </TouchableOpacity>
      </View>
      <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 20, height: 63, borderRadius: 15, alignItems: 'center', padding: 10}} onPress={() => navigation.navigate('WhishlistProduct')}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 120, alignItems: 'center'}}>
            <View style={{ justifyContent: 'center', width: 56, height: 66, borderRadius: 15, alignItems: 'center', backgroundColor: "#E0DFDF"}}>
                <Image source={require('../../assets/bitcoin-logo.png')} style={{width: 22, height: 26}} />
            </View>
            <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '50%', marginLeft: 10}}>
                <Text style={{ fontSize: 16, fontWeight: '600', color: Colors.TextColor, lineHeight: 22}}>BTC</Text>
                <Text style={{ fontSize: 12, fontWeight: '400', color: Colors.gray, lineHeight: 15}}>+1,6%</Text>
            </View>
        </View>
        <VictoryLine
                style={{
                data: { 
                    stroke: "#F6543E",
                    strokeWidth: 1
                },
                parent: { border: "1px solid #ccc"}
                }}
                animate
                data={data}
                width={width * 0.4}
                height={width * 0.40}
                x="x"
                y="y"
            />
        <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '25%'}}>
          <Text style={{ fontSize: 16, fontWeight: '500', color: Colors.TextColor, lineHeight: 22}}>$2,673.90</Text>
          <Text style={{ fontSize: 12, fontWeight: '400', color: Colors.TextColor, lineHeight: 22}}>2.73 BTC</Text>
        </View>
      </TouchableOpacity>

      <View style={{width: '100%', height: 1, backgroundColor: "#E0DFDF", marginBottom: 20}}></View>
      <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 20, height: 63, borderRadius: 15, alignItems: 'center', padding: 10}} onPress={() => navigation.navigate('WhishlistProduct')}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 120, alignItems: 'center'}}>
            <View style={{ justifyContent: 'center', width: 56, height: 66, borderRadius: 15, alignItems: 'center', backgroundColor: "#E0DFDF"}}>
                <Image source={require('../../assets/bitcoin-logo.png')} style={{width: 22, height: 26}} />
            </View>
            <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '50%', marginLeft: 10}}>
                <Text style={{ fontSize: 16, fontWeight: '600', color: Colors.TextColor, lineHeight: 22}}>BTC</Text>
                <Text style={{ fontSize: 12, fontWeight: '400', color: Colors.gray, lineHeight: 15}}>+1,6%</Text>
            </View>
        </View>
        <VictoryLine
                style={{
                data: { 
                    stroke: "#F6543E",
                    strokeWidth: 1
                },
                parent: { border: "1px solid #ccc"}
                }}
                animate
                data={data}
                width={width * 0.4}
                height={width * 0.40}
                x="x"
                y="y"
            />
        <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '25%'}}>
          <Text style={{ fontSize: 16, fontWeight: '500', color: Colors.TextColor, lineHeight: 22}}>$2,673.90</Text>
          <Text style={{ fontSize: 12, fontWeight: '400', color: Colors.TextColor, lineHeight: 22}}>2.73 BTC</Text>
        </View>
      </TouchableOpacity>
      <View style={{width: '100%', height: 1, backgroundColor: "#E0DFDF", marginBottom: 20}}></View>
      <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 20, height: 63, borderRadius: 15, alignItems: 'center', padding: 10}} onPress={() => navigation.navigate('WhishlistProduct')}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 120, alignItems: 'center'}}>
            <View style={{ justifyContent: 'center', width: 56, height: 66, borderRadius: 15, alignItems: 'center', backgroundColor: "#E0DFDF"}}>
                <Image source={require('../../assets/bitcoin-logo.png')} style={{width: 22, height: 26}} />
            </View>
            <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '50%', marginLeft: 10}}>
                <Text style={{ fontSize: 16, fontWeight: '600', color: Colors.TextColor, lineHeight: 22}}>BTC</Text>
                <Text style={{ fontSize: 12, fontWeight: '400', color: Colors.gray, lineHeight: 15}}>+1,6%</Text>
            </View>
        </View>
        <VictoryLine
                style={{
                data: { 
                    stroke: "#F6543E",
                    strokeWidth: 1
                },
                parent: { border: "1px solid #ccc"}
                }}
                animate
                data={data}
                width={width * 0.4}
                height={width * 0.40}
                x="x"
                y="y"
            />
        <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '25%'}}>
          <Text style={{ fontSize: 16, fontWeight: '500', color: Colors.TextColor, lineHeight: 22}}>$2,673.90</Text>
          <Text style={{ fontSize: 12, fontWeight: '400', color: Colors.TextColor, lineHeight: 22}}>2.73 BTC</Text>
        </View>
      </TouchableOpacity>
      <View style={{width: '100%', height: 1, backgroundColor: "#E0DFDF", marginBottom: 20}}></View>
      <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 20, height: 63, borderRadius: 15, alignItems: 'center', padding: 10}} onPress={() => navigation.navigate('WhishlistProduct')}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 120, alignItems: 'center'}}>
            <View style={{ justifyContent: 'center', width: 56, height: 66, borderRadius: 15, alignItems: 'center', backgroundColor: "#E0DFDF"}}>
                <Image source={require('../../assets/bitcoin-logo.png')} style={{width: 22, height: 26}} />
            </View>
            <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '50%', marginLeft: 10}}>
                <Text style={{ fontSize: 16, fontWeight: '600', color: Colors.TextColor, lineHeight: 22}}>BTC</Text>
                <Text style={{ fontSize: 12, fontWeight: '400', color: Colors.gray, lineHeight: 15}}>+1,6%</Text>
            </View>
        </View>
        <VictoryLine
                style={{
                data: { 
                    stroke: "#F6543E",
                    strokeWidth: 1
                },
                parent: { border: "1px solid #ccc"}
                }}
                animate
                data={data}
                width={width * 0.4}
                height={width * 0.40}
                x="x"
                y="y"
            />
        <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '25%'}}>
          <Text style={{ fontSize: 16, fontWeight: '500', color: Colors.TextColor, lineHeight: 22}}>$2,673.90</Text>
          <Text style={{ fontSize: 12, fontWeight: '400', color: Colors.TextColor, lineHeight: 22}}>2.73 BTC</Text>
        </View>
      </TouchableOpacity>

    </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  chart: {
    marginVertical: 16,
  },
  listItems: {
    borderRadius: 15,
    color: Colors.TextColor,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
  }
});

export default Activity;
