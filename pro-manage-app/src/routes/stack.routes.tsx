import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
    ArquivePartners,
    DetailStatus,
    DetailTotal,
    InfPartner,
    MemberRegister,
    Members,
    PartnerUpdate,
    SignIn,
    UserRegister,
    UserUpdate
} from '../Screens';

import { RootStackParamList } from './types';

import ShowBottomTabs from './tab.routes';

const { Screen, Navigator } = createStackNavigator<RootStackParamList>();

export default function StackRoutes() {
    return (
      <Navigator
        initialRouteName="SignIn"
        screenOptions={{ headerShown: false }}
      >
        <Screen name="SignIn" component={SignIn} />
        <Screen name="Home" component={ShowBottomTabs} />
        <Screen name="DetailStatus" component={DetailStatus} />
        <Screen name="ArquivePartners" component={ArquivePartners} />
        <Screen name="DetailTotal" component={DetailTotal} />
        <Screen name="InfPartner" component={InfPartner} />
        <Screen name="PartnerRegister" component={ShowBottomTabs} />
        <Screen name="MemberRegister" component={MemberRegister} />
        <Screen name="Members" component={Members} />
        <Screen name="PartnerUpdate" component={PartnerUpdate} />
        <Screen name="UserRegister" component={UserRegister} />
        <Screen name="Profile" component={ShowBottomTabs} />
        <Screen name="UserUpdate" component={UserUpdate} />
        <Screen name="Users" component={ShowBottomTabs} />
      </Navigator>
    );
}