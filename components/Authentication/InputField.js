import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";

export default function InputField({ WIDTH, HEIGHT, title, placeholder, isSecure, value, setValue }) {
    const styles = StyleSheet.create({
        inputTitle: {
            marginTop: WIDTH / 10,
            marginLeft: WIDTH / 20,

            fontSize: WIDTH / 28,
            fontWeight: "800",

            color: "#FFFFFF",
        },

        inputField: {
            marginTop: WIDTH / 50,
            marginLeft: WIDTH / 20,
            marginRight: WIDTH / 20,

            paddingLeft: WIDTH / 40,
            paddingRight: WIDTH / 40,

            width: WIDTH / 1.12,
            height: HEIGHT / 20,

            borderWidth: 1,
            borderColor: "#FFFFFF",
            borderRadius: WIDTH / 50,

            fontSize: WIDTH / 30,
            fontWeight: "300",

            color: "#FFFFFF",
        },
    });

    return (
        <View>
            <Text style={styles.inputTitle}>{title}</Text>
            <TextInput
                value={value}
                onChangeText={(text) => setValue(text)}
                secureTextEntry={isSecure}
                style={styles.inputField}
                placeholderTextColor={"#FFFFFF"}
                placeholder={placeholder}
            />
        </View>
    );
}
