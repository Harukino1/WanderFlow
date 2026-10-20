import { Hotel, Room, TourPackage } from "../models/index.js";

export const hotels = [
  new Hotel(
    "the-lind-boracay",
    "The Lind Boracay",
    "White Beach, Malay, Aklan · Beachfront · Resort",
    "A calm beachfront base on White Beach",
    "A contemporary beachfront resort with direct access to Boracay's famous white sand and attentive island hospitality.",
    9.2,
    842,
    12800,
    "",
    [
      "Breakfast included",
      "Swimming pool",
      "Sea view",
      "Private parking",
      "Restaurant",
    ],
    [],
  ),
  new Hotel(
    "hotel-fina",
    "Hotel Fina",
    "Tabaco City, Albay · City Center · Boutique Hotel",
    "Your modern gateway to the heart of Tabaco",
    "A stylish city stay with warm Bicolano hospitality and easy access to Albay's coastal and volcanic wonders.",
    9.1,
    181,
    2966,
    "",
    [
      "Rooftop Pool & Bar",
      "Modern Guest Rooms",
      "Complimentary Breakfast",
      "City Center Location",
    ],
    [
      new Room(
        "classic-rooftop",
        "hotel-fina",
        "Classic Rooftop View",
        2966,
        "2 adults",
        [],
      ),
    ],
  ),
  new Hotel(
    "hotel-cielo-palawan",
    "Hotel Cielo Palawan",
    "Puerto Princesa, Palawan · City Center · Boutique Hotel",
    "A comfortable launchpad for island adventures",
    "A practical, welcoming base in Puerto Princesa for exploring the Underground River and Palawan's limestone coast.",
    8.6,
    327,
    2850,
    "",
    ["Breakfast included", "Swimming pool", "Private parking", "Restaurant"],
    [],
  ),
  new Hotel(
    "crimson-resort-mactan",
    "Crimson Resort and Spa Mactan",
    "Lapu-Lapu City, Cebu · Seafront · Resort",
    "Slow mornings on Cebu's private shore",
    "A seafront resort in Mactan with a private beach, spacious villas, and easy access to Cebu's marine life.",
    9.0,
    1204,
    10500,
    "",
    ["Breakfast included", "Swimming pool", "Sea view", "Restaurant"],
    [],
  ),
];

export const tours = [
  new TourPackage(
    "mayon-black-lava-atv-trail",
    "Mayon Black Lava ATV Trail",
    "ALBAY · 1 DAY",
    "Trail ride through pine trees, riverbeds, and rugged terrain directly to the 2006 Mayon lava wall.",
    4.9,
    128,
    1000,
    "",
    4,
    "1–8 travelers",
    ["Guide", "equipment", "entrance fees"],
    "Walk & wander",
  ),
  new TourPackage(
    "bicol-culinary-masterclass",
    "Flavors of Bicol Culinary Masterclass",
    "CAMALIG · HALF DAY",
    "Authentic Pinangat making in Camalig, artisanal sili ice cream tasting, and a traditional farm lunch.",
    4.8,
    46,
    1250,
    "",
    4,
    "2–8 travelers",
    ["Guide", "ingredients", "farm lunch"],
    "Food & culture",
  ),
  new TourPackage(
    "coron-island-hopping",
    "Coron Island Hopping and Kayangan Lake",
    "CORON · FULL DAY",
    "Swim through clear lagoons, snorkel coral gardens, and discover the iconic limestone islands of Coron.",
    4.9,
    219,
    2800,
    "",
    8,
    "2–12 travelers",
    ["Boat", "lunch", "guide", "entrance fees"],
    "On the water",
  ),
  new TourPackage(
    "vigan-heritage-walk",
    "Vigan Heritage Streets and Food Walk",
    "VIGAN · HALF DAY",
    "Walk Calle Crisologo with a local historian and taste Ilocano classics in the heart of the heritage city.",
    4.7,
    84,
    1500,
    "",
    4,
    "2–10 travelers",
    ["Guide", "tastings", "museum entrance"],
    "Art & heritage",
  ),
];

