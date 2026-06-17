// Static catalog metadata for the products-page sidebar and sort control.
// (Brand counts are computed live from the DB in routes/products.js.)

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

// DB columns reused with gaming meanings (see src/data/catalog.js).
export const filterGroups = [
  { name: 'Подключение', prop: 'battery', options: ['Проводное', 'Беспроводное', 'Bluetooth'] },
  { name: 'Объёмный звук', prop: 'screen', options: ['Стерео', 'DTS 7.1', 'Пространственный звук', 'Dolby Atmos'] },
  { name: 'Размер драйвера', prop: 'diagonal', options: ['40 мм', '50 мм', '53 мм'] },
  { name: 'Платформа', prop: 'protection', options: ['ПК', 'PlayStation', 'Xbox', 'Мультиплатформа'] },
  { name: 'Подсветка', prop: 'memory', options: ['RGB', 'Одноцветная', 'Нет'] },
]

export const sortOptions = ['По рейтингу', 'Цена: по возрастанию', 'Цена: по убыванию', 'Сначала новые']

export const categories = ['Наушники', 'Мыши', 'Клавиатуры', 'Геймпады']
