import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import styles from "./styled.tsx";

import CardStatus from '../../components/CardStatus.tsx'
import CardPartner from '../../components/CardPartner.tsx'
import { SessionController } from "../../session/SessionController.ts";
import api from "../../api/api.ts";
import { URI } from "../../api/uri.ts";


export default () => {
  const [buttonPressed, setButtonPressed] = useState<'status' | 'partner'>('status');
  const [pressedStatus, setPressedStatus] = useState(true);
  const [pressedPartner, setPressedPartner] = useState(false);
  const [userName, setUserName] = useState('')

  const [partner, setPartner] = useState([])
  const [partnerCount, setPartnerCount] = useState(0)
  const [partnersEmProspec, setPartnersEmProspec] = useState(0)
  const [partnersPrimeiroContato, setPartnersPrimeiroContato] = useState(0)
  const [partnersPrimeiraReuniao, setPartnersPrimeiraReuniao] = useState(0)
  const [partners4, setPartners4] = useState(0)
  const [partners5, setPartners5] = useState(0)
  const [partners6, setPartners6] = useState(0)
  const [partners7, setPartners7] = useState(0)
  const [partners8, setPartners8] = useState(0)
  const [partners9, setPartners9] = useState(0)
  const [partners10, setPartners10] = useState(0)
  const [partners11, setPartners11] = useState(0)
  const [partners12, setPartners12] = useState(0)

  const [member, setMember] = useState([])
  const [memberCount, setMemberCount] = useState(0)

  const sessionController = new SessionController()



  function handleButtonPressStatus(): void {
    setPressedStatus(!pressedStatus);
    setButtonPressed('status');

    // desativa o botão "Parceiros/Membros" se estiver ativado
    if (pressedPartner) {
      setPressedPartner(false);
    }
  }

  async function handlePartners() {
    const token = await sessionController.getToken()

    try {
      await api.get(URI.PARTNER, {
        headers: {
          Authorization: token
        }
      }).then(response => {
        setPartner(response.data)
        setPartnerCount(partner.length)
        setPartnersEmProspec(partner.filter((x: any) => x.status == 0).length)
        setPartnersPrimeiroContato(partner.filter((x: any) => x.status == 1).length)
        setPartnersPrimeiraReuniao(partner.filter((x: any) => x.status == 2).length)
        setPartners4(partner.filter((x: any) => x.status == 3).length)
        setPartners5(partner.filter((x: any) => x.status == 4).length)
        setPartners6(partner.filter((x: any) => x.status == 5).length)
        setPartners7(partner.filter((x: any) => x.status == 6).length)
        setPartners8(partner.filter((x: any) => x.status == 7).length)
        setPartners9(partner.filter((x: any) => x.status == 8).length)
        setPartners10(partner.filter((x: any) => x.status == 9).length)
        setPartners11(partner.filter((x: any) => x.status == 10).length)
        setPartners12(partner.filter((x: any) => x.status == 11).length)
      })
    } catch (error) {
      console.log(error)
    }
  }

  async function handleMembers() {
    const token = await sessionController.getToken()

    try {
      await api.get(URI.MEMBERS, {
        headers: {
          Authorization: token
        }
      }).then(response => {
        setMember(response.data)
        setMemberCount(member.length)
      })
    } catch (error) {
      console.log(error)
    }
  }

  const getName = async () => {
    let token = await sessionController.getName() as string

    setUserName(token)
  }

  useEffect(() => {
    handlePartners()
    handleMembers()
  })

  useEffect(() => {
    getName()
  }, [])

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
        <Text style={{ fontWeight: "bold" }}> {userName}</Text>
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
              totalPartners={partnersEmProspec.toString()}
            />
            <CardStatus
              status={"Primeiro contato feito"}
              totalPartners={partnersPrimeiroContato.toString()}
            />

            <CardStatus
              status={"Primeira reunião marcada/realizada"}
              totalPartners={partnersPrimeiraReuniao.toString()}
            />

            <CardStatus
              status={"Documentação enviada/em análise (parceiro)"}
              totalPartners={partners4.toString()}
            />

            <CardStatus
              status={"Documentação devolvida (Em análise Academy)"}
              totalPartners={partners5.toString()}
            />

            <CardStatus
              status={"Documentação devolvida (Em análise legal)"}
              totalPartners={partners6.toString()}
            />

            <CardStatus
              status={"Documentação análisada devolvida (Parceiro)"}
              totalPartners={partners7.toString()}
            />

            <CardStatus
              status={"Em preparação de Executive Sumary (Academy)"}
              totalPartners={partners8.toString()}
            />

            <CardStatus
              status={"ES em análise (Legal)"}
              totalPartners={partners9.toString()}
            />

            <CardStatus
              status={"ES em análise (Academy Global)"}
              totalPartners={partners10.toString()}
            />

            <CardStatus
              status={"Pronto para assinatura"}
              totalPartners={partners11.toString()}
            />

            <CardStatus
              status={"Parceria Firmada"}
              totalPartners={partners12.toString()}
            />
          </View>
        </ScrollView>
      ) : (
        <ScrollView>
          <View>
            <CardPartner
              partnerOrMember={"parceiros"}
              totalPartners={partnerCount.toString()}
            />
            <CardPartner
              partnerOrMember={"membros"}
              totalPartners={memberCount.toString()}
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
};

