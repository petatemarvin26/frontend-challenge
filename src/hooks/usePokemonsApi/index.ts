import { useEffect, useState } from 'react';

import { pokemonServer } from 'api';
import {
  PokemonApiProps,
  PokemonApiHooksProps,
  PokemonApiPropsResult
} from './types';

function usePokemonApi(url: string): PokemonApiHooksProps {
  const [loading, setLoading] = useState<boolean>(true);
  const [response, setPokemons] = useState<any>();

  const effectListener = () => {
    pokemonServer.get(url, {}).then((data: any) => {
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

export type { PokemonApiHooksProps, PokemonApiProps, PokemonApiPropsResult };

export default usePokemonApi;
