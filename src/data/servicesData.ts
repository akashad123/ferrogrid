export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  thumb: string;
  heroImage: string;
  heroAlt: string;
  description: string;
  features: string[];
}

export const SERVICES: ServiceDetail[] = [
  {
    id: 'pools',
    slug: 'service-swimming-pools.html',
    title: 'Ferrocement Swimming Pools',
    shortTitle: 'Swimming Pools',
    tagline: 'Seamless curved ferrocement pools',
    thumb: 'images/thumbs/svc-pools.webp',
    heroImage: 'images/pools/infinity-pool-retreat.webp',
    heroAlt: 'Curved ferrocement swimming pool overlooking nature',
    description: 'A ferrocement swimming pool is a pool whose shell is built from layers of closely spaced steel wire mesh, filled and covered with rich cement mortar. The result is a thin, seamless and watertight shell that can follow almost any shape — freeform, kidney or infinity-edge — with fewer joints than a conventional concrete pool.',
    features: [
      'Seamless curved and freeform shapes without expensive formwork',
      'High tensile strength and superior crack resistance',
      'Dense mortar formulation provides natural impermeability',
      'Ideal for difficult terrain, slopes, and rocky soils',
    ],
  },
  {
    id: 'cottages',
    slug: 'service-resort-cottages.html',
    title: 'Resort Cottages & Dome Houses',
    shortTitle: 'Resort Cottages',
    tagline: 'Domes, pods & organic cottages',
    thumb: 'images/thumbs/svc-cottages.webp',
    heroImage: 'images/cottages/hillside-eco-cabins.webp',
    heroAlt: 'Hillside ferrocement eco cabins and dome cottages',
    description: 'Ferrocement resort cottages are guest rooms built as thin, curved shells of cement mortar over layers of steel mesh. Because the mesh can be shaped freely, cottages can be domes, caves, pods or organic forms with green roofs — giving a resort a signature look while staying durable, weather-resistant and economical to build.',
    features: [
      'Curved organic architecture that blends seamlessly with the natural landscape',
      'Green grass-covered roofs that provide natural thermal insulation',
      'Earthquake-resistant, monolithic shell structure',
      'Significantly lower material consumption than conventional RCC',
    ],
  },
  {
    id: 'eco-huts',
    slug: 'service-eco-friendly-huts.html',
    title: 'Eco-Friendly Huts & Glamping Pods',
    shortTitle: 'Eco-Friendly Huts',
    tagline: 'Low-impact huts & glamping pods',
    thumb: 'images/thumbs/svc-eco.webp',
    heroImage: 'images/hero1.webp',
    heroAlt: 'Grass-roofed eco-friendly ferrocement huts',
    description: 'Ferrocement huts are thin shells of cement mortar over steel mesh, so they use less cement and steel than conventional walls and roofs. They can be shaped into domes and earth-covered pods, topped with grass, and fitted onto slopes and forest sites — making them economical, durable and gentle on the land.',
    features: [
      'Minimal environmental footprint with reduced steel and cement usage',
      'Low thermal conductivity keeps interiors cool in summer and warm in winter',
      'Fast construction time and low site disturbance',
      'Perfect for eco-resorts, homestays, and forest retreats',
    ],
  },
  {
    id: 'underground',
    slug: 'service-underground-houses.html',
    title: 'Underground Houses & Cave Huts',
    shortTitle: 'Underground Houses',
    tagline: 'Underground huts, cave houses & cellars',
    thumb: 'images/thumbs/svc-underground.webp',
    heroImage: 'images/project/ferrocement-underground-cave-entrance.webp',
    heroAlt: 'Entrance to an earth-sheltered ferrocement cave house',
    description: 'Ferrocement is well suited to underground houses and cave huts because its curved, arched shells carry the weight of earth efficiently, and its dense, mesh-reinforced walls resist moisture. FERROGRID builds underground cave houses, earth-sheltered cottages, cellars and underground auditoriums for resorts and homestays.',
    features: [
      'Arched and vaulted shells distribute earth loads naturally',
      'Subterranean thermal mass maintains comfortable room temperatures year-round',
      'Watertight multi-layer barrier protects against soil moisture',
      'Unique Hobbit-style and cave-living guest experience',
    ],
  },
  {
    id: 'farm-stay',
    slug: 'service-farm-stay-buildings.html',
    title: 'Farm Stay Buildings & Cattle Sheds',
    shortTitle: 'Farm Stay Buildings',
    tagline: 'Rural buildings & cattle sheds',
    thumb: 'images/thumbs/svc-farm.webp',
    heroImage: 'images/farm/cow-house-left.webp',
    heroAlt: 'Ferrocement vaulted cattle shed and farm stay building',
    description: 'Ferrocement suits most farm and plantation buildings: farm stay guest cottages, vaulted cattle sheds, water storage tanks, rainwater harvesting systems and biogas plants. Its dense, mesh-reinforced shells stand up to monsoon rain and heat, need little maintenance and are economical to build.',
    features: [
      'Durable, rust-free, and termite-proof agricultural structures',
      'Ventilated vaulted roofs keep cattle sheds cool and dry',
      'Hygienic, smooth surfaces that are easy to wash and sanitize',
      'Economical construction with long service lifespan',
    ],
  },
  {
    id: 'water-features',
    slug: 'service-water-features.html',
    title: 'Water Features, Grottos & Rock Art',
    shortTitle: 'Water Features',
    tagline: 'Waterfalls, grottos & rock art',
    thumb: 'images/thumbs/svc-water.webp',
    heroImage: 'images/grotto/carved-stone-grotto.webp',
    heroAlt: 'Artfully carved ferrocement stone grotto and waterfall',
    description: 'Artificial waterfalls and rock grottos are built in ferrocement: a steel frame and wire mesh set the shape, then cement mortar is applied and hand-sculpted to look like natural rock. The basins are seamless and watertight, so water features hold water and weather naturally over time.',
    features: [
      'Hand-sculpted stone textures, rock formations, and naturalistic fissures',
      'Integrated pump chambers, plumbing channels, and LED lighting fixtures',
      'Monolithic leak-proof water catchment ponds and cascading pools',
      'Custom colors, moss-friendly textures, and realistic faux-rock finishes',
    ],
  },
];
