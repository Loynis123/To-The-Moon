<script setup></script>

<template>
  <section class="hero">
    <div class="container hero-inner">
      <div class="hero-copy">
        <p class="eyebrow">HyperX Cloud III</p>
        <h1 class="title">Услышь игру</h1>
        <p class="sub">Турнирный звук и снаряжение, которые дают тебе преимущество. Снаряжайся — to the moon.</p>
        <router-link to="/products" class="btn-solid hero-btn">В каталог</router-link>
      </div>
      <div class="hero-shot">
        <img src="/imgs/hyperx-cloud-hero.png" alt="HyperX Cloud III" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  background: radial-gradient(80% 120% at 78% 30%, rgba(194, 255, 71, 0.1), transparent 55%), var(--hero);
  color: var(--white);
}
.hero-inner {
  display: flex;
  align-items: center;
  gap: 40px;
  min-height: 480px;
}
.hero-copy {
  flex: 1;
  max-width: 560px;
}
.hero-shot {
  position: relative;
  flex: 0 0 46%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 430px;
}
/* Lime spotlight behind the product — reads as an intentional stage, not a tile. */
.hero-shot::before {
  content: '';
  position: absolute;
  width: 440px;
  height: 440px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(194, 255, 71, 0.16), rgba(194, 255, 71, 0.04) 45%, transparent 70%);
  filter: blur(6px);
}
.hero-shot img {
  position: relative;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 28px 55px rgba(0, 0, 0, 0.55));
}
.eyebrow {
  font-size: 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 14px;
}
.title {
  font-size: 64px;
  font-weight: 800;
  font-style: italic;
  line-height: 1.02;
  letter-spacing: -0.01em;
  margin-bottom: 18px;
}
.sub {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  max-width: 440px;
  margin-bottom: 30px;
}

@media (max-width: 860px) {
  .hero-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    min-height: 0;
    padding-top: 56px;
    padding-bottom: 56px;
  }
  .hero-shot {
    flex: none;
    width: 100%;
    height: 300px;
  }
  .title {
    font-size: 46px;
  }
}
@media (max-width: 600px) {
  .title {
    font-size: 38px;
  }
  .hero-shot {
    height: 240px;
  }
}
</style>
