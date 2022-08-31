<script setup lang="ts">
import Iconography from './stories/Iconography.vue';
import Intro from './Intro.vue';
import Inputs from './stories/Inputs.vue';
import Interactions from './stories/Interactions.vue';
import Menu from './stories/Menu.vue';
import Chroma from './stories/Chroma.vue';
import Atomics from './stories/Atomics.vue';
import Typography from './stories/Typography.vue';
import Buttons from './stories/Buttons.vue';
import { ref } from 'vue';

const layout = ref('dashboardLayout')

function setLayoutClass (layout:string) {
  const el = document.getElementById('layout');
  if (el) {
    el.className = layout;
  }
}
</script>

<template>
  <div class="cyan--app">
    <div style="text-align:center; padding:12px 0; border-bottom: solid 1px var(--chroma-primary-d)">
      <h1><cyan-icon noun="fox" large></cyan-icon>Cyan elements stylebook</h1>
      <select v-model="layout" @change="setLayoutClass(layout)">
        <option value="singleColumnLayout">singleColumnLayout</option>
        <option value="bookLayout">bookLayout</option>
        <option value="dashboardLayout">dashboardLayout</option>
      </select>
    </div>
    <main id="layout"> 
      <Intro />
      <Buttons />
      <Typography />
      <Atomics />
      <Chroma />
      <Menu />
      <Interactions />
      <Iconography />
      <Inputs /> 
    </main>
  </div>
</template>
