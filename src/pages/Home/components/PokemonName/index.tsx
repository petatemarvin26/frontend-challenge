import { Text, View } from 'components';

import { Props } from './types';
import styles from './.module.css';
import { Button } from '@mui/material';

const Pokemon: React.FC<Props> = ({ name, url, onSelect }) => {
  return (
    <Button
      onClick={onSelect}
      className={styles.pokemonNamePane}
      style={{ backgroundColor: 'var(--ACCENT-COLOR3)' }}
    >
      <Text className={styles.title}>{name}</Text>
    </Button>
  );
};

export default Pokemon;
