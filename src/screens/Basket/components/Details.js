import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Texto from '../../../components/Texto/Texto';
import Botao from '../../../components/Botao/Botao';
import {useNavigation} from '@react-navigation/native';

export default function Details({nome, produtor, descricao, preco}) {
  const navigation = useNavigation();

  return (
    <>
      <Texto style={styles.nome}>{nome}</Texto>
      <View style={styles.fazenda}>
        <Image source={produtor.imagem} style={styles.imagemFazenda} />
        <Texto style={styles.nomeDaFazenda}>{produtor.nome}</Texto>
      </View>
      <Texto style={styles.descricao}>{descricao}</Texto>
      <Texto style={styles.preco}>{preco}</Texto>

      <Botao
        text="Comprar"
        onPress={() => navigation.navigate('HomeScreen', {compra: {nome}})}
      />
    </>
  );
}

const styles = StyleSheet.create({
  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: '#464646',
    fontWeight: 'bold',
  },
  fazenda: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  imagemFazenda: {
    width: 32,
    height: 32,
    marginRight: 12,
  },
  nomeDaFazenda: {
    fontSize: 16,
    lineHeight: 26,
  },
  descricao: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});
