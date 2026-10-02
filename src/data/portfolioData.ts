import { Project, Service, ClientCategory } from '../types';

import heroImg from '../assets/images/hero_cinematic_product_1790939115383.jpg';
import surgeImg from '../assets/images/work_surge_protein_1790939129530.jpg';
import abcoffeeImg from '../assets/images/work_abcoffee_1790939141625.jpg';
import skincareImg from '../assets/images/work_skincare_1790939152819.jpg';
import maxProteinImg from '../assets/images/work_max_protein_1790939194534.jpg';
import auraImg from '../assets/images/work_aura_botanicals_1790939205995.jpg';
import veloImg from '../assets/images/work_velo_fashion_1790939218724.jpg';
import beforeSkincareImg from '../assets/images/before_basic_skincare_1790939163781.jpg';

export const ASSETS = {
  hero: heroImg,
  surge: surgeImg,
  abcoffee: abcoffeeImg,
  skincare: skincareImg,
  maxProtein: maxProteinImg,
  aura: auraImg,
  velo: veloImg,
  beforeSkincare: beforeSkincareImg,
};

export const PROJECTS: Project[] = [
  {
    id: 'surge',
    brand: 'SURGE',
    category: 'Protein / Fitness',
    campaignType: 'Cinematic Protein Bar Campaign',
    title: 'Texture in Motion: The Pure Fuel Series',
    shortDescription: 'Cinematic slow-motion reveals focusing on macro chocolate textures, crisp roasted almond shards, and high-impact nutrition messaging.',
    fullDescription: 'SURGE needed to cut through the sea of generic gym-bro protein marketing. We conceptualized a luxury editorial visual universe centered on rich confectionery craftsmanship and clean biological performance. The campaign launched across Meta, TikTok, and retail displays nationwide.',
    image: surgeImg,
    deliverables: [
      '3x 15s Cinematic Hero Commercials (9:16 & 16:9)',
      '12x High-Retention Paid Social Hooks',
      '8x 4K Macro Product Visuals for E-Commerce & Retail',
      'Dynamic Packaging 3D Turnarounds'
    ],
    metrics: [
      { label: 'ROAS Lift', value: '+340%' },
      { label: 'Thumbstop Rate', value: '41.2%' },
      { label: 'Direct Conversion Rate', value: '4.8%' },
      { label: 'Turnaround Time', value: '8 Days' }
    ],
    challenge: 'Traditional studio quotes came in at $85,000 with a 7-week production schedule to build high-speed macro food rigs.',
    solution: 'Ad Creative engineered a high-fidelity synthetic food cinematography pipeline, delivering photorealistic molten chocolate physics and crisp macro angles in under 8 business days.',
    quote: {
      text: 'Ad Creative delivered visuals that look like a multi-million-dollar luxury food commercial. Our cost-per-acquisition dropped 38% in the first week.',
      author: 'Marcus Vance',
      role: 'Head of Growth, SURGE Nutrition'
    }
  },
  {
    id: 'abcoffee',
    brand: 'ABCOFFEE',
    category: 'Coffee',
    campaignType: 'Signature Blend Product Campaign',
    title: 'The Dark Roast Alchemy',
    shortDescription: 'Atmospheric amber backlighting, glistening cold brew condensation droplets, and volcanic stone aesthetics for a signature single-origin roast.',
    fullDescription: 'ABCOFFEE was launching their premium single-origin cold brew bottled line. They needed visuals that evoked the sensory aroma and tactile luxury of specialty third-wave coffee without traveling to high-altitude plantations.',
    image: abcoffeeImg,
    deliverables: [
      '1x 30s Brand Storyboard Film',
      '6x 9:16 Short-Form Social Commercials',
      '10x E-Commerce Hero Banner Assets',
      'Organic Social Carousel Assets'
    ],
    metrics: [
      { label: 'Pre-Order Sellout', value: '72 Hours' },
      { label: 'Video Completion Rate', value: '68%' },
      { label: 'Engagement Rate', value: '9.4%' },
      { label: 'Asset Variations', value: '32 Units' }
    ],
    challenge: 'Achieving dark luxury glass refractions and condensation droplets with traditional photography often produces muddy or distorted reflections.',
    solution: 'We directed a lighting system using controlled amber rim lights and caustic ray optics, making the bottle look tactile, ice-cold, and deeply thirst-provoking.',
    quote: {
      text: 'Our launch campaign looked more refined than international heritage brands. Customers constantly ask which agency shot our film.',
      author: 'Elena Rostova',
      role: 'Founder & Creative Director, ABCOFFEE'
    }
  },
  {
    id: 'lumen',
    brand: 'LUMEN SKINCARE',
    category: 'Beauty',
    campaignType: 'Premium Skincare Launch',
    title: 'Radiance in Obsidian Water',
    shortDescription: 'Liquid obsidian reflections, glowing active serum pipettes, and Vogue-caliber cosmetic lighting for an elite barrier repair formula.',
    fullDescription: 'A direct-to-consumer biotech skincare formula launching into luxury beauty retail. The creative direction fused calm zen water elements with scientific precision, highlighting hydration, purity, and glass-skin radiance.',
    image: skincareImg,
    deliverables: [
      '2x 15s Hero Commercials (4K 60fps Master)',
      '16x Paid Social Ad Variations with Hook Testing',
      '6x Macro Texture & Dropper Still Renders',
      'Complete Digital PR Media Kit'
    ],
    metrics: [
      { label: 'Click-Through Rate', value: '3.9%' },
      { label: 'Retail Buyer Buy-in', value: '100%' },
      { label: 'CPA Reduction', value: '-42%' },
      { label: 'Production Savings', value: '$64,000' }
    ],
    challenge: 'Capturing clear liquid serum droplets suspended in mid-air over rippling black water requires tens of thousands of dollars in high-speed Phantom cameras and specialized wet stages.',
    solution: 'We deployed our proprietary cinematic light staging to create immaculate caustic refractions, pristine glass transparency, and zero surface imperfections.',
    quote: {
      text: 'The assets immediately positioned us on par with Estée Lauder and Augustinus Bader. Flawless execution from concept to final delivery.',
      author: 'Camilla Dupont',
      role: 'Chief Brand Officer, Lumen Skincare'
    }
  },
  {
    id: 'max-protein',
    brand: 'MAX PROTEIN',
    category: 'Fitness / Nutrition',
    campaignType: 'Social Product Campaign',
    title: 'Pure Physical Architecture',
    shortDescription: 'Raw black volcanic slate, explosive floating gym chalk particles, and gold typography highlights for an elite isolate powder launch.',
    fullDescription: 'Designed for serious athletes, MAX PROTEIN wanted a campaign that felt like high-end performance hardware rather than a typical supplement tub. We crafted an intense, moody aesthetic emphasizing power, discipline, and uncompromising purity.',
    image: maxProteinImg,
    deliverables: [
      '4x 10s Fast-Cut Kinetic Social Ads',
      '8x Static Hook Creatives for Meta Ads',
      '3D Explosion Exploded-View Visuals',
      'Amazon A+ Brand Story Content'
    ],
    metrics: [
      { label: 'ROAS', value: '5.2x' },
      { label: 'First-Month Revenue', value: '$480K' },
      { label: 'Cost Per Click', value: '$0.48' },
      { label: 'Days to Deliver', value: '7 Days' }
    ],
    challenge: 'Fitness ads are notorious for looking cluttered and cheap, often blending into feeds with identical neon shakers and gym backgrounds.',
    solution: 'We stripped away the clutter, using minimalist black stone, cinematic rim lighting, and airborne chalk particles that stop thumbs mid-scroll.',
    quote: {
      text: 'The visual weight and kinetic energy of these ads helped us scale from $2k/day to $15k/day in profitable ad spend in under a month.',
      author: 'David Thorne',
      role: 'CEO, MAX Performance Brands'
    }
  },
  {
    id: 'aura-botanicals',
    brand: 'AURA BOTANICALS',
    category: 'Food & Beverage',
    campaignType: 'Sparkling Elixir Launch',
    title: 'Effervescence & Botanical Energy',
    shortDescription: 'Crystalline water splash dynamics, floating yuzu citrus wheels, and modern pastel can aesthetics for a zero-sugar functional beverage.',
    fullDescription: 'A modern functional sparkling soda with real adaptogens. The creative required a balance between playful refreshing fizz and sophisticated wellness aesthetics. We produced a complete suite of assets optimized for summer launch blitzes.',
    image: auraImg,
    deliverables: [
      '1x 20s Social Showreel Commercial',
      '9x TikTok & Reels Short-Form Clips',
      '12x High-Key & Low-Key Can Renders',
      'Wholesale & Buyer Presentation Deck'
    ],
    metrics: [
      { label: 'Wholesale Accounts Won', value: '450+' },
      { label: 'Instagram Reach', value: '1.4M' },
      { label: 'Repeat Purchase Rate', value: '34%' },
      { label: 'Delivered Assets', value: '44 Units' }
    ],
    challenge: 'Getting physical cans manufactured, shipped, and shot with fresh botanicals on wet sets would have delayed their peak summer retail window by 3 months.',
    solution: 'Ad Creative created photoreal virtual cans directly from label dielines, allowing the brand to run pre-order ad campaigns 6 weeks before inventory landed.',
    quote: {
      text: 'We pre-sold our entire initial 50,000 unit production run before the cans even left the cannery, solely using Ad Creative’s visuals.',
      author: 'Chloe Simmons',
      role: 'Co-Founder, Aura Botanicals'
    }
  },
  {
    id: 'velo',
    brand: 'VELO PERFORMANCE',
    category: 'Fashion & Lifestyle',
    campaignType: 'Technical Apparel Product Film',
    title: 'Monolithic Weather Resistance',
    shortDescription: 'Brutalist concrete architecture, water-repellent micro-weave focus, and cinematic rain mist for an ultra-premium technical jacket.',
    fullDescription: 'VELO designs weather-engineered technical garments. The campaign needed to convey impenetrable weather defense, aerodynamic lightness, and high-fashion silhouette integrity under extreme conditions.',
    image: veloImg,
    deliverables: [
      '1x 45s Editorial Brand Film',
      '6x 15s Product Feature Spotlights',
      '14x High-Resolution Lookbook Stills',
      'Hero E-Commerce Video Loops'
    ],
    metrics: [
      { label: 'Average Order Value', value: '$380' },
      { label: 'Organic Shares', value: '18,500+' },
      { label: 'Return on Ad Spend', value: '4.4x' },
      { label: 'Speed to Market', value: '9 Days' }
    ],
    challenge: 'Organizing an outdoor mountain shoot with professional models, rain machines, and cinema camera crews had a quote of $120,000.',
    solution: 'We orchestrated an atmospheric digital production that placed the product into architectural brutalist environments with cinematic mist and tactile fabric depth.',
    quote: {
      text: 'The creative authority Ad Creative gave our new line allowed us to price at luxury tiers with immediate market respect.',
      author: 'Julian Cole',
      role: 'Creative Director, VELO Lab'
    }
  }
];

