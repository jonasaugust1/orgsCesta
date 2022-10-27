import React, {useReducer, useMemo} from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Estrelas from '../../../components/Estrela/Estrelas';

const distanciaEmMetros = distancia => {
  return `${distancia}m`;
};

export default function Produtor({
  nome,
  imagem,
  distancia,
  estrelas,
  aoPressionar,
}) {
  // const [selecionado, setSelecionado] = useState(false);
  const [selecionado, inverterSelecionado] = useReducer(
    selecionado => !selecionado,
    false,
  );

  const distanciaTexto = useMemo(
    () => distanciaEmMetros(distancia),
    [distancia],
  );

  return (
    <TouchableOpacity style={styles.card} onPress={aoPressionar}>
      <Image source={imagem} accessibilityLabel={nome} style={styles.img} />
      <View style={styles.info}>
        <View>
          <Text style={styles.nome}>{nome}</Text>
          <Estrelas
            quantidade={estrelas}
            editavel={selecionado}
            grande={selecionado}
          />
        </View>
        <Text style={styles.distancia}>{distanciaTexto}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F6F6F6',
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 6,
    flexDirection: 'row',

    // Android
    elevation: 4,

    // IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 8,
    marginRight: 16,
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 22,
  },
  distancia: {
    fontSize: 12,
    lineHeight: 19,
    fontWeight: 'bold',
  },
});
