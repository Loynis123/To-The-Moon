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
  { name: 'Подключение', prop: 'battery', options: ['Проводное', 'Беспроводное', 'Bluetooth'] },
  { name: 'Объёмный звук', prop: 'screen', options: ['Стерео', 'DTS 7.1', 'Пространственный звук', 'Dolby Atmos'] },
  { name: 'Размер драйвера', prop: 'diagonal', options: ['40 мм', '50 мм', '53 мм'] },
  { name: 'Платформа', prop: 'protection', options: ['ПК', 'PlayStation', 'Xbox', 'Мультиплатформа'] },
  { name: 'Подсветка', prop: 'memory', options: ['RGB', 'Одноцветная', 'Нет'] },
]

export const sortOptions = [
  'По рейтингу',
  'Цена: по возрастанию',
  'Цена: по убыванию',
  'Сначала новые',
]

// Real models. price/oldPrice in rubles; empty spec = not applicable.
export const productsCatalog = [
  // Headsets
  { name: 'HyperX Cloud Stinger 2', price: 3990, image: '/imgs/hyperx-cloud-stinger-2.webp', brand: 'HyperX', battery: 'Проводное', screen: 'DTS 7.1', diagonal: '50 мм', protection: 'ПК', memory: 'Нет' },
  { name: 'HyperX Cloud III', price: 8990, image: '/imgs/hyperx-cloud-3.webp', brand: 'HyperX', battery: 'Проводное', screen: 'Пространственный звук', diagonal: '53 мм', protection: 'Мультиплатформа', memory: 'Нет' },
  { name: 'SteelSeries Arctis Nova 1', price: 6990, image: '/imgs/steelseries-arctis-nova-1.png', brand: 'SteelSeries', battery: 'Проводное', screen: 'Пространственный звук', diagonal: '40 мм', protection: 'Мультиплатформа', memory: 'Нет' },
  { name: 'Logitech G435 LIGHTSPEED', price: 6490, image: '/imgs/logitech-g435.webp', brand: 'Logitech', battery: 'Беспроводное', screen: 'Dolby Atmos', diagonal: '40 мм', protection: 'Мультиплатформа', memory: 'Нет' },

  // Mice
  { name: 'Logitech G203 LIGHTSYNC', price: 2490, image: '/imgs/logitech-g203.jpg', brand: 'Logitech', battery: 'Проводное', screen: '', diagonal: '', protection: 'ПК', memory: 'RGB' },
  { name: 'Logitech G502 X', price: 7990, oldPrice: 9990, image: '/imgs/logitech-g502.jpg', brand: 'Logitech', battery: 'Проводное', screen: '', diagonal: '', protection: 'ПК', memory: 'RGB' },
  { name: 'Razer DeathAdder Essential', price: 2290, oldPrice: 2990, image: '/imgs/razer-deathadder-essential.jpg', brand: 'Razer', battery: 'Проводное', screen: '', diagonal: '', protection: 'ПК', memory: 'Одноцветная' },
  { name: 'Glorious Model O', price: 4990, image: '/imgs/glorious-model-o.jpg', brand: 'Glorious', battery: 'Проводное', screen: '', diagonal: '', protection: 'ПК', memory: 'RGB' },
  { name: 'A4Tech Bloody V8', price: 1290, oldPrice: 1690, image: '/imgs/a4tech-bloody-v8.png', brand: 'A4Tech', battery: 'Проводное', screen: '', diagonal: '', protection: 'ПК', memory: 'Одноцветная' },

  // Keyboards
  { name: 'Razer Huntsman V2 TKL', price: 12990, image: '/imgs/razer-huntsman-v2-tkl.png', brand: 'Razer', battery: 'Проводное', screen: '', diagonal: '', protection: 'ПК', memory: 'RGB' },
  { name: 'Logitech G213 Prodigy', price: 4490, image: '/imgs/logitech-g213.png', brand: 'Logitech', battery: 'Проводное', screen: '', diagonal: '', protection: 'ПК', memory: 'RGB' },
  { name: 'Redragon Kumara K552', price: 3290, oldPrice: 3990, image: '/imgs/redragon-kumara-k552.webp', brand: 'Redragon', battery: 'Проводное', screen: '', diagonal: '', protection: 'ПК', memory: 'RGB' },

  // Controllers
  { name: 'Xbox Wireless Controller', price: 5990, image: '/imgs/xbox-controller.jpg', brand: 'Microsoft', battery: 'Беспроводное', screen: '', diagonal: '', protection: 'Xbox', memory: 'Нет' },
]
