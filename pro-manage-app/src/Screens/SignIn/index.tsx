import React, { useState } from "react";
import styles from "./styled.tsx";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Text, View, TextInput } from "react-native";
import SignInInput from "../../components/SignInput.tsx";
import Button from "../../components/ButtonSignIn.tsx";
import { URI } from "../../api/uri.ts";
import api from "../../api/api.ts";
import { SessionController } from "../../session/SessionController.ts";


export default ({navigation}: any) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const sessionController = new SessionController()

  async function handleButtonPress() {

    console.log(login)
    try {
      await api.post(URI.LOGIN, login).then(
        async response => {
          await sessionController.setToken(response.data)
          navigation.navigate('MainTab')
        }
      )
    } catch (error: any) {
      console.log(error.message)
    }
    
  }

  const login = {
    email: email,
    password: password
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
              onChangeText={setEmail}
            />
          </View>

          <View
            style={styles.inputMargin}
          >
            <TextInput
              style={styles.Input}
              placeholder="Senha"
              onChangeText={setPassword}
            />
          </View>

          <Text style={{ color: "#00688C", marginLeft: 'auto' }}>Esqueceu a Senha?</Text>
        <Button title="Entrar" onPress={handleButtonPress} />
        </View>
      </View>
    </>
  );
};
