import React, { useState } from "react";
import styles from "./styled.tsx";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
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
        <Text style={styles.TextLogin}>Olá,</Text>
        <Text style={styles.TextLogin}>Bem Vindo</Text>
        <View style={{ marginTop: 70 }}>
          <SignInInput
            placeholder="E-mail"
            value={"E-mail"}
            onChangeText={function (text: string): void {
              throw new Error("Function not implemented.");
            }}
          />
          <SignInInput
            placeholder="Senha"
            value={"Senha"}
            onChangeText={function (text: string): void {
              throw new Error("Function not implemented.");
            }}
          />
          <Text style={{ color: "#00688C", marginLeft: 'auto' }}>Esqueceu a Senha?</Text>
        </View>
        <Button title="Entrar" onPress={handleButtonPress} />
      </View>
    </>
  );
};
