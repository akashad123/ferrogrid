export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqGroup {
  id: string;
  title: string;
  items: FaqItem[];
}

export const FAQ_GROUPS: FaqGroup[] = [
  {
    "id": "about-ferrocement",
    "title": "About ferrocement",
    "items": [
      {
        "question": "What is ferrocement?",
        "answer": "<p>Ferrocement is a thin, strong form of reinforced concrete made from layers of closely spaced steel wire mesh, filled and covered with rich cement mortar. The mesh can be shaped first, so ferrocement can form curves, domes, caves and freeform shells that are hard to build with conventional concrete.</p>"
      },
      {
        "question": "Is ferrocement the same as RCC (reinforced cement concrete)?",
        "answer": "<p>No. Both use cement and steel, but RCC uses thicker sections with reinforcement bars spaced further apart, while ferrocement uses thin sections with many layers of fine wire mesh spread evenly through the shell. This makes ferrocement lighter and better at controlling cracks in thin, curved shapes.</p>"
      },
      {
        "question": "How strong is ferrocement?",
        "answer": "<p>Ferrocement is strong for its thickness because the closely spaced mesh spreads stress through the whole shell. Curved forms such as domes and arches add further strength, which is why ferrocement is used for pools, water tanks, domes and underground spaces.</p>"
      },
      {
        "question": "Is ferrocement waterproof?",
        "answer": "<p>A well-built ferrocement shell is dense and seamless, which makes it highly water-resistant — ideal for swimming pools, water tanks and underground rooms. We also plan waterproofing and drainage to suit each site.</p>"
      },
      {
        "question": "How long does a ferrocement structure last?",
        "answer": "<p>With good design, workmanship and routine care, ferrocement structures are built to last for decades. We build our ferrocement swimming pools for 50+ years of durability.</p>"
      },
      {
        "question": "Is ferrocement eco-friendly?",
        "answer": "<p>Ferrocement uses thin sections, so it needs less cement and steel than conventional construction for the same space. Domes and earth-sheltered forms can be covered with soil and grass, helping buildings blend into the landscape.</p>"
      },
      {
        "question": "Can ferrocement be built in any shape?",
        "answer": "<p>Almost any shape. Because the steel mesh is shaped before the mortar is applied, we can build domes, caves, arches, freeform pools and sculpted rock forms.</p>"
      }
    ]
  },
  {
    "id": "pools",
    "title": "Swimming pools",
    "items": [
      {
        "question": "Why choose a ferrocement swimming pool?",
        "answer": "<p>A ferrocement pool shell is seamless, watertight and can follow any shape — freeform, kidney or infinity-edge — without the limits of box formwork.</p>"
      },
      {
        "question": "Can a ferrocement pool have an infinity edge?",
        "answer": "<p>Yes. We build infinity-edge pools in ferrocement, including resort pools that open onto valley views.</p>"
      },
      {
        "question": "Do you handle tiling, steps and the pool deck?",
        "answer": "<p>Yes. We can take care of the shell, mosaic tiling, steps, seating ledges and the surrounding deck as one package.</p>"
      }
    ]
  },
  {
    "id": "underground",
    "title": "Underground houses &amp; huts",
    "items": [
      {
        "question": "Can you build an underground house or hut in ferrocement?",
        "answer": "<p>Yes. FERROGRID builds underground cave houses, cave huts, earth-sheltered cottages, cellars and underground auditoriums. Curved ferrocement shells carry the weight of earth efficiently.</p>"
      },
      {
        "question": "How do you keep underground spaces dry?",
        "answer": "<p>We build dense, mesh-reinforced ferrocement walls and plan waterproofing and drainage around the structure to suit the soil and water conditions found during the site visit.</p>"
      },
      {
        "question": "Are underground and earth-sheltered rooms comfortable?",
        "answer": "<p>Earth cover keeps indoor temperatures steadier, so underground and earth-sheltered rooms tend to stay comfortable. We plan ventilation, light and finishes with you.</p>"
      }
    ]
  },
  {
    "id": "cottages",
    "title": "Resort cottages &amp; domes",
    "items": [
      {
        "question": "What kinds of resort cottages do you build?",
        "answer": "<p>Dome cottages, earth-sheltered and green-roof pods, cave-style cottages, pillar and stilt cottages, A-frame and semi-A-frame cabins, and treehouses.</p>"
      },
      {
        "question": "Can you build a complete resort village?",
        "answer": "<p>Yes. Our ongoing projects at Pulpally and Kakkadampoyil include many cottages, domes and a swimming pool on the same site.</p>"
      }
    ]
  },
  {
    "id": "cost",
    "title": "Cost &amp; timeline",
    "items": [
      {
        "question": "How much does ferrocement construction cost?",
        "answer": "<p>There is no fixed price — every project is priced individually. The cost depends on your land (slope, soil and access), the type and size of the structure, and the finishes you choose. Share your site details for a free consultation and a quote.</p>"
      },
      {
        "question": "Is ferrocement cheaper than conventional construction?",
        "answer": "<p>It can be more economical, because thin shells use less cement and steel and need less formwork. The final cost still depends on your land, the structure and the finishes, so we quote each project after a site visit.</p>"
      },
      {
        "question": "How long does a ferrocement project take?",
        "answer": "<p>It depends on the type and size of the structure, site access and finishes. We share a clear timeline once the site visit and design are complete.</p>"
      }
    ]
  },
  {
    "id": "working-with-us",
    "title": "Working with FERROGRID",
    "items": [
      {
        "question": "Where does FERROGRID work?",
        "answer": "<p>FERROGRID is based in Sultan Bathery, Wayanad, Kerala. We currently build across Kerala, Karnataka and Tamil Nadu, and we are expanding pan-India and internationally.</p>"
      },
      {
        "question": "How much experience does FERROGRID have?",
        "answer": "<p>FERROGRID has 26+ years of experience in ferrocement construction and has built 50+ projects for resorts, homestays and property owners.</p>"
      },
      {
        "question": "Do you provide designs and 3D renderings?",
        "answer": "<p>Yes. Our design and planning stage includes custom designs, layouts and detailed 3D renderings.</p>"
      },
      {
        "question": "Is the first consultation free?",
        "answer": "<p>Yes. The first consultation is free and comes with no obligation.</p>"
      },
      {
        "question": "How do I get a quote?",
        "answer": "<p>Send your project details through our contact form, call 062350 29900 or message us on WhatsApp. We respond within 24 hours.</p>"
      }
    ]
  }
];
