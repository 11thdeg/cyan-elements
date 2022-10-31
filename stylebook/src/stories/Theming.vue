<script lang="ts" setup>
import { ref } from 'vue';
import ColorVar from '../components/ColorVar.vue'

const nouns = ref(['fox'])

</script>
<template>
  <article class="Column">
    <h1>Theming</h1>

    <section class="card rise-a">
      <cyan-toolbar>
        <cyan-lightmode-toggle />
        <h1 class="TypeBody5">Dark/Light mode</h1>
      </cyan-toolbar>
    </section>

    <section>
      <h2>Cyan themed element</h2>
      <cyan-code>{{ '<cyan-themed-element>' }}</cyan-code> should be extended to react to the dark/light mode 
        and apply the correct theme.
      <cyan-button label="Add an Icon" @click="nouns.push('fox')" />
      <cyan-toolbar class="rise-b">
        <cyan-icon v-for="noun, i in nouns" :noun="noun" :key="i"/>
      </cyan-toolbar>
    </section>

    <p>Dark Mode Toggle <cyan-lightmode-toggle /></p>
    <h2>Base color vars</h2>
    <ColorVar var="--cyan-background-color" />
    <ColorVar var="--cyan-low-emphasis-color" />
    <ColorVar var="--cyan-text-color" />
    <ColorVar var="--cyan-high-emphasis-color" />
    <h3>Boxes and bubbles</h3>
    <ColorVar var="--cyan-bubble-background-color-a" />
    <ColorVar var="--cyan-bubble-background-color-b" />

    <section class="card" style="background: var(--cyan-background-overlay-dark);">
      <cyan-code>style="background: var(--cyan-background-overlay-dark);</cyan-code>
    </section>
  </article>
</template>