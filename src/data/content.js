// Content sourced from thalassaseychelles.com — rewritten for a premium brand voice.
// Image URLs point to the property's real photo library (staah.net CDN).

export const site = {
  name: "Thalassa",
  fullName: "Thalassa Seychelles",
  tagline: "Escape · Relax · Indulge",
  phone: "+248 4303881",
  email: "reservations@thalassaseychelles.com",
  address: "N Coast Road, De Quincy, Beau Vallon, Seychelles",
  bookingUrl:
    "https://www.swiftbook.io/inst/#home?propertyId=621M2A2xdQ4mFUTJMDCEhqmJ95pSEgpsOSgjYzNzE=&JDRN=Y",
  whatsapp: "https://wa.me/2484303881",
  instagram: "https://www.instagram.com/thalassa.seychelles/",
  facebook: "https://www.facebook.com/Thalassa.Seychelles",
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "Apartments", to: "/apartments" },
  { label: "Gallery", to: "/gallery" },
  { label: "Explore", to: "/explore" },
  { label: "Contact", to: "/contact" },
];

export const images = {
  heroA:
    "https://homesweb.staah.net/imagelibrary/1737117210_8357_ThalassaSeychelles-HotelExterior02.jpg",
  heroB:
    "https://homesweb.staah.net/imagelibrary/1737117451_8357_ThalassaSeychelles-HotelExterior10-Copy-Copy.jpg",
  heroC: "https://homesweb.staah.net/imagelibrary/1733983704_8357_Picture8.jpg",
  exteriorA:
    "https://homesweb.staah.net/imagelibrary/1737117344_8357_ThalassaSeychelles-HotelExterior03.jpg",
  exteriorB:
    "https://homesweb.staah.net/imagelibrary/1737117393_8357_ThalassaSeychelles-HotelExterior09.jpg",
  interiorA:
    "https://homesweb.staah.net/imagelibrary/1737118081_8357_ThalassaSeychelles-HotelInterior11.jpg",
  interiorB: "https://homesweb.staah.net/imagelibrary/1733991976_8357_Picture8.jpg",
  interiorC: "https://homesweb.staah.net/imagelibrary/1733983700_8357_Picture3.jpg",
  interiorD: "https://homesweb.staah.net/imagelibrary/1733983701_8357_Picture4.jpg",
  poolA: "https://homesweb.staah.net/imagelibrary/1733984696_8357_Picture24.jpg",
  poolB: "https://homesweb.staah.net/imagelibrary/1733984699_8357_Picture28.jpg",
  loungeA: "https://homesweb.staah.net/imagelibrary/1733991974_8357_Picture5.jpg",
  loungeB: "https://homesweb.staah.net/imagelibrary/1733991974_8357_Picture6.jpg",
  surrounding:
    "https://homesweb.staah.net/imagelibrary/1737117869_8357_ThalassaSeychelles-SurroundingAreaAttractions05.jpg",
  award:
    "https://homesweb.staah.net/imagelibrary/1727930628_8357_WhatsAppImage2024-10-02at15.42.37.jpeg",
  studio:
    "https://homesweb.staah.net/imagelibrary/big_1737118661_8357_ThalassaSeychelles-StandardApartmentDouble29.jpg",
  twoBed:
    "https://homesweb.staah.net/imagelibrary/big_1737117265_8357_ThalassaSeychelles-2-BedroomApartment03-Copy.jpg",
  suite:
    "https://homesweb.staah.net/imagelibrary/big_1737120247_8357_ThalassaSeychelles-SuiteApartment02.jpg",
  logo: "https://homesweb.staah.net/8357/1702349850_8357_Artboard-18logo.png",
  dining1:
    "https://homesweb.staah.net/imagelibrary/big_1737118588_8357_ThalassaSeychelles-ChopShopGrub05.jpg",
  dining2:
    "https://homesweb.staah.net/imagelibrary/big_1737118583_8357_ThalassaSeychelles-ChopShopGrub04-Copy-Copy.jpg",
  dining3:
    "https://homesweb.staah.net/imagelibrary/big_1737118505_8357_ThalassaSeychelles-ChopShopGrub02.jpg",
  dining4:
    "https://homesweb.staah.net/imagelibrary/big_1737118471_8357_ThalassaSeychelles-ChopShopGrub01-Copy.jpg",
};

