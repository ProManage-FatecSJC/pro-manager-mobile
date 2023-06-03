import React from "react";
import {
  TouchableOpacity,
  Text,
  View
} from "react-native";

import { styles } from './styles.ts'

interface buttonProps {
  name: string;
  status: string;
  responsible: string;
  onPress: () => void;
}

export function CardDetail({ name, status, responsible, onPress }: buttonProps) {
  return (
    <TouchableOpacity style={styles.cardButton} onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.partnerNameWrapper}>
          <Text style={styles.partnerName}>
            <Text style={{ fontWeight: '700' }}>
              Parceiro |
            </Text>
            {" "}
            {name}
          </Text>
        </View>

        <View style={styles.partnerDetailsWrapper}>

          <View style={styles.partnerWrapper}>
            <Text style={styles.partnerTitle}>Status |</Text>
            <Text style={styles.partnerText}>{status}</Text>
          </View>

          <View style={styles.partnerWrapper}>
            <Text style={styles.partnerTitle}>Responsável |</Text>
            <Text style={styles.partnerText}>{responsible}</Text>
          </View>

        </View>
      </View>
    </TouchableOpacity>
  );
};