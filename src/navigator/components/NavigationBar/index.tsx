import { Text, View } from 'components';

import styles from './.module.css';

const NavigationBar: React.FC = () => {
  return (
    <View className={styles.navigationBarPane}>
      <Text className={styles.title}>Pokedex</Text>
    </View>
  );
};

export default NavigationBar;
