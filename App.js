import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';


import Horoscopo from './src/telas/horoscopo';
import mock from './src/mocks/horoscopo';

export default function App() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Horoscopo {...mock} />
    </SafeAreaView>
  );
}
