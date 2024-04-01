import React from 'react';
import { StyleSheet, View, ScrollView, Text, ImageBackground, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../tools/Colors';

const DepositeBuyUsdt = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <ImageBackground source={require('../../assets/Rectangle.png')} style={styles.card}>
            <View style={{ flexDirection: 'row', width: '85%', marginBottom: 20, marginTop: 25 }}>
                <Image source={require('../../assets/binance.png')} style={{ width: 30, height: 30, marginRight: 25 }} />
                <Text style={{ fontSize: 18, fontWeight: '500', color: Colors.white, lineHeight: 22, marginTop: 5 }}>BINANCE</Text>
            </View>
            <View style={{ width: '85%', marginBottom: 20 }}>
                <Text style={{ fontSize: 15, fontWeight: '300', color: Colors.white, lineHeight: 22}}>DEPOSIT USDC</Text>
                <Text style={{ fontSize: 13, fontWeight: '400', color: Colors.white, lineHeight: 24 }}>via Binance</Text>
            </View>
        </ImageBackground>
        <View style={[styles.card, { backgroundColor: '#5a2c37' }]}>
            <View style={{ flexDirection: 'row', width: '85%', marginBottom: 20, marginTop: 25 }}>
                <Ionicons name="card" size={24} color="#00d1ff" style={{ marginRight: 25 }} />
            </View>
            <View style={{ width: '85%', marginBottom: 20 }}>
                <Text style={{ fontSize: 15, fontWeight: '300', color: Colors.white, lineHeight: 22}}>BUY USDC</Text>
                <Text style={{ fontSize: 13, fontWeight: '100', color: Colors.gray, lineHeight: 24 }}>from Credit Card</Text>
            </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 204,
    height: 137,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default DepositeBuyUsdt;