import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

export default function NavBar({ WIDTH, HEIGHT }) {
    const styles = StyleSheet.create({
        container: {
            position: "relative",
            marginTop: WIDTH / 10,

            width: WIDTH / 1.1,
            height: WIDTH * 1.17,

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
            height: WIDTH / 5,

            overflow: "hidden",
        },

        status: {
            fontSize: WIDTH / 30,
            fontWeight: "300",
            textAlign: "justify",
            color: "#FFFFFF",
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
                    <Text style={styles.username}>Ray Johnson</Text>
                    <Text style={styles.userid}>@rayj6</Text>
                </View>
                <View style={styles.timeContainer}>
                    <Text style={{ fontSize: WIDTH / 30, fontWeight: "300", color: "#FFFFFF" }}>Just now</Text>
                </View>
            </View>

            <View style={styles.displayStatus}>
                <Text style={styles.status}>
                    scrambled it to make a type specimen book. It has survived only five centuries, but also the leap into electronic type remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker
                </Text>
            </View>
        </View>
    );
}
