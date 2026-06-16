// Brand list for the products-page sidebar (real counts are computed by the API).
export const brands = [
  { name: 'Logitech', count: 3 },
  { name: 'Razer', count: 2 },
  { name: 'HyperX', count: 2 },
  { name: 'SteelSeries', count: 1 },
  { name: 'Glorious', count: 1 },
  { name: 'A4Tech', count: 1 },
  { name: 'Redragon', count: 1 },
  { name: 'Microsoft', count: 1 },
]

// Secondary filter groups. `prop` maps to the product field (DB columns reused
// with gaming meanings: battery=Connectivity, screen=Surround, diagonal=Driver,
// protection=Platform, memory=Lighting).
export const filterGroups = [
  { name: 'Connectivity', prop: 'battery', options: ['Wired', 'Wireless', 'Bluetooth'] },
  { name: 'Surround sound', prop: 'screen', options: ['Stereo', 'DTS 7.1', 'Spatial Audio', 'Dolby Atmos'] },
  { name: 'Driver size', prop: 'diagonal', options: ['40 mm', '50 mm', '53 mm'] },
  { name: 'Platform', prop: 'protection', options: ['PC', 'PlayStation', 'Xbox', 'Multi-platform'] },
  { name: 'Lighting', prop: 'memory', options: ['RGB', 'Single-colour', 'None'] },
]

export const sortOptions = [
  'By rating',
  'Price: low to high',
  'Price: high to low',
  'Newest first',
]

// Real models. price numeric; empty spec = not applicable.
export const productsCatalog = [
  // Headsets
  { name: 'HyperX Cloud Stinger 2', price: 50, image: '/imgs/hyperx-cloud-stinger-2.webp', brand: 'HyperX', battery: 'Wired', screen: 'DTS 7.1', diagonal: '50 mm', protection: 'PC', memory: 'None' },
  { name: 'HyperX Cloud III', price: 100, image: '/imgs/hyperx-cloud-3.webp', brand: 'HyperX', battery: 'Wired', screen: 'Spatial Audio', diagonal: '53 mm', protection: 'Multi-platform', memory: 'None' },
  { name: 'SteelSeries Arctis Nova 1', price: 60, image: '/imgs/steelseries-arctis-nova-1.png', brand: 'SteelSeries', battery: 'Wired', screen: 'Spatial Audio', diagonal: '40 mm', protection: 'Multi-platform', memory: 'None' },
  { name: 'Logitech G435 LIGHTSPEED', price: 80, image: '/imgs/logitech-g435.webp', brand: 'Logitech', battery: 'Wireless', screen: 'Dolby Atmos', diagonal: '40 mm', protection: 'Multi-platform', memory: 'None' },

  // Mice
  { name: 'Logitech G203 LIGHTSYNC', price: 30, image: '/imgs/logitech-g203.jpg', brand: 'Logitech', battery: 'Wired', screen: '', diagonal: '', protection: 'PC', memory: 'RGB' },
  { name: 'Logitech G502 X', price: 80, image: '/imgs/logitech-g502.jpg', brand: 'Logitech', battery: 'Wired', screen: '', diagonal: '', protection: 'PC', memory: 'RGB' },
  { name: 'Razer DeathAdder Essential', price: 30, image: '/imgs/razer-deathadder-essential.jpg', brand: 'Razer', battery: 'Wired', screen: '', diagonal: '', protection: 'PC', memory: 'Single-colour' },
  { name: 'Glorious Model O', price: 50, image: '/imgs/glorious-model-o.jpg', brand: 'Glorious', battery: 'Wired', screen: '', diagonal: '', protection: 'PC', memory: 'RGB' },
  { name: 'A4Tech Bloody V8', price: 20, image: '/imgs/a4tech-bloody-v8.png', brand: 'A4Tech', battery: 'Wired', screen: '', diagonal: '', protection: 'PC', memory: 'Single-colour' },

  // Keyboards
  { name: 'Razer Huntsman V2 TKL', price: 130, image: '/imgs/razer-huntsman-v2-tkl.png', brand: 'Razer', battery: 'Wired', screen: '', diagonal: '', protection: 'PC', memory: 'RGB' },
  { name: 'Logitech G213 Prodigy', price: 50, image: '/imgs/logitech-g213.png', brand: 'Logitech', battery: 'Wired', screen: '', diagonal: '', protection: 'PC', memory: 'RGB' },
  { name: 'Redragon Kumara K552', price: 40, image: '/imgs/redragon-kumara-k552.webp', brand: 'Redragon', battery: 'Wired', screen: '', diagonal: '', protection: 'PC', memory: 'RGB' },

  // Controllers
  { name: 'Xbox Wireless Controller', price: 60, image: '/imgs/xbox-controller.jpg', brand: 'Microsoft', battery: 'Wireless', screen: '', diagonal: '', protection: 'Xbox', memory: 'None' },
]
