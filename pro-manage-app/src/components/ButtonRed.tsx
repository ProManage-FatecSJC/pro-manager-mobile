import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

interface Props {
  title: string;
  onPress: () => void;
}

const Button: React.FC<Props> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: "#DA4625",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    alignItems: "center",
    margin: "auto",
  },
});

export default Button;
