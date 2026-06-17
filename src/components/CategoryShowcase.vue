<script setup>
import { computed } from 'vue'

const props = defineProps({ catalog: { type: Array, default: () => [] } })

const FEATURED = [
  { name: 'HyperX Cloud III', tag: 'Наушники', image: '/imgs/hyperx-cloud-3.webp', desc: 'Детальный пространственный звук и лёгкий корпус для долгих сессий.' },
  { name: 'Logitech G502 X', tag: 'Мышь', image: '/imgs/logitech-g502.jpg', desc: 'Переключатели LIGHTFORCE и сенсор 25.6K — точность по-вашему.' },
  { name: 'Razer Huntsman V2 TKL', tag: 'Клавиатура', image: '/imgs/razer-huntsman-v2-tkl.png', desc: 'Оптические переключатели с минимальной задержкой и кейкапы из PBT.' },
  { name: 'Xbox Wireless Controller', tag: 'Геймпад', image: '/imgs/xbox-controller.jpg', desc: 'Текстурные грипсы и беспроводная связь на Xbox и ПК.' },
]

// Resolve each pick to its catalog record so the tile deep-links to the
// product page (falls back to the catalog while products are still loading).
const featured = computed(() =>
  FEATURED.map((f) => {
    const p = props.catalog.find((x) => x.name === f.name)
    return { ...f, id: p?.id ?? null, image: p?.image ?? f.image }
  }),
)
</script>

<template>
  <section class="showcase">
    <div class="container">
      <div class="head">
        <h2 class="heading">Топ устройства</h2>
        <router-link to="/products" class="all">Все товары →</router-link>
      </div>

      <div class="grid">
        <router-link v-for="p in featured" :key="p.name" :to="p.id ? `/product/${p.id}` : '/products'" class="tile">
          <div class="shot"><img :src="p.image" :alt="p.name" /></div>
          <span class="tag">{{ p.tag }}</span>
          <h3 class="name">{{ p.name }}</h3>
          <p class="desc">{{ p.desc }}</p>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.showcase {
  padding: 40px 0 10px;
}
.head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 28px;
}
.heading {
  font-size: 32px;
  font-weight: 700;
  font-style: italic;
  color: var(--ink);
}
.all {
  font-size: 14px;
  color: var(--accent);
}
.all:hover {
  text-decoration: underline;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.tile {
  display: block;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 16px;
  transition: border-color 0.15s ease, transform 0.15s ease;
}
.tile:hover {
  border-color: var(--accent);
  transform: translateY(-3px);
}
.shot {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 190px;
  margin-bottom: 16px;
  padding: 16px;
  background: #fff;
  border-radius: 10px;
}
.shot img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.tag {
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
}
.name {
  font-size: 17px;
  font-weight: 600;
  font-style: italic;
  color: var(--ink);
  margin: 6px 0 8px;
}
.desc {
  font-size: 13px;
  line-height: 1.5;
  color: var(--muted);
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .showcase {
    padding: 48px 0 4px;
  }
  .heading {
    font-size: 24px;
  }
  .grid {
    gap: 14px;
  }
  .shot {
    height: 150px;
  }
}
</style>
