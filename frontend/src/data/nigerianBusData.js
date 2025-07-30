// Nigerian bus companies and comprehensive route data
export const nigerianBusCompanies = [
  {
    id: 1,
    name: "God Is Good Motors",
    shortName: "GIG Motors",
    logo: "https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    established: "1999",
    fleet_size: 150,
    rating: 4.8,
    specialties: ["Luxury", "Express"],
    colors: ["#1e40af", "#ffffff"],
    description: "Nigeria's leading luxury bus service with over 20 years of excellence"
  },
  {
    id: 2,
    name: "ABC Transport",
    shortName: "ABC",
    logo: "https://images.pexels.com/photos/1098364/pexels-photo-1098364.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    established: "1993",
    fleet_size: 200,
    rating: 4.5,
    specialties: ["Economy", "Express"],
    colors: ["#dc2626", "#ffffff"],
    description: "Affordable and reliable transportation across Nigeria"
  },
  {
    id: 3,
    name: "Peace Mass Transit",
    shortName: "Peace Mass",
    logo: "https://images.pexels.com/photos/1098366/pexels-photo-1098366.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    established: "1994",
    fleet_size: 180,
    rating: 4.6,
    specialties: ["Standard", "Economy"],
    colors: ["#059669", "#ffffff"],
    description: "Connecting Nigeria with peace of mind since 1994"
  },
  {
    id: 4,
    name: "Chisco Transport",
    shortName: "Chisco",
    logo: "https://images.pexels.com/photos/1098367/pexels-photo-1098367.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    established: "1998",
    fleet_size: 120,
    rating: 4.3,
    specialties: ["Standard", "Express"],
    colors: ["#7c3aed", "#ffffff"],
    description: "Your trusted partner for intercity travel"
  },
  {
    id: 5,
    name: "Libra Motors",
    shortName: "Libra",
    logo: "https://images.pexels.com/photos/1098368/pexels-photo-1098368.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    established: "2001",
    fleet_size: 90,
    rating: 4.4,
    specialties: ["Luxury", "VIP"],
    colors: ["#ea580c", "#ffffff"],
    description: "Premium travel experience with modern amenities"
  },
  {
    id: 6,
    name: "Cross Country Motors",
    shortName: "Cross Country",
    logo: "https://images.pexels.com/photos/1098369/pexels-photo-1098369.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    established: "2005",
    fleet_size: 75,
    rating: 4.2,
    specialties: ["Standard", "Economy"],
    colors: ["#0891b2", "#ffffff"],
    description: "Bridging distances across Nigerian states"
  }
];

