import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  ScrollView,
  FlatList, // Import ScrollView for scrolling
} from "react-native";
import { BlurView } from "expo-blur";
import { SafeAreaView } from "react-native-safe-area-context";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "react-native-vector-icons";
import { FontAwesome } from "react-native-vector-icons";

const HomeScreen = () => {
  // Sample data for the card slider
  const featureData = [
    {
      id: "1",
      image:
        "https://images.pexels.com/photos/8413299/pexels-photo-8413299.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Cardiologist",
      description: "Expert care for your heart health",
      icon: "heartbeat",
      color: "blue",
    },
    {
      id: "2",
      image:
        "https://images.pexels.com/photos/5355897/pexels-photo-5355897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Dermatologist",
      description: "Skin care and treatments",
      icon: "spa",
      color: "green",
    },
    {
      id: "3",
      image:
        "https://images.pexels.com/photos/5355897/pexels-photo-5355897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Emergency Care",
      description: "Available 24/7 for urgent cases",
      icon: "ambulance",
      color: "red",
    },
    // Add more feature data as needed
  ];

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
  const dummyTestimonials = [
    {
      id: 1,
      name: "John Doe",
      profilePicture:
        "https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1600",
      text: "I love this app! It's so easy to use and has helped me tremendously.",
    },
    {
      id: 2,
      name: "Jane Smith",
      profilePicture:
        "https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=1600",
      text: "The service is excellent, and the support team is very responsive.",
    },
    {
      id: 3,
      name: "Alice Johnson",
      profilePicture:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "I can't believe how I ever managed without this app. It's a game-changer!",
    },
  ];

  const renderTestimonialCard = (testimonial) => (
    <View style={styles.testimonialCard}>
      <Image
        source={{ uri: testimonial.profilePicture }}
        style={styles.testimonialImage}
      />
      <Text style={styles.testimonialName}>{testimonial.name}</Text>
      <Text style={styles.testimonialText}>{testimonial.text}</Text>
    </View>
  );

  // Function to render an individual doctor card
  const renderDoctorCard = ({ item }) => (
    <View style={styles.doctorCard}>
      <Image source={{ uri: item.image }} style={styles.doctorImage} />
      <Text style={styles.doctorName}>{item.name}</Text>
      <Text style={styles.doctorSpecialty}>{item.specialty}</Text>
      <TouchableOpacity style={styles.learnMoreButton}>
        <Text style={styles.learnMoreButtonText}>Learn More</Text>
      </TouchableOpacity>
    </View>
  );

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

  // Render individual card item
  const renderCardItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <View style={styles.cardTextField}>
        <View style={styles.cardTextFields}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardSpecialty}>{item.description}</Text>
        </View>
        <View style={styles.cardButton}>
          <TouchableOpacity style={styles.iconContainer}>
            <FontAwesome5
              name={item.icon}
              size={22}
              color={item.color}
              style={styles.iconStyle}
            />
            {/* Display the specified icon and color for each card */}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

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
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <ImageBackground
          source={require("../assets/HomeGradientTopBG.jpg")}
          style={styles.topImgBG}
        >
          <View style={styles.topContainer}>
            <BlurView intensity={20} style={styles.blurContainer}>
              <Text style={styles.greetingName}>Hello, Rajkumar</Text>
              <Image
                source={require("../assets/avatar.jpg")}
                style={styles.avatar}
              />
            </BlurView>
            <View style={styles.TextAndSearchContainer}>
              {/* Contact Information Section */}
              <View style={styles.contactInfoContainer}>
                <TouchableOpacity
                  style={styles.contactButton}
                  onPress={() => {
                    // Add the code to initiate a call here
                  }}
                >
                  <FontAwesome5 name="phone" size={20} color="#00b894" />
                  <Text style={styles.contactButtonText}>
                    Call us at: (123) 456-7890
                  </Text>
                </TouchableOpacity>
              </View>
              {/* <Text style={styles.greetingSearch}>Find your doctor</Text> */}
              <View style={styles.searchContainer}>
                <EvilIcons name="search" size={24} color="#00b894" />
                <TextInput
                  style={styles.input}
                  placeholder="Find your doctor"
                />
              </View>
              <TouchableOpacity style={styles.bookButton}>
                <Text style={styles.bookButtonText}>Book an Appointment</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>

        {/* Card Slider */}
        <View style={styles.cardContainer}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            Featured
          </Text>
          <View style={styles.cardSlider}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {featureData.map((item) => renderCardItem({ item }))}
            </ScrollView>
          </View>

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

          {/* Our Doctors Section */}
          <View style={styles.doctorsContainer}>
            <Text style={styles.doctorsTitle}>Our Doctors</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{ flexDirection: "row" }}>
                {ourDoctors.map((item) => renderDoctorCard({ item }))}
                <View style={styles.showMoreButton}>
                  <Text style={styles.showMoreButtonText}>
                    Show all Doctors{" "}
                  </Text>
                  <FontAwesome name="arrow-right" size={15} color="#fff" />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>

        {/* Our Services Section */}
        <View style={styles.servicesContainer}>
          <Text style={styles.servicesTitle}>Our Services</Text>
          <View style={styles.servicesList}>
            {servicesData.map((service) => renderServiceItem(service))}
          </View>
        </View>

        <View style={styles.testimonialsContainer}>
          <Text style={styles.testimonialsTitle}>Testimonials</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.testimonialScrollView}
          >
            {dummyTestimonials.map((testimonial) =>
              renderTestimonialCard(testimonial)
            )}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topImgBG: {
    height: 265,
    width: "100%",
    overflow: "hidden",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 1,
  },

  topContainer: {
    flex: 1,
    alignItems: "center",
    borderRadius: 10,
  },
  blurContainer: {
    elevation:10,
    // top: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 30,
    width: "100%",
    alignItems: "center",
  },
  greetingName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 30,
  },
  TextAndSearchContainer: {
    width: "90%",
    marginTop: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10,
    height: 40,
  },
  greetingSearch: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "right",
  },
  input: {
    marginLeft: 10,
    width: "80%",
  },
  bookButton: {
    backgroundColor: "#fff",
    borderRadius: 30,
    marginTop: 20,
    padding: 10,
    alignItems: "center",
    width: "100%",
  },
  bookButtonText: {
    fontSize: 16,
    color: "#00b894",
    fontWeight: "bold",
  },
  contactInfoContainer: {
    alignItems: "center",
    padding: 10,
  },
  contactButton: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 30,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  contactButtonText: {
    fontSize: 16,
    color: "#00b894",
    marginLeft: 10,
    fontWeight: "bold",
  },
  cardContainer: {
    paddingHorizontal: 10,
  },
  cardSlider: {
    marginTop: 10,
  },
  card: {
    width: 300,
    marginRight: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  cardTextField: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconStyle: {
    padding: 12,
    borderRadius: 30,
    backgroundColor: "#fff",
    elevation: 5,
  },
  cardImage: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  cardSpecialty: {
    fontSize: 14,
    color: "#666",
  },
  cardButton: {
    alignItems: "center",
  },
  iconContainer: {},
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
    width: 180,
    marginRight: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  doctorImage: {
    width: "100%",
    height: 120,
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
  showMoreButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ddd",
    borderRadius: 30,
    padding: 10,
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
  testimonialsContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  testimonialsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  testimonialScrollView: {
    paddingLeft: 10,
  },
  testimonialCard: {
    width: 250,
    marginRight: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  testimonialImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  testimonialName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  testimonialText: {
    fontSize: 14,
    color: "#666",
  },
});

export default HomeScreen;
