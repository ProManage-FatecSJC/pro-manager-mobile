import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import PartnerRegister from "../Screens/PartnerRegister";
import Profile from "../Screens/Profile";
//import CustomTabBar from '../components/CustomTabBar'

const Tab = createBottomTabNavigator();

export default class Tabs extends React.Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="PartnerRegister" component={PartnerRegister} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  }
}