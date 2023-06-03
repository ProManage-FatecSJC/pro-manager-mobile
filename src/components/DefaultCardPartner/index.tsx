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
  statusTitle?: string;
  onPress?: () => void;
}

export function DefaultCardPartner({
  title,
  totalPartners,
  registeredArchived,
  statusTitle,
  onPress
}: CardProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerTitle}>
            Informações
          </Text>
        </View>
        <View style={styles.textCardWrapper}>

          <Text style={styles.textTitle}>
            <Text style={{ fontWeight: '700' }}>
            {statusTitle}
            </Text>{" "}{title}
          </Text>

          <Text style={styles.textTitle}>
            <Text style={{ fontWeight: '700' }}>
              Total {registeredArchived} |
            </Text> {totalPartners}
          </Text>

        </View>

      </View>
    </TouchableOpacity>
  );
};
