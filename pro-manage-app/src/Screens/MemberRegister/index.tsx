import React, { useEffect, useState } from "react";
import styles from "./styled.tsx";
import { View, Text, ScrollView } from "react-native";
import PartnerSignIn from "../../components/PartnerSignIn.tsx";
import ButtonRed from "../../components/ButtonRed.tsx";
import ButtonBlue from "../../components/ButtonBlue.tsx";
import axios from "axios";
import CEPSignIn from "../../components/SignInCEP.tsx";
import { SessionController } from "../../session/SessionController.ts";
import api from "../../api/api.ts";
import { URI } from "../../api/uri.ts";
import SignInServeral from "../../components/SignInSeveral.tsx";

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

export default ({navigation}: any) => {

  const [memberName, setMemberName] = useState("");
  const [memberFantasy, setMemberFantasy] = useState("");
  const [memberCNPJ, setCNPJ] = useState("");
  const [memberPhone, setMemberPhone] = useState("");
  const [partner, setPartner] = useState("");;
  const [responsible, setresponsible] = useState("");

  const [cep, setCEP] = useState("");
  const [resCep, setResCep] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [street, setStreet] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const [editableAdress, setEditableAdress] = useState(true);

  let member = {
    name: memberName,
    trade_name: memberFantasy,
    CNPJ: memberCNPJ,
    telephone: memberPhone,
    partner: partner,
    address: [],
    responsible: responsible,
  }

  let address = {
    cep: resCep,
    street: street,
    number: number,
    complement: complement,
    district: district,
    city: city,
    uf: uf,
  }

  const handleNewMember = async () => {
    const token = await sessionController.getToken()
    console.log(member)
    await api.
    post(URI.MEMBERS, member, {
      headers: {
        Authorization: token
      }
    })
    .then(response => {
      if (response.status === 200) {
        navigation.navigate()
      }
    }).catch(error => {
      console.log(error)
    })

  }

  const handleCancelMember = () => {
    navigation.navigate("Detail");
  };

  async function handleSearchCep(): Promise<void> {
    const endereco = await searchCep(cep);
    if (endereco) {
      setResCep(endereco.cep);
      setStreet(endereco.logradouro);
      setDistrict(endereco.bairro);
      setCity(endereco.localidade);
      setUf(endereco.uf);

      if (endereco.logradouro != null) {
        setEditableAdress(false);
      } else {
        setEditableAdress(true);
      }
    } 
    
  }

  const optionsState = [
    "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia",
    "Ceará", "Espírito Santos", "Goiás", "Maranhão", "Mato Grosso",
    "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná",
    "Pernambuco", "Piaui", "Rio de Janeiro", "Rio Grande do Norte",
    "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", 
    "São Paulo", "Sergipe", "Tocantins"]

  const handleSelect = (selectedOption: string) => {
    console.log(`Opção Selecionada: ${selectedOption}`);
  };


  return (
    <View style={styles.Container}>
      <Text style={styles.Text1}>Adicionar um Membro {}</Text>
      <Text style={styles.Text2}>Adicione um Membro ao seu Parceiro</Text>
      <View style={styles.Divider}></View>
      <ScrollView>
        <Text style={styles.Text}>Nome</Text>
        <PartnerSignIn placeholder={""} onChangeText={setMemberName} />
        <Text style={styles.Text}>Nome Fantasia</Text>
        <PartnerSignIn placeholder={""} onChangeText={setMemberFantasy} />
        <Text style={styles.Text}>CNPJ</Text>
        <PartnerSignIn placeholder={""} onChangeText={setCNPJ} />
        <Text style={styles.Text}>Telefone</Text>
        <PartnerSignIn placeholder={""} onChangeText={setMemberPhone} />
        <Text style={styles.Text}>CEP</Text>
        <CEPSignIn
          placeholder={"Busque o CEP"}
          onChangeText={setCEP}
          onEndEditing={handleSearchCep}
        />
        <Text style={styles.Text}>Logradouro</Text>
        <PartnerSignIn
          placeholder={street}
          onChangeText={setStreet}
          value={street}
          editable={editableAdress}
        />
        <Text style={styles.Text}>Número</Text>
        <PartnerSignIn placeholder={""} onChangeText={setNumber} />
        <Text style={styles.Text}>Complemento</Text>
        <PartnerSignIn placeholder={""} onChangeText={setComplement} />
        <Text style={styles.Text}>Bairro</Text>
        <PartnerSignIn
          placeholder={district}
          onChangeText={setDistrict}
          value={district}
          editable={editableAdress}
        />
        <Text style={styles.Text}>Cidade</Text>
        <PartnerSignIn
          placeholder={city}
          onChangeText={setCity}
          value={city}
          editable={editableAdress}
        />
            <Text style={styles.Text}>Estado</Text>
            <SignInServeral options={optionsState} onSelect={handleSelect} value={uf} disabled={!editableAdress}/>
          

        <ButtonBlue title={"Salvar"} onPress={handleNewMember} />
        <ButtonRed title={"Cancelar"} onPress={handleCancelMember} />
      </ScrollView>
    </View>
  );
};
