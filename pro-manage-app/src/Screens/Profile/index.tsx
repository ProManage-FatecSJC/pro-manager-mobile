import React, { useEffect } from "react";
import styles from "./styled.tsx";
import { View, Text, Image, SafeAreaView, TextInput } from "react-native";

export default () => {

  return (
    <View style={styles.Container}>
      <View style={styles.containerHeaderUser}>
        <Image 
          source={require('../../assets/avatar.png')} 
          style={styles.UserImage}
        />
        <Text style={styles.UserName}>
          Fulano da Silva
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
        </SafeAreaView>
      </View>
    </View>
  );
};
