import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProdutorRotas from './ProdutorRotas';
import MelhoresProdutoresRotas from './MelhoresProdutoresRotas';
import Coracao from '../components/Coracao/Coracao';
import HomeSGV from '../components/HomeSVG/HomeSGV';

const Tab = createBottomTabNavigator();

export default function AppRotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({color}) => {
            let Icon = HomeSGV;

            if (route.name === 'Melhores Produtores') {
              Icon = Coracao;
            }

            return <Icon />;
          },
          tabBarActiveTintColor: '#2A9F85',
          tabBarInactiveTintColor: '#C7C7C7',
        })}>
        <Tab.Screen name="Home" component={ProdutorRotas} />
        <Tab.Screen
          name="Melhores Produtores"
          component={MelhoresProdutoresRotas}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
