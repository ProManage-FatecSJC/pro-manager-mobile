import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput,
} from 'react-native';
import Button from "../../components/ButtonAddUser.tsx";
import { useNavigation } from "@react-navigation/native"; 
import styles from './styles.tsx';
import ButtonCancel from "../../components/ButtonRed.tsx";
import SignInServeral from "../../components/SignInSeveral.tsx";
import { SessionController } from "../../session/SessionController.ts";
import api from "../../api/api.ts";
import { URI } from "../../api/uri.ts";

export default ({navigation}: any) => {

  const [UserName, setUserName] = useState('');
  const [UserEmail, setUserEmail] = useState('');
  const [UserPass, setUserPass] = useState('');
  const [UserRole, setUserRole] = useState('');

const sessionController = new SessionController()

 const handleNewUser = async () => {
  const token = await sessionController.getToken()
   console.log(user)
   await api.
  post(URI.USER, user, {
       headers: {
           Authorization: token
       }
   })
   .then(response => {
       if(response.status == 200){
            navigation.navigate('profile')
       }
   })
  .catch(error => {
       console.log(error);
   })
 }

const RoleOptions = [
  { label: 'Administrador', value: 0 },
  { label: 'Observador', value: 1 },
  
];

let user = {
  name: UserName,
  email: UserEmail,
  senha: UserPass,
  Role: parseInt(UserRole)
}

const handleSelect = (selectedOption: string) => {
      console.log(`Função Selecionada: ${selectedOption}`);
    };

const onCancel = () => {
      console.log(`Cancelado`);
      navigation.navigate('profile')
    };


    return (
    <View style={styles.Title}>
      <Text style={styles.Text1}>Adicionar um usuário</Text>
      <Text style={styles.Text2}>Adicione um usuário ao sistema</Text>
      <View style={styles.Divider}></View>
         
        <Text style={styles.Text}>Nome do Usuário</Text>
        <TextInput style={styles.input} placeholder="Digite o nome do usuário " onChangeText={setUserName} value={UserName}/>

        <Text style={styles.Text}>Email</Text>
        <TextInput style={styles.input} placeholder="Digite o Email" onChangeText={setUserEmail} value={UserEmail}/>

        <Text style={styles.Text}>Senha</Text>    
        <TextInput style={styles.input} placeholder="Digite a senha" onChangeText={setUserPass} secureTextEntry={true} value={UserPass}/>

        <SignInServeral options={RoleOptions} onSelect={handleSelect} /> 
          
          <Button title="Salvar" onPress={function (): void {
            throw new Error("Function not implemented.");
          }} />
          
          <ButtonCancel title="Cancelar" onPress={onCancel}/>
          
        </View>
      );
    }