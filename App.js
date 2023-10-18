import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigation from "./components/AppNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import OnboardingNavigation from "./components/OnboardingNavigation";

export default function App() {
  const [userAuthenticated, setUserAuthenticated] = useState(true);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {userAuthenticated ? <AppNavigation /> : <OnboardingNavigation />}
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
