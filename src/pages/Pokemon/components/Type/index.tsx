import { Text, View } from 'components';

import { Props } from './types';
import styles from './.module.css';

const Type: React.FC<Props> = ({ name }) => {
  return (
    <View className={styles.typePane}>
      <Text className={styles.name}>{name}</Text>
    </View>
  );
};
export default Type;
