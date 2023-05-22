import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/stacks/MainStack";
import Loading from "./src/components/Loading";
import { NativeBaseProvider } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        {/* <NativeBaseProvider>
          <Loading />
        </NativeBaseProvider> */}
        <MainStack />
      </NavigationContainer>
    </SafeAreaView>
  );
};
