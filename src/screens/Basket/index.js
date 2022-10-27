import React from 'react';
import Topo from '../../components/Topo/Topo';
import Details from './components/Details';
import {View, StyleSheet, FlatList} from 'react-native';
import Item from './components/Item';
import Texto from '../../components/Texto/Texto';
import {useRoute} from '@react-navigation/native';
import useTextos from '../../hooks/useTextos';

export default function Basket() {
  const route = useRoute();
  const {topoCesta, tituloItens} = useTextos();

  const {detalhes, itens, produtor} = route.params;
  return (
    <>
      <FlatList
        data={itens}
        renderItem={Item}
        keyExtractor={({nome}) => nome}
        ListHeaderComponent={() => (
          <>
            <Topo titulo={topoCesta} />

            <View style={styles.cesta}>
              <Details {...detalhes} produtor={produtor} />
              <Texto style={styles.title}>{tituloItens}</Texto>
            </View>
          </>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  title: {
    color: '464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
});
