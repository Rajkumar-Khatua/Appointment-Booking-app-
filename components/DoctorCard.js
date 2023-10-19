import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Import your desired icon from the library

const DoctorCard = ({ doctor }) => {
  const navigation = useNavigation(); // Initialize navigation

  const handleViewProfile = () => {
    // Navigate to the DoctorDetails screen with the selected doctor's data
    navigation.navigate('DoctorDetails', { doctor });
  };
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <View style={styles.topCardContainer}>
          <Image source={{ uri: doctor.photo }} style={styles.photo} />
          <View style={styles.detailsContainer}>
            <Text style={styles.name}>{doctor.name}</Text>
            <Text style={styles.category}>{doctor.categories.join(", ")}</Text>
            <Text style={styles.experience}>
              Experience: {doctor.experience}
            </Text>
            <Text style={styles.experience}>Rating: {doctor.rating}</Text>
          </View>
        </View>
        <View style={styles.doctorMoreInfo}>
          <TouchableOpacity
            style={styles.learnMoreButton}
            onPress={handleViewProfile}
          >
            <Text style={styles.learnMoreButtonText}>View Profile</Text>
            <Icon name="ios-arrow-forward" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    alignItems: "center",
  },
  card: {
    overflow: "hidden",
    borderRadius: 20,
    padding: 10,
    margin: 10,
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    gap: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  topCardContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 20,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  category: {
    fontSize: 16,
    color: "#666",
  },
  experience: {
    fontSize: 16,
  },
  rating: {
    fontSize: 16,
  },
  doctorMoreInfo: {
    alignItems: "flex-end",
    marginTop: 10,
    marginRight: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingTop: 10,
  },
  learnMoreButton: {
    backgroundColor: "#00b894",
    padding: 10,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  learnMoreButtonText: {
    color: "white",
    fontWeight: "bold",
    marginRight: 5,
  },
});

export default DoctorCard;
