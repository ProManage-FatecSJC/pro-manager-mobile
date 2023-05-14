import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export function DisabledCardPartner() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.Text}>Nome: Nome do parceiro</Text>
                <Text style={styles.Text}>Status: Arquivado</Text>
                <Text style={styles.Text}>Responsável: Responsável pelo parceiro</Text>
            </View>
        </View>
    )
}
