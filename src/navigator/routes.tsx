import { Home, Pokemon } from 'pages';
import { RouteType } from './types';

const routes: RouteType = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/pokemon',
    element: <Pokemon />
  }
];

export default routes;
