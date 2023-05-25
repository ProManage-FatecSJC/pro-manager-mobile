import React, { useEffect, useState } from "react";
import styles from "./styled.tsx";
import { View, Text, ScrollView } from "react-native";
import PartnerSignIn from "../../components/PartnerSignIn.tsx";
import SignInServeral from "../../components/SignInSeveral.tsx";
import Button from "../../components/ButtonAddPartner.tsx";
import api from "../../api/api.ts";
import { URI } from "../../api/uri.ts";
import { SessionController } from "../../session/SessionController.ts";

export function PartnerUpdate ({ navigation, route }: any) {

  const { idProp } = route.params
  const [partnerName, setPartnerName] = useState('');
  var partnerPrivacy = ''
  const [partnerType, setPartnerType] = useState('');
  const [partnerAmount, setPartnerAmount] = useState('');
  const [partnerStatus, setPartnerStatus] = useState('');
  const [partnerContact, setPartnerContact] = useState('');
  const [partnerResponsible, setPartnerResponsible] = useState('');
  const [partnerState, setPartnerState] = useState('');
  const [count, setCount] = useState(0);

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

  const setPartnerData = (data: any) => {
    setPartnerName(data.name)
    setPartnerType(optionsType[data.type])
    setPartnerAmount(data.membersQuantity.toString())
    setPartnerStatus(data.status)
    setPartnerContact(data.telephone)
    setPartnerResponsible(data.intermediateResponsible)
    setPartnerState(data.state)
    partnerPrivacy = options[data.privacy]
    console.log(partnerPrivacy)
  }

  const handleGetPartner = async (partnerId: string) => {
    const token = await sessionController.getToken()
    await api.
      get(URI.PARTNER + `/${partnerId}`,  {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        setPartnerData(response.data)
        
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleNewPartner = async (partnerId: string) => {
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
        console.log(error);
      })
  }

  useEffect(() => {
    if (count < 10) {
      handleGetPartner(idProp)
      setCount(count + 1)
  }
  }, [partnerName])

  const optionsType = ["Unico", "Multiplo"];

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
      setPartnerState(selectedOption)
    };
  
    const handleSelectType = (selectedOption: string) => {
      setPartnerType(selectedOption)
    };
  
    const handleSelectStatus = (selectedOption: string) => {
      setPartnerStatus(selectedOption)
    }
  
    const handleSelectPrivacy = (selectedOption: string) => {
      partnerPrivacy = selectedOption
    }

  return (
    <View style={styles.Container}>
      <Text style={styles.Text1}>Editar parceiro</Text>
      <Text style={styles.Text2}>Atualize os dados do seu parceiro</Text>
      <View style={styles.Divider}></View>
      <ScrollView>
        <Text style={styles.Text}>Nome do Parceiro</Text>
        <PartnerSignIn placeholder={""} onChangeText={setPartnerName} value={partnerName}/>
        <Text style={styles.Text}>Tipo de Parceiro</Text>
        <SignInServeral options={optionsType} onSelect={handleSelect} value={partnerType}/>
        <Text style={styles.Text}>Status</Text>
        <SignInServeral options={optionsStatus} onSelect={handleSelect} value={partnerStatus}/>
        <Text style={styles.Text}>Responsável</Text>
        <PartnerSignIn placeholder={""} onChangeText={setPartnerResponsible} value={partnerResponsible}/>
        <Text style={styles.Text}>Público ou Privado</Text>
        <SignInServeral options={options} onSelect={handleSelect} value={partnerPrivacy}/>
        <Text style={styles.Text}>Quantidade Máxima de Membros</Text>
        <PartnerSignIn placeholder={""} onChangeText={setPartnerAmount} value={partnerAmount}/>
        <Text style={styles.Text}>Numero de Contato</Text>
        <PartnerSignIn placeholder={""} onChangeText={setPartnerContact} value={partnerContact}/>
        <Text style={styles.Text}>Estado</Text>
        <SignInServeral options={optionsState} onSelect={handleSelect} value={partnerState}/>

        <Button
          title={"Adicionar"}
          onPress={function (): void {
            handleNewPartner(idProp)
          }}
        />
      </ScrollView>
    </View>
  );
};