export const SERVICES: Service[] = [
  {
    number: '01',
    title: 'PRODUCT FILMS',
    tagline: 'Short cinematic commercials designed for social media.',
    description: 'We direct high-impact 10s–30s commercial films engineered to halt scrolling thumbs. Packed with macro textures, dynamic lighting transitions, and sound-synced rhythm that make your product feel momentous.',
    deliverables: ['15s & 30s Master Commercials', 'Sound-designed audio mix', 'Text hook overlays', 'Multiple aspect ratios (9:16, 1:1, 16:9)'],
    formats: ['9:16 Vertical', '16:9 Landscape', '1:1 Square'],
    highlight: 'Engineered for Meta, TikTok, YouTube Shorts & Connected TV'
  },
  {
    number: '02',
    title: 'PRODUCT PHOTOGRAPHY',
    tagline: 'Premium product imagery without the traditional production overhead.',
    description: 'Say goodbye to renting photo studios, shipping fragile prototypes, and waiting weeks for retouchers. We generate photorealistic, magazine-grade product photography on bespoke stone, glass, water, and architectural surfaces.',
    deliverables: ['8K Ultra-High Resolution Stills', 'Isolated transparent PNGs', 'Custom environmental backgrounds', 'Color-calibrated dielines'],
    formats: ['Print Ready TIFF', 'WebP & JPEG Masters', 'PSD Layers'],
    highlight: 'Zero sample shipping required — built from label files or CAD'
  },
  {
    number: '03',
    title: 'SOCIAL ADS',
    tagline: 'Scroll-stopping creative designed for Instagram, TikTok and paid social.',
    description: 'Performance-engineered ad creatives designed to drive down customer acquisition costs. We generate sets of creative variations with tested hook angles, dynamic typography, and benefit-driven visual payoffs.',
    deliverables: ['Creative hook variations (3–5 per concept)', 'UGC-adjacent & studio hybrids', 'Dynamic callout overlays', 'Conversion-optimized pacing'],
    formats: ['9:16 Reels/TikTok', '4:5 Feed', '1:1 Carousel'],
    highlight: 'Designed specifically to lift ROAS and lower CPA'
  },
  {
    number: '04',
    title: 'CAMPAIGN CONCEPTS',
    tagline: 'Big ideas, hooks, visual direction and complete campaign systems.',
    description: 'Great advertising begins with a clear creative hook. We define the overarching visual metaphor, art direction guidelines, color world, and narrative rhythm that will unify your product across all touchpoints.',
    deliverables: ['Art direction deck & moodboard', 'Narrative scripts & visual hooks', 'Color & lighting direction guide', 'Full campaign system blueprint'],
    formats: ['Interactive PDF Presentation', 'Figma Design System'],
    highlight: 'Strategic creative frameworks built for brand recall'
  },
  {
    number: '05',
    title: 'LIFESTYLE CREATIVE',
    tagline: 'Product + human storytelling with cinematic environments.',
    description: 'Place your product into aspirational lifestyle settings without scouting locations across the globe. From high-altitude mountain lookouts to luxury penthouse kitchens and minimalist sunlit lofts.',
    deliverables: ['Contextual lifestyle scenes', 'Atmospheric lighting & depth', 'Natural interaction moments', 'Seasonal campaign sets'],
    formats: ['Social 9:16', 'Editorial 4:3', 'Billboard 16:9'],
    highlight: 'Unlimited location flexibility without travel costs'
  },
  {
    number: '06',
    title: 'PRODUCT LAUNCHES',
    tagline: 'A complete visual system for launching a new product.',
    description: 'Turn your product reveal into a cultural event. We build complete launch asset ecosystems: teasers, countdown motion assets, hero commercial, e-commerce PDP visuals, email graphics, and retail sell-sheets.',
    deliverables: ['Teaser video snippets', 'Hero launch commercial', 'Complete e-commerce visual suite', 'Retail buyer presentation assets'],
    formats: ['Full Omnichannel Asset Suite', 'All resolutions & ratios'],
    highlight: 'Go from concept to multi-channel launch in 10 business days'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    name: 'DISCOVER',
    headline: 'We understand the product, audience and objective.',
    description: 'You share your product details, label dieline or sample photos, target audience, and key performance goals. We dissect your positioning, competitor visual landscape, and core commercial hook.',
    turnaround: 'Day 1–2',
    deliverable: 'Creative Brief & Strategic Hook Hypotheses'
  },
  {
    step: '02',
    name: 'CONCEPT',
    headline: 'We develop the creative direction, hooks and storyboard.',
    description: 'Our creative directors formulate 2–3 bespoke visual concepts. You receive high-fidelity storyboards, lighting mood boards, sound design cues, and script outlines before production commences.',
    turnaround: 'Day 3–4',
    deliverable: 'Visual Storyboard & Creative Treatment Deck'
  },
  {
    step: '03',
    name: 'CREATE',
    headline: 'We produce cinematic product visuals, photography and video.',
    description: 'We orchestrate our proprietary cinematic AI pipeline, rendering macro lighting, liquid dynamics, textural details, and camera motion with commercial studio precision. Every frame is color graded and mastered.',
    turnaround: 'Day 5–7',
    deliverable: 'Full-Resolution Master Deliverables & Variations'
  },
  {
    step: '04',
    name: 'DELIVER',
    headline: 'You receive ready-to-use advertising assets for your campaigns.',
    description: 'We hand over an organized, campaign-ready asset vault with all aspect ratios (9:16, 16:9, 1:1, 4:5), sound mixes, and static hero stills formatted for Meta Ads Manager, TikTok, and e-commerce stores.',
    turnaround: 'Day 8–10',
    deliverable: 'Production Vault + Creative Scaling Strategy'
  }
];

