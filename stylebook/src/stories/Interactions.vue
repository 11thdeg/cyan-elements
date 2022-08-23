<script setup lang="ts">
import { ref } from 'vue';

const loader1 = ref(false)
const loader2 = ref(false)
</script>
<template>
  <article class="column" id="Inputs">
    <h1>Interactions</h1>
    <section>
      <cyan-toggle :checked="loader1" label="Loader 1" @change="loader1 = !loader1"></cyan-toggle>
      <cyan-loader :active="loader1"></cyan-loader>
    </section>
    <section>
      <cyan-toggle :checked="loader2" label="Loader 2" @change="loader2 = !loader2"></cyan-toggle>
      <cyan-loader :active="loader2" size="large"></cyan-loader>
    </section>
  </article>
</template>