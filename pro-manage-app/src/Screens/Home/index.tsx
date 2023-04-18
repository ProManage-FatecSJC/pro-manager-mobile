import React, { useEffect } from "react";
import styles from "./styled.tsx";
import { View, Text } from "react-native";
import ButtonStatusPartner from "../../components/ButtonHome.tsx";
import ButtonCards from '../../components/CardStatus.tsx'
import { ScrollView } from "react-native-gesture-handler";

export default () => {

  function handleButtonPressStatus(): void {
    ///função para filtrar status

    throw new Error("Function not implemented.");
  }

  function handleButtonPressPartner(): void {
    ///função para filtrar Parceiros

    throw new Error("Function not implemented.");
  }

  return (
    <View style={styles.Container}>
      <Text style={{ fontSize: 24 }}>
        Bem vindo,
        <Text style={{ fontWeight: "bold" }}> Fulano</Text>
      </Text>
      <View style={styles.StatusPartner}>
        <ButtonStatusPartner
          title="Status dos Parceiros"
          onPress={handleButtonPressStatus}
        />
        <ButtonStatusPartner
          title="Parceiros"
          onPress={handleButtonPressPartner}
        />
      </View>
      <View style={styles.Divider}></View>
      <ScrollView>
        <ButtonCards
          title={"Em Prospecção"}
          subtitle={"23 parceiros em Prospecção"}
          onPress={handleButtonPressStatus}
        />
        <ButtonCards
          title={"Em Prospecção"}
          subtitle={"23 parceiros em Prospecção"}
          onPress={handleButtonPressStatus}
        />
        <ButtonCards
          title={"Em Prospecção"}
          subtitle={"23 parceiros em Prospecção"}
          onPress={handleButtonPressStatus}
        />
        <ButtonCards
          title={"Em Prospecção"}
          subtitle={"23 parceiros em Prospecção"}
          onPress={handleButtonPressStatus}
        />
        <ButtonCards
          title={"Em Prospecção"}
          subtitle={"23 parceiros em Prospecção"}
          onPress={handleButtonPressStatus}
        />
        <ButtonCards
          title={"Em Prospecção"}
          subtitle={"23 parceiros em Prospecção"}
          onPress={handleButtonPressStatus}
        />
        <ButtonCards
          title={"Em Prospecção"}
          subtitle={"23 parceiros em Prospecção"}
          onPress={handleButtonPressStatus}
        />
      </ScrollView>
    </View>
  );
};
