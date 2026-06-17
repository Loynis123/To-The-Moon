<script setup>
import { ref, onMounted } from 'vue'
import HeroSection from '../components/HeroSection.vue'
import CategoryShowcase from '../components/CategoryShowcase.vue'
import BrowseByCategory from '../components/BrowseByCategory.vue'
import ProductSection from '../components/ProductSection.vue'
import PromoBanners from '../components/PromoBanners.vue'
import SummerSale from '../components/SummerSale.vue'
import { fetchAllProducts } from '../catalog-api.js'

// Homepage product tabs (New Arrival / Bestseller / Featured).
const tabs = [
  { key: 'new', label: 'Новинки' },
  { key: 'best', label: 'Хиты продаж' },
  { key: 'featured', label: 'Рекомендуем' },
]

const catalog = ref([])
const discounts = ref([])

onMounted(async () => {
  try {
    const all = await fetchAllProducts()
    catalog.value = all
    discounts.value = all.filter((p) => p.discount)
  } catch (err) {
    console.error('Failed to load catalog', err)
  }
})
</script>

<template>
  <HeroSection />
  <CategoryShowcase :catalog="catalog" />
  <BrowseByCategory />
  <ProductSection id="catalog" :tabs="tabs" :catalog="catalog" filterable />
  <PromoBanners :catalog="catalog" />
  <ProductSection heading="Скидки до -50%" :products="discounts" />
  <SummerSale />
</template>
