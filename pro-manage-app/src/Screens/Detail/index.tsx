import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "./styled.tsx";

import api from "../../api/api.ts";
import { URI } from "../../api/uri.ts";
import { SessionController } from "../../session/SessionController.ts";
import CardDetail from "../../components/CardDetail.tsx";

export default ({ navigation, route }: any) => {
  const { statusProp } = route.params;

  const sessionController = new SessionController();

  const [userName, setUserName] = useState("");

  const [partner, setPartner] = useState([]);
  const [partners, setPartners] = useState(statusProp);
  const [name, setName] = useState();
  const [status, setStatus] = useState();
  const [responsible, setResponsible] = useState();

  

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


  return (
    <View style={styles.Container}>
      <Text>Detail</Text>
      <Text> </Text>
      <Text> </Text>
      <ScrollView>
        <View>
          {statusProp.map((item: any) => (
            <CardDetail
              key={item.id}
              name={item.name}
              status={optionsStatus[item.status]}
              responsible={item.intermediateResponsible}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}