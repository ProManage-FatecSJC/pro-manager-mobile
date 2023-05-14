import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from "react-native";
import styles from "./styled.tsx";
import SearchBar from '../../components/SearchBar.tsx';
import { SessionController } from '../../session/SessionController.ts';
import api from '../../api/api.ts';
import { URI } from '../../api/uri.ts';
import ButtonGreen from '../../components/ButtonGreen.tsx';
import CardDetailMembers from '../../components/CardDetailMembers.tsx';

export default ({ navigation, route }: any) => {

  const { idProp } = route.params;

  const [id, setId] = useState(idProp);
  const [membersData, setMembersData] = useState([])
  const [members, setMembers] = useState([]);
  const [name, setName] = useState();
  const [fantasyName, setFantasyName] = useState();
  const [cnpj, setCnpj] = useState();
  const [count, setCount] = useState(0)

  const sessionController = new SessionController();

  async function handleMembers() {
    const token = await sessionController.getToken();

    try {
      await api.get(URI.MEMBERS +`/${id}`, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          setMembersData(response.data);
          setMembers(membersData)
          console.log(members);
        });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (count < 2) {
      handleMembers();
      console.log(count)
      setCount(count + 1)
    }
  }, [members]);

  const handleSearch = (text: any) => {
    if (!text) {
      setMembers(membersData);
      return;
    }

    const filteredMembers = membersData.filter((partner: any) => {
      const name = partner.name.toLowerCase();
      const searchTerm = text.toLowerCase();
      return name.includes(searchTerm);
    });

    console.log("MEMBROS FILTRADOS: ", filteredMembers);

    setMembers(filteredMembers);
  };


  return (
    <View style={styles.Container}>
      <Text style={styles.Text1}> Membros</Text>
      <SearchBar placeholder={"Pesquisa"} onChangeText={handleSearch} />
      <ScrollView>
        <View>
          {members.map((item: any) => (
            <CardDetailMembers
              key={item.id}
              name={item.name}
              nameFantasy={item.trade_name}
              cnpj={item.CNPJ}
              onPress={() => {}}
            />
          ))}
        </View>
      </ScrollView>
      <ButtonGreen
        title={"Cadastrar Membro"}
        onPress={() => {
          console.log(idProp);
          navigation.navigate("Members", {
            idProp: id,
          });
        }}
      />
    </View>
  );
};