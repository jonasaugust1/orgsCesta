import {useState, useEffect} from 'react';
import {loadProdutores} from '../services/loadData';

export default function useProdutores(melhoresProdutores) {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const retorno = loadProdutores();
    retorno.lista.sort(
      (produtor1, produtor2) => produtor1.distancia - produtor2.distancia,
    );
    let novaLista = retorno.lista;

    if (melhoresProdutores) {
      novaLista = novaLista.filter(produtor => produtor.estrelas > 3);
    }
    setLista(novaLista);
  }, []);

  return lista;
}
