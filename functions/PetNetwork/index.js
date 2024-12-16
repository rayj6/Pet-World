import React, { useState, useEffect } from "react";
import { db, storage } from "../../firebase.config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";
import axios from "axios";
import { url } from "../API";

// ----------------------------------------------------------------
export { saveUserInfoToFirestore, readAllData };
// ----------------------------------------------------------------

const saveUserInfoToFirestore = async (
  username,
  userid,
  userStatus,
  setUserStatus,
  image,
  setImage,
  postTime
) => {
  const timestamp = postTime;
  const like = 0;
  const comment = [];
  const share = 0;

  if (!userStatus) {
    console.error("User status cannot be empty.");
    return;
  }

  const uploadImage = async (uri) => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = () => resolve(xhr.response);
      xhr.onerror = (e) => reject(new TypeError("Network request failed"));
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    try {
      const storageRef = ref(storage, `Images/image-${timestamp}`);
      await uploadBytes(storageRef, blob);
    } catch (error) {
      console.error("Image upload failed:", error);
    } finally {
      blob.close(); // Release memory
    }
  };

  try {
    const userRef = doc(
      db,
      `PetWorld/SocialMedia/hanoi/${userid}-${timestamp}`
    );
    let imageUrl = "";

    if (image) {
      await uploadImage(image);
      imageUrl = await getDownloadURL(
        ref(storage, `Images/image-${timestamp}`)
      );

      // Insert into MySQL
      const AxiosData = { content: userStatus, url: imageUrl };
      try {
        const response = await axios.post(`${url}/images`, AxiosData);
        if (response.data === "Image: done") {
          //   console.log("Image inserted successfully!");
        }
      } catch (error) {
        console.error("Error inserting image to MySQL:", error);
      }
    }

    // Save data to Firestore
    const userData = {
      username,
      userid,
      userStatus,
      imageUrl,
      like,
      comment,
      share,
    };
    await setDoc(userRef, userData);

    // console.log(`${username} post saved successfully!`);
    // console.log(`Current time: ${postTime}`);
  } catch (error) {
    console.error("Error posting user information:", error);
  }
};

const readAllData = async (setData) => {
  const currentRef = collection(db, "PetWorld", "SocialMedia", "hanoi");

  try {
    const querySnapshot = await getDocs(currentRef);
    if (querySnapshot.empty) {
      console.warn("No data found in Firestore.");
      setData([]);
      return;
    }

    const usersData = [];
    querySnapshot.forEach((doc) => {
      const { userStatus, imageUrl, username, userid } = doc.data();
      usersData.push({ userStatus, imageUrl, username, userid });
    });

    // console.log("Users data retrieved successfully!");
    setData(usersData);
  } catch (error) {
    console.error("Error reading data from Firestore:", error);
  }
};
