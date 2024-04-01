import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../tools/Colors';


const Header = ({ title, navigation }) => {
    // console.log('what', navigation.navigate('walet'));
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '95%', marginBottom: 40, marginTop: 50 }}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu" size={28} color= {Colors.green} />
            </TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: '500', color: Colors.TextColor, lineHeight: 22, marginTop: 5 }}>{title}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
            <Ionicons name="notifications" size={28} color={Colors.black} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: 'darkslateblue'
    },
    text: {
        color: '#fff',
        fontSize: 23,
        textAlign: 'center'
    }
});

export default Header;
