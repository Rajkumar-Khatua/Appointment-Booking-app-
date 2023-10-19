import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { FontAwesome } from "react-native-vector-icons";

const DoctorsList = () => {
  // Dummy data for our doctors
  const ourDoctors = [
    {
      id: "1",
      image:
        "https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Dr. Robert White",
      specialty: "Neurologist",
    },
    {
      id: "2",
      image:
        "https://images.pexels.com/photos/3902884/pexels-photo-3902884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Dr. Sarah Lee",
      specialty: "Ophthalmologist",
    },
    {
      id: "3",
      image:
        "https://images.pexels.com/photos/8942125/pexels-photo-8942125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Dr. Michael Johnson",
      specialty: "Orthopedic Surgeon",
    },
    {
      id: "4",
      image:
        "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Dr. Emily Adams",
      specialty: "Psychiatrist",
    },
  ];

  // Function to render an individual doctor card
  const renderDoctorCard = ({ item }) => (
    <View style={styles.doctorCard}>
      <Image source={{ uri: item.image }} style={styles.doctorImage} />
      <Text style={styles.doctorName}>{item.name}</Text>
      <Text style={styles.doctorSpecialty}>{item.specialty}</Text>
      <TouchableOpacity style={styles.learnMoreButton}>
        <Text style={styles.learnMoreButtonText}>More Info</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.doctorsContainer}>
      <Text style={styles.doctorsTitle}>Our Top Doctors</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row" }}>
          {ourDoctors.map((item) => renderDoctorCard({ item }))}
          <TouchableOpacity style={styles.showMoreButton}>
            <Text style={styles.showMoreButtonText}>Show all Doctors </Text>
            <FontAwesome name="arrow-right" size={15} color="#fff" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default DoctorsList;

const styles = StyleSheet.create({
  doctorsContainer: {
    // paddingHorizontal: 10,
    marginTop: 20,
  },
  doctorsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  doctorCard: {
    width: 220,
    height: 290,
    marginRight: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  doctorImage: {
    width: "100%",
    height: 170,
    borderRadius: 10,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  doctorSpecialty: {
    fontSize: 14,
    color: "#666",
  },
  showMoreButtonContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  learnMoreButton:{
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00b894",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    justifyContent: "center",
  },
  learnMoreButtonText:{
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  showMoreButton: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ddd",
    borderRadius: 10,
    // padding: 6,
    marginLeft: 10,
    marginTop: 10,
    justifyContent: "center",
  },

  showMoreButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },

  arrowIcon: {
    marginLeft: 5, // Add some spacing between text and arrow
  },
});
