import React, { useEffect, useState } from "react";
import styles from "./styled.tsx";
import { View, Text, ScrollView, Modal, Pressable } from "react-native";
import PartnerSignIn from "../../components/PartnerSignIn.tsx";
import SignInServeral from "../../components/SignInSeveral.tsx";
import Button from "../../components/ButtonSignIn.tsx";
import api from "../../api/api.ts";
import { URI } from "../../api/uri.ts";
import { SessionController } from "../../session/SessionController.ts";

export default ({ navigation }: any) => {

  const [partnerName, setPartnerName] = useState('');
  const [partnerPrivacy, setPartnerPrivacy] = useState('0');
  const [partnerType, setPartnerType] = useState('0');
  const [partnerAmount, setPartnerAmount] = useState('');
  const [partnerStatus, setPartnerStatus] = useState('0');
  const [partnerContact, setPartnerContact] = useState('');
  const [partnerResponsible, setPartnerResponsible] = useState('');
  const [partnerState, setPartnerState] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

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
        if (response.status == 200) {
          navigation.navigate('Home')
        }
      })
      .catch(error => {
        setModalVisible(true);
        console.log(error);
      })
  }

  const optionsType = ["Único", "Múltiplo"];

  const optionsStatus = [
    "Em Prospecção",
    "Primeiro Contato feito",
    "Primeira Reunião marcada/realizada",
    "Documentação enviada/em analise(Parceiro)",
    "Documetação devolvida (Em análise Academy)",
    "Documetação devolvida (Em análise Legal)",
    "Documetação analisada devolvida (Parceiro)",
    "Em preparação de Executive Sumary (Academy)",
    "ES em Análise (Legal)",
    "ES em Análise (Academy Global)",
    "Pronto para Assinatura",
    "Parceria Firmada"
  ];

  const options = ["Público", "Privado"];

  const optionsState = [
    "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia",
    "Ceará", "Espírito Santos", "Goiás", "Maranhão", "Mato Grosso",
    "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná",
    "Pernambuco", "Piaui", "Rio de Janeiro", "Rio Grande do Norte",
    "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina",
    "São Paulo", "Sergipe", "Tocantins"]

  const handleSelect = (selectedOption: string) => {
    console.log(`Opção Selecionada: ${selectedOption}`);
  };

  return (
    <View style={styles.Container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Dados de cadastro incompletos ou incorretos!</Text>
            <Pressable
              style={[styles.button]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text style={styles.Text1}>Adicionar um parceiro</Text>
      <Text style={styles.Text2}>Coloque os dados do seu parceiro</Text>
      <View style={styles.Divider}></View>
      <ScrollView>
        <Text style={styles.Text}>Nome do Parceiro</Text>
        <PartnerSignIn placeholder={""} onChangeText={setPartnerName} />
        <Text style={styles.Text}>Tipo de Parceiro</Text>
        <SignInServeral options={optionsType} onSelect={handleSelect} />
        <Text style={styles.Text}>Status</Text>
        <SignInServeral options={optionsStatus} onSelect={handleSelect} />
        <Text style={styles.Text}>Responsável</Text>
        <PartnerSignIn placeholder={""} onChangeText={setPartnerResponsible} />
        <Text style={styles.Text}>Público ou Privado</Text>
        <SignInServeral options={options} onSelect={handleSelect} />
        <Text style={styles.Text}>Quantidade de Membros</Text>
        <PartnerSignIn placeholder={""} onChangeText={setPartnerAmount} />
        <Text style={styles.Text}>Numero de Contato</Text>
        <PartnerSignIn placeholder={""} onChangeText={setPartnerContact} />
        <Text style={styles.Text}>Estado</Text>
        <SignInServeral options={optionsState} onSelect={handleSelect} />

        <Button
          title={"Adicionar"}
          onPress={() => {
            handleNewPartner()
          }}
        />
      </ScrollView>
    </View>
  );
};
