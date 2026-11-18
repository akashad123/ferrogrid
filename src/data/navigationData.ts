export interface NavLink {
  label: string;
  href: string;
}

export interface MegaMenuItem {
  title: string;
  subtitle: string;
  href: string;
  thumb: string;
}

export const MAIN_NAV_LINKS: NavLink[] = [
  { label: 'About', href: 'about.html' },
  // Services has dropdown
  { label: 'Projects', href: 'projects.html' },
  { label: 'Ferrocement', href: 'ferrocement.html' },
  { label: 'Contact', href: 'contact.html' },
];

export const SERVICES_MEGA_ITEMS: MegaMenuItem[] = [
  {
    title: 'Swimming Pools',
    subtitle: 'Seamless curved ferrocement pools',
    href: 'service-swimming-pools.html',
    thumb: 'images/thumbs/svc-pools.webp',
  },
  {
    title: 'Resort Cottages',
    subtitle: 'Domes, pods & organic cottages',
    href: 'service-resort-cottages.html',
    thumb: 'images/thumbs/svc-cottages.webp',
  },
  {
    title: 'Eco-Friendly Huts',
    subtitle: 'Low-impact huts & glamping pods',
    href: 'service-eco-friendly-huts.html',
    thumb: 'images/thumbs/svc-eco.webp',
  },
  {
    title: 'Underground Houses',
    subtitle: 'Underground huts, cave houses & cellars',
    href: 'service-underground-houses.html',
    thumb: 'images/thumbs/svc-underground.webp',
  },
  {
    title: 'Farm Stay Buildings',
    subtitle: 'Rural buildings & cattle sheds',
    href: 'service-farm-stay-buildings.html',
    thumb: 'images/thumbs/svc-farm.webp',
  },
  {
    title: 'Water Features',
    subtitle: 'Waterfalls, grottos & rock art',
    href: 'service-water-features.html',
    thumb: 'images/thumbs/svc-water.webp',
  },
];

export const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61582757450039',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/ferrogrid?igsh=MTRocHRuejN2amh5ZQ==',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/117954017',
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@ferrogrid?si=_x-OYP4YnEzh6zjg',
  },
];

export const CONTACT_INFO = {
  phone: '062350 29900',
  phoneHref: 'tel:+916235029900',
  whatsappHref: 'https://wa.me/916235029900',
  email: 'info@ferrogrid.in',
  emailHref: 'mailto:info@ferrogrid.in',
  address: 'Anugraha Complex, SBM 15/1077, above SBI, Sultan Bathery, Keralam 673592',
  googleMap: 'https://share.google/7NXniVBUS8ZVzJ3dT',
  serviceAreas: 'Serving Kerala, Karnataka and Tamil Nadu — expanding pan-India and internationally.',
  workingHours: 'Mon — Sat, 9:00 AM to 5:00 PM (Closed Sundays)',
};
