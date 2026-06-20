<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ProductCard from '../components/ProductCard.vue'
import { fetchProduct, fetchAllProducts } from '../catalog-api.js'
import { getVariants, productRating } from '../product-variants.js'
import { cart } from '../cart.js'
import { favorites } from '../favorites.js'

const route = useRoute()
const router = useRouter()

// Fallback product so the page renders even without an id in the URL.
const FALLBACK = { name: 'HyperX Cloud III', price: 100, image: '/imgs/hyperx-cloud-3.webp', category: 'Наушники', brand: 'HyperX' }
const product = ref(FALLBACK)
const allProducts = ref([])

const liked = computed(() => favorites.has(product.value.id ?? product.value.name))
function toggleWishlist() {
  favorites.toggle({
    id: product.value.id,
    name: product.value.name,
    price: product.value.price,
    image: product.value.image,
  })
}

// Variant model — colour drives the image, memory drives the price.
const variants = computed(() => getVariants(product.value))
const colors = computed(() => variants.value.colors)
const memories = computed(() => variants.value.memories)

const activeColor = ref(0)
const activeMemory = ref(0)

// Thumbnails are the colour renders (each colour = one image).
const gallery = computed(() => {
  const imgs = colors.value.map((c) => c.image).filter(Boolean)
  return imgs.length ? imgs : [product.value.image].filter(Boolean)
})
const currentImage = computed(
  () => colors.value[activeColor.value]?.image || product.value.image || '',
)

const memoryDelta = computed(() => memories.value[activeMemory.value]?.delta || 0)
const displayPrice = computed(() => Number(product.value.price || 0) + memoryDelta.value)
const displayOldPrice = computed(() =>
  product.value.oldPrice ? Number(product.value.oldPrice) + memoryDelta.value : null,
)

function formatPrice(n) {
  return Number(n).toLocaleString('ru-RU') + ' ₽'
}

async function load() {
  const id = route.params.id
  try {
    if (id) product.value = await fetchProduct(id)
    if (!allProducts.value.length) allProducts.value = await fetchAllProducts()
  } catch (err) {
    console.error('Failed to load product', err)
  }
  // Reset selection; pre-select the colour whose render matches the product image.
  const match = colors.value.findIndex((c) => c.image === product.value.image)
  activeColor.value = match >= 0 ? match : 0
  activeMemory.value = 0
  document.title = `${product.value.name} — To The Moon`
}
watch(() => route.params.id, load, { immediate: true })

const related = computed(() => {
  const cur = product.value
  const sameCat = allProducts.value.filter((p) => p.id !== cur.id && p.category === cur.category)
  const pool = sameCat.length ? sameCat : allProducts.value.filter((p) => p.id !== cur.id)
  return pool.slice(0, 4)
})

