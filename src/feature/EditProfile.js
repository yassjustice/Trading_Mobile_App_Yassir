import React, { useRef, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../tools/Colors';
import PhoneInput from "react-native-phone-number-input";

const EditProfile = ({navigation}) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef<PhoneInput>(null);

    const handleSave = () => {
        // TODO: Implement save functionality
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginBottom: 50, marginTop: 30}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back-outline" size={28} color= {Colors.TextColor} />
                </TouchableOpacity>
                <Text style={{ fontSize: 18, fontWeight: '500', color: Colors.TextColor, lineHeight: 22, marginTop: 5 }}>Setings</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                     <Ionicons name="notifications" size={28} color={Colors.black} />
                </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
                <Text style={{ fontSize: 15, fontWeight: '500', color: '#303535', lineHeight: 22, marginBottom: 20 }}>Full Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Full Name"
                    placeholderTextColor={Colors.gray}
                    value={fullName}
                    onChangeText={setFullName}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={{ fontSize: 15, fontWeight: '500', color: '#303535', lineHeight: 22, marginBottom: 20 }}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Example@gmail.com"
                    placeholderTextColor={Colors.gray}
                    value={fullName}
                    onChangeText={setFullName}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={{ fontSize: 15, fontWeight: '500', color: '#303535', lineHeight: 22, marginBottom: 20 }}>Phone Number</Text>
                <PhoneInput
                defaultValue={value}
                defaultCode="MA"
                layout="first"
                onChangeText={(text) => {
                setValue(text);
                }}
                onChangeFormattedText={(text) => {
                setFormattedValue(text);
                }}
                disableArrowIcon
                containerStyle={{ width: '100%', height: 58, borderRadius: 13, backgroundColor: Colors.white }}
                placeholder="00000000"
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%'}}>
            <View style={styles.inputContainer}>
                <Text style={{ fontSize: 15, fontWeight: '500', color: '#303535', lineHeight: 22, marginBottom: 20 }}>Country</Text>
                <TextInput
                    style={styles.input}
                    placeholder="country                       "
                    placeholderTextColor={Colors.gray}
                    value={fullName}
                    onChangeText={setFullName}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={{ fontSize: 15, fontWeight: '500', color: '#303535', lineHeight: 22, marginBottom: 20 }}>Gender</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Female / Male              "
                    placeholderTextColor={Colors.gray}
                    value={fullName}
                    onChangeText={setFullName}
                />
            </View>
            </View>
            <View style={styles.inputContainer}>
                <Text style={{ fontSize: 15, fontWeight: '500', color: '#303535', lineHeight: 22, marginBottom: 20 }}>Address</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Your_Address"
                    placeholderTextColor={Colors.gray}
                    value={fullName}
                    onChangeText={setFullName}
                />
            </View>
            <View style={{  justifyContent: 'space-between', width: '90%', alignItems: 'center', marginTop: 20}}>
            <TouchableOpacity style={{ flexDirection: 'row', width: '65%', marginTop: 20, marginBottom: 20, height: 50, backgroundColor: Colors.green, borderRadius: 13, justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate('EditProfile')}>
                <Text style={{ fontSize: 15, fontWeight: '500', color: Colors.white }}>Save</Text>
            </TouchableOpacity>      
            </View>      
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: Colors.background
    },
    inputContainer: {
        marginBottom: 16,
    },
        input: {
        backgroundColor: Colors.white,
        borderRadius: 13,
        height: 49,
        padding: 8,
    },
});

export default EditProfile;
