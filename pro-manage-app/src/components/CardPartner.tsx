import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

interface Props {
  title: string;
  totalPartners: string | number;
  registeredArchived: string;
  onPress?: () => void;
}

const Button: React.FC<Props> = ({ title, totalPartners, registeredArchived, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.textCardWrapperWithMargin}>
        <Text style={styles.buttonText1}>{title}</Text>
      </View>
      
      <View style={styles.textCardWrapper}>
        <Text style={styles.buttonText2}>Total {registeredArchived}: {totalPartners}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 16,
    backgroundColor: "#00688C",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems: "center",
  },
  textCardWrapper: {
    width: '100%',
  },
  textCardWrapperWithMargin: {
    width: '100%',
    marginBottom: 8,
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
