// Tab keys line up by index with the labels below.
export const tabs = [
  { key: 'new', label: 'New Arrival' },
  { key: 'best', label: 'Bestseller' },
  { key: 'featured', label: 'Featured Products' },
]

export const categories = ['Headsets', 'Keyboards', 'Mice', 'Controllers', 'Microphones']

// Assigns each product a category (for browse + filters) and section tabs.
// Specs/brand/price come from productsCatalog (merged by name in the seed).
export const catalog = [
  // Headsets
  { name: 'To The Moon NOVA Pro Wireless', price: '$179', image: '/imgs/headset-nova.jpg', category: 'Headsets', tabs: ['new', 'featured'], favorite: true },
  { name: 'Razer Kraken V3 X', price: '$69', image: '/imgs/headset-kraken.jpg', category: 'Headsets', tabs: ['new'] },
  { name: 'HyperX Cloud III', price: '$99', image: '/imgs/headset-cloud.jpg', category: 'Headsets', tabs: ['new', 'best'] },
  { name: 'SteelSeries Arctis Nova 7', price: '$149', image: '/imgs/headset-arctis.jpg', category: 'Headsets', tabs: ['new'] },
  { name: 'Logitech G PRO X 2 Lightspeed', price: '$129', image: '/imgs/headset-gprox.jpg', category: 'Headsets', tabs: ['new', 'best'] },
  { name: 'Corsair Virtuoso RGB Wireless', price: '$179', image: '/imgs/headset-virtuoso.jpg', category: 'Headsets', tabs: ['best', 'featured'] },

  // Keyboards
  { name: 'Razer Huntsman V2 Optical', price: '$149', image: '/imgs/keeb-huntsman.jpg', category: 'Keyboards', tabs: ['new', 'featured'] },
  { name: 'Corsair K70 RGB PRO', price: '$169', image: '/imgs/keeb-k70.jpg', category: 'Keyboards', tabs: ['featured'] },
  { name: 'SteelSeries Apex Pro TKL', price: '$189', image: '/imgs/keeb-apex.jpg', category: 'Keyboards', tabs: ['best', 'featured'] },

  // Mice
  { name: 'Logitech G502 X PLUS', price: '$159', image: '/imgs/mouse-g502.jpg', category: 'Mice', tabs: ['new', 'best'] },
  { name: 'Razer DeathAdder V3', price: '$69', image: '/imgs/mouse-deathadder.jpg', category: 'Mice', tabs: ['best'] },
  { name: 'SteelSeries Aerox 5 Wireless', price: '$139', image: '/imgs/mouse-aerox.jpg', category: 'Mice', tabs: ['featured'] },

  // Controllers
  { name: 'Xbox Elite Wireless Controller Series 2', price: '$179', image: '/imgs/ctrl-elite.jpg', category: 'Controllers', tabs: ['best', 'featured'] },
  { name: 'Xbox Wireless Controller Carbon Black', price: '$59', image: '/imgs/ctrl-xbox.jpg', category: 'Controllers', tabs: ['new'] },

  // Microphones
  { name: 'HyperX QuadCast S RGB', price: '$159', image: '/imgs/mic-quadcast.jpg', category: 'Microphones', tabs: ['new', 'featured'] },
  { name: 'Elgato Wave:3', price: '$149', image: '/imgs/mic-wave.jpg', category: 'Microphones', tabs: ['best'] },
]

export const discounts = [
  { name: 'To The Moon NOVA Pro Wireless', price: '$179', image: '/imgs/headset-nova.jpg' },
  { name: 'Razer Kraken V3 X', price: '$69', image: '/imgs/headset-kraken.jpg' },
  { name: 'Razer DeathAdder V3', price: '$69', image: '/imgs/mouse-deathadder.jpg' },
  { name: 'Xbox Wireless Controller Carbon Black', price: '$59', image: '/imgs/ctrl-xbox.jpg' },
]
