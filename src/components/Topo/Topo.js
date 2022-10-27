import React from 'react';
import {Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

import Texto from '../Texto/Texto';

import Gradiente from '../Gradiente/Gradiente';
import topo from '../../../assets/topo.png';
import Voltar from '../Voltar/Voltar';
import {useNavigation} from '@react-navigation/native';

const largura = Dimensions.get('screen').width;
const ALTURA_PADRAO = 270;

export default function Topo({titulo, imagem = topo, altura = ALTURA_PADRAO}) {
  const estilos = funcaoEstilos(altura);
  const navigation = useNavigation();
  return (
    <>
      <Image source={imagem} style={estilos.topo} />
      <Gradiente
        width={largura}
        height={(130 / 360) * largura}
        style={estilos.gradiente}
      />
      <Texto style={estilos.titulo}>{titulo}</Texto>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={estilos.botaoVoltar}>
        <Voltar color="black" style={estilos.voltar} />
      </TouchableOpacity>
    </>
  );
}

const funcaoEstilos = altura =>
  StyleSheet.create({
    topo: {
      width: '100%',
      height: altura,
    },
    gradiente: {
      position: 'absolute',
    },
    titulo: {
      width: '100%',
      position: 'absolute',
      textAlign: 'center',
      fontSize: 16,
      lineHeight: 26,
      color: 'white',
      fontWeight: 'bold',
      padding: 16,
    },
    botaoVoltar: {
      position: 'absolute',
      padding: 17,
    },
    voltar: {
      width: 24,
      height: 24,
    },
  });
