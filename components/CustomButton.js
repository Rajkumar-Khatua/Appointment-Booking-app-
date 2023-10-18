import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";

const CustomButton = ({ title, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#00b894",
    color: "#fff",
    elevation:5,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CustomButton;
