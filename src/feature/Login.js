import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '../tools/Colors';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleForgotPassword = () => {
        // handle forgot password logic here
    };

    const handleSignInWithGoogle = () => {
        // handle sign in with google logic here
    };

    const handleCreateNewAccount = () => {
        // handle create new account logic here
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 70, marginTop: 60, color: "rgba(29, 31, 31, .8)", lineHeight: 22 }}>Login</Text>
            <View style={{ marginBottom: 0}}>
                <Text style={{ marginRight: 10, paddingBottom: 25, fontSize: 15, color :"#303535" }}>Your email</Text>
                <View style={styles.inputContainer}>
                <TextInput
                    placeholder="youremail@example.com"
                    placeholderTextColor={"#A1A3B0"}
                    value={email}
                    onChangeText={handleEmailChange}
                    style={{ flex: 1, padding: 10, color: "#A1A3B0" }}
                />
                {email ? (
                    <Ionicons name="checkmark-outline" size={24} color={email ? 'green' : 'gray'} style={{ marginRight: 10 }} />
                ) : null}
                </View>
            </View>
            <View>
            <Text style={{ marginRight: 10, paddingBottom: 25, fontSize: 15, color :"#303535", }}>Password</Text>
                <View style={styles.inputContainer}>
                <TextInput
                    placeholder="****************"
                    placeholderTextColor={"#A1A3B0"}
                    value={password}
                    onChangeText={handlePasswordChange}
                    secureTextEntry={!showPassword}
                    style={{ flex: 1, padding: 10, color: "#A1A3B0" }}
                />
                {password ? (
                <TouchableOpacity onPress={toggleShowPassword} style={{ marginRight: 10 }}>
                    <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={24} color={showPassword ? 'gray' : 'green'} />
                </TouchableOpacity>
                ) : null}
                </View>
            </View>

            <View style={{ marginBottom: 10 }}>
                <TouchableOpacity onPress={handleForgotPassword} style={{ alignItems: 'flex-start', width: 362, height: 29, marginLeft: 25}}>
                    <Text style={{fontSize: 15, color :"#303535", lineHeight: 22 }}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={{ backgroundColor: '#0C8140', padding: 10, borderRadius: 13, marginVertical: 10, width: 257, height: 45, alignItems: 'center', marginBottom: 20 }} onPress={() => navigation.navigate('Home')}>
                <Text style={{ color: '#FFFFFF', fontSize: 18, lineHeight: 22 }}>Login</Text>
            </TouchableOpacity>
            <Text style={{ color: '#303535', marginVertical: 30, fontSize:15, fontWeight: '500', lineHeight: 20 }}>Or Signin with Google</Text>
            <TouchableOpacity onPress={handleSignInWithGoogle} style={{ backgroundColor: '#FFFFFF', padding: 10, borderRadius: 13, marginVertical: 10, width: 257, height: 50, alignItems: 'center', marginBottom: 20, flexDirection: 'row', justifyContent: 'center', borderWidth: 1, borderColor: '#0C8140' }}>
                <Ionicons name="logo-google" size={24} color="black" style={{ marginRight: 10 }} />
                <Text style={{ color: '#303535', fontSize: 18, lineHeight: 22 }}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')} >
                <Text style={{ fontWeight: 700, lineHeight: 22, color: "#303535" }}>You don't have an account?<Text style={{ color: '#0C8140' }}> Sign up</Text></Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 13,
        width: 332,
        height: 49,
        backgroundColor: '#FFFFFf',
    },
});

export default Login;