export const apartments = [
  {
    slug: "studio-apartment",
    name: "Studio Apartment",
    short: "A cozy, self-contained retreat with an efficient, elegant layout.",
    description:
      "A compact retreat built for effortless island living. The studio pairs a comfortable sleeping area with a kitchenette and lounge corner, finished in warm, natural materials — ideal for couples or solo travelers who want easy access to Beau Vallon beach.",
    image: images.studio,
    gallery: [images.studio, images.interiorC, images.interiorD],
    guests: 2,
    size: "32 m²",
    bed: "1 Queen bed",
    view: "Garden view",
    amenities: ["Free WiFi", "Air conditioning", "Kitchenette", "Smart TV", "Private bathroom", "Daily housekeeping"],
    from: "From €120 / night",
  },
  {
    slug: "two-bedroom-apartment",
    name: "Two-Bedroom Apartment",
    short: "A spacious haven where comfort and convenience converge.",
    description:
      "Room to spread out. Two private bedrooms open onto a shared living and dining area with a full kitchen — a natural choice for families or friends travelling together who still want their own space to unwind after a day at the beach.",
    image: images.twoBed,
    gallery: [images.twoBed, images.interiorA, images.loungeA],
    guests: 4,
    size: "58 m²",
    bed: "2 Queen beds",
    view: "Partial sea view",
    amenities: ["Free WiFi", "Full kitchen", "2 bathrooms", "Living & dining area", "Air conditioning", "Balcony"],
    from: "From €195 / night",
  },
  {
    slug: "suite-apartment",
    name: "Suite Apartment",
    short: "Where luxury meets breath-taking views.",
    description:
      "The most indulgent address on the property. A generous suite with a soaking tub, an open living space and elevated finishes throughout — designed for guests who want the fullest expression of Thalassa's authentic Creole hospitality.",
    image: images.suite,
    gallery: [images.suite, images.interiorB, images.loungeB],
    guests: 3,
    size: "45 m²",
    bed: "1 King bed",
    view: "Sea view",
    amenities: ["Free WiFi", "Soaking tub", "Kitchenette", "Smart TV", "Air conditioning", "Private balcony"],
    from: "From €165 / night",
  },
];

export const amenities = [
  { title: "Beau Vallon Beach", detail: "Steps from Seychelles' longest, most celebrated stretch of sand.", icon: "/svg/beach.svg" },
  { title: "Pool & Sun Deck", detail: "A quiet pool terrace framed by tropical planting.", icon: "/svg/pool.svg" },
  { title: "European Supermarket", detail: "Full-service grocery on-site, right in the building.", icon: "/svg/shopping-cart.svg" },
  { title: "Multi-Cuisine Dining", detail: "QSR-concept restaurant steps from your door.", icon: "/svg/food.svg" },
  { title: "24-Hour Front Desk", detail: "Concierge and arrival support, day or night.", icon: "/svg/concierge-bell.svg" },
  { title: "Free WiFi Throughout", detail: "Fast, reliable connectivity across the property.", icon: "/svg/wifi.svg" },
  { title: "On-Site Parking", detail: "Complimentary parking for guests with a vehicle.", icon: "/svg/square-parking.svg" },
  { title: "Airport Shuttle (Paid)", detail: "Door-to-door transfers arranged on request, for a fee.", icon: "/svg/aiportshuttle.svg" },
  { title: "Laundry & Housekeeping", detail: "Daily housekeeping and dry-cleaning service.", icon: "/svg/laundry.svg" },
];

export const stats = [
  { value: "9.5", label: "Guest rating on Booking.com" },
  { value: "2023", label: "Newly built & opened" },
  { value: "3", label: "Apartment types" },
  { value: "8 min", label: "Drive to city centre" },
];

export const reviews = [
  {
    name: "Amelia H.",
    origin: "United Kingdom",
    quote:
      "Steps from Beau Vallon beach and finished to a standard we didn't expect — quiet, spotless, and the staff made every day easy.",
    rating: 5,
  },
  {
    name: "Julien M.",
    origin: "France",
    quote:
      "The two-bedroom apartment gave our family real space to relax. Walking distance to everything, yet it still felt private and calm.",
    rating: 5,
  },
  {
    name: "Sara K.",
    origin: "Germany",
    quote:
      "Genuinely one of the best-value stays we've had in the Seychelles. The suite's balcony view alone was worth it.",
    rating: 5,
  },
  {
    name: "Daniel O.",
    origin: "South Africa",
    quote:
      "Brand new, beautifully kept, and the team went out of their way to arrange excursions for us. Authentic Creole hospitality, as promised.",
    rating: 5,
  },
];