// Spec chips are built from the product's real fields (empty ones are skipped),
// so every product shows its own characteristics instead of a fixed sheet.
// Inline gaming-themed icons (Lucide-style) — no icon assets, stroke = currentColor.
const SPEC_DEFS = [
  { key: 'battery', label: 'Подключение', icon: '<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>' },
  { key: 'screen', label: 'Объёмный звук', icon: '<path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>' },
  { key: 'diagonal', label: 'Размер драйвера', icon: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/>' },
  { key: 'protection', label: 'Платформа', icon: '<line x1="6" x2="10" y1="11" y2="11"/><line x1="8" x2="8" y1="9" y2="13"/><line x1="15" x2="15.01" y1="12" y2="12"/><line x1="18" x2="18.01" y1="10" y2="10"/><rect width="20" height="12" x="2" y="6" rx="6"/>' },
  { key: 'memory', label: 'Подсветка', icon: '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/>' },
]
const specs = computed(() =>
  SPEC_DEFS.filter((d) => product.value[d.key]).map((d) => ({
    icon: d.icon,
    label: d.label,
    value: product.value[d.key],
  })),
)

const guarantees = [
  { icon: '/icons/info-delivery.png', label: 'Бесплатная доставка', value: '1–2 дня' },
  { icon: '/icons/info-stock.png', label: 'В наличии', value: 'Сегодня' },
  { icon: '/icons/info-guarantee.png', label: 'Гарантия', value: '1 год' },
]

const detailsTable = computed(() => {
  const p = product.value
  const rows = []
  const add = (label, val) => val && rows.push({ label, value: [val] })
  add('Бренд', p.brand)
  add('Категория', p.category)
  add('Подключение', p.battery)
  add('Объёмный звук', p.screen)
  add('Размер драйвера', p.diagonal)
  add('Платформа', p.protection)
  add('Подсветка', p.memory)
  return rows
})

const description = computed(() => {
  const p = product.value
  const phrase =
    { Наушники: 'турнирный звук', Мыши: 'точное позиционирование', Клавиатуры: 'молниеносный отклик', Геймпады: 'уверенный контроль' }[
      p.category
    ] || 'надёжная производительность'
  // lower-case the first letter of Cyrillic spec values so they read inside a
  // sentence (DTS 7.1 / Dolby Atmos start with Latin and stay as-is).
  const lc = (s) => s.replace(/^([А-ЯЁ])/, (m) => m.toLowerCase())
  const bits = []
  if (p.battery) bits.push(`${lc(p.battery)} подключение`)
  if (p.screen) bits.push(lc(p.screen)) // surround sound (headsets)
  if (p.diagonal) bits.push(`драйверы ${p.diagonal}`) // driver size (headsets)
  if (p.protection && p.category !== 'Наушники') bits.push(`поддержка ${p.protection}`) // platform
  if (p.memory && p.memory !== 'Нет') bits.push(`подсветка ${p.memory}`)
  const feat = bits.length ? ` Среди особенностей — ${bits.join(', ')}.` : ''
  return `${p.name} — это ${phrase} для соревновательной игры.${feat}`
})
const detailsIntro = computed(
  () =>
    `Всё, что нужно знать о ${product.value.name} — ключевые характеристики и особенности приведены ниже.`,
)

const ratingInfo = computed(() => productRating(product.value.id))
const ratingStars = computed(() => {
  const r = ratingInfo.value.rating
  return Array.from({ length: 5 }, (_, i) => (i + 1 <= Math.floor(r) ? 'full' : i < r ? 'half' : 'empty'))
})

function addToCart() {
  cart.add({
    id: product.value.id,
    name: product.value.name,
    price: displayPrice.value,
    image: currentImage.value,
    // Only treat colour/memory as a cart variant when there's a real choice;
    // otherwise the lone default ('Standard') would key it apart from the same
    // product added from a card (which sends none), splitting it into two rows.
    color: colors.value.length > 1 ? colors.value[activeColor.value]?.name || '' : '',
    memory: memories.value.length > 1 ? memories.value[activeMemory.value]?.label || '' : '',
  })
  router.push('/cart')
}
</script>

<template>
  <div class="pdp">
    <div class="container">
      <!-- breadcrumb -->
      <nav class="crumbs">
        <router-link to="/">Главная</router-link><span>›</span>
        <router-link to="/products">Каталог</router-link><span>›</span>
        <template v-if="product.brand"><router-link to="/products">{{ product.brand }}</router-link><span>›</span></template>
        <span class="current">{{ product.name }}</span>
      </nav>

      <!-- main -->
      <section class="hero">
        <div class="gallery">
          <div class="thumbs">
            <button
              v-for="(g, i) in gallery"
              :key="i"
              class="thumb"
              :class="{ active: i === activeColor }"
              @click="activeColor = i"
            >
              <img :src="g" alt="" />
            </button>
          </div>
          <div class="stage">
            <img v-if="currentImage" :src="currentImage" :alt="product.name" />
          </div>
        </div>

        <div class="info">
          <h1 class="title">{{ product.name }}</h1>
          <div class="price-row">
            <span class="price">{{ formatPrice(displayPrice) }}</span>
            <span v-if="displayOldPrice" class="price-old">{{ formatPrice(displayOldPrice) }}</span>
          </div>

          <div v-if="colors.length > 1 || memories.length > 1" class="selectors">
            <div v-if="colors.length > 1" class="block">
              <span class="block-label">Выбрать цвет : <b>{{ colors[activeColor]?.name }}</b></span>
              <div class="swatches">
                <button
                  v-for="(c, i) in colors"
                  :key="c.name"
                  class="swatch"
                  :class="{ active: i === activeColor }"
                  :style="{ background: c.hex }"
                  :title="c.name"
                  @click="activeColor = i"
                />
              </div>
            </div>

            <div v-if="memories.length > 1" class="memories">
              <button
                v-for="(m, i) in memories"
                :key="m.label"
                class="mem"
                :class="{ active: i === activeMemory }"
                @click="activeMemory = i"
              >
                {{ m.label }}
              </button>
            </div>
          </div>

          <ul class="specs">
            <li v-for="s in specs" :key="s.label" class="spec">
              <svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" v-html="s.icon" />
              <div class="spec-text">
                <span class="spec-label">{{ s.label }}</span>
                <span class="spec-value">{{ s.value }}</span>
              </div>
            </li>
          </ul>

          <p class="desc">
            {{ description }} <a href="#" class="more">подробнее...</a>
          </p>

          <div class="actions">
            <button class="btn-outline wish" :class="{ on: liked }" @click="toggleWishlist">
              {{ liked ? 'В избранном ♥' : 'В избранное' }}
            </button>
            <button class="btn-solid cart" @click="addToCart">В корзину</button>
          </div>

          <div class="guarantees">
            <div v-for="g in guarantees" :key="g.label" class="guarantee">
              <span class="g-icon"><img :src="g.icon" alt="" /></span>
              <div class="g-text">
                <span class="g-label">{{ g.label }}</span>
                <span class="g-value">{{ g.value }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- details -->
    <div class="container">
      <section class="details">
        <h2 class="section-title">Характеристики</h2>
        <p class="details-intro">{{ detailsIntro }}</p>

        <dl class="spec-table">
          <div v-for="row in detailsTable" :key="row.label" class="spec-row">
            <dt>{{ row.label }}</dt>
            <dd>
              <span v-for="v in row.value" :key="v">{{ v }}</span>
            </dd>
          </div>
        </dl>
      </section>

      <!-- reviews -->
      <section class="reviews">
        <div class="rating-card">
          <div class="rating-num">{{ ratingInfo.rating }}</div>
          <div class="stars" aria-hidden="true"><span v-for="(s, i) in ratingStars" :key="i" :class="s">★</span></div>
          <div class="rating-sub">на основе {{ ratingInfo.reviewCount }} отзывов</div>
        </div>
      </section>

      <!-- related -->
      <section class="related">
        <h2 class="section-title plain">Похожие товары</h2>
        <div class="related-grid">
          <ProductCard
            v-for="p in related"
            :key="p.id ?? p.name"
            :id="p.id"
            :name="p.name"
            :price="p.price"
            :old-price="p.oldPrice"
            :image="p.image"
            :favorite="p.favorite"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.pdp {
  padding: 28px 0 80px;
}

.crumbs {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: var(--muted);
  margin-bottom: 34px;
}
.crumbs a:hover {
  color: var(--ink);
}
.crumbs span {
  color: var(--line-strong);
}
.crumbs .current {
  color: var(--ink);
}

/* main */
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 70px;
}

.gallery {
  display: flex;
  gap: 20px;
}
.thumbs {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.thumb {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 10px;
  background: #fff;
  overflow: hidden;
  padding: 8px;
  outline: 2px solid transparent;
  outline-offset: -2px;
  transition: outline 0.15s ease;
}
.thumb img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.thumb.active {
  outline-color: var(--accent);
}
.stage {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  min-height: 460px;
  padding: 40px;
}
.stage img {
  max-width: 88%;
  max-height: 420px;
  object-fit: contain;
}

.info {
  padding-top: 6px;
}
.title {
  font-size: 40px;
  font-weight: 500;
  font-style: italic;
  line-height: 1.1;
  color: var(--ink);
  margin-bottom: 16px;
}
.price-row {
  display: flex;
  align-items: baseline;
  gap: 14px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--line);
  margin-bottom: 26px;
}
.price {
  font-size: 28px;
  font-weight: 600;
  font-style: italic;
  color: var(--ink);
}
.price-old {
  font-size: 24px;
  font-style: italic;
  color: var(--muted);
  text-decoration: line-through;
}

.selectors {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 28px;
}
.block-label {
  display: block;
  font-size: 14px;
  color: var(--muted);
  margin-bottom: 12px;
}
.block-label b {
  color: var(--ink);
  font-weight: 600;
}
.swatches {
  display: flex;
  gap: 14px;
}
.swatch {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  outline: 2px solid transparent;
  outline-offset: 2px;
  transition: outline 0.15s ease;
}
.swatch.active {
  outline-color: var(--ink);
}
.memories {
  display: flex;
  gap: 12px;
}
.mem {
  min-width: 72px;
  height: 44px;
  padding: 0 16px;
  border: 1px solid var(--line-strong);
  border-radius: 8px;
  font-size: 14px;
  color: var(--ink);
  background: var(--surface);
  transition: all 0.15s ease;
}
.mem.active {
  background: var(--ink);
  border-color: var(--ink);
  color: var(--white);
}

.specs {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  margin-bottom: 26px;
}
.spec {
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--card);
  border-radius: 10px;
  padding: 14px;
}
.spec-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  color: var(--accent);
}
.spec-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.spec-label {
  font-size: 11px;
  color: var(--muted);
}
.spec-value {
  font-size: 13px;
  font-style: italic;
  color: var(--ink);
}

