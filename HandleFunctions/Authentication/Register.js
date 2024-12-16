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

  console.log("Request Data:", data);

  try {
    const response = await axios.post(`${url}/api/register`, data);
    console.log("Response:", response.data);

    // Optionally navigate to another screen after success
    // navigation.navigate('SomeScreen');
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.message);
    } else {
      console.error("Unexpected Error:", error);
    }
  }
}
