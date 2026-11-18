export interface SeoMetadata {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  robots?: string;
  geoRegion?: string;
  geoPlacename?: string;
  geoPosition?: string;
  icbm?: string;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>> | null;
  bodyClass?: string;
  preloadImages?: Array<{
    href: string;
    media?: string;
    fetchpriority?: 'high' | 'low' | 'auto';
  }>;
}

export interface RouteDefinition {
  path: string; // e.g. "/" or "/about.html"
  file: string; // e.g. "index.html" or "about.html"
  name: string;
  seo: SeoMetadata;
  component: React.ComponentType;
}

export interface LightboxItem {
  src: string;
  alt: string;
  caption: string;
  srcset?: string;
}

declare module 'react' {
  interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    fetchpriority?: 'high' | 'low' | 'auto';
  }
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  slug: string; // e.g. "service-swimming-pools.html"
  thumb: string;
  heroImage: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'pools' | 'cottages' | 'underground' | 'farmstay' | 'waterfeature';
  categoryLabel: string;
  location: string;
  image: string;
  link?: string;
  description?: string;
  tag?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  projectType: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqGroup {
  id: string;
  title: string;
  icon?: string;
  items: FaqItem[];
}
