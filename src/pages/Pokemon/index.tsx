import { Text, View } from 'components';
import { PokemonContext } from 'context';
import { usePokemonApi } from 'hooks';
import { useContext } from 'react';

import { Props } from './types';
import styles from './.module.css';
import { CircularProgress } from '@mui/material';
import { Type, Stat } from './components';

const Pokemon: React.FC = () => {
  const { selected } = useContext(PokemonContext);

  const { loading, response } = usePokemonApi(
    `/api/v2/pokemon/${selected.name}`
  );

  return (
    <View className={styles.pokemonPane}>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <View className={styles.pokemon}>
            <View className={styles.leftPane}>
              <View className={styles.upperRightpane}>
                <Text className={styles.name}>{response.name}</Text>
                {response.types.map(({ type }: any, index: number) => (
                  <Type key={index} name={type.name} />
                ))}
              </View>
              <View className={styles.lowerLeftPane}>
                {response.stats.map(
                  ({ stat: { name }, base_stat }: any, index: number) => (
                    <Stat name={name} value={base_stat} />
                  )
                )}
              </View>
            </View>
            <View className={styles.rightPane}></View>
          </View>
        </>
      )}
    </View>
  );
};

export default Pokemon;
