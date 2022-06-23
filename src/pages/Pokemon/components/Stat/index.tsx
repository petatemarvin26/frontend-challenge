import { Text, View, Indicator } from 'components';

import { Props } from './types';
import styles from './.module.css';

const Stat: React.FC<Props> = ({ name, value }) => {
  return (
    <View className={styles.statPane}>
      <Text className={styles.name}>{name.toUpperCase()}</Text>
      <Indicator.ProgressBar
        progress={value}
        roundCorder={0.4}
        className={styles.indicator}
        barColor='var(--ACCENT-COLOR3)'
      />
    </View>
  );
};
export default Stat;
