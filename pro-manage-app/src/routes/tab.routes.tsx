import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from "./types";
import { House, UserCirclePlus, User } from 'phosphor-react-native';

import {
  Home,
  PartnerRegister,
  Profile
} from '../Screens';
import Users from '../Screens/Users';

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function ShowBottomTabs() {
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
        name="HomeTab"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <House size={25} color={focused ? "#00688C" : "#29292e"} />
              <Text
                allowFontScaling={false}
                style={{
                  color: focused ? "#00688C" : "#29292e",
                  fontSize: 11,
                  textAlign: "center",
                  fontWeight: focused ? "bold" : "normal",
                }}
              >
                Ínicio
              </Text>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="PartnerRegisterTab"
        component={PartnerRegister}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <UserCirclePlus
                size={25}
                color={focused ? "#00688C" : "#29292e"}
              />
              <Text
                allowFontScaling={false}
                style={{
                  color: focused ? "#00688C" : "#29292e",
                  fontSize: 11,
                  textAlign: "center",
                  fontWeight: focused ? "bold" : "normal",
                }}
              >
                Cadastro
              </Text>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <User size={25} color={focused ? "#00688C" : "#29292e"} />
              <Text
                allowFontScaling={false}
                style={{
                  color: focused ? "#00688C" : "#29292e",
                  fontSize: 11,
                  textAlign: "center",
                  fontWeight: focused ? "bold" : "normal",
                }}
              >
                Perfil
              </Text>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="UsersTab"
        component={Users}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <User size={25} color={focused ? "#00688C" : "#29292e"} />
              <Text
                allowFontScaling={false}
                style={{
                  color: focused ? "#00688C" : "#29292e",
                  fontSize: 11,
                  textAlign: "center",
                  fontWeight: focused ? "bold" : "normal",
                }}
              >
                Usuários
              </Text>
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
}