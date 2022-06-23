import { useContext, useState } from 'react';

import { Text, View, Indicator, Image } from 'components';
import { PokemonContext } from 'context';
import { usePokemonApi } from 'hooks';

import styles from './.module.css';
import { Type, Stat, Ability } from './components';
import { toNameString } from 'utils/strings';

const Pokemon: React.FC = () => {
  const [didLoad, setLoad] = useState<Boolean>(false);

  const { selected } = useContext(PokemonContext);

  const { loading, response } = usePokemonApi(
    `/api/v2/pokemon/${selected.name}`
  );

  console.log(response && response.abilities);

  return (
    <View className={styles.pokemonPane}>
      <View
        className={styles.loadingPane}
        style={{ display: loading || !didLoad ? 'flex' : 'none' }}
      >
        <Indicator.CircleSnail thickness='0.5vh' size='5vh' />
      </View>
      <View
        className={styles.pokemon}
        style={{ display: loading || !didLoad ? 'none' : 'flex' }}
      >
        <View className={styles.leftPane}>
          <View className={styles.upperLeftPane}>
            <View className={styles.header}>
              <Text className={styles.name}>
                {toNameString(!loading ? response.name : '')}
              </Text>
              <View className={styles.typePane}>
                {!loading &&
                  response.types.map(({ type }: any, index: number) => (
                    <Type key={index} name={type.name} />
                  ))}
              </View>
            </View>
          </View>
          <View className={styles.bodyLeftPane}>
            {!loading &&
              response.stats.map(
                ({ stat: { name }, base_stat }: any, index: number) => (
                  <Stat key={index} name={name} value={base_stat} />
                )
              )}
          </View>
          <View className={styles.lowerLeftPane}>
            <View className={styles.abilityPane}>
              {!loading &&
                response.abilities.map(
                  ({ ability: { name } }: any, index: number) => (
                    <Ability key={index} name={name} />
                  )
                )}
            </View>
          </View>
        </View>
        <View className={styles.rightPane}>
          <Image
            source={
              !loading && response.sprites.other.dream_world.front_default
            }
            className={styles.image}
            onLoad={() => setLoad(true)}
          />
        </View>
      </View>
    </View>
  );
};

export default Pokemon;
