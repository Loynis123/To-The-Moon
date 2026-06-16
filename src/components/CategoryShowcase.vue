<script setup>
// Product photos intentionally left as empty space — filled later.
</script>

<template>
  <section class="showcase">
    <article class="cell keeb">
      <img class="img img-keeb" src="/imgs/keeb-apex.jpg" alt="SteelSeries Apex Pro TKL" />
      <div class="body">
        <h3 class="title-lg">Apex Pro TKL</h3>
        <p class="desc">
          Adjustable OmniPoint switches and an aluminium frame — actuate exactly how you want, key by
          key.
        </p>
      </div>
    </article>

    <article class="cell headset">
      <img class="img img-headset" src="/imgs/headset-nova.jpg" alt="NOVA Pro Wireless" />
      <div class="body">
        <h3 class="title-lg">NOVA <em>Pro</em></h3>
        <p class="desc">
          Dual-wireless, hot-swap batteries and spatial audio. Our flagship headset, tuned for the
          podium.
        </p>
        <router-link to="/products" class="btn-solid cta-btn">Shop Now</router-link>
      </div>
    </article>

    <article class="cell mouse">
      <img class="img img-mouse" src="/imgs/mouse-deathadder.jpg" alt="Razer DeathAdder V3" />
      <div class="body">
        <h3 class="title-md">DeathAdder<br />V3</h3>
        <p class="desc">59 g, Focus Pro 30K sensor — pure aim.</p>
      </div>
    </article>

    <article class="cell mic">
      <img class="img img-mic" src="/imgs/mic-quadcast.jpg" alt="HyperX QuadCast S" />
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
  grid-template-rows: 321px 321px;
  grid-template-areas:
    'keeb keeb headset'
    'mouse mic headset';
}

.cell {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.body {
  position: relative;
  z-index: 1;
}
.img {
  position: absolute;
  z-index: 0;
  object-fit: contain;
  pointer-events: none;
}
.img-keeb {
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  height: 88%;
  max-width: 300px;
}
.img-headset {
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  height: 82%;
  max-width: 360px;
}
.img-mouse {
  left: 6px;
  top: 50%;
  transform: translateY(-50%);
  height: 98%;
  max-width: 190px;
}
.img-mic {
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  height: 86%;
  max-width: 210px;
}

.keeb {
  grid-area: keeb;
  background: var(--surface);
}
.keeb .body {
  padding-left: 330px;
  padding-right: 40px;
  max-width: 640px;
}

.headset {
  grid-area: headset;
  background: var(--panel);
}
.headset .body {
  padding-left: 48px;
  max-width: 250px;
}

.mouse {
  grid-area: mouse;
  background: var(--panel);
}
.mouse .body {
  padding-left: 210px;
  padding-right: 20px;
}

.mic {
  grid-area: mic;
  background: var(--dark-cell);
  color: var(--white);
}
.mic .body {
  padding-left: 230px;
  padding-right: 20px;
}

.title-lg {
  font-size: 36px;
  font-weight: 500;
  font-style: italic;
  line-height: 1.1;
  margin-bottom: 14px;
  color: inherit;
}
.title-lg em {
  font-style: italic;
}
.headset .title-lg {
  font-style: normal;
}
.headset .title-lg em {
  font-style: italic;
}

.title-md {
  font-size: 26px;
  font-weight: 500;
  line-height: 1.14;
  margin-bottom: 12px;
  color: inherit;
}

.desc {
  font-size: 14px;
  line-height: 1.5;
  color: var(--muted);
  max-width: 300px;
}
.mic .desc {
  color: #b9b9b9;
}

.cta-btn {
  margin-top: 22px;
}

@media (max-width: 900px) {
  .showcase {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      'keeb keeb'
      'headset headset'
      'mouse mic';
  }
  .cell {
    min-height: 280px;
  }
  .keeb .body {
    padding-left: 40px;
  }
  .mouse .body,
  .mic .body {
    padding-left: 40px;
  }
}

@media (max-width: 600px) {
  /* Stack full-width cells, image on top, centered text (matches mobile mockup). */
  .showcase {
    grid-template-columns: 1fr;
    grid-template-areas:
      'mouse'
      'mic'
      'keeb'
      'headset';
  }
  .cell {
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-height: 0;
    padding: 44px 24px 48px;
  }
  /* Images become normal flow elements, centered above the text. */
  .img {
    position: static;
    transform: none;
    height: auto;
    width: auto;
    max-width: 72%;
    max-height: 230px;
    margin: 0 auto 26px;
  }
  .body {
    padding: 0 !important;
    max-width: 420px !important;
    width: 100%;
  }
  .desc {
    max-width: 100%;
    margin: 0 auto;
  }
  .title-lg {
    font-size: 30px;
  }
  .title-md {
    font-size: 24px;
  }
  .cta-btn {
    width: 100%;
    margin-top: 26px;
  }
}
</style>
