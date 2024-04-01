import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { RegisterUser } from "../api/userApi";

const Signup = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");

    const handleUsernameChange = (text) => {
        setUsername(text);
    };

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSignInWithGoogle = () => {
        // handle sign in with google logic here
    };

    const handleCreateNewAccount = async () => {
        // handle create new account logic here
        // Validate the data (you may add more validation as needed)
        if (!username || !email || !password) {
            // Handle validation error, show an alert, etc.
            console.error("Please fill in all the fields");
            return;
        }

        // Prepare the data for API request
        const accountData = {
            username: username,
            email: email,
            password: password,
        };

        try {
            // For now, log the data to console (replace with actual API call)
            console.log("Creating new account with data:", accountData);

            // In a real scenario, you would make an API request here
            const response = await RegisterUser(accountData);
            console.log(response.data); // see how data comes from the server
            // const response = await fetch('https://your-api-endpoint.com/create-account', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(accountData),
            // });

            // const result = await response.json();

            // Handle the API response accordingly
            
            // a redirect is needed here
        } catch (error) {
            // Handle error (e.g., network error, server error)
            console.error("Error creating account:", error.message);
            // Display an error message to the user
            // log the error 
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "600",
                    marginBottom: 10,
                    marginTop: 50,
                    color: "rgba(29, 31, 31, .8)",
                    lineHeight: 22,
                    letterSpacing: 2,
                }}
            >
                Create Account
            </Text>
            <View>
                <Text
                    style={{
                        marginRight: 10,
                        paddingBottom: 25,
                        fontSize: 15,
                        color: "#303535",
                        letterSpacing: 1,
                    }}
                >
                    Username
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Username"
                        placeholderTextColor={"#A1A3B0"}
                        value={username}
                        onChangeText={handleUsernameChange}
                        style={{ flex: 1, padding: 10, color: "#A1A3B0" }}
                    />
                    {email ? (
                        <Ionicons
                            name="checkmark-outline"
                            size={24}
                            color={email ? "green" : "gray"}
                            style={{ marginRight: 10 }}
                        />
                    ) : null}
                </View>
            </View>
            <View>
                <Text
                    style={{
                        marginRight: 10,
                        paddingBottom: 25,
                        fontSize: 15,
                        color: "#303535",
                        letterSpacing: 1,
                    }}
                >
                    Your email
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="youremail@example.com"
                        placeholderTextColor={"#A1A3B0"}
                        value={email}
                        onChangeText={handleEmailChange}
                        style={{ flex: 1, padding: 10, color: "#A1A3B0" }}
                    />
                    {email ? (
                        <Ionicons
                            name="checkmark-outline"
                            size={24}
                            color={email ? "green" : "gray"}
                            style={{ marginRight: 10 }}
                        />
                    ) : null}
                </View>
            </View>
            <View>
                <Text
                    style={{
                        marginRight: 10,
                        paddingBottom: 25,
                        fontSize: 15,
                        color: "#303535",
                        letterSpacing: 1,
                    }}
                >
                    Password
                </Text>
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
                        <TouchableOpacity
                            onPress={toggleShowPassword}
                            style={{ marginRight: 10 }}
                        >
                            <Ionicons
                                name={
                                    showPassword
                                        ? "eye-off-outline"
                                        : "eye-outline"
                                }
                                size={24}
                                color={showPassword ? "gray" : "green"}
                            />
                        </TouchableOpacity>
                    ) : null}
                </View>
            </View>

            <TouchableOpacity
                onPress={handleCreateNewAccount}
                style={{
                    backgroundColor: "#0C8140",
                    padding: 10,
                    borderRadius: 13,
                    marginVertical: 10,
                    width: 257,
                    height: 45,
                    alignItems: "center",
                    marginBottom: 20,
                }}
            >
                <Text
                    style={{
                        color: "#FFFFFF",
                        fontSize: 11,
                        lineHeight: 22,
                        letterSpacing: 1,
                    }}
                >
                    CREATE ACCOUNT
                </Text>
            </TouchableOpacity>
            <Text
                style={{
                    color: "#303535",
                    marginVertical: 30,
                    fontSize: 15,
                    fontWeight: "500",
                    lineHeight: 20,
                }}
            >
                Or Signin with Google
            </Text>
            <TouchableOpacity
                onPress={handleSignInWithGoogle}
                style={{
                    backgroundColor: "#FFFFFF",
                    padding: 10,
                    borderRadius: 13,
                    marginVertical: 10,
                    width: 257,
                    height: 50,
                    alignItems: "center",
                    marginBottom: 20,
                    flexDirection: "row",
                    justifyContent: "center",
                    borderWidth: 1,
                    borderColor: "#0C8140",
                }}
            >
                <Ionicons
                    name="logo-google"
                    size={24}
                    color="black"
                    style={{ marginRight: 10 }}
                />
                <Text
                    style={{ color: "#303535", fontSize: 18, lineHeight: 22 }}
                >
                    Google
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text
                    style={{
                        fontWeight: 700,
                        lineHeight: 22,
                        color: "#303535",
                        letterSpacing: 1,
                    }}
                >
                    You have an account?
                    <Text style={{ color: "#0C8140" }}> Sign in</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F4F4",
        alignItems: "center",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        borderRadius: 13,
        width: 332,
        height: 49,
        backgroundColor: "#FFFFFf",
    },
});

export default Signup;