export const CLIENT_CATEGORIES: ClientCategory[] = [
  {
    id: 'fitness',
    name: 'PROTEIN & FITNESS',
    headline: 'Tactile Power & Uncompromising Nutrition',
    description: 'Macro powder physics, textured protein bar cross-sections, and dynamic gym lighting that convey elite athletic performance.',
    image: surgeImg,
    focus: 'Texture, Power, Chalk Dynamics, Clean Form',
    typicalDeliverables: '15s Kinetic Commercials, Amazon A+ Sets, TikTok Hook variations'
  },
  {
    id: 'food-beverage',
    name: 'FOOD & BEVERAGE',
    headline: 'Sensory Thirst & Irresistible Craveability',
    description: 'Condensation beads, crystalline ice splashes, effervescence bubbles, and rich appetizing textures that stimulate immediate taste desire.',
    image: auraImg,
    focus: 'Sensory Liquid Physics, Fresh Botanicals, Chill Cues',
    typicalDeliverables: 'Hero Can Films, Seasonal Flavor Reveals, Social Ads'
  },
  {
    id: 'beauty',
    name: 'SKINCARE & BEAUTY',
    headline: 'Liquid Obsidian & Clinical Radiance',
    description: 'Calm reflective water pools, glowing translucent serums, glass refraction, and Vogue-caliber lighting for barrier repair and aesthetic rituals.',
    image: skincareImg,
    focus: 'Glass Refraction, Hydration Caustics, Purity Lighting',
    typicalDeliverables: 'Luxury Product Films, Macro Dropper Stills, E-Comm Banners'
  },
  {
    id: 'coffee',
    name: 'SPECIALTY COFFEE',
    headline: 'Dark Roast Alchemy & Artisan Warmth',
    description: 'Rich amber light filtering through cold brew bottles, glossy roasted beans, and warm volcanic stone aesthetics for heritage roasters.',
    image: abcoffeeImg,
    focus: 'Amber Backlighting, Roasted Textures, Artisan Stillness',
    typicalDeliverables: 'Packaging Launch Series, Social Storyboard Ads, PDP Assets'
  },
  {
    id: 'fashion',
    name: 'FASHION & LIFESTYLE',
    headline: 'Brutalist Geometry & Technical Weaves',
    description: 'Atmospheric mist, waterproof micro-textures, and high-contrast editorial backdrops for technical apparel, eyewear, and luxury accessories.',
    image: veloImg,
    focus: 'Materiality, Fabric Tension, Silhouette, Architectural Space',
    typicalDeliverables: 'Editorial Lookbook Loops, 9:16 Reels, Hero Video Banners'
  },
  {
    id: 'consumer-products',
    name: 'CONSUMER PRODUCTS',
    headline: 'Engineered Precision for Everyday Objects',
    description: 'Elevating electronics, wellness devices, and modern home essentials with sculptural lighting, exploded mechanics, and premium tactile weight.',
    image: heroImg,
    focus: 'Hardware Craft, Precision Finishing, Tactile Luxury',
    typicalDeliverables: 'Exploded View Animations, Product Launch Film, Feature Cards'
  }
];

