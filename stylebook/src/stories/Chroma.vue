<script lang="ts" setup>
import ColorDemo from '../components/ColorDemo.vue'

</script>
<template>
  <article class="Column">
    <h1>Chromatic color scales</h1>
    <section>
      <h2>Primary palette</h2>
      <ColorDemo hex="#006655" var="--chroma-primary-a" />
    </section>
  // Primary palette:
  // https://gka.github.io/palettes/#/9|s|006655,00c853,eeff41|ffffe0,ff005e,006c09|1|1
  :
  --chroma-primary-b:#127a56
  --chroma-primary-c:#288f56
  --chroma-primary-d:#3fa356
  --chroma-primary-e:#5ab754
  --chroma-primary-f:#79cb51
  --chroma-primary-g:#9bdd4d
  --chroma-primary-h:#c2ef48
  --chroma-primary-i:#eeff41

  // Secondary palette:
  // https://gka.github.io/palettes/#/9|s|002337,05e7fb,e7fbfb|ffffe0,ff005e,006c09|1|1
  --chroma-secondary-a: #002337
  --chroma-secondary-b: #043c50
  --chroma-secondary-c: #10566b
  --chroma-secondary-d: #227286
  --chroma-secondary-e: #388ea1
  --chroma-secondary-f: #53abbb
  --chroma-secondary-g: #76c8d5
  --chroma-secondary-h: #a2e4ec
  --chroma-secondary-i: #e7fbfb

  --chroma-dark-secondary-a: #0e1317
  --chroma-dark-secondary-b: #1a2c39
  --chroma-dark-secondary-c: #28465c
  --chroma-dark-secondary-d: #3c627d
  --chroma-dark-secondary-e: #567f9c
  --chroma-dark-secondary-f: #759db9
  --chroma-dark-secondary-g: #98bcd2
  --chroma-dark-secondary-h: #bedbe8
  --chroma-dark-secondary-i: #e7fbfb

  // Alerts:
  --chroma-alert: #bb1187
  --chroma-alert-field-tint: rgba(187, 17, 135, 0.4) 
  // was: #f1cfe7
  </article>
</template>