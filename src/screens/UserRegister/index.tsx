import React, { useState } from "react";
import styles from './styles.tsx';
import SignInServeral from "../../components/SignInSeveral.tsx";
import { SessionController } from "../../session/SessionController.ts";
import api from "../../api/api.ts";
import { URI } from "../../api/uri.ts";
import { DefaultButton } from "../../components/DefaultButton";
import { Text, View } from "react-native";
import PartnerSignIn from "../../components/PartnerSignIn.tsx";

export function UserRegister ({navigation}: any){

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');
  const [userRole, setUserRole] = useState(1);

const sessionController = new SessionController()

 const handleNewUser = async () => {
  const token = await sessionController.getToken()
   console.log(user)
   await api.
  post(URI.REGISTER, user, {
       headers: {
           Authorization: token
       }
   })
   .then(response => {
       if(response.status == 200){
            navigation.navigate("Profile");
       }
   })
  .catch(error => {
       console.log(error);
   })
 }

const RoleOptions = ["Administrador", "Observador"];

const handleSelect = (selectedOption: any) => {
  if(selectedOption == "Administrador"){
    setUserRole(0)
  } else {
    setUserRole(1);
  }
  ;}


let user = {
  name: userName,
  email: userEmail,
  password: userPass,
  role: userRole,
};

const onCancel = () => {
      console.log(`Cancelado`);
      navigation.navigate("Profile");
    };


    return (
      <View style={styles.Container}>
          <Text style={styles.Text1}>Adicionar um usuário</Text>
          <Text style={styles.Text2}>Adicione um usuário ao sistema</Text>
          <View style={styles.Divider}></View>

          <Text style={styles.Text}>Nome do Usuário</Text>
          <PartnerSignIn
            placeholder={"Digite o Nome"}
            onChangeText={setUserName}
            value={userName}
          />

          <Text style={styles.Text}>Email</Text>
          <PartnerSignIn
            placeholder={"Digite o Email"}
            onChangeText={setUserEmail}
            value={userEmail}
          />

          <Text style={styles.Text}>Senha</Text>
          <PartnerSignIn
            placeholder={"Digite a senha"}
            onChangeText={setUserPass}
            value={userPass}

          />

        <SignInServeral options={RoleOptions} onSelect={handleSelect} /> 
          
          <DefaultButton
            title={"Salvar"}
            onPress={() => {
              handleNewUser()
            }}
          />
          
          <DefaultButton title="Cancelar" onPress={onCancel} bg="red"/>
          
      </View>
  );
}