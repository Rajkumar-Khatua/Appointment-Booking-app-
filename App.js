import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigation from "./components/AppNavigation";
import OnboardingNavigation from "./components/OnboardingNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";

export default function App() {
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  // You might have a logic here to set userAuthenticated to true when the user logs in or signs up.

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {!userAuthenticated ? <OnboardingNavigation /> : <AppNavigation />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
