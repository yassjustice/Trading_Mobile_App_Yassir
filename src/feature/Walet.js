import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../tools/Colors';
import DepositeBuyUsdt from '../components/DepositeBuyUsdt';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryLine } from "victory-native";

// components
import Header from '../components/Header';


const Walet = ({navigation}) => {
    const { width, height } = Dimensions.get('window');
    const data = [
        { x: 'Jan', y: 3 },
        { x: 'Feb', y: 3.3 },
        { x: 'Mar', y: 2.9 },
        { x: 'Apr', y: 4.2 },
        { x: 'May', y: 3.5 },
        { x: 'Jun', y: 4.1 },
        { x: 'Jul', y: 3.9 },
        { x: 'Aug', y: 3.8 },
        { x: 'Sep', y: 4.0 },
        { x: 'Oct', y: 3.6 },
        { x: 'Nov', y: 3.8 },
        { x: 'Dec', y: 3.4 },
    ];
    const data2 = [
        { x: 'Jan', y: 3 },
        { x: 'Feb', y: 2.3 },
        { x: 'Mar', y: 3.9 },
        { x: 'Apr', y: 2.2 },
        { x: 'May', y: 2.5 },
        { x: 'Jun', y: 3.5 },
        { x: 'Jul', y: 2.9 },
        { x: 'Aug', y: 2.8 },
        { x: 'Sep', y: 2.1 },
        { x: 'Oct', y: 3.6 },
        { x: 'Nov', y: 1.9 },
        { x: 'Dec', y: 2.4 },    
    ];
    const [filter, setFilter] = useState('All');

    return (
        <View style={styles.container}>
            <View style={styles.header_container}>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', width: '100%', marginBottom: 40, marginTop: 50, top: -260 }}>
                <Header title="Walet" navigation={navigation} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '95%', top: 100, height: 150, borderRadius: 25, alignItems: 'center', padding: 20, position: 'absolute' }}>
                <View style={{ width: 117, height: 117, borderRadius: 60, borderWidth: 3.5, borderColor: Colors.background, marginTop: 15 }}>
                    <Image source={require('../../assets/profile_pic.png')} style={{ width: 110, height: 110, borderRadius: 60, }} />
                </View>
                <View style={{ flexDirection: 'column', width: '60%'}}>
                    <Text style={{ fontSize: 15, fontWeight: '600', color: Colors.TextColor, lineHeight: 22, marginTop: 1 }}>Full Name</Text>
                    <Text style={{ fontSize: 15, fontWeight: '500', color: Colors.TextColor, lineHeight: 22, }}>Email@example.com</Text>
                    <Text style={{ fontSize: 15, fontWeight: '500', color: Colors.TextColor, lineHeight: 22, }}>Phone Number</Text>
                </View>
            </View>

            {/* body */}
            <View style={{width: '85%', position: 'absolute', top: 250, alignItems: "center" }}>
                <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '50%'}}>
                    <Text style={{ fontSize: 15, fontWeight: '500', color: Colors.gray, lineHeight: 22, marginTop: 5 }}>Total Balance</Text>
                    <Text style={{ fontSize: 29, fontWeight: '500', color: Colors.TextColor, lineHeight: 50 }}>$3,673.90</Text>
                </View>
            </View>

            <View style={{width: '100%', height: 500, backgroundColor: "white", borderTopLeftRadius: 25, borderTopRightRadius: 25, alignItems: 'center' }}>
                <View style={{width: '90%', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{ fontSize: 18, fontWeight: '500', color: Colors.TextColor, lineHeight: 22 }}>Profit & Loss</Text>
                </View>
                <View style={{width: '80%', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
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
                <View style={{width: '90%',justifyContent: 'center', alignItems: 'center'}}>
                    <View style={styles.chartcontainer}>
                        <VictoryChart>
                            <VictoryLine
                                style={{
                                data: { 
                                    stroke: "#A1A1A1",
                                    strokeWidth: 3.5
                                },
                                parent: { border: "1px solid #ccc"}
                                }}
                                animate
                                interpolation="natural"
                                data={data}
                                width={width * 0.9}
                                height={250}
                                x="x"
                                y="y"
                            />
                            <VictoryLine
                                style={{
                                data: { 
                                    stroke: "#7357F6",
                                    strokeWidth: 3.5
                                },
                                parent: { border: "1px solid #ccc"}
                                }}
                                animate
                                interpolation="natural"
                                data={data2}
                                width={width * 0.9}
                                height={250}
                                x="x"
                                y="y"
                            />
                        </VictoryChart>
                    </View>
                </View>         
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    header_container: {
        alignItems: 'center',
        height: 210,
        width: '150%',
        backgroundColor: '#b8d6c5',
        borderBottomRightRadius: 2900,
        borderBottomLeftRadius: 2900,
    },
    chartcontainer: {
        width: '105%',
        height: 288,
        backgroundColor: 'white',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 2,
        marginTop: 20,
        shadowColor: 'black',
        shadowRadius: 10,
        shadowOpacity: .2,
        
    },
});

export default Walet;
