import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Produtor from '../screens/Produtor';
import Home from '../screens/Home';
import Basket from '../screens/Basket';

const Stack = createNativeStackNavigator();

export default function ProdutorRotas({componentPrincipal = Home}) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={componentPrincipal} />
      <Stack.Screen name="Produtor" component={Produtor} />
      <Stack.Screen name="Cesta" component={Basket} />
    </Stack.Navigator>
  );
}
