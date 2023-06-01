import React, { useEffect, useState } from "react";
import styles from "./styled.tsx";
import { View, Text, ScrollView, TextInput, Modal, Pressable } from "react-native";
import PartnerSignIn from "../../components/PartnerSignIn.tsx";
import SignInServeral from "../../components/SignInSeveral.tsx";
import api from "../../api/api.ts";
import { URI } from "../../api/uri.ts";
import { SessionController } from "../../session/SessionController.ts";
import { DefaultButton } from "../../components/index.tsx";

export default ({ navigation, route }: any) => {

  const { idProp } = route.params  /// usuáio que vem de Usuários


  const [userId, setUserId] = useState("")
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassCurrent, setUserPassCurrent] = useState("");
  const [userNewPass, setUserNewPass] = useState("");
  const [userRole, setUserRole] = useState(1);
  const [userRoleAdm, setUserRoleAdm] = useState("");
  const [count, setCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const sessionController = new SessionController()

  const getId = async () => {
    let token = (await sessionController.getId()) as string;  /// id do usuário que esta logado, vem da pagina perfil

    setUserId(token);
  };

  useEffect(() => {
    getId();
  });

  const getRole = async () => {
    let token = (await sessionController.getRole()) as string; /// rode do usuário que esta logado, vem da pagina perfil

    setUserRoleAdm(token);
  };

  useEffect(() => {
    getRole();
  });

  let user = {
    name: userName,
    email: userEmail,
    oldPassword: userPassCurrent,
    password: userNewPass,
    role: userRole,
  };

  const setUserData = (data: any) => {
    setUserName(data.name)
    setUserEmail(data.email);
    setUserRole(data.role);
  }

  const handleGetUser = async (userId: string) => {
    const token = await sessionController.getToken()
    await api.
      get(URI.USERS + `/${userId}`,  {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        setUserData(response.data)
        
      })
      .catch(error => {
        console.log(error);
      })
  }

  

  const handleNewUser = async (userId: string) => {
    const token = await sessionController.getToken()
    console.log(user)
    await api.
      put(URI.USERS + `/${userId}`, user, {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        if (response.status == 200) {
          navigation.navigate('Home')
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    if (count < 10) {
      handleGetUser(idProp)
      setCount(count + 1)
  }
  }, [userName])

  
const RoleOptions = ["Administrador", "Observador"];

const handleSelect = (selectedOption: any) => {
  if(selectedOption == "Administrador"){
    setUserRole(0)
  } else {
    setUserRole(1);
  }
  ;}
  

  return (
    <View style={styles.Container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Confirmar Atualização?</Text>
            <Pressable
              style={[styles.button]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Sim</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View>
        <Text style={styles.Text1}>Editar {userName} </Text>
        <Text style={styles.Text2}>Atualize os dados</Text>
        <View style={styles.Divider}></View>

        <Text style={styles.Text}>Nome do Usuário</Text>
        <PartnerSignIn
          placeholder={""}
          onChangeText={setUserName}
          value={userName}
        />

        <Text style={styles.Text}>Email</Text>
        <PartnerSignIn
          placeholder={""}
          onChangeText={setUserEmail}
          value={userEmail}
          editable={false}
        />

        {idProp === userId ? (
          <>
            <Text style={styles.Text}>Senha Atual</Text>
            <TextInput
              style={styles.Input}
              placeholder={""}
              onChangeText={setUserPassCurrent}
              value={userPassCurrent}
              secureTextEntry={true}
            />

            <Text style={styles.Text}>Senha Nova</Text>
            <TextInput
              style={styles.Input}
              placeholder={""}
              onChangeText={setUserNewPass}
              value={userNewPass}
              secureTextEntry={true}
            />
          </>
        ) : (
          <></>
        )}

        {RoleOptions[Number(userRoleAdm)] === "Administrador" ? (
          <>
            <Text style={styles.Text}>Nível de Acesso</Text>
            <SignInServeral options={RoleOptions} onSelect={handleSelect} />
          </>
        ) : (
          <></>
        )}

        <DefaultButton
          title={"Atualizar"}
          onPress={function (): void {
            setModalVisible(true);
            handleNewUser(idProp);
          }}
        />
      </View>
    </View>
  );
};
