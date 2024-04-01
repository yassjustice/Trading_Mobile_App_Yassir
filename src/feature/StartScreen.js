import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '../tools/Colors';

const StartScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Image source={require('../../assets/logo.png')} style={styles.logo} />
            <Text style={{ fontSize: 20, marginBottom: 15, color: 'green', fontWeight: '500' }}>
                Start Trading Now
            </Text>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#000' }]} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#F4F4F4',
    },
    logo: {
        width: 213,
        height: 75,
        marginBottom: 50,
    },
    button: {
        backgroundColor: '#0C8140',
        padding: 10,
        borderRadius: 11,
        marginVertical: 10,
        width: 209,
        height: 44,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
    },
});

export default StartScreen;
