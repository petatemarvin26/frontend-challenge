import { pokemonServer, testServer } from './servers';
import { reqInterceptor, resInterceptor } from './interceptors';

function apiConfig() {
  pokemonServer.interceptors.request.use(
    reqInterceptor.resolve,
    reqInterceptor.reject
  );
  pokemonServer.interceptors.response.use(
    resInterceptor.resolve,
    resInterceptor.reject
  );
}

export { pokemonServer, testServer, apiConfig };
