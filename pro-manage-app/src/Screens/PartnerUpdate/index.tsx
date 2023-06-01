import React, { useEffect, useState } from "react";
import styles from "./styles.ts";
import { View, Text, ScrollView } from "react-native";
import PartnerSignIn from "../../components/PartnerSignIn.tsx";
import SignInServeral from "../../components/SignInSeveral.tsx";
import { DefaultButton } from "../../components/DefaultButton";
import api from "../../api/api.ts";
import { URI } from "../../api/uri.ts";
import { SessionController } from "../../session/SessionController.ts";
import ButtonBlue from "../../components/ButtonBlue.tsx";
import ButtonRed from "../../components/ButtonRed.tsx";

export function PartnerUpdate ({ navigation, route }: any) {

  const { idProp } = route.params
  const [partnerName, setPartnerName] = useState('');
  const [partnerPrivacy, setPartnerPrivacy] = useState(0);
  const [partnerType, setPartnerType] = useState(0);
  const [partnerAmount, setPartnerAmount] = useState('');
  const [partnerStatus, setPartnerStatus] = useState(0);
  const [partnerContact, setPartnerContact] = useState('');
  const [partnerResponsible, setPartnerResponsible] = useState('');
  const [partnerState, setPartnerState] = useState('');
  const [count, setCount] = useState(0);

  const sessionController = new SessionController()

  let partner = {
    name: partnerName,
    privacy: partnerPrivacy,
    type: partnerType,
    membersQuantity: partnerAmount,
    telephone: partnerContact,
    status: partnerStatus,
    state: partnerState,
    intermediateResponsible: partnerResponsible,
  };

  const setPartnerData = (data: any) => {
    setPartnerName(data.name)
    setPartnerType(data.type)
    console.log(data.type)
    setPartnerAmount(data.membersQuantity.toString())
    setPartnerStatus(data.status)
    setPartnerContact(data.telephone)
    setPartnerResponsible(data.intermediateResponsible)
    setPartnerState(data.state)
    setPartnerPrivacy(data.privacy)
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
        console.log(response.data);
        
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleNewPartner = async (partnerId: string) => {
    const token = await sessionController.getToken()
    console.log(partner)
    await api
      .put(URI.PARTNER + `/${partnerId}`, partner, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        if (response.status == 200) {
          navigation.navigate("Home");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    if (count < 2) {
      handleGetPartner(idProp)
      setCount(count + 1)
  }
  }, [count])

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
      setPartnerType(optionsType.indexOf(selectedOption))
    };
  
    const handleSelectStatus = (selectedOption: string) => {
      setPartnerStatus(optionsStatus.indexOf(selectedOption));
    }
  
    const handleSelectPrivacy = (selectedOption: string) => {
      setPartnerPrivacy(options.indexOf(selectedOption))
    }

  return (
    <View style={styles.Container}>
      <Text style={styles.Text1}>Editar parceiro</Text>
      <Text style={styles.Text2}>Atualize os dados do seu parceiro</Text>
      <View style={styles.Divider}></View>
      <ScrollView>
        <Text style={styles.Text}>Nome do Parceiro</Text>
        <PartnerSignIn
          placeholder={""}
          onChangeText={setPartnerName}
          value={partnerName}
        />
        <Text style={styles.Text}>Tipo de Parceiro {partnerType}</Text>
        <SignInServeral
          options={optionsType}
          onSelect={handleSelectType}
          value={optionsType[partnerType]}
        />
        <Text style={styles.Text}>Status</Text>
        <SignInServeral
          options={optionsStatus}
          onSelect={handleSelectStatus}
          value={optionsStatus[partnerStatus]}
        />
        <Text style={styles.Text}>Responsável</Text>
        <PartnerSignIn
          placeholder={""}
          onChangeText={setPartnerResponsible}
          value={partnerResponsible}
        />
        <Text style={styles.Text}>Público ou Privado</Text>
        <SignInServeral
          options={options}
          onSelect={handleSelectPrivacy}
          value={options[partnerPrivacy]}
        />
        <Text style={styles.Text}>Quantidade Máxima de Membros</Text>
        <PartnerSignIn
          placeholder={""}
          onChangeText={setPartnerAmount}
          value={partnerAmount}
        />
        <Text style={styles.Text}>Numero de Contato</Text>
        <PartnerSignIn
          placeholder={""}
          onChangeText={setPartnerContact}
          value={partnerContact}
        />
        <Text style={styles.Text}>Estado</Text>
        <SignInServeral
          options={optionsState}
          onSelect={handleSelect}
          value={partnerState}
        />

        <DefaultButton
          title={"Editar Parceiroh"}
          onPress={() => {
            handleNewPartner(idProp);
          }}
        />
        <DefaultButton
          title={"Cancelar"}
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
      </ScrollView>
    </View>
  );
};
