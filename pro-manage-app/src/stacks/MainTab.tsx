import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import PartnerRegister from "../Screens/PartnerRegister";
import Profile from "../Screens/Profile";
//import CustomTabBar from '../components/CustomTabBar'

import { House, UserCirclePlus, User } from 'phosphor-react-native';
import { Text } from "react-native";

const Tab = createBottomTabNavigator();

export default function ShowBottomTabs(){
    return (
      <Tab.Navigator
      screenOptions={{
        headerShown: false,
        unmountOnBlur: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
        },
      }}
      >
        <Tab.Screen 
          name="Home" 
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <>
                <House size={25} color={focused ? '#00688C' : '#29292e'} />
                <Text
                  allowFontScaling={false}
                  style={{
                    color: focused ? '#00688C' : '#29292e',
                    fontSize: 11,
                    textAlign: 'center',
                    fontWeight: focused ? 'bold' : 'normal',
                  }}
                >Ínicio</Text>
              </>
            )
          }}
        />
        <Tab.Screen name="PartnerRegister" component={PartnerRegister} 
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <UserCirclePlus  size={25} color={focused ? '#00688C' : '#29292e'} />
              <Text
                allowFontScaling={false}
                style={{
                  color: focused ? '#00688C' : '#29292e',
                  fontSize: 11,
                  textAlign: 'center',
                  fontWeight: focused ? 'bold' : 'normal',
                }}
              >Cadastro</Text>
            </>
          )
        }}
        />
        <Tab.Screen name="Profile" component={Profile} 
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <User size={25} color={focused ? '#00688C' : '#29292e'} />
              <Text
                allowFontScaling={false}
                style={{
                  color: focused ? '#00688C' : '#29292e',
                  fontSize: 11,
                  textAlign: 'center',
                  fontWeight: focused ? 'bold' : 'normal',
                }}
              >Perfil</Text>
            </>
          )
        }}
        />
      </Tab.Navigator>
    );
}