<script setup>
import { ref, computed } from 'vue'

const props = defineProps({ catalog: { type: Array, default: () => [] } })

const desc =
  'Турнирное снаряжение с минимальной задержкой и комфортом на весь день — создано побеждать.'

const RAW = [
  { title: 'Arctis Nova 1', name: 'SteelSeries Arctis Nova 1', theme: 'light', image: '/imgs/steelseries-arctis-nova-1.png' },
  { title: 'Model O', name: 'Glorious Model O', theme: 'gray', image: '/imgs/glorious-model-o.jpg' },
  { title: 'Kumara K552', name: 'Redragon Kumara K552', theme: 'gray', image: '/imgs/redragon-kumara-k552.webp' },
  { title: 'G435', name: 'Logitech G435 LIGHTSPEED', theme: 'dark', image: '/imgs/logitech-g435.webp' },
]

// Each banner deep-links to its product once the catalog has loaded.
const banners = computed(() =>
  RAW.map((b) => ({ ...b, id: props.catalog.find((x) => x.name === b.name)?.id ?? null })),
)

// Mobile carousel state (dots). Desktop renders the grid and ignores this.
const track = ref(null)
const active = ref(0)
function onScroll() {
  const el = track.value
  if (el) active.value = Math.round(el.scrollLeft / el.clientWidth)
}
function goTo(i) {
  const el = track.value
  if (el) el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' })
}
</script>

<template>
  <section class="promos-wrap">
    <div ref="track" class="promos" @scroll.passive="onScroll">
      <article v-for="b in banners" :key="b.title" class="promo" :class="b.theme">
        <div class="photo"><img :src="b.image" :alt="b.title" /></div>
        <h3 class="title">{{ b.title }}</h3>
        <p class="desc">{{ desc }}</p>
        <router-link :to="b.id ? `/product/${b.id}` : '/products'" class="btn-outline" :class="{ 'on-dark': b.theme === 'dark' }">Купить</router-link>
      </article>
    </div>

    <div class="dots">
      <button
        v-for="(b, i) in banners"
        :key="b.title"
        class="dot"
        :class="{ on: i === active }"
        :aria-label="`Go to ${b.title}`"
        @click="goTo(i)"
      />
    </div>
  </section>
</template>

<style scoped>
.promos {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.promo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  min-height: 420px;
}
.promo.light {
  background: var(--surface);
}
.promo.gray {
  background: var(--panel-2);
}
.promo.dark {
  background: var(--dark);
  color: var(--white);
}

.photo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  margin-bottom: 22px;
  padding: 16px;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
}
.photo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.title {
  font-size: 28px;
  font-weight: 500;
  color: inherit;
  margin-bottom: 12px;
}
.desc {
  font-size: 14px;
  line-height: 1.55;
  color: var(--muted);
  margin-bottom: 22px;
  max-width: 250px;
}
.promo.dark .desc {
  color: #b3b3b3;
}

/* Dots are mobile-only */
.dots {
  display: none;
}

@media (max-width: 900px) {
  .promos {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  /* Horizontal swipe carousel with dot indicators (matches mobile mockup). */
  .promos {
    display: flex;
    grid-template-columns: none;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .promos::-webkit-scrollbar {
    display: none;
  }
  .promo {
    flex: 0 0 100%;
    scroll-snap-align: center;
    align-items: center;
    text-align: center;
    min-height: 380px;
    padding: 40px 28px;
  }
  .desc {
    max-width: 320px;
  }
  .dots {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 22px 0 4px;
  }
  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--line-strong);
    transition: background 0.15s ease, width 0.15s ease;
  }
  .dot.on {
    width: 22px;
    border-radius: 4px;
    background: var(--ink);
  }
}
</style>
