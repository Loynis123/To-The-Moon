<script setup>
import { computed } from 'vue'

const props = defineProps({
  bounds: { type: Object, default: () => ({ min: 0, max: 0 }) },
  modelValue: { type: Object, default: () => ({ min: 0, max: 0 }) },
})
const emit = defineEmits(['update:modelValue'])

const lo = computed(() => props.bounds.min)
const hi = computed(() => props.bounds.max)
const clamp = (v, a, b) => Math.min(Math.max(v, a), b)

function setMin(v) {
  const min = clamp(Math.round(+v || lo.value), lo.value, props.modelValue.max)
  emit('update:modelValue', { min, max: props.modelValue.max })
}
function setMax(v) {
  const max = clamp(Math.round(+v || hi.value), props.modelValue.min, hi.value)
  emit('update:modelValue', { min: props.modelValue.min, max })
}
const fillStyle = computed(() => {
  const span = hi.value - lo.value || 1
  return {
    left: `${((props.modelValue.min - lo.value) / span) * 100}%`,
    right: `${((hi.value - props.modelValue.max) / span) * 100}%`,
  }
})
</script>

<template>
  <div class="price-filter">
    <div class="price-fields">
      <label class="price-field">
        <span>От</span>
        <input type="number" :value="modelValue.min" @change="setMin($event.target.value)" />
      </label>
      <span class="price-sep"></span>
      <label class="price-field">
        <span>До</span>
        <input type="number" :value="modelValue.max" @change="setMax($event.target.value)" />
      </label>
    </div>
    <div class="slider">
      <div class="slider-rail"></div>
      <div class="slider-fill" :style="fillStyle"></div>
      <input class="slider-input" type="range" :min="lo" :max="hi" :value="modelValue.min" @input="setMin($event.target.value)" />
      <input class="slider-input" type="range" :min="lo" :max="hi" :value="modelValue.max" @input="setMax($event.target.value)" />
    </div>
  </div>
</template>

<style scoped>
.price-fields {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 22px;
}
.price-field {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 9px 14px;
  border: 1px solid var(--line-strong);
  border-radius: 8px;
}
.price-field span {
  font-size: 12px;
  color: var(--muted);
}
.price-field input {
  border: none;
  outline: none;
  background: transparent;
  font-size: 15px;
  color: var(--ink);
  width: 100%;
}
.price-sep {
  width: 14px;
  height: 1px;
  background: var(--line-strong);
}
.slider {
  position: relative;
  height: 26px;
  display: flex;
  align-items: center;
}
.slider-rail {
  position: absolute;
  left: 0;
  right: 0;
  height: 4px;
  border-radius: 2px;
  background: var(--line-strong);
}
.slider-fill {
  position: absolute;
  height: 4px;
  border-radius: 2px;
  background: var(--accent);
}
.slider-input {
  position: absolute;
  left: 0;
  width: 100%;
  margin: 0;
  background: none;
  pointer-events: none;
  -webkit-appearance: none;
  appearance: none;
}
.slider-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  pointer-events: auto;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--accent);
  border: 3px solid var(--surface);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  cursor: pointer;
}
.slider-input::-moz-range-thumb {
  pointer-events: auto;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--accent);
  border: 3px solid var(--surface);
  cursor: pointer;
}
</style>
