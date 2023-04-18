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
    width: 180,
    marginTop: 70,
    marginRight: 15,
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#00688C",
    alignItems: "center",
  },
  buttonText: {
    color: "#00688C",
    alignItems: "center",
    margin: "auto",
    fontSize: 12,
  },
});

export default Button;
