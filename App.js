import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./mainScreens/Home";
import LandingPage from "./mainScreens/LandingPage";
import Login from "./mainScreens/Login";
import Register from "./mainScreens/Register";
import Message from "./mainScreens/Message";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        // <NavigationContainer>
        //     <Stack.Navigator initialRouteName="LandingPage" screenOptions={{ headerShown: false }}>
        //         <Stack.Screen name="LandingPage" component={LandingPage} />
        //         <Stack.Screen name="Login" component={Login} />
        //         <Stack.Screen name="Register" component={Register} />
        //         <Stack.Screen name="Home" component={Home} />
        //     </Stack.Navigator>
        // </NavigationContainer>
        <>
            <Message />
        </>
    );
}
