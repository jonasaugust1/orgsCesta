import React from 'react';
import Texto from '../../../components/Texto/Texto';
import {Image, View, StyleSheet} from 'react-native';

export default function Item({item: {nome, imagem}}) {
  return (
    <View style={styles.item}>
      <Image source={imagem} style={styles.img} />
      <Texto style={styles.name}>{nome}</Texto>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    paddingVertical: 16,
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 16,
  },
  img: {
    width: 46,
    height: 46,
  },
  name: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: '#464646',
  },
});
