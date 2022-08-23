<script setup lang="ts">
import { ref } from 'vue';

const loader1 = ref(true)
const loader2 = ref(true)
</script>
<template>
  <article class="column" id="Inputs">
    <h1>Interactions</h1>
    <section class="toolbar">
      <div><cyan-toggle :checked="loader1" label="Loader 1" @change="loader1 = !loader1"></cyan-toggle></div>
      <cyan-save-interaction :active="loader1"></cyan-save-interaction>
    </section>
    <section class="toolbar">
      <div><cyan-toggle :checked="loader2" label="Loader 2" @change="loader2 = !loader2"></cyan-toggle></div>
      <cyan-save-interaction :active="loader2" large></cyan-save-interaction>
    </section>
  </article>
</template>

<style scoped lang="sass">
.toolbar
  display: flex
  align-items: center
  margin-bottom: 12px
  gap: 12px
  
</style>