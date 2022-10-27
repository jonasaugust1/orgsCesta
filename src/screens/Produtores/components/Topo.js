import React, {useEffect, useState} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import logo from '../../../../assets/logo.png';
import {loadTopo} from '../../../services/loadData';

export default function Topo() {
  const [boasVindas, setBoasVindas] = useState('');
  const [legenda, setLegenda] = useState('');

  useEffect(() => {
    const response = loadTopo();
    setBoasVindas(response.boasVindas);
    setLegenda(response.legenda);
  }, []);

  return (
    <View style={styles.top}>
      <Image source={logo} style={styles.img} />
      <Text style={styles.welcome}>{boasVindas}</Text>
      <Text style={styles.subTitle}>{legenda}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  img: {
    width: 70,
    height: 28,
  },
  welcome: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  subTitle: {
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3',
  },
});
