import { View, Text, StyleSheet, Dimensions, Image, TextInput } from "react-native";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

export default function SearchBar() {
    return (
        <View style={styles.searchBar}>
            <View style={styles.searchBarIcon}>
                <Image style={{ width: "60%", height: "50%" }} resizeMode="contain" source={require("../../assets/darkAssets/messenger-search.png")} />
            </View>
            <TextInput style={styles.searchBarInput} placeholder="Search something here..." placeholderTextColor={"#917FB3"} />
        </View>
    );
}

const styles = StyleSheet.create({
    searchBar: {
        marginTop: WIDTH / 12,

        width: WIDTH / 1.15,
        height: WIDTH / 10,

        flexDirection: "row",
        borderRadius: WIDTH / 40,

        backgroundColor: "#3B426C",
    },

    searchBarIcon: {
        width: "12%",
        height: "100%",

        justifyContent: "center",
        alignItems: "center",
    },

    searchBarInput: {
        width: "85%",
        height: "100%",

        fontSize: WIDTH / 28,
        color: "#FFFFFF",
    },
});
