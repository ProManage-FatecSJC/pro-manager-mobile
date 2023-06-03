import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { ArrowLeft } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
    title: string;
}

export function Header({title}: HeaderProps) {
    const navigation = useNavigation();

function goBack() {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={goBack}>
            <ArrowLeft />
        </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}