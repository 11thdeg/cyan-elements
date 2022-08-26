<script lang="ts" setup>
import ColorDemo from '../components/ColorDemo.vue'

</script>
<template>
  <article class="Column">
    <h1>Chromatic color scales</h1>
    <section>
      <h2>Primary palette</h2>
      <ColorDemo hex="#006655" var="--chroma-primary-a" />
      <ColorDemo hex="#127a56" var="--chroma-primary-b" />
      <ColorDemo hex="#288f56" var="--chroma-primary-c" />
      <ColorDemo hex="#3fa356" var="--chroma-primary-d" />
      <ColorDemo hex="#5ab754" var="--chroma-primary-e" />
      <ColorDemo hex="#79cb51" var="--chroma-primary-f" />
      <ColorDemo hex="#9bdd4d" var="--chroma-primary-g" />
      <ColorDemo hex="#c2ef48" var="--chroma-primary-h" />
      <ColorDemo hex="#eeff41" var="--chroma-primary-i" />
    </section>
    <section>
      <h2>Secondary palette</h2>
      <ColorDemo hex="#002337" var="--chroma-secondary-a" />
      <ColorDemo hex="#043c50" var="--chroma-secondary-b" />
      <ColorDemo hex="#10566b" var="--chroma-secondary-c" />
      <ColorDemo hex="#227286" var="--chroma-secondary-d" />
      <ColorDemo hex="#388ea1" var="--chroma-secondary-e" />
      <ColorDemo hex="#53abbb" var="--chroma-secondary-f" />
      <ColorDemo hex="#76c8d5" var="--chroma-secondary-g" />
      <ColorDemo hex="#a2e4ec" var="--chroma-secondary-h" />
      <ColorDemo hex="#e7fbfb" var="--chroma-secondary-i" />
    </section>
    <section>
      <h2>Secondary palette (on dark)</h2>
      <ColorDemo hex="#0e1317" var="--chroma-dark-secondary-a" />
      <ColorDemo hex="#1a2c39" var="--chroma-dark-secondary-b" />
      <ColorDemo hex="#28465c" var="--chroma-dark-secondary-c" />
      <ColorDemo hex="#3c627d" var="--chroma-dark-secondary-d" />
      <ColorDemo hex="#567f9c" var="--chroma-dark-secondary-e" />
      <ColorDemo hex="#759db9" var="--chroma-dark-secondary-f" />
      <ColorDemo hex="#98bcd2" var="--chroma-dark-secondary-g" />
      <ColorDemo hex="#bedbe8" var="--chroma-dark-secondary-h" />
      <ColorDemo hex="#e7fbfb" var="--chroma-dark-secondary-i" />
    </section>
    <section>
      <h2>Alert palette</h2>
      <ColorDemo hex="#bb1187" var="--chroma-alert" />
      <ColorDemo hex="#f1cfe7" var="--chroma-alert-field-tint" />
    </section>
  </article>
</template>