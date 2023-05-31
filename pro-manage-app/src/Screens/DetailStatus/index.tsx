import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "./styles.ts";
import {
  SearchBar,
  CardDetail
} from '../../components'
import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export function DetailStatus ({ navigation, route }: any){
  const { statusProp } = route.params;
  const [partners, setPartners] = useState(statusProp);
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
    "Prontos para Assinatura",
    "Parceria Firmada",
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
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft size={24}/>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>{title}</Text>
      </View>
      <SearchBar placeholder={"Pesquisa"} onChangeText={handleSearch} />
      <ScrollView>
        <View>
          {partners.map((item: any) => (
            <CardDetail
              key={item.id}
              name={item.name}
              status={optionsStatus[item.status]}
              responsible={item.intermediateResponsible}
              onPress={() => {
                console.log("ID AQUI: ", item.id)
                navigation.navigate("InfPartner", {
                  idProp: item.id});
              }} 
            /> ))
          }
        </View>
      </ScrollView>
    </View>
  );
}