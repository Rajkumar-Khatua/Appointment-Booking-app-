import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "react-native-vector-icons";

const ServicesList = () => {
  // Sample data for Our Services
  const servicesData = [
    {
      id: "1",
      title: "Medical Services",
      description: "Expert medical care",
      icon: "stethoscope",
      color: "blue",
    },
    {
      id: "2",
      title: "Dental Care",
      description: "Dental treatments",
      icon: "tooth",
      color: "green",
    },
    {
      id: "3",
      title: "Emergency Care",
      description: "Available 24/7",
      icon: "ambulance",
      color: "red",
    },
    {
      id: "4",
      title: "Pediatric Care",
      description: "Child healthcare",
      icon: "baby",
      color: "pink",
    },
    {
      id: "5",
      title: "Specialist Consultation",
      description: "Expert consultations",
      icon: "user-md",
      color: "purple",
    },
    {
      id: "6",
      title: "Radiology Services",
      description: "Diagnostic services",
      icon: "x-ray",
      color: "orange",
    },
    {
      id: "7",
      title: "Pharmacy Services",
      description: "Medication and prescriptions",
      icon: "pills",
      color: "teal",
    },
  ];

  // Render individual service item
  const renderServiceItem = (service) => (
    <View style={styles.serviceBox}>
      <FontAwesome5
        name={service.icon}
        size={30}
        color={service.color}
        style={styles.serviceIcon}
      />
      <Text style={styles.serviceTitle}>{service.title}</Text>
      <Text style={styles.serviceDescription}>{service.description}</Text>
    </View>
  );
  return (
    <View style={styles.servicesContainer}>
      <Text style={styles.servicesTitle}>Our Services</Text>
      <View style={styles.servicesList}>
        {servicesData.map((service) => renderServiceItem(service))}
      </View>
    </View>
  );
};

export default ServicesList;

const styles = StyleSheet.create({

    servicesContainer: {
        paddingHorizontal: 10,
        marginTop: 20,
      },
      servicesTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
      },
      servicesList: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
      },
      serviceBox: {
        width: "48%",
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        alignItems: "center",
        elevation: 3,
      },
      serviceIcon: {
        padding: 12,
        borderRadius: 30,
        backgroundColor: "#fff",
        elevation: 5,
      },
    
      serviceTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 10, // Add this line
      },
      serviceDescription: {
        fontSize: 14,
        color: "#666",
      },
});
