import React from "react";
import { StyleSheet, TextInput } from "react-native";

interface Props {
  placeholder: string;
  onChangeText: (text: string) => void;
  value?: string;
  onEndEditing: () => void;
}



const CEPSignIn: React.FC<Props> = ({
  placeholder,
  value,
  onChangeText,
  onEndEditing,
}) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      onEndEditing={onEndEditing}
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
    marginBottom: 10,
  },
});

export default CEPSignIn;
