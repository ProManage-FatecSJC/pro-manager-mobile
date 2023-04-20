import React, { useEffect } from "react";
import styles from "./styled.tsx";
import { View, Text, ScrollView } from "react-native";
import PartnerSignIn from "../../components/PartnerSignIn.tsx";
import SignInServeral from "../../components/SignInSeveral.tsx";
import Button from "../../components/ButtonAddPartner.tsx";

export default () => {

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
        <SignInServeral/>
        <Text>Status</Text>
        <SignInServeral  />
        <Text>Responsável</Text>
        <PartnerSignIn
          placeholder={""}
          onChangeText={function (text: string): void {
            throw new Error("Function not implemented.");
          }}
        />
        <Text>Público ou Privado</Text>
        <SignInServeral 
        />
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

        <Button title={"Adicionar"} onPress={function (): void {
          throw new Error("Function not implemented.");
        } }/>
      </ScrollView>
    </View>
  );
};
