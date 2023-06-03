import React from "react";
import {
    TouchableOpacity,
    Text,
    View
} from "react-native";

import { styles } from './styles'

interface CardProps {
    title: string;
    totalPartners: string | number;
    registeredArchived: string;
    onPress?: () => void;
}

export function DefaultCardPartner({
  title,
  totalPartners,
  registeredArchived,
  onPress
}:CardProps){
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.textCardWrapperWithMargin}>
        <Text style={styles.buttonText1}>{title}</Text>
      </View>
      
      <View style={styles.textCardWrapper}>
        <Text style={styles.buttonText2}>Total {registeredArchived}: {totalPartners}</Text>
      </View>
    </TouchableOpacity>
  );
};
