import {useState, useEffect} from 'react';

import {loadTextos} from '../services/loadData';

export default function useTextos() {
  const [textos, setTextos] = useState({});

  useEffect(() => {
    const retorno = loadTextos();
    setTextos(retorno);
  }, []);

  return textos;
}
