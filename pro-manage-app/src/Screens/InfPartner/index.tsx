import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from "react-native";
import styles from "./styles.ts";

import api from "../../api/api.ts";
import { URI } from "../../api/uri.ts";
import { SessionController } from '../../session/SessionController.ts';
import { DefaultButton } from '../../components/DefaultButton/index.tsx';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowRight, ListDashes } from 'phosphor-react-native';

export function InfPartner({ navigation, route }: any) {

  const { idProp } = route.params;

  const [id, setId] = useState(idProp);
  const [data, setData] = useState();
  const [name, setName] = useState();
  const [status, setStatus] = useState(0);
  const [privase, setPrivase] = useState(0);
  const [type, setType] = useState(0);
  const [members, setMembers] = useState();
  const [contacts, setContacts] = useState();
  const [response, setResponse] = useState();
  const [uf, setUf] = useState();

  const [inf, setInf] = useState(0);
  const sessionController = new SessionController();

  async function handlePartner() {
    const token = await sessionController.getToken();
    try {
      await api.get(URI.PARTNER + `/${id}`, {
        headers: { Authorization: token }
      }).then(response => {
        setData(response.data);
        setName(response.data.name);
        setStatus(response.data.status);
        setPrivase(response.data.privacy);
        setType(response.data.type);
        setMembers(response.data.membersQuantity);
        setContacts(response.data.telephone);
        setResponse(response.data.intermediateResponsible);
        setUf(response.data.state);

      })
    } catch (error) {
      console.log(error)
    }

  };

  async function handleArchivePartner(partnerId: string) {
    const token = await sessionController.getToken()
    try {
      await api.put(URI.PARTNER + `/archive/${partnerId}`, {}, {
        headers: { Authorization: token }
      }).then(response => {
        if (response.status == 200) {
          navigation.navigate('Home')
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

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
    "Parceria Firmada",
  ];

  const optionsPrivace = [
    "Público",
    "Privado"
  ];

  const optionsType = [
    "Único",
    "Múltiplo"
  ]


  useEffect(() => {
    handlePartner()
  }, []);

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.headerTitleWrapper}>
        <Text style={styles.titleText}>{name}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.informationPartnerDataWrapper}>
   
          <Text style={styles.informationTextTitle}>
            Nome: {' '}
            <Text style={styles.informationTextData}>{name}</Text>
          </Text>
    

        <View style={styles.informationTextWrapper}>
          <Text style={styles.informationTextTitle}>Status:</Text>
          <Text style={styles.informationTextData}>{optionsStatus[status]}</Text>
        </View>

        <View style={styles.informationTextWrapper}>
          <Text style={styles.informationTextTitle}>Privacidade:</Text>
          <Text style={styles.informationTextData}>{optionsPrivace[privase]}</Text>
        </View>

        <View style={styles.informationTextWrapper}>
          <Text style={styles.informationTextTitle}>Tipo:</Text>
          <Text style={styles.informationTextData}>{optionsType[type]}</Text>
        </View>

        <View style={styles.informationTextWrapper}>
          <Text style={styles.informationTextTitle}>Quantidade de membros: </Text>
          <Text style={styles.informationTextData}>{members}</Text>
        </View>

        <View style={styles.informationTextWrapper}>
          <Text style={styles.informationTextTitle}>Contato:</Text>
          <Text style={styles.informationTextData}>{contacts}</Text>
        </View>

        <View style={styles.informationTextWrapper}>
          <Text style={styles.informationTextTitle}>Responsável:</Text>
          <Text style={styles.informationTextData}>{response}</Text>
        </View>

        <View style={styles.informationTextWrapper}>
          <Text style={styles.informationTextTitle}>Estado:</Text>
          <Text style={styles.informationTextData}>{uf}</Text>
        </View>

        <View style={[styles.informationTextWrapper, { marginTop: 16}]}>
          <ListDashes color='grey'/>
          <Text style={[styles.informationTextData, {color: 'grey'}]}>Ver lista de membros</Text>
        </View>
      </View>

      <View style={styles.buttonGap}>
        <DefaultButton
          title="Editar"
          bg={'transparent'}
          textColor={'#4994CE'}
          borderColor={'#4994CE'}
          borderWidth={1.5}
          variant={'outline'}
          _pressed={{
            bg: "#f0f0f0",
          }}
          onPress={() => {
            navigation.navigate("PartnerUpdate", {
              idProp: id
            });
          }}
        />

        <DefaultButton
          title="Arquivar Parceiro"
          bg={'transparent'}
          textColor={'#DA4625'}  
          onPress={() => {
            handleArchivePartner(idProp)
          }}
        />
      </View>
    </SafeAreaView>
  );
};