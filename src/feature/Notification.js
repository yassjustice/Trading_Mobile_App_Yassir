import React from 'react';
import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../tools/Colors';
import { StatusBar } from 'expo-status-bar';

// components
import DepositeBuyUsdt from '../components/DepositeBuyUsdt';
import StockList from '../components/StockList';

const Notifications = ({navigation}) => {



    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginBottom: 40, marginTop: 50 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back-outline" size={28} color= {Colors.TextColor} />
                </TouchableOpacity>
                <Text style={{ fontSize: 18, fontWeight: '500', color: Colors.TextColor, lineHeight: 22, marginTop: 5 }}>Notification</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                <Ionicons name="notifications" size={28} color={Colors.black} />
                </TouchableOpacity>
            </View>
            {/* Body */}
            <View style={{width: '100%', alignItems: 'center' }}>
                <View style={{width: '90%', alignItems: 'flex-start'}}>
                    <Text style={{ fontSize: 15, fontWeight: '500', color: Colors.green, lineHeight: 22, marginTop: 5 }}>Today</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 20, marginBottom: 15, height: 74, backgroundColor: "#e7f2ec", borderRadius: 10, alignItems: 'center', padding: 10}}>
                        <Image source={require('../../assets/profile_pic.png')} style={{ width: 43, height: 43, borderRadius: 10, }} />
                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '80%'}}>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#252828', lineHeight: 24 }}>You Received a payment of $940,00</Text>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: Colors.TextColor, lineHeight: 25 }}>5h ago</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 10, height: 74, backgroundColor: "#e7f2ec", borderRadius: 10, alignItems: 'center', padding: 10}}>
                        <Image source={require('../../assets/profile_pic.png')} style={{ width: 43, height: 43, borderRadius: 10, }} />
                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '80%'}}>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#252828', lineHeight: 24 }}>You Received a payment of $940,00</Text>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: Colors.TextColor, lineHeight: 25 }}>5h ago</Text>
                        </View>
                    </View>
                </View>
                <View style={{width: '90%', alignItems: 'flex-start'}}>
                    <Text style={{ fontSize: 15, fontWeight: '500', color: Colors.green, lineHeight: 22, marginTop: 5 }}>Yesterday</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 20, marginBottom: 15, height: 74, backgroundColor: "#e7f2ec", borderRadius: 10, alignItems: 'center', padding: 10}}>
                        <Image source={require('../../assets/profile_pic.png')} style={{ width: 43, height: 43, borderRadius: 10, }} />
                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '80%'}}>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#252828', lineHeight: 24 }}>You Received a payment of $940,00</Text>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: Colors.TextColor, lineHeight: 25 }}>5h ago</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 20, height: 74, backgroundColor: "#e7f2ec", borderRadius: 10, alignItems: 'center', padding: 10}}>
                        <Image source={require('../../assets/profile_pic.png')} style={{ width: 43, height: 43, borderRadius: 10, }} />
                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '80%'}}>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#252828', lineHeight: 24 }}>You Received a payment of $940,00</Text>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: Colors.TextColor, lineHeight: 25 }}>5h ago</Text>
                        </View>
                    </View>
                </View>

                <View style={{width: '90%', alignItems: 'flex-start'}}>
                    <Text style={{ fontSize: 15, fontWeight: '500', color: Colors.green, lineHeight: 22, marginTop: 5 }}>This Week</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 20, marginBottom: 15, height: 74, backgroundColor: "#e7f2ec", borderRadius: 10, alignItems: 'center', padding: 10}}>
                        <Image source={require('../../assets/profile_pic.png')} style={{ width: 43, height: 43, borderRadius: 10, }} />
                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '80%'}}>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#252828', lineHeight: 24 }}>You Received a payment of $940,00</Text>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: Colors.TextColor, lineHeight: 25 }}>5h ago</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 20, height: 74, backgroundColor: "#e7f2ec", borderRadius: 10, alignItems: 'center', padding: 10}}>
                        <Image source={require('../../assets/profile_pic.png')} style={{ width: 43, height: 43, borderRadius: 10, }} />
                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '80%'}}>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#252828', lineHeight: 24 }}>You Received a payment of $940,00</Text>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: Colors.TextColor, lineHeight: 25 }}>5h ago</Text>
                        </View>
                    </View>
                </View>
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

export default Notifications;
