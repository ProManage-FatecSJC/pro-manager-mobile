import React, { useState } from "react";
import styles from "./styled.js";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";

//import EmailIcon from "../../assets/email.svg";
//import LockIcon from "../../assets/lock.svg";
//import SignInput from "../../components/SignInput";
//import {Container,TextLogo,InputArea,TextLogin,CustomButton,CustomButtonText,SignMessageButton,SignMessageButtonTextBold} from "./styles";

//import Api from "../../Api";

export default () => {
  const navigation = useNavigation();

  const handleSignClick = async () => {
  };

  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  return (
    <View>
      <Text>ok</Text>
      
    </View>

    
    // <Container>
    //   
    //   <InputArea>
    //     <TextLogin>Bem vindo ao Money</TextLogin>

    //     <SignInput
    //       IconSvg={EmailIcon}
    //       placeholder="Email"
    //       value={emailField}
    //       onChangeText={(t) => setEmailField(t)}
    //     />
    //     <SignInput
    //       IconSvg={LockIcon}
    //       placeholder="Senha"
    //       value={passwordField}
    //       onChangeText={(t) => setPasswordField(t)}
    //       password={true}
    //     />

    //     <CustomButton onPress={handleSignClick}>
    //       <CustomButtonText>Logar</CustomButtonText>
    //     </CustomButton>
    //     <SignMessageButton>
    //       <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
    //     </SignMessageButton>
    //   </InputArea>
    // </Container>
  );
};
