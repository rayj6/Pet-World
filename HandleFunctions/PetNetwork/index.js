import React, { useState, useEffect } from "react";
import { db, auth, storage } from "../../firebase.config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc, collection, getDocs, serverTimestamp } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
// ----------------------------------------------------------------
export { saveUserInfoToFirestore, readAllData };
// ----------------------------------------------------------------

const saveUserInfoToFirestore = async (username, userid, userStatus, setUserStatus, image, setImage, postTime) => {
    const timestamp = postTime;

    const uploadImage = async (uri) => {
        const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(xhr.response);
            };
            xhr.onerror = function (e) {
                console.log(e);
                reject(new TypeError("Network request failed"));
            };
            xhr.responseType = "blob";
            xhr.open("GET", uri, true);
            xhr.send(null);
        });

        try {
            const storageRef = ref(storage, `Images/image-${timestamp}`);
            const result = await uploadBytes(storageRef, blob);
        } catch (error) {
            alert(error);
        }
    };

    try {
        // Create a document reference in Firestore
        const userRef = doc(db, `PetWorld/SocialMedia/hanoi/${Date.now()}`);

        // Set the user data in Firestore
        if (image != "") {
            // Upload image to Firebase Storage
            const storageRef = ref(storage, `Images/image-${timestamp}`);
            await uploadImage(image);

            // Get the image download URL
            const imageUrl = await getDownloadURL(storageRef);
            const userData = {
                username,
                userid,
                userStatus,
                imageUrl,
            };
            await setDoc(userRef, userData);
        } else {
            const userData = {
                username,
                userid,
                userStatus,
            };
            await setDoc(userRef, userData);
        }

        console.log(username + " post saved successfully!");
        console.log(`CUrrent time: ${postTime}`);
        setUserStatus("");
        setImage("");
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
    // console.log("Users data retrieved successfully!");
    setData(usersData);
};
