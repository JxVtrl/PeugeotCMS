import { RoutesData } from '@/data/routesList';

export const routeArray = () => {
  const routes = RoutesData.map(item => item.route);

  // get itens with accordion property
  const accordion = RoutesData.filter(item => item.accordion);

  // get routes inside accordion array
  const accordionRoutes = accordion.map(item => item.accordion).flat();

  // get only route param from accordionRoutes
  const accordionRoutesOnly = accordionRoutes.map(
    item => item?.route,
  ) as string[];

  // get subroutes from accordionRoutes
  const accordionSubRoutes = accordionRoutes.map(item => {
    if (item?.subroutes) return item.subroutes.map(sub => sub.route);
  }) as string[][];

  // remove undefined from subroutes
  const accordionSubRoutesOnly = accordionSubRoutes.filter(
    item => item !== undefined,
  ) as string[][];

  // merge routes and accordionRoutesOnly
  if (accordionRoutesOnly.length > 0)
    routes.push(...accordionRoutesOnly, ...accordionSubRoutesOnly.flat());

  return routes;
};
