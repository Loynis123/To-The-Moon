// Brand list for the products-page sidebar (real counts are computed by the API).
export const brands = [
  { name: 'To The Moon', count: 1 },
  { name: 'Razer', count: 3 },
  { name: 'HyperX', count: 2 },
  { name: 'SteelSeries', count: 3 },
  { name: 'Logitech', count: 2 },
  { name: 'Corsair', count: 2 },
  { name: 'Microsoft', count: 2 },
  { name: 'Elgato', count: 1 },
]

// Secondary, collapsible filter groups. `prop` maps the group to the product
// field it filters on. The underlying DB columns (battery/screen/diagonal/
// protection/memory) are reused with gaming meanings.
export const filterGroups = [
  { name: 'Connectivity', prop: 'battery', options: ['Wired', 'Wireless', 'Bluetooth'] },
  { name: 'Surround sound', prop: 'screen', options: ['Stereo', '7.1 Surround', 'Spatial Audio'] },
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

// price is numeric for sorting; formatted with $ in the view.
// Spec columns are reused: battery=Connectivity, screen=Surround, diagonal=Driver,
// protection=Platform, memory=Lighting. Empty = not applicable to that product.
export const productsCatalog = [
  // Headsets
  { name: 'To The Moon NOVA Pro Wireless', price: 179, image: '/imgs/headset-nova.jpg', brand: 'To The Moon', battery: 'Wireless', screen: '7.1 Surround', diagonal: '50 mm', protection: 'Multi-platform', memory: 'RGB' },
  { name: 'Razer Kraken V3 X', price: 69, image: '/imgs/headset-kraken.jpg', brand: 'Razer', battery: 'Wired', screen: '7.1 Surround', diagonal: '40 mm', protection: 'PC', memory: 'RGB' },
  { name: 'HyperX Cloud III', price: 99, image: '/imgs/headset-cloud.jpg', brand: 'HyperX', battery: 'Wired', screen: 'Spatial Audio', diagonal: '53 mm', protection: 'Multi-platform', memory: 'None' },
  { name: 'SteelSeries Arctis Nova 7', price: 149, image: '/imgs/headset-arctis.jpg', brand: 'SteelSeries', battery: 'Wireless', screen: 'Spatial Audio', diagonal: '40 mm', protection: 'Multi-platform', memory: 'None' },
  { name: 'Logitech G PRO X 2 Lightspeed', price: 129, image: '/imgs/headset-gprox.jpg', brand: 'Logitech', battery: 'Wireless', screen: '7.1 Surround', diagonal: '50 mm', protection: 'PC', memory: 'None' },
  { name: 'Corsair Virtuoso RGB Wireless', price: 179, image: '/imgs/headset-virtuoso.jpg', brand: 'Corsair', battery: 'Wireless', screen: '7.1 Surround', diagonal: '50 mm', protection: 'Multi-platform', memory: 'RGB' },

  // Keyboards
  { name: 'Razer Huntsman V2 Optical', price: 149, image: '/imgs/keeb-huntsman.jpg', brand: 'Razer', battery: 'Wired', screen: '', diagonal: '', protection: 'PC', memory: 'RGB' },
  { name: 'Corsair K70 RGB PRO', price: 169, image: '/imgs/keeb-k70.jpg', brand: 'Corsair', battery: 'Wired', screen: '', diagonal: '', protection: 'PC', memory: 'RGB' },
  { name: 'SteelSeries Apex Pro TKL', price: 189, image: '/imgs/keeb-apex.jpg', brand: 'SteelSeries', battery: 'Wired', screen: '', diagonal: '', protection: 'PC', memory: 'RGB' },

  // Mice
  { name: 'Logitech G502 X PLUS', price: 159, image: '/imgs/mouse-g502.jpg', brand: 'Logitech', battery: 'Wireless', screen: '', diagonal: '', protection: 'PC', memory: 'RGB' },
  { name: 'Razer DeathAdder V3', price: 69, image: '/imgs/mouse-deathadder.jpg', brand: 'Razer', battery: 'Wired', screen: '', diagonal: '', protection: 'PC', memory: 'Single-colour' },
  { name: 'SteelSeries Aerox 5 Wireless', price: 139, image: '/imgs/mouse-aerox.jpg', brand: 'SteelSeries', battery: 'Wireless', screen: '', diagonal: '', protection: 'PC', memory: 'RGB' },

  // Controllers
  { name: 'Xbox Elite Wireless Controller Series 2', price: 179, image: '/imgs/ctrl-elite.jpg', brand: 'Microsoft', battery: 'Wireless', screen: '', diagonal: '', protection: 'Xbox', memory: 'None' },
  { name: 'Xbox Wireless Controller Carbon Black', price: 59, image: '/imgs/ctrl-xbox.jpg', brand: 'Microsoft', battery: 'Bluetooth', screen: '', diagonal: '', protection: 'Xbox', memory: 'None' },

  // Microphones
  { name: 'HyperX QuadCast S RGB', price: 159, image: '/imgs/mic-quadcast.jpg', brand: 'HyperX', battery: 'Wired', screen: '', diagonal: '', protection: 'PC', memory: 'RGB' },
  { name: 'Elgato Wave:3', price: 149, image: '/imgs/mic-wave.jpg', brand: 'Elgato', battery: 'Wired', screen: '', diagonal: '', protection: 'PC', memory: 'None' },
]
