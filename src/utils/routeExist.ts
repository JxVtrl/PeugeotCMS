import { routeArray } from './routeArray';

export const routeExist = (route: string) => {
  return routeArray().includes(route);
};
