// Single-render products: derive one swatch from the colour word in the name
// (the picker stays hidden when there's just one). No memory/price tiers here.
const SWATCH = {
  'Phantom Black': '#1b1d22',
  'Carbon Black': '#1b1d22',
  Graphite: '#33363d',
  Black: '#23262e',
  White: '#e8eaef',
  Silver: '#cfd3dc',
  Green: '#3a4a3f',
  Blue: '#9fb4d8',
  Red: '#c2402f',
  Pink: '#f3d4dd',
}

function deriveColor(name = '') {
  const lower = name.toLowerCase()
  return (
    Object.keys(SWATCH)
      .sort((a, b) => b.length - a.length)
      .find((k) => lower.includes(k.toLowerCase())) || ''
  )
}

// Returns { colors: [{name, hex, image}], memories: [] } for a product.
export function getVariants(product) {
  const name = deriveColor(product?.name) || 'Standard'
  return {
    colors: [{ name, hex: SWATCH[name] || '#3a4255', image: product?.image || '' }],
    memories: [],
  }
}
