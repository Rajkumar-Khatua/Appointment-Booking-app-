import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const TestimonialList = () => {
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

  return (
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
  );
};

export default TestimonialList;

const styles = StyleSheet.create({

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
