// Tab keys line up by index with the labels below.
export const tabs = [
  { key: 'new', label: 'New Arrival' },
  { key: 'best', label: 'Bestseller' },
  { key: 'featured', label: 'Featured Products' },
]

export const categories = ['Headsets', 'Mice', 'Keyboards', 'Controllers']

// Assigns each product a category (browse + filters) and section tabs.
// Brand/price/specs come from productsCatalog (merged by name in the seed).
export const catalog = [
  // Headsets
  { name: 'HyperX Cloud III', price: '$100', image: '/imgs/hyperx-cloud-3.webp', category: 'Headsets', tabs: ['new', 'featured'], favorite: true },
  { name: 'HyperX Cloud Stinger 2', price: '$50', image: '/imgs/hyperx-cloud-stinger-2.webp', category: 'Headsets', tabs: ['new'] },
  { name: 'SteelSeries Arctis Nova 1', price: '$60', image: '/imgs/steelseries-arctis-nova-1.png', category: 'Headsets', tabs: ['new', 'best'] },
  { name: 'Logitech G435 LIGHTSPEED', price: '$80', image: '/imgs/logitech-g435.webp', category: 'Headsets', tabs: ['best', 'featured'] },

  // Mice
  { name: 'Logitech G203 LIGHTSYNC', price: '$30', image: '/imgs/logitech-g203.jpg', category: 'Mice', tabs: ['new', 'best'] },
  { name: 'Logitech G502 X', price: '$80', image: '/imgs/logitech-g502.jpg', category: 'Mice', tabs: ['new', 'featured'] },
  { name: 'Razer DeathAdder Essential', price: '$30', image: '/imgs/razer-deathadder-essential.jpg', category: 'Mice', tabs: ['new'] },
  { name: 'Glorious Model O', price: '$50', image: '/imgs/glorious-model-o.jpg', category: 'Mice', tabs: ['best', 'featured'] },
  { name: 'A4Tech Bloody V8', price: '$20', image: '/imgs/a4tech-bloody-v8.png', category: 'Mice', tabs: ['new'] },

  // Keyboards
  { name: 'Razer Huntsman V2 TKL', price: '$130', image: '/imgs/razer-huntsman-v2-tkl.png', category: 'Keyboards', tabs: ['new', 'featured'] },
  { name: 'Logitech G213 Prodigy', price: '$50', image: '/imgs/logitech-g213.png', category: 'Keyboards', tabs: ['best'] },
  { name: 'Redragon Kumara K552', price: '$40', image: '/imgs/redragon-kumara-k552.webp', category: 'Keyboards', tabs: ['new', 'best'] },

  // Controllers
  { name: 'Xbox Wireless Controller', price: '$60', image: '/imgs/xbox-controller.jpg', category: 'Controllers', tabs: ['best', 'featured'] },
]

export const discounts = [
  { name: 'Logitech G502 X', price: '$80', image: '/imgs/logitech-g502.jpg' },
  { name: 'Razer DeathAdder Essential', price: '$30', image: '/imgs/razer-deathadder-essential.jpg' },
  { name: 'A4Tech Bloody V8', price: '$20', image: '/imgs/a4tech-bloody-v8.png' },
  { name: 'Redragon Kumara K552', price: '$40', image: '/imgs/redragon-kumara-k552.webp' },
]
