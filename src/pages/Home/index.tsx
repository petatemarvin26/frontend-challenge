import { Text, View } from 'components';
import { useEffect } from 'react';

import { usePokemonApi } from 'hooks';

const Home: React.FC = () => {
  const [loading, respose] = usePokemonApi();

  console.log(loading ? 'LOADING' : respose);

  return (
    <View>
      <Text>HOME PAGE</Text>
    </View>
  );
};

export default Home;
