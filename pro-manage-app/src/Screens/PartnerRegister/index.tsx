import React, { useEffect } from "react";
import styles from "./styled.tsx";
import { View, Text, Image } from "react-native";

export default () => {

  return (
    <View style={styles.Container}>
      <Image source={require('../../assets/construction.png')} style={{width: '100%', height: '30%'}}/>
      <Text>Em breve!</Text>
    </View>
  );
};
