import React, { useState } from 'react';
import { TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

import { Eye, EyeClosed } from 'phosphor-react-native';

interface PasswordInputProps extends TextInputProps {
  marginTop?: number;
  marginBottom?: number;
}

export default function PasswordInput({ marginTop, marginBottom, ...rest }: PasswordInputProps) {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={[ styles.container, { marginTop: marginTop ? marginTop : 0 }, { marginBottom: marginBottom ? marginBottom : 0 },]}>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={!isPasswordVisible}

        {...rest}
      />
      <TouchableOpacity style={styles.eyeIconContainer} onPress={togglePasswordVisibility}>
        {isPasswordVisible ? <Eye size={24} color='#888' /> : <EyeClosed size={24} color='#888' />}
      </TouchableOpacity>
    </View>
  );
}