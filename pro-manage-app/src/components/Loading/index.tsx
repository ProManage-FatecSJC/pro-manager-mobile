import React from 'react';

import Logo from '../../assets/Logo.svg';

import {
    HStack,
    VStack,
    Spinner,
    Heading
} from 'native-base';
import { Text } from 'react-native';

export default function Loading() {
    return (
        <VStack flex={1} bg="#4994CE" space={2} alignItems="center" justifyContent="center" >
            <Logo width={90} height={90} />
            <HStack space={2} justifyContent="center" alignItems="center">
                <Heading color="#f8f8f8" fontSize="md">
                    Carregando
                </Heading>
                <Spinner color="#f8f8f8" />
            </HStack>
        </VStack>
    );
}