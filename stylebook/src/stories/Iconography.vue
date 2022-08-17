<script setup lang="ts">
import nounsfile from '../../../src/assets/proprietary/icons/nouns.json';
import { ref } from 'vue'
import { computed } from '@vue/reactivity';

const onSurface = ref(false)
const invert = ref(false)

const forceLight = computed(() => {
  if (onSurface.value) {
    return document.body.classList.contains('cyan--mode--dark') && !invert.value
  }
  return document.body.classList.contains('cyan--mode--dark') && invert.value
})
const forceDark = computed(() => {
  if (onSurface.value) {
    return document.body.classList.contains('cyan--mode--light') && !invert.value
  }
  return document.body.classList.contains('cyan--mode--light') && invert.value
})

const iconlist = computed(() => {
  return nounsfile as Record<string, string>
})
</script>

<template>
  <article class="column">
    <section>
      <h1>Iconography</h1>
      <p>The icons are available onDark/dark and onBright/light variations.</p>
      <p style="vertical-align:middle;">
        <cyan-toggle label="On a surface" @checked="onSurface" @change="onSurface=!onSurface"></cyan-toggle>
      </p>
      <p>
        <cyan-toggle label="Invert icon color" @checked="invert" @change="invert=!invert"></cyan-toggle>
      </p>
      <div
        class="iconlist"
        :class="{ surface: onSurface }"
      >
        <div
          v-for="icon, key in iconlist"
          :key="icon"
          class="preview TypeCaption"
        >
          <cyan-icon
            :noun="key"
            :light="forceLight"
            :dark="forceDark"
          ></cyan-icon>
          <p>{{ icon }}</p>
        </div>
      </div>
    </section>
  </article>
</template>

<style scoped>
.preview {
  width: 80px;
  text-align: center;
  font-size: 12px;
  word-break: break-all;
}
.iconlist {
  margin: 12px;
  padding: 12px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  border-radius: 8px
}
.cyan--mode--light .surface {
  background-color: #065;
  color: #fff;
}
.cyan--mode--dark .surface {
  background-color: #3fa356;
  color: #121212;
}
</style>