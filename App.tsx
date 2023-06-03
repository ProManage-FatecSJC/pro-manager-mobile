import React, { useState, useEffect } from "react";
import { NativeBaseProvider } from 'native-base';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import { Loading } from './src/components/Loading'
import Routes from "./src/routes";
import { SafeAreaView } from "react-native";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
      <NativeBaseProvider>
          {isLoading || !fontsLoaded ? <Loading /> : <Routes />}
      </NativeBaseProvider>
  );
};