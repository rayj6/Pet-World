import axios from "axios";
import { url } from "../API";

export default function Login(email, password, navigation) {
    const data = {
        email: email,
        password: password,
    };

    axios
        .post(`${url}/login`, data)
        .then((response) => {
            if (response.data.username.length > 0) {
                navigation.navigate("Home", { username: response.data.username, userid: response.data.userid });
            } else if (response.data === "err") {
                alert("Please check your email & password!");
            }
        })
        .catch((error) => {
            alert("Please check your email & password!");
        });
}
