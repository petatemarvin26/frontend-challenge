import { Text, Button } from 'components';

import { Props } from './types';
import styles from './.module.css';
import { toNameString } from 'utils/strings';

const Pokemon: React.FC<Props> = ({ name, url, onSelect }) => {
  return (
    <Button onClick={onSelect} className={styles.pokemonNamePane}>
      <Text className={styles.title}>{name.toUpperCase()}</Text>
    </Button>
  );
};

export default Pokemon;
