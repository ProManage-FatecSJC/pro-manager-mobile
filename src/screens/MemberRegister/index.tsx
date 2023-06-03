import React, { useEffect, useState } from "react";
import styles from "./styles.ts";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { DefaultButton } from '../../components/DefaultButton';
import axios from "axios";
import CEPSignIn from "../../components/SignInCEP.tsx";
import { SessionController } from "../../session/SessionController.ts";
import api from "../../api/api.ts";
import { URI } from "../../api/uri.ts";
import { DefaultInput, MaskedInput } from "../../components";
import { Select, HStack, Spinner } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "phosphor-react-native";

const sessionController = new SessionController();

interface Location {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  siafi: string;
  uf: string;
}

async function searchCep(cep: string): Promise<Location | null | undefined> {
  try {
    const url = `http://www.viacep.com.br/ws/${cep}/json/`;
    const response = await axios.get(url);
    if (response.status === 200) {
      const endereco: Location = response.data;
      return endereco;
    } else if (response.status === 400) {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

export function MemberRegister({ navigation, route }: any) {
  const { idProp } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState(idProp);
  const [memberName, setMemberName] = useState("");
  const [memberFantasy, setMemberFantasy] = useState("");
  const [memberCNPJ, setCNPJ] = useState("");
  const [memberPhone, setMemberPhone] = useState("");

  const [name, setName] = useState();
  const [count, setCount] = useState(0);

  const [cep, setCEP] = useState("");
  const [resCep, setResCep] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [street, setStreet] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [selectedState, setSelectedState] = useState("");


  const [editableAdress, setEditableAdress] = useState(true);

  let member = {
    name: memberName,
    trade_name: memberFantasy,
    CNPJ: memberCNPJ,
    telephone: memberPhone,
    partner: {
      id: id
    },
    address: {
      CEP: resCep,
      street: street,
      number: number,
      complement: complement,
      city: city,
      state: selectedState,
    }
  };


  const handleNewMember = async () => {
    const token = await sessionController.getToken();
    api.post(URI.MEMBERS, member, {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          navigation.goBack();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  async function handleGetName() {
    setIsLoading(true);
    const token = await sessionController.getToken();
    try {
      await api
        .get(URI.PARTNER + `/${id}`, {
          headers: { Authorization: token },
        })
        .then((response) => {
          setName(response.data.name);
          console.log(name);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (count < 10) {
      handleGetName();
      console.log(count);
      setCount(count + 1);
    }
  }, [name]);

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleSearchCep(): Promise<void> {
    const endereco = await searchCep(cep);
    if (endereco) {
      setResCep(endereco.cep);
      setStreet(endereco.logradouro);
      setDistrict(endereco.bairro);
      setCity(endereco.localidade);
      setSelectedState(endereco.uf);

      if (endereco.logradouro != null) {
        setEditableAdress(false);
      } else {
        setEditableAdress(true);
      }
    }
  }

  const handleStateChange = (selectedOption: string) => {
    setSelectedState(selectedOption);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerTitleWrapper}>
        <TouchableOpacity onPress={handleGoBack}>
          <ArrowLeft size={30} color="#f8f8f8" />
        </TouchableOpacity> 
        <Text style={styles.headerTitleTextPartner}>
          Cadastrar membros |
          {" "}
          {isLoading ? (
            <HStack space={2} alignItems="center">
              <Spinner size="sm" color="#f8f8f8" />
            </HStack>
          ):(
            <Text>
              {name}
            </Text>
          )}
         
        </Text>
      </View>

      <View style={styles.divider}></View>

      <ScrollView>
        <View style={styles.formContentWrapper}>
          <Text>Nome</Text>
          <DefaultInput placeholder={"Nome do membro"} onChangeText={setMemberName} />
        </View>

        <View style={styles.formContentWrapper}>
          <Text>Nome Fantasia</Text>
          <DefaultInput placeholder={"Nome fantasia"} onChangeText={setMemberFantasy} />
        </View>

        <View style={styles.formContentWrapper}>
          <Text>CNPJ</Text>
          <MaskedInput
            title="XX.XXX.XXX/XXXX-XX"
            mask="cnpj"
            inputMaskChange={(text: string) => setCNPJ(text)}
            value={memberCNPJ}
            maxLength={18}
          />
        </View>

        <View style={styles.formContentWrapper}>
          <Text>Telefone</Text>
          <MaskedInput
            title="(XX) XXXXX-XXXX"
            mask="phone"
            inputMaskChange={(text: string) => setMemberPhone(text)}
            value={memberPhone}
            maxLength={14}
          />
        </View>

        <View style={styles.formContentWrapper}>
          <Text>CEP</Text>
          <MaskedInput
            title="XXXXX-XXX"
            mask="cep"
            inputMaskChange={(text: string) => setCEP(text)}
            value={cep}
            onEndEditing={handleSearchCep}
            maxLength={9}
          />
        </View>

        <View style={styles.formContentWrapper}>
          <Text>Logradouro</Text>
          <DefaultInput
            placeholder={street}
            onChangeText={setStreet}
            value={street}
            editable={editableAdress}
          />
        </View>

        <View style={styles.formContentWrapper}>
          <Text>Número</Text>
          <DefaultInput placeholder={"Número do logradouro"} onChangeText={setNumber} />
        </View>

        <View style={styles.formContentWrapper}>
          <Text>Complemento</Text>
          <DefaultInput placeholder={"Complemento do logradouro"} onChangeText={setComplement} />
        </View>

        <View style={styles.formContentWrapper}>
          <Text>Bairro</Text>
          <DefaultInput
            placeholder={district}
            onChangeText={setDistrict}
            value={district}
            editable={editableAdress}
          />
        </View>

        <View style={styles.formContentWrapper}>
          <Text>Cidade</Text>
          <DefaultInput
            placeholder={city}
            onChangeText={setCity}
            value={city}
            editable={editableAdress}
          />
        </View>

        <View style={styles.formContentWrapper}>
          <Text>Estado</Text>
          <Select
            selectedValue={selectedState}
            minWidth={200}
            padding={2}
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

      </ScrollView>

      <View style={styles.buttonSectionWrapper}>
        <View style={styles.buttonWrapper}>
          <DefaultButton
            title={"Salvar"}
            bg={'transparent'}
            textColor={'#4994CE'}
            borderColor={'#4994CE'}
            borderWidth={1.5}
            variant={'outline'}
            _pressed={{
              bg: "#f0f0f0",
            }}
            onPress={handleNewMember}
          />
        </View>

        <View style={styles.buttonWrapper}>
          <DefaultButton
            title={"Cancelar"}
            bg={'transparent'}
            textColor={'#DA4625'}
            borderColor={'#DA4625'}
            borderWidth={1.5}
            variant={'outline'}
            _pressed={{
              bg: "#f0f0f0",
            }}
            onPress={() => {
              navigation.goBack({
                idProp: id,
              });
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
