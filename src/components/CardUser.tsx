import React from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";

interface Props {
  name: string;
  email: string;
  role: string;
  onPress?: any;
}

const Button: React.FC<Props> = ({ name, email, role, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <View style={styles.textCardWrapperWithMargin}>
            <Text style={styles.Text}>Nome: {name}</Text>
            <Text style={styles.Text}>E-mail: {email}</Text>
            <Text style={styles.Text}>Nivel de Acesso: {role}</Text>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 16,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#00688C',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  CardWrapper: {
    
  },
  textCardWrapperWithMargin: {
    width: "100%",
    marginBottom: 8,
    marginLeft: 8,
  },
  Text: {
    alignSelf: "flex-start",
    fontSize: 16,
    maxWidth: 200
  },
  UserImage: {
    width: 82,
    height: 82,
  },
});

export default Button;
