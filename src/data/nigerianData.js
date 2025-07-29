// Nigerian cities and routes data
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
  { value: 'owerri', label: 'Owerri', state: 'Imo State' },
  { value: 'calabar', label: 'Calabar', state: 'Cross River State' },
  { value: 'enugu', label: 'Enugu', state: 'Enugu State' },
  { value: 'abeokuta', label: 'Abeokuta', state: 'Ogun State' },
  { value: 'akure', label: 'Akure', state: 'Ondo State' },
  { value: 'bauchi', label: 'Bauchi', state: 'Bauchi State' },
  { value: 'maiduguri', label: 'Maiduguri', state: 'Borno State' },
  { value: 'sokoto', label: 'Sokoto', state: 'Sokoto State' },
  { value: 'uyo', label: 'Uyo', state: 'Akwa Ibom State' },
  { value: 'warri', label: 'Warri', state: 'Delta State' },
  { value: 'aba', label: 'Aba', state: 'Abia State' }
];

export const popularRoutes = [
  { from: 'Lagos', to: 'Abuja', price: 8500, duration: '8h 30m' },
  { from: 'Lagos', to: 'Ibadan', price: 2500, duration: '2h 15m' },
  { from: 'Abuja', to: 'Kano', price: 6000, duration: '6h 45m' },
  { from: 'Lagos', to: 'Port Harcourt', price: 12000, duration: '12h 30m' },
  { from: 'Ibadan', to: 'Abuja', price: 7500, duration: '7h 15m' },
  { from: 'Lagos', to: 'Benin City', price: 5500, duration: '5h 30m' },
  { from: 'Abuja', to: 'Jos', price: 3500, duration: '3h 45m' },
  { from: 'Kano', to: 'Kaduna', price: 2000, duration: '2h 30m' }
];

export const nigerianStates = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno',
  'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT', 'Gombe',
  'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara',
  'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau',
  'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
];

export const formatNairaPrice = (amount) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0
  }).format(amount);
};

export const busTerminals = {
  lagos: [
    'Ojota Motor Park',
    'Mile 2 Motor Park',
    'Ketu Motor Park',
    'Berger Motor Park',
    'Ikorodu Motor Park'
  ],
  abuja: [
    'Jabi Motor Park',
    'Nyanya Motor Park',
    'Utako Motor Park',
    'Gwagwalada Motor Park'
  ],
  kano: [
    'Kano Line Motor Park',
    'Sabon Gari Motor Park',
    'Yankaba Motor Park'
  ],
  ibadan: [
    'Iwo Road Motor Park',
    'New Garage Motor Park',
    'Challenge Motor Park'
  ],
  'port-harcourt': [
    'Mile 3 Motor Park',
    'Waterlines Motor Park',
    'Eleme Motor Park'
  ]
};