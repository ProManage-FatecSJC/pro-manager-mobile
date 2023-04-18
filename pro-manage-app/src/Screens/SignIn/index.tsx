import React, { useState } from "react";
import styles from "./styled.tsx";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Text, View, TextInput } from "react-native";
import SignInInput from "../../components/SignInput.tsx";
import Button from "../../components/ButtonSignIn.tsx";


export default () => {
  const navigation = useNavigation();

  function handleButtonPress(): void {

    ///fubção para confirmar dados e navegar para outra tela

    throw new Error("Function not implemented.");
  }

  return (
    <>
      <View style={styles.Container}>
        <View
          style={styles.containerTitle}
        >
          <Text style={styles.TextLogin}>Olá,</Text>
          <Text style={styles.TextLogin}>Bem Vindo</Text>
        </View>

        <View
          style={styles.containerInputs}
        >
          <View>
            <TextInput
              style={styles.Input}
              placeholder="E-mail"
            />
          </View>

          <View
            style={styles.inputMargin}
          >
            <TextInput
              style={styles.Input}
              placeholder="Senha"
            />
          </View>

          <Text style={{ color: "#00688C", marginLeft: 'auto' }}>Esqueceu a Senha?</Text>
        <Button title="Entrar" onPress={handleButtonPress} />
        </View>
      </View>
    </>
  );
};
