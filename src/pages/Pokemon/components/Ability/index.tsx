import { Text, View } from 'components';

import styles from './.module.css';
import { Props } from './types';

const Ability: React.FC<Props> = ({ name }) => {
  return (
    <View className={styles.abilityPane}>
      <Text className={styles.name}>{name.toUpperCase()}</Text>
    </View>
  );
};

export default Ability;
