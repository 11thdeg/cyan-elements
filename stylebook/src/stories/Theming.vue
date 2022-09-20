<script lang="ts" setup>
import ColorVar from '../components/ColorVar.vue';

</script>
<template>
  <article class="Column">
    <h1>Theming</h1>
    <p>Dark Mode Toggle <cyan-lightmode-toggle /></p>
    <h2>Base color vars</h2>
    <ColorVar var="--cyan-background-color" />
    <ColorVar var="--cyan-low-emphasis-color" />
    <ColorVar var="--cyan-text-color" />
    <ColorVar var="--cyan-high-emphasis-color" />
    <h3>Boxes and bubbles</h3>
    <ColorVar var="--cyan-bubble-background-color-a" />
    <ColorVar var="--cyan-bubble-background-color-b" />
  </article>
</template>