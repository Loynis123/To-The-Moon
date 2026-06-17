<script setup></script>

<template>
  <section class="sale">
    <div class="inner">
      <h2 class="title">Распродажа <em>Level-Up</em></h2>
      <p class="sub">До -40% на профессиональное снаряжение. Самое время обновить сетап перед новым сезоном.</p>
      <router-link to="/products" class="btn-solid">Купить</router-link>
    </div>
  </section>
</template>

<style scoped>
.sale {
  position: relative;
  overflow: hidden;
  background: radial-gradient(120% 140% at 50% 50%, #36343a 0%, #2c2c2c 45%, #1c1b1f 100%);
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  padding: 60px 24px;
  text-align: center;
}
.inner {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  font-size: 56px;
  font-weight: 400;
  margin-bottom: 12px;
}
.title em {
  font-style: italic;
}
.sub {
  font-size: 14px;
  color: #a5a5a5;
  margin-bottom: 26px;
}

@media (max-width: 560px) {
  .title {
    font-size: 40px;
  }
}
</style>
