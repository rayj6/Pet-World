import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from "react-native";
import axios from "axios";

const url = "http://localhost:3000";

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

    const Login = () => {
        const data = {
            email: email,
            password: password,
        };

        axios
            .post(`${url}/login`, data)
            .then((response) => {
                if (response.data === "Login successful") {
                    console.log("Login successfully!");
                    navigation.navigate("Home");
                }
            })
            .catch((error) => {
                alert("Please check your email & password!");
            });
    };

    const Register = () => {
        const data = {
            email: email,
            password: password,
            username: username,
            userid: userid,
        };

        axios
            .post(`${url}/register`, data)
            .then((response) => {
                if (response.data === "Data inserted successfully") {
                    console.log("Register successfully!");
                }
            })
            .catch((error) => {
                alert("Please check your information!");
            });
    };

    if (type === "login") {
        return (
            <TouchableOpacity style={styles.authenticationBtn} onPress={Login}>
                <Text style={styles.authenticationTitle}>Sign in</Text>
            </TouchableOpacity>
        );
    } else if (type === "register") {
        return (
            <TouchableOpacity style={styles.authenticationBtn} onPress={Register}>
                <Text style={styles.authenticationTitle}>Register</Text>
            </TouchableOpacity>
        );
    }
}