export const faqs = [
  {
    q: "How far is Thalassa from Beau Vallon beach?",
    a: "Just a short walk. The property sits within easy walking distance of Beau Vallon beach, along with restaurants and the bus stop.",
  },
  {
    q: "What's included with each apartment?",
    a: "Every apartment includes free WiFi, air conditioning, daily housekeeping and access to the on-site supermarket and dining outlet. Specific amenities vary by apartment type.",
  },
  {
    q: "Is airport transfer available?",
    a: "Yes — airport shuttle service can be arranged on request for a small fee. Reach out to our front desk ahead of your arrival to schedule it.",
  },
  {
    q: "What is the cancellation policy?",
    a: "Cancellation terms vary by rate and season. Full details are shown at checkout when you book, or you can ask our reservations team directly.",
  },
  {
    q: "Is the property suitable for families?",
    a: "Absolutely. Our Two-Bedroom Apartments are designed for families and groups, with full kitchens and separate sleeping areas.",
  },
  {
    q: "Do you offer long-stay rates?",
    a: "Yes, extended-stay pricing is available. Contact our reservations team directly for a tailored quote.",
  },
];

export const explore = [
  {
    title: "Beau Vallon Beach",
    category: "Beach",
    detail: "Seychelles' longest beach — soft white sand, calm currents and full water-sports access.",
    image: images.exteriorA,
  },
  {
    title: "Sunset Beach Bar",
    category: "Dining",
    detail: "Beachfront cocktails and fresh seafood a short stroll from the property.",
    image: images.loungeA,
  },
  {
    title: "Beau Vallon Night Market",
    category: "Activity",
    detail: "A weekly waterfront market with local crafts, live music and Creole street food.",
    image: images.surrounding,
  },
  {
    title: "Morne Seychellois National Park",
    category: "Nature",
    detail: "Rainforest trails and panoramic viewpoints, a short drive from Beau Vallon.",
    image: images.exteriorB,
  },
  {
    title: "Victoria City Centre",
    category: "Culture",
    detail: "The capital's markets, cathedral and clocktower — just 8 minutes by car.",
    image: images.interiorA,
  },
  {
    title: "Water Sports Centre",
    category: "Activity",
    detail: "Motorised and non-motorised water sports directly on Beau Vallon beach.",
    image: images.poolA,
  },
];

