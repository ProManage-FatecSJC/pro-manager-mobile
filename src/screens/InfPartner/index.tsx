import React, {
  useEffect,
  useState
} from 'react';

import {
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import api from "../../api/api.ts";
import { URI } from "../../api/uri.ts";
import { SessionController } from '../../session/SessionController.ts';

import {
  DefaultButton
} from '../../components/DefaultButton/index.tsx';

import {
  ArrowLeft,
  ListDashes
} from 'phosphor-react-native';
import { Spinner, Heading, HStack } from 'native-base';

import styles from "./styles.ts";

export function InfPartner({ navigation, route }: any) {

  const { idProp } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState(idProp);
  const [data, setData] = useState();
  const [name, setName] = useState();
  const [status, setStatus] = useState(0);
  const [privacy, setPrivacy] = useState(0);
  const [type, setType] = useState(0);
  const [members, setMembers] = useState();
  const [contacts, setContacts] = useState();
  const [response, setResponse] = useState();
  const [uf, setUf] = useState();

  const [inf, setInf] = useState(0);
  const sessionController = new SessionController();

  async function handlePartner() {
    setIsLoading(true);
    const token = await sessionController.getToken();
    try {
      await api.get(URI.PARTNER + `/${id}`, {
        headers: { Authorization: token }
      }).then(response => {
        setData(response.data);
        setName(response.data.name);
        setStatus(response.data.status);
        setPrivacy(response.data.privacy);
        setType(response.data.type);
        setMembers(response.data.membersQuantity);
        setContacts(response.data.telephone);
        setResponse(response.data.intermediateResponsible);
        setUf(response.data.state);
        setIsLoading(false);
      })
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }

  };

  async function handleArchivePartner(partnerId: string) {
    const token = await sessionController.getToken()
    try {
      await api.put(URI.PARTNER + `/archive/${partnerId}`, {}, {
        headers: { Authorization: token }
      }).then(response => {
        if (response.status == 200) {
          navigation.goBack();
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

  function goBack() {
    navigation.goBack();
  }

  useEffect(() => {
    handlePartner()
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerTitleWrapper}>
        <TouchableOpacity onPress={goBack}>
          <ArrowLeft size={30} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.headerTitleTextPartner}>
          Parceiro |{' '}
          {isLoading ? (
            <HStack alignItems="center">
              <Spinner color="#f8f8f8" />
            </HStack>
          ) : (
            <Text style={styles.headerTitleText}>{name}</Text>
          )}
        </Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.informationPartnerDataWrapper}>

        <Text style={styles.informationTextTitle}>
          Nome:{' '}
          {isLoading ? (
            <HStack space={2} alignItems="center">
              <Spinner color="#4994CE" />
            </HStack>
          ) : (
            <Text style={styles.informationTextData}>{name}</Text>
          )}
        </Text>

        <Text style={styles.informationTextTitle}>
          Status:{' '}
          {isLoading ? (
            <HStack space={2} alignItems="center">
              <Spinner color="#4994CE" />
            </HStack>
          ) : (
            <Text style={styles.informationTextData}>{optionsStatus[status]}</Text>
          )}
        </Text>

        <Text style={styles.informationTextTitle}>
          Privacidade:{' '}
          {isLoading ? (
            <HStack space={2} alignItems="center">
              <Spinner color="#4994CE" />
            </HStack>
          ) : (
            <Text style={styles.informationTextData}>{optionsPrivace[privacy]}</Text>
          )}
        </Text>

        <Text style={styles.informationTextTitle}>
          Tipo:{' '}
          {isLoading ? (
            <HStack space={2} alignItems="center">
              <Spinner color="#4994CE" />
            </HStack>
          ) : (
            <Text style={styles.informationTextData}>{optionsType[type]}</Text>
          )}
        </Text>

        <Text style={styles.informationTextTitle}>
          Quantidade de membros:{' '}
          {isLoading ? (
            <HStack space={2} alignItems="center">
              <Spinner color="#4994CE" />
            </HStack>
          ) : (
            <Text style={styles.informationTextData}>{members}</Text>
          )}
        </Text>

        <Text style={styles.informationTextTitle}>
          Contato:{' '}
          {isLoading ? (
            <HStack space={2} alignItems="center">
              <Spinner color="#4994CE" />
            </HStack>
          ) : (
            <Text style={styles.informationTextData}>{contacts}</Text>
          )}
        </Text>

        <Text style={styles.informationTextTitle}>
          Responsável:{' '}
          {isLoading ? (
            <HStack space={2} alignItems="center">
              <Spinner color="#4994CE" />
            </HStack>
          ) : (
            <Text style={styles.informationTextData}>{response}</Text>
          )}
        </Text>

        <Text style={styles.informationTextTitle}>
          Estado:{' '}
          {isLoading ? (
            <HStack space={2} alignItems="center">
              <Spinner color="#4994CE" />
            </HStack>
          ) : (
            <Text style={styles.informationTextData}>{uf}</Text>
          )}
        </Text>

        <TouchableOpacity onPress={() => {
          console.log(idProp);
          navigation.navigate("Members", {
            idProp: id,
          });
        }}>
          <View style={[styles.informationTextWrapper, { marginTop: 16 }]}>
            <ListDashes color='grey' />
            <Text style={[styles.informationTextData, { color: 'grey' }]}>Ver lista de membros</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonSectionWrapper}>
        <View style={styles.buttonWrapper}>
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
        </View>

        <View style={styles.buttonWrapper}>
          <DefaultButton
            title="Arquivar Parceiro"
            bg={'transparent'}
            textColor={'#DA4625'}
            borderColor={'#DA4625'}
            borderWidth={1.5}
            variant={'outline'}
            _pressed={{
              bg: "#f0f0f0",
            }}
            onPress={() => {
              handleArchivePartner(idProp)
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};