.desc {
  font-size: 15px;
  line-height: 1.7;
  color: var(--muted-2);
  margin-bottom: 28px;
}
.more {
  color: var(--ink);
  text-decoration: underline;
}

.actions {
  display: flex;
  gap: 16px;
  margin-bottom: 36px;
}
.actions .wish,
.actions .cart {
  flex: 1;
  height: 56px;
  font-style: normal;
  font-size: 15px;
}
.actions .wish.on {
  background: var(--heart);
  border-color: var(--heart);
  color: var(--white);
}

.guarantees {
  display: flex;
  gap: 30px;
}
.guarantee {
  display: flex;
  align-items: center;
  gap: 12px;
}
.g-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: var(--card);
  border-radius: 10px;
}
.g-icon img {
  filter: invert(1);
  width: 22px;
  height: 22px;
  opacity: 0.7;
}
.g-text {
  display: flex;
  flex-direction: column;
}
.g-label {
  font-size: 13px;
  color: var(--muted);
}
.g-value {
  font-size: 14px;
  font-style: italic;
  color: var(--ink);
}

/* details */
.section-title {
  font-size: 28px;
  font-weight: 600;
  font-style: italic;
  color: var(--ink);
  margin-bottom: 26px;
}
.section-title.plain {
  font-style: italic;
}
.details {
  background: var(--surface);
  border-radius: 14px;
  padding: 46px 50px;
  margin-bottom: 60px;
}
.details-intro {
  font-size: 14px;
  line-height: 1.8;
  font-style: italic;
  color: var(--muted);
  margin-bottom: 26px;
}
.spec-table {
  display: flex;
  flex-direction: column;
}
.spec-row {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 16px 0;
  border-top: 1px solid #e6e6e6;
}
.spec-row dt {
  font-size: 14px;
  color: var(--ink-soft);
}
.spec-row dd {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  font-size: 14px;
  color: var(--ink);
  text-align: right;
}

