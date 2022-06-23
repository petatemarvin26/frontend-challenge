import { Text, View } from 'components';

import { Props } from './types';
import styles from './.module.css';
import { LinearProgress } from '@mui/material';

const Stat: React.FC<Props> = ({ name, value }) => {
  return (
    <View className={styles.statPane}>
      <Text className={styles.name}>{name}</Text>
      <LinearProgress
        variant='determinate'
        value={value}
        classes={{ colorPrimary: 'red', barColorPrimary: 'orange' }}
      />
    </View>
  );
};
export default Stat;