export const BEFORE_AFTER_DATA = [
  {
    id: 'skincare',
    title: 'Lumen Barrier Serum',
    category: 'Skincare / Beauty',
    beforeImg: beforeSkincareImg,
    afterImg: skincareImg,
    beforeLabel: 'Flat Phone Snapshot',
    beforeNotes: 'Harsh fluorescent lighting, washed out colors, cluttered background, zero emotional appeal or perceived value.',
    afterLabel: 'Ad Creative Commercial',
    afterNotes: 'Obsidian water reflection, golden rim lighting, macro glass caustics, and Vogue-caliber cosmetic atmosphere.',
    perceivedValueLift: 'From $18 cheap commodity feel to $85 luxury prestige positioning.'
  },
  {
    id: 'coffee',
    title: 'ABCOFFEE Cold Brew',
    category: 'Specialty Beverage',
    beforeImg: beforeSkincareImg, // Will show with custom filter/contrast fallback
    afterImg: abcoffeeImg,
    beforeLabel: 'Standard Studio Staging',
    beforeNotes: 'Standard white seamless sweep, flat lighting, looks like an ordinary Amazon catalog listing.',
    afterLabel: 'Ad Creative Commercial',
    afterNotes: 'Volcanic wet slate, roasted coffee beans in rim light, rich amber bottle glow, craft artisan aura.',
    perceivedValueLift: '+310% higher click-through on Meta paid ads compared to standard white background.'
  },
  {
    id: 'protein',
    title: 'SURGE Crisp Bar',
    category: 'Sports Nutrition',
    beforeImg: beforeSkincareImg,
    afterImg: surgeImg,
    beforeLabel: 'Foil Packaging Stills',
    beforeNotes: 'Unopened plastic wrapper with harsh glare reflections, impossible to see appetite appeal or quality.',
    afterLabel: 'Ad Creative Commercial',
    afterNotes: 'High-speed chocolate break, textured almond cross-section, slow-motion crumb dynamics, rich contrast.',
    perceivedValueLift: '41% thumbstop rate on TikTok ads vs 14% category average.'
  }
];

