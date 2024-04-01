import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNav from "./src/tools/BottomNav";
import DrawerNav from "./src/tools/DrawerNav";

// feature
import Notifications from "./src/feature/Notification";
import EditProfile from "./src/feature/EditProfile";
import NotificationSeting from "./src/feature/NotificationSeting";
import LanguageSeting from "./src/feature/LanguageSeting";
import WhishlistProduct from "./src/feature/WhishlistProduct";
import StockExchangeProduct from "./src/feature/StockExchangeProduct";
import StartScreen from "./src/feature/StartScreen";
import Login from "./src/feature/Login";
import Signup from "./src/feature/SIgnup";
import Walet from "./src/feature/Walet";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="StartScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Walet" component={Walet} />
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="Home" component={DrawerNav} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen
          name="NotificationSeting"
          component={NotificationSeting}
        />
        <Stack.Screen name="LanguageSeting" component={LanguageSeting} />
        <Stack.Screen name="WhishlistProduct" component={WhishlistProduct} />
        <Stack.Screen
          name="StockExchangeProduct"
          component={StockExchangeProduct}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
    // <Setings />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
