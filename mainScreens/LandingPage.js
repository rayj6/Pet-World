import {} from "react";
import { View, Text, StyleSheet, Dimensions, Image, StatusBar, TouchableOpacity } from "react-native";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

export default function LandingPage() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={"default"} />
            <View style={styles.logoContainer}>
                <Image style={{ width: "100%", height: "100%" }} resizeMode="cover" source={require("../assets/darkAssets/landingpage-logo.jpeg")} />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>PET WORLD</Text>
                <Text style={styles.title}>ALL YOU NEED FOR YOUR PET</Text>
            </View>
            <View style={styles.subTitleContainer}>
                <Text style={styles.subTitle}>We bring the world to you and your pet</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.bottom1}>
                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={styles.loginTitle}>Continue your journey</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottom2}>
                    <Text style={styles.registerTitle}>Don't have an account ?</Text>
                    <TouchableOpacity>
                        <Text style={styles.register}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: WIDTH,
        height: HEIGHT,

        flexDirection: "column",
        alignItems: "center",

        backgroundColor: "#2A2F4F",
    },

    logoContainer: {
        position: "relative",
        marginTop: WIDTH / 6,

        width: WIDTH / 1.1,
        height: HEIGHT / 2.2,

        borderRadius: WIDTH / 20,
        justifyContent: "flex-end",
        alignItems: "center",
        overflow: "hidden",
    },

    titleContainer: {
        marginTop: WIDTH / 10,

        width: WIDTH / 1.1,
        height: HEIGHT / 10,

        justifyContent: "center",
        alignItems: "center",
    },

    title: {
        width: "100%",
        height: "40%",

        fontSize: WIDTH / 18,
        fontWeight: "800",

        letterSpacing: 1,
        textAlign: "center",

        color: "#FFFFFF",
    },

    subTitleContainer: {
        width: WIDTH / 1.1,
        height: HEIGHT / 20,
    },

    subTitle: {
        fontSize: WIDTH / 30,
        fontWeight: "400",

        letterSpacing: 1,
        textAlign: "center",

        color: "#CCCCCC",
    },

    bottomContainer: {
        position: "absolute",
        bottom: WIDTH / 20,

        width: WIDTH / 1.1,
        height: HEIGHT / 8,
    },

    bottom1: {
        width: "100%",
        height: "60%",
    },

    bottom2: {
        width: "100%",
        height: "40%",

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    loginBtn: {
        width: "100%",
        height: "90%",

        justifyContent: "center",
        alignItems: "center",

        borderRadius: WIDTH / 30,

        backgroundColor: "#3B426C",
    },

    loginTitle: {
        fontSize: WIDTH / 30,
        fontWeight: "500",

        letterSpacing: 1,
        textAlign: "center",

        color: "#CCCCCC",
    },

    registerTitle: {
        fontSize: WIDTH / 30,
        fontWeight: "400",

        letterSpacing: 1,
        textAlign: "center",

        color: "#CCCCCC",
    },

    register: {
        width: WIDTH / 5,
        fontSize: WIDTH / 30,
        fontWeight: "800",

        letterSpacing: 1,
        textAlign: "center",

        color: "#CCCCCC",
    },
});
