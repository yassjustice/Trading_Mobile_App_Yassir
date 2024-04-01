import React from 'react';
import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../tools/Colors';
import { StatusBar } from 'expo-status-bar';

// components
import DepositeBuyUsdt from '../components/DepositeBuyUsdt';
import StockList from '../components/StockList';
import CircularProgressBar from '../components/cicleActivity';
import Header from '../components/Header';

const Home = ({navigation}) => {

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Header title="Home" navigation={navigation} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '95%'}}>
                <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '50%'}}>
                    <Text style={{ fontSize: 15, fontWeight: '500', color: Colors.gray, lineHeight: 22, marginTop: 5 }}>Total Balance</Text>
                    <Text style={{ fontSize: 29, fontWeight: '500', color: Colors.TextColor, lineHeight: 50 }}>$32,673.90</Text>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: 121, height: 42, borderRadius: 5, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: "#5DDC80", marginTop: 15 }}>
                    <Text style={{ fontSize: 13, fontWeight: '400', color: "#5DDC80", lineHeight: 22 }}>+12.43 (32.2%)</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', height: 150}}>
            <DepositeBuyUsdt />
            </View>
            <View style={{width: '100%', marginTop: 10, height: 500, backgroundColor: "white", borderTopLeftRadius: 25, borderTopRightRadius: 25, alignItems: 'center' }}>
                <View style={{width: '95%', alignItems: 'flex-end'}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '50%', marginTop: 10, marginBottom: 20}}>
                        <TouchableOpacity style={{ flexDirection: 'column', justifyContent: 'space-between'}}>
                            <Ionicons name="arrow-down-circle-outline" size={30} color={Colors.green} />
                            <Text style={{ fontSize: 12, fontWeight: '500', color: Colors.gray, lineHeight: 15 }}>Buy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'column', justifyContent: 'space-between'}}>
                            <Ionicons name="arrow-up-circle-outline" size={30} color={Colors.green} />
                            <Text style={{ fontSize: 12, fontWeight: '500', color: Colors.gray, lineHeight: 15 }}>Sell</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
                            <View style={{ justifyContent: 'center', width: 23, height: 23, borderRadius: 15, borderColor: Colors.green, alignItems: 'center', borderWidth: 2, marginTop: 5}}>
                                <Ionicons name="swap-horizontal-outline" size={15} color={Colors.green} />
                            </View>
                            <Text style={{ fontSize: 12, fontWeight: '500', color: Colors.gray, lineHeight: 15 }}>Swap</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
                            <View style={{ justifyContent: 'center', width: 23, height: 23, borderRadius: 15, borderColor: Colors.green, alignItems: 'center', borderWidth: 2, marginTop: 5 }}>
                                <Ionicons name="settings-outline" size={15} color={Colors.green} />
                            </View>
                            <Text style={{ fontSize: 12, fontWeight: '500', color: Colors.gray, lineHeight: 15 }}>Settings</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <StockList />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
});

export default Home;
