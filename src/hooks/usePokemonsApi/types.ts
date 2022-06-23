import { AxiosResponse } from 'axios';

type PokemonApiPropsResult = {
  name: string;
  url: string;
};

type PokemonApiProps =
  | {
      count: number;
      next: string;
      previous: any;
      results: PokemonApiPropsResult[];
    }
  | undefined;
type PokemonApiHooksProps = { loading: boolean; response: any };

export type { PokemonApiPropsResult, PokemonApiProps, PokemonApiHooksProps };
