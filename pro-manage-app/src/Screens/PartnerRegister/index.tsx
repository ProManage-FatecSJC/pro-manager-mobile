import React, { useEffect } from "react";
import styles from "./styled.tsx";
import { View, Text, ScrollView } from "react-native";
import PartnerSignIn from "../../components/PartnerSignIn.tsx";
import SignInServeral from "../../components/SignInSeveral.tsx";
import Button from "../../components/ButtonAddPartner.tsx";

export default () => {

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

  const handleSelect = (selectedOption: string) => {
    console.log(`Opção Selecionada: ${selectedOption}`);
  };

  return (
    <View style={styles.Container}>
      <Text style={styles.Text1}>Adicionar um parceiro</Text>
      <Text style={styles.Text2}>Coloque os dados do seu parceiro</Text>
      <View style={styles.Divider}></View>
      <ScrollView>
        <Text>Nome do Parceiro</Text>
        <PartnerSignIn
          placeholder={""}
          onChangeText={function (text: string): void {
            throw new Error("Function not implemented.");
          }}
        />
        <Text>Tipo de Parceiro</Text>
        <SignInServeral options={options} onSelect={handleSelect} />
        <Text>Status</Text>
        <SignInServeral options={optionsStatus} onSelect={handleSelect} />
        <Text>Responsável</Text>
        <PartnerSignIn
          placeholder={""}
          onChangeText={function (text: string): void {
            throw new Error("Function not implemented.");
          }}
        />
        <Text>Público ou Privado</Text>
        <SignInServeral options={options} onSelect={handleSelect} />
        <Text>Quantidade de Membros</Text>
        <PartnerSignIn
          placeholder={""}
          onChangeText={function (text: string): void {
            throw new Error("Function not implemented.");
          }}
        />
        <Text>Numero de Contato</Text>
        <PartnerSignIn
          placeholder={""}
          onChangeText={function (text: string): void {
            throw new Error("Function not implemented.");
          }}
        />

        <Button
          title={"Adicionar"}
          onPress={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </ScrollView>
    </View>
  );
};
