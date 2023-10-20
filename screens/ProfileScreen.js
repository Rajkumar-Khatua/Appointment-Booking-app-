import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import CustomButton from "../components/CustomButton";

const ProfileScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const [cameraPermission, requestPermission] = Camera.useCameraPermissions();

  useEffect(() => {
    requestPermission();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
    setModalVisible(false);
  };

  const openCamera = async () => {
    if (cameraPermission.status === "granted") {
      setModalVisible(false);
      // You can navigate to the camera screen or add camera functionality here
    } else {
      alert("Camera permission is required to use the camera.");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()} // Use the navigation prop
          >
            <Ionicons name="ios-arrow-back" size={30} color="#555" />
          </TouchableOpacity>
          <Text style={styles.headerText}>My Profile</Text>
        </View>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image
            source={image ? { uri: image } : require("../assets/avatar.jpg")}
            style={styles.profileImage}
          />
          <Ionicons
            name="ios-camera"
            size={30}
            color="#333"
            style={styles.cameraIcon}
          />
        </TouchableOpacity>
        <Text style={styles.profileName}>Your Name</Text>
        <Text style={styles.profileEmail}>your.email@example.com</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Location: Your Location</Text>
          <Text style={styles.infoText}>Phone: +123 456 7890</Text>
          <Text style={styles.infoText}>Date of Birth: 01-Jan-1990</Text>
        </View>
      </View>

      {/* Modal for Image Picker and Camera */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <CustomButton
            title="Pick an image from the camera roll"
            onPress={pickImage}
          />
          <CustomButton title="Open Camera" onPress={openCamera} />
          <CustomButton title="Cancel" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: "center",
    marginBottom: 10,
  },
  cameraIcon: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 20,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  profileEmail: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },
  infoContainer: {
    marginTop: 20,
  },
  infoText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default ProfileScreen; // Wrap the component with withNavigation
