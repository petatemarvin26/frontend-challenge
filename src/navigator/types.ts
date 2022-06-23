import {
  IndexRouteProps,
  LayoutRouteProps,
  PathRouteProps
} from 'react-router';

type RouteType = PathRouteProps[] | LayoutRouteProps[] | IndexRouteProps[];

export type { RouteType };
