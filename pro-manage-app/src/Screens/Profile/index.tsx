import React, { useEffect, useState } from "react";
import styles from "./styled.tsx";
import { View, Text, Image, SafeAreaView, TextInput } from "react-native";
import { SessionController } from "../../session/SessionController.ts";
import api from "../../api/api.ts";
import { URI } from "../../api/uri.ts";
import ButtonBlue from "../../components/ButtonBlue.tsx";
import ButtonRed from "../../components/ButtonRed.tsx";

export default ({navigation}: any) => {

  const [userName, setUserName] = useState('')
  const [userId, setUserId] = useState('')
  const [userEmail, setUserEmail] = useState("");
  const [userRole, setUserRole] = useState(1);
  const [count, setCount] = useState(0);

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



  return (
    <View style={styles.Container}>
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

          <ButtonBlue
            title={"Editar Perfil"}
            onPress={() => {
              navigation.navigate("UserUpdate", { idProp: userId });
            }}
          />

          <ButtonRed
            title={"Excluir Perfil"} onPress={function (): void {
              throw new Error("Function not implemented.");
            } }
          />
        </SafeAreaView>
      </View>
    </View>
  );
};
