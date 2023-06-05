import { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

import { saveUserInfoToFirestore } from "../../HandleFunctions/PetNetwork/index";

export default function NewPost({ WIDTH, HEIGHT }) {
    const styles = StyleSheet.create({
        container: {
            position: "relative",
            top: WIDTH / 6,
            marginBottom: WIDTH / 8,

            width: WIDTH / 1.1,
            minHeight: WIDTH / 2.5,
            maxHeight: WIDTH * 2,

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

        moreContainer: {
            width: "20%",
            height: "100%",

            justifyContent: "center",
            alignItems: "center",
        },

        moreCover: {
            width: "40%",
            height: "40%",

            justifyContent: "center",
            alignItems: "center",
        },

        more: {
            width: "100%",
            height: "100%",
        },

        postInput: {
            position: "relative",
            top: WIDTH / 20,

            width: "90%",

            fontSize: WIDTH / 32,
            fontWeight: "300",
            color: "#FFFFFF",
        },

        imageContainer: {
            marginTop: WIDTH / 10,

            width: "90%",
            minHeight: 0,
            maxHeight: WIDTH / 1.15,

            borderRadius: WIDTH / 40,

            overflow: "hidden",
        },

        addItemContainer: {
            position: "relative",
            marginTop: WIDTH / 20,
            marginBottom: WIDTH / 30,

            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",

            width: "100%",
            height: WIDTH / 12,

            paddingLeft: WIDTH / 40,
            paddingRight: WIDTH / 20,
        },

        addItemCover: {
            width: WIDTH / 12,
            height: WIDTH / 12,

            alignItems: "center",
            justifyContent: "center",
        },

        addItemLogo: {
            width: "60%",
            height: "60%",
        },

        shareBtn: {
            width: WIDTH / 5,
            height: WIDTH / 15,

            alignItems: "center",
            justifyContent: "center",

            borderWidth: 1,
            borderColor: "#FDE2F3",
            borderRadius: WIDTH / 50,
        },

        shareBtnText: {
            fontSize: WIDTH / 30,
            color: "#FDE2F3",
        },
    });

    const [image, setImage] = useState(null);
    const [username, setUsername] = useState("");
    const [userid, setUserid] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        // Request permission to access the device's image library or camera
        (async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== "granted") {
                alert("Permission to access media library denied!");
            }
        })();
    }, []);

    const selectImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            if (Array.isArray(result.assets) && result.assets.length > 0) {
                setImage(result.assets[0].uri);
            }
        }
    };

    function handlePost() {
        saveUserInfoToFirestore(status, setStatus, image, setImage);
    }

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
                <View style={styles.moreContainer}>
                    <TouchableOpacity style={styles.moreCover}>
                        <Image resizeMode="contain" style={styles.more} source={require("../../assets/darkAssets/newPost-more.png")} />
                    </TouchableOpacity>
                </View>
            </View>

            <TextInput
                style={styles.postInput}
                multiline={true}
                placeholder="Type something here..."
                placeholderTextColor={"#CCCCCC"}
                value={status}
                onChangeText={(text) => setStatus(text)}
            />

            <View style={styles.imageContainer}>{image && <Image source={{ uri: image }} style={{ width: "100%", height: "100%" }} />}</View>

            <View style={styles.addItemContainer}>
                <View style={{ width: WIDTH / 3.5, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <TouchableOpacity style={styles.addItemCover} onPress={selectImage}>
                        <Image resizeMode="contain" style={styles.addItemLogo} source={require("../../assets/darkAssets/newPost-addImage.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addItemCover}>
                        <Image resizeMode="contain" style={styles.addItemLogo} source={require("../../assets/darkAssets/newPost-addLocation.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addItemCover}>
                        <Image resizeMode="contain" style={styles.addItemLogo} source={require("../../assets/darkAssets/newPost-addEmotion.png")} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.shareBtn} onPress={handlePost}>
                    <Text style={styles.shareBtnText}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
