import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";


const Recommendations = () => {
     // Dummy data for personalized recommendations
  const recommendedProviders = [
    {
      id: "1",
      image:
        "https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Dr. John Smith",
      specialty: "Cardiologist",
    },
    {
      id: "2",
      image:
        "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Dr. Jane Doe",
      specialty: "Dermatologist",
    },
    {
      id: "3",
      image:
        "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Dr. Alex Johnson",
      specialty: "Pediatrician",
    },
  ];

    // Function to render an individual recommendation card
    const renderRecommendationCard = ({ item }) => (
        <View style={styles.recommendationCard}>
          <Image source={{ uri: item.image }} style={styles.recommendationImage} />
          <Text style={styles.recommendationName}>{item.name}</Text>
          <Text style={styles.recommendationSpecialty}>{item.specialty}</Text>
          <TouchableOpacity style={styles.learnMoreButton}>
            <Text style={styles.learnMoreButtonText}>Learn More</Text>
          </TouchableOpacity>
        </View>
      );

  return (
      <View style={styles.recommendationsContainer}>
            <Text style={styles.recommendationsTitle}>
              Personalized Recommendations
            </Text>
            {/* Personalized Recommendations Section */}
            <View style={styles.recommendationsContainer}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {recommendedProviders.map((item) =>
                  renderRecommendationCard({ item })
                )}
              </ScrollView>
            </View>
          </View>
  )
}

export default Recommendations

const styles = StyleSheet.create({
    recommendationsContainer: {
        marginTop: 20,
      },
      recommendationsTitle: {
        fontSize: 20,
        fontWeight: "bold",
      },
      recommendationCard: {
        width: 200,
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
      },
      recommendationImage: {
        width: "100%",
        height: 120,
        borderRadius: 10,
      },
      recommendationName: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 10,
      },
      recommendationSpecialty: {
        fontSize: 14,
        color: "#666",
      },
      learnMoreButton: {
        backgroundColor: "#00b894",
        borderRadius: 30,
        padding: 10,
        marginTop: 10,
        alignItems: "center",
      },
      learnMoreButtonText: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "bold",
      },
})