export const pageContent = {
  stays: {
    eyebrow: "Your hideaway awaits",
    title: "Find the best place to stay.",
    filterTitle: "Filter your stay",
    reset: "Reset all",
    noResults: "No stays match the selected filters.",
    cancellation: "✓ Free cancellation\nNo prepayment required",
  },
  hotel: {
    gallery: [
      {
        url: "",
        alt: "Hotel Fina rooftop pool",
      },
      {
        url: "",
        alt: "Hotel Fina room",
      },
      {
        url: "",
        alt: "Hotel Fina exterior",
      },
    ],
    locationAction: "View on map ↗",
    photos: "View all 24 photos",
    reviews: "guest reviews",
    amenities: [
      "Rooftop Pool & Bar",
      "Modern Guest Rooms",
      "Complimentary Breakfast",
      "City Center Location",
    ],
    booking: {
      heading: "Your stay at Hotel Fina",
      checkIn: "CHECK-IN",
      checkOut: "CHECK-OUT",
      dates: ["17 Oct 2026", "20 Oct 2026"],
      guests: "2 adults · 1 room",
      nights: "5 nights",
      taxes: "Taxes & fees",
      included: "Included",
      total: "Total",
      reserve: "Reserve your stay",
      notice: "You won’t be charged yet.",
      totalAmount: "₱14,830",
      benefits: [
        "✓  Free cancellation until 5 June",
        "✓  Breakfast for two, every morning",
      ],
    },
  },
  tours: {
    heroEyebrow: "LESS SIGHTSEEING. MORE FEELING.",
    heroTitle: "The coast is better\nwith a local.",
    heroDescription:
      "From salt-in-your-hair boat days to recipes passed down for generations. These are the moments that make a journey.",
    categories: [
      "All experiences",
      "Food & culture",
      "On the water",
      "Art & heritage",
      "Walk & wander",
    ],
    filterTitle: "Find your kind of day",
    reset: "Reset",
    results: "Experiences",
    searchFields: [
      { icon: "location", label: "DESTINATION", value: "Mayon, Albay" },
      { icon: "calendar", label: "WHEN", value: "14–16 Jun 2027" },
      { icon: "people", label: "TRAVELERS", value: "2 adults" },
    ],
  },
  tour: {
    searchFields: [
      { icon: "location", label: "DESTINATION", value: "Mayon, Albay" },
      { icon: "calendar", label: "WHEN", value: "14–16 Jun 2027" },
      { icon: "people", label: "TRAVELERS", value: "2 adults" },
    ],
    gallery: [
      {
        url: "",
        alt: "ATV riding through a Mayon lava trail",
      },
      {
        url: "",
        alt: "Mount Mayon",
      },
      {
        url: "",
        alt: "ATV trail near Mount Mayon",
      },
    ],
    details: {
      "mayon-black-lava-atv-trail": {
        gallery: [
          { alt: "ATV riding through a Mayon lava trail" },
          { alt: "Mount Mayon" },
          { alt: "ATV trail near Mount Mayon" },
        ],
        heading: "Feel the pulse of Mayon, up close.",
        description:
          "This is Albay at its most thrilling. Gear up and ride guided all terrain vehicles along natural gullies carved by past eruptions. Cross rushing mountain streams, navigate rugged rock trails, and climb to the iconic 2006 Black Lava Wall—where you’ll stand right at the foot of the world’s most perfect cone.",
        highlights: [
          "Cross scenic streams and forested gullies along Mayon’s lower slopes.",
          "Trek up massive, hardened lava deposits from Mayon’s historic eruption.",
          "Enjoy unobstructed panoramic views of Legazpi City and the volcano peak.",
        ],
        route:
          "Legazpi Base - Pawa Riverbed - Green Valley - 2006 Lava Wall - Helipad Lookout",
      },
      "bicol-culinary-masterclass": {
        gallery: [
          { alt: "Preparing traditional Pinangat in Camalig" },
          { alt: "Fresh Bicolano ingredients" },
          { alt: "Farm lunch in Camalig" },
        ],
        heading: "Taste the recipes that make Bicol unforgettable.",
        description:
          "Spend a delicious half day in Camalig learning the secrets of Bicolano cooking. Roll up your sleeves for a hands-on Pinangat class, sample artisanal sili ice cream, and share a generous farm lunch made with ingredients from the surrounding countryside.",
        highlights: [
          "Make authentic Pinangat with a local Bicolano cook.",
          "Try surprising flavors, including artisanal sili ice cream.",
          "Share a relaxed farm lunch with locally grown ingredients.",
        ],
        route:
          "Camalig Market - Cooking Kitchen - Sili Ice Cream Tasting - Farm Lunch",
      },
      "coron-island-hopping": {
        gallery: [
          { alt: "Kayangan Lake in Coron" },
          { alt: "Snorkeling in a Coron lagoon" },
          { alt: "Limestone islands around Coron" },
        ],
        heading: "Find your own corner of Coron’s blue.",
        description:
          "Set out across Coron’s clear waters for a full day of swimming, snorkeling, and island discoveries. Cruise between dramatic limestone cliffs, cool off in hidden lagoons, and take in the famous view over Kayangan Lake with a local boat crew.",
        highlights: [
          "Swim in clear lagoons surrounded by towering limestone cliffs.",
          "Snorkel coral gardens teeming with tropical marine life.",
          "Reach the iconic viewpoint above Kayangan Lake.",
        ],
        route:
          "Coron Town - Kayangan Lake - Twin Lagoon - Coral Garden - CYC Beach",
      },
      "vigan-heritage-walk": {
        gallery: [
          { alt: "Calle Crisologo in Vigan" },
          { alt: "Ilocano food tasting" },
          { alt: "Vigan heritage architecture" },
        ],
        heading: "Walk through the living story of Vigan.",
        description:
          "Follow Calle Crisologo with a local historian who brings Vigan’s Spanish-era streets to life. Along the way, taste beloved Ilocano classics, meet the makers preserving old crafts, and uncover the stories behind this remarkable heritage city.",
        highlights: [
          "Explore Calle Crisologo with a knowledgeable local historian.",
          "Taste Ilocano favorites and regional street-food classics.",
          "Discover the craft, homes, and stories behind Vigan’s heritage.",
        ],
        route:
          "Vigan Plaza - Calle Crisologo - Hidden Courtyards - Local Food Stops",
      },
    },
    photos: "All 18 photos",
    tabs: [
      "The experience",
      "Day by day",
      "What's included",
      "Good to know",
      "Reviews",
    ],
    heading: "Feel the pulse of Mayon, up close.",
    description:
      "This is Albay at its most thrilling. Gear up and ride guided all terrain vehicles along natural gullies carved by past eruptions. Cross rushing mountain streams, navigate rugged rock trails, and climb to the iconic 2006 Black Lava Wall—where you’ll stand right at the foot of the world’s most perfect cone.",
    highlights: [
      "Cross scenic streams and forested gullies along Mayon’s lower slopes.",
      "Trek up massive, hardened lava deposits from Mayon’s historic eruption.",
      "Enjoy unobstructed panoramic views of Legazpi City and the volcano peak.",
    ],
    route:
      "Legazpi Base - Pawa Riverbed - Green Valley - 2006 Lava Wall - Helipad Lookout",
    booking: {
      heading: "Your next good story",
      price: 1000,
      duration: "3 days · All scheduled experiences included",
      departureLabel: "Choose your departure",
      departures: [
        ["14–16 Jun 2027", "4 places left"],
        ["21–23 Jun 2027", "5 places left"],
        ["28–30 Jun 2027", "5 places left"],
      ],
      travelers: "Adults (12+)",
      travelerCount: "⊖  2  ⊕",
      lineItem: "₱1,000 × 2 travelers",
      subtotal: "₱2,000",
      taxes: "Taxes & booking fees",
      included: "Included",
      total: "Total",
      reserve: "Reserve your places ↗",
      notice: "Secure checkout · Instant confirmation",
      benefits: ["✓  Free cancellation until 7 June", "✓  Maximum 8 travelers"],
    },
    detailDuration: "3–4 hours · 1–8 travelers · English · Tagalog",
  },
};
