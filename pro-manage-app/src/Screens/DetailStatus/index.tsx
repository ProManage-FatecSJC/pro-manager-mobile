import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "./styles.ts";
import CardDetail from "../../components/CardDetail.tsx";
import SearchBar from "../../components/SearchBar.tsx";
import { DefaultButton } from "../../components/index.tsx";

export function DetailStatus ({ navigation, route }: any){
  const { statusProp } = route.params;
  const [partners, setPartners] = useState(statusProp);
  const optionsStatus = [
    "Parceiros em Prospecção",
    "Parceiros com primeiro Contato feito",
    "Parceiros com primeira Reunião marcada/realizada",
    "Parceiros com documentação enviada/em analise(Parceiro)",
    "Parceiros com ocumetação devolvida (Em análise Academy)",
    "Parceiros com documetação devolvida (Em análise Legal)",
    "Parceiros com documetação analisada devolvida (Parceiro)",
    "Parceiros em preparação de Executive Sumary (Academy)",
    "Parceiros com ES em Análise (Legal)",
    "Parceiros com ES em Análise (Academy Global)",
    "Parceiros prontos para Assinatura",
    "Parceiros com Parceria Firmada",
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

  return (
    <View style={styles.Container}>
      <Text style={styles.Text1}> {title} </Text>
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
}