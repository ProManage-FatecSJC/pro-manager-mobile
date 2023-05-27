import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Modal,
  Pressable
} from "react-native";

import api from "../../api/api.ts";
import { URI } from "../../api/uri.ts";
import { SessionController } from "../../session/SessionController.ts";

import {
  DefaultButton,
  DefaultInput,
  MaskedInput
} from '../../components'

import {
  ChevronUpIcon,
  Select
} from "native-base";

import styles from "./styles.ts";

export function PartnerRegister({ navigation }: any) {
  const [service, setService] = useState('');
  const [partnerName, setPartnerName] = useState('');
  const [partnerPrivacy, setPartnerPrivacy] = useState(0);
  const [partnerType, setPartnerType] = useState(0);
  const [partnerAmount, setPartnerAmount] = useState('');
  const [partnerStatus, setPartnerStatus] = useState(0);
  const [partnerContact, setPartnerContact] = useState('');
  const [partnerResponsible, setPartnerResponsible] = useState('');
  const [partnerState, setPartnerState] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const sessionController = new SessionController()

  let partner = {
    name: partnerName,
    privacy: partnerPrivacy,
    type: partnerType,
    membersQuantity: partnerAmount,
    status: partnerStatus,
    telephone: partnerContact,
    intermediateResponsible: partnerResponsible,
    state: partnerState
  }

  const handleNewPartner = async () => {
    const token = await sessionController.getToken()
    console.log(partner)
    await api.
      post(URI.PARTNER, partner, {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        if (response.status == 200) {
          navigation.navigate('Home')
        }
      })
      .catch(error => {
        setModalVisible(true);
        console.log(error);
      })
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Dados de cadastro incompletos ou incorretos!</Text>
            <Pressable
              style={[styles.button]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Adicionar um parceiro</Text>
        <Text style={styles.subtitle}>Coloque os dados do seu parceiro</Text>
      </View>

      <View style={styles.divider}></View>
      <ScrollView>

        <View style={styles.formContentWrapper}>
          <Text>Nome do parceiro</Text>
          <DefaultInput placeholder="Nome do parceiro" value={partnerName} onChangeText={setPartnerName} />
        </View>

        <View style={styles.formContentWrapper}>
          <Text>Privacidade do parceiro</Text>
          <Select
          selectedValue={service}
          minWidth="200"
          padding={3.5}
          accessibilityLabel="Selecione a privacidade do parceiro"
          placeholder="Selecione a privacidade do parceiro"
          borderColor={'#E2E8F0'}
          _selectedItem={{
            bg: "#eaeaea",
          }}
          dropdownOpenIcon={
            <ChevronUpIcon name="openicon" size={6} marginRight={3} />
          }
          mt={1} onValueChange={itemValue => setService(itemValue)}
        >
          <Select.Item label="Privado" value="private" />
          <Select.Item label="Público" value="public" />
        </Select>
        </View>

        <View style={styles.formContentWrapper}>
          <Text>Tipo do parceiro</Text>
          <Select
          selectedValue={service}
          minWidth="200"
          padding={3.5}
          accessibilityLabel="Selecione o tipo do parceiro"
          placeholder="Selecione o tipo do parceiro"
          borderColor={'#E2E8F0'}
          _selectedItem={{
            bg: "#eaeaea",
          }}
          dropdownOpenIcon={
            <ChevronUpIcon name="openicon" size={6} marginRight={3} />
          }
          mt={1} onValueChange={itemValue => setService(itemValue)}
        >
          <Select.Item label="Único" value="unic" />
          <Select.Item label="Múltiplo" value="multiple" />
        </Select>
        </View>

        <View style={styles.formContentWrapper}>
          <Text>Quantidade de membros</Text>
          <DefaultInput placeholder="Quantidade de membros" value={partnerAmount} onChangeText={setPartnerAmount} keyboardType="numeric" />
        </View>

        <View style={styles.formContentWrapper}>
          <Text>Status do parceiro</Text>
          <Select
          selectedValue={service}
          minWidth="200"
          padding={3.5}
          accessibilityLabel="Selecione o status do parceiro"
          placeholder="Selecione o status do parceiro"
          borderColor={'#E2E8F0'}
          _selectedItem={{
            bg: "#eaeaea",
          }}
          dropdownOpenIcon={
            <ChevronUpIcon name="openicon" size={6} marginRight={3} />
          }
          mt={1} onValueChange={itemValue => setService(itemValue)}
        >
          <Select.Item label="Em Prospecção" value="" />
          <Select.Item label="Primeiro Contato feito" value="" />
          <Select.Item label="Primeira Reunião marcada/realizada" value="" />
          <Select.Item label="Documentação enviada/em analise(Parceiro)" value="" />
          <Select.Item label="Documetação devolvida (Em análise Academy)" value="" />
          <Select.Item label="Documetação devolvida (Em análise Legal)" value="" />
          <Select.Item label="Documetação analisada devolvida (Parceiro)" value="" />
          <Select.Item label="Em preparação de Executive Sumary (Academy)" value="" />
          <Select.Item label="ES em Análise (Legal)" value="" />
          <Select.Item label="ES em Análise (Academy Global)" value="" />
          <Select.Item label="Pronto para Assinatura" value="" />
          <Select.Item label="Parceria Firmada" value="" />
        </Select>

        </View>

        <View style={styles.formContentWrapper}>

        </View>

        <View style={styles.formContentWrapper}>

        </View>

        <View style={styles.formContentWrapper}>

        </View>


        <MaskedInput
          title="(99) 99999-9999"
          mask="phone"
          inputMaskChange={(text: string) => setPartnerContact(text)}
          value={partnerContact} maxLength={14}
        />

        

        <Select
          selectedValue={service}
          minWidth="200"
          padding={3.5}
          accessibilityLabel="Choose Service"
          placeholder="Choose Service"
          borderColor={'#E2E8F0'}
          _selectedItem={{
            bg: "#eaeaea",
          }}
          dropdownOpenIcon={
            <ChevronUpIcon name="openicon" size={6} marginRight={3} />
          }
          mt={1} onValueChange={itemValue => setService(itemValue)}
        >
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>

        <Select
          selectedValue={service}
          minWidth="200"
          padding={3.5}
          accessibilityLabel="Choose Service"
          placeholder="Choose Service"
          borderColor={'#E2E8F0'}
          _selectedItem={{
            bg: "#eaeaea",
          }}
          dropdownOpenIcon={
            <ChevronUpIcon name="openicon" size={6} marginRight={3} />
          }
          mt={1} onValueChange={itemValue => setService(itemValue)}
        >
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>

        <Select
          selectedValue={service}
          minWidth="200"
          padding={3.5}
          accessibilityLabel="Choose Service"
          placeholder="Choose Service"
          borderColor={'#E2E8F0'}
          _selectedItem={{
            bg: "#eaeaea",
          }}
          dropdownOpenIcon={
            <ChevronUpIcon name="openicon" size={6} marginRight={3} />
          }
          mt={1} onValueChange={itemValue => setService(itemValue)}
        >
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>

        <Select
          selectedValue={service}
          minWidth="200"
          padding={3.5}
          accessibilityLabel="Choose Service"
          placeholder="Choose Service"
          borderColor={'#E2E8F0'}
          _selectedItem={{
            bg: "#eaeaea",
          }}
          dropdownOpenIcon={
            <ChevronUpIcon name="openicon" size={6} marginRight={3} />
          }
          mt={1} onValueChange={itemValue => setService(itemValue)}
        >
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>

        <DefaultButton
          title={"Adicionar"}
          onPress={() => {
            handleNewPartner()
          }}
        />
      </ScrollView>
    </View>
  );
};
