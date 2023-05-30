import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Modal,
  Pressable,
  Alert
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
import { UserPlus } from "phosphor-react-native";

import styles from "./styles.ts";

export function PartnerRegister({ navigation }: any) {
  const [partnerName, setPartnerName] = useState('')
  const [partnerAmount, setPartnerAmount] = useState('');
  const [partnerResponsible, setPartnerResponsible] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedType, setSelectedType] = useState(0);
  const [selectedStatus, setSelectedStatus] = useState(0);
  const [selectedPrivacy, setSelectedPrivacy] = useState(0);
  const [partnerContact, setPartnerContact] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sessionController = new SessionController()

  let partner = {
    name: partnerName,
    privacy: selectedPrivacy,
    type: selectedType,
    membersQuantity: parseInt(partnerAmount),
    status: selectedStatus,
    telephone: partnerContact,
    intermediateResponsible: partnerResponsible,
    state: selectedState,
  }

  const handleNewPartner = async () => {
    const token = await sessionController.getToken()
    console.log(partner)
    setIsLoading(true)
    await api.
      post(URI.PARTNER, partner, {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        
        if (response.status == 200) {
          Alert.alert('Cadastro de parceiro', 'Parceiro registrado com sucesso.')
          navigation.goBack()
        }
      })
      .catch(error => {
        setIsLoading(false)
        setModalVisible(true);
        console.log(error);
      })
  }

  const handleStateChange = (selectedOption: string) => {
    setSelectedState(selectedOption);
  };

  const handleTypeChange = (selectedOption: number) => {
    setSelectedType(selectedOption);
  };

  const handleStatusChange = (selectedOption: number) => {
    setSelectedStatus(selectedOption);
  };

  const handlePrivacyChange = (selectedOption: number) => {
    setSelectedPrivacy(selectedOption);
  };
  
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
        <View style={styles.titleIcon}>
        <UserPlus size={30} weight="fill" />
        <Text style={styles.title}>
          Adicionar um parceiro
        </Text>
        </View>
        <Text style={styles.subtitle}>Coloque os dados do seu parceiro</Text>
      </View>

      <View style={styles.divider}></View>

      <ScrollView >
        <View style={styles.formContentWrapper}>
          <Text>Nome do parceiro</Text>
          <DefaultInput placeholder="Nome do parceiro" onChangeText={setPartnerName}/>
        </View>

        <View style={styles.formContentWrapper}>
          <Text>Privacidade do parceiro</Text>
          <Select
          selectedValue={selectedPrivacy}
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
          mt={1} onValueChange={handlePrivacyChange}
        >
          <Select.Item label="Privado" value={0} />
          <Select.Item label="Público" value={1} />
        </Select>
        </View>

        <View style={styles.formContentWrapper}>
          <Text>Tipo do parceiro</Text>
          <Select
          selectedValue={selectedType}
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
          mt={1} onValueChange={handleTypeChange}
        >
          <Select.Item label="Único" value={0} />
          <Select.Item label="Múltiplo" value={1} />
        </Select>
        </View>

        <View style={styles.formContentWrapper}>
          <Text>Quantidade de membros</Text>
          <DefaultInput placeholder="Quantidade de membros" keyboardType="numeric" onChangeText={setPartnerAmount}/>
        </View>

        <View style={styles.formContentWrapper}>
          <Text>Status do parceiro</Text>
          <Select
          selectedValue={selectedStatus}
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
          mt={1} onValueChange={handleStatusChange}
        >
            <Select.Item label="Em Prospecção" value={0} />
            <Select.Item label="Primeiro Contato feito" value={1} />
            <Select.Item label="Primeira Reunião marcada/realizada" value={2} />
            <Select.Item label="Documentação enviada/em analise(Parceiro)" value={3} />
            <Select.Item label="Documetação devolvida (Em análise Academy)" value={4} />
            <Select.Item label="Documetação devolvida (Em análise Legal)" value={5} />
            <Select.Item label="Documetação analisada devolvida (Parceiro)" value={6} />
            <Select.Item label="Em preparação de Executive Sumary (Academy)" value={7} />
            <Select.Item label="ES em Análise (Legal)" value={8} />
            <Select.Item label="ES em Análise (Academy Global)" value={9} />
            <Select.Item label="Pronto para Assinatura" value={10} />
            <Select.Item label="Parceria Firmada" value={11} />
          </Select>
        </View>

        <View style={styles.formContentWrapper}>
            <Text>Número de contato</Text>
            <MaskedInput
              title="(99) 99999-9999"
              mask="phone"
              inputMaskChange={(text: string) => setPartnerContact(text)}
              value={partnerContact} 
              maxLength={14}
            />
        </View>

        <View style={styles.formContentWrapper}>
            <Text>Respnsável</Text>
            <DefaultInput 
            placeholder="Responsável do parceiro"
            onChangeText={setPartnerResponsible}
            />
        </View>

        <View style={styles.formContentWrapper}>
            <Text>Estado</Text>
            <Select
        selectedValue={selectedState}
        minWidth={200}
        padding={3.5}
        accessibilityLabel="Selecione o estado"
        placeholder="Selecione o estado"
        borderColor="#E2E8F0"
        onValueChange={handleStateChange}
      >
        <Select.Item label="Acre" value="AC" />
        <Select.Item label="Alagoas" value="AL" />
        <Select.Item label="Amapá" value="AP" />
        <Select.Item label="Amazonas" value="AM" />
        <Select.Item label="Bahia" value="BA" />
        <Select.Item label="Ceará" value="CE" />
        <Select.Item label="Distrito Federal" value="DF" />
        <Select.Item label="Espírito Santo" value="ES" />
        <Select.Item label="Goiás" value="GO" />
        <Select.Item label="Maranhão" value="MA" />
        <Select.Item label="Mato Grosso" value="MT" />
        <Select.Item label="Mato Grosso do Sul" value="MS" />
        <Select.Item label="Minas Gerais" value="MG" />
        <Select.Item label="Pará" value="PA" />
        <Select.Item label="Paraíba" value="PB" />
        <Select.Item label="Paraná" value="PR" />
        <Select.Item label="Pernambuco" value="PE" />
        <Select.Item label="Piauí" value="PI" />
        <Select.Item label="Rio de Janeiro" value="RJ" />
        <Select.Item label="Rio Grande do Norte" value="RN" />
        <Select.Item label="Rio Grande do Sul" value="RS" />
        <Select.Item label="Rondônia" value="RO" />
        <Select.Item label="Roraima" value="RR" />
        <Select.Item label="Santa Catarina" value="SC" />
        <Select.Item label="São Paulo" value="SP" />
        <Select.Item label="Sergipe" value="SE" />
        <Select.Item label="Tocantins" value="TO" />
      </Select>
        </View>

        <DefaultButton
          title={"Adicionar"}
          onPress={handleNewPartner}
          isLoading={isLoading}
        />
      </ScrollView>
    </View>
  );
};
