import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import styles from "./styled.tsx";

import CardStatus from '../../components/CardStatus.tsx'
import CardPartner from '../../components/CardPartner.tsx'


export default () => {
  const [buttonPressed, setButtonPressed] = useState<'status' | 'partner'>('status');
  const [pressedStatus, setPressedStatus] = useState(true);
  const [pressedPartner, setPressedPartner] = useState(false);


  function handleButtonPressStatus(): void {
    setPressedStatus(!pressedStatus);
    setButtonPressed('status');

    // desativa o botão "Parceiros/Membros" se estiver ativado
    if (pressedPartner) {
      setPressedPartner(false);
    }
  }

  function handleButtonPressPartner(): void {
    //função para filtrar Parceiros
    setPressedPartner(!pressedPartner);
    setButtonPressed('partner')

    //desativa o botão "Status dos parceiros" se estiver ativado
    if (pressedStatus) {
      setPressedStatus(false);
    }
  }

  return (
    <View style={styles.Container}>
      <Text style={{ fontSize: 24, marginTop: 64 }}>
        Bem vindo,
        <Text style={{ fontWeight: "bold" }}> Fulano</Text>
      </Text>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={
            [
              styles.Button,
              {
                backgroundColor: pressedStatus ? "#4C825C" : "transparent",
                borderWidth: pressedStatus ? 0 : 1,
              },
            ]
          }
          onPress={handleButtonPressStatus}
        >
          <Text style={[
            styles.buttonText,
            {
              color: pressedStatus ? "#f8f8f8" : "#00688C",
              fontWeight: pressedStatus ? "bold" : "normal",
            },
          ]}>Status dos Parceiros</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={
            [
              styles.Button,
              {
                backgroundColor: pressedPartner ? "#4C825C" : "transparent",
                borderWidth: pressedPartner ? 0 : 1,
              },
            ]
          }
          onPress={handleButtonPressPartner}
        >
          <Text
            style={[
              styles.buttonText,
              {
                color: pressedPartner ? "#f8f8f8" : "#00688C",
                fontWeight: pressedPartner ? "bold" : "normal",
              },
            ]}
          >Parceiros/Membros</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.Divider}></View>

      {buttonPressed === 'status' ? (
        <ScrollView>
          <View>
            <CardStatus
              status={"Em Prospecção"}
              totalPartners={"23"}
            />
            <CardStatus
            status={"Primeiro contato feito"}
            totalPartners={"23"}
          />

          <CardStatus
            status={"Primeira reunião marcada/realizada"}
            totalPartners={"23"}
          />

          <CardStatus
            status={"Documentação enviada/em análise (parceiro)"}
            totalPartners={"23"}
          />

          <CardStatus
            status={"Documentação devolvida (Em análise Academy)"}
            totalPartners={"23"}
          />

          <CardStatus
            status={"Documentação devolvida (Em análise legal)"}
            totalPartners={"23"}
          />

          <CardStatus
            status={"Documentação análisada devolvida (Parceiro)"}
            totalPartners={"23"}
          />

          <CardStatus
            status={"Em preparação de Executive Sumary (Academy)"}
            totalPartners={"23"}
          />

          <CardStatus
            status={"ES em análise (Legal)"}
            totalPartners={"23"}
          />

          <CardStatus
            status={"ES em análise (Academy Global)"}
            totalPartners={"23"}
          />

          <CardStatus
            status={"Pronto para assinatura"}
            totalPartners={"23"}
          />

          <CardStatus
            status={"Parceria Firmada"}
            totalPartners={"23"}
          />
          </View>
        </ScrollView>
      ) : (
        <ScrollView>
          <View>
            <CardPartner
              partnerOrMember={"parceiros"}
              totalPartners={"23"}
            />
             <CardPartner
              partnerOrMember={"membros"}
              totalPartners={"23"}
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
};
