import React, { useState } from "react";
import { StyleSheet, StatusBar, View, Dimensions, ScrollView } from "react-native";

import NewPost from "./components/Home/NewPost";
import Post from "./components/Home/Post";
import NavBar from "./components/NavigationBar";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

export default function App() {
    const [isStatusBarHidden, setStatusBarHidden] = useState(false);

    const handleScroll = (event) => {
        const { y } = event.nativeEvent.contentOffset;
        setStatusBarHidden(y > 0); // Hide status bar when scrolled
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle={"default"} hidden={isStatusBarHidden} />

            <ScrollView showsVerticalScrollIndicator={false} onScroll={handleScroll} scrollEventThrottle={16}>
                <NewPost WIDTH={WIDTH} HEIGHT={HEIGHT} />
                <Post WIDTH={WIDTH} HEIGHT={HEIGHT} />
                <Post WIDTH={WIDTH} HEIGHT={HEIGHT} />
                <Post WIDTH={WIDTH} HEIGHT={HEIGHT} />
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
