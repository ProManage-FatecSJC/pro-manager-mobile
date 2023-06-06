import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles.ts";

import api from "../../api/api.ts";
import { URI } from "../../api/uri.ts";
import { SessionController } from "../../session/SessionController.ts";
import { DefaultButton, SearchBar, CardDetail } from "../../components/index.tsx";
import { ArrowLeft } from "phosphor-react-native";
import { HStack, Spinner } from "native-base";

export function DetailTotal ({ navigation, route }: any) {
  const { statusProp } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const sessionController = new SessionController();
  const [partners, setPartners] = useState(statusProp);
  const optionsStatus = [
    "Em Prospecção",
    "Primeiro Contato feito",
    "Primeira Reunião marcada/realizada",
    "Documentação enviada/em analise(Parceiro)",
    "Dcumetação devolvida (Em análise Academy)",
    "Documetação devolvida (Em análise Legal)",
    "Documetação analisada devolvida (Parceiro)",
    "Preparação de Executive Sumary (Academy)",
    "ES em Análise (Legal)",
    "ES em Análise (Academy Global)",
    "Prontos para Assinatura",
    "Parceria Firmada",
  ];

  const title =
    statusProp.length == 0 ? "" : `${optionsStatus[statusProp[0].status]}`; 
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

  function goBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.Container}>
     <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={goBack}>
          <ArrowLeft size={24}/>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>{title}</Text>
      </View>

      {partners.length === 0 ? (
        <>
          <Text style={styles.NoPartners}>
            Você ainda não tem parceiros nessa fase
          </Text>

          <DefaultButton
            title={"Cadastre um  Parceiro"}
            onPress={() => {
              navigation.navigate("PartnerRegister");
            }}
          />
        </>
      ) : (
        <>
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
                    console.log("ID AQUI: ", item.id);
                    navigation.navigate("InfPartner", {
                      idProp: item.id,
                    });
                  }}
                />
              ))}
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
};