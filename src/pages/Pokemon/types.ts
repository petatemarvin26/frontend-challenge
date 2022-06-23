type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};
type PokemonAbilities = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};
type Stats = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

type Props = {
  name: string;
  image: string;
  types: PokemonType[];
  abilities: PokemonAbilities[];
  stats: Stats[];
};

export type { Props };
