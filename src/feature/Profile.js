import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../tools/Colors';
import DepositeBuyUsdt from '../components/DepositeBuyUsdt';
import Header from '../components/Header';


const Profile = ({navigation}) => {

    const [filter, setFilter] = useState('All');

    return (
        <View style={styles.container}>
            <View style={styles.header_container}>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', width: '100%', marginBottom: 40, marginTop: 50, top: -260 }}>
                <Header title="Profile" navigation={navigation} />
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
            <View style={{width: '85%', position: 'absolute', top: 250 }}>
                <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '50%'}}>
                    <Text style={{ fontSize: 15, fontWeight: '500', color: Colors.gray, lineHeight: 22, marginTop: 5 }}>Total Balance</Text>
                    <Text style={{ fontSize: 29, fontWeight: '500', color: Colors.TextColor, lineHeight: 50 }}>$3,673.90</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', height: 150, position: 'absolute', top: 340}}>
                <DepositeBuyUsdt />
            </View>

            <View style={{width: '100%', marginTop: 10, height: 300, backgroundColor: "white", borderTopLeftRadius: 25, borderTopRightRadius: 25, alignItems: 'center', position: 'absolute', top: 500 }}>
                <View style={{width: '90%', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{ fontSize: 18, fontWeight: '500', color: Colors.TextColor, lineHeight: 22 }}>Recent Transactions</Text>
                    <Text style={{ fontSize: 15, fontWeight: '500', color: Colors.green, lineHeight: 22 }}>See All</Text>
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
                <View style={{width: '90%', marginTop: 20,justifyContent: 'center', alignItems: 'center'}}>
                <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 74, borderRadius: 5, backgroundColor: '#e7f2ec', padding: 10}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '60%'}}>
                        <Ionicons name="swap-horizontal-outline" size={30} color={Colors.green} style={{ marginTop: 5 }} />
                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '70%'}}>
                            <Text style={{ fontSize: 15, fontWeight: '600', color: '#252828', lineHeight: 22 }}>Money Transfer</Text>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#252828', lineHeight: 22 }}>4h ago</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 15, fontWeight: '600', color: Colors.TextColor, lineHeight: 22 }}>$1,000.00</Text>
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
});

export default Profile;
