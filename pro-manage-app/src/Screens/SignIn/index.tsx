import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

import api from '../../api/api';
import { URI } from '../../api/uri';
import { SessionController } from '../../session/SessionController';

import {
  DefaultButton,
  DefaultInput,
  PasswordInput
} from '../../components';

import { styles } from './styles'

export function SignIn({ navigation }: any) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [modalVisible, setModalVisible] = useState(false);
  const sessionController = new SessionController()

  async function handleLogin() {
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
    <KeyboardAvoidingView 
      style={styles.Container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -150}
    >
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
                <Text style={styles.textStyle}>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

      <View style={styles.titleWrapper}>
        <Text style={styles.textTitle}>Olá de novo!</Text>
        <Text style={styles.textSubtitle}>
          Sejá bem-vindo, você fez falta!
        </Text>
      </View>

      <View style={styles.containerInputs}>
        <DefaultInput placeholder="E-mail" onChangeText={setEmail}/>

        <PasswordInput marginTop={24} marginBottom={16} onChangeText={setPassword}/>

        <Text style={{ color: "#00688C", marginLeft: "auto" }}>Esqueceu a senha?</Text>
      </View>
      <DefaultButton
        title="Entrar"
        onPress={handleLogin}
      />
    </KeyboardAvoidingView>
  )
}