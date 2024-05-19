import { useEffect } from 'react';

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = 'Peugeot Dashboard: ' + title;
    return () => {
      document.title = 'Peugeot Dashboard';
    };
  }, [title]);
  return null;
}
