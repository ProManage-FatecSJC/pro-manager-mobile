import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles.ts";
import { SessionController } from '../../session/SessionController.ts';
import api from '../../api/api.ts';
import { URI } from '../../api/uri.ts';
import {
  DefaultButton,
  SearchBar,
  CardDetailMember
} from '../../components/';
import { ArrowLeft } from 'phosphor-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HStack, Spinner, Heading } from 'native-base';

export function Members({ navigation, route }: any) {
  const { idProp } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState(idProp);
  const [membersData, setMembersData] = useState([]);
  const [members, setMembers] = useState([]);
  const [name, setName] = useState();
  const [count, setCount] = useState(0);

  const sessionController = new SessionController();

  async function handleMembers() {
    setIsLoading(true)
    const token = await sessionController.getToken();
    try {
      await api
        .get(URI.MEMBERS + `/${id}`, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          setMembersData(response.data);
          setMembers(membersData);
          console.log(members);
          setIsLoading(false)
        });
    } catch (error) {
      console.log(error);
      setIsLoading(false)
    }
  }

  async function handlePartner() {
    const token = await sessionController.getToken();
    try {
      await api
        .get(URI.PARTNER + `/${id}`, {
          headers: { Authorization: token },
        })
        .then((response) => {
          setName(response.data.name);
          console.log(name)
        });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (count < 10) {
      handlePartner();
      console.log(count);
      setCount(count + 1);
    }
  }, [name]);

  useEffect(() => {
    if (count < 10) {
      handleMembers();
      console.log(count);
      setCount(count + 1);
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

  useEffect(() => {
    handlePartner();
    handleMembers();
  }, []);
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Membros |
          {' '}
          {isLoading ? (
            <Spinner size="sm" color="#4994CE" />
          ) : (
            <Text>{name}</Text>
          )}

        </Text>
      </View>
      <SearchBar placeholder={"Pesquisa"} onChangeText={handleSearch} />
      <ScrollView>
        {isLoading ? (
          <HStack space={2} justifyContent="center" alignItems="center">
            <Heading
              color="#4994CE"
              fontWeight="500"
              fontSize="lg"
              textAlign="center"
            >
              Carregando
            </Heading>
            <Spinner size="sm" color="#4994CE" />
          </HStack>
        ) : (
          <View>
            {members.map((item: any) => (
              <CardDetailMember
                key={item.id}
                name={item.name}
                nameFantasy={item.trade_name}
                cnpj={item.CNPJ}
                onPress={() => { }}
              />
            ))}
          </View>
        )}
      </ScrollView>

      <DefaultButton
        title={"Cadastrar Membro"}
        bg={'transparent'}
        textColor={'#4994CE'}
        borderColor={'#4994CE'}
        borderWidth={1.5}
        variant={'outline'}
        _pressed={{
          bg: "#f0f0f0",
        }}
        onPress={() => {
          console.log(idProp);
          navigation.navigate("MemberRegister", {
            idProp: id,
          });
        }}
      />
    </SafeAreaView>
  );
};