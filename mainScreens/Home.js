import React, { useState, useEffect } from "react";
import { StyleSheet, StatusBar, View, Dimensions, ScrollView } from "react-native";

import NewPost from "../components/Home/NewPost";
import Post from "../components/Home/Post";
import NavBar from "../components/NavigationBar";

import { readAllData } from "../HandleFunctions/PetNetwork/index";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

export default function App() {
    const [isStatusBarHidden, setStatusBarHidden] = useState(false);
    const [Data, setData] = useState([]);
    const [mixedData, setMixedData] = useState([]);
    const [isMixed, setIsMixed] = useState(false);

    const handleScroll = (event) => {
        const { y } = event.nativeEvent.contentOffset;
        setStatusBarHidden(y > 0); // Hide status bar when scrolled
    };

    const mixData = () => {
        const shuffledData = [...Data].sort(() => Math.random() - 0.5);
        setMixedData(shuffledData);
        setIsMixed(true);
    };

    useEffect(() => {
        readAllData(setData);
    }, []);

    useEffect(() => {
        mixData();
        console.log("Mixed successfully!");
    }, [Data]);

    return (
        <View style={styles.container}>
            <StatusBar barStyle={"default"} hidden={isStatusBarHidden} />

            <ScrollView showsVerticalScrollIndicator={false} onScroll={handleScroll} scrollEventThrottle={16}>
                <NewPost WIDTH={WIDTH} HEIGHT={HEIGHT} />
                {mixedData.map((item, index) => (
                    <Post WIDTH={WIDTH} HEIGHT={HEIGHT} userid={item.uid} username={item.username} image={item.imageUrl} status={item.userStatus} key={index} />
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
