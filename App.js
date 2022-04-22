import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/components/Screens/Login";
import Account from "./src/components/Screens/Account";

const Stack = createNativeStackNavigator();

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  const fetchFonts = () => {
    return Font.loadAsync({
      PoppinsBold: require("./assets/Fonts/Poppins-SemiBold.ttf"),
      PoppinsRegular: require("./assets/Fonts/Poppins-Regular.ttf"),
      PoppinsItalic: require("./assets/Fonts/Poppins-Italic.ttf"),
      PoppinsLight: require("./assets/Fonts/Poppins-Light.ttf"),
      InterBold: require("./assets/Fonts/Inter-Bold.ttf"),
      InterRegular: require("./assets/Fonts/Inter-Regular.ttf"),
    });
  };

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={() => fetchFonts()}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen component={Login} name="Login" />
        <Stack.Screen component={Account} name="Account" />
      </Stack.Navigator>
    </NavigationContainer>
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
