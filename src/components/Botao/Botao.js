import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Texto from '../Texto/Texto';

export default function Botao({text, onPress}) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Texto style={styles.textoBtn}>{text}</Texto>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 16,
    backgroundColor: '#2A9F85',
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBtn: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
  },
});
