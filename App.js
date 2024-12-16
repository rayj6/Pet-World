import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Home from "./screens/Home";
import LandingPage from "./screens/LandingPage";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Message from "./screens/Message";
import { LogBox } from "react-native";

const Stack = createNativeStackNavigator();
LogBox.ignoreAllLogs();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginState = async () => {
      try {
        const loggedInStatus = await AsyncStorage.getItem("isLoggedIn");
        console.log(loggedInStatus);
        if (loggedInStatus === "true") {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Error checking login state", error);
      }
    };

    checkLoginState();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isLoggedIn ? "LandingPage" : "Home"}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
