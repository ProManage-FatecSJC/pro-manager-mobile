import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [modalVisible, setModalVisible] = useState(false);
  const sessionController = new SessionController()

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  async function handleLogin() {
    try {
      setIsLoading(true)
      await api.post(URI.LOGIN, login).then(
        async response => {
          await sessionController.setToken(response.data)
          navigation.navigate('Home')
        }
      )
    } catch (error: any) {
      setIsLoading(false)
      setModalVisible(true)
      console.log(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const login = {
    email: email,
    password: password
  }

  return (
    <SafeAreaView style={styles.Container}>
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

        <PasswordInput marginTop={16} marginBottom={0} onChangeText={setPassword}/>
      </View>

      <DefaultButton
        title="Entrar"
        onPress={handleLogin}
        isLoading={isLoading}
      />
    </SafeAreaView>
  )
}