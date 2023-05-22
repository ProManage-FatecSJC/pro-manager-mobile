import React, { useEffect } from "react";
import styles from "./styled.tsx";
import Logo from "../../assets/Logo.svg";
import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, Image, Text, View } from "react-native";

export default () => {
  const navigation = useNavigation();

   useEffect(() => {
     const checkToken = async () => {
       const token = await AsyncStorage.getItem("token");
       if (token) {
         //validar o token
       } else {
         //manda para o login
        //  navigation.navigate("SignIn");
       }
     };
     checkToken();
   }, []);

  return (
    <View style={[styles.Container, styles.LoadingIcon]}>
      {/* <Image source={require('../../assets/Logo.svg')}/>  */}
      <ActivityIndicator size="large" color="#FFFFFF" />
    </View>
  );
};
