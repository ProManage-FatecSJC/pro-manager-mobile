import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from "react-native";
import styles from "./styled.tsx";
import SearchBar from '../../components/SearchBar.tsx';
import { SessionController } from '../../session/SessionController.ts';
import api from '../../api/api.ts';
import { URI } from '../../api/uri.ts';

export default ({ navigation, route }: any) => {

  const { idProp } = route.params;

  const [id, setId] = useState(idProp);
  const [members, setMembers] = useState([]);
  const [name, setName] = useState();
  const [fantasyName, setFantasyName] = useState();
  const [cnpj, setCnpj] = useState();
  const [count, setCount] = useState(0)

  const sessionController = new SessionController();

  async function handleMembers() {
    const token = await sessionController.getToken();

    try {
      await api.get(URI.MEMBERSBYID +`/${id}`, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          setMembers(response.data);
          console.log(members);
        });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (count < 2) {
      handleMembers();
      setCount(count + 1)
    }
  }, [members]);

  return (
    <View style={styles.Container}>
      <Text style={styles.Text1}> Membros</Text>
      <SearchBar placeholder={"Pesquisa"} />
      <ScrollView>
        <View>
          
        </View>
      </ScrollView>
    </View>
  );
};