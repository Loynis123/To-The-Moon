<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { favorites } from '../favorites.js'
import { cart } from '../cart.js'

const router = useRouter()
const promo = ref('')
const bonusCard = ref('')

const ESTIMATED_TAX = 50
const ESTIMATED_SHIPPING = 29

const subtotal = computed(() => favorites.items.reduce((s, i) => s + (i.price || 0), 0))
const total = computed(() =>
  favorites.items.length ? subtotal.value + ESTIMATED_TAX + ESTIMATED_SHIPPING : 0,
)

function money(n) {
  return '$' + Number(n).toLocaleString('en-US', { maximumFractionDigits: 2 })
}
function applyBonus() {
  bonusCard.value = ''
}
function checkout() {
  if (!favorites.items.length) return
  // Move every favourite into the cart, then continue checkout there.
  favorites.items.forEach((i) => cart.add({ name: i.name, price: i.price, image: i.image }))
  router.push('/cart')
}
</script>

<template>
  <div class="fav-page">
    <div class="fav-col">
      <h1 class="title">Избранное</h1>
      <div class="title-rule"></div>

      <p v-if="!favorites.items.length" class="empty">
        Пока ничего нет. <router-link to="/products">Перейти в каталог →</router-link>
      </p>

      <ul class="list">
        <li v-for="item in favorites.items" :key="item.key" class="row">
          <router-link :to="item.productId ? `/product/${item.productId}` : '/product'" class="row-photo">
            <img v-if="item.image" :src="item.image" :alt="item.name" />
          </router-link>

          <div class="row-info">
            <router-link :to="item.productId ? `/product/${item.productId}` : '/product'" class="row-name">{{ item.name }}</router-link>
            <p class="row-article">{{ item.article }}</p>
          </div>

          <button class="row-remove" aria-label="Удалить из избранного" @click="favorites.remove(item.key)">
            ✕
          </button>
        </li>
      </ul>

      <!-- Order summary (mobile mockup) -->
      <aside v-if="favorites.items.length" class="fav-summary">
        <h2 class="summary-title">Итог заказа</h2>

        <label class="field-label">Скидочный / промокод</label>
        <input v-model="promo" class="field" type="text" placeholder="Код" />

        <label class="field-label">Номер бонусной карты</label>
        <div class="bonus">
          <input v-model="bonusCard" class="field" type="text" placeholder="Введите номер карты" />
          <button class="apply" @click="applyBonus">Применить</button>
        </div>

        <dl class="totals">
          <div class="total-row"><dt>Сумма</dt><dd>{{ money(subtotal) }}</dd></div>
          <div class="total-row muted"><dt>Налог (оценка)</dt><dd>{{ money(ESTIMATED_TAX) }}</dd></div>
          <div class="total-row muted"><dt>Доставка и обработка (оценка)</dt><dd>{{ money(ESTIMATED_SHIPPING) }}</dd></div>
          <div class="total-row grand"><dt>Итого</dt><dd>{{ money(total) }}</dd></div>
        </dl>

        <button class="checkout" @click="checkout">Оформить заказ</button>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.fav-page {
  display: flex;
  justify-content: center;
  padding: 56px 24px 110px;
}
.fav-col {
  width: 100%;
  max-width: 460px;
}

.title {
  font-size: 24px;
  font-weight: 500;
  color: var(--ink);
  margin-bottom: 18px;
}
.title-rule {
  height: 1px;
  background: var(--line);
  margin-bottom: 8px;
}

.empty {
  padding: 30px 0;
  font-size: 15px;
  color: var(--muted);
}
.empty a {
  color: var(--ink);
  text-decoration: underline;
}

.list {
  display: flex;
  flex-direction: column;
}
.row {
  display: grid;
  grid-template-columns: 80px 1fr auto;
  align-items: center;
  gap: 22px;
  padding: 30px 0;
  border-bottom: 1px solid var(--line);
}
.row-photo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 76px;
}
.row-photo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.row-name {
  display: block;
  font-size: 15px;
  font-weight: 500;
  font-style: italic;
  line-height: 1.4;
  color: var(--ink);
}
.row-name:hover {
  text-decoration: underline;
}
.row-article {
  font-size: 12px;
  color: var(--muted);
  margin-top: 8px;
}
.row-remove {
  font-size: 15px;
  color: var(--muted);
  padding: 6px;
  align-self: flex-start;
  transition: color 0.15s ease;
}
.row-remove:hover {
  color: var(--ink);
}

/* Order summary — shown on mobile only (the desktop favorites mockup has none). */
.fav-summary {
  display: none;
  margin-top: 40px;
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 24px 20px;
}
.summary-title {
  font-size: 22px;
  font-weight: 500;
  color: var(--ink);
  margin-bottom: 24px;
}
.field-label {
  display: block;
  font-size: 13px;
  font-style: italic;
  color: var(--muted);
  margin-bottom: 8px;
}
.field {
  width: 100%;
  height: 48px;
  padding: 0 16px;
  border: 1px solid var(--line-strong);
  border-radius: 8px;
  font-size: 14px;
  color: var(--ink);
  outline: none;
  margin-bottom: 18px;
}
.field::placeholder {
  color: var(--muted);
}
.field:focus {
  border-color: var(--ink);
}
.bonus {
  position: relative;
  margin-bottom: 6px;
}
.bonus .field {
  padding-right: 84px;
  margin-bottom: 0;
}
.apply {
  position: absolute;
  top: 7px;
  right: 7px;
  height: 34px;
  padding: 0 16px;
  border: 1px solid var(--line-strong);
  border-radius: 6px;
  font-size: 13px;
  color: var(--ink);
  background: var(--surface);
}
.totals {
  margin: 26px 0;
}
.total-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 15px;
  color: var(--ink);
}
.total-row.muted {
  color: var(--muted);
}
.total-row dd {
  font-weight: 500;
}
.total-row.grand {
  font-size: 18px;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 0;
}
.checkout {
  width: 100%;
  height: 54px;
  margin-top: 24px;
  background: var(--black);
  color: var(--accent-ink);
  border-radius: 8px;
  font-size: 15px;
  font-style: italic;
  transition: opacity 0.15s ease;
}
.checkout:hover {
  opacity: 0.88;
}

@media (max-width: 900px) {
  .fav-summary {
    display: block;
  }
}
</style>
