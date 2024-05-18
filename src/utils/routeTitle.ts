import { RoutesData } from '@/data/routesList';

export const routeTitle = (route: string) => {
  // get route title
  const title = RoutesData.find(item => item.route === route)?.title;

  // get accordion title
  let accordionTitle = '' as string | undefined;

  if (!title) {
    const accordion = RoutesData.find(
      item =>
        item.accordion && item.accordion.find(item => item.route === route),
    );
    if (accordion?.accordion)
      accordionTitle = accordion.accordion?.find(
        item => item.route === route,
      )?.title;
  }

  // get title from RoutesData[x].accordion[x].subroutes[x].title
  if (!accordionTitle) {
    const accordion = RoutesData.find(
      item =>
        item.accordion &&
        item.accordion.find(
          item =>
            item.subroutes && item.subroutes.find(item => item.route === route),
        ),
    );

    if (accordion?.accordion)
      accordionTitle = accordion.accordion
        ?.find(
          item =>
            item.subroutes && item.subroutes.find(item => item.route === route),
        )
        ?.subroutes?.find(item => item.route === route)?.title;
  }

  // return title or accordionTitle
  return title || accordionTitle;
};
