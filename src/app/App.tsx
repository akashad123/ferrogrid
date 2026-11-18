import React, { useState, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { getRouteByPath, ROUTES } from './routes';

interface AppProps {
  currentPath?: string;
}

export const App: React.FC<AppProps> = ({ currentPath }) => {
  const [pathname, setPathname] = useState<string>(() => {
    if (currentPath) return currentPath;
    if (typeof window !== 'undefined') return window.location.pathname;
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const route = getRouteByPath(pathname);
  const Component = route.component;

  return (
    <Layout>
      <Component />
    </Layout>
  );
};

export { ROUTES };
