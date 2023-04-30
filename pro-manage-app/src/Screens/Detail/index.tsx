import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import styles from './styled.tsx';

import api from '../../api/api.ts';
import { URI } from '../../api/uri.ts';
import { SessionController } from "../../session/SessionController.ts";
import { TouchableOpacity } from 'react-native-gesture-handler';
import CardDetail from '../../components/CardDetail.tsx';



export default ({ navigation }: any) => {

  const sessionController = new SessionController();

  const [userName, setUserName] = useState("");

  const [partner, setPartner] = useState([]);
  const [partners0, setPartners0] = useState([]);
  const [name, setName] = useState();
  const [status, setStatus] = useState();
  const [responsible, setresponsible] = useState();

  return (
    <View style={styles.Container}>
      <Text>Detail</Text>
      <Text> </Text>
      <Text> </Text>

      <CardDetail
      name={''} 
      status={''} 
      responsible={''}
      onPress={() => {
        console.log("ok");}}/>
    </View>
  );
};

