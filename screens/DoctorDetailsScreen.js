import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const DoctorDetailsScreen = ({ route }) => {
  const { doctor } = route.params ?? {};

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Top Section */}
        <View style={styles.topContainer}>
          <Image source={{ uri: doctor.photo }} style={styles.doctorImage} />
          <Text style={styles.doctorName}>
            {doctor ? doctor.name : "Doctor Name Not Found"}
          </Text>
        </View>

        {/* Middle Container with Icons */}
        <View style={styles.middleContainer}>
          <View style={styles.box}>
            <View style={styles.locationContainer}>
              <FontAwesome name="map-marker" size={30} color="#00b894" />
              <Text style={styles.locationText}>
                {doctor ? `Location: ${doctor.location}` : "Location Not Found"}
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.reviewsContainer}>
              <MaterialIcons name="star" size={30} color="#f9ca24" />
              <Text style={styles.reviewsText}>
                {doctor ? `Reviews: ${doctor.reviews}` : "Reviews Not Found"}
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.experienceContainer}>
              <Ionicons name="ios-briefcase" size={30} color="#636e72" />
              <Text style={styles.experience}>
                {doctor
                  ? `Experience: ${doctor.experience}`
                  : "Experience Not Found"}
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.educationContainer}>
              <Ionicons name="ios-school" size={30} color="#130f40" />
              <Text style={styles.education}>
                {doctor
                  ? `Education: ${doctor.education}`
                  : "Education Not Found"}
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.languagesContainer}>
              <Ionicons name="ios-globe" size={30} color="#4834d4" />
              <Text style={styles.languages}>
                {doctor
                  ? `Languages: ${doctor.languages.join(", ")}`
                  : "Languages Not Found"}
              </Text>
            </View>
          </View>
        </View>

        {/* Bio Section */}
        <View style={styles.bioSection}>
          <Text style={styles.bio}>
            {doctor ? `Bio: ${doctor.bio}` : "Bio Not Found"}
          </Text>
        </View>

        {/* Button to Book an Appointment */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.bookAppointmentButton}>
            <Text style={styles.bookAppointmentText}>Book Appointment</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    backgroundColor: "#fff",
  },
  topContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  doctorImage: {
    width: "100%",
    height: 370,
    resizeMode: "cover",
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
  },
  doctorName: {
    paddingTop: 10,
    fontSize: 25,
    fontWeight: "bold",
  },
  middleContainer: {
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  box: {
    height: 100,
    width: 150,
    backgroundColor: "#fff",
    elevation: 3,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  locationContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  locationText: {
    fontSize: 16,
    color: "#00b894",
    marginLeft: 5,
  },
  reviewsContainer: {
    alignItems: "center",
    flexDirection: "column",
  },
  reviewsText: {
    fontSize: 16,
    color: "#f9ca24",
    marginLeft: 5,
  },
  experienceContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  experience: {
    fontSize: 16,
    color: "#636e72",
    marginLeft: 5,
  },
  educationContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  education: {
    fontSize: 16,
    color: "#130f40",
    marginLeft: 5,
  },
  languagesContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  languages: {
    fontSize: 16,
    color: "#4834d4",
    marginLeft: 5,
  },
  bioSection: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  bio: {
    fontSize: 16,
    color: "#555",
    marginTop: 10,
    textAlign: "justify",
    fontWeight: "400",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    padding: 10,
  },
  bookAppointmentButton: {
    backgroundColor: "#00b894",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 20,
    width: "100%",
  },
  bookAppointmentText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default DoctorDetailsScreen;
