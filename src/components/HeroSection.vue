<script setup></script>

<template>
  <section class="hero">
    <img class="hero-img" src="/imgs/headset-nova.jpg" alt="NOVA Pro Wireless" />
    <div class="container hero-inner">
      <div class="hero-copy">
        <p class="eyebrow">NOVA Pro Wireless</p>
        <h1 class="title">Hear the Game</h1>
        <p class="sub">Low-latency wireless and spatial audio that put you a step ahead. Gear up — to the moon.</p>
        <router-link to="/products" class="btn-solid hero-btn">Shop Now</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  background: var(--hero);
  color: var(--white);
}
.hero-inner {
  display: flex;
  align-items: center;
  min-height: 632px;
}
.hero-copy {
  position: relative;
  z-index: 2;
  max-width: 600px;
}
.hero-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 70% center;
  z-index: 0;
  pointer-events: none;
}
/* Scrim so the copy stays readable over the photo. */
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(90deg, rgba(7, 9, 14, 0.94) 0%, rgba(7, 9, 14, 0.7) 38%, rgba(7, 9, 14, 0.15) 70%, rgba(7, 9, 14, 0.45) 100%);
}
.eyebrow {
  font-size: 16px;
  font-style: italic;
  color: #8a8a8f;
  margin-bottom: 12px;
}
.title {
  font-size: 72px;
  font-weight: 400;
  line-height: 1.04;
  letter-spacing: -0.01em;
  white-space: nowrap;
  margin-bottom: 16px;
}
.sub {
  font-size: 16px;
  font-style: italic;
  color: #9c9c9f;
  margin-bottom: 30px;
}
.hero-btn {
  border-color: rgba(255, 255, 255, 0.85);
}

@media (max-width: 860px) {
  .hero-inner {
    min-height: 460px;
  }
  .title {
    font-size: 48px;
    white-space: normal;
  }
}

@media (max-width: 600px) {
  .hero-inner {
    min-height: 440px;
    text-align: center;
    justify-content: center;
  }
  .hero-copy {
    max-width: 100%;
  }
  .hero::before {
    background: rgba(7, 9, 14, 0.72);
  }
  .title {
    font-size: 40px;
    white-space: normal;
  }
}
</style>
