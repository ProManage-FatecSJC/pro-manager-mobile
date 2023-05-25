import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from "react-native";
import styles from "./styled.tsx";

import api from "../../api/api.ts";
import { URI } from "../../api/uri.ts";
import { SessionController } from '../../session/SessionController.ts';
import ButtonBlue from '../../components/ButtonSignIn.tsx';
import ButtonRed from '../../components/ButtonRed.tsx';
import ButtonGreen from '../../components/ButtonGreen.tsx';

export function InfPartner ({ navigation, route }: any){

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

  async function handleArchivePartner(partnerId : string) {
    const token = await sessionController.getToken()
    try {
      await api.put(URI.PARTNER + `/archive/${partnerId}`, {}, {
        headers: { Authorization: token }
      }).then(response => {
        if(response.status == 200) {
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
    <View style={styles.Container}>
      <Text style={styles.Text1}> Parceiro: {name}</Text>
      <ScrollView>
        <View style={styles.Center}>
          <Image
            source={require("../../assets/avatar.png")}
            style={styles.UserImage}
          />
          <View style={styles.Divider}></View>
          <Text style={styles.Text2}>
            Nome: <Text style={styles.Text3}>{name}</Text>
          </Text>
          <Text style={styles.Text2}>
            Status: <Text style={styles.Text3}>{optionsStatus[status]}</Text>
          </Text>
          <Text style={styles.Text2}>
            Privacidade:{" "}
            <Text style={styles.Text3}>{optionsPrivace[privase]}</Text>
          </Text>
          <Text style={styles.Text2}>
            Tipo: <Text style={styles.Text3}>{optionsType[type]}</Text>
          </Text>
          <Text style={styles.Text2}>
            Max. Membros: <Text style={styles.Text3}>{members}</Text>
          </Text>
          <Text style={styles.Text2}>
            Contato: <Text style={styles.Text3}>{contacts}</Text>
          </Text>
          <Text style={styles.Text2}>
            Responsável: <Text style={styles.Text3}>{response}</Text>
          </Text>
          <Text style={styles.Text2}>
            Estado: <Text style={styles.Text3}>{uf}</Text>
          </Text>

        </View>

        <ButtonBlue
          title={"Editar"}
          onPress={() => {
            navigation.navigate("PartnerUpdate", {
              idProp: id
            });
          }}
        />

        <ButtonGreen
          title={"Visualizar Membros"}
          onPress={() => {
            console.log(idProp);
            navigation.navigate("Members", {
              idProp: id,
            });
          }}
        />

        <ButtonRed
          title={"Arquivar Parceiro"}
          onPress={() => {
            handleArchivePartner(idProp)
          }}
        />
      </ScrollView>
    </View>
  );
};