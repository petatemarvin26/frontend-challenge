import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import { pokemonServer } from 'api';
import { PokemonApiProps, PokemonApiHooksProps } from './types';

function usePokemonApi(): PokemonApiHooksProps {
  const [loading, setLoading] = useState<boolean>(true);
  const [response, setPokemons] = useState<PokemonApiProps>();

  const effectListener = () => {
    pokemonServer.get('/api/v2/ability', {}).then((data: any) => {
      setPokemons(data);
      setLoading(false);
    });
  };
  useEffect(effectListener, []);
  return {
    loading,
    response
  };
}

export default usePokemonApi;
