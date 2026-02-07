import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "earthen-retreat",
    title: "The Earthen House",
    location: "Byron Bay, NSW",
    year: "2022",
    category: "Residential",
    description:
      "A home where rammed earth, timber, stone, and copper compose a harmonic melody — grandiosity and cosiness in a single breath. Born from deep listening to the site and its garden, this is architecture that touches feelings, emotions, and soul.",
    thumbnail: {
      src: "/images/projects/earthen-retreat/exterior-front.jpg",
      alt: "The Earthen House — rammed-earth facade with timber deck and tropical plantings",
    },
    sections: [
      {
        type: "hero",
        image: {
          src: "/images/projects/earthen-retreat/exterior-front.jpg",
          alt: "The Earthen House — front exterior with rammed-earth columns, timber deck, and tropical garden",
        },
      },
      {
        type: "text",
        heading: "The Earthen House",
        body: "Set on a narrow block in Byron Bay, this rammed-earth residence was born from a conversation between the land, its garden, and its inhabitants. The material palette — earth, timber, stone, copper — is drawn directly from the natural world, creating a home that belongs to its place. True luxury isn't about size or expensive finishes. It's about how a space makes you feel the moment you walk in.",
      },
      {
        type: "image",
        image: {
          src: "/images/projects/earthen-retreat/living-room.jpg",
          alt: "Open-plan living room with rammed-earth walls, teal sofa, and landscape painting",
        },
      },
      {
        type: "image-pair",
        images: [
          {
            src: "/images/projects/earthen-retreat/dining-kitchen.jpg",
            alt: "Dining room with timber table looking through to kitchen with granite island",
          },
          {
            src: "/images/projects/earthen-retreat/kitchen-detail.jpg",
            alt: "Kitchen detail — red ceramic pitcher with wattle on granite bench",
          },
        ],
      },
      {
        type: "text",
        heading: "A recipe of scale and material",
        body: "It's not a single element that defines how a space feels — it's the composition. Like a recipe, even the finest ingredients fall flat if the proportions are off. Here, heights and widths play a role as important as the materials themselves. A light floor brings freshness beside dense earth and warm timber. A textured ceiling draws down cosiness. The garden — the client's great passion — wraps around everything, the thread that weaves it all together.",
      },
      {
        type: "image",
        image: {
          src: "/images/projects/earthen-retreat/kitchen-people.jpg",
          alt: "Kitchen with rammed-earth walls, timber louvres casting diagonal shadows, and people gathered at the island",
        },
      },
      {
        type: "image-pair",
        images: [
          {
            src: "/images/projects/earthen-retreat/chair-detail.jpg",
            alt: "Turned timber armchair with leather upholstery beside ceramic vase",
          },
          {
            src: "/images/projects/earthen-retreat/living-detail.jpg",
            alt: "Living room detail — landscape painting, timber shelving unit, and leather sling chair",
          },
        ],
      },
      {
        type: "text",
        heading: "A door people remember",
        body: "The copper pivot door was designed to serve more than its function — working as a piece of art within the architecture. Disguised as a rammed-earth panel with no visible handle on one side, it reveals a playful detail on the other: the client's leather belt repurposed as a pull, fixed with a simple screw and washer. When you work with rammed earth, there's something beautiful about letting a door disappear into the wall.",
      },
      {
        type: "image",
        image: {
          src: "/images/projects/earthen-retreat/stair-detail.jpg",
          alt: "Rammed-earth wall texture with corten steel stair treads",
        },
      },
      {
        type: "image-pair",
        images: [
          {
            src: "/images/projects/earthen-retreat/roof-detail.jpg",
            alt: "Rammed-earth columns meeting corten steel roof — looking upward at angular geometry",
          },
          {
            src: "/images/projects/earthen-retreat/downpipe-detail.jpg",
            alt: "Copper downpipe on rammed-earth wall with timber pergola shadow patterns",
          },
        ],
      },
      {
        type: "image",
        image: {
          src: "/images/projects/earthen-retreat/exterior-entrance.jpg",
          alt: "Thais Pupio standing at the entrance between rammed-earth columns with corten steel balustrade",
        },
      },
      {
        type: "image-pair",
        images: [
          {
            src: "/images/projects/earthen-retreat/exterior-pavilion.jpg",
            alt: "Dark timber pavilion exterior at dusk with tropical garden",
          },
          {
            src: "/images/projects/earthen-retreat/garden-pavilion.jpg",
            alt: "Garden pavilion with dark timber cladding surrounded by lush tropical planting",
          },
        ],
      },
      {
        type: "credits",
        credits: [
          { role: "Architecture & Interiors", name: "Thais Pupio Design" },
          { role: "Photography", name: "Michael Nicholson" },
          { role: "Builder", name: "Heanes Built" },
          { role: "Awards", name: "Three awards — Featured in Habitus & The Local Project" },
        ],
      },
    ],
  },
  {
    slug: "byron-bay-renovation",
    title: "Byron Bay Renovation",
    location: "Byron Bay, NSW",
    year: "2023",
    category: "Renovation",
    description:
      "A 1980s brick home reimagined as a light-filled family sanctuary. Rather than starting over, the design honours what was already there — opening the house to cross-ventilation, natural light, and the garden beyond. Custom plywood joinery weaves warmth and personality through every room.",
    thumbnail: {
      src: "/images/projects/byron-bay-renovation/living-room.jpg",
      alt: "Byron Bay Renovation — bright living room with plywood joinery and colourful rug",
    },
    sections: [
      {
        type: "hero",
        image: {
          src: "/images/projects/byron-bay-renovation/living-room.jpg",
          alt: "Byron Bay Renovation — open living room with green sofa, plywood shelving, and colourful Moroccan rug",
        },
      },
      {
        type: "text",
        heading: "Byron Bay Renovation",
        body: "A sensitive renovation of a 1980s brick home, transforming it into a light-filled, cross-ventilated family home while retaining the existing structure. New openings, a rear extension, and a garden courtyard completely reimagine the relationship between house and site. Custom plywood joinery threads through the house, providing warmth and continuity — proof that the most sustainable building is often the one that already exists, simply reimagined with fresh eyes and deep listening.",
      },
      {
        type: "image-pair",
        images: [
          {
            src: "/images/projects/byron-bay-renovation/dining-table.jpg",
            alt: "Round timber dining table with walnut chairs and tropical flowers",
          },
          {
            src: "/images/projects/byron-bay-renovation/bookshelf.jpg",
            alt: "Custom plywood bookshelf with colour-sorted books and collected objects",
          },
        ],
      },
      {
        type: "credits",
        credits: [
          { role: "Architecture", name: "Thais Pupio Design" },
          { role: "Photography", name: "Michael Nicholson" },
        ],
      },
    ],
  },
  {
    slug: "suffolk-park-house",
    title: "Suffolk Park House",
    location: "Suffolk Park, NSW",
    year: "2021",
    category: "Residential",
    description:
      "A coastal family home where openness and intimacy coexist. Timber screens and a central courtyard mediate between the energy of the street and the calm of the ocean, creating layered thresholds of privacy that let the family choose how connected they feel to the world outside.",
    thumbnail: {
      src: "/images/projects/suffolk-park-house/exterior.jpg",
      alt: "Suffolk Park House — timber and rammed-earth facade",
    },
    sections: [
      {
        type: "hero",
        image: {
          src: "/images/projects/suffolk-park-house/exterior.jpg",
          alt: "Suffolk Park House exterior",
        },
      },
      {
        type: "text",
        heading: "Suffolk Park House",
        body: "A coastal family home that balances openness with privacy, using timber screens and a central courtyard to mediate between street and ocean. Cross-ventilation and solar access were key drivers of the plan, creating spaces that breathe with the coastal climate and shift in character throughout the day.",
      },
      {
        type: "credits",
        credits: [
          { role: "Architecture", name: "Thais Pupio Design" },
          { role: "Photography", name: "Coming Soon" },
        ],
      },
    ],
  },
  {
    slug: "clunes-house",
    title: "Clunes House",
    location: "Clunes, NSW",
    year: "2020",
    category: "Residential",
    description:
      "A compact farmhouse built almost entirely from recycled and locally milled timber. With a small footprint and low embodied energy, it proves that living gently on the land doesn\u2019t mean sacrificing generosity of space — every room opens to the surrounding paddocks and the wide sky beyond.",
    thumbnail: {
      src: "/images/projects/clunes-house/interior.jpg",
      alt: "Clunes House — warm timber interior with dining area",
    },
    sections: [
      {
        type: "hero",
        image: {
          src: "/images/projects/clunes-house/interior.jpg",
          alt: "Clunes House interior",
        },
      },
      {
        type: "text",
        heading: "Clunes House",
        body: "A compact farmhouse on a rural property, built primarily from recycled and locally milled timber. The design prioritises low-embodied-energy construction and a small footprint, while creating generous living spaces that connect to the surrounding paddocks. It\u2019s a home shaped by restraint and care — proof that beauty emerges when we build in dialogue with the land, not in spite of it.",
      },
      {
        type: "credits",
        credits: [
          { role: "Architecture", name: "Thais Pupio Design" },
          { role: "Photography", name: "Coming Soon" },
        ],
      },
    ],
  },
  {
    slug: "earth-rise-house",
    title: "Earth Rise House",
    location: "Byron Bay Hinterland, NSW",
    year: "2024",
    category: "Residential",
    description:
      "A home where the earth is the central piece — rammed-earth blades seven metres high form the structural and emotional heart of the house, carrying nature from outside in. Copper, corten steel, and recycled spotted gum age gracefully alongside walls that could last forever.",
    thumbnail: {
      src: "/images/projects/earth-rise-house/exterior.jpg",
      alt: "Earth Rise House — rammed-earth and timber home rising from the hinterland landscape",
    },
    sections: [
      {
        type: "hero",
        image: {
          src: "/images/projects/earth-rise-house/exterior.jpg",
          alt: "Earth Rise House exterior set in the Byron Bay hinterland",
        },
      },
      {
        type: "text",
        heading: "Earth Rise House",
        body: "I wanted the earth to be the central piece — a strong, grounding element that sits right at the heart of my practice. This home feels as if it\u2019s rising out of the earth and being the earth. Like letting nature take the lead. The rammed-earth blades follow the direction of the steep site, travelling from outside in, carrying that sense of nature into the life that unfolds within the house. They remind us — gently — of our deep connection to the natural world.",
      },
      {
        type: "text",
        heading: "Seven metres of earth",
        body: "These earth columns rise seven metres high, forming the structural and emotional centrepiece of the house. They welcome you in and guide you from the ground level up, framing a stair in corten and timber. A spine of recycled spotted gum runs through the house like a parade, connecting front to back and drawing your gaze toward the garden — framed through a large glass opening to the north-east that catches beautiful light and blurs the boundary between outdoor and indoor.",
      },
      {
        type: "text",
        heading: "Materials that age gracefully",
        body: "The honesty of materials continues throughout: copper for the eaves, fascia, and roof; pre-aged reclaimed timber cladding on the walls; corten and timber for the handrails; paired with rock retaining walls around the garden and driveway. Every element is chosen to last — and to age gracefully. The pre-aged Australian hardwood will grey off beautifully, the copper will patina over time, and the rammed earth could last forever. The earth was sourced within forty kilometres — incredibly low carbon footprint — and all the timber, inside and out, is Australian.",
      },
      {
        type: "text",
        heading: "Real innovation",
        body: "Earth is one of the world\u2019s oldest building materials — ancient, humble, and yet full of potential. A German architect I admire once said that earth is low-tech, but its performance is high-tech. In a time when homes can be run by remote control, innovation in architecture isn\u2019t about more technology — it\u2019s about thinking deeply about our impact on the planet, and the emotional response our spaces create in people.",
      },
      {
        type: "credits",
        credits: [
          { role: "Architecture", name: "Thais Pupio Design" },
          { role: "Builder", name: "Local Byron Bay Builders" },
        ],
      },
    ],
  },
  {
    slug: "the-boat-house",
    title: "The Boat House",
    location: "Brunswick Heads, NSW",
    year: "2023",
    category: "Residential",
    description:
      "A multi-layered home that masterfully combines traditional building techniques with modern warmth. Stone, concrete, timber, and copper are balanced with subtle pops of colour — all within a refined ambiance anchored by a striking copper pivot door that connects garden and stone wall, outside and in.",
    thumbnail: {
      src: "/images/projects/the-boat-house/entrance-exterior.jpg",
      alt: "The Boat House — copper pivot door entrance flanked by stone walls and tropical plantings",
    },
    sections: [
      {
        type: "hero",
        image: {
          src: "/images/projects/the-boat-house/entrance-exterior.jpg",
          alt: "The Boat House entrance — copper pivot door with tropical plants flanking stone walls",
        },
      },
      {
        type: "text",
        heading: "The Boat House",
        body: "The Boat House is a multi-layered home that masterfully combines traditional building techniques with modern functionality. In partnership with owner and builder Ian Heanes, the interior design balances raw materials — stone, concrete, timber, and copper — while subtle pops of colour add an element of playfulness, all within a warm and refined ambiance.",
      },
      {
        type: "image",
        image: {
          src: "/images/projects/the-boat-house/kitchen-island.jpg",
          alt: "Kitchen with dark timber island, stone column, glass pendant lights, and timber-lined walls",
        },
      },
      {
        type: "image-pair",
        images: [
          {
            src: "/images/projects/the-boat-house/living-room.jpg",
            alt: "Living room with window seat, emerald armchair, and stone column opening to kitchen",
          },
          {
            src: "/images/projects/the-boat-house/kitchen-joinery.jpg",
            alt: "Kitchen from the garden side — timber joinery, skylights, and stone wall through to staircase",
          },
        ],
      },
      {
        type: "text",
        heading: "A copper threshold",
        body: "The striking entryway features a large copper pivot door with side glazing, allowing the garden and stone wall to connect outside to in. It\u2019s a door designed as a piece of architecture — a threshold that sets the tone for the material honesty within.",
      },
      {
        type: "image",
        image: {
          src: "/images/projects/the-boat-house/copper-door-interior.jpg",
          alt: "Copper pivot door viewed from inside — stone walls, glass pendants, and tropical plantings beyond",
        },
      },
      {
        type: "image-pair",
        images: [
          {
            src: "/images/projects/the-boat-house/copper-door-close.jpg",
            alt: "Copper pivot door close-up — patinated copper panels between stone walls with glass sconces",
          },
          {
            src: "/images/projects/the-boat-house/stairwell-stone.jpg",
            alt: "Stairwell with stone wall, glass pendant light, and sheer curtain filtering afternoon light",
          },
        ],
      },
      {
        type: "image",
        image: {
          src: "/images/projects/the-boat-house/timber-shelving.jpg",
          alt: "Custom timber shelving with books and objects — skylights casting natural light on joinery",
        },
      },
      {
        type: "image-pair",
        images: [
          {
            src: "/images/projects/the-boat-house/bathroom-copper.jpg",
            alt: "Bathroom with copper rainfall shower, timber vanity, and stone basin",
          },
          {
            src: "/images/projects/the-boat-house/bathroom-blue-tile.jpg",
            alt: "Bathroom with diagonal blue tile, round mirror, and glass pendant sconces",
          },
        ],
      },
      {
        type: "image-pair",
        images: [
          {
            src: "/images/projects/the-boat-house/material-detail.jpg",
            alt: "Material detail — timber cladding meeting stone wall, the texture of honest materials",
          },
          {
            src: "/images/projects/the-boat-house/shelf-detail.jpg",
            alt: "Custom timber shelf detail — books and hand-blown glass vessel in warm light",
          },
        ],
      },
      {
        type: "credits",
        credits: [
          { role: "Interior Design", name: "Thais Pupio Design" },
          { role: "Builder & Owner", name: "Heanes Built" },
          { role: "Engineer", name: "Phil Wallace" },
        ],
      },
    ],
  },
  {
    slug: "ridge-view-house",
    title: "Ridge View House",
    location: "Bangalow, NSW",
    year: "2024",
    category: "Residential",
    description:
      "A creative and sustainable take on suburban living. With a skillion roof that draws in winter sun and natural light, the home connects to its surroundings through exposed timber screens that unify the spaces, balancing privacy and openness in perfect harmony.",
    thumbnail: {
      src: "/images/projects/ridge-view-house/exterior.jpg",
      alt: "Ridge View House — low-profile home following the ridge with hinterland views",
    },
    sections: [
      {
        type: "hero",
        image: {
          src: "/images/projects/ridge-view-house/exterior.jpg",
          alt: "Ridge View House exterior with panoramic hinterland views",
        },
      },
      {
        type: "text",
        heading: "Ridge View House",
        body: "Ridge View House offers a creative and sustainable approach to suburban living. A skillion roof draws in winter sun and natural light, while exposed timber screens unify the spaces and connect the home to its surroundings. The design effortlessly balances privacy and openness, with separate guest accommodation placed to allow both guest and host their own space. It\u2019s a home where light, natural materials, and considered boundaries come together in quiet harmony.",
      },
      {
        type: "credits",
        credits: [
          { role: "Architecture", name: "Thais Pupio Design" },
        ],
      },
    ],
  },
  {
    slug: "the-wave-house",
    title: "The Wave House",
    location: "Byron Bay, NSW",
    year: "2024",
    category: "Residential",
    description:
      "Taking its cue from the curves of Byron Bay\u2019s coastline, this home features sweeping rooflines that echo the natural flow of the land. Expansive windows capture breathtaking views of Wategos Beach, while a carefully chosen material palette connects the home to its coastal surroundings.",
    thumbnail: {
      src: "/images/projects/the-wave-house/exterior.jpg",
      alt: "The Wave House — contemporary home with curved roofline near Byron Bay",
    },
    sections: [
      {
        type: "hero",
        image: {
          src: "/images/projects/the-wave-house/exterior.jpg",
          alt: "The Wave House exterior with flowing curved roof",
        },
      },
      {
        type: "text",
        heading: "The Wave House",
        body: "The Wave House takes its cue from the curves of Byron Bay\u2019s coastline, with sweeping rooflines that echo the natural flow of the land. Expansive windows capture breathtaking views of Wategos Beach, while a carefully chosen material palette connects the home to its coastal surroundings. The design seamlessly blends form and function, creating a modern, timeless retreat that feels at one with the landscape.",
      },
      {
        type: "credits",
        credits: [
          { role: "Architecture", name: "Thais Pupio Design" },
        ],
      },
    ],
  },
  {
    slug: "erva-nail-spa",
    title: "Erva Nail Spa",
    location: "Gold Coast, QLD",
    year: "2023",
    category: "Commercial",
    description:
      "Clean beauty meets tranquil architecture. In collaboration with interior designer Uscha, this nail spa combines warmth and sophistication through natural materials, earth render, and soft lighting — a holistic approach to beauty that nurtures both body and mind.",
    thumbnail: {
      src: "/images/projects/erva/salon-floor.jpg",
      alt: "Erva Nail Spa — warm natural interior with pedicure stations, hanging plants, and timber furniture",
    },
    sections: [
      {
        type: "hero",
        image: {
          src: "/images/projects/erva/salon-floor.jpg",
          alt: "Erva Nail Spa interior — pedicure stations with hanging plants, timber furniture, and warm earth tones",
        },
      },
      {
        type: "text",
        heading: "Erva Nail Spa",
        body: "Erva Nail Spa combines clean beauty with a tranquil, spa-like setting. In collaboration with interior designer Uscha, we created an interior of warmth and sophistication, with natural materials and soft lighting that makes every visit a moment of genuine relaxation. The focus on sustainability is reflected in both the design and the use of non-toxic materials like the earth render — a holistic approach to beauty that nurtures both body and mind.",
      },
      {
        type: "image",
        image: {
          src: "/images/projects/erva/reception-sign.jpg",
          alt: "Erva reception — house-shaped earth render sign with dried flowers and sheer curtains",
        },
      },
      {
        type: "image-pair",
        images: [
          {
            src: "/images/projects/erva/treatment-table.jpg",
            alt: "Treatment table with protea flowers, product display shelves, and timber chairs",
          },
          {
            src: "/images/projects/erva/lounge-upper.jpg",
            alt: "Upper level lounge — armchair with plants, fiddle-leaf fig, and sheer curtains filtering light",
          },
        ],
      },
      {
        type: "image",
        image: {
          src: "/images/projects/erva/storefront-glass.jpg",
          alt: "Erva storefront — etched glass with brand name, palm trees reflected, white pebble base",
        },
      },
      {
        type: "image-pair",
        images: [
          {
            src: "/images/projects/erva/lounge-plants.jpg",
            alt: "Lounge area with fiddle-leaf fig, eucalyptus, armchair, and warm earth-toned plywood walls",
          },
          {
            src: "/images/projects/erva/detail.jpg",
            alt: "Waiting bench — plywood with blush cushion, fiddle-leaf fig, and soft filtered light",
          },
        ],
      },
      {
        type: "credits",
        credits: [
          { role: "Architecture", name: "Thais Pupio Design" },
          { role: "Interior Design", name: "Uscha" },
        ],
      },
    ],
  },
  {
    slug: "simones-house",
    title: "Simone\u2019s House",
    location: "Byron Bay, NSW",
    year: "2023",
    category: "Renovation",
    description:
      "A fully renovated family home where thoughtful design completely changed the way its owners live. The original layout was reimagined without demolishing its solid brick bones — flooded with natural light, cross ventilation, and an eclectic, handcrafted warmth that makes the house feel like a true home.",
    thumbnail: {
      src: "/images/projects/simones-house/interior.jpg",
      alt: "Simone\u2019s House — light-filled renovated interior with garden connection",
    },
    sections: [
      {
        type: "hero",
        image: {
          src: "/images/projects/simones-house/interior.jpg",
          alt: "Simone\u2019s House renovated interior",
        },
      },
      {
        type: "text",
        heading: "Simone\u2019s House",
        body: "This family home renovation shows how thoughtful design can completely change the way you live. The original layout was quite disjointed, so we reimagined the entire plan without demolishing its solid brick bones, extending the footprint by only a few metres. Now, the spaces are flooded with natural light and cross ventilation — a transformation that flows better and feels far more inviting, functional, and joyful.",
      },
      {
        type: "text",
        heading: "Soul in the details",
        body: "Clever joinery was the quiet achiever: a repurposed built-in cupboard found new life, while custom storage solutions double as space dividers — creating privacy for the bedroom zone without closing off the home. Open shelving keeps visual connections flowing between rooms. We brought soul and identity to the spaces using handcrafted pieces, an eclectic mix of textures, pops of colour, greenery, and art that makes this house feel like a true home. Renovations can be a testament to sustainable design — proving that the greenest building is often the one that already exists.",
      },
      {
        type: "credits",
        credits: [
          { role: "Architecture & Interiors", name: "Thais Pupio Design" },
          { role: "Styling", name: "Thais Pupio Design & Sara Yael Design" },
          { role: "Photography", name: "Gus Photographer" },
        ],
      },
    ],
  },
];

export const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];
