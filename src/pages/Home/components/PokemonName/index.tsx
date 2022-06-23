import Button from 'react-bootstrap/Button';

import { Text } from 'components';

import { Props } from './types';
import styles from './.module.css';

const Pokemon: React.FC<Props> = ({ name, url, onSelect }) => {
  return (
    <Button onClick={onSelect} className={styles.pokemonNamePane}>
      <Text className={styles.title}>{name.toUpperCase()}</Text>
    </Button>
  );
};

export default Pokemon;
