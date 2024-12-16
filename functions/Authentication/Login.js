import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { url } from "../API";

const saveLoginState = async (userId, userName) => {
  try {
    await AsyncStorage.setItem("isLoggedIn", "true");
    await AsyncStorage.setItem("userId", userId);
    await AsyncStorage.setItem("userName", userName);
  } catch (error) {
    console.error("Error saving login state", error);
  }
};

export default async function Login(email, password, navigation) {
  const data = {
    email: email,
    password: password,
  };

  const response = await axios.post(`${url}/api/auth/login`, data);
  const ResponseData = response.data;
  if (ResponseData.length > 0) {
    ResponseData.map((elm) => {
      saveLoginState(elm.userid, elm.username);
      navigation.navigate("Home");
    });
  } else if (response.data === "err") {
    alert("Please check your email & password!");
  }
}
