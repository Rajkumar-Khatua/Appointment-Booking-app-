import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useAuth } from "../AuthContext"; // Import the useAuth hook

const SignIn = () => {
  const { updateAuthentication } = useAuth(); // Access the updateAuthentication function from the AuthContext

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigation = useNavigation();

  const handleGoToSignup = () => {
    navigation.navigate("Signup");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Function to validate email format
  const validateEmail = (email) => {
    // Regular expression for a valid email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  const apiEndpoint =
    "https://60e1-2409-4088-ae8d-1ce-4a8d-684c-10e6-3d84.ngrok.io/api/auth/signin";

  const handleSignIn = async () => {
    if (!email || !password) {
      setError("All fields are required.");
      return;
    }

    // Client-side email validation
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setError(""); // Clear any previous error message

    try {
      const response = await axios.post(apiEndpoint, {
        email,
        password,
      });

      if (response.status === 200) {
        // Login successful
        Alert.alert("Success", "Login successful!");
        updateAuthentication(true); // Update authentication state
        // Explicitly navigate to the "Home" screen
        navigation.navigate("Home");
      } else {
        setError("Email or password is incorrect.");
      }
    } catch (error) {
      setError("Login failed. Please check your connection.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -150}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Welcome</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              onChangeText={(text) => setPassword(text)}
              value={password}
              placeholder="Password"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={styles.passwordVisibilityButton}
              onPress={togglePasswordVisibility}
            >
              <Icon
                name={showPassword ? "eye" : "eye-slash"}
                size={20}
                color="gray"
              />
            </TouchableOpacity>
          </View>
          <CustomButton
            title={loading ? "Signing In..." : "Sign In"}
            onPress={handleSignIn}
            disabled={loading}
          />
          {loading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#00b894" />
            </View>
          )}
          {error !== "" && <Text style={styles.errorText}>{error}</Text>}

          <TouchableOpacity onPress={handleGoToSignup} style={styles.link}>
            <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
    fontWeight: "bold",
    color: "#00b894",
  },
  input: {
    borderColor: "#ccc",
    padding: 8,
    marginVertical: 8,
    borderRadius: 5,
    backgroundColor: "#fff",
    elevation: 5,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    padding: 3,
    marginVertical: 8,
    borderRadius: 5,
    backgroundColor: "#fff",
    elevation: 5,
  },
  passwordInput: {
    flex: 1,
    height: 40,
  },
  passwordVisibilityButton: {
    padding: 10,
  },
  link: {
    alignItems: "center",
    marginTop: 16,
  },
  linkText: {
    color: "#00b894",
    fontSize: 16,
  },
});

export default SignIn;