export const SHOWREEL_CLIPS = [
  {
    id: 'clip-1',
    title: '01 / Macro Liquid Optics',
    brand: 'LUMEN BEAUTY',
    category: 'Skincare',
    image: skincareImg,
    time: '00:03'
  },
  {
    id: 'clip-2',
    title: '02 / High-Speed Chocolate Break',
    brand: 'SURGE NUTRITION',
    category: 'Fitness',
    image: surgeImg,
    time: '00:07'
  },
  {
    id: 'clip-3',
    title: '03 / Amber Cold Brew Cascade',
    brand: 'ABCOFFEE',
    category: 'Beverage',
    image: abcoffeeImg,
    time: '00:12'
  },
  {
    id: 'clip-4',
    title: '04 / Raw Slate Shaker Reveal',
    brand: 'MAX PROTEIN',
    category: 'Fitness',
    image: maxProteinImg,
    time: '00:18'
  },
  {
    id: 'clip-5',
    title: '05 / Yuzu Citrus Effervescence',
    brand: 'AURA BOTANICALS',
    category: 'Functional Soda',
    image: auraImg,
    time: '00:23'
  },
  {
    id: 'clip-6',
    title: '06 / Architectural Rain Mist',
    brand: 'VELO PERFORMANCE',
    category: 'Technical Fashion',
    image: veloImg,
    time: '00:28'
  }
];
