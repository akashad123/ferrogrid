import { renderToString } from 'react-dom/server';
import { App } from './app/App';
import { getRouteByPath, ROUTES } from './app/routes';

export function render(url: string) {
  const route = getRouteByPath(url);
  const appHtml = renderToString(<App currentPath={url} />);
  return {
    appHtml,
    route,
  };
}

export { ROUTES };
