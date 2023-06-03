import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "./styles";

interface CardDetailMembersProps {
  name: string;
  nameFantasy: string;
  cnpj: string;
  onPress?: any;
}

export function CardDetailMember({ name, nameFantasy, cnpj, onPress }: CardDetailMembersProps){
  return (
    <TouchableOpacity style={styles.cardButton} onPress={onPress}>
    <View style={styles.container}>
      <View style={styles.partnerNameWrapper}>
        <Text style={styles.partnerName}>
          <Text style={{ fontWeight: '700' }}>
            Membro |
          </Text>
          {" "}
          {name}
        </Text>
      </View>

      <View style={styles.partnerDetailsWrapper}>

        <View style={styles.partnerWrapper}>
          <Text style={styles.partnerTitle}>Nome fantasia |</Text>
          <Text style={styles.partnerText}>{nameFantasy}</Text>
        </View>

        <View style={styles.partnerWrapper}>
          <Text style={styles.partnerTitle}>CNPJ |</Text>
          <Text style={styles.partnerText}>{cnpj}</Text>
        </View>

      </View>
    </View>
  </TouchableOpacity>
  );
};