export const galleryImages = [
  // Exterior
  { src: images.heroA, category: "Exterior" },
  { src: images.heroB, category: "Exterior" },
  { src: images.exteriorA, category: "Exterior" },
  { src: images.exteriorB, category: "Exterior" },
  {
    src: "https://homesweb.staah.net/imagelibrary/big_1737117493_8357_ThalassaSeychelles-HotelExterior14-Copy.jpg",
    category: "Exterior",
  },
  // Interior / Lounge
  { src: images.interiorA, category: "Interior" },
  { src: images.interiorB, category: "Interior" },
  { src: images.interiorC, category: "Interior" },
  { src: images.interiorD, category: "Interior" },
  {
    src: "https://homesweb.staah.net/imagelibrary/big_1737118000_8357_ThalassaSeychelles-HotelInterior09-Copy.jpg",
    category: "Interior",
  },
  {
    src: "https://homesweb.staah.net/imagelibrary/big_1737118047_8357_ThalassaSeychelles-HotelInterior10.jpg",
    category: "Interior",
  },
  {
    src: "https://homesweb.staah.net/imagelibrary/big_1737277185_8357_ThalassaSeychelles-HotelInterior06.jpg",
    category: "Interior",
  },
  { src: images.loungeA, category: "Lounge" },
  { src: images.loungeB, category: "Lounge" },
  // Pool
  { src: images.poolA, category: "Pool" },
  { src: images.poolB, category: "Pool" },
  // Apartments — Studio / Twin
  { src: images.studio, category: "Apartments" },
  {
    src: "https://homesweb.staah.net/imagelibrary/big_1737117678_8357_ThalassaSeychelles-StandardApartmentDouble32.jpg",
    category: "Apartments",
  },
  {
    src: "https://homesweb.staah.net/imagelibrary/big_1737118757_8357_ThalassaSeychelles-StandardApartmentTwin05.jpg",
    category: "Apartments",
  },
  {
    src: "https://homesweb.staah.net/imagelibrary/big_1737204388_8357_ThalassaSeychelles-StandardApartmentTwin19.jpg",
    category: "Apartments",
  },
  // Apartments — Two-Bedroom
  { src: images.twoBed, category: "Apartments" },
  {
    src: "https://homesweb.staah.net/imagelibrary/big_1737120420_8357_ThalassaSeychelles-2-BedroomApartment27.jpg",
    category: "Apartments",
  },
  {
    src: "https://homesweb.staah.net/imagelibrary/big_1737277427_8357_ThalassaSeychelles-2-BedroomApartment37.jpg",
    category: "Apartments",
  },
  {
    src: "https://homesweb.staah.net/imagelibrary/big_1738757742_8357_ThalassaSeychelles-2-BedroomApartment30.jpg",
    category: "Apartments",
  },
  // Apartments — Suite
  { src: images.suite, category: "Apartments" },
  {
    src: "https://homesweb.staah.net/imagelibrary/big_1737120245_8357_ThalassaSeychelles-SuiteApartment01.jpg",
    category: "Apartments",
  },
  {
    src: "https://homesweb.staah.net/imagelibrary/big_1737204786_8357_ThalassaSeychelles-SuiteApartment18.jpg",
    category: "Apartments",
  },
  {
    src: "https://homesweb.staah.net/imagelibrary/big_1737204905_8357_ThalassaSeychelles-SuiteApartment12.jpg",
    category: "Apartments",
  },
  // Dining
  { src: images.dining1, category: "Dining" },
  { src: images.dining2, category: "Dining" },
  { src: images.dining3, category: "Dining" },
  { src: images.dining4, category: "Dining" },
  // Surroundings
  { src: images.surrounding, category: "Surroundings" },
  {
    src: "https://homesweb.staah.net/imagelibrary/big_1737117805_8357_ThalassaSeychelles-SurroundingAreaAttractions09.jpg",
    category: "Surroundings",
  },
  {
    src: "https://homesweb.staah.net/imagelibrary/big_1737203282_8357_ThalassaSeychelles-SurroundingAreaAttractions02.jpg",
    category: "Surroundings",
  },
  {
    src: "https://homesweb.staah.net/imagelibrary/big_1737274099_8357_ThalassaSeychelles-SurroundingAreaAttractions26.jpg",
    category: "Surroundings",
  },
  {
    src: "https://homesweb.staah.net/imagelibrary/big_1737274118_8357_ThalassaSeychelles-SurroundingAreaAttractions32.jpg",
    category: "Surroundings",
  },
  {
    src: "https://homesweb.staah.net/imagelibrary/big_1737203287_8357_ThalassaSeychelles-SurroundingAreaAttractions04.jpg",
    category: "Surroundings",
  },
  {
    src: "https://homesweb.staah.net/imagelibrary/big_1737203295_8357_ThalassaSeychelles-SurroundingAreaAttractions07.jpg",
    category: "Surroundings",
  },
  {
    src: "https://homesweb.staah.net/imagelibrary/big_1737274102_8357_ThalassaSeychelles-SurroundingAreaAttractions27.jpg",
    category: "Surroundings",
  },
  // More exterior
  {
    src: "https://homesweb.staah.net/imagelibrary/big_1737117451_8357_ThalassaSeychelles-HotelExterior10-Copy-Copy.jpg",
    category: "Exterior",
  },
  {
    src: "https://homesweb.staah.net/imagelibrary/big_1733983704_8357_Picture8.jpg",
    category: "Exterior",
  },
  // More interior / apartments
  {
    src: "https://homesweb.staah.net/imagelibrary/big_1737120519_8357_ThalassaSeychelles-StandardApartmentDouble33.jpg",
    category: "Apartments",
  },
  {
    src: "https://homesweb.staah.net/imagelibrary/big_1737118754_8357_ThalassaSeychelles-StandardApartmentTwin04.jpg",
    category: "Apartments",
  },
  {
    src: "https://homesweb.staah.net/imagelibrary/big_1737277311_8357_ThalassaSeychelles-2-BedroomApartment12-Copy-Copy.jpg",
    category: "Apartments",
  },
  {
    src: "https://homesweb.staah.net/imagelibrary/big_1737204778_8357_ThalassaSeychelles-SuiteApartment15.jpg",
    category: "Apartments",
  },
  {
    src: "https://homesweb.staah.net/imagelibrary/big_1738757748_8357_ThalassaSeychelles-2-BedroomApartment32.jpg",
    category: "Apartments",
  },
  {
    src: "https://homesweb.staah.net/imagelibrary/big_1737204404_8357_ThalassaSeychelles-StandardApartmentTwin25.jpg",
    category: "Apartments",
  },
  // More dining
  {
    src: "https://homesweb.staah.net/imagelibrary/big_1737118591_8357_ThalassaSeychelles-ChopShopGrub06-Copy-Copy.jpg",
    category: "Dining",
  },
  // Pool / lounge extras
  {
    src: "https://homesweb.staah.net/imagelibrary/big_1737117869_8357_ThalassaSeychelles-SurroundingAreaAttractions05.jpg",
    category: "Surroundings",
  },
];

export const about = {
  eyebrow: "Who we are",
  heading: "A new address on Beau Vallon, built for the way you actually holiday.",
  body:
    "Thalassa opened its doors in November 2023, steps from Beau Vallon — the Seychelles' longest stretch of beach, known for its calm waters and unbroken sunsets. Thalassa is part of GSC Hospitality, an 18-year-old, 100% Seychellois-owned group with deep roots across hospitality, retail and logistics in the islands. That heritage shows up in the details: a European-standard supermarket and dining outlet built into the property, walkable access to Victoria, and a team that treats authentic Creole hospitality as a standard, not a slogan.",
};
