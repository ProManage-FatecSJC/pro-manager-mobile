import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { maskPhone } from "../../utils/masks";

interface InputProps extends TextInputProps {
  title: string;
  mask?: "phone";
  inputMaskChange: any;
}

export function MaskedInput({
  mask,
  title,
  inputMaskChange,
  ...rest
}: InputProps) {
  function handleChange(text: string) {
    if (mask === "phone") {
      const value = maskPhone(text);
      inputMaskChange(value);
    } else {
    }
  }

  return (
    <TextInput
      style={styles.textInput}
      placeholder={title}
      onChangeText={(text) => handleChange(text)}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: "#e2e8f0",
    borderWidth: 1,
    borderRadius: 4,
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});
