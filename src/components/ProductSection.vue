<script setup>
import { ref, computed } from 'vue'
import ProductCard from './ProductCard.vue'
import { filters, clearFilters } from '../store.js'

const props = defineProps({
  // [{ key, label }]
  tabs: { type: Array, default: () => [] },
  heading: { type: String, default: '' },
  // fixed list (non-filterable sections, e.g. Discounts)
  products: { type: Array, default: () => [] },
  // master catalog (filterable section)
  catalog: { type: Array, default: () => [] },
  filterable: { type: Boolean, default: false },
})

const active = ref(0)

// When a search term or category is active we browse the whole catalog;
// otherwise the active tab decides what's shown.
const filterMode = computed(
  () => props.filterable && (!!filters.search.trim() || !!filters.category),
)

const tabActive = computed(() => (filterMode.value ? -1 : active.value))

function selectTab(i) {
  active.value = i
  clearFilters()
}

const visible = computed(() => {
  if (!props.filterable) return props.products

  const term = filters.search.trim().toLowerCase()
  const cat = filters.category

  if (!filterMode.value) {
    const key = props.tabs[active.value]?.key
    return props.catalog.filter((p) => p.tabs.includes(key))
  }

  return props.catalog.filter(
    (p) =>
      (!cat || p.category === cat) &&
      (!term || p.name.toLowerCase().includes(term)),
  )
})

const filterLabel = computed(() => {
  const parts = []
  if (filters.category) parts.push(filters.category)
  if (filters.search.trim()) parts.push(`“${filters.search.trim()}”`)
  return parts.join(' · ')
})

// Russian plural for "товар" (1 товар / 2 товара / 5 товаров).
const resultsWord = computed(() => {
  const n = visible.value.length
  const m10 = n % 10
  const m100 = n % 100
  if (m10 === 1 && m100 !== 11) return 'товар'
  if (m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20)) return 'товара'
  return 'товаров'
})
</script>

<template>
  <section class="products">
    <div class="container">
      <div v-if="tabs.length" class="tabs">
        <button
          v-for="(t, i) in tabs"
          :key="t.key"
          class="tab"
          :class="{ active: i === tabActive }"
          @click="selectTab(i)"
        >
          {{ t.label }}
        </button>
      </div>
      <h2 v-else-if="heading" class="heading">{{ heading }}</h2>

      <div v-if="filterMode" class="filter-bar">
        <span class="filter-text">
          Показано <b>{{ visible.length }}</b> {{ resultsWord }}
          <template v-if="filterLabel"> — <b>{{ filterLabel }}</b></template>
        </span>
        <button class="filter-clear" @click="clearFilters">Сбросить ✕</button>
      </div>

      <div v-if="visible.length" class="grid">
        <ProductCard
          v-for="p in visible"
          :key="p.id ?? p.name"
          :id="p.id"
          :name="p.name"
          :price="p.price"
          :old-price="p.oldPrice"
          :image="p.image"
          :favorite="p.favorite"
        />
      </div>
      <p v-else class="empty">Ничего не найдено. Попробуйте изменить фильтр.</p>
    </div>
  </section>
</template>

<style scoped>
.products {
  padding: 56px 0;
}

.tabs {
  display: flex;
  gap: 36px;
  border-bottom: 1px solid var(--line);
  margin-bottom: 34px;
}
.tab {
  position: relative;
  padding-bottom: 14px;
  font-size: 16px;
  font-style: italic;
  color: var(--muted);
  transition: color 0.15s ease;
}
.tab.active {
  color: var(--ink);
}
.tab.active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 2px;
  background: var(--black);
}
.tab:hover {
  color: var(--ink);
}

.heading {
  font-size: 32px;
  font-weight: 600;
  font-style: italic;
  color: var(--ink);
  margin-bottom: 30px;
}

.filter-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin: -14px 0 26px;
}
.filter-text {
  font-size: 14px;
  color: var(--muted);
}
.filter-text b {
  color: var(--ink);
  font-weight: 600;
}
.filter-clear {
  font-size: 13px;
  color: var(--ink);
  padding: 6px 14px;
  border: 1px solid var(--line-strong);
  border-radius: 6px;
  transition: background 0.15s ease;
}
.filter-clear:hover {
  background: var(--chip);
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.empty {
  padding: 40px 0 10px;
  font-size: 16px;
  font-style: italic;
  color: var(--muted);
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .products {
    padding: 40px 0;
  }
  /* Keep a 2-up product grid on phones, as in the mobile mockup. */
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }
  .tabs {
    gap: 22px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .tabs::-webkit-scrollbar {
    display: none;
  }
  .tab {
    white-space: nowrap;
    flex-shrink: 0;
  }
  .heading {
    font-size: 24px;
  }
}
</style>
