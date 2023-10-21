import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignupScreen from "../screens/SignupScreen";
import SigninScreen from "../screens/signIn";
import { useAuth } from "../AuthContext"; // Import the useAuth hook

const Stack = createStackNavigator();

const OnboardingNavigation = () => {
  const { updateAuthentication } = useAuth(); // Access the updateAuthentication function from the AuthContext

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signin"
        component={SigninScreen}
        options={{ headerShown: false }}
        initialParams={{ updateAuthentication }} // Pass the updateAuthentication function as a parameter
      />
    </Stack.Navigator>
  );
};

export default OnboardingNavigation;
