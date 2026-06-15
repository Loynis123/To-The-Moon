// Static catalog metadata for the products-page sidebar and sort control.
// (Brand counts are computed live from the DB in routes/products.js.)

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

// DB columns reused with gaming meanings (see src/data/catalog.js).
export const filterGroups = [
  { name: 'Connectivity', prop: 'battery', options: ['Wired', 'Wireless', 'Bluetooth'] },
  { name: 'Surround sound', prop: 'screen', options: ['Stereo', '7.1 Surround', 'Spatial Audio'] },
  { name: 'Driver size', prop: 'diagonal', options: ['40 mm', '50 mm', '53 mm'] },
  { name: 'Platform', prop: 'protection', options: ['PC', 'PlayStation', 'Xbox', 'Multi-platform'] },
  { name: 'Lighting', prop: 'memory', options: ['RGB', 'Single-colour', 'None'] },
]

export const sortOptions = ['By rating', 'Price: low to high', 'Price: high to low', 'Newest first']

export const categories = ['Headsets', 'Keyboards', 'Mice', 'Controllers', 'Microphones']
