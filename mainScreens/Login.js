import { useState } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from "react-native";

import InputField from "../components/Authentication/InputField";
import AuthenticationBtn from "../components/Authentication/AuthenticationBtn";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>SIGN IN</Text>
            <Text style={styles.subTitle}>To continue your journey</Text>

            <InputField
                WIDTH={WIDTH}
                HEIGHT={HEIGHT}
                title={"Email / phone number"}
                placeholder={"Your email"}
                isSecure={false}
                value={email}
                setValue={setEmail}
            />

            <InputField WIDTH={WIDTH} HEIGHT={HEIGHT} title={"Password"} placeholder={"Password"} isSecure={true} value={password} setValue={setPassword} />

            <AuthenticationBtn WIDTH={WIDTH} HEIGHT={HEIGHT} navigation={navigation} type={"login"} email={email} password={password} />

            <View style={styles.functionContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                    <Text style={styles.functionTitle}>Don't have an account ?</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.functionTitle}>Forget your password ?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2A2F4F",
    },

    title: {
        marginTop: WIDTH / 6,
        marginLeft: WIDTH / 20,

        fontSize: WIDTH / 10,
        fontWeight: "800",

        color: "#FFFFFF",
    },

    subTitle: {
        marginTop: WIDTH / 50,
        marginLeft: WIDTH / 20,

        fontSize: WIDTH / 20,
        fontWeight: "300",

        color: "#FFFFFF",
    },

    functionContainer: {
        marginTop: WIDTH / 30,
        marginLeft: WIDTH / 20,

        alignItems: "center",
        justifyContent: "space-between",

        flexDirection: "row",
        width: WIDTH / 1.12,
        height: HEIGHT / 20,
    },

    functionTitle: {
        fontSize: WIDTH / 30,
        fontWeight: "300",
        textDecorationLine: "underline",
        color: "#FFFFFF",
    },
});
