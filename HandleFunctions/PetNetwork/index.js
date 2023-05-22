import React, { useState, useEffect } from "react";
import { db, auth } from "../../firebase.config";
import { doc, setDoc, collection, getDocs, Timestamp } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import * as Location from "expo-location";
// ----------------------------------------------------------------
export { saveUserInfoToFirestore, readAllData };
// ----------------------------------------------------------------

const saveUserInfoToFirestore = async (userStatus, setUserStatus) => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
    }

    let { coords } = await Location.getCurrentPositionAsync({});
    let { latitude, longitude } = coords;
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            // username = user.displayName;
            username = "Tester";
            uid = user.uid;
            const timestamp = Timestamp.now();

            try {
                const userRef = doc(db, `PetNetwork/SocialMedia/${latitude}_${longitude}/${timestamp}`);
                const userData = {
                    username,
                    uid,
                    // userAvt,
                    userStatus,
                    // image,
                };
                await setDoc(userRef, userData);
                console.log("User data saved successfully!");
                setUserStatus("");
            } catch (error) {
                console.error("Error saving user information: ", error);
            }
        } else {
            console.log("No user is currently signed in.");
        }
    });
};

const readAllData = async (setData) => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
    }

    let { coords } = await Location.getCurrentPositionAsync({});
    let { latitude, longitude } = coords;
    try {
        const currentLocationRef = collection(db, "PetNetwork", "SocialMedia", `${latitude}_${longitude}`);
        const querySnapshot = await getDocs(currentLocationRef);
        const usersData = [];
        querySnapshot.forEach((doc) => {
            const { userStatus, username, uid } = doc.data();
            usersData.push({ userStatus, username, uid });
        });
        // console.log("Users data retrieved successfully!");
        // console.log(`${latitude}_${longitude}`);
        setData(usersData);
    } catch (error) {
        console.error("Error retrieving users data: ", error);
        return null;
    }
};
