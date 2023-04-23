import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Preload from "../Screens/Preload";
import SignIn from "../Screens/SignIn";
import { StackRouter } from "@react-navigation/native";
import ShowBottomTabs from "./MainTab";

const Stack = createStackNavigator();

export default class Navegador extends React.Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
          headerShown: false,
        }}
      >
        {/*
          <Stack.Screen name="Preload" component={Preload}/>
        */}
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="MainTab" component={ShowBottomTabs} />
      </Stack.Navigator>
    );
  }
}