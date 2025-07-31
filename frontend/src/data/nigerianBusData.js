// Single Nigerian Bus Company Data
export const companyInfo = {
  name: "NaijaBus Express",
  shortName: "NaijaBus",
  established: "2010",
  fleet_size: 85,
  rating: 4.7,
  description: "Nigeria's premier intercity bus service connecting all major cities with comfort, safety, and reliability",
  colors: {
    primary: "#059669", // Green
    secondary: "#0891b2", // Blue
    accent: "#7c3aed" // Purple
  },
  contact: {
    phone: "+234 800 NAIJA BUS",
    email: "info@naijabus.ng",
    website: "www.naijabus.ng"
  },
  headquarters: "Lagos, Nigeria"
};

// Nigerian cities for routes
export const nigerianCities = [
  { value: 'lagos', label: 'Lagos', state: 'Lagos State' },
  { value: 'abuja', label: 'Abuja', state: 'FCT' },
  { value: 'kano', label: 'Kano', state: 'Kano State' },
  { value: 'ibadan', label: 'Ibadan', state: 'Oyo State' },
  { value: 'port-harcourt', label: 'Port Harcourt', state: 'Rivers State' },
  { value: 'benin-city', label: 'Benin City', state: 'Edo State' },
  { value: 'kaduna', label: 'Kaduna', state: 'Kaduna State' },
  { value: 'jos', label: 'Jos', state: 'Plateau State' },
  { value: 'ilorin', label: 'Ilorin', state: 'Kwara State' },
  { value: 'enugu', label: 'Enugu', state: 'Enugu State' },
  { value: 'calabar', label: 'Calabar', state: 'Cross River State' },
  { value: 'warri', label: 'Warri', state: 'Delta State' },
  { value: 'aba', label: 'Aba', state: 'Abia State' },
  { value: 'maiduguri', label: 'Maiduguri', state: 'Borno State' },
  { value: 'sokoto', label: 'Sokoto', state: 'Sokoto State' }
];

// Bus terminals across Nigerian states
export const busTerminals = {
  lagos: [
    { name: "Ojota Terminal", address: "Ojota, Lagos", state: "Lagos State" },
    { name: "Mile 2 Terminal", address: "Mile 2, Amuwo Odofin", state: "Lagos State" },
    { name: "Berger Terminal", address: "Berger, Arepo", state: "Lagos State" }
  ],
  abuja: [
    { name: "Jabi Motor Park", address: "Jabi District", state: "FCT" },
    { name: "Nyanya Terminal", address: "Nyanya", state: "FCT" },
    { name: "Utako Terminal", address: "Utako District", state: "FCT" }
  ],
  kano: [
    { name: "Kano Line Terminal", address: "Kano Metropolitan", state: "Kano State" },
    { name: "Sabon Gari Terminal", address: "Sabon Gari", state: "Kano State" }
  ],
  ibadan: [
    { name: "Iwo Road Terminal", address: "Iwo Road", state: "Oyo State" },
    { name: "New Garage Terminal", address: "Challenge", state: "Oyo State" }
  ],
  "port-harcourt": [
    { name: "Mile 3 Terminal", address: "Mile 3", state: "Rivers State" },
    { name: "Waterlines Terminal", address: "Waterlines Junction", state: "Rivers State" }
  ],
  "benin-city": [
    { name: "New Benin Terminal", address: "New Benin", state: "Edo State" },
    { name: "Uselu Terminal", address: "Uselu", state: "Edo State" }
  ],
  kaduna: [
    { name: "Central Terminal", address: "Kaduna Central", state: "Kaduna State" }
  ],
  jos: [
    { name: "Jos Main Terminal", address: "Jos Central", state: "Plateau State" }
  ],
  ilorin: [
    { name: "Ilorin Terminal", address: "Ilorin Central", state: "Kwara State" }
  ],
  enugu: [
    { name: "Holy Ghost Terminal", address: "Holy Ghost", state: "Enugu State" },
    { name: "New Market Terminal", address: "New Market", state: "Enugu State" }
  ],
  calabar: [
    { name: "Calabar Terminal", address: "Calabar Central", state: "Cross River State" }
  ],
  warri: [
    { name: "Warri Terminal", address: "Warri Central", state: "Delta State" }
  ],
  aba: [
    { name: "Aba Terminal", address: "Aba Central", state: "Abia State" }
  ],
  maiduguri: [
    { name: "Maiduguri Terminal", address: "Maiduguri Central", state: "Borno State" }
  ],
  sokoto: [
    { name: "Sokoto Terminal", address: "Sokoto Central", state: "Sokoto State" }
  ]
};

// Company's bus fleet
export const companyBuses = [
  {
    id: 1,
    name: "NaijaBus Executive",
    passengers: 45,
    category: "Executive",
    image: "https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.9,
    features: ["AC", "WiFi", "Entertainment", "Reclining Seats", "Charging Ports"],
    amenities: ["Onboard Restroom", "Refreshments", "Blankets"],
    priceRange: { min: 8000, max: 15000 }
  },
  {
    id: 2,
    name: "NaijaBus Standard",
    passengers: 50,
    category: "Standard",
    image: "https://images.pexels.com/photos/1098364/pexels-photo-1098364.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    features: ["AC", "Comfortable Seats", "Music System"],
    amenities: ["Water", "Snacks"],
    priceRange: { min: 5000, max: 10000 }
  },
  {
    id: 3,
    name: "NaijaBus Luxury",
    passengers: 42,
    category: "Luxury",
    image: "https://images.pexels.com/photos/1098366/pexels-photo-1098366.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.8,
    features: ["AC", "WiFi", "Leather Seats", "Entertainment", "Charging Ports"],
    amenities: ["Onboard Restroom", "Premium Refreshments", "Blankets"],
    priceRange: { min: 10000, max: 18000 }
  },
  {
    id: 4,
    name: "NaijaBus Economy",
    passengers: 55,
    category: "Economy",
    image: "https://images.pexels.com/photos/1098367/pexels-photo-1098367.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.3,
    features: ["AC", "Comfortable Seats"],
    amenities: ["Water"],
    priceRange: { min: 3500, max: 7000 }
  },
  {
    id: 5,
    name: "NaijaBus VIP",
    passengers: 38,
    category: "VIP",
    image: "https://images.pexels.com/photos/1098368/pexels-photo-1098368.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.9,
    features: ["AC", "WiFi", "Premium Leather Seats", "Entertainment", "USB Charging"],
    amenities: ["Onboard Restroom", "Gourmet Refreshments", "Premium Blankets", "Personal Attendant"],
    priceRange: { min: 12000, max: 22000 }
  },
  {
    id: 6,
    name: "NaijaBus Express",
    passengers: 48,
    category: "Express",
    image: "https://images.pexels.com/photos/1098369/pexels-photo-1098369.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    features: ["AC", "WiFi", "Reclining Seats", "Fast Service"],
    amenities: ["Onboard Restroom", "Light Refreshments"],
    priceRange: { min: 7000, max: 13000 }
  }
];

// Featured routes (top 3 most popular)
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
    features: ["Luxury Options", "Express Service", "Scenic Route"]
  }
];

// All available routes
export const allRoutes = [
  ...featuredRoutes,
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
    features: ["Scenic Route", "Coastal Destination", "Tourism Friendly"]
  },
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
    features: ["Scenic Route", "Short Journey", "Cool Climate"]
  }
];

// Popular routes for quick selection (simplified data)
export const popularRoutes = [
  { from: "Lagos", to: "Abuja", price: "₦8,000" },
  { from: "Lagos", to: "Ibadan", price: "₦2,500" },
  { from: "Port Harcourt", to: "Abuja", price: "₦9,000" },
  { from: "Lagos", to: "Enugu", price: "₦7,000" },
  { from: "Abuja", to: "Kano", price: "₦6,000" },
  { from: "Lagos", to: "Benin City", price: "₦5,500" }
];

// Company offers and promotions
export const companyOffers = [
  {
    id: 1,
    title: "New Year Travel Special",
    subtitle: "Start 2025 with 40% off your first trip",
    code: "NEWYEAR40",
    discount: "40% OFF",
    validTill: "31st January 2025",
    minAmount: 5000,
    maxDiscount: 6000,
    description: "Celebrate the New Year with amazing savings on all routes",
    terms: ["Valid for new customers only", "Cannot be combined with other offers", "Minimum booking of ₦5,000"]
  },
  {
    id: 2,
    title: "Weekend Getaway",
    subtitle: "25% off all weekend travels",
    code: "WEEKEND25",
    discount: "25% OFF",
    validTill: "Every Weekend",
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
    minAmount: 15000,
    maxDiscount: 8000,
    description: "Perfect for family trips and group travel",
    terms: ["Minimum 4 passengers", "Same route and date", "Family members only"]
  }
];

export const formatNairaPrice = (amount) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0
  }).format(amount);
};

export const getRandomTerminals = (cityKey, count = 2) => {
  const terminals = busTerminals[cityKey] || [];
  if (terminals.length <= count) return terminals;
  
  const shuffled = [...terminals].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};