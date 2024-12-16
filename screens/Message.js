import { View, Text, StyleSheet, Dimensions, Image, TextInput } from "react-native";

import TopBar from "../components/Messenger/TopBar.js";
import SearchBar from "../components/Messenger/SearchBar.js";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

export default function Message() {
    return (
        <View style={styles.container}>
            <TopBar />
            <SearchBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: WIDTH,
        height: HEIGHT,

        alignItems: "center",
        backgroundColor: "#2A2F4F",
    },
});
