import { useNavigate } from 'react-router-dom';

import { View } from 'components';
import { usePokemonApi, PokemonApiPropsResult } from 'hooks';

import { PokemonName } from './components';
import styles from './.module.css';
import { useContext } from 'react';
import { PokemonContext } from 'context';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { onSelect } = useContext(PokemonContext);
  const { loading, response } = usePokemonApi('/api/v2/pokemon');

  const onClickPokemon = (result: PokemonApiPropsResult) => {
    navigate('/pokemon');
    onSelect(result);
  };

  return (
    <View className={styles.homePane}>
      <View className={styles.listPane}>
        {response?.results.map((result: any, index: number) => (
          <PokemonName
            key={index}
            name={result.name}
            onSelect={() => onClickPokemon(result)}
          />
        ))}
      </View>
    </View>
  );
};

export default Home;
