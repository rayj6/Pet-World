import React, { useState, useEffect } from "react";
import { StyleSheet, StatusBar, View, Dimensions, ScrollView } from "react-native";

import NewPost from "../components/Home/NewPost";
import Post from "../components/Home/Post";
import NavBar from "../components/NavigationBar";

import { readAllData } from "../HandleFunctions/PetNetwork/index";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

export default function Home() {
    const [isStatusBarHidden, setStatusBarHidden] = useState(false);
    const [Data, setData] = useState([]);

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
    }, [Data]);

    return (
        <View style={styles.container}>
            <StatusBar barStyle={"default"} hidden={isStatusBarHidden} />

            <ScrollView showsVerticalScrollIndicator={false} onScroll={handleScroll} scrollEventThrottle={16}>
                <NewPost WIDTH={WIDTH} HEIGHT={HEIGHT} />
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
