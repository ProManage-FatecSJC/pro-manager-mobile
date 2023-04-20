import React from "react";
import { StyleSheet, TextInput } from "react-native";

interface Props {
  placeholder: string;
  onChangeText: (text: string) => void;
  value?: string;
}

const PartnerSignIn: React.FC<Props> = ({ placeholder, value }) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#E2E8F0",
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 4,
    marginBottom: 32,
  },
});

export default PartnerSignIn;
