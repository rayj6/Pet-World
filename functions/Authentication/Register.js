import axios from "axios";
import { url } from "../API";

export default async function Register(
  email,
  password,
  username,
  userid,
  navigation
) {
  const data = {
    email,
    password,
    username,
    userid,
  };

  try {
    const response = await axios.post(`${url}/api/auth/register`, data);
    console.log("Response:", response);

    navigation.navigate("Login");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.message);
    } else {
      console.error("Unexpected Error:", error);
    }
  }
}
