import React, { useEffect, useState } from "react";
import {ScrollView, Text, View } from "react-native";
import styles from "./styled.tsx";
import SearchBar from "../../components/SearchBar.tsx";
import CardUser from "../../components/CardUser.tsx";
import api from "../../api/api.ts";
import { URI } from "../../api/uri.ts";
import { SessionController } from "../../session/SessionController.ts";
import { DefaultButton } from "../../components/index.tsx";

export default ({ navigation }: any) => {
  const sessionController = new SessionController();
  const [usersData, setUsersData ] = useState([])
  const [users, setUsers] = useState(usersData);
  const [userName, setUserName] = useState("Ana");
  const [userEmail, setUserEmail] = useState("Email");
  const [userRole, setUserRole] = useState("Usuário");
  const optionsRole = [
    "Administrador",
    "Observador",
  ];


  const [count, setCount] = useState(0);

  async function handleUser(){
    const token = await sessionController.getToken();

    try{
      await api.get(URI.USERS, { 
        headers: { Authorization: token 
        }
      }).then(response => {
        setUsersData(response.data)
        setUserName(response.data.name)
        setUserEmail(response.data.email)
        setUserRole(response.data.role)

    
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (count < 10) {
      handleUser();
      console.log(count);
      setCount(count + 1);
    }
  }, [users]);



  const handleSearch = (text: any) => {
    if (!text) {
      usersData;
      return;
    }

    const filteredUsers = usersData.filter((user: any) =>{
      const name = user.name.toLowerCase();
      const searchTerm = text.toLowerCase();
      return name.includes(searchTerm);
    });

    console.log("USUÁRIOS FILTRADOS: ", filteredUsers);

    setUsersData(filteredUsers);

  };

  return (
    <View style={styles.Container}>
      {usersData.length === 0 ? (
        <>
          <Text style={styles.NoPartners}>
            Você ainda não tem Usuários cadastrados
          </Text>
        </>
      ) : (
        <>
          <Text style={styles.Text1}> Usuários </Text>
          <SearchBar placeholder={"Pesquisa"} onChangeText={handleSearch} />
          <ScrollView>
            <View>
              {usersData.map((item: any) => (
                <CardUser
                  key={item.id}
                  name={item.name}
                  email={item.email}
                  role={optionsRole[item.role]}
                />
              ))}
            </View>
          </ScrollView>
        </>
      )}
      <DefaultButton
        title={"Cadastre um Usuário"}
        onPress={() => {
          navigation.navigate("UserRegister");
        }}
      />
    </View>
  );
};