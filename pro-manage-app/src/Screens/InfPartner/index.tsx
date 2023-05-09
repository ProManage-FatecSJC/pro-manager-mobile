import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from "react-native";
import styles from "./styled.tsx";

import api from "../../api/api.ts";
import { URI } from "../../api/uri.ts";
import { SessionController } from '../../session/SessionController.ts';
import ButtonBlue from '../../components/ButtonSignIn.tsx';
import ButtonRed from '../../components/ButtonRed.tsx';
import ButtonGreen from '../../components/ButtonGreen.tsx';

export default ({navigation, route}: any) => {

  const {idProp} = route.params;

  const [id, setId] = useState(idProp);
  const [data, setData] = useState({})
  const [inf, setInf] = useState(0);
  const sessionController = new SessionController();

  async function handlePartner() {
    const token = await sessionController.getToken();

    try {
      await api.get(URI.PARTNER,{
        headers: { Authorization: token}  
      }).then(response => {
        setData(response.data)
  
      })
    }catch (error) {
      console.log(error)
    }
    
  }
  
  useEffect(() => {
    console.log(data);

  }, [])
  
  return (
    <View style={styles.Container}>
      <Text style={styles.Text1}> Parceiro: Fatec</Text>
      <View style={styles.Divider}></View>
      <ScrollView>
        <Text style={styles.Text2}>Nome: </Text>
        <Text style={styles.Text2}>Status: </Text>
        <Text style={styles.Text2}>Privacidade: </Text>
        <Text style={styles.Text2}>Tipo: </Text>
        <Text style={styles.Text2}>Membros: </Text>
        <Text style={styles.Text2}>Contato: </Text>
        <Text style={styles.Text2}>Responsável: </Text>
        <Text style={styles.Text2}>Estado: </Text>

        <ButtonBlue
          title={"Editar"}
          onPress={function (): void {
            throw new Error("Function not implemented.");
          }}
        />

        <ButtonGreen
          title={"Visualizar Membros"}
          onPress={() => {
            navigation.navigate("Members");
          }}
        />

        <ButtonRed
          title={"Arquivar Parceiro"}
          onPress={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </ScrollView>
    </View>
  );
};