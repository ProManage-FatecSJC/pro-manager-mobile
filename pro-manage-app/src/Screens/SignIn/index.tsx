import React, { useState } from "react";
import styles from "./styles.ts";
import { Text, View, TextInput, Modal, Pressable } from "react-native";
import { URI } from "../../api/uri.ts";
import api from "../../api/api.ts";
import { SessionController } from "../../session/SessionController.ts";
import { DefaultButton } from "../../components/DefaultButton/index.tsx";


export function SignIn ({ navigation }: any) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [modalVisible, setModalVisible] = useState(false);
  const sessionController = new SessionController()

  async function handleButtonPress() {
    try {
      await api.post(URI.LOGIN, login).then(
        async response => {
          await sessionController.setToken(response.data)
          navigation.navigate('Home')
        }
      )
    } catch (error: any) {
      setModalVisible(true)
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
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible)
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>E-mail ou senha incorretos!</Text>
              <Pressable
                style={[styles.button]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <View style={styles.containerTitle}>
          <Text style={styles.TextLogin}>Olá,</Text>
          <Text style={styles.TextLogin}>Bem Vindo</Text>
        </View>

        <View style={styles.containerInputs}>
          <View>
            <TextInput
              style={styles.Input}
              placeholder="E-mail"
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputMargin}>
            <TextInput
              style={styles.Input}
              placeholder="Senha"
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </View>

          <Text style={{ color: "#00688C", marginLeft: "auto" }}>
            Esqueceu a Senha?
          </Text>
          <DefaultButton  title="Entrar" onPress={handleButtonPress}/>
        </View>
      </View>
    </>
  );
};