export const nigerianBuses = [
  {
    id: 1,
    name: "GIG Executive",
    company: "God Is Good Motors",
    companyId: 1,
    passengers: 45,
    category: "Luxury",
    image: "https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.9,
    features: ["AC", "WiFi", "Entertainment", "Reclining Seats", "Charging Ports"],
    seatTypes: ["Executive", "VIP"],
    amenities: ["Onboard Restroom", "Refreshments", "Blankets"],
    priceRange: { min: 8000, max: 15000 },
    routes: ["Lagos-Abuja", "Lagos-Port Harcourt", "Abuja-Kano"]
  },
  {
    id: 2,
    name: "ABC Express",
    company: "ABC Transport",
    companyId: 2,
    passengers: 50,
    category: "Express",
    image: "https://images.pexels.com/photos/1098364/pexels-photo-1098364.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    features: ["AC", "Comfortable Seats", "Music System"],
    seatTypes: ["Standard", "Premium"],
    amenities: ["Water", "Snacks"],
    priceRange: { min: 5000, max: 10000 },
    routes: ["Lagos-Ibadan", "Lagos-Benin", "Abuja-Jos"]
  },
  {
    id: 3,
    name: "Peace Cruiser",
    company: "Peace Mass Transit",
    companyId: 3,
    passengers: 48,
    category: "Standard",
    image: "https://images.pexels.com/photos/1098366/pexels-photo-1098366.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    features: ["AC", "Comfortable Seats", "Safety Features"],
    seatTypes: ["Standard"],
    amenities: ["Water", "First Aid"],
    priceRange: { min: 4000, max: 8000 },
    routes: ["Lagos-Enugu", "Port Harcourt-Abuja", "Kano-Lagos"]
  },
  {
    id: 4,
    name: "Chisco Luxury",
    company: "Chisco Transport",
    companyId: 4,
    passengers: 42,
    category: "Luxury",
    image: "https://images.pexels.com/photos/1098367/pexels-photo-1098367.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    features: ["AC", "WiFi", "Reclining Seats", "Entertainment"],
    seatTypes: ["Executive", "Business"],
    amenities: ["Onboard Restroom", "Refreshments"],
    priceRange: { min: 7000, max: 12000 },
    routes: ["Lagos-Calabar", "Abuja-Port Harcourt", "Lagos-Kaduna"]
  },
  {
    id: 5,
    name: "Libra VIP",
    company: "Libra Motors",
    companyId: 5,
    passengers: 38,
    category: "VIP",
    image: "https://images.pexels.com/photos/1098368/pexels-photo-1098368.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.8,
    features: ["AC", "WiFi", "Leather Seats", "Entertainment", "Charging Ports"],
    seatTypes: ["VIP", "Executive"],
    amenities: ["Onboard Restroom", "Premium Refreshments", "Blankets"],
    priceRange: { min: 9000, max: 16000 },
    routes: ["Lagos-Abuja", "Lagos-Warri", "Abuja-Enugu"]
  },
  {
    id: 6,
    name: "Cross Country Standard",
    company: "Cross Country Motors",
    companyId: 6,
    passengers: 52,
    category: "Standard",
    image: "https://images.pexels.com/photos/1098369/pexels-photo-1098369.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.3,
    features: ["AC", "Comfortable Seats"],
    seatTypes: ["Standard"],
    amenities: ["Water"],
    priceRange: { min: 3500, max: 7000 },
    routes: ["Lagos-Ilorin", "Abuja-Maiduguri", "Port Harcourt-Calabar"]
  }
];

export const featuredRoutes = [
  {
    id: 1,
    from: "Lagos",
    to: "Abuja",
    fromState: "Lagos State",
    toState: "FCT",
    distance: "760km",
    duration: "8-10 hours",
    price: { min: 8000, max: 15000 },
    frequency: "Every 2 hours",
    popularity: 95,
    image: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Nigeria's busiest route connecting the commercial capital to the federal capital",
    companies: ["God Is Good Motors", "ABC Transport", "Libra Motors"],
    terminals: {
      from: ["Ojota Motor Park", "Mile 2 Motor Park", "Berger Motor Park"],
      to: ["Jabi Motor Park", "Nyanya Motor Park", "Utako Motor Park"]
    },
    features: ["Express Service", "Multiple Departures", "VIP Options"]
  },
  {
    id: 2,
    from: "Lagos",
    to: "Ibadan",
    fromState: "Lagos State",
    toState: "Oyo State",
    distance: "128km",
    duration: "2-3 hours",
    price: { min: 2500, max: 5000 },
    frequency: "Every 30 minutes",
    popularity: 88,
    image: "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Quick and convenient route between Lagos and the ancient city of Ibadan",
    companies: ["ABC Transport", "Peace Mass Transit", "Cross Country Motors"],
    terminals: {
      from: ["Ojota Motor Park", "Ketu Motor Park"],
      to: ["Iwo Road Motor Park", "New Garage Motor Park"]
    },
    features: ["Frequent Departures", "Short Journey", "Affordable"]
  },
  {
    id: 3,
    from: "Port Harcourt",
    to: "Abuja",
    fromState: "Rivers State",
    toState: "FCT",
    distance: "650km",
    duration: "7-9 hours",
    price: { min: 9000, max: 14000 },
    frequency: "4 times daily",
    popularity: 82,
    image: "https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Connect the oil city to the capital with comfortable travel options",
    companies: ["God Is Good Motors", "Peace Mass Transit", "Chisco Transport"],
    terminals: {
      from: ["Mile 3 Motor Park", "Waterlines Motor Park"],
      to: ["Jabi Motor Park", "Gwagwalada Motor Park"]
    },
    features: ["Luxury Options", "Express Service", "Scenic Route"]
  },
  {
    id: 4,
    from: "Lagos",
    to: "Enugu",
    fromState: "Lagos State",
    toState: "Enugu State",
    distance: "460km",
    duration: "6-8 hours",
    price: { min: 7000, max: 12000 },
    frequency: "3 times daily",
    popularity: 75,
    image: "https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Journey from Lagos to the coal city with reliable transport services",
    companies: ["Peace Mass Transit", "Chisco Transport", "Libra Motors"],
    terminals: {
      from: ["Ojota Motor Park", "Mile 2 Motor Park"],
      to: ["Holy Ghost Motor Park", "New Market Motor Park"]
    },
    features: ["Comfortable Seats", "Rest Stops", "Safe Travel"]
  },
  {
    id: 5,
    from: "Kano",
    to: "Lagos",
    fromState: "Kano State",
    toState: "Lagos State",
    distance: "950km",
    duration: "12-14 hours",
    price: { min: 10000, max: 18000 },
    frequency: "2 times daily",
    popularity: 78,
    image: "https://images.pexels.com/photos/1098364/pexels-photo-1098364.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Long-distance travel from the ancient city of Kano to Lagos",
    companies: ["God Is Good Motors", "ABC Transport", "Peace Mass Transit"],
    terminals: {
      from: ["Kano Line Motor Park", "Sabon Gari Motor Park"],
      to: ["Ojota Motor Park", "Mile 2 Motor Park"]
    },
    features: ["Overnight Travel", "Rest Stops", "VIP Service"]
  },
  {
    id: 6,
    from: "Lagos",
    to: "Calabar",
    fromState: "Lagos State",
    toState: "Cross River State",
    distance: "680km",
    duration: "8-10 hours",
    price: { min: 8500, max: 15000 },
    frequency: "2 times daily",
    popularity: 70,
    image: "https://images.pexels.com/photos/1098366/pexels-photo-1098366.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Travel to the beautiful coastal city of Calabar",
    companies: ["Chisco Transport", "Cross Country Motors", "Libra Motors"],
    terminals: {
      from: ["Ojota Motor Park", "Mile 2 Motor Park"],
      to: ["Calabar Motor Park", "Watt Market Motor Park"]
    },
    features: ["Scenic Route", "Coastal Destination", "Tourism Friendly"]
  }
];

export const popularRoutes = [
  {
    id: 7,
    from: "Abuja",
    to: "Kano",
    fromState: "FCT",
    toState: "Kano State",
    distance: "350km",
    duration: "4-6 hours",
    price: { min: 6000, max: 10000 },
    frequency: "Every 3 hours",
    popularity: 85,
    image: "https://images.pexels.com/photos/1098367/pexels-photo-1098367.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Popular northern route connecting the capital to Kano",
    companies: ["ABC Transport", "Peace Mass Transit", "God Is Good Motors"],
    terminals: {
      from: ["Jabi Motor Park", "Nyanya Motor Park"],
      to: ["Kano Line Motor Park", "Yankaba Motor Park"]
    },
    features: ["Regular Service", "Northern Route", "Business Travel"]
  },
  {
    id: 8,
    from: "Lagos",
    to: "Benin City",
    fromState: "Lagos State",
    toState: "Edo State",
    distance: "320km",
    duration: "4-5 hours",
    price: { min: 5500, max: 9000 },
    frequency: "Every 2 hours",
    popularity: 80,
    image: "https://images.pexels.com/photos/1098368/pexels-photo-1098368.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Gateway to the Mid-West from Lagos",
    companies: ["ABC Transport", "Chisco Transport", "Cross Country Motors"],
    terminals: {
      from: ["Ojota Motor Park", "Berger Motor Park"],
      to: ["New Benin Motor Park", "Uselu Motor Park"]
    },
    features: ["Mid-West Gateway", "Frequent Service", "Historical Route"]
  },
  {
    id: 9,
    from: "Port Harcourt",
    to: "Enugu",
    fromState: "Rivers State",
    toState: "Enugu State",
    distance: "240km",
    duration: "3-4 hours",
    price: { min: 4500, max: 7500 },
    frequency: "Every 2 hours",
    popularity: 77,
    image: "https://images.pexels.com/photos/1098369/pexels-photo-1098369.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Eastern corridor connecting Port Harcourt to Enugu",
    companies: ["Peace Mass Transit", "Libra Motors", "Cross Country Motors"],
    terminals: {
      from: ["Mile 3 Motor Park", "Eleme Motor Park"],
      to: ["Holy Ghost Motor Park", "Ogbete Motor Park"]
    },
    features: ["Eastern Route", "Short Journey", "Regular Service"]
  },
  {
    id: 10,
    from: "Abuja",
    to: "Jos",
    fromState: "FCT",
    toState: "Plateau State",
    distance: "180km",
    duration: "2-3 hours",
    price: { min: 3500, max: 6000 },
    frequency: "Every hour",
    popularity: 73,
    image: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Short scenic route to the beautiful plateau city",
    companies: ["ABC Transport", "Cross Country Motors", "Chisco Transport"],
    terminals: {
      from: ["Jabi Motor Park", "Utako Motor Park"],
      to: ["Jos Main Motor Park", "Terminus Motor Park"]
    },
    features: ["Scenic Route", "Short Journey", "Cool Climate"]
  }
];

export const nigerianOffers = [
  {
    id: 1,
    title: "New Year Travel Special",
    subtitle: "Start 2025 with 40% off your first trip",
    code: "NEWYEAR40",
    discount: "40% OFF",
    validTill: "31st January 2025",
    routes: ["Lagos-Abuja", "Lagos-Ibadan", "Port Harcourt-Abuja"],
    companies: ["God Is Good Motors", "ABC Transport"],
    minAmount: 5000,
    maxDiscount: 6000,
    description: "Celebrate the New Year with amazing savings on popular routes",
    terms: ["Valid for new customers only", "Cannot be combined with other offers", "Minimum booking of ₦5,000"]
  },
  {
    id: 2,
    title: "Weekend Getaway",
    subtitle: "25% off all weekend travels",
    code: "WEEKEND25",
    discount: "25% OFF",
    validTill: "Every Weekend",
    routes: ["All Routes"],
    companies: ["All Companies"],
    minAmount: 3000,
    maxDiscount: 4000,
    description: "Perfect for weekend trips and short getaways",
    terms: ["Valid for Friday-Sunday bookings", "Subject to seat availability", "Minimum booking of ₦3,000"]
  },
  {
    id: 3,
    title: "Student Discount",
    subtitle: "Special rates for students with valid ID",
    code: "STUDENT20",
    discount: "20% OFF",
    validTill: "31st December 2025",
    routes: ["All Routes"],
    companies: ["Peace Mass Transit", "ABC Transport", "Cross Country Motors"],
    minAmount: 2000,
    maxDiscount: 3000,
    description: "Supporting education with affordable travel for students",
    terms: ["Valid student ID required", "Age limit: 16-30 years", "One booking per month"]
  },
  {
    id: 4,
    title: "Family Package",
    subtitle: "Book 4+ seats and save 30%",
    code: "FAMILY30",
    discount: "30% OFF",
    validTill: "31st March 2025",
    routes: ["Lagos-Abuja", "Lagos-Enugu", "Abuja-Kano"],
    companies: ["God Is Good Motors", "Libra Motors", "Chisco Transport"],
    minAmount: 15000,
    maxDiscount: 8000,
    description: "Perfect for family trips and group travel",
    terms: ["Minimum 4 passengers", "Same route and date", "Family members only"]
  },
  {
    id: 5,
    title: "Early Bird Special",
    subtitle: "Book 7 days ahead and save 15%",
    code: "EARLY15",
    discount: "15% OFF",
    validTill: "Ongoing",
    routes: ["All Routes"],
    companies: ["All Companies"],
    minAmount: 4000,
    maxDiscount: 2500,
    description: "Plan ahead and enjoy great savings",
    terms: ["Book minimum 7 days in advance", "Non-refundable", "Subject to availability"]
  },
  {
    id: 6,
    title: "Corporate Discount",
    subtitle: "Special rates for business travelers",
    code: "CORPORATE25",
    discount: "25% OFF",
    validTill: "31st December 2025",
    routes: ["Lagos-Abuja", "Port Harcourt-Abuja", "Kano-Lagos"],
    companies: ["God Is Good Motors", "Libra Motors"],
    minAmount: 8000,
    maxDiscount: 5000,
    description: "Exclusive offer for registered businesses",
    terms: ["Valid company registration required", "Minimum 10 bookings per month", "Invoice payment available"]
  }
];

