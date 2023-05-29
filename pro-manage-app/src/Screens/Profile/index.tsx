import React, { useEffect, useState } from "react";
import styles from "./styles.ts";
import { View, Text, Image, SafeAreaView, TextInput } from "react-native";
import { SessionController } from "../../session/SessionController.ts";
import { useNavigation } from "@react-navigation/native";

export function Profile() {
  const navigation = useNavigation();

  const [userName, setUserName] = useState('')
  const sessionController = new SessionController()

  const getName = async () => {
    let token = await sessionController.getName() as string
    
    setUserName(token)
  }

  useEffect(() => {
    getName()
  })


  return (
    <View style={styles.Container}>
      <View style={styles.containerHeaderUser}>
        <Image 
          source={require('../../assets/avatar.png')} 
          style={styles.UserImage}
        />
        <Text style={styles.UserName}>
         {userName}
        </Text>
      <View style={styles.Divider}></View>
      </View>
      <View style={styles.containerHeaderUserInfo}>
        <SafeAreaView>
          <View style={styles.inputMarginBottom}>
            <Text style={styles.labelInput}>E-mail</Text>
            <TextInput
              style={styles.Input}
              value="fulanodasilva@gmail.com"
              editable={false}
            />
          </View>
          <View>
            <Text
            style={styles.labelInput}>Senha</Text>
            <TextInput
              style={styles.Input}
              secureTextEntry={true}
              value="12321321"
              editable={false}
            />
          </View>

          {/* <Button title="Adicionar Perfil" onPress={() => navigation.navigate('')} /> */}
        </SafeAreaView>
      </View>
    </View>
  );
};
