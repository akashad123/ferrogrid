// Auto-generated data for Service Detail Pages preserving exact content & markup
export interface ServicePageData {
  slug: string;
  breadcrumbTitle: string;
  title: string;
  heroDesc: string;
  heroImg: {
    src: string;
    srcset?: string;
    alt: string;
    width: number;
    height: number;
  };
  filterParam: string;
  answerBox: {
    title: string;
    text: string;
    linkHref: string;
    linkText: string;
  } | null;
  overview: {
    title: string;
    leadText: string;
    paragraphs: string[];
  };
  benefits: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  features: {
    title: string;
    items: string[];
    chips: string[];
    imgSrc: string;
    imgAlt: string;
    width: number;
    height: number;
  } | null;
  gallery: Array<{
    src: string;
    srcset?: string;
    alt: string;
    caption: string;
    width?: number;
    height?: number;
  }>;
  galleryCountClass: string;
  relatedProjectTitles: string[];
  faqs: Array<{
    q: string;
    a: string;
  }>;
}

export const SERVICE_PAGES_DATA: Record<string, ServicePageData> = {
  "service-swimming-pools.html": {
    "slug": "service-swimming-pools.html",
    "breadcrumbTitle": "Swimming Pools",
    "title": "Swimming Pools",
    "heroDesc": "Freeform, infinity-edge and courtyard pools shaped in ferrocement — seamless, watertight and built to suit the land around them.",
    "heroImg": {
      "src": "images/pools/infinity-pool-retreat.webp",
      "srcset": "images/pools/infinity-pool-retreat-800w.webp 800w, images/pools/infinity-pool-retreat.webp 1400w",
      "alt": "Ferrocement infinity-edge swimming pool overlooking tropical hills",
      "width": 1400,
      "height": 788
    },
    "filterParam": "pools",
    "answerBox": {
      "title": "What is a ferrocement swimming pool?",
      "text": "A ferrocement swimming pool is a pool whose shell is built from layers of closely spaced steel wire mesh, filled and covered with rich cement mortar. The result is a thin, seamless and watertight shell that can follow almost any shape — freeform, kidney or infinity-edge — with fewer joints than a conventional concrete pool.",
      "linkHref": "ferrocement.html",
      "linkText": "How ferrocement is made &rarr;"
    },
    "overview": {
      "title": "Pools shaped around your site",
      "leadText": "Ferrocement lets us build a pool shell as one continuous, thin and strong surface. Without the limits of box formwork, a pool can follow natural curves, wrap around rocks and trees, or finish in a crisp infinity edge over a valley view.",
      "paragraphs": [
        "From resort centrepieces to private plunge pools, we handle the structure, the waterproof shell and the finishing — mosaic tiling, steps, seating ledges and decks — as one team."
      ]
    },
    "benefits": [
      {
        "icon": "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z\" /></svg>",
        "title": "Seamless shell",
        "description": "One continuous ferrocement surface with fewer joints for water to find."
      },
      {
        "icon": "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M3 20c0-8 4-14 9-14s9 6 9 14\" /><path d=\"M8 20c0-5 2-9 4-9s4 4 4 9\" /></svg>",
        "title": "Any shape",
        "description": "Freeform, kidney, infinity-edge or geometric — the mesh is shaped to your design."
      },
      {
        "icon": "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z\" /><path d=\"M9 12l2 2 4-4\" /></svg>",
        "title": "Strong &amp; watertight",
        "description": "Closely spaced steel mesh gives a dense, crack-resistant shell."
      },
      {
        "icon": "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"9\" /><path d=\"M12 7v5l3 2\" /></svg>",
        "title": "Built to last",
        "description": "Ferrocement pools built for 50+ years of durability with routine care."
      }
    ],
    "features": {
      "title": "Pools for every setting",
      "items": [
        "Infinity-edge pools",
        "Freeform &amp; natural pools",
        "Courtyard &amp; mosaic-tile pools",
        "Plunge pools beside cottages",
        "Built-in steps, ledges &amp; seating",
        "Pool decks &amp; surrounds"
      ],
      "chips": [
        "Resorts",
        "Homestays",
        "Private villas",
        "Farm stays",
        "Eco-retreats"
      ],
      "imgSrc": "images/pools/garden-pool-retreat.webp",
      "imgAlt": "Swimming Pools built by FERROGRID",
      "width": 1050,
      "height": 1400
    },
    "gallery": [
      {
        "src": "images/pools/infinity-pool-retreat.webp",
        "alt": "Infinity-edge resort pool",
        "srcset": "images/pools/infinity-pool-retreat-800w.webp 800w, images/pools/infinity-pool-retreat.webp 1400w",
        "caption": "Infinity-edge resort pool",
        "width": 1400,
        "height": 788
      },
      {
        "src": "images/pools/garden-pool-retreat.webp",
        "alt": "Freeform garden pool",
        "caption": "Freeform garden pool",
        "width": 1050,
        "height": 1400
      },
      {
        "src": "images/pools/mosaic-tile-pool.webp",
        "alt": "Mosaic-tile courtyard pool",
        "caption": "Mosaic-tile courtyard pool",
        "width": 1050,
        "height": 1400
      },
      {
        "src": "images/pools/pool-tiling-progress.webp",
        "alt": "Tiling with built-in steps",
        "srcset": "images/pools/pool-tiling-progress-800w.webp 800w, images/pools/pool-tiling-progress.webp 1400w",
        "caption": "Tiling with built-in steps",
        "width": 1400,
        "height": 1050
      },
      {
        "src": "images/pools/freeform-pool-shell.webp",
        "alt": "Freeform shell stage",
        "srcset": "images/pools/freeform-pool-shell-800w.webp 800w, images/pools/freeform-pool-shell.webp 1400w",
        "caption": "Freeform shell stage",
        "width": 1400,
        "height": 1050
      },
      {
        "src": "images/kakkadampoyil/pool-and-cottage.webp",
        "alt": "Valley-view pool, Kakkadampoyil",
        "srcset": "images/kakkadampoyil/pool-and-cottage-800w.webp 800w, images/kakkadampoyil/pool-and-cottage.webp 1400w",
        "caption": "Valley-view pool, Kakkadampoyil",
        "width": 1400,
        "height": 1050
      }
    ],
    "galleryCountClass": "count-6",
    "relatedProjectTitles": [
      "Resort Pool",
      "Garden Pool Retreat",
      "Kakkadampoyil Valley-View Pool"
    ],
    "faqs": [
      {
        "q": "Can a ferrocement pool be built in any shape?",
        "a": "Yes. Because the shell is formed over shaped steel mesh, we can build freeform, curved, infinity-edge or geometric pools. We finalise the shape with you during the design stage."
      },
      {
        "q": "How long does it take to build a pool?",
        "a": "It depends on the size, site access and the finishes you choose. We give you a clear timeline after the site visit and design stage."
      },
      {
        "q": "Do you also handle tiling and the pool deck?",
        "a": "Yes. We can take care of the shell, tiling, steps, ledges and the surrounding deck as one package."
      },
      {
        "q": "How much does a ferrocement swimming pool cost?",
        "a": "There is no fixed price — every project is priced individually. The cost depends on your land (slope, soil and access), the type and size of the structure, and the finishes you choose. Share your site details for a free consultation and a quote."
      }
    ]
  },
  "service-resort-cottages.html": {
    "slug": "service-resort-cottages.html",
    "breadcrumbTitle": "Resort Cottages",
    "title": "Resort Cottages",
    "heroDesc": "Distinctive ferrocement cottages — domes, curved shells, cave-style and hillside pods — that give your resort a signature guests remember.",
    "heroImg": {
      "src": "images/cottages/hillside-eco-cabins.webp",
      "srcset": "images/cottages/hillside-eco-cabins-800w.webp 800w, images/cottages/hillside-eco-cabins.webp 1400w",
      "alt": "Hillside resort cottages with arched ferrocement pods",
      "width": 1400,
      "height": 1032
    },
    "filterParam": "cottages",
    "answerBox": {
      "title": "What are ferrocement resort cottages?",
      "text": "Ferrocement resort cottages are guest rooms built as thin, curved shells of cement mortar over layers of steel mesh. Because the mesh can be shaped freely, cottages can be domes, caves, pods or organic forms with green roofs — giving a resort a signature look while staying durable, weather-resistant and economical to build.",
      "linkHref": "ferrocement.html",
      "linkText": "How ferrocement is made &rarr;"
    },
    "overview": {
      "title": "Cottages guests talk about",
      "leadText": "Ferrocement frees cottage design from straight walls and flat roofs. We build curved shells, domes and earth-sheltered pods that sit naturally in the landscape and feel unique inside.",
      "paragraphs": [
        "Each cottage is planned around your site, your guests and your budget — from a single feature cottage to a full resort village like our Pulpally and Kakkadampoyil projects."
      ]
    },
    "benefits": [
      {
        "icon": "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6l-5.4 2.9 1.2-6-4.5-4.2 6.1-.7z\" /></svg>",
        "title": "Signature design",
        "description": "Organic forms that make every stay memorable and photogenic."
      },
      {
        "icon": "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0z\" /></svg>",
        "title": "Comfortable interiors",
        "description": "Curved shells and earth or green-roof cover help keep rooms cool."
      },
      {
        "icon": "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M6 9h12l2 11H4L6 9z\" /><path d=\"M9 9a3 3 0 0 1 6 0\" /></svg>",
        "title": "Lightweight &amp; efficient",
        "description": "Thin shells use less material than conventional walls and roofs."
      },
      {
        "icon": "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M20 15a4 4 0 0 0-1-7.9A6 6 0 0 0 7.1 9 4 4 0 0 0 7 17h11\" /><path d=\"M8 20l1-2M12 21l1-2M16 20l1-2\" /></svg>",
        "title": "Made for the climate",
        "description": "Dense, weather-resistant ferrocement suited to heavy monsoons."
      }
    ],
    "features": {
      "title": "Cottage styles we build",
      "items": [
        "Dome cottages",
        "Earth-sheltered &amp; green-roof pods",
        "Cave-style cottages",
        "Pillar &amp; stilt cottages",
        "A-frame &amp; semi-A-frame cabins",
        "Treehouses"
      ],
      "chips": [
        "Eco-resorts",
        "Homestays",
        "Boutique hotels",
        "Glamping sites",
        "Hill-station retreats"
      ],
      "imgSrc": "images/project/hillside-ferrocement-cave-cottages.webp",
      "imgAlt": "Resort Cottages built by FERROGRID",
      "width": 1448,
      "height": 1086
    },
    "gallery": [
      {
        "src": "images/pulpally/domes-aerial.webp",
        "alt": "Pulpally Resort eco-domes",
        "srcset": "images/pulpally/domes-aerial-800w.webp 800w, images/pulpally/domes-aerial.webp 1600w",
        "caption": "Pulpally Resort eco-domes",
        "width": 1600,
        "height": 1200
      },
      {
        "src": "images/kakkadampoyil/earth-sheltered-retreat.webp",
        "alt": "Earth-sheltered cottages, Kakkadampoyil",
        "caption": "Earth-sheltered cottages, Kakkadampoyil",
        "width": 1050,
        "height": 1400
      },
      {
        "src": "images/project/stilt-cottages-ferrocement-pods.webp",
        "alt": "Stilt cottages beside a resort pond",
        "srcset": "images/project/stilt-cottages-ferrocement-pods-800w.webp 800w, images/project/stilt-cottages-ferrocement-pods.webp 1672w",
        "caption": "Stilt cottages beside a resort pond",
        "width": 1672,
        "height": 941
      },
      {
        "src": "images/project/hillside-ferrocement-cave-cottages.webp",
        "alt": "Hillside cave cottages",
        "srcset": "images/project/hillside-ferrocement-cave-cottages-800w.webp 800w, images/project/hillside-ferrocement-cave-cottages.webp 1448w",
        "caption": "Hillside cave cottages",
        "width": 1448,
        "height": 1086
      },
      {
        "src": "images/cottages/a-frame-cabin.webp",
        "alt": "Tropical A-frame cabin",
        "caption": "Tropical A-frame cabin",
        "width": 1050,
        "height": 1400
      },
      {
        "src": "images/project/sculpted-cave-cottages-ferrocement.webp",
        "alt": "Sculpted cave cottages",
        "srcset": "images/project/sculpted-cave-cottages-ferrocement-800w.webp 800w, images/project/sculpted-cave-cottages-ferrocement.webp 1586w",
        "caption": "Sculpted cave cottages",
        "width": 1586,
        "height": 992
      }
    ],
    "galleryCountClass": "count-6",
    "relatedProjectTitles": [
      "Pulpally Resort",
      "Kakkadampoyil Earth-Sheltered Retreat",
      "Hillside Eco-Cabins"
    ],
    "faqs": [
      {
        "q": "Can you build a complete resort village?",
        "a": "Yes. We are currently building multi-cottage projects at Pulpally and Kakkadampoyil, covering cottages, pods and pools on the same site."
      },
      {
        "q": "Are curved cottages comfortable to stay in?",
        "a": "Yes. Curved ferrocement shells, especially with earth or green-roof cover, help keep interiors comfortable. We plan windows, ventilation and finishes with you."
      },
      {
        "q": "Do you provide the design as well?",
        "a": "Yes. Our design and planning stage includes custom designs, layouts and detailed 3D renderings."
      },
      {
        "q": "How much does a ferrocement cottage cost?",
        "a": "There is no fixed price — every project is priced individually. The cost depends on your land (slope, soil and access), the type and size of the structure, and the finishes you choose. Share your site details for a free consultation and a quote."
      }
    ]
  },
  "service-eco-friendly-huts.html": {
    "slug": "service-eco-friendly-huts.html",
    "breadcrumbTitle": "Eco-Friendly Huts",
    "title": "Eco-Friendly Huts",
    "heroDesc": "Low-impact huts, domes and glamping pods that blend into nature — economical to build and gentle on the land.",
    "heroImg": {
      "src": "images/hero1.webp",
      "srcset": "images/hero1-800w.webp 800w, images/hero1.webp 1448w",
      "alt": "Grass-covered ferrocement eco-dome with a round doorway",
      "width": 1448,
      "height": 1086
    },
    "filterParam": "cottages",
    "answerBox": {
      "title": "Why build eco-friendly huts in ferrocement?",
      "text": "Ferrocement huts are thin shells of cement mortar over steel mesh, so they use less cement and steel than conventional walls and roofs. They can be shaped into domes and earth-covered pods, topped with grass, and fitted onto slopes and forest sites — making them economical, durable and gentle on the land.",
      "linkHref": "ferrocement.html",
      "linkText": "How ferrocement is made &rarr;"
    },
    "overview": {
      "title": "Small footprint, big character",
      "leadText": "Ferrocement is a thin shell of cement mortar over steel mesh, so huts need less material than conventional walls and roofs. That makes them economical to build and easy to fit into hilly, forested or sensitive sites.",
      "paragraphs": [
        "We build mud-packed eco-houses, green-roof domes and earth-covered pods for eco-tourism, farm stays and glamping retreats."
      ]
    },
    "benefits": [
      {
        "icon": "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 19c0-8 6-14 14-14 0 8-6 14-14 14z\" /><path d=\"M5 19l8-8\" /></svg>",
        "title": "Less material",
        "description": "Thin shells use less cement and steel than conventional construction."
      },
      {
        "icon": "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M3 20l6-10 4 6 3-4 5 8H3z\" /></svg>",
        "title": "Fits any terrain",
        "description": "Works on slopes, hilltops and forest clearings."
      },
      {
        "icon": "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"6\" width=\"18\" height=\"13\" rx=\"2\" /><path d=\"M3 10h18M16 14.5h2\" /></svg>",
        "title": "Economical",
        "description": "Lightweight, efficient designs that make the most of your budget."
      },
      {
        "icon": "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"4\" /><path d=\"M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4\" /></svg>",
        "title": "Blends with nature",
        "description": "Earth tones, curves and green roofs that sit lightly on the land."
      }
    ],
    "features": {
      "title": "Eco structures we build",
      "items": [
        "Green-roof domes",
        "Mud-packed eco-houses",
        "Glamping pods",
        "Earth-covered cabins",
        "Rainwater harvesting systems",
        "Biogas plants"
      ],
      "chips": [
        "Eco-tourism",
        "Glamping",
        "Farm stays",
        "Nature retreats",
        "Plantations"
      ],
      "imgSrc": "images/kakkadampoyil/grassy-mound-habitat.webp",
      "imgAlt": "Eco-Friendly Huts built by FERROGRID",
      "width": 1050,
      "height": 1400
    },
    "gallery": [
      {
        "src": "images/kakkadampoyil/organic-dome-house.webp",
        "alt": "Organic dome house",
        "caption": "Organic dome house",
        "width": 1050,
        "height": 1400
      },
      {
        "src": "images/kakkadampoyil/grassy-mound-habitat.webp",
        "alt": "Grass-covered mound with arched entrances",
        "caption": "Grass-covered mound with arched entrances",
        "width": 1050,
        "height": 1400
      },
      {
        "src": "images/cottages/green-roof-vista.webp",
        "alt": "Green-roof cabin on a hilltop",
        "srcset": "images/cottages/green-roof-vista-800w.webp 800w, images/cottages/green-roof-vista.webp 1400w",
        "caption": "Green-roof cabin on a hilltop",
        "width": 1400,
        "height": 1050
      },
      {
        "src": "images/cottages/hobbit-earth-house.webp",
        "alt": "Earth house with porthole windows",
        "srcset": "images/cottages/hobbit-earth-house-800w.webp 800w, images/cottages/hobbit-earth-house.webp 1400w",
        "caption": "Earth house with porthole windows",
        "width": 1400,
        "height": 1050
      },
      {
        "src": "images/pulpally/green-roof-earthworks.webp",
        "alt": "Green-roofed domes, Pulpally",
        "caption": "Green-roofed domes, Pulpally",
        "width": 1050,
        "height": 1400
      }
    ],
    "galleryCountClass": "count-5",
    "relatedProjectTitles": [
      "Green-Roof Earth Cabin",
      "Hobbit-Style Earth House",
      "Pulpally Resort"
    ],
    "faqs": [
      {
        "q": "What makes ferrocement eco-friendly?",
        "a": "Thin shells use less cement and steel than conventional construction, and domes or earth-sheltered forms can be covered with soil and grass to blend into the landscape."
      },
      {
        "q": "Can eco-huts include water and energy-saving features?",
        "a": "Yes. We also build rainwater harvesting systems, water storage tanks and biogas plants that can be planned alongside your huts."
      },
      {
        "q": "Do you build on slopes and remote sites?",
        "a": "Yes. Our own trucks, backhoe and goods carriers help us move materials to remote and hillside sites."
      },
      {
        "q": "How much does an eco-friendly hut cost?",
        "a": "There is no fixed price — every project is priced individually. The cost depends on your land (slope, soil and access), the type and size of the structure, and the finishes you choose. Share your site details for a free consultation and a quote."
      }
    ]
  },
  "service-underground-houses.html": {
    "slug": "service-underground-houses.html",
    "breadcrumbTitle": "Underground Houses",
    "title": "Underground Houses",
    "heroDesc": "Underground houses, cave huts, cellars, bunkers and underground auditoriums — strong, waterproof ferrocement spaces built into the earth.",
    "heroImg": {
      "src": "images/project/ferrocement-underground-cave-entrance.webp",
      "srcset": "images/project/ferrocement-underground-cave-entrance-800w.webp 800w, images/project/ferrocement-underground-cave-entrance.webp 1448w",
      "alt": "Sculpted ferrocement entrance to an underground cave space",
      "width": 1448,
      "height": 1086
    },
    "filterParam": "underground",
    "answerBox": {
      "title": "Can you build an underground house with ferrocement?",
      "text": "Yes. Ferrocement is well suited to underground houses and cave huts because its curved, arched shells carry the weight of earth efficiently, and its dense, mesh-reinforced walls resist moisture. FERROGRID builds underground cave houses, earth-sheltered cottages, cellars and underground auditoriums for resorts and homestays.",
      "linkHref": "ferrocement.html",
      "linkText": "How ferrocement is made &rarr;"
    },
    "overview": {
      "title": "Spaces built into the earth",
      "leadText": "Ferrocement’s curved, arched shells carry earth loads efficiently, which makes them well suited to underground and earth-sheltered spaces. Dense, mesh-reinforced walls help keep moisture out.",
      "paragraphs": [
        "We have built underground houses and cave huts, earth-sheltered cottages, cellars and storage spaces, as well as underground DJ and multipurpose auditoriums for resorts and homestays."
      ]
    },
    "benefits": [
      {
        "icon": "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M3 20c0-8 4-14 9-14s9 6 9 14\" /><path d=\"M8 20c0-5 2-9 4-9s4 4 4 9\" /></svg>",
        "title": "Strong arched shells",
        "description": "Curved forms that carry the weight of earth above them."
      },
      {
        "icon": "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z\" /></svg>",
        "title": "Waterproof walls",
        "description": "Dense, mesh-reinforced ferrocement that resists moisture."
      },
      {
        "icon": "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0z\" /></svg>",
        "title": "Naturally insulated",
        "description": "Earth cover keeps indoor temperatures steadier."
      },
      {
        "icon": "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6l-5.4 2.9 1.2-6-4.5-4.2 6.1-.7z\" /></svg>",
        "title": "A unique experience",
        "description": "Spaces guests and owners will not find anywhere else."
      }
    ],
    "features": {
      "title": "Underground spaces we build",
      "items": [
        "Underground houses &amp; cave huts",
        "Wine cellars &amp; storage units",
        "Waterproof bunkers",
        "Underground DJ &amp; multipurpose auditoriums",
        "Earth-sheltered cottages",
        "Tunnel entrances &amp; passages"
      ],
      "chips": [
        "Resorts",
        "Private estates",
        "Event venues",
        "Homestays",
        "Farm stays"
      ],
      "imgSrc": "images/cottages/hobbit-earth-house.webp",
      "imgAlt": "Underground Houses built by FERROGRID",
      "width": 1400,
      "height": 1050
    },
    "gallery": [
      {
        "src": "images/project/ferrocement-underground-cave-entrance.webp",
        "alt": "Underground cave entrance",
        "srcset": "images/project/ferrocement-underground-cave-entrance-800w.webp 800w, images/project/ferrocement-underground-cave-entrance.webp 1448w",
        "caption": "Underground cave entrance",
        "width": 1448,
        "height": 1086
      },
      {
        "src": "images/project/earth-covered-ferrocement-huts.webp",
        "alt": "Earth-covered huts with sculpted steps",
        "srcset": "images/project/earth-covered-ferrocement-huts-800w.webp 800w, images/project/earth-covered-ferrocement-huts.webp 1436w",
        "caption": "Earth-covered huts with sculpted steps",
        "width": 1436,
        "height": 1095
      },
      {
        "src": "images/cottages/green-roof-vista.webp",
        "alt": "Earth-sheltered hilltop cabin",
        "srcset": "images/cottages/green-roof-vista-800w.webp 800w, images/cottages/green-roof-vista.webp 1400w",
        "caption": "Earth-sheltered hilltop cabin",
        "width": 1400,
        "height": 1050
      },
      {
        "src": "images/cottages/tunnel-construction.webp",
        "alt": "Arched tunnel pods under construction",
        "srcset": "images/cottages/tunnel-construction-800w.webp 800w, images/cottages/tunnel-construction.webp 1400w",
        "caption": "Arched tunnel pods under construction",
        "width": 1400,
        "height": 788
      },
      {
        "src": "images/kakkadampoyil/grassy-mound-habitat.webp",
        "alt": "Grass-covered underground pods",
        "caption": "Grass-covered underground pods",
        "width": 1050,
        "height": 1400
      }
    ],
    "galleryCountClass": "count-5",
    "relatedProjectTitles": [
      "Heritage Underground Cave",
      "Underground Cave Hut",
      "Hobbit-Style Earth House"
    ],
    "faqs": [
      {
        "q": "How do you keep underground spaces dry?",
        "a": "We build dense, mesh-reinforced ferrocement walls and plan waterproofing and drainage around the structure to suit your site conditions."
      },
      {
        "q": "Can underground spaces be used as rooms or event halls?",
        "a": "Yes. We have built underground cave houses and underground DJ / multipurpose auditoriums for resorts and homestays."
      },
      {
        "q": "Is a site visit needed first?",
        "a": "Yes. Soil, slope and water conditions matter for underground work, so our team assesses the site before the design is finalised."
      },
      {
        "q": "How much does an underground house cost?",
        "a": "There is no fixed price — every project is priced individually. The cost depends on your land (slope, soil and access), the type and size of the structure, and the finishes you choose. Share your site details for a free consultation and a quote."
      }
    ]
  },
  "service-farm-stay-buildings.html": {
    "slug": "service-farm-stay-buildings.html",
    "breadcrumbTitle": "Farm Stay Buildings",
    "title": "Farm Stay Buildings",
    "heroDesc": "Weather-resistant ferrocement buildings for farm stays, plantations and rural properties — from guest cottages to vaulted cattle sheds.",
    "heroImg": {
      "src": "images/farm/cow-house-left.webp",
      "srcset": "images/farm/cow-house-left-800w.webp 800w, images/farm/cow-house-left.webp 1400w",
      "alt": "Long vaulted ferrocement farm building among coconut palms",
      "width": 1400,
      "height": 1050
    },
    "filterParam": "farmstay",
    "answerBox": {
      "title": "What farm buildings can be built in ferrocement?",
      "text": "Ferrocement suits most farm and plantation buildings: farm stay guest cottages, vaulted cattle sheds, water storage tanks, rainwater harvesting systems and biogas plants. Its dense, mesh-reinforced shells stand up to monsoon rain and heat, need little maintenance and are economical to build.",
      "linkHref": "ferrocement.html",
      "linkText": "How ferrocement is made &rarr;"
    },
    "overview": {
      "title": "Built for rural life",
      "leadText": "Farm and plantation properties need buildings that stand up to heavy rain, heat and everyday use. Ferrocement’s mesh-reinforced shells are durable, low-maintenance and economical to build.",
      "paragraphs": [
        "We build guest buildings for agricultural tourism alongside practical structures such as vaulted cattle sheds, water storage tanks and biogas plants."
      ]
    },
    "benefits": [
      {
        "icon": "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M20 15a4 4 0 0 0-1-7.9A6 6 0 0 0 7.1 9 4 4 0 0 0 7 17h11\" /><path d=\"M8 20l1-2M12 21l1-2M16 20l1-2\" /></svg>",
        "title": "Weather-resistant",
        "description": "Dense shells that stand up to monsoon rain and tropical heat."
      },
      {
        "icon": "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.8 3.8z\" /></svg>",
        "title": "Low maintenance",
        "description": "Durable surfaces that need little upkeep year after year."
      },
      {
        "icon": "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"6\" width=\"18\" height=\"13\" rx=\"2\" /><path d=\"M3 10h18M16 14.5h2\" /></svg>",
        "title": "Economical",
        "description": "Efficient use of material keeps farm buildings affordable."
      },
      {
        "icon": "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z\" /></svg>",
        "title": "Practical &amp; hygienic",
        "description": "Smooth, easy-to-wash surfaces for animal and storage buildings."
      }
    ],
    "features": {
      "title": "Farm &amp; rural structures",
      "items": [
        "Farm stay guest cottages",
        "Vaulted cattle sheds",
        "Water storage tanks",
        "Rainwater harvesting systems",
        "Biogas plants",
        "Designed compound walls"
      ],
      "chips": [
        "Farm stays",
        "Plantations",
        "Dairy farms",
        "Agri-tourism",
        "Rural homes"
      ],
      "imgSrc": "images/farm/cow-house-side.webp",
      "imgAlt": "Farm Stay Buildings built by FERROGRID",
      "width": 1400,
      "height": 1050
    },
    "gallery": [
      {
        "src": "images/farm/cow-house-left.webp",
        "alt": "Vaulted cattle shed",
        "srcset": "images/farm/cow-house-left-800w.webp 800w, images/farm/cow-house-left.webp 1400w",
        "caption": "Vaulted cattle shed",
        "width": 1400,
        "height": 1050
      },
      {
        "src": "images/farm/cow-house-side.webp",
        "alt": "Arched ventilation windows",
        "srcset": "images/farm/cow-house-side-800w.webp 800w, images/farm/cow-house-side.webp 1400w",
        "caption": "Arched ventilation windows",
        "width": 1400,
        "height": 1050
      },
      {
        "src": "images/farm/cow-house-inside.webp",
        "alt": "Easy-wash vaulted interior",
        "srcset": "images/farm/cow-house-inside-800w.webp 800w, images/farm/cow-house-inside.webp 1400w",
        "caption": "Easy-wash vaulted interior",
        "width": 1400,
        "height": 1050
      }
    ],
    "galleryCountClass": "count-3",
    "relatedProjectTitles": [
      "Vaulted Cattle Shed",
      "Wayanad Farm Villa Structure",
      "Hillside Eco-Cabins"
    ],
    "faqs": [
      {
        "q": "Can you build cattle sheds and farm structures?",
        "a": "Yes. We build vaulted ferrocement cattle sheds with arched ventilation windows and easy-to-clean floors, along with water storage tanks and biogas plants."
      },
      {
        "q": "Are ferrocement buildings suitable for heavy monsoon areas?",
        "a": "Yes. Dense ferrocement shells are weather-resistant, and we plan roof shapes, drainage and finishes for local rainfall."
      },
      {
        "q": "How much does a ferrocement farm building cost?",
        "a": "There is no fixed price — every project is priced individually. The cost depends on your land (slope, soil and access), the type and size of the structure, and the finishes you choose. Share your site details for a free consultation and a quote."
      }
    ]
  },
  "service-water-features.html": {
    "slug": "service-water-features.html",
    "breadcrumbTitle": "Water Features",
    "title": "Water Features",
    "heroDesc": "Waterfalls, grottos, ponds and sculpted rock features — hand-crafted in ferrocement to bring your landscape to life.",
    "heroImg": {
      "src": "images/grotto/carved-stone-grotto.webp",
      "srcset": "images/grotto/carved-stone-grotto-800w.webp 800w, images/grotto/carved-stone-grotto.webp 1400w",
      "alt": "Carved ferrocement rock grotto with stone pillars and a timber door",
      "width": 1400,
      "height": 788
    },
    "filterParam": "waterfeature",
    "answerBox": {
      "title": "How are artificial waterfalls and rock grottos made?",
      "text": "Artificial waterfalls and rock grottos are built in ferrocement: a steel frame and wire mesh set the shape, then cement mortar is applied and hand-sculpted to look like natural rock. The basins are seamless and watertight, so water features hold water and weather naturally over time.",
      "linkHref": "ferrocement.html",
      "linkText": "How ferrocement is made &rarr;"
    },
    "overview": {
      "title": "Nature, sculpted by hand",
      "leadText": "Ferrocement can be shaped and textured to look like natural rock, which makes it ideal for waterfalls, grottos, ponds and fountains. Every feature is sculpted by hand on site.",
      "paragraphs": [
        "We also create artistic rock work — carved grotto entrances, cave interiors, landscaped steps and feature walls — that become signature spots in resorts and gardens."
      ]
    },
    "benefits": [
      {
        "icon": "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M18.4 2.6a2 2 0 0 1 2.9 2.9L12 14.8 9.2 12z\" /><path d=\"M7 14c-2 0-3 1.5-3 3 0 1.5-1 2.5-2 3 3 1 7 0 7-3a3 3 0 0 0-2-3z\" /></svg>",
        "title": "Realistic rock finish",
        "description": "Hand-sculpted textures that look like natural stone."
      },
      {
        "icon": "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z\" /></svg>",
        "title": "Watertight basins",
        "description": "Seamless ferrocement pools and channels that hold water."
      },
      {
        "icon": "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M3 20c0-8 4-14 9-14s9 6 9 14\" /><path d=\"M8 20c0-5 2-9 4-9s4 4 4 9\" /></svg>",
        "title": "Made for your landscape",
        "description": "Every feature is shaped to fit its setting."
      },
      {
        "icon": "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.8 3.8z\" /></svg>",
        "title": "Low maintenance",
        "description": "Durable surfaces that weather naturally over time."
      }
    ],
    "features": {
      "title": "Water &amp; rock features",
      "items": [
        "Waterfalls &amp; cascades",
        "Ponds &amp; plunge pools",
        "Fountains",
        "Rock grottos &amp; cave entrances",
        "Landscaped steps &amp; paths",
        "Grottos with feature lighting"
      ],
      "chips": [
        "Resort landscapes",
        "Gardens",
        "Pool surrounds",
        "Entrances &amp; lobbies"
      ],
      "imgSrc": "images/grotto/rock-grotto-pool.webp",
      "imgAlt": "Water Features built by FERROGRID",
      "width": 788,
      "height": 1400
    },
    "gallery": [
      {
        "src": "images/pools/garden-waterfall-pool.webp",
        "alt": "Garden waterfall &amp; emerald pool",
        "caption": "Garden waterfall &amp; emerald pool",
        "width": 800,
        "height": 1400
      },
      {
        "src": "images/project/ferrocement-cave-waterfall.webp",
        "alt": "Cave waterfall into a plunge pool",
        "caption": "Cave waterfall into a plunge pool",
        "width": 1097,
        "height": 1434
      },
      {
        "src": "images/grotto/carved-stone-grotto.webp",
        "alt": "Carved stone grotto entrance",
        "srcset": "images/grotto/carved-stone-grotto-800w.webp 800w, images/grotto/carved-stone-grotto.webp 1400w",
        "caption": "Carved stone grotto entrance",
        "width": 1400,
        "height": 788
      },
      {
        "src": "images/grotto/rock-grotto-pool.webp",
        "alt": "Rock grotto with reflective pool",
        "caption": "Rock grotto with reflective pool",
        "width": 788,
        "height": 1400
      },
      {
        "src": "images/grotto/stone-grotto-night.webp",
        "alt": "Illuminated stone grotto",
        "caption": "Illuminated stone grotto",
        "width": 1050,
        "height": 1400
      },
      {
        "src": "images/project/sculpted-ferrocement-landscape-steps.webp",
        "alt": "Sculpted landscape steps",
        "caption": "Sculpted landscape steps",
        "width": 985,
        "height": 1597
      }
    ],
    "galleryCountClass": "count-6",
    "relatedProjectTitles": [
      "Garden Waterfall & Emerald Pool",
      "Carved Stone Grotto Entrance",
      "Rock Grotto with Reflective Pool"
    ],
    "faqs": [
      {
        "q": "Will a ferrocement waterfall look natural?",
        "a": "Yes. Our craftsmen sculpt and texture the mortar by hand to look like natural rock, matched to your landscape."
      },
      {
        "q": "Can a water feature be added to an existing resort or pool?",
        "a": "Usually, yes. We assess the site, water supply and drainage during the site visit and design the feature to fit."
      },
      {
        "q": "How much does a waterfall or grotto cost?",
        "a": "There is no fixed price — every project is priced individually. The cost depends on your land (slope, soil and access), the type and size of the structure, and the finishes you choose. Share your site details for a free consultation and a quote."
      }
    ]
  }
};
