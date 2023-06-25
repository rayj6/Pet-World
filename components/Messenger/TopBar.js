import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

export default function TopBar() {
    return (
        <View style={styles.topBar}>
            <View>
                <Text style={styles.title}>Hello, welcome</Text>
                <Text style={styles.titleUsername}>Ray Johnson</Text>
            </View>
            <TouchableOpacity style={styles.editContainer}>
                <Image resizeMode="contain" style={{ width: "80%", height: "70%" }} source={require("../../assets/darkAssets/messenger-edit.png")} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    topBar: {
        marginTop: WIDTH / 6,

        width: WIDTH / 1.08,
        height: WIDTH / 10,

        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
    },

    title: {
        fontSize: WIDTH / 30,
        fontWeight: "300",
        color: "#FFFFFF",
    },

    titleUsername: {
        fontSize: WIDTH / 20,
        fontWeight: "600",
        color: "#FFFFFF",
    },

    editContainer: {
        width: WIDTH / 12,
        height: WIDTH / 12,
    },
});
