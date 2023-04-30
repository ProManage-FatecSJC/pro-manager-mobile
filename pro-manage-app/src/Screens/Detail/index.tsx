import React from 'react';
import { GestureResponderEvent, Text, TouchableOpacity, View } from 'react-native';
import styles from './styled.tsx';

export default ({ navigation }: any) => {

  function handleLogoffClick(event: GestureResponderEvent): void {
    navigation.navigate("MemberRegister");
  }

  return (
    <TouchableOpacity style={styles.Container} onPress={handleLogoffClick}>
        <Text>Detail</Text>
    </TouchableOpacity>
  );
};