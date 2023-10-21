import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
  Modal,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Icon from "react-native-vector-icons/FontAwesome"; // You can use other icons if preferred
import CustomButton from "../components/CustomButton";

import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";

const SignupScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dob, setDob] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [accountType, setAccountType] = useState("patient");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [chosenDate, setChosenDate] = useState(new Date());

  const navigation = useNavigation();

  const apiEndpoint =
    " https://60e1-2409-4088-ae8d-1ce-4a8d-684c-10e6-3d84.ngrok.io/api/auth/signup";

  const handleGoToSignin = () => {
    navigation.navigate("Signin");
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Additional doctor-specific fields
  const [specialty, setSpecialty] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async () => {
    try {
      setIsLoading(true); // Start loading

      // Perform validation
      if (
        !name ||
        !email ||
        !password ||
        !confirmPassword ||
        !dob ||
        !mobileNumber
      ) {
        Alert.alert("Error", "All fields are required.");
        throw new Error("All fields are required.");
      }

      if (password !== confirmPassword) {
        Alert.alert("Error", "Passwords do not match.");
        throw new Error("Passwords do not match.");
      }

      if (!acceptTerms) {
        Alert.alert("Error", "You must accept the terms and conditions.");
        throw new Error("You must accept the terms and conditions.");
      }

      // Create a payload object with common fields
      const payload = {
        name,
        email,
        password,
        dob,
        mobileNumber,
        accountType,
        acceptTerms,
      };

      // Conditionally add doctor-related fields when the accountType is "doctor"
      if (accountType === "doctor") {
        payload.specialty = specialty;
        payload.licenseNumber = licenseNumber;
      }

      // Make an API call to register the user
      const response = await axios.post(apiEndpoint, payload);

      if (response.status === 201) {
        // Clear all the input fields
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setDob("");
        setMobileNumber("");
        setAccountType("patient"); // You can set it to the default value
        setSpecialty("");
        setLicenseNumber("");
        setAcceptTerms(false);

        // Registration successful
        Alert.alert("Success", "Account created successfully!");
        navigation.navigate("Home")
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          if (
            error.response.status === 400 &&
            error.response.data.message === "Email is already in use."
          ) {
            // Handle duplicate email error
            Alert.alert("Error", "This email address is already in use.");
          } else {
            console.error(
              "Server Error:",
              error.response.status,
              error.response.data
            );
            Alert.alert("Error", "Registration failed. Please try again.");
          }
        } else {
          console.error("Network Error:", error.message);
          Alert.alert("Network Error", "Please check your connection.");
        }
      } else {
        console.error("Request Error:", error.message);
        // Handle other errors
      }
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#00b894" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -150}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Sign Up</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
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

          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Date of Birth"
            value={dob} // Use the dob state to display the selected date
            onFocus={showDatepicker} // Show the date picker when the input is focused
          />
          {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={chosenDate}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={(event, selectedDate) => {
                setShowDatePicker(false); // Close the date picker
                if (selectedDate) {
                  setChosenDate(selectedDate);
                  setDob(selectedDate.toDateString()); // Set the selected date to the dob state
                }
              }}
            />
          )}

          <TextInput
            style={styles.input}
            placeholder="Mobile Number*"
            value={mobileNumber}
            keyboardType="numeric"
            onChangeText={(text) => {
              const numericInput = text.replace(/[^0-9]/g, "");

              // Limit the input to 10 characters
              if (numericInput.length <= 10) {
                setMobileNumber(numericInput);
              } else {
                Alert.alert("Error", "Mobile number must be 10 digits.");
              }
            }}
          />
          <Text style={styles.label}>Select Account Type:</Text>
          <View style={styles.radioButtons}>
            <TouchableOpacity
              style={[
                styles.radioButton,
                accountType === "patient" ? styles.radioButtonSelected : null,
              ]}
              onPress={() => setAccountType("patient")}
            >
              <Text style={styles.radioButtonText}>Patient</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.radioButton,
                accountType === "doctor" ? styles.radioButtonSelected : null,
              ]}
              onPress={() => setAccountType("doctor")}
            >
              <Text style={styles.radioButtonText}>Doctor</Text>
            </TouchableOpacity>
          </View>

          {/* Doctor-specific fields */}
          {accountType === "doctor" && (
            <>
              <TextInput
                style={styles.input}
                placeholder="Specialty"
                value={specialty}
                onChangeText={(text) => setSpecialty(text)}
              />
              <TextInput
                style={styles.input}
                placeholder="License Number"
                value={licenseNumber}
                onChangeText={(text) => setLicenseNumber(text)}
              />
            </>
          )}

          <View style={styles.termsContainer}>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => setAcceptTerms(!acceptTerms)}
            >
              {acceptTerms ? <Text style={styles.checkboxText}>✓</Text> : null}
            </TouchableOpacity>
            <Text style={styles.termsText}>
              I accept the Terms and Conditions
            </Text>
          </View>
          <CustomButton title={"Sign Up"} onPress={handleSignup} />
          {isLoading && (
            <Modal transparent={true} animationType="slide" visible={isLoading}>
              <BlurView
                intensity={100}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(0, 184, 147, 0.103)",
                }}
              >
                <ActivityIndicator size="large" color="#00b894" />
              </BlurView>
            </Modal>
          )}
          <TouchableOpacity onPress={handleGoToSignin} style={styles.link}>
            <Text style={styles.linkText}>
              Already have an account? Sign In
            </Text>
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
  label: {
    fontSize: 16,
    marginVertical: 12,
  },
  radioButtons: {
    flexDirection: "row",
    // justifyContent: "space-around",
    gap: 16,
    marginBottom: 16,
  },
  radioButton: {
    padding: 8,
    borderRadius: 4,
  },
  radioButtonSelected: {
    backgroundColor: "#00b894",
    elevation: 5,
  },
  radioButtonText: {
    color: "#2d3436",
    fontWeight: "bold",
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
    marginVertical: 8,
  },
  checkboxText: {
    fontWeight: "bold",
  },
  termsText: {
    fontSize: 14,
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

export default SignupScreen;
