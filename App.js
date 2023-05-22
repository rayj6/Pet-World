import { StyleSheet, StatusBar, View, Dimensions } from "react-native";

import NewPost from "./components/Home/NewPost";
import Post from "./components/Home/Post";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={"default"} />
            <NewPost WIDTH={WIDTH} HEIGHT={HEIGHT} />
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
