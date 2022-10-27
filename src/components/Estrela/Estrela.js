import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import estrela from '../../../assets/estrela.png';
import estrelaCinza from '../../../assets/estrelaCinza.png';

export default function Estrela({
  onPress,
  desabilitado = true,
  preenchida,
  grande = false,
}) {
  const styles = stylesFunction(grande);
  const getImagem = () => {
    if (preenchida) {
      return estrela;
    }

    return estrelaCinza;
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={desabilitado}>
      <Image source={getImagem()} style={styles.estrela} />
    </TouchableOpacity>
  );
}

const stylesFunction = grande =>
  StyleSheet.create({
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
      marginRight: 2,
    },
  });
