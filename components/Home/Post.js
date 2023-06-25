import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

export default function NavBar({ WIDTH, HEIGHT, username, userid, status, image }) {
    const styles = StyleSheet.create({
        container: {
            position: "relative",
            marginTop: WIDTH / 10,

            width: WIDTH / 1.1,
            minHeight: WIDTH / 2.1,
            maxHeight: WIDTH * 1.5,

            borderRadius: WIDTH / 20,
            flexDirection: "column",
            alignItems: "center",

            backgroundColor: "#3B426C",
        },

        topContainer: {
            top: WIDTH / 50,

            width: "100%",
            height: WIDTH / 6.8,

            justifyContent: "center",
            alignItems: "center",

            flexDirection: "row",
        },

        logoContainer: {
            width: "20%",
            height: "100%",

            justifyContent: "center",
            alignItems: "center",
        },

        logoCover: {
            width: "65%",
            height: "80%",

            borderRadius: WIDTH / 2,

            backgroundColor: "#FFFFFF",
        },

        logo: {
            width: "100%",
            height: "100%",
        },

        nameContainer: {
            width: "60%",
            height: "100%",

            justifyContent: "center",
            alignItems: "flex-start",
        },

        username: {
            fontSize: WIDTH / 20,
            fontWeight: "600",

            color: "#FFFFFF",
        },

        userid: {
            fontSize: WIDTH / 30,
            fontWeight: "300",

            color: "#FFFFFF",
        },

        timeContainer: {
            width: "20%",
            height: "100%",

            justifyContent: "center",
            alignItems: "flex-start",
        },

        displayStatus: {
            position: "relative",
            top: WIDTH / 20,

            width: "92%",
            minHeight: WIDTH / 20,
            maxHeight: WIDTH / 5,

            overflow: "hidden",
        },

        status: {
            fontSize: WIDTH / 30,
            fontWeight: "300",
            textAlign: "justify",
            color: "#FFFFFF",
        },

        imageContainer: {
            marginTop: WIDTH / 10,

            width: "90%",
            minHeight: 0,
            maxHeight: WIDTH / 1.15,

            borderRadius: WIDTH / 40,

            overflow: "hidden",
            backgroundColor: "#313658",
        },

        bottomContainer: {
            marginTop: WIDTH / 20,
            marginBottom: WIDTH / 40,

            width: "100%",
            height: WIDTH / 8,

            paddingRight: "40%",

            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        },

        bottomItemContainer: {
            marginLeft: WIDTH / 20,

            width: "25%",
            height: "80%",

            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.logoContainer}>
                    <TouchableOpacity style={styles.logoCover}>
                        <Image resizeMode="contain" style={styles.logo} source={require("../../assets/darkAssets/profile.png")} />
                    </TouchableOpacity>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.username}>{username}</Text>
                    <Text style={styles.userid}>@{userid}</Text>
                </View>
                <View style={styles.timeContainer}>
                    <Text style={{ fontSize: WIDTH / 30, fontWeight: "300", color: "#FFFFFF" }}></Text>
                </View>
            </View>

            <View style={styles.displayStatus}>
                <Text style={styles.status}>{status}</Text>
            </View>

            <View style={styles.imageContainer}>{image && <Image source={{ uri: image }} style={{ width: "100%", height: "100%" }} />}</View>

            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.bottomItemContainer}>
                    <Image style={{ width: "40%", height: "80%" }} resizeMode="contain" source={require("../../assets/darkAssets/post-like.png")} />
                    <Text style={{ fontSize: WIDTH / 30, fontWeight: "300", color: "#FFFFFF", width: "40%" }}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomItemContainer}>
                    <Image style={{ width: "40%", height: "80%" }} resizeMode="contain" source={require("../../assets/darkAssets/post-comment.png")} />
                    <Text style={{ fontSize: WIDTH / 30, fontWeight: "300", color: "#FFFFFF", width: "40%" }}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomItemContainer}>
                    <Image style={{ width: "40%", height: "80%" }} resizeMode="contain" source={require("../../assets/darkAssets/post-share.png")} />
                    <Text style={{ fontSize: WIDTH / 30, fontWeight: "300", color: "#FFFFFF", width: "40%" }}>0</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