/* reviews */
.reviews {
  margin-bottom: 64px;
}
.rating-card {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  background: var(--card);
  border-radius: 12px;
  padding: 26px 38px;
}
.rating-num {
  font-size: 44px;
  font-weight: 700;
  color: var(--ink);
  line-height: 1;
}
.stars {
  color: #f5a623;
  font-size: 16px;
  letter-spacing: 2px;
}
.stars .half {
  opacity: 0.45;
}
.stars .empty {
  opacity: 0.2;
}
.rating-sub {
  font-size: 13px;
  font-style: italic;
  color: var(--muted);
}

/* related */
.related-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .specs {
    grid-template-columns: 1fr 1fr;
  }
  .related-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .details {
    padding: 32px 24px;
  }
}
@media (max-width: 560px) {
  .crumbs {
    display: none;
  }
  .gallery {
    flex-direction: column-reverse;
  }
  .thumbs {
    flex-direction: row;
  }
  .thumb {
    width: 64px;
    height: 64px;
  }
  .stage {
    min-height: 320px;
    padding: 28px;
  }
  .stage img {
    max-height: 280px;
  }
  .title {
    font-size: 28px;
  }
  .selectors {
    flex-direction: column;
    align-items: flex-start;
  }
  .specs {
    grid-template-columns: 1fr 1fr;
  }
  .actions {
    flex-direction: column;
    gap: 14px;
  }
  /* Bigger, chunkier action buttons on mobile. flex:none so the explicit
     height isn't overridden by flex-basis:0 in the column layout. */
  .actions .wish,
  .actions .cart {
    flex: none;
    height: 64px;
    font-size: 16px;
  }
  /* Three guarantees stay in one row (as in the mobile mockup). */
  .guarantees {
    gap: 8px;
  }
  .guarantee {
    flex: 1;
    min-width: 0;
    gap: 8px;
  }
  .g-icon {
    width: 36px;
    height: 36px;
    flex-shrink: 0;
  }
  .g-text {
    min-width: 0;
  }
  .g-label {
    font-size: 11px;
    line-height: 1.25;
  }
  .g-value {
    font-size: 12px;
  }
  .details {
    padding: 28px 18px;
  }
  /* Related products keep a 2-up grid on phones. */
  .related-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }
}
</style>