export const pickupPoints = {
  lagos: [
    { name: "Ojota Motor Park", address: "Ojota, Lagos", landmark: "Near Ojota Bus Stop" },
    { name: "Mile 2 Motor Park", address: "Mile 2, Amuwo Odofin, Lagos", landmark: "Opposite Mile 2 Market" },
    { name: "Ketu Motor Park", address: "Ketu, Lagos", landmark: "Ketu Bus Stop" },
    { name: "Berger Motor Park", address: "Berger, Arepo, Lagos", landmark: "Berger Bridge" },
    { name: "Ikorodu Motor Park", address: "Ikorodu, Lagos", landmark: "Ikorodu Garage" }
  ],
  abuja: [
    { name: "Jabi Motor Park", address: "Jabi, Abuja", landmark: "Jabi Lake Mall Area" },
    { name: "Nyanya Motor Park", address: "Nyanya, Abuja", landmark: "Nyanya Market" },
    { name: "Utako Motor Park", address: "Utako, Abuja", landmark: "Utako Market" },
    { name: "Gwagwalada Motor Park", address: "Gwagwalada, Abuja", landmark: "Gwagwalada Town Center" }
  ],
  "port-harcourt": [
    { name: "Mile 3 Motor Park", address: "Mile 3, Port Harcourt", landmark: "Mile 3 Market" },
    { name: "Waterlines Motor Park", address: "Waterlines, Port Harcourt", landmark: "Waterlines Junction" },
    { name: "Eleme Motor Park", address: "Eleme, Rivers State", landmark: "Eleme Junction" }
  ],
  ibadan: [
    { name: "Iwo Road Motor Park", address: "Iwo Road, Ibadan", landmark: "Iwo Road Interchange" },
    { name: "New Garage Motor Park", address: "New Garage, Ibadan", landmark: "Challenge Area" },
    { name: "Ojoo Motor Park", address: "Ojoo, Ibadan", landmark: "Ojoo Bus Stop" }
  ],
  kano: [
    { name: "Kano Line Motor Park", address: "Kano Line, Kano", landmark: "Central Kano" },
    { name: "Sabon Gari Motor Park", address: "Sabon Gari, Kano", landmark: "Sabon Gari Market" },
    { name: "Yankaba Motor Park", address: "Yankaba, Kano", landmark: "Yankaba Area" }
  ]
};

export const formatNairaPrice = (amount) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0
  }).format(amount);
};

export const getRoutesByPopularity = () => {
  return [...featuredRoutes, ...popularRoutes].sort((a, b) => b.popularity - a.popularity);
};

export const searchRoutes = (from, to) => {
  const allRoutes = [...featuredRoutes, ...popularRoutes];
  return allRoutes.filter(route => 
    route.from.toLowerCase().includes(from.toLowerCase()) && 
    route.to.toLowerCase().includes(to.toLowerCase())
  );
};