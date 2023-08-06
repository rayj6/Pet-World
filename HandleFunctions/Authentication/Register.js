import axios from "axios";
import { url } from "../API";

export default function Register(email, password, username, userid, navigation) {
    const data = {
        email: email,
        password: password,
        username: username,
        userid: userid,
    };

    axios
        .post(`${url}/register`, data)
        .then((response) => {
            if (response.data === "Data inserted successfully!") {
                navigation.navigate("Login");
                console.log("Register successfully!");
            }
        })
        .catch((error) => {
            console.log("Please check your information!");
        });
}
