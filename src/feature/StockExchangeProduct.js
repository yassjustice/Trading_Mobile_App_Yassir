import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Colors } from '../tools/Colors';
import { Ionicons } from '@expo/vector-icons';
import { LineChart } from "react-native-gifted-charts";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

// components
import StockList from '../components/StockList';

const StockExchnageProduct = ({ navigation }) => {

    const data=[ {value:192}, {value:103}, {value:158}, {value:202}, {value:0}, {value:190}, {value:198}]
    const { width, height } = Dimensions.get('window');

    return (
        <ScrollView style={{flex: 1, backgroundColor: Colors.background}}>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '95%', marginBottom: 40, marginTop: 50 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '45%', alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="chevron-back-outline" size={28} color= {Colors.TextColor} />
                        </TouchableOpacity>
                        <Image source={require('../../assets/btc.png')} style={{width: 30, height: 30}} />
                        <Text style={{ fontSize: 16, fontWeight: '500', color: Colors.TextColor, lineHeight: 22}}>Bitcoin  <Text style={{ fontSize: 12, fontWeight: '500', color: '#969B9C', lineHeight: 22}}>(BTC)</Text>  <Ionicons name="star-outline" size={18} color= {Colors.TextColor} /></Text>
                    </View>
                    <View style={{justifyContent: 'center', width: 90, height: 38, borderRadius: 25, backgroundColor: "#ECF4FF", alignItems: 'center'}}>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: "#0063F5", lineHeight: 22, paddingLeft: 3}}><MaterialCommunityIcons name="swap-horizontal-circle" size={18} color="#0063F5" />Exchange</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '71%'}}>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: Colors.TextColor, lineHeight: 22}}>₹98,509.75</Text>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: Colors.green, lineHeight: 22}}>+ 1700.254 (9.77%)</Text>
                </View>

                <View style={{width: '100%', height: 300, borderTopLeftRadius: 25, borderTopRightRadius: 25, alignItems: 'center', justifyContent: 'center', marginLeft: 20}}>
                    <LineChart
                        data = {data} 
                        width={width - width * 0.15}
                        height={205}
                        backgroundColor="transparent"
                        color='#0063F5'
                        hideDataPoints
                        maxValue={200}
                        minValue={0}
                        noOfSections={5}
                        adjustToWidth
                        showYAxisIndices
                        showXAxisIndices
                        yAxisLabelTexts={['192', '194', '196', '198', '200']}
                        xAxisLabelTexts={['6:00', '10:00', '14:00', '18:00', '22:00', '2:00']}
                    />
                </View>

                <View style={{width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <TouchableOpacity style={{width: '15%', height: 30, borderRadius: 20, backgroundColor: Colors.white, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: "gray"}}>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: Colors.black, lineHeight: 22}}>1h</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: '15%', height: 30, borderRadius: 20, backgroundColor: Colors.white, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: "gray"}}>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: Colors.black, lineHeight: 22}}>6h</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: '15%', height: 30, borderRadius: 20, backgroundColor: "#ECF4FF", alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: "#0063F5"}}>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: "#0063F5", lineHeight: 22}}>24h</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: '15%', height: 30, borderRadius: 20, backgroundColor: Colors.white, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: "gray"}}>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: Colors.black, lineHeight: 22}}>1w</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: '15%', height: 30, borderRadius: 20, backgroundColor: Colors.white, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: "gray"}}>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: Colors.black, lineHeight: 22}}>1m</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: '15%', height: 30, borderRadius: 20, backgroundColor: Colors.white, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: "gray"}}>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: Colors.black, lineHeight: 22}}>1y</Text>
                    </TouchableOpacity>
                </View>

                <View style={{width: '90%', justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.white, borderRadius: 8, marginTop: 20, height: 50 , shadowColor: "#000", shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.15, shadowRadius: 3.84, elevation: 5}}>
                    <View style={{width: '90%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                        <View style={{width: '40%', height: 50, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                            <Image source={require('../../assets/btc.png')} style={{width: 40, height: 39}} />
                            <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                                <Text style={{ fontSize: 16, fontWeight: '500', color: Colors.black, lineHeight: 22}}>Bitcoin</Text>
                                <Text style={{ fontSize: 12, fontWeight: '500', color: "#6C757D", lineHeight: 22}}>00.00 BTC</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: Colors.black, lineHeight: 22}}>₹00.00</Text>
                            <Text style={{ fontSize: 12, fontWeight: '500', color: "#6C757D", lineHeight: 22}}>00.00%</Text>
                        </View>
                    </View>
                </View>

                <View style={{width: '90%', justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.white, borderRadius: 8, marginTop: 10, height: 50 , shadowColor: "#000", shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.15, shadowRadius: 3.84, elevation: 5}}>
                    <View style={{width: '90%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                        <Text style={{ fontSize: 16, fontWeight: '500', color: Colors.black, lineHeight: 22}}>Transactions</Text>
                        <Ionicons name="chevron-forward-outline" size={24} color= {Colors.TextColor} />
                    </View>
                </View>

                <View style={{width: '90%', justifyContent: 'center', borderRadius: 8, marginTop: 10, borderBottomColor: "#E5E5E5", borderBottomWidth: 1, paddingBottom: 10}}>
                    <Text style={{ fontSize: 16, fontWeight: '500', lineHeight: 22, marginTop: 10}}>Market Stats</Text>
                    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                        <View style={{width: '30%', justifyContent: 'space-between', flexDirection: 'row'}}>
                            <Image source={require('../../assets/market.png')} style={{width: 29, height: 23}} />
                            <Text style={{ fontSize: 12, fontWeight: '500', color: "#6C757D", lineHeight: 22, width: 100, paddingLeft: 20}}>Market Cap</Text>
                        </View>
                        <Text style={{ fontSize: 16, fontWeight: '500', color: Colors.TextColor, lineHeight: 22}}>₹19.8 trillion</Text>
                    </View>
                    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                        <View style={{width: '30%', justifyContent: 'space-between', flexDirection: 'row'}}>
                            <Ionicons name="stats-chart" size={24} color= {"#0063F5"} />
                            <Text style={{ fontSize: 12, fontWeight: '500', color: "#6C757D", lineHeight: 22, width: 100, paddingLeft: 20}}>Volume</Text>
                        </View>
                        <Text style={{ fontSize: 16, fontWeight: '500', color: Colors.TextColor, lineHeight: 22}}>₹4.1 trillion</Text>
                    </View>
                    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                        <View style={{width: '30%', justifyContent: 'space-between', flexDirection: 'row'}}>
                            <Ionicons name="pie-chart" size={24} color= {"#0063F5"} />
                            <Text style={{ fontSize: 12, fontWeight: '500', color: "#6C757D", lineHeight: 22, width: 130, paddingLeft: 20}}>Circulating Supply </Text>
                        </View>
                        <Text style={{ fontSize: 16, fontWeight: '500', color: Colors.TextColor, lineHeight: 22}}>116.0 million</Text>
                    </View>
                    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                        <View style={{width: '30%', justifyContent: 'space-between', flexDirection: 'row'}}>
                            <Image source={require('../../assets/market.png')} style={{width: 29, height: 23}} />
                            <Text style={{ fontSize: 12, fontWeight: '500', color: "#6C757D", lineHeight: 22, width: 100, paddingLeft: 20}}>Popularity</Text>
                        </View>
                        <Text style={{ fontSize: 16, fontWeight: '500', color: Colors.TextColor, lineHeight: 22}}>#2</Text>
                    </View>
                </View>

                <View style={{width: '90%', justifyContent: 'center', borderRadius: 8, marginTop: 10, paddingBottom: 10}}>
                    <Text style={{ fontSize: 16, fontWeight: '500', lineHeight: 22, marginTop: 10}}>About</Text>
                    <Text style={{ fontSize: 12, fontWeight: '500', color: "#6C757D", lineHeight: 22, marginTop: 10}}>The world’s first cryptocurrency, Bitcoin is stored and exchanged securely on the internet through a digital ledger known as a blockchain. Bitcoins are divisible into smaller units known as satoshis — each satoshi is worth 0.00000001 bitcoin.</Text>
                    <Text style={{color: "#0063F5"}}>Read More</Text>
                </View>

                <View style={{width: '90%', justifyContent: 'center', borderRadius: 8, marginTop: 10, paddingBottom: 10}}>
                    <Text style={{ fontSize: 16, fontWeight: '500', lineHeight: 22, marginTop: 10}}>Top Stories</Text>
                    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: "#6C757D", lineHeight: 22, width: '73%'}}>Why Bitcoiners Are Rooting for This Latest China Mining Ban to Finally, Actually Be Real ...</Text>
                        <Image source={require('../../assets/stori1.png')} style={{width: 90, height: 44}} />
                    </View>
                    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: "#6C757D", lineHeight: 22, width: '73%'}}>Why Bitcoiners Are Rooting for This Latest China Mining Ban to Finally, Actually Be Real ...</Text>
                        <Image source={require('../../assets/stori2.png')} style={{width: 90, height: 44}} />
                    </View>
                    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: "#6C757D", lineHeight: 22, width: '73%'}}>Why Bitcoiners Are Rooting for This Latest China Mining Ban to Finally, Actually Be Real ...</Text>
                        <Image source={require('../../assets/stori3.png')} style={{width: 90, height: 44}} />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.background,
    }
});

export default StockExchnageProduct;
