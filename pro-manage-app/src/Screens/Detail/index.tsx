import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "./styled.tsx";

import api from "../../api/api.ts";
import { URI } from "../../api/uri.ts";
import { SessionController } from "../../session/SessionController.ts";
import CardDetail from "../../components/CardDetail.tsx";
import SearchBar from "../../components/SearchBar.tsx";

export default ({ navigation, route }: any) => {
  const { statusProp } = route.params;

  const sessionController = new SessionController();

  const [partners, setPartners] = useState(statusProp);

  

  const optionsStatus = [
    "em Prospecção",
    "com primeiro Contato feito",
    "com primeira Reunião marcada/realizada",
    "com documentação enviada/em analise(Parceiro)",
    "com ocumetação devolvida (Em análise Academy)",
    "com documetação devolvida (Em análise Legal)",
    "com documetação analisada devolvida (Parceiro)",
    "em preparação de Executive Sumary (Academy)",
    "ES em Análise (Legal)",
    "ES em Análise (Academy Global)",
    "pronto para Assinatura",
    "com Parceria Firmada",
  ];

  const title = `${optionsStatus[statusProp[0].status]}`;

  const handleSearch = (text : any) => {
    if (!text) {
      setPartners(statusProp);
      return;
    }

    const filteredPartners = statusProp.filter((partner: any) => {
      const name = partner.name.toLowerCase();
      const searchTerm = text.toLowerCase();
      return name.includes(searchTerm);
    });

    console.log('PARCEIROS FILTRADOS: ', filteredPartners)
    
    setPartners(filteredPartners);
  };

  return (
    <View style={styles.Container}>
      <Text style={styles.Text1}> Parceiros {title} </Text>
      <SearchBar placeholder={"Pesquisa"} onChangeText={handleSearch}/>
      <ScrollView>
        <View>
          {partners.map((item: any) => (
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