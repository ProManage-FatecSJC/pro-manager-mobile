import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { maskPhone, maskCNPJ, maskCEP } from "../../utils/masks";

interface InputProps extends TextInputProps {
  title: string;
  mask?: "phone" | "cnpj" | "cep";
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
    } else if (mask === "cnpj") {
      const value = maskCNPJ(text);
      inputMaskChange(value);
    } else if (mask === "cep") {
      const value = maskCEP(text);
      inputMaskChange(value);
    } else {
      inputMaskChange(text);
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
    paddingVertical: 8,
  },
});