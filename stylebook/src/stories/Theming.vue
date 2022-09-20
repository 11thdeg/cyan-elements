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
  </article>
</template>