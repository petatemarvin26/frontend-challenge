import { View } from 'components';
import { usePokemonApi } from 'hooks';

import { Pokemon } from './components';
import styles from './.module.css';

const Home: React.FC = () => {
  const { loading, response } = usePokemonApi();

  return (
    <View className={styles.homePane}>
      <View className={styles.listPane}>
        {response?.results.map((result, index) => (
          <Pokemon key={index} name={result.name} />
        ))}
      </View>
    </View>
  );
};

export default Home;
