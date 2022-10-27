import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import AppRotas from './src/routes/AppRotas';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <AppRotas />
    </SafeAreaView>
  );
}
