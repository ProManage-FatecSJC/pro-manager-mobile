import React from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './styles';

import { Header } from '../../components/Header';
import SearchBar from '../../components/SearchBar'
import { DisabledCardPartner } from '../../components/DisabledCardPartner';

export function ArquivePartners() {
    return (
        <>
            <Header title="Parceiros arquivados" />
            <View style={styles.container}>
                <SearchBar placeholder="Pesquisar parceiro" />
                <ScrollView>
                    <View>
                        <DisabledCardPartner />
                    </View>
                </ScrollView>
            </View>
        </>
    );
}  