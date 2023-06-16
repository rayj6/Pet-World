import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

export default function NavBar({ WIDTH, HEIGHT }) {
    const styles = StyleSheet.create({
        container: {
            position: "absolute",
            bottom: WIDTH / 20,

            width: WIDTH / 1.05,
            height: WIDTH / 7,

            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",

            borderRadius: WIDTH / 10,

            backgroundColor: "#917FB3",
        },

        navItem: {
            width: "12%",
            height: "70%",

            justifyContent: "center",
            alignItems: "center",
        },

        navItemLogo: {
            width: "60%",
            height: "60%",
        },
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.navItem}>
                <Image style={styles.navItemLogo} resizeMode="contain" source={require("../assets/darkAssets/navBtn-explore.png")} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem}>
                <Image style={styles.navItemLogo} resizeMode="contain" source={require("../assets/darkAssets/navBtn-store.png")} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem}>
                <Image style={styles.navItemLogo} resizeMode="contain" source={require("../assets/darkAssets/navBtn-home.png")} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem}>
                <Image style={styles.navItemLogo} resizeMode="contain" source={require("../assets/darkAssets/navBtn-message.png")} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem}>
                <Image style={styles.navItemLogo} resizeMode="contain" source={require("../assets/darkAssets/navBtn-menu.png")} />
            </TouchableOpacity>
        </View>
    );
}
