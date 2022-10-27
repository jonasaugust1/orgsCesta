import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function Texto({children, style}) {
  let estilo = styles.text;

  if (style?.fontWeight === 'bold') {
    estilo = styles.textNegrito;
  }

  return <Text style={[style, estilo]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'MontserratRegular',
    fontWeight: 'normal',
  },
  textNegrito: {
    fontFamily: 'MontserratBold',
    fontWeight: 'normal',
  },
});
