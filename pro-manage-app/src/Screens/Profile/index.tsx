import React, { useEffect, useState } from "react";
import styles from "./styles.ts";
import { View, Text, Image, SafeAreaView, TextInput, Modal, Pressable } from "react-native";
import { SessionController } from "../../session/SessionController.ts";
import api from "../../api/api.ts";
import { URI } from "../../api/uri.ts";
import { DefaultButton } from "../../components/DefaultButton/index.tsx";

export default ({navigation}: any) => {

  const [userName, setUserName] = useState('')
  const [userId, setUserId] = useState('')
  const [userEmail, setUserEmail] = useState("");
  const [userRole, setUserRole] = useState(1);
  const [count, setCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const [userData, setUserData] = useState()
  const sessionController = new SessionController()

  const getId = async () => {
    let token = (await sessionController.getId()) as string;

    setUserId(token);
  };

  useEffect(() => {
    getId();
  });

  const handleGetUser = async (userId: string) => {
    const token = await sessionController.getToken();
    await api
      .get(URI.USERS + `/${userId}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setUserData(response.data);
        setUserName(response.data.name);
        setUserEmail(response.data.email);
        setUserRole(response.data.role);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (count < 10) {
      handleGetUser(userId);
      setCount(count + 1);
    }
  }, [userName]);

  const RoleOptions = ["Administrador", "Observador"];

  const deleteUser = async (userId: string) => {
    const token = await sessionController.getToken();
    await api
      .delete(URI.USERS + `/${userId}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        
        if (response.status == 200) {
          navigation.navigate("SignIn");
        } 
      })
      .catch((error) => {
        console.log(error);
      });
  };



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
            <Text style={styles.modalText}>Confirmar Exclusão?</Text>
            <Pressable
              style={[styles.button]}
              onPress={() => {
                setModalVisible(!modalVisible);
                deleteUser(userId);
              }}
            >
              <Text style={styles.textStyle}>Sim</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.containerHeaderUser}>
        <Image
          source={require("../../assets/avatar.png")}
          style={styles.UserImage}
        />
        <Text style={styles.UserName}>{userName}</Text>
        <View style={styles.Divider}></View>
      </View>
      <View style={styles.containerHeaderUserInfo}>
        <SafeAreaView>
          <View style={styles.inputMarginBottom}>
            <Text style={styles.labelInput}>E-mail</Text>
            <TextInput
              style={styles.Input}
              value={userEmail}
              editable={false}
            />
          </View>
          <View style={styles.inputMarginBottom}>
            <Text style={styles.labelInput}>Nível de Acesso</Text>
            <TextInput
              style={styles.Input}
              value={RoleOptions[userRole]}
              editable={false}
            />
          </View>

          <DefaultButton
            title={"Editar Perfil"}
            onPress={() => {
              navigation.navigate("UserUpdate", { idProp: userId });
            }}
          />

          <DefaultButton
            title={"Excluir Perfil"}
            onPress={function (): void {
              setModalVisible(true);
            }}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};
