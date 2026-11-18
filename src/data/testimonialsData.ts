export interface Testimonial {
  id: string;
  tag: string;
  quote: string;
  author: string;
  initials: string;
  location: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    tag: 'Pool & 4 cottages',
    quote: 'FERROGRID built our pool and four cottages in about three months. The work is neat, and guests often ask us how the curved cottages were made.',
    author: 'Ramdarsh M S',
    initials: 'RM',
    location: 'Wayanad',
  },
  {
    id: '2',
    tag: 'Swimming pool',
    quote: 'We spoke to a few contractors before choosing FERROGRID. Their quote was lower, and the pool was handed over before the date they gave us.',
    author: 'Aleena Thomas',
    initials: 'AT',
    location: 'Thrissur',
  },
  {
    id: '3',
    tag: 'Underground cellar',
    quote: 'Our underground cellar has curved walls and a finish we couldn\'t get with normal concrete. The team explained each step before they started.',
    author: 'Rajesh',
    initials: 'R',
    location: 'Pulpally',
  },
];
