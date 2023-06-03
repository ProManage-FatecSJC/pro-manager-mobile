import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import api from "../../api/api.ts";
import { URI } from "../../api/uri.ts";
import { SessionController } from "../../session/SessionController.ts";

import {
  DefaultCardPartner
} from '../../components'

import { SignOut } from "phosphor-react-native";
import { 
  HStack,
  Heading,
  Spinner
} from "native-base";

import { styles } from "./styles.ts";


export function Home({ navigation }: any) {
  const [isLoading, setIsLoading] = useState(false);
  const [buttonPressed, setButtonPressed] = useState<'status' | 'partner'>('status');
  const [pressedStatus, setPressedStatus] = useState(true);
  const [pressedPartner, setPressedPartner] = useState(false);
  const [userName, setUserName] = useState('')
  const [count, setCount] = useState(0)
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
    if (!pressedStatus) {
      setPressedStatus(true);
      setButtonPressed('status');

      if (pressedPartner) {
        setPressedPartner(false);
      }
    }
  }

  function handleButtonPressPartner(): void {
    if (!pressedPartner) {
      setPressedPartner(true);
      setButtonPressed('partner');

      if (pressedStatus) {
        setPressedStatus(false);
      }
    }
  }

  async function handlePartners() {
    setIsLoading(true)
    const token = await sessionController.getToken()
    try {
      await api.get(URI.PARTNER, {
        headers: {
          Authorization: token
        }
      }).then(response => {
        setPartner(response.data)
        setPartnerCount(partner.length)
        setPartnersEmProspec(partner.filter((x: any) => x.status == 0).length);
        setPartnersPrimeiroContato(partner.filter((x: any) => x.status == 1).length);
        setPartnersPrimeiraReuniao(partner.filter((x: any) => x.status == 2).length);
        setPartners4(partner.filter((x: any) => x.status == 3).length);
        setPartners5(partner.filter((x: any) => x.status == 4).length);
        setPartners6(partner.filter((x: any) => x.status == 5).length);
        setPartners7(partner.filter((x: any) => x.status == 6).length);
        setPartners8(partner.filter((x: any) => x.status == 7).length);
        setPartners9(partner.filter((x: any) => x.status == 8).length);
        setPartners10(partner.filter((x: any) => x.status == 9).length);
        setPartners11(partner.filter((x: any) => x.status == 10).length);
        setPartners12(partner.filter((x: any) => x.status == 11).length);
        setIsLoading(false)
      })
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  async function handleMembers() {
    setIsLoading(true)
    const token = await sessionController.getToken()
    try {
      await api.get(URI.MEMBERS, {
        headers: {
          Authorization: token
        }
      }).then(response => {
        setMember(response.data)
        setMemberCount(member.length)
        setIsLoading(false)
      })
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  const getName = async () => {
    let token = await sessionController.getName() as string
    setUserName(token)
  }

  useEffect(() => {
    if (count < 10) {
      handlePartners()
      handleMembers()
      setCount(count + 1)
    }
  }, [partner])
  useEffect(() => {
    getName()
  }, [])

  async function handleLogoffClick() {
    await sessionController.clearSession()
    navigation.navigate('SignIn')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContentWrapper}>
        <Text style={{ fontSize: 24 }}>
          Bem vindo,{" "}
          {isLoading ? (
            <HStack justifyContent="center" alignItems="center">
              <Spinner color="#4994CE" />
            </HStack>
          ) : (
            <Text style={{ fontWeight: "700"}}>{userName}</Text>
          )}
        </Text>
        <TouchableOpacity onPress={handleLogoffClick}>
          <SignOut size={32} />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={[
            styles.buttonOption,
            {
              backgroundColor: pressedStatus ? "#4C825C" : "transparent",
              borderWidth: pressedStatus ? 0 : 1,
            },
          ]}
          onPress={handleButtonPressStatus}>
          <Text
            style={[
              styles.buttonText,
              {
                color: pressedStatus ? "#f8f8f8" : "#00688C",
                fontWeight: pressedStatus ? "bold" : "normal",
              },
            ]}>
            Status dos Parceiros
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.buttonOption,
            {
              backgroundColor: pressedPartner ? "#4C825C" : "transparent",
              borderWidth: pressedPartner ? 0 : 1,
            },
          ]}
          onPress={handleButtonPressPartner}>
          <Text
            style={[
              styles.buttonText,
              {
                color: pressedPartner ? "#f8f8f8" : "#00688C",
                fontWeight: pressedPartner ? "bold" : "normal",
              },
            ]}>
            Parceiros
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divider}></View>

      {buttonPressed === "status" ? (
        <ScrollView>
          {isLoading ? (
            <HStack space={2} justifyContent="center" alignItems="center">
              <Heading color="#4994CE" fontSize="md">
                Carregando
              </Heading>
              <Spinner color="#4994CE" />
            </HStack>
          ) : (
            <View>
              <DefaultCardPartner
                statusTitle={"Status |"}
                title={"Em Prospecção"}
                totalPartners={partnersEmProspec.toString()}
                registeredArchived={"cadastrados"}
                onPress={() => {
                  navigation.navigate("DetailStatus", {
                    statusProp: partner.filter((x: any) => x.status == 0),
                  });
                }}
              />
              <DefaultCardPartner
                statusTitle={"Status |"}
                title={"Primeiro contato feito"}
                totalPartners={partnersPrimeiroContato.toString()}
                registeredArchived={"cadastrados"}
                onPress={() => {
                  navigation.navigate("DetailStatus", {
                    statusProp: partner.filter((x: any) => x.status == 1),
                  });
                }}
              />
              <DefaultCardPartner
                statusTitle={"Status |"}
                title={"Primeira reunião marcada/realizada"}
                totalPartners={partnersPrimeiraReuniao.toString()}
                registeredArchived={"cadastrados"}
                onPress={() => {
                  navigation.navigate("DetailStatus", {
                    statusProp: partner.filter((x: any) => x.status == 2),
                  });
                }}
              />
              <DefaultCardPartner
                statusTitle={"Status |"}
                title={"Documentação enviada/em análise (parceiro)"}
                totalPartners={partners4.toString()}
                registeredArchived={"cadastrados"}
                onPress={() => {
                  navigation.navigate("DetailStatus", {
                    statusProp: partner.filter((x: any) => x.status == 3),
                  });
                }}
              />
              <DefaultCardPartner
                statusTitle={"Status |"}
                title={"Documentação devolvida (Em análise Academy)"}
                totalPartners={partners5.toString()}
                registeredArchived={"cadastrados"}
                onPress={() => {
                  navigation.navigate("DetailStatus", {
                    statusProp: partner.filter((x: any) => x.status == 4),
                  });
                }}
              />
              <DefaultCardPartner
                statusTitle={"Status |"}
                title={"Documentação devolvida (Em análise legal)"}
                totalPartners={partners6.toString()}
                registeredArchived={"cadastrados"}
                onPress={() => {
                  navigation.navigate("DetailStatus", {
                    statusProp: partner.filter((x: any) => x.status == 5),
                  });
                }}
              />
              <DefaultCardPartner
                statusTitle={"Status |"}
                title={"Documentação análisada devolvida (Parceiro)"}
                totalPartners={partners7.toString()}
                registeredArchived={"cadastrados"}
                onPress={() => {
                  navigation.navigate("DetailStatus", {
                    statusProp: partner.filter((x: any) => x.status == 6),
                  });
                }}
              />
              <DefaultCardPartner
                statusTitle={"Status |"}
                title={"Em preparação de Executive Sumary (Academy)"}
                totalPartners={partners8.toString()}
                registeredArchived={"cadastrados"}
                onPress={() => {
                  navigation.navigate("DetailStatus", {
                    statusProp: partner.filter((x: any) => x.status == 7),
                  });
                }}
              />
              <DefaultCardPartner
                statusTitle={"Status |"}
                title={"ES em análise (Legal)"}
                totalPartners={partners9.toString()}
                registeredArchived={"cadastrados"}
                onPress={() => {
                  navigation.navigate("DetailStatus", {
                    statusProp: partner.filter((x: any) => x.status == 8),
                  });
                }}
              />
              <DefaultCardPartner
                statusTitle={"Status |"}
                title={"ES em análise (Academy Global)"}
                totalPartners={partners10.toString()}
                registeredArchived={"cadastrados"}
                onPress={() => {
                  navigation.navigate("DetailStatus", {
                    statusProp: partner.filter((x: any) => x.status == 9),
                  });
                }}
              />
              <DefaultCardPartner
                statusTitle={"Status |"}
                title={"Pronto para assinatura"}
                totalPartners={partners11.toString()}
                registeredArchived={"cadastrados"}
                onPress={() => {
                  navigation.navigate("DetailStatus", {
                    statusProp: partner.filter((x: any) => x.status == 10),
                  });
                }}
              />
              <DefaultCardPartner
                statusTitle={"Status |"}
                title={"Parceria Firmada"}
                totalPartners={partners12.toString()}
                registeredArchived={"cadastrados"}
                onPress={() => {
                  navigation.navigate("DetailStatus", {
                    statusProp: partner.filter((x: any) => x.status == 11),
                  });
                }}
              />
            </View>
          )}
        </ScrollView>
      ) : (
        <ScrollView>
          <View>
            <DefaultCardPartner
              title={"Total de parceiros cadastrados"}
              totalPartners={partner.filter((x: any) => x.isArchived != true).length}
              registeredArchived="cadastrados"
              onPress={() => {
                navigation.navigate("DetailTotal", {
                  statusProp: partner.filter((x: any) => x.isArchived != true),
                });
              }}
            />

            <DefaultCardPartner
              title={"Total de parceiros arquivados"}
              totalPartners={
                partner.filter((x: any) => x.isArchived == true).length
              }
              registeredArchived="arquivados"
              onPress={() => {
                navigation.navigate("ArquivePartners");
              }}
            />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};