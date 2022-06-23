import { PokemonApiPropsResult } from 'hooks';

type PokemonContextProps = {
  selected: PokemonApiPropsResult;
  onSelect: (pokemon: PokemonApiPropsResult) => void;
};

export type { PokemonContextProps };
