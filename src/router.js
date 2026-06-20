import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ProductsView from './views/ProductsView.vue'
import ProductDetailsView from './views/ProductDetailsView.vue'
import CartView from './views/CartView.vue'
import FavoritesView from './views/FavoritesView.vue'
import OrdersView from './views/OrdersView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/products', name: 'products', component: ProductsView, meta: { title: 'Каталог' } },
  { path: '/product/:id?', name: 'product', component: ProductDetailsView },
  { path: '/cart', name: 'cart', component: CartView, meta: { title: 'Корзина' } },
  { path: '/favorites', name: 'favorites', component: FavoritesView, meta: { title: 'Избранное' } },
  { path: '/orders', name: 'orders', component: OrdersView, meta: { title: 'Мои заказы' } },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

const BASE_TITLE = 'To The Moon — игровые гарнитуры и девайсы'
// The product page sets its own title once the product name is known.
router.afterEach((to) => {
  if (to.name === 'product') return
  document.title = to.meta.title ? `${to.meta.title} — To The Moon` : BASE_TITLE
})
