import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

interface Props {
    name: string;
    responsible: string;
}

export function DisabledCardPartner({ name, responsible }: any) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.Text}>Nome: {name}</Text>
                <Text style={styles.Text}>Status: Arquivado</Text>
                <Text style={styles.Text}>Responsável: {responsible}</Text>
            </View>
        </View>
    )
}
