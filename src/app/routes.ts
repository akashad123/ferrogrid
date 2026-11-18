import { RouteDefinition } from '@/types';
import { seoData } from '@/data/seoData';

import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { FerrocementPage } from '@/pages/FerrocementPage';
import { ProcessPage } from '@/pages/ProcessPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { ServiceSwimmingPoolsPage } from '@/pages/ServiceSwimmingPoolsPage';
import { ServiceResortCottagesPage } from '@/pages/ServiceResortCottagesPage';
import { ServiceEcoFriendlyHutsPage } from '@/pages/ServiceEcoFriendlyHutsPage';
import { ServiceUndergroundHousesPage } from '@/pages/ServiceUndergroundHousesPage';
import { ServiceFarmStayBuildingsPage } from '@/pages/ServiceFarmStayBuildingsPage';
import { ServiceWaterFeaturesPage } from '@/pages/ServiceWaterFeaturesPage';
import { ProjectsPage } from '@/pages/ProjectsPage';
import { ProjectPulpallyPage } from '@/pages/ProjectPulpallyPage';
import { ProjectKakkadampoyilPage } from '@/pages/ProjectKakkadampoyilPage';
import { ContactPage } from '@/pages/ContactPage';
import { FaqPage } from '@/pages/FaqPage';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { TermsPage } from '@/pages/TermsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const ROUTES: RouteDefinition[] = [
  {
    path: '/',
    file: 'index.html',
    name: 'Home',
    seo: seoData['index.html'],
    component: HomePage,
  },
  {
    path: '/about.html',
    file: 'about.html',
    name: 'About',
    seo: seoData['about.html'],
    component: AboutPage,
  },
  {
    path: '/ferrocement.html',
    file: 'ferrocement.html',
    name: 'Ferrocement',
    seo: seoData['ferrocement.html'],
    component: FerrocementPage,
  },
  {
    path: '/process.html',
    file: 'process.html',
    name: 'Process',
    seo: seoData['process.html'],
    component: ProcessPage,
  },
  {
    path: '/services.html',
    file: 'services.html',
    name: 'Services',
    seo: seoData['services.html'],
    component: ServicesPage,
  },
  {
    path: '/service-swimming-pools.html',
    file: 'service-swimming-pools.html',
    name: 'Swimming Pools',
    seo: seoData['service-swimming-pools.html'],
    component: ServiceSwimmingPoolsPage,
  },
  {
    path: '/service-resort-cottages.html',
    file: 'service-resort-cottages.html',
    name: 'Resort Cottages',
    seo: seoData['service-resort-cottages.html'],
    component: ServiceResortCottagesPage,
  },
  {
    path: '/service-eco-friendly-huts.html',
    file: 'service-eco-friendly-huts.html',
    name: 'Eco-Friendly Huts',
    seo: seoData['service-eco-friendly-huts.html'],
    component: ServiceEcoFriendlyHutsPage,
  },
  {
    path: '/service-underground-houses.html',
    file: 'service-underground-houses.html',
    name: 'Underground Houses',
    seo: seoData['service-underground-houses.html'],
    component: ServiceUndergroundHousesPage,
  },
  {
    path: '/service-farm-stay-buildings.html',
    file: 'service-farm-stay-buildings.html',
    name: 'Farm Stay Buildings',
    seo: seoData['service-farm-stay-buildings.html'],
    component: ServiceFarmStayBuildingsPage,
  },
  {
    path: '/service-water-features.html',
    file: 'service-water-features.html',
    name: 'Water Features',
    seo: seoData['service-water-features.html'],
    component: ServiceWaterFeaturesPage,
  },
  {
    path: '/projects.html',
    file: 'projects.html',
    name: 'Projects',
    seo: seoData['projects.html'],
    component: ProjectsPage,
  },
  {
    path: '/project-pulpally.html',
    file: 'project-pulpally.html',
    name: 'Pulpally Resort',
    seo: seoData['project-pulpally.html'],
    component: ProjectPulpallyPage,
  },
  {
    path: '/project-kakkadampoyil.html',
    file: 'project-kakkadampoyil.html',
    name: 'Kakkadampoyil Retreat',
    seo: seoData['project-kakkadampoyil.html'],
    component: ProjectKakkadampoyilPage,
  },
  {
    path: '/contact.html',
    file: 'contact.html',
    name: 'Contact',
    seo: seoData['contact.html'],
    component: ContactPage,
  },
  {
    path: '/faq.html',
    file: 'faq.html',
    name: 'FAQ',
    seo: seoData['faq.html'],
    component: FaqPage,
  },
  {
    path: '/privacy.html',
    file: 'privacy.html',
    name: 'Privacy',
    seo: seoData['privacy.html'],
    component: PrivacyPage,
  },
  {
    path: '/terms.html',
    file: 'terms.html',
    name: 'Terms',
    seo: seoData['terms.html'],
    component: TermsPage,
  },
  {
    path: '/404.html',
    file: '404.html',
    name: 'NotFound',
    seo: seoData['404.html'],
    component: NotFoundPage,
  },
];

/**
 * Resolves the matching route from a URL pathname.
 */
export function getRouteByPath(pathname: string): RouteDefinition {
  // Normalize pathname: remove query string, hash, trailing slashes (except root)
  let clean = pathname.split('?')[0].split('#')[0];
  if (clean.length > 1 && clean.endsWith('/')) {
    clean = clean.slice(0, -1);
  }

  // Exact match on path or file
  const matched = ROUTES.find((r) => {
    if (r.path === clean) return true;
    if (`/${r.file}` === clean) return true;
    if (clean === '/index.html' && r.path === '/') return true;
    return false;
  });

  if (matched) return matched;

  // Fallback to 404
  return ROUTES.find((r) => r.file === '404.html') || ROUTES[0];
}
