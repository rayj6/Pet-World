import React, { useState, useEffect } from "react";
import { db, auth } from "../../firebase.config";
import { doc, setDoc, collection, getDocs, Timestamp } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
// ----------------------------------------------------------------
export { saveUserInfoToFirestore, readAllData };
// ----------------------------------------------------------------

const saveUserInfoToFirestore = async (userStatus, setUserStatus, image, setImage) => {
    // onAuthStateChanged(auth, async (user) => {
    //     if (user) {
    // username = user.displayName;
    // uid = user.uid;
    username = "Ray Johnson";
    uid = "rayj6";
    const timestamp = Timestamp.now();

    try {
        const userRef = doc(db, `PetNetwork/SocialMedia/hanoi/${timestamp}`);
        const userData = {
            username,
            uid,
            // userAvt,
            userStatus,
            image,
        };
        await setDoc(userRef, userData);
        console.log("User data saved successfully!");
        setUserStatus("");
        setImage(null);
        readAllData();
    } catch (error) {
        console.error("Error saving user information: ", error);
    }
    // }
    //  else {
    //     console.log("No user is currently signed in.");
    // }
    // });
};

const readAllData = async (setData) => {
    const currentLocationRef = collection(db, "PetNetwork", "SocialMedia", `hanoi`);
    const querySnapshot = await getDocs(currentLocationRef);
    const usersData = [];
    querySnapshot.forEach((doc) => {
        const { userStatus, image, username, uid } = doc.data();
        usersData.push({ userStatus, image, username, uid });
    });
    console.log("Users data retrieved successfully!");
    setData(usersData);
};
