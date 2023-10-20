import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();

  const handleGoToSignup = () => {
    navigation.navigate("Signup");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignup = () => {
    // Perform validation
    if (!email || !password) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    // Validation passed, continue with registration logic
    // You can make an API call here to register the user or perform any other actions.
    // For simplicity, we'll just show a success message.
    Alert.alert("Success", "Login successfully!");
  };

  return (
    <SafeAreaView style={{ flex: 1}}>
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
          <CustomButton title={"Sign Up"} onPress={handleSignup} />
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
