import React, { useState, useEffect } from "react";
import { db, auth, storage } from "../../firebase.config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc, collection, getDocs, Timestamp } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
// ----------------------------------------------------------------
export { saveUserInfoToFirestore, readAllData };
// ----------------------------------------------------------------

const saveUserInfoToFirestore = async (userStatus, setUserStatus, image, setImage) => {
    try {
        const timestamp = Timestamp.now();
        const username = "Ray Johnson";
        const userid = "rayj6";

        // Upload image to Firebase Storage
        const storageRef = ref(storage, `images/${timestamp}`);
        await uploadBytes(storageRef, image);

        // Get the image download URL
        const imageUrl = await getDownloadURL(storageRef);

        // Create a document reference in Firestore
        const userRef = doc(db, `PetWorld/SocialMedia/hanoi/${timestamp}`);

        // Set the user data in Firestore
        const userData = {
            username,
            userid,
            userStatus,
            imageUrl,
        };
        await setDoc(userRef, userData);

        console.log("User data saved successfully!");
        setUserStatus("");
        setImage(null);
    } catch (error) {
        console.error("Error posting user information: ", error);
    }
};

const readAllData = async (setData) => {
    const currentRef = collection(db, "PetWorld", "SocialMedia", `hanoi`);
    const querySnapshot = await getDocs(currentRef);
    const usersData = [];
    querySnapshot.forEach((doc) => {
        const { userStatus, imageUrl, username, userid } = doc.data();
        usersData.push({ userStatus, imageUrl, username, userid });
    });
    console.log("Users data retrieved successfully!");
    setData(usersData);
};
