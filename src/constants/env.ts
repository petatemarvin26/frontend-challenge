function getEnv(vars: string) {
  return process.env[vars];
}

const APP_VERSION: string = getEnv('REACT_APP_VERSION')!;
const POKEMON_API_URL: string = getEnv('REACT_APP_POKEMON_API_URL')!;
const TEST_API_URL: string = getEnv('REACT_APP_TEST_API_URL')!;

export { APP_VERSION, POKEMON_API_URL, TEST_API_URL };
