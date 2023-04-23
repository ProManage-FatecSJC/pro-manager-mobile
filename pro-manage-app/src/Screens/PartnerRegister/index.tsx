import React, { useEffect, useState } from "react";
import styles from "./styled.tsx";
import { View, Text, ScrollView } from "react-native";
import PartnerSignIn from "../../components/PartnerSignIn.tsx";
import SignInServeral from "../../components/SignInSeveral.tsx";
import Button from "../../components/ButtonAddPartner.tsx";
import api from "../../api/api.ts";
import { URI } from "../../api/uri.ts";
import { SessionController } from "../../session/SessionController.ts";

export default ({navigation}: any) => {

  const [partnerName, setPartnerName] = useState('');
  const [partnerPrivacy, setPartnerPrivacy] = useState('0');
  const [partnerType, setPartnerType] = useState('0');
  const [partnerAmount, setPartnerAmount] = useState('');
  const [partnerStatus, setPartnerStatus] = useState('0');
  const [partnerContact, setPartnerContact] = useState('');
  const [partnerResponsible, setPartnerResponsible] = useState('');
  const [partnerState, setPartnerState] = useState('');

  const sessionController = new SessionController()

  let partner = {
    name: partnerName,
    privacy: parseInt(partnerPrivacy),
    type: parseInt(partnerType),
    membersQuantity: partnerAmount,
    status: partnerStatus,
    telephone: partnerContact,
    intermediateResponsible: partnerResponsible,
    state: partnerState
  }

  const handleNewPartner = async () => {
    const token = await sessionController.getToken()
    console.log(partner)
    await api.
    post(URI.PARTNER, partner, {
        headers: {
            Authorization: token
        }
    })
    .then(response => {
        if(response.status == 200){
            navigation.navigate('Home')
        }
    })
    .catch(error => {
        console.log(error);
    })
}

  return (
    <View style={styles.Container}>
      <Text style={styles.Text1}>Adicionar um parceiro</Text>
      <Text style={styles.Text2}>Coloque os dados do seu parceiro</Text>
      <View style={styles.Divider}></View>
      <ScrollView>
        <Text>Nome do Parceiro</Text>
        <PartnerSignIn
          placeholder={""}
          onChangeText={setPartnerName}
        />
        <Text>Tipo de Parceiro</Text>
        <SignInServeral />
        <Text>Status</Text>
        <SignInServeral />
        <Text>Responsável</Text>
        <PartnerSignIn
          placeholder={""}
          onChangeText={setPartnerResponsible}
        />
        <Text>Público ou Privado</Text>
        <SignInServeral
        />
        <Text>Quantidade de Membros</Text>
        <PartnerSignIn
          placeholder={""}
          onChangeText={setPartnerAmount}
        />
        <Text>Numero de Contato</Text>
        <PartnerSignIn
          placeholder={""}
          onChangeText={setPartnerContact}
        />

        <Button title={"Adicionar"} onPress={() => handleNewPartner()} />
      </ScrollView>
    </View>
  );
};
