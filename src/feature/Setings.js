import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Colors } from '../tools/Colors';
import DepositeBuyUsdt from '../components/DepositeBuyUsdt';
import Header from '../components/Header';


const Setings = ({navigation}) => {

    const [filter, setFilter] = useState('All');

    return (
        <View style={styles.container}>
            <View style={styles.header_container}>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', width: '100%', marginBottom: 40, marginTop: 50, top: -260 }}>
            <Header title="Setings" navigation={navigation} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '95%', top: 100, height: 150, borderRadius: 25, alignItems: 'center', padding: 20, position: 'absolute' }}>
                <View style={{ width: 117, height: 117, borderRadius: 60, borderWidth: 3.5, borderColor: Colors.background, marginTop: 15 }}>
                    <Image source={require('../../assets/profile_pic.png')} style={{ width: 110, height: 110, borderRadius: 60, }} />
                </View>
            </View>

            {/* body */}
            <View style={{width: '85%', position: 'absolute', top: 250 }}>
                <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '50%'}}>
                    <Text style={{ fontSize: 15, fontWeight: '600', color: Colors.TextColor, lineHeight: 22, marginTop: 5, paddingLeft: 10 }}>Full Name</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 15, paddingLeft: 10}}>
                        <Text style={{ fontSize: 15, fontWeight: '500', color: '#252828', lineHeight: 22 }}>Email@gmail.com  </Text>
                        <Text style={{ fontSize: 15, fontWeight: '500', color: Colors.TextColor, lineHeight: 25 }}> | </Text>
                        <Text style={{ fontSize: 15, fontWeight: '500', color: '#252828', lineHeight: 22 }}>  Phone Number</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'column', justifyContent: 'space-around', width: '100%', marginTop: 15, height: 118, backgroundColor: Colors.white, borderRadius: 10}}>
                    <TouchableOpacity style={{ flexDirection: 'row', width: '65%', paddingLeft: 10, alignItems: 'center'}} onPress={() => navigation.navigate('EditProfile')}>
                        <Ionicons name="person-circle-outline" size={24} color={Colors.black} />
                        <Text style={{ fontSize: 15, fontWeight: '500', color: '#252828', paddingLeft: 10 }}>Edit Profile Information</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', width: '55%', paddingLeft: 10, alignItems: 'center'}} onPress={() => navigation.navigate('NotificationSeting')}>
                        <Ionicons name="notifications" size={24} color={Colors.black} />
                        <Text style={{ fontSize: 15, fontWeight: '500', color: '#252828', paddingLeft: 10 }}>Notifications</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', width: '55%', paddingLeft: 10, alignItems: 'center'}} onPress={() => navigation.navigate('LanguageSeting')}>
                        <Ionicons name="language" size={24} color={Colors.black} />
                        <Text style={{ fontSize: 15, fontWeight: '500', color: '#252828', paddingLeft: 10 }}>Language</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'space-around', width: '100%', marginVertical: 15, height: 85, backgroundColor: Colors.white, borderRadius: 10}}>
                    <View style={{ flexDirection: 'row', width: '55%', paddingLeft: 10, alignItems: 'center'}}>
                        <MaterialIcons name="security" size={24} color="black" />
                        <Text style={{ fontSize: 15, fontWeight: '500', color: '#252828', paddingLeft: 10 }}>Security</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '55%', paddingLeft: 10}}>
                        <View style={{ flexDirection: 'row', width: '45%', justifyContent: 'space-between', alignItems: 'center'}}>
                            <MaterialCommunityIcons name="theme-light-dark" size={24} color="black" />
                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#252828', paddingLeft: 10 }}>Theme</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'space-around', width: '100%', height: 85, backgroundColor: Colors.white, borderRadius: 10}}>
                    <View style={{ flexDirection: 'row', width: '65%', paddingLeft: 10}}>
                        <Ionicons name="help-circle" size={24} color={Colors.black} />
                        <Text style={{ fontSize: 15, fontWeight: '500', color: '#252828', paddingLeft: 10, alignItems: 'center' }}>Help & Center</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '65%', paddingLeft: 10}}>
                        <MaterialIcons name="privacy-tip" size={24} color="black" />
                        <Text style={{ fontSize: 15, fontWeight: '500', color: '#252828', paddingLeft: 10, alignItems: 'center' }}>Privacy & Policy</Text>
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

export default Setings;
