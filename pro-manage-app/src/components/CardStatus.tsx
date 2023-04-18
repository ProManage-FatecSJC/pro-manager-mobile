import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

interface Props {
  title: string;
  subtitle: string;
  onPress: () => void;
}

const Button: React.FC<Props> = ({ title, subtitle, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText1}>{title}</Text>
      <Text style={styles.buttonText2}>{subtitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    backgroundColor: "#00688C",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText1: {
    color: "white",
    alignSelf: "flex-start",
    fontSize: 16,
  },
  buttonText2: {
    color: "white",
    fontWeight: "bold",
    alignSelf: "flex-start",
    fontSize: 22,
  },
});

export default Button;
