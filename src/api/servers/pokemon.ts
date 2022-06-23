import axios from 'axios';
import { POKEMON_API_URL } from 'constants/env';

const pokemonServer = axios.create({
  baseURL: POKEMON_API_URL
});

export default pokemonServer;
