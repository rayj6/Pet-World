import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from "react-native";

import Login from "../../HandleFunctions/Authentication/Login";
import Register from "../../HandleFunctions/Authentication/Register";

const url = "https://055c-2402-800-6195-2293-803a-fb84-ba5b-f525.ngrok-free.app";

export default function authenticationBtn({ WIDTH, HEIGHT, navigation, type, email, password, username, userid }) {
    const styles = StyleSheet.create({
        authenticationBtn: {
            marginTop: WIDTH / 6,
            marginLeft: WIDTH / 20,

            width: WIDTH / 1.12,
            height: HEIGHT / 18,

            borderRadius: WIDTH / 40,
            justifyContent: "center",
            alignItems: "center",

            backgroundColor: "#3B426C",
        },

        authenticationTitle: {
            fontSize: WIDTH / 25,
            fontWeight: "600",
            letterSpacing: 1,
            color: "#FFFFFF",
        },
    });

    if (type === "login") {
        return (
            <TouchableOpacity style={styles.authenticationBtn} onPress={() => Login(url, email, password, navigation)}>
                <Text style={styles.authenticationTitle}>Sign in</Text>
            </TouchableOpacity>
        );
    } else if (type === "register") {
        return (
            <TouchableOpacity style={styles.authenticationBtn} onPress={() => Register(url, email, password, username, userid, navigation)}>
                <Text style={styles.authenticationTitle}>Register</Text>
            </TouchableOpacity>
        );
    }
}
