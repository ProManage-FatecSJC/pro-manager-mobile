import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';

interface InputProps extends TextInputProps {
    placeholder: string;
    marginTop?: number;
    marginBottom?: number;
}

export function DefaultInput({ placeholder, marginTop, marginBottom, ...rest}: InputProps) {
    return (
        <TextInput
            style={
                [
                    styles.input,
                    { marginTop: marginTop ? marginTop : 0 },
                    { marginBottom: marginBottom ? marginBottom : 0 },
                ]
            }
            placeholder={placeholder}
            {...rest}
        />
    )
}