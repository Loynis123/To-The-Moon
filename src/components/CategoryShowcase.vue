<script setup></script>

<template>
  <section class="showcase">
    <article class="cell keeb">
      <img class="img" src="/imgs/keeb-apex.jpg" alt="SteelSeries Apex Pro TKL" />
      <div class="body">
        <h3 class="title-lg">Apex Pro TKL</h3>
        <p class="desc">Adjustable OmniPoint switches and an aluminium frame — actuate exactly how you want.</p>
      </div>
    </article>

    <article class="cell headset">
      <img class="img" src="/imgs/headset-nova.jpg" alt="NOVA Pro Wireless" />
      <div class="body">
        <h3 class="title-lg">NOVA <em>Pro</em></h3>
        <p class="desc">Dual-wireless, hot-swap batteries and spatial audio — our flagship, tuned for the podium.</p>
        <router-link to="/products" class="btn-solid cta-btn">Shop Now</router-link>
      </div>
    </article>

    <article class="cell mouse">
      <img class="img" src="/imgs/mouse-deathadder.jpg" alt="Razer DeathAdder V3" />
      <div class="body">
        <h3 class="title-md">DeathAdder V3</h3>
        <p class="desc">59 g, Focus Pro 30K sensor — pure aim.</p>
      </div>
    </article>

    <article class="cell mic">
      <img class="img" src="/imgs/mic-quadcast.jpg" alt="HyperX QuadCast S" />
      <div class="body">
        <h3 class="title-md">QuadCast S</h3>
        <p class="desc">Studio-grade voice with tap-to-mute and RGB.</p>
      </div>
    </article>
  </section>
</template>

<style scoped>
.showcase {
  display: grid;
  grid-template-columns: 370fr 393fr 677fr;
  grid-template-rows: 300px 300px;
  grid-template-areas:
    'keeb keeb headset'
    'mouse mic headset';
  gap: 2px;
  background: var(--line);
}
.keeb {
  grid-area: keeb;
}
.headset {
  grid-area: headset;
}
.mouse {
  grid-area: mouse;
}
.mic {
  grid-area: mic;
}

/* Each tile is a full-bleed photo with a dark scrim so the copy stays legible. */
.cell {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  background: var(--surface);
}
.img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}
.cell::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(to top, rgba(7, 9, 14, 0.94) 0%, rgba(7, 9, 14, 0.6) 38%, rgba(7, 9, 14, 0.1) 100%);
}
.body {
  position: relative;
  z-index: 2;
  padding: 28px 30px;
  max-width: 440px;
  color: var(--white);
}
.title-lg {
  font-size: 32px;
  font-weight: 700;
  font-style: italic;
  line-height: 1.08;
  margin-bottom: 8px;
}
.title-md {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.12;
  margin-bottom: 8px;
}
.title-lg em,
.title-md em {
  color: var(--accent);
  font-style: italic;
}
.desc {
  font-size: 14px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.78);
  max-width: 320px;
}
.cta-btn {
  margin-top: 18px;
}

@media (max-width: 900px) {
  .showcase {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      'keeb keeb'
      'headset headset'
      'mouse mic';
  }
  .cell {
    min-height: 240px;
  }
}
@media (max-width: 600px) {
  .showcase {
    grid-template-columns: 1fr;
    grid-template-areas:
      'keeb'
      'headset'
      'mouse'
      'mic';
  }
  .cell {
    min-height: 210px;
  }
  .title-lg {
    font-size: 28px;
  }
}
</style>
