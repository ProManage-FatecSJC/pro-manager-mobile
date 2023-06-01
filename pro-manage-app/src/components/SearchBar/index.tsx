import React from "react";
import {
  TextInput,
  View
} from "react-native";

import { MagnifyingGlass } from "phosphor-react-native";
import { styles } from './styles.ts'

interface SearchBarProps {
  placeholder: string;
  onChangeText: (text: string) => void;
}

export function SearchBar({ placeholder, onChangeText }: SearchBarProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={(text) => onChangeText(text)}
      />
      <MagnifyingGlass size={20} />
    </View>
  );
};

