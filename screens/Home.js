import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  Dimensions,
  ScrollView,
} from "react-native";

import NewPost from "../components/Home/NewPost";
import Post from "../components/Home/Post";
import NavBar from "../components/NavigationBar";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Don't forget to import AsyncStorage

import { readAllData } from "../functions/PetNetwork/index";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

async function GetLocalData() {
  const userId = await AsyncStorage.getItem("userId");
  const userName = await AsyncStorage.getItem("userName");
  return { userId, userName }; // Return both values in an object
}

export default function Home({ route }) {
  const [username, setUsername] = useState("");
  const [userid, setUserId] = useState("");
  const [isStatusBarHidden, setStatusBarHidden] = useState(false);
  const [Data, setData] = useState([]);

  const handleScroll = (event) => {
    const { y } = event.nativeEvent.contentOffset;
    setStatusBarHidden(y > 0); // Hide status bar when scrolled
  };

  useEffect(() => {
    // Function to fetch and set local data from AsyncStorage
    const loadData = async () => {
      const localData = await GetLocalData();
      if (localData.userId && localData.userName) {
        setUserId(localData.userId); // Set userId from AsyncStorage
        setUsername(localData.userName); // Set username from AsyncStorage
      }
    };

    loadData();

    // Function to fetch and set data
    const fetchData = () => {
      readAllData(setData);
    };

    fetchData();

    const intervalId = setInterval(fetchData, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"default"} hidden={isStatusBarHidden} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <NewPost
          WIDTH={WIDTH}
          HEIGHT={HEIGHT}
          username={username} // Pass the state values
          userid={userid} // Pass the state values
        />
        {Data.map((item, index) => (
          <Post
            WIDTH={WIDTH}
            HEIGHT={HEIGHT}
            userid={item.userid}
            username={item.username}
            image={item.imageUrl}
            status={item.userStatus}
            key={index}
          />
        ))}
        <View style={{ height: WIDTH / 3 }} />
      </ScrollView>

      <NavBar WIDTH={WIDTH} HEIGHT={HEIGHT} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A2F4F",
    alignItems: "center",
  },
});
