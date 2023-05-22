import { auth, db } from "../../firebase.config.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

// ----------------------------------------------
export { handleRegister, handleLogin };
// ----------------------------------------------

const handleRegister = (username, email, password, CheckBtn, navigation) => {
    if (CheckBtn === "#FFC7C7") {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                // Save user info to Firestore
                const userDoc = doc(db, "users", user.uid);
                setDoc(userDoc, {
                    username,
                    email,
                    password,
                })
                    .then(() => {
                        console.log("User info saved to Firestore");
                        navigation.navigate("login");
                    })
                    .catch((error) => {
                        console.error("Error saving user info to Firestore:", error);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error", errorMessage);
            });
    } else {
        console.log("Please accept Terms of Service and Pricavy Policy");
        alert("Please accept Terms of Service and Pricavy Policy");
    }
};

const handleLogin = async (email, password, navigation) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User logged in:", user);
        navigation.navigate("home");
        return user;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
};
