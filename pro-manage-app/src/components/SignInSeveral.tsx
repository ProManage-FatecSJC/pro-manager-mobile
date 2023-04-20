import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const SignInServeral = ({ }) => {

  return (
    <View style={styles.textInput}>
      <TouchableOpacity>
        <Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#E2E8F0",
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 4,
    marginBottom: 32,
  },
});

export default SignInServeral;
