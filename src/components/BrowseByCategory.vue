<script setup>
import { filters, setCategory } from '../store.js'

// Inline (Lucide-style) icons keep this to a single file — no icon assets.
const categories = [
  { label: 'Headsets', icon: '<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4a1 1 0 0 1-1-1v-7a9 9 0 0 1 18 0v7a1 1 0 0 1-1 1h-2a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>' },
  { label: 'Keyboards', icon: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h.01M12 12h.01M16 12h.01M7 16h10"/>' },
  { label: 'Mice', icon: '<rect x="5" y="2" width="14" height="20" rx="7"/><path d="M12 6v4"/>' },
  { label: 'Controllers', icon: '<line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="15" x2="15.01" y1="13" y2="13"/><line x1="18" x2="18.01" y1="11" y2="11"/><rect width="20" height="12" x="2" y="6" rx="6"/>' },
  { label: 'Microphones', icon: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>' },
]

function scrollToCatalog() {
  document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function onChip(label) {
  setCategory(label)
  if (filters.category) scrollToCatalog()
}

function step(dir) {
  const labels = categories.map((c) => c.label)
  const cur = labels.indexOf(filters.category)
  const next = cur === -1 ? (dir > 0 ? 0 : labels.length - 1) : (cur + dir + labels.length) % labels.length
  filters.category = labels[next]
  scrollToCatalog()
}
</script>

<template>
  <section class="browse">
    <div class="container">
      <div class="head">
        <h2 class="heading">Browse By Category</h2>
        <div class="nav">
          <button class="nav-btn flip" aria-label="Previous category" @click="step(-1)"><img src="/icons/arrow.png" alt="" /></button>
          <button class="nav-btn" aria-label="Next category" @click="step(1)"><img src="/icons/arrow.png" alt="" /></button>
        </div>
      </div>

      <div class="grid">
        <button
          v-for="c in categories"
          :key="c.label"
          class="chip"
          :class="{ active: filters.category === c.label }"
          @click="onChip(c.label)"
        >
          <svg class="chip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" v-html="c.icon" />
          <span class="chip-label">{{ c.label }}</span>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.browse {
  padding: 70px 0 10px;
}
.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
}
.heading {
  font-size: 32px;
  font-weight: 600;
  font-style: italic;
  color: var(--ink);
}
.nav {
  display: inline-flex;
  gap: 18px;
}
.nav-btn {
  display: inline-flex;
  transition: opacity 0.15s ease;
}
.nav-btn img {
  width: 22px;
  height: 22px;
}
.nav-btn.flip img {
  transform: scaleX(-1);
}
.nav-btn:hover {
  opacity: 0.5;
}

.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 28px;
}
.chip {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  height: 128px;
  background: var(--chip);
  border-radius: 12px;
  color: var(--ink);
  transition: background 0.15s ease;
}
.chip:hover {
  background: var(--surface-2);
}
.chip.active {
  background: var(--surface-2);
  outline: 2px solid var(--accent);
  outline-offset: -2px;
  color: var(--accent);
}
.chip-icon {
  width: 44px;
  height: 44px;
  object-fit: contain;
}
.chip-label {
  font-size: 16px;
  font-style: italic;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 600px) {
  .browse {
    padding: 48px 0 10px;
  }
  .heading {
    font-size: 24px;
  }
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  .chip {
    height: 150px;
    gap: 16px;
  }
  .chip-icon {
    width: 40px;
    height: 40px;
  }
  .chip-label {
    font-size: 15px;
  }
}
</style>
