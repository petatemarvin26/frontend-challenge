import { useEffect, useState } from 'react';
import { pokemonServer } from 'api';

function usePokemonApi() {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [response, setPokemons] = useState<object>();

  const effectListener = () => {
    pokemonServer.get('/api/v2/ability').then((data) => {
      setPokemons(data);
      setLoading(false);
    });
  };
  useEffect(effectListener, []);
  return [isLoading, response];
}

export default usePokemonApi;
