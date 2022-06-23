import { createContext } from 'react';

import { PokemonContextProps } from './types';

const pokemonContextInitstate: PokemonContextProps = {
  selected: {
    name: '',
    url: ''
  },
  onSelect(pokemon) {}
};

const PokemonContext = createContext(pokemonContextInitstate);

export { pokemonContextInitstate };
export type { PokemonContextProps };
export default PokemonContext